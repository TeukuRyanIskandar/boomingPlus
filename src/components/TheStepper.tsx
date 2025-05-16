"use client"

import { CalendarDays, HomeIcon, ScrollText, Image, HandCoins, ShoppingCart } from "lucide-react"
import * as React from "react"

import { defineStepper } from "@/components/ui/stepper"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import TheTheme from "@/components/dashboard/TheTheme"
import TheDateTime from "@/components/dashboard/TheDateTime"
import TheDetails from "@/components/dashboard/TheDetails"
import ThePaymentMethod from "./dashboard/ThePaymentMethod"
import TheCheckout from "./dashboard/TheCheckout"

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
    id: "payment",
    title: "Payment",
    icon: <HandCoins />,
  },
  {
    id: "checkout",
    title: "Checkout",
    icon: <ShoppingCart />,
  }
)

export function TheStepper() {
  return (
    <Stepper.Provider className="space-y-4" variant="horizontal" labelOrientation="vertical">
      {({ methods }) => (
        <React.Fragment>
          <Stepper.Navigation>
            {methods.all.map((step) => (
              <Stepper.Step key={step.id} of={step.id} onClick={() => methods.goTo(step.id)} icon={step.icon}>
                <Stepper.Title>{step.title}</Stepper.Title>
              </Stepper.Step>
            ))}
          </Stepper.Navigation>
          {methods.switch({
            theme: () => <TheTheme />,
            dateTime: () => <TheDateTime />,
            details: () => <TheDetails />,
            payment: () => <ThePaymentMethod />,
            checkout: () => <TheCheckout />
          })}
          <Stepper.Controls className="flex justify-between">
            {
              methods.isFirst && (
                <Button variant="secondary" asChild>
                  <Link href="/">
                    <HomeIcon />
                  </Link>
                </Button>
              )
            }
            {
              !methods.isFirst && (
                <Button variant="secondary" onClick={methods.prev}>Back</Button>
              )
            }
            <Button onClick={methods.isLast ? methods.reset : methods.next}>{methods.isLast ? "Reset" : "Next"}</Button>
          </Stepper.Controls>
        </React.Fragment>
      )}
    </Stepper.Provider>
  )
}
