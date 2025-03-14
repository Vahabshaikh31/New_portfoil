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
    const handleAnimations = () => {
      const screenWidth = window.innerWidth;
      let xOffset;

      if (screenWidth < 640) {
        xOffset = "0%"; // Small screens (e.g., phones)
      } else if (screenWidth >= 640 && screenWidth < 1024) {
        xOffset = "-5%"; // Medium screens (e.g., tablets)
      } else {
        xOffset = "-20%"; // Large screens (e.g., desktops)
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
        delay: 1,
        opacity: 1,
        scrollTrigger: {
          trigger: text.current,
          start: "top 60%",
          end: "top 10%",
          scrub: 3,
        },
      });
    };

    // Trigger animations
    handleAnimations();

    // Optional: Add a resize listener to recalculate animations if the window is resized
    window.addEventListener("resize", handleAnimations);

    // Cleanup event listener
    return () => {
      window.removeEventListener("resize", handleAnimations);
    };
  }, []);

  return (
    <div
      className="min-h-[90vh] lg:min-h-[100vh] flex flex-col lg:flex-row lg:justify-between lg:items-center sm:justify-center sm:items-center px-4 md:px-8 overflow-hidden mt-20"
      id="skills"
    >
      <div
        ref={text}
        className="w-full opacity-0 flex justify-center items-center mb-8 lg:mb-0"
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
