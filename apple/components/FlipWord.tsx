import React from "react";
import { FlipWords } from "@/components/ui/flip-words";
// import 'bootstrap/dist/css/bootstrap.min.css';
export default function FlipWordsDemo() {
  const words = ["Apple","Innovative", "Creative", "Inspiring", "Influencing"];

  return (
    <div className="flex justify-center items-center px-0  w-[100%]">
      <div className="text-7xl mx-auto font-normal text-white dark:text-white w-[80%]  ">
        Welcome to <FlipWords words={words}/>
     
      </div>
    </div>
  );
}

