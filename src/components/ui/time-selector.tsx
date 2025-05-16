"use client";

import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

interface TimeSelectorProps {
  selectedDate: Date;
  onTimeChange: (newDate: Date) => void;
  className?: string;
}

export default function TimeSelector({ selectedDate, onTimeChange, className }: TimeSelectorProps) {
  const timeSlots = generateTimeSlots("09:00 AM", "08:00 PM", 30);

  return (
    <div className={`flex flex-col gap-4 border-l p-4 ${className ?? ""}`}>
      <div>
        <p className="text-sm mb-2 font-medium text-center">Select Time</p>
        <ScrollArea className="h-[200px]">
          <div className="grid grid-cols-1 gap-2 p-2">
            {timeSlots.map((timeStr) => {
              const [hourStr, minuteStr, ampm] = timeStr.match(/(\d+):(\d+)\s(AM|PM)/)!.slice(1);
              const hour = parseInt(hourStr, 10) % 12 + (ampm === "PM" ? 12 : 0);
              const minute = parseInt(minuteStr, 10);
              const isSelected =
                selectedDate.getHours() === hour && selectedDate.getMinutes() === minute;

              return (
                <Button
                  key={timeStr}
                  size="sm"
                  variant={isSelected ? "default" : "outline"}
                  className="w-full"
                  onClick={() => {
                    const newDate = new Date(selectedDate);
                    newDate.setHours(hour);
                    newDate.setMinutes(minute);
                    onTimeChange(newDate);
                  }}
                >
                  {timeStr}
                </Button>
              );
            })}
          </div>
          <ScrollBar orientation="vertical" />
        </ScrollArea>
      </div>
    </div>
  );
}

function generateTimeSlots(start: string, end: string, intervalMinutes: number): string[] {
  const result: string[] = [];

  let current = new Date();
  const [startHour, startMinute, startPeriod] = start.match(/(\d+):(\d+)\s(AM|PM)/)!.slice(1);
  const [endHour, endMinute, endPeriod] = end.match(/(\d+):(\d+)\s(AM|PM)/)!.slice(1);

  current.setHours(
    parseInt(startHour) % 12 + (startPeriod === "PM" ? 12 : 0),
    parseInt(startMinute),
    0,
    0
  );

  const endTime = new Date(current);
  endTime.setHours(
    parseInt(endHour) % 12 + (endPeriod === "PM" ? 12 : 0),
    parseInt(endMinute),
    0,
    0
  );

  while (current <= endTime) {
    result.push(format(current, "hh:mm a"));
    current = new Date(current.getTime() + intervalMinutes * 60000);
  }

  return result;
}
