"use client";

import React, { createContext, useContext, useState } from "react";
import { BookingDataType } from "@/types/booking.types";

type BookingContextType = {
  bookingData: BookingDataType;
  setBookingData: React.Dispatch<React.SetStateAction<BookingDataType>>;
};

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const BookingProvider = ({ children }: { children: React.ReactNode }) => {
  const [bookingData, setBookingData] = useState<BookingDataType>({});

  return (
    <BookingContext.Provider value={{ bookingData, setBookingData }}>
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error("useBooking must be used within a BookingProvider");
  }
  return context;
};
