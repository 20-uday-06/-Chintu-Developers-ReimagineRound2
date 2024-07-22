import React from "react";
import { FlipWords } from "@/components/ui/flip-words";
// import 'bootstrap/dist/css/bootstrap.min.css';
export default function FlipWordsDemo() {
  const words = ["Innovate", "Inspire", "Connect", "Unique"];

  return (
    <div className="h-[14rem] flex justify-center items-center px-0  w-[65%]">
      <div className="text-7xl mx-auto font-normal text-white dark:text-white  flex gap-7 flex-col">
   <h1 className="text-8xl"> Welcome to Apple</h1>
        <FlipWords words={words}/>

       <h3 className="text-3xl mt-6"> Explore our latest innovations, including the powerful new iPhone, the versatile iPad, and the high-performance MacBook.</h3>
      <div style={{marginTop: "0vw", display: "flex", width:"30%"}}>
       <button type="button" style={{fontSize: "2vw", color: "#fff", backgroundColor: "#FACC15", padding: "1.1vw 2.5vw", display: "inline", borderRadius: "25px"}}>Join Us</button>
      </div>
      </div>
    </div>
  );
}

