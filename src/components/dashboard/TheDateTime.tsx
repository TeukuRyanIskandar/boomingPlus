"use client";

import { format } from "date-fns";
import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import TimeSelector from "@/components/ui/time-selector";


export default function SelectDate() {
  const [date, setDate] = useState(new Date());

  function handleDateSelect(selectedDate: Date | undefined) {
    if (selectedDate) {
      setDate(selectedDate);
    }
  }

  return (
    <>
      {/* displays date and time*/}
      <div className="border rounded-md p-4 mb-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <Calendar
            mode="single"
            selected={date}
            onSelect={handleDateSelect}
            className="w-1/2"
            disabled={(date) => date < new Date()}
            initialFocus
          />
          <TimeSelector
            selectedDate={date}
            onTimeChange={setDate}
            className="w-1/2"
          />
        </div>
        <div className="text-lg font-medium pt-4 text-center border-t-1">
          {date ? format(date, "MM/dd/yyyy hh:mm aa") : "No date selected"}
        </div>
      </div>
    </>
  );
}