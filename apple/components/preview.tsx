"use client";
import React from "react";
import { motion } from "framer-motion";
import { LinkPreview } from "@/components/ui/link-preview";

export default function LinkPreviewDemo() {
  return (
    <div className="flex justify-center items-center h-[40rem] flex-col px-4">
      <p className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto mb-10">
        <LinkPreview url="https://m.media-amazon.com/images/I/81fxjeu8fdL._AC_UF1000,1000_QL80_.jpg" className="font-bold">
          iPhone
        </LinkPreview>{" "}
        ,{" "}
        <LinkPreview url="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mba13-midnight-select-202402?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1708367688034" className="font-bold">
          MacBook
        </LinkPreview>{" "}
        are a great way to live modern life.
      </p>
      <p className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto">
        Visit{" "}
        <LinkPreview
          url="https://www.apple.com/newsroom/images/product/apple-news/Apple-BKC-Mumbai-India-media-preview-hero.jpg.news_app_ed.jpg"
          className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
        >
          Apple Store
        </LinkPreview>{" "}
        for the best Apple products .
      </p>
    </div>
  );
}
