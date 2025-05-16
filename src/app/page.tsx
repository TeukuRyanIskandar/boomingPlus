"use client"

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>This is home page</h1>
      <Button asChild>
        <Link href="/booking">Book now</Link>
      </Button>
    </div>
  );
}
