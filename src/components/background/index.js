"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import Particles from "@/components/ui/particles";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HyperText from "../ui/hyper-text";
import LetterPullup from "../ui/letter-pullup";
import ShimmerButton from "../ui/shimmer-button";

gsap.registerPlugin(ScrollTrigger);

export function ParticlesDemo() {
  const { theme } = useTheme("light");
  const [showComponent, setShowComponent] = useState(false); // State to control visibility
  const [color, setColor] = useState("#ffffff");

  const textRef2 = useRef(null);
  const textRef3 = useRef(null);

  // Change particle color based on theme
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowComponent(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, [theme]);

  useEffect(() => {
    gsap.to(textRef3.current, {
      scale: 1,
      opacity: 0,
      delay: 5,
      duration: 0.5,
      y: "30%",
      scrollTrigger: {
        trigger: textRef3.current,
        start: "top 45%",
        end: "top 40%",
        scrub: 3,
      },
    });
  }, []);

  return (
    <div className="relative flex h-[100vh] w-full text-white flex-col items-center justify-center overflow-hidden rounded-lg border md:shadow-xl">
      <div className="flex name text-7xl font-bold">
        {showComponent && (
          <div
            className=" flex flex-col items-center justify-center overflow-hidden rounded-md"
            ref={textRef2} // Assign ref to the text element
          >
            <HyperText text={"Abdulvahab Shaikh"} />
          </div>
        )}
      </div>

      <p
        className="flex des text-7xl font-bold"
        ref={textRef2} // Assign ref to the text element
      >
        {showComponent && (
          <LetterPullup words={"A Full Stack Developer"} delay={0.05} />
        )}
      </p>

      <p ref={textRef3}>
        {showComponent && (
          <ShimmerButton className="shadow-2xl mt-3 button">
            <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
              Resume
            </span>
          </ShimmerButton>
        )}
      </p>

      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color={color}
        refresh
      />
    </div>
  );
}
