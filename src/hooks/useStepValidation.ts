// hooks/useStepValidation.ts
import { useBooking } from "@/context/BookingContext";
import { useForm } from "react-hook-form";

export const useStepValidation = (form?: ReturnType<typeof useForm>) => {
  const { bookingData } = useBooking();

  const validateCurrentStep = (stepId: string): boolean => {
    switch (stepId) {
      case "theme":
        return !!bookingData.theme;
      case "dateTime":
        return !!bookingData.dateTime;
      case "details":
        return form ? form.formState.isValid : false;
      default:
        return true;
    }
  };

  const canAccessStep = (stepId: string): boolean => {
    const stepOrder = ["theme", "dateTime", "details", "checkout"];
    const currentIndex = stepOrder.indexOf(stepId);

    if (currentIndex <= 0) return true;

    for (let i = 0; i < currentIndex; i++) {
      if (!validateCurrentStep(stepOrder[i])) {
        return false;
      }
    }
    return true;
  };

  return { validateCurrentStep, canAccessStep };
};