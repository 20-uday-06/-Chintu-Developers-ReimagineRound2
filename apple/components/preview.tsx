"use client";
import React from "react";
import { motion } from "framer-motion";
import { LinkPreview } from "@/components/ui/link-preview";

export default function LinkPreviewDemo() {
  return (
    <div className="flex justify-center items-center h-[40rem] flex-col px-4">
      <p className="text-neutral-500 dark:text-neutral-400 text-4xl md:text-3xl max-w-3xl mx-auto mb-10">
        <LinkPreview url="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch_GEO_EMEA?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=VW44dkRidm5wazhwcGxtL0cyaEJ2VTkrNXBUdUJSK1k4NE5seUtJaW80ZmcvQnUxdUdEMFZ5SXlMVXRiaERVdnNCckZqMTMrS3dIUWFPL2dFWXJDTmpDNlBJczZRQmxyM2ZhZjVKT0RIMFJtMnIvc0R1T2E0dzJMNDBHTWVISnVWUUI4TzJ6bEM4S1ZTK1ZYbjIxMUpnPT0=&traceId=1" className="font-bold">
          iPhone
        </LinkPreview>{" "}
        ,{" "}
        <LinkPreview url="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mba13-midnight-select-202402?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1708367688034" className="font-bold">
          MacBook
        </LinkPreview>{" "}
        are a great way to live modern life.
      </p>
      <p className="text-neutral-500 dark:text-neutral-400 text-5xl md:text-3xl max-w-3xl mx-auto">
        Visit{" "}
        <LinkPreview
          url="https://bsmedia.business-standard.com/_media/bs/img/article/2023-04/05/full/1680675972-8396.jpg?im=FeatureCrop,size=(826,465) "
          className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
        >
          Apple Store
        </LinkPreview>{" "}
        for the best Apple products.
      </p>
    </div>
  );
}
