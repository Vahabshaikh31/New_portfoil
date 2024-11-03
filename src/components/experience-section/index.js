"use client";
import React from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";
import Image from "next/image";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { WavyBackgroundDemo } from "../background";
import { WavyBackground } from "../ui/wavy-background";
import { content } from "./data";
export function StickyScrollRevealDemo() {
  const text = useRef(null);
  const div = useRef(null);

  useEffect(() => {
    gsap.to(text.current, {
      duration: 1,
      y: "-50%",
      opacity: 1,
      scrollTrigger: {
        trigger: text.current,
        start: "top 45%",
        end: "top 40%",
        scrub: 3,
      },
    });
    gsap.to(div.current, {
      duration: 0.5,
      opacity: 1,
      scrollTrigger: {
        trigger: div.current,
        start: "top 45%",
        end: "top 40%",
        scrub: 3,
      },
    });
  }, []);
  return (
    <div
      className="p-10 bg-black w-full h-full  relative overflow-hidden font-iceland"
      id="experience"
    >
      <WavyBackground className="max-w-4xl mx-auto pb-4 0">
        <h1
          className=" font-bold text-white  text-3xl opacity-0 font-iceland"
          ref={text}
        >
          Internships And project Experience
        </h1>
        <div ref={div} className="opacity-0 mt-[1rem]">
          <StickyScroll content={content} />
        </div>
      </WavyBackground>
    </div>
  );
}
