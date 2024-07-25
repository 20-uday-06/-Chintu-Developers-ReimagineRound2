import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import VideoPlayer from '@/components/Phone';
import Airpods from '@/components/Airpodes';
import Ipad from '@/components/Ipad';
import '../app/globals.css';

gsap.registerPlugin(ScrollTrigger);

const VideoSection: React.FC = () => {
  const videoRefs = useRef<HTMLDivElement[]>([]);
  const textRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (videoRefs.current.length === 0 || textRefs.current.length === 0) return;

    videoRefs.current.forEach((video) => {
      if (video) {
        gsap.fromTo(video,
          { x: '-100%', scale: 0.8 },
          {
            x: '0%',
            scale: 1,
            scrollTrigger: {
              trigger: video,
              start: 'top center',
              end: 'bottom center',
              scrub: true,
            },
          }
        );
      }
    });

    textRefs.current.forEach((text) => {
      if (text) {
        gsap.fromTo(text,
          { x: '100%', opacity: 0 },
          {
            x: '0%',
            opacity: 1,
            scrollTrigger: {
              trigger: text,
              start: 'top center',
              end: '50%',
              scrub: true,
            },
          }
        );
      }
    });
  }, []);

  const addToRefs = (el: HTMLDivElement | null, refs: React.MutableRefObject<HTMLDivElement[]>) => {
    if (el && !refs.current.includes(el)) {
      refs.current.push(el);
    }
  };

  return (
    <div style={{ height: "80%" }}>
      <div className="first" style={{ display: "flex", gap: "10vw"}}>
        <div
          className="video"
          style={{ width: "50%", borderRadius: "30px", height: '100%' }}
          ref={el => addToRefs(el, videoRefs)}
        >
          <VideoPlayer />
        </div>
        <div
          className="text"
          style={{ width: "30%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}
          ref={el => addToRefs(el, textRefs)}
        >
          <h1 className="text-white text-8xl text-left font-bold">iPhone</h1>
          <p className="text-stone-400 text-4xl text-center">Get the highlights.</p>
        </div>
      </div>

      <div className="second" style={{ display: "flex", gap: "10vw"}}>
        <div
          className="text"
          style={{ width: "40%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}
          ref={el => addToRefs(el, textRefs)}
        >
          <h1 className="text-white text-8xl text-left font-bold">AirPods Pro</h1>
          <p className="text-stone-400 text-4xl text-center">A magical connection to your devices.</p>
        </div>
        <div
          className="video"
          style={{ width: "60%", borderRadius: "30px", height: '100%' }}
          ref={el => addToRefs(el, videoRefs)}
        >
          <Airpods />
        </div>
      </div>

      <div className="third" style={{ display: "flex", gap: "10vw" }}>
        <div
          className="video"
          style={{ width: "70%", borderRadius: "30px", height: '100%' }}
          ref={el => addToRefs(el, videoRefs)}
        >
          <Ipad />
        </div>
        <div
          className="text"
          style={{ width: "30%", display: "flex", gap: "25px", flexDirection: "column", alignItems: "center", justifyContent: "center" }}
          ref={el => addToRefs(el, textRefs)}
        >
          <h1 className="text-white text-8xl text-left font-bold">iPad</h1>
          <p className="text-stone-400 text-4xl text-center">Touch, draw and type on one magical device.</p>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
