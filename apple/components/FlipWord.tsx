import React from "react";
import { FlipWords } from "@/components/ui/flip-words";
// import 'bootstrap/dist/css/bootstrap.min.css';
export default function FlipWordsDemo() {
  const words = ["Innovate", "Inspire", "Connect", "Unique"];

  return (
    <div className="h-[10rem] flex justify-center items-center px-4 w-[80%]">
      <div className="text-7xl mx-auto font-normal text-white dark:text-white  flex gap-7 flex-col w-[100%]">
   <h1 className="text-8xl" style={{width: "100%"}}> Welcome to Apple</h1>
        <FlipWords words={words}/>

       <h3 className="text-3xl mt-6"> Explore our latest innovations, including the <br />powerful new iPhone, the versatile iPad, and the high-performance MacBook.</h3>
      </div>
    </div>
  );
}

