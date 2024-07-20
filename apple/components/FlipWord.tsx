import React from "react";
import { FlipWords } from "@/components/ui/flip-words";

export default function FlipWordsDemo() {
  const words = ["Innovate", "Inspire", "Connect", "Unique"];

  return (
    <div className="h-[10rem] flex justify-center items-center px-4 w-[60%]">
      <div className="text-7xl mx-auto font-normal text-white dark:text-white  flex gap-7 flex-col">
   <h1 className="text-6xl"> Welcome to Apple</h1>
        <FlipWords words={words}/>

       <h3 className="text-3xl mt-6"> Explore our latest innovations, including the powerful <br/> new iPhone, the versatile iPad, and the high-performance MacBook. Our products are the best in the world</h3>
      </div>
    </div>
  );
}
