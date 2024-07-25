"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/app/hooks/use-outside-click";

export default function ExpandableCardDemo() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  priority
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-neutral-700 dark:text-neutral-200"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layoutId={`button-${active.title}-${id}`}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-2xl mx-auto w-full gap-4">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col md:flex-row ">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <Image
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-40 w-40 md:h-14 md:w-14 rounded-lg object-cover object-top"
                />
              </motion.div>
              <div className="">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 text-center md:text-left"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
            <motion.button
              layoutId={`button-${card.title}-${id}`}
              className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-green-500 hover:text-white text-black mt-4 md:mt-0"
            >
              {card.ctaText}
            </motion.button>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "Neha Shamra",
    title: "iPhone 15 pro max",
    src: "https://plus.unsplash.com/premium_photo-1706561441075-c1377a7fea13?fm=jpg&w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aXBob25lJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D",
    ctaText: "5★",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          I recently upgraded to the latest iPhone, and it's been an amazing experience! The sleek design and premium build quality are unmatched, and the vibrant Super Retina XDR display makes everything look stunning. The lightweight feel and elegant Midnight shade make it stylish and comfortable to use throughout the day. <br /> <br /> Performance-wise, the iPhone is incredibly fast and efficient. The camera quality is exceptional, capturing beautiful photos even in low light. Battery life has also been impressive, lasting me through a full day of heavy use. Overall, I'm thrilled with my new iPhone and highly recommend it!
          accolades.
        </p>
      );
    },
  },
  {
    description: "Foram Ghandhi",
    title: "MacBook Pro",
    src: "https://images.unsplash.com/photo-1472220625704-91e1462799b2?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ctaText: "5★",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          I recently upgraded to the latest MacBook Pro, and it's been an incredible experience! The sleek design and premium build quality are exceptional, with a lightweight feel that makes it easy to carry around. The stunning Retina display offers vibrant colors and sharp details, making everything from work to entertainment look fantastic.<br /> <br /> Performance-wise, the MacBook Pro is incredibly fast and efficient, handling all my tasks with ease. The keyboard is comfortable to type on, and the battery life is impressive, lasting me through a full day of heavy use. Overall, I'm thrilled with my new MacBook Pro and highly recommend it!
        </p>
      );
    },
  },

  {
    description: "Uday Tyagi",
    title: "AirPods Pro",
    src: "https://www.shutterstock.com/image-photo/new-apple-airpods-pro-outdoor-260nw-1588935523.jpg",
    ctaText: "5★",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          I recently got the AirPods Pro, and they've been fantastic! The sleek design and comfortable fit make them perfect for all-day wear. The sound quality is top-notch, with deep bass and clear highs, and the active noise cancellation is incredibly effective, allowing me to fully immerse myself in my music. <br /> <br /> Battery life is impressive, with the AirPods Pro lasting through long listening sessions without needing a recharge. The seamless integration with my other Apple devices makes switching between them effortless. Overall, I'm thrilled with my AirPods Pro and highly recommend them!
        </p>
      );
    },
  },
  {
    description: "Muskan Barmate",
    title: "HomePod",
    src: "https://i.ytimg.com/vi/eK6XwRzEzqc/maxresdefault.jpg",
    ctaText: "5★",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          I recently added the HomePod to my setup, and it’s been a fantastic addition! The design is sleek and modern, fitting beautifully into any room. The sound quality is exceptional, with rich, immersive audio that fills the space effortlessly. The spatial awareness feature ensures that the music sounds great no matter where the speaker is placed. <br /> <br /> The integration with Siri is seamless, making it easy to control my smart home devices and manage tasks with just my voice. Battery life is impressive, and the overall user experience is smooth and intuitive. I’m delighted with my HomePod and would definitely recommend it!
        </p>
      );
    },
  },
  {
    description: "Saloni Rawal",
    title: "Watch Ultra",
    src: "https://hips.hearstapps.com/hmg-prod/images/ultralifestyle-1663684611.jpeg?crop=1.00xw:0.659xh;0,0.146xh&resize=640:*",
    ctaText: "5★",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          I recently started using the Watch Ultra, and it’s been an outstanding experience! The design is rugged yet stylish, making it perfect for both everyday wear and adventurous activities. The display is bright and clear, and the range of features, from advanced fitness tracking to customizable watch faces, has truly impressed me. <br /> <br /> The battery life is excellent, lasting well through my daily routine and workouts. The integration with my other devices is seamless, and the GPS accuracy has been spot-on for all my outdoor activities. Overall, I’m thrilled with the Watch Ultra and highly recommend it for anyone looking for a high-performance smartwatch!
        </p>
      );
    },
  },
];
