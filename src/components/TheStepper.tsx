"use client"

import * as React from "react"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link"
import { detailsSchema, DetailsFormData } from "@/types/booking.types";

import { CalendarDays, HomeIcon, ScrollText, Image, ShoppingCart } from "lucide-react"
import { defineStepper } from "@/components/ui/stepper"
import { Button } from "@/components/ui/button"
import TheTheme from "@/components/dashboard/TheTheme"
import TheDateTime from "@/components/dashboard/TheDateTime"
import TheDetails from "@/components/dashboard/TheDetails"
import TheCheckout from "./dashboard/TheCheckout"
import { useBooking } from "@/context/BookingContext";
import { useStepValidation } from "@/hooks/useStepValidation";

const { Stepper } = defineStepper(
  {
    id: "theme",
    title: "Theme",
    icon: <Image />,
  },
  {
    id: "dateTime",
    title: "Session",
    icon: <CalendarDays />,
  },
  {
    id: "details",
    title: "Details",
    icon: <ScrollText />,
  },
  {
    id: "checkout",
    title: "Checkout",
    icon: <ShoppingCart />,
  }
)

export function TheStepper() {
  const { bookingData, setBookingData } = useBooking();

  const form = useForm<DetailsFormData>({
    resolver: zodResolver(detailsSchema),
    defaultValues: {
      name: bookingData.details?.name || "",
      email: bookingData.details?.email || "",
      phoneNumber: bookingData.details?.phoneNumber || "",
    },
  });

  const { validateCurrentStep, canAccessStep } = useStepValidation(form);

  const handleNext = async (methods: any) => {
    if (methods.current.id === "details") {
      return form.handleSubmit((data) => {
        setBookingData((prev) => ({ ...prev, details: data }));
        methods.next();
      })();
    }

    if (methods.isLast) return methods.reset();

    const canProceed = await methods.beforeNext(() => 
      validateCurrentStep(methods.current.id)
    );

    if (canProceed) methods.next();
  };

return (
    <Stepper.Provider className="space-y-4" variant="horizontal" labelOrientation="vertical">
      {({ methods }) => (
        <React.Fragment>
          <Stepper.Navigation>
            {methods.all.map((step) => (
              <Stepper.Step 
                key={step.id} 
                of={step.id}
                onClick={() => canAccessStep(step.id) && methods.goTo(step.id)}
                icon={step.icon}
                disabled={!canAccessStep(step.id)}
              >
                <Stepper.Title>{step.title}</Stepper.Title>
              </Stepper.Step>
            ))}
          </Stepper.Navigation>
          {methods.switch({
            theme: () => <TheTheme />,
            dateTime: () => <TheDateTime />,
            details: () => <TheDetails form={form} />,
            checkout: () => <TheCheckout />
          })}
           <Stepper.Controls className="flex justify-between">
            {methods.isFirst ? (
              <Button variant="secondary" asChild>
                <Link href="/">
                  <HomeIcon />
                </Link>
              </Button>
            ) : (
              <Button variant="secondary" onClick={methods.prev}>Back</Button>
            )}
            <Button
              onClick={() => handleNext(methods)}
              disabled={!validateCurrentStep(methods.current.id)}
            >
              {methods.isLast ? "Reset" : "Next"}
            </Button>
          </Stepper.Controls>
        </React.Fragment>
      )}
    </Stepper.Provider>
  );
}