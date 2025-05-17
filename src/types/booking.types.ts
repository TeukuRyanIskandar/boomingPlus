import { JSX } from "react";
import { z } from "zod";

export type ThemeType = {
  id: number;
  title: string;
  subtitle: string;
  price: string;
  background: string;
};

export type PaymentMethodType = {
  id: number;
  method: string;
  logo: JSX.Element;
  title: string;
  subtitle: string;
};

export type DetailsType = {
  name: string;
  email: string;
  phoneNumber: string;
};

export type BookingDataType = {
  theme?: ThemeType;
  dateTime?: Date;
  details?: DetailsType;
  paymentMethod?: PaymentMethodType;
};

export const detailsSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phoneNumber: z
    .string()
    .min(10, "Phone number too short")
    .max(15, "Phone number too long")
    .regex(/^(\+?6?01)[0-46-9]-?[0-9]{7,8}$/, {
      message: "Invalid Malaysian phone number",
    }),
});

export type DetailsFormData = z.infer<typeof detailsSchema>;