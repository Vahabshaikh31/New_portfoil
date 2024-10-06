"use client";

import { useEffect, useRef } from "react";
import { BoxRevealDemo } from "../background-skill";
import { IconCloudDemo } from "../skill";
import gsap from "gsap";
import { cn } from "@/lib/utils";
import GridPattern from "../ui/grid-pattern";

const SkillSection = () => {
  const cloud = useRef(null);
  const text = useRef(null);

  useEffect(() => {
    // Adjust x offset based on screen width
    const screenWidth = window.innerWidth;
    let xOffset;

    if (screenWidth < 640) {
      // Small screens (e.g., phones)
      xOffset = "0%";
    } else if (screenWidth >= 640 && screenWidth < 1024) {
      // Medium screens (e.g., tablets)
      xOffset = "-10%";
    } else {
      // Large screens (e.g., desktops)
      xOffset = "-20%";
    }

    gsap.to(cloud.current, {
      scale: 1,
      x: xOffset,
      delay: 1,
      opacity: 1,
      scrollTrigger: {
        trigger: cloud.current,
        start: "top 50%",
        end: "top 10%",
        scrub: 3,
      },
    });

    gsap.to(text.current, {
      scale: 1,
      // y: "-15%",
      delay: 1,
      opacity: 1,
      scrollTrigger: {
        trigger: text.current,
        start: "top 60%",
        end: "top 10%",
        scrub: 3,
      },
    });
  }, []);

  return (
    <div className="min-h-[80vh ] lg:min-h-[100vh] flex flex-col lg:flex-row lg:justify-between lg:items-center sm:justify-center sm:items-center px-4 md:px-8">
      <div
        ref={text}
        className="w-full  opacity-0 flex justify-center items-center mb-8 lg:mb-0"
      >
        <BoxRevealDemo />
      </div>
      <div
        ref={cloud}
        className="opacity-0 w-full flex justify-end items-center cloud"
      >
        <IconCloudDemo />
      </div>

      <GridPattern
        squares={[
          [4, 4],
          [5, 1],
          [8, 2],
          [5, 3],
          [5, 5],
          [10, 10],
          [12, 15],
          [15, 10],
          [10, 15],
          [15, 10],
          [10, 15],
          [15, 10],
        ]}
        className={cn(
          "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
        )}
      />
    </div>
  );
};

export default SkillSection;
