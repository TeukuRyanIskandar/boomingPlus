import { CircleDollarSign, CreditCard } from "lucide-react";

export const PaymentMethodsData = [
  {
    id: 0,
    method: 'bank',
    logo: <CircleDollarSign />,
    title: 'Bank Transfer',
    subtitle: 'Direct payment to our business account',
  },
  {
    id: 1,
    method: 'card',
    logo: <CreditCard />,
    title: 'Credit/Debit Card',
    subtitle: 'Pay using your preferred card'
  }
]