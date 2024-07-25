"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Logo from "@/app/logo4.png"
import Button from "@/components/button";
// import VideoPlayer from '@/components/VideoPlayer';
import FlipWord from "@/components/FlipWord";
import Scroll from '@/components/scroll';
import Cscroll from '@/components/cardscroll';
import StickyScroller from "@/components/StickyScroller";
import Tabs from "@/components/tab";
import Ipadvid from "@/components/Ipadvid";
import Macvid from "@/components/Macvid";
import Watchvid from "@/components/Watchvid";
import Card from "@/components/ThreedCard";
import Zoom from "@/components/Zoom";
import Apple from '@/components/apple';
import Google from '@/components/scrolling';
import Lamp from '@/components/Lamp';
import Preview from '@/components/preview';
import Gradient from '@/components/grad';
import Glove from '@/components/globe';
import VideoScroll from '@/components/VideoScroll';
import Reviews from '@/components/review';
import Anireviews from '@/components/anireview';
export default function Home() {
  return (
    <>
      <div id="div">
        <div className="relative w-full flex items-center justify-center">
          <Navbar className="top-0" />

        </div>
      </div>
      <div id="main">
        {/* <div id="page1" style={{ width: "100%", position: "relative" }}>
          <VideoPlayer /> */}
        {/* <div
            className="text"
            style={{ position: "absolute", top: "25%", left: "5%" }}
          > */}
        {/* <div id="page1" style={{ width: "100%", height: "100%", objectFit: "contain" }} > */}
        {/* <div id="vidplay">
            <VideoPlayer />
          </div> */}

        {/* <div className="box " style={{position: "absolute",borderRadius: "40px", zIndex: "0", top: "1%", left: "3%",width: "64vw", height: "61vh" , backgroundColor : "black" ,filter: "blur(10px)" ,opacity:"0.6" }}>
            
          </div> */}
        {/* <div className="text" style={{ position: "absolute", top: "25%", left: "5%" }}>
            <FlipWord />
          </div> */}
        {/* </div> */}

        <Google />
        <div id="page6" style={{ paddingBottom: "4vw", paddingTop: "6vw" }}>
          <Apple />
        </div>
        {/* <Gradient/> */}
        <div id="page" className="relative " style={{ width: "100%",height:"40%" }}>
        <Lamp />
        </div>
        <Glove/>
        <div id="reviews">
          <p>REVIEWS</p>
          <Reviews/>
          <Anireviews/>
        </div>
        <div id="page2" className="relative " style={{ width: "100%", marginTop: "4vw" }} >

          <h1 className="text-white text-8xl text-left pl-[70px] font-bold">New to Mac?</h1>
          <StickyScroller/>
        </div>
        <div
          id="page7"
          className="relative"
          style={{ width: "100%", marginTop: "6vw"}}
        ><div
          className="relative"
          style={{ width: "100%", height: "100vh", paddingTop: "16vw", backgroundImage: 'url(https://www.apple.com/v/apple-watch-series-9/d/images/overview/fitness/fitness_hero__fqxbiwqrddaq_large.jpg)', backgroundSize: "cover", backgroundPosition: "center", marginBottom: "4vw", backgroundRepeat: "no-repeat", display: "flex", flexDirection: "column", gap: "" }}
        >
            <h1 className="text-white text-8xl text-left pl-[70px] font-bold mb-[7vw]">
              Take a <br />closer look
            </h1>
          </div>
          <div className="box" style={{ display: "flex", gap: "30px", alignItems: "center", marginTop: "7vw", padding: "0 4vw" }}>
            <h1 className="text-white text-8xl text-left pl-[50px] font-bold">
              Style it out.
              <br />
              Swap it over.
            </h1>
            <Card src="https://www.apple.com/in/iphone-15-pro/images/overview/closer-look/natural_titanium__ccl12n7vwwxe_large.jpg" />
            <Card src="https://www.apple.com/in/iphone-15-pro/images/overview/closer-look/white_titanium__b3fwwp6zrrhy_large.jpg" />
          </div>
        </div>
        <div id="page5" className="relative" style={{ width: "100%" }}>
          <h1 className="text-white text-8xl text-left pl-[50px] font-bold">
            Explore the line-up.
          </h1>
          <div className="dabba">
            <div className="flex-container">
              <div className="left-container">
                <div className="Macvid">
                  <Macvid />
                </div>
              </div>
              <div className="right-container">
                <div className="ipad">
                  <Ipadvid />
                </div>

                <div className="watch">
                  <Watchvid />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="page3" className="relative" style={{ width: "100%" }} >
          <Cscroll />
        </div>
        
        
        
        <div className="page8">
          <h1 className="text-white text-8xl text-left pl-[50px] font-bold mb-[4vw]">
            Designed to <br />
            make a difference.
          </h1>
          <Zoom />
        </div>
<div className="page9" style={{padding: "0 4vw"}}>
          <VideoScroll />
        </div>
        <div id="page4" className="relative" style={{ width: "100%" }} >
          <h1 className="text-white text-8xl text-left pl-[70px] font-bold mb-[4vw]">Four Steller Colours</h1>
          <Tabs />
        </div>

        <div id="footer">
        
        
        </div>

      </div>
    </>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed inset-x-0 max-w-100% mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Image src={Logo} alt="" width={30} height={30} className="z-50 position: absolute  top-6 left-6 " />
        <MenuItem setActive={setActive} active={active} item="Store">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Delhi</HoveredLink>
            <HoveredLink href="/interface-design">Maharashtra</HoveredLink>
            <HoveredLink href="/seo">Bombay</HoveredLink>
            <HoveredLink href="/branding">Chennai</HoveredLink>
            <HoveredLink href="/branding">Kolkata</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Mac">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="MacBook Air"
              href="https://algochurn.com"
              src="https://www.apple.com/newsroom/images/product/mac/standard/Apple_new-macbookair-wallpaper-screen_11102020_big.jpg.large.jpg"
              description="Prepare for tech interviews like never before."
            />
            <ProductItem
              title="MacBook Pro"
              href="https://tailwindmasterkit.com"
              src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp14-spacegray-select-202310?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1697230830200"
              description="Production ready Tailwind css components for your next project"
            />
            <ProductItem
              title="iMac"
              href="https://gomoonbeam.com"
              src="https://www.apple.com/v/imac/p/images/meta/imac__cau1jbsr8lau_og.png"
              description="Never write from scratch again. Go from idea to blog in minutes."
            />
            <ProductItem
              title="Mac mini"
              href="https://userogue.com"
              src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mac-mini-hero-202301_FMT_WHH?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1671503802341"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />
            <ProductItem
              title="Mac Studio"
              href="https://gomoonbeam.com"
              src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mac-studio-select-202306?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1684345161143"
              description="Never write from scratch again. Go from idea to blog in minutes."
            />
            <ProductItem
              title="Mac Pro"
              href="https://gomoonbeam.com"
              src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mac-pro-tower-hero-splitter-2023?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1684181485853"
              description="Never write from scratch again. Go from idea to blog in minutes."

            />
            <ProductItem
              title="Displays"
              href="https://gomoonbeam.com"
              src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/studio-display-og-202203?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1645125507093"
              description="Never write from scratch again. Go from idea to blog in minutes."
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="iPad">
          <div className="text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="iPad Pro"
              href="https://algochurn.com"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5i_PoTFlSU1S0nmRn_trNQ_cEpGRKCmy1LA&s"
              description="Prepare for tech interviews like never before."
            />
            <ProductItem
              title="iPad Air"
              href="https://tailwindmasterkit.com"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdGQOEkY_sg9n3Fp_WxrCXRGmNkWcIo94eYQ&s"
              description="Production ready Tailwind css components for your next project"
            />
            <ProductItem
              title="iPad"
              href="https://gomoonbeam.com"
              src="https://images-cdn.ubuy.co.in/64afd6b0d9c85027ef3e7c9f-2022-apple-10-9-inch-ipad-wi-fi-64gb.jpg"
              description="Never write from scratch again. Go from idea to blog in minutes."
            />
            <ProductItem
              title="iPad mini"
              href="https://userogue.com"
              src="https://i.gadgets360cdn.com/products/large/iPad-mini-2021-800x717-1631651727.jpg"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />
            <ProductItem
              title="Apple Pencil"
              href="https://gomoonbeam.com"
              src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MK0C2?wid=1144&hei=1144&fmt=jpeg&qlt=95&.v=1564075356758"
              description="Never write from scratch again. Go from idea to blog in minutes."
            />
            <ProductItem
              title="Keyboards"
              href="https://gomoonbeam.com"
              src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MMMR3?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1645719947833"
              description="Never write from scratch again. Go from idea to blog in minutes."

            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="iPhone">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="iPhone 15 Pro"
              href="https://algochurn.com"
              src="https://www.apple.com/newsroom/images/2023/09/apple-unveils-iphone-15-pro-and-iphone-15-pro-max/article/Apple-iPhone-15-Pro-lineup-hero-230912_Full-Bleed-Image.jpg.large.jpg"
              description="Prepare for tech interviews like never before."
            />
            <ProductItem
              title="iPhone 15"
              href="https://tailwindmasterkit.com"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThiXDo_punxxz7T3vAXMSnz-NDp4wbS52vTA&s"
              description="Production ready Tailwind css components for your next project"
            />
            <ProductItem
              title="iPhone 14"
              href="https://gomoonbeam.com"
              src="https://cdsassets.apple.com/live/SZLF0YNV/images/sp/111850_iphone-14_1.png"
              description="Never write from scratch again. Go from idea to blog in minutes."
            />
            <ProductItem
              title="iPhone 13"
              href="https://userogue.com"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpOjFmx_EXyHGxY4Fez_W_FTy5gFPdnrTNOg&s"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />
            <ProductItem
              title="iPhone SE"
              href="https://userogue.com"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjRlOPQ_IcdqUQVcO1B74DZDu4102fpDDTVw&s"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Watch">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Apple Watch Series 9"
              href="https://algochurn.com"
              src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/s9-case-unselect-gallery-1-202403_GEO_IN_FMT_WHH?wid=752&hei=720&fmt=p-jpg&qlt=80&.v=1709240736690"
              description="Prepare for tech interviews like never before."
            />
            <ProductItem
              title="Apple Watch Ultra 2"
              href="https://tailwindmasterkit.com"
              src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MT5J3ref_VW_34FR+watch-49-titanium-ultra2_VW_34FR+watch-face-49-alpine-ultra2_VW_34FR_GEO_IN?wid=750&hei=712&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1694507270905"
              description="Production ready Tailwind css components for your next project"
            />
            <ProductItem
              title="Apple Watch SE"
              href="https://gomoonbeam.com"
              src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MT3D3ref_VW_34FR+watch-case-44-aluminum-midnight-nc-se_VW_34FR+watch-face-44-aluminum-midnight-se_VW_34FR?wid=752&hei=720&bgc=fafafa&trim=1&fmt=p-jpg&qlt=80&.v=ajJYOEQxYjNlejNwbWNnSU16d0NYaWhSbVIzRFJTYlp1MEk4OWNDaTcvNTlEbzMrd1Z5SUpEd0hiT0ZLRlZGNGRCU0luK254NGZZeFNSZCtCaXAxdG5LTGp0WU11cGJPRVJHSFVxWTAxK1diaytyMkV2UXJqeE9wOUlGWnU0cExJQ3VXcFZIUHhBMlU5OU5QT1pyZjQ3WlBtR0ZPUkFPYlc1NC9nRzhiVTZUYlg5SUJPR0VaZnV5YVlTck5WQzFJWitOTEs5T0laM0FBYmtOdWx0aUJtTm5YU0ZMdUpkZktWZmlmcG5VMHJzOD0="
              description="Never write from scratch again. Go from idea to blog in minutes."
            />
            <ProductItem
              title="Apple Watch Nike"
              href="https://userogue.com"
              src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MUV33ref_AV1?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1692860490347"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="AirPods">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="AirPods Pro 2nd generation"
              href="https://algochurn.com"
              src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MTJV3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1694014871985"
              description="Prepare for tech interviews like never before."
            />
            <ProductItem
              title="AirPods 2nd generation"
              href="https://tailwindmasterkit.com"
              src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MV7N2?wid=4000&hei=4000&fmt=jpeg&qlt=95&.v=1551489688005"
              description="Production ready Tailwind css components for your next project"
            />
            <ProductItem
              title="AirPods Pro 3rd generation"
              href="https://gomoonbeam.com"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0fXo59JEO2-HZ2MsivQwV9Z3j9qP6M-5ocg&s"
              description="Never write from scratch again. Go from idea to blog in minutes."
            />
            <ProductItem
              title="AirPods Max"
              href="https://userogue.com"
              src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-max-select-spacegray-202011_FV1_FMT_WHH?wid=940&hei=800&fmt=jpeg&qlt=90&.v=1604776025000"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="TV & Home">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Apple TV 4k"
              href="https://algochurn.com"
              src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/apple-tv-4k-hero-select-202210_FMT_WHH?wid=640&hei=600&fmt=jpeg&qlt=90&.v=1664896361164"
              description="Prepare for tech interviews like never before."
            />
            <ProductItem
              title="HomePod"
              href="https://tailwindmasterkit.com"
              src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/homepod-select-202210_FMT_WHH?wid=640&hei=600&fmt=jpeg&qlt=90&.v=1670557209437"
              description="Production ready Tailwind css components for your next project"
            />
            <ProductItem
              title="HomePod mini"
              href="https://gomoonbeam.com"
              src="https://m.media-amazon.com/images/I/61QzbK3DkjL.jpg"
              description="Never write from scratch again. Go from idea to blog in minutes."
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Entertainment">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Apple One"
              href="https://algochurn.com"
              src="https://telecomtalk.info/wp-content/uploads/2023/03/apple-one-subscription-india-everything-you-need.jpg"
              description="Prepare for tech interviews like never before."
            />
            <ProductItem
              title="Apple TV+"
              href="https://tailwindmasterkit.com"
              src="https://www.apple.com/v/apple-tv-plus/ai/images/meta/apple-tv__e7aqjl2rqzau_og.png?202406180149"
              description="Production ready Tailwind css components for your next project"
            />
            <ProductItem
              title="Apple Music"
              href="https://gomoonbeam.com"
              src="https://store-images.s-microsoft.com/image/apps.62962.14205055896346606.c235e3d6-fbce-45bb-9051-4be6c2ecba8f.28d7c3cb-0c64-40dc-9f24-53326f80a6dd"
              description="Never write from scratch again. Go from idea to blog in minutes."
            />
            <ProductItem
              title="Apple Arcade"
              href="https://userogue.com"
              src="https://www.apple.com/v/apple-arcade/o/images/meta/og__ddwd8w1nteqa_overview.png"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />
            <ProductItem
              title="Apple Podcasts"
              href="https://userogue.com"
              src="https://www.apple.com/v/apple-podcasts/e/images/meta/apple-podcasts_wechat__cq3l3kjucay6_og.png"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />
            <ProductItem
              title="Apple Books"
              href="https://userogue.com"
              src="https://help.apple.com/assets/65A1E8968C4441D03A098A2B/65A1E8998C4441D03A098A31/en_GB/3805d456c1f34d7f9d4f023a12a0bb67.png"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />
            <ProductItem
              title="Apple Store"
              href="https://userogue.com"
              src="https://images.news18.com/ibnlive/uploads/2023/04/untitled-design-2023-04-17t101119.060-16817074743x2.jpg?impolicy=website&width=640&height=480"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Accessories">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Mac"
              href="https://algochurn.com"
              src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MNWP3_GEO_IN?wid=532&hei=582&fmt=png-alpha&.v=1678377335734"
              description="Prepare for tech interviews like never before."
            />
            <ProductItem
              title="iPad"
              href="https://tailwindmasterkit.com"
              src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MWR53_FV402?wid=1420&hei=930&fmt=png-alpha&.v=1714185737600"
              description="Production ready Tailwind css components for your next project"
            />
            <ProductItem
              title="iPhone"
              href="https://gomoonbeam.com"
              src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MT233?wid=532&hei=582&fmt=png-alpha&.v=1693248327138"
              description="Never write from scratch again. Go from idea to blog in minutes."
            />
            <ProductItem
              title="Apple Watch"
              href="https://userogue.com"
              src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MWMU3ref_FV401?wid=532&hei=582&fmt=png-alpha&.v=1708547972375"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />
            <ProductItem
              title="AirPods"
              href="https://userogue.com"
              src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MTJV3?wid=890&hei=890&fmt=jpeg&qlt=90&.v=1694014871985"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />
            <ProductItem
              title="TV & home"
              href="https://userogue.com"
              src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/apple-tv-4k-hero-select-202210_FMT_WHH?wid=640&hei=600&fmt=jpeg&qlt=90&.v=1664896361164"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Support">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Contact Us</HoveredLink>
            <HoveredLink href="/interface-design">Community</HoveredLink>
            <HoveredLink href="/seo">Repair</HoveredLink>
            <HoveredLink href="/branding">Check Coverage</HoveredLink>
            <HoveredLink href="/branding">Find my</HoveredLink>
          </div>
        </MenuItem>

        <Button />

      </Menu>
    </div>
  );
}
