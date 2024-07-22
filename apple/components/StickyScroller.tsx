"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "Magnificent 16-Inch Display",
    description:
      "Immerse yourself in stunning visuals with our 16-inch display, delivering vibrant colors and crystal-clear clarity. Perfect for all your viewing needs, this expansive screen enhances every detail, making it ideal for work, entertainment, and creative projects.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Collaborative Editing
      </div>
    ),
  },
  {
    title: "Blazing-Fast M3 Pro Chip",
    description:
      "Experience unparalleled performance with the M3 Pro chip, designed to handle intensive tasks with ease. Its cutting-edge architecture delivers lightning-fast speeds and seamless multitasking, empowering you to tackle demanding projects effortlessly.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/linear.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "18GB Unified Memory & 1TB SSD Storage",
    description:
      "Enjoy smooth multitasking and swift data access with 18GB of unified memory paired with a 1TB SSD. This combination ensures rapid performance and ample space for all your applications and files.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Version control
      </div>
    ),
  },
  {
    title: "All-Day Battery Life with 96W USB-C Power Adapter",
    description:
      "Stay powered throughout your day with a battery designed for long-lasting use. The 96W USB-C Power Adapter ensures quick, efficient charging, so you’re always ready to go.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Running out of content
      </div>
    ),
  },
];
export default function StickyScrollRevealDemo() {
  return (
    <div className="p-10">
      <StickyScroll content={content} />
    </div>
  );
}
