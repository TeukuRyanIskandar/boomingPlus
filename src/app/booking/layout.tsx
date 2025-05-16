import { Card } from "@/components/ui/card";

export default function BookingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-amber-200 px-4">
      <Card className="w-full max-w-xl bg-gray-50 text-gray-800 shadow-lg p-6">
        {children}
      </Card>
    </div>
  );
}
