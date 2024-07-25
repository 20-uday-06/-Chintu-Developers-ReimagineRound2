import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ParallaxSections = () => {
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    sectionsRef.current.forEach((section, index) => {
      if (section) {
        const img = section.querySelector("img");
        if (img) {
          gsap.fromTo(
            img,
            { scale: 1 },
            {
              scale: 3,
              scrollTrigger: {
                trigger: section,
                start: "top bottom",
                end: "top top",
                scrub: true,
                markers: false,
              },
            }
          );
        }
      }
    });
  }, []);

  const sections = [
    {
      image:
        "https://images.unsplash.com/photo-1643760519225-6a342ee9801e?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "HomePod",
    },
    {
      image:
        "https://images.unsplash.com/photo-1631342506072-885d38820843?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "iPad",
    },
    {
      image:
        "https://images.unsplash.com/photo-1525825691042-e14d9042fc70?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "Airpods",
    },
    {
      image:
        "https://images.unsplash.com/photo-1522273400909-fd1a8f77637e?q=80&w=1412&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "Accessories",
    },
    {
      image:
        "https://images.unsplash.com/photo-1609177393985-804cd5f98670?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "iPhone",
    },
  ];

  return (
    <div style={{ overflow: "hidden" }}>
      {sections.map((section, index) => (
        <div
          key={index}
          ref={(el: HTMLDivElement | null) => {
            if (el) {
              sectionsRef.current[index] = el;
            }
          }}
          style={{
            position: "relative",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          <img
            src={section.image}
            alt={`Section ${index + 1}`}
            style={{
              width: "40%",
              height: "60%",
              transition: "transform 0.3s ease",
              borderRadius: "20px",
            }}
          />
          <div className="text-overlay">
            <h1 className="text-white text-8xl font-bold">{section.text}</h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ParallaxSections;
