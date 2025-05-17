import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useBooking } from "@/context/BookingContext";
import { themeData } from "@/data/ThemeData";
import { format } from "date-fns";

export default function TheCheckout() {
  const { bookingData } = useBooking();
  const selectedTheme = themeData.find((t) => t.id === bookingData.theme?.id);
  
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
            <p className="font-bold">{selectedTheme?.title || "Not selected"}</p>
          </div>
          <div className="flex justify-between w-full">
            <p>Date & Time</p>
            <p className="font-bold">
              {bookingData.dateTime ? format(bookingData.dateTime, "MM/dd/yyyy hh:mm a") : "Not selected"}
            </p>
          </div>
          <div className="flex justify-between w-full">
            <p>Name</p>
            <p className="font-bold">{bookingData.details?.name || "Not provided"}</p>
          </div>
          <div className="flex justify-between w-full">
            <p>Phone Number</p>
            <p className="font-bold">{bookingData.details?.phoneNumber || "Not provided"}</p>
          </div>
          <div className="flex justify-between w-full">
            <p>Email</p>
            <p className="font-bold">{bookingData.details?.email || "Not provided"}</p>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex justify-between w-full">
          <p>Subtotal</p>
          <p className="font-bold">
            {selectedTheme ? `RM${selectedTheme.price}` : "RM0"}
          </p>
        </div>
      </CardFooter>
    </Card>
  )
}