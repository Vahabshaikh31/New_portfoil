"use client";

import React, { useEffect, useRef } from "react";
import { AuroraBackground } from "../ui/aurora-background";
import { SignupFormDemo } from "../example/signup-form-demo";
import SparklesText from "../ui/sparkles-text";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

export function AuroraBackgroundDemo() {
  const textRef1 = useRef(null);
  const textRef2 = useRef(null);

  useEffect(() => {
    // Animate text 1 with ScrollTrigger
    gsap.fromTo(
      textRef1.current,
      { opacity: 0, y: "-20%" },
      {
        opacity: 1,
        y: "0%",
        duration: 1.2,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: textRef1.current, // Element to trigger the animation
          start: "top 80%", // When the top of the element is at 80% of the viewport
          end: "bottom 50%", // When the bottom of the element reaches 50% of the viewport
          scrub: true, // Smooth scrubbing effect
        },
      }
    );

    // Animate text 2 with ScrollTrigger
    gsap.fromTo(
      textRef2.current,
      { opacity: 0, x: "20%" },
      {
        opacity: 1,
        x: "0%",
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: textRef2.current,
          start: "top 80%",
          end: "bottom 50%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <AuroraBackground>
      <div
        className="flex flex-col md:flex-row w-full max-w-[90%] md:w-[70%] justify-between items-center mx-auto px-4 md:px-0 space-y-8 md:space-y-0"
        id="contact"
      >
        <div className="text-white text-center md:text-left ">
          <div>
            <SparklesText
              text="contact me"
              className="text-4xl sm:text-4xl md:text-6xl lg:text-7xl"
            />
          </div>
          <p className="text-xl md:text-[3rem] leading-relaxed" ref={textRef1}>
            Just type Hii, I will catch you!
          </p>
          <h1 className=" font-iceland text-[#E84A4A]">
            Abdulvahab.Dev@gmail.com
          </h1>
        </div>

        <div className="z-10 w-full md:w-auto">
          <SignupFormDemo />
        </div>
      </div>
    </AuroraBackground>
  );
}
