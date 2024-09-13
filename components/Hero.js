import { Rowdies, Open_Sans } from "next/font/google";
import React from "react";
import Button from "./Button";
import Calendar from "./Calendar";
import Link from "next/link";
import CallToAction from "./CallToAction";
const rowdies = Rowdies({ subsets: ["latin"], weight: ["400"] });
const opensans = Open_Sans({ subsets: ["latin"] });

export default function Hero() {
  return (
    <div className="py-4 md:py-10 flex flex-col gap-8 sm:gap-10">
      <h1
        className={
          "text-5xl sm:text-6xl md:text-7xl text-center " + rowdies.className
        }
      >
        <span className="textGradient">Pray Now</span> helps you track your{" "}
        <span className="textGradient">daily</span> Prayer Schedule
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl text-center w-full mx-auto max-w-[600px]">
        Create your Prayer Schedule track it{" "}
        <span className="font-semibold">every day of every year.</span>
      </p>
      <CallToAction />
      <Calendar demo />
    </div>
  );
}
