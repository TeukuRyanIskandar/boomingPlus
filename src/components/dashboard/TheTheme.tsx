import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { themeData } from "@/data/ThemeData";
import { useBooking } from "@/context/BookingContext";

export default function TheTheme() {
  const { bookingData, setBookingData } = useBooking();
  const selectedId = bookingData.theme?.id;

  const handleSelect = (id: number) => {
    const selectedTheme = themeData.find((theme) => theme.id === id);

    setBookingData((prev) => ({
      ...prev,
      theme: prev.theme?.id === id ? undefined : selectedTheme,
    }));
  };


  return (
    <div className="flex flex-col gap-5">
      {themeData.map((theme) => (
        <Card
          key={theme.id}
          className={`relative hover:cursor-pointer border-4 transition-all duration-300 overflow-hidden text-white hover:scale-[0.98] hover:border-amber-400
            ${selectedId === theme.id ? "border-amber-600" : ""}`}
          onClick={() => handleSelect(theme.id)}
        >
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `url(${theme.background})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div className="absolute inset-0 bg-black/60 z-10" />

          <div className="relative z-20 pl-4 pr-4 pb h-full flex flex-col gap-8">
            <CardHeader>
              <CardTitle className="text-xl">{theme.title}</CardTitle>
              <CardDescription className="text-white">{theme.subtitle}</CardDescription>
            </CardHeader>
            <CardFooter className="flex justify-between">
              <div>
                <p className="text-xs">Price</p>
                <p className="text-xl">RM{theme.price}</p>
              </div>
              <Button
                variant="ghost"
                className={`${selectedId === theme.id
                    ? "bg-amber-600 text-white hover:text-amber-500"
                    : "bg-white text-amber-600 hover:text-white hover:bg-amber-500"
                  }`}
              >
                {selectedId === theme.id ? "Selected" : "Select Theme"}
              </Button>
            </CardFooter>
          </div>
        </Card>
      ))}
    </div>
  );
}
