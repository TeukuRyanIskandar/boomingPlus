import { TheStepper } from "@/components/TheStepper"
import { BookingProvider } from "@/context/BookingContext"

export default async function BookingPage() {
  return (
    <BookingProvider>
      <TheStepper />
    </BookingProvider>
  )
}
