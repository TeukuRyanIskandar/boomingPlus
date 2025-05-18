"use client"

import Typography from "@/components/Typography";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-4">

      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(/artdeco.webp)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-black/60 z-10" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full z-20">
        <Typography
          variant="h1"
          align="left"
          fontSize="2rem"
        >
          Lorem ipsum slogan
        </Typography>
        <Typography
          font="Inter"
          align="left"
        >
          BoomingPlus Studio
        </Typography>
        <Button asChild>
          <Link href="/booking">Book now</Link>
        </Button>
      </div>
    </div>
  );
}