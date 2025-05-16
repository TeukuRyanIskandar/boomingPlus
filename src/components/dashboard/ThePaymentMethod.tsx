import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { PaymentMethodsData } from "@/data/PaymentMethodData"
import { useState } from "react"

export default function ThePaymentMethod() {
  const [selected, setSelected] = useState<"card" | "bank">("card")

  return (
    <div className="max-w-lg">
      <div className="flex flex-col sm:flex-row gap-4">
        {PaymentMethodsData.map((method) => {
          return (
            <Card
              key={method.id}
              onClick={() => setSelected(method.method as "card" | "bank")}
              className={cn(
                "cursor-pointer flex-1 border-2",
                selected === method.title
                  ? "border-primary bg-muted"
                  : "border-muted"
              )}
            >
              <CardContent className="p-4 flex flex-col items-start gap-1">
                {method.logo}
                <span className="font-medium">{method.title}</span>
                <span className="text-sm text-muted-foreground">{method.subtitle}</span>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
