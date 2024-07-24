"use client";
import React, { useLayoutEffect, useRef } from "react";
import bg from "../public/Image/color/robert-lukeman-_RBcxo9AU-U-unsplash.jpg";
import img1 from "../public/Image/color/midnight.png";
import img2 from "../public/Image/color/Silver.png";
import img3 from "../public/Image/color/Space grey.png";
import img4 from "../public/Image/color/starlight.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Zoom() {
  const bg1 = useRef(null);
  const img_container = useRef(null);
  const img = useRef(null);
  const text1 = useRef(null);
  const text2 = useRef(null);
  const container = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: bg1.current,
        pin: bg1.current,
        pinSpacing: false,
        start: "top top",
        endTrigger: ".last",
        end: "bottom bottom",
      });
      gsap.set(container.current, {marginTop: -(container.current.offsetHeight)});
      gsap
        .timeline({
          scrollTrigger: {
            trigger: img_container.current,
            pin: img_container.current,
            scrub: 1,
            start: "0% 0%",
          },
        })
        .to(img.current, { transform: "translateZ(2200px)" }, 0)
        .to(text1.current, { y: -800 }, "<")
        .to(text2.current, { y: -800 }, "<")
        .fromTo(container.current, {yPercent:100, scaleY: 2}, {yPercent: 0, scaleY: 1})
     
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative h-[100vh]">
      <div ref={bg1} className="bg absolute h-[100%] w-[100%] z-[1]">
        <section>
          <div
            ref={img_container}
            className="img-container perspective flex items-center justify-center h-[100%] w-[100%]"
          >
            <img
              ref={img}
              src="https://images.unsplash.com/photo-1476445704028-a36e0c798192?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="image1"
              alt="hello"
            />
            <div className="absolute flex flex-col items-center justify-center">
              <h1 ref={text1} className="text-[170px] text-white">
                <span className="text-stroke">Explore</span> Legends.
              </h1>
              <p
                ref={text2}
                className="opacity-70 w-62 text-[25px] text-center text-white"
              >
                A showcase of the world's best Photography.
              </p>
            </div>
          </div>
          <div ref={container} className="container py-12 flex flex-wrap items-center justify-center gap-[80px]">
            <div className="col-1 flex flex-col gap-16 translate-y-[30%] pb-8">
              <img
                className="w-[450px] h-[350px]"
                src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
              <img
                className="w-[400px] h-[400px]"
                src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
            <div className="col-2 flex flex-col gap-16">
              <img
                src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="w-[600px] h-[400px]"
                alt=""
              />
              <img
                src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="w-[400px] h-[400px]"
                alt=""
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Zoom;
