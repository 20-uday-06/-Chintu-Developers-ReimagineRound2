import React from "react";
import { Vortex } from "@/components/ui/vortex";
import Footer from "@/components/Footer";

export default function VortexDemo() {
  return (
    <div className="w-[100%] mx-auto rounded-md  h-[30rem] overflow-hidden">
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center w-[100%] h-full"
      >
        {/* <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
        Think Different Always
        </h2>
        <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
        At Apple, we merge cutting-edge technology with elegant design to enhance your digital life. Experience innovation and style in perfect harmony.
        </p> */}
        <Footer/>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
            Order now
          </button>
          <button className="px-4 py-2  text-white ">Watch trailer</button>
        </div>
      </Vortex>
    </div>
  );
}
