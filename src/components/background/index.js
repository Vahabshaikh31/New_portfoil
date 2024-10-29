"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import Particles from "@/components/ui/particles";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import "@/app/globals.css";

gsap.registerPlugin(ScrollTrigger);

export function ParticlesDemo() {
  const { theme } = useTheme("light");
  const [showComponent, setShowComponent] = useState(false);
  const [color, setColor] = useState("#ffffff");

  const textRef1 = useRef(null);
  const textRef2 = useRef(null);
  const textRef3 = useRef(null);

  // Change particle color based on theme
  useEffect(() => {
    setColor(theme === "dark" ? "#000000" : "#ffffff");

    const timer = setTimeout(() => {
      setShowComponent(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, [theme]);

  useEffect(() => {
    if (textRef1.current) {
      gsap.to(textRef1.current, {
        x: "10%",
        opacity: 1,
        duration: 1.2,
      });
    }
    if (textRef2.current) {
      gsap.to(textRef2.current, {
        y: "-20%",
        opacity: 1,
        duration: 0.9,
      });
    }
    if (textRef3.current) {
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
    }
  }, []);

  return (
    <div className="relative flex h-[100vh] w-full bg-black text-white overflow-hidden">
      {/* Particles and Background Elements */}
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color={color}
        refresh
      />

      {/* Main Content */}
      <div className="flex w-full flex-col justify-center items-start px-4 lg:px-20">
        {/* Top Section: Developer Label */}
        <div className="flex w-full justify-between ">
          <h1
            className="text-[#E84A4A] text-3xl md:text-4xl font-semibold tracking-wider opacity-0"
            ref={textRef1}
          >
            Developer <span className="text-white">{"</>"}</span>
          </h1>
        </div>

        {/* Name Section */}
        <div className="mt-16 text-left">
          <h1
            className="text-[#E84A4A] text-5xl md:text-7xl opacity-0"
            style={{ fontFamily: "MajorMonoDisplay" }}
            ref={textRef2}
          >
            Abdulvahab shaikh
          </h1>
        </div>

        {/* Subtitle Section */}
        <div className="mt-8 w-full md:w-[70%] lg:w-[60%]">
          <p className="text-xl md:text-2xl text-left text-gray-300">
            As a passionate Full Stack Developer, I specialize in building web
            applications using modern technologies like React, Next.js, Node.js,
            and MongoDB. With a strong foundation in both Frontend and Backend
            development.
          </p>
        </div>

        {/* Download Button */}
        <div className="mt-12 w-full md:w-[60%]">
          <button className="bg-transparent cursor-pointer text-red-500 hover:text-white py-2 px-4 md:px-6 p-10 transition-all duration-300 btn z-20">
            Download CV
          </button>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 cursor-pointer z-20">
            <div className="scrolldown">
              <div className="chevrons">
                <div className="chevrondown" />
                <div className="chevrondown" />
              </div>
            </div>
          </div>
          <div className="w-[15rem] md:w-[30rem] h-[15rem] md:h-[30rem] rounded-full bg-red-500 absolute bottom-[-100px] md:bottom-[-350px] left-[-50px] md:left-[-150px] blur-[100px] md:blur-[200px]"></div>
        </div>

        {/* 3D Fluid Background Image */}
        <div className="absolute top-0 right-0 h-full z-10 w-full lg:w-[100%] md:w-[80%] opacity-80 hidden sm:block">
          <Image
            src="/assets/Focus.png" // Path if in public folder
            alt="Fluid 3D Visual"
            layout="fill"
            objectFit="cover"
            className="opacity-80"
          />
          <div className="w-[10rem] md:w-[20rem] h-[10rem] md:h-[20rem] rounded-full bg-red-500 absolute top-[-150px] md:top-[-300px] right-[-50px] md:right-[-100px] blur-[50px] md:blur-[100px]"></div>
        </div>
      </div>
    </div>
  );
}
