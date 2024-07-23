"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "Magnificent 16-Inch Display",
    description:
      "Immerse yourself in stunning visuals with our 16-inch display, delivering vibrant colors and crystal-clear clarity. Explore these amazing products and buy them.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="https://9to5mac.com/wp-content/uploads/sites/6/2023/01/macbook-pro-wallpaper.jpg?quality=82&strip=all"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Blazing-Fast M3 Pro Chip",
    description:
      "Experience unparalleled performance with the M3 Pro chip, designed to handle intensive tasks with ease. Its cutting-edge architecture delivers lightning-fast speeds.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="https://images.macrumors.com/t/9dQwZ9jVQa1sCWLcayIasoTlAQE=/1600x1200/smart/article-new/2021/12/m3-feature-black.jpg"
          width={500}
          height={400}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Connections on full display.",
    description:
      "Enjoy smooth multitasking and swift data access with 18GB of unified memory paired with a 1TB SSD. This combination ensures rapid performance and ample space for all your applications and files.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfW8NMQRzVw0p06E4qTt6V-LT9orK2MWF4TA&s"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "All-Day Battery Life with 96W USB-C Power Adapter",
    description:
      "Stay powered throughout your day with a battery designed for long-lasting use. The 96W USB-C Power Adapter ensures quick, efficient charging, so you’re always ready to go.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="https://static5.depositphotos.com/1054619/514/i/450/depositphotos_5141267-stock-photo-battery.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
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
