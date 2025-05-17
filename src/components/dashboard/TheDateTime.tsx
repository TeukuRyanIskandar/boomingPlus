"use client";

import { format } from "date-fns";
import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import TimeSelector from "@/components/ui/time-selector";
import { useBooking } from "@/context/BookingContext";

export default function SelectDate() {
  const { bookingData, setBookingData } = useBooking();
  const selectedDate = bookingData.dateTime;
  
  const [date, setDate] = useState<Date>(selectedDate || new Date());

  const handleSelect = (dateTime: Date) => {
    setBookingData((prev) => ({
      ...prev,
      dateTime: prev.dateTime?.getTime() === dateTime.getTime() ? undefined : dateTime
    }));
  };

  function handleDateSelect(selectedDate: Date | undefined) {
    if (selectedDate) {
      setDate(selectedDate);
      handleSelect(selectedDate);
    }
  }

  return (
    <>
      <div className="border rounded-md p-4 mb-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <Calendar
            mode="single"
            selected={date}
            onSelect={(selectedDate) => handleDateSelect(selectedDate)}
            className="w-1/2"
            disabled={(date) => date < new Date()}
            initialFocus
          />
          {date && (
            <TimeSelector
              selectedDate={date}
              onTimeChange={(newTime) => {
                const newDate = new Date(date);
                newDate.setHours(newTime.getHours());
                newDate.setMinutes(newTime.getMinutes());
                setDate(newDate);
                handleSelect(newDate);
              }}
              className="w-1/2"
            />
          )}
        </div>
        <div className="text-lg font-medium pt-4 text-center border-t-1">
          {format(date, "MM/dd/yyyy hh:mm aa")}
        </div>
      </div>
    </>
  );
}