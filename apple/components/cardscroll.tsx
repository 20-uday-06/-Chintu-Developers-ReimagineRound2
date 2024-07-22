"use client";
import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";

export default function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: "Mac",
    link: "https://www.apple.com/newsroom/images/product/imac/standard/Apple_imac-magickeyboardnum-magicmouse2-macos-wallpaper_08042020.jpg.og.jpg?202405161915",
    thumbnail:
      "https://www.apple.com/newsroom/images/product/imac/standard/Apple_imac-magickeyboardnum-magicmouse2-macos-wallpaper_08042020.jpg.og.jpg?202405161915",
  },
  {
    title: "MacBook Air",
    link: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mba13-midnight-select-202402?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1708367688034",
    thumbnail:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mba13-midnight-select-202402?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1708367688034",
  },
  {
    title: "MacBook Pro",
    link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKtAy-sFVjDXrUBqEUW4OeQJumsZu67zt6lA&s",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKtAy-sFVjDXrUBqEUW4OeQJumsZu67zt6lA&s",
  },

  {
    title: "Mac mini",
    link: "https://editorially.org",
    thumbnail:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mac-mini-hero-202301_FMT_WHH?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1671503802341",
  },
  {
    title: "MacBook Air m2",
    link: "https://support.apple.com/en-in/111867",
    thumbnail:
      "https://cdsassets.apple.com/live/SZLF0YNV/images/sp/111867_SP869-2022-macbook-air-m2-colors.png",
  },
  {
    title: "iPhone SE",
    link: "https://www.apple.com/newsroom/2020/04/iphone-se-a-powerful-new-smartphone-in-a-popular-design/",
    thumbnail:
      "https://www.apple.com/newsroom/images/product/iphone/standard/Apple_new-iphone-se-white_04152020_big.jpg.large.jpg",
  },

  {
    title: "iPhone 15",
    link: "https://www.apple.com/in/newsroom/2023/09/apple-debuts-iphone-15-and-iphone-15-plus/",
    thumbnail:
      "https://www.apple.com/newsroom/images/2023/09/apple-debuts-iphone-15-and-iphone-15-plus/article/Apple-iPhone-15-lineup-color-lineup-geo-230912_big.jpg.large.jpg",
  },
  {
    title: "iPhone 15 Pro Max",
    link: "https://iplanet.one/products/iphone-15-pro-mu793hn-a",
    thumbnail:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch_GEO_EMEA?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=VW44dkRidm5wazhwcGxtL0cyaEJ2VTkrNXBUdUJSK1k4NE5seUtJaW80ZmcvQnUxdUdEMFZ5SXlMVXRiaERVdnNCckZqMTMrS3dIUWFPL2dFWXJDTmpDNlBJczZRQmxyM2ZhZjVKT0RIMFJtMnIvc0R1T2E0dzJMNDBHTWVISnVWUUI4TzJ6bEM4S1ZTK1ZYbjIxMUpnPT0=&traceId=1",
  },
  {
    title: "iPhone 15 Pro",
    link: "https://tailwindmasterkit.com",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8opwV050zwLxgD-IrSL61hyxPCUioZ8u8Iw&s",
  },
  {
    title: "iPhone 13 mini",
    link: "https://www.apple.com/newsroom/2021/09/apple-introduces-iphone-13-and-iphone-13-mini/",
    thumbnail:
      "https://www.apple.com/newsroom/images/product/iphone/standard/Apple_iphone13_hero_09142021_inline.jpg.large.jpg",
  },
  {
    title: "HomePod",
    link: "https://www.apple.com/in/shop/buy-homepod/homepod",
    thumbnail:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/homepod-select-202210_FMT_WHH?wid=640&hei=600&fmt=jpeg&qlt=90&.v=1670557209437",
  },

  {
    title: "Studio display",
    link: "https://www.apple.com/in/shop/buy-mac/apple-studio-display",
    thumbnail:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/studio-display-og-202203?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1645125507093",
  },
  {
    title: "AirPods Max",
    link: "https://www.apple.com/in/shop/buy-airpods/airpods-max/space-grey",
    thumbnail:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-max-select-spacegray-202011_FV1_FMT_WHH?wid=940&hei=800&fmt=jpeg&qlt=90&.v=1604776025000",
  },
  {
    title: "AirPods Pro",
    link: "https://www.apple.com/in/shop/product/MTJV3HN/A/airpods-pro",
    thumbnail:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MTJV3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1694014871985",
  },
  {
    title: "Apple watch",
    link: "https://www.apple.com/in/shop/buy-watch/apple-watch-se/44mm-cellular-midnight-aluminium-midnight-sport-band-sm-se",
    thumbnail:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MT3D3ref_VW_34FR+watch-case-44-aluminum-midnight-cell-se_VW_34FR+watch-face-44-aluminum-midnight-se_VW_34FR?wid=752&hei=720&bgc=fafafa&trim=1&fmt=p-jpg&qlt=80&.v=ajJYOEQxYjNlejNwbWNnSU16d0NYaWhSbVIzRFJTYlp1MEk4OWNDaTcvNTlEbzMrd1Z5SUpEd0hiT0ZLRlZGNHVDTzRRaC84T1VMbXJRN05SRldIelBRWnNWZWtLcTZCYVRER3FsWWowaTk5RG8zK3dWeUlKRHdIYk9GS0ZWRjR4cVNUNDJadDNVSmRncE9SalAvZ24zZmdHMUt6VFlqa3BpV2VBOUNycGdrcDIxSk5peW5HTWQ0c004MmJwMkNtdGl6SHg4ZE5NYmlWSVQ5akRTdGpCZkNDUmN0SlpnYXpQNFNTbUVsbTlnST0=",
  },
];
