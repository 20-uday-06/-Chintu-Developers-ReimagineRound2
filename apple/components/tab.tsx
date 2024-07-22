"use client";

import Image from "next/image";
import { Tabs } from "@/components/ui/tabs";
import midnight from '@/public/Image/color/midnight.png'
import silver from '@/public/Image/color/Silver.png'
import space from '@/public/Image/color/Space grey.png'
import starlight from '@/public/Image/color/starlight.png'

export default function TabsDemo() {
  const tabs = [
    {
      title: "Midnight",
      value: "product",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-gray-900 to-slate-800">
          <p>Midnight</p>
          <DummyContent src={midnight} />
        </div>
      ),
    },
    {
      title: "Starlight",
      value: "services",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-amber-300 to-amber-200">
          <p>Starlight</p>
          <DummyContent src={starlight} />
        </div>
      ),
    },
    {
      title: "Space Grey",
      value: "playground",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-neutral-800 to-neutral-100">
          <p>Space Grey</p>
          <DummyContent src={space} />
        </div>
      ),
    }, {
      title: "Silver",
      value: "content",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-zinc-500 to-zinc-500">
          <p>Silver</p>
          <DummyContent src={silver} />
        </div>
      ),
    },
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start ">
      <Tabs tabs={tabs} />
    </div>
  );
}

const DummyContent = ({ src }) => {
  return (
    <Image
      src={src}
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};
