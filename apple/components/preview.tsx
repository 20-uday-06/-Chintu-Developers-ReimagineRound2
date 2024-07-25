"use client";
import React from "react";
import { motion } from "framer-motion";
import { LinkPreview } from "@/components/ui/link-preview";

export default function LinkPreviewDemo() {
  return (
    <div className="flex justify-center items-center h-[40rem] flex-col px-4">
      <p className="text-neutral-500 dark:text-neutral-400 text-4xl md:text-3xl max-w-3xl mx-auto mb-10">
        <LinkPreview url="https://tailwindcss.com" className="font-bold">
          iPhone
        </LinkPreview>{" "}
        ,{" "}
        <LinkPreview url="https://framer.com/motion" className="font-bold">
          MacBook
        </LinkPreview>{" "}
        are a great way to live modern life.
      </p>
      <p className="text-neutral-500 dark:text-neutral-400 text-5xl md:text-3xl max-w-3xl mx-auto">
        Visit{" "}
        <LinkPreview
          url="https://ui.aceternity.com"
          className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
        >
          Apple Store
        </LinkPreview>{" "}
        for the best Apple products.
      </p>
    </div>
  );
}
