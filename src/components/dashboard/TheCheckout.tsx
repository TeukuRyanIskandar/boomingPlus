import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useBooking } from "@/context/BookingContext";
import { themeData } from "@/data/ThemeData";

export default function TheCheckout() {
  const { bookingData } = useBooking();
  const selectedTheme = themeData.find((t) => t.id === bookingData.themeId);

  return (
    <Card>
      <CardHeader className="">
        <div className="border-b-2 pb-4">
          <CardTitle className="text-center text-xl">Order Summary</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="">
        <div className="flex flex-col gap-4 border-b-2 pb-6">
          <div className="flex justify-between w-full">
            <p>Theme</p>
            <p className="font-bold">{selectedTheme?.title}</p>
          </div>
          <div className="flex justify-between w-full">
            <p>Date & Time</p>
            <p className="font-bold">05/12/2025 10:52 AM</p>
          </div>
          <div className="flex justify-between w-full">
            <p>Name</p>
            <p className="font-bold">Ryan Iskandar</p>
          </div>
          <div className="flex justify-between w-full">
            <p>Phone Number</p>
            <p className="font-bold">+601160995297</p>
          </div>
          <div className="flex justify-between w-full">
            <p>Email</p>
            <p className="font-bold">teukurian98@yahoo.com</p>
          </div>
          <div className="flex justify-between w-full">
            <p>Payment Method</p>
            <p className="font-bold">Touch n Go</p>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex justify-between w-full">
          <p>Subtotal</p>
          <p className="font-bold">RM199</p>
        </div>
      </CardFooter>
    </Card>
  )
}