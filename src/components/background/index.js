"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import Particles from "@/components/ui/particles";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import "@/app/globals.css";
import { Link } from "react-scroll";

gsap.registerPlugin(ScrollTrigger);

export function ParticlesDemo() {
  const { theme } = useTheme("light");
  const [color, setColor] = useState("#ffffff");
  const [showComponent, setShowComponent] = useState(false);

  const textRef1 = useRef(null);
  const textRef2 = useRef(null);
  const textRef3 = useRef(null);
  const textRef4 = useRef(null);
  const textRef5 = useRef(null);
  const textRef6 = useRef(null);

  useEffect(() => {
    setColor(theme === "dark" ? "#000000" : "#ffffff");

    const timer = setTimeout(() => {
      setShowComponent(true);
    }, 2000); // Reduced the delay to 2 seconds for better user experience

    return () => clearTimeout(timer);
  }, [theme]);

  useEffect(() => {
    if (showComponent) {
      const timeline = gsap.timeline({
        defaults: { ease: "power2.out", duration: 1.1 },
      }); // Standardized duration

      // Animate the large background image first
      timeline.fromTo(
        textRef5.current,
        { opacity: 0, x: "20%", scale: 1.1 },
        { opacity: 1, x: "0%", scale: 1, duration: 1, ease: "power4.inOut" }
      );

      // Animate the "Developer" title
      timeline.fromTo(
        textRef1.current,
        { opacity: 0, x: "-100%", scale: 0.8 },
        { opacity: 1, x: "0%", scale: 1, duration: 1.2, delay: 0.2 }
      );

      // Animate the main name and description
      timeline
        .fromTo(
          textRef2.current,
          { opacity: 0, y: "100%" },
          { opacity: 1, y: "0%", duration: 1.4, ease: "power4.out" }
        )
        .fromTo(
          textRef3.current,
          { opacity: 0, y: "50%", scale: 0.9 },
          { opacity: 1, y: "0%", scale: 1, duration: 1.6, ease: "power3.out" },
          "-=1.2"
        );

      // Animate the Download CV button and the scroll-down chevrons
      timeline.fromTo(
        textRef4.current,
        { opacity: 0, x: "-20%" },
        {
          opacity: 1,
          x: "0%",
          scale: 1,
          duration: 0.2,
          ease: "elastic.out(1, 0.3)",
        }
      );

      timeline.fromTo(
        textRef6.current,
        { opacity: 0, y: "-20%" },
        {
          opacity: 1,
          y: "0%",
          scale: 1,
          duration: 0.3,
          ease: "elastic.out(1, 0.6)",
        }
      );

      ScrollTrigger.refresh();
    }
  }, [showComponent]);

  return (
    <div
      className="relative flex h-[100vh] w-full bg-black text-white overflow-hidden"
      id="home"
    >
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color={color}
        refresh
      />
      {showComponent && (
        <div className="flex w-full flex-col justify-center items-start px-5 md:px-10 sm:px-5 lg:px-20 z-10">
          <div className="flex w-full justify-between">
            <h1
              className="text-[#E84A4A] text-3xl md:text-4xl font-semibold tracking-wider opacity-0"
              ref={textRef1}
            >
              Developer <span className="text-white">{"</>"}</span>
            </h1>
          </div>

          <div className="mt-16 text-left z-10">
            <h1
              className="text-[#E84A4A] text-5xl md:text-7xl opacity-0"
              style={{ fontFamily: "MajorMonoDisplay" }}
              ref={textRef2}
            >
              Abdulvahab shaikh
            </h1>
          </div>

          <div
            className="mt-4 w-full md:w-[70%] lg:w-[60%] opacity-0"
            ref={textRef3}
          >
            <p className="text-xl md:text-2xl text-left text-gray-300">
              As a passionate Full Stack Developer, I specialize in building web
              applications using modern technologies like React, Next.js,
              Node.js, and MongoDB, with a strong foundation in both Frontend
              and Backend development.
            </p>
          </div>

          <div className="mt-12 w-full md:w-[60%] mr-24">
            <a
              href="/assets/Abdhulvaha_shaikh.pdf" // Adjusted the href path to correct path format
              download="Abdhulvaha_shaikh.pdf"
            >
              <button
                className="bg-transparent cursor-pointer text-red-500 hover:text-white py-2 px-4 md:px-6 p-10 transition-all duration-300 btn z-20 opacity-0"
                ref={textRef4}
              >
                Download CV
              </button>
            </a>
            <Link to={"skills"}>
              <div
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 cursor-pointer z-20"
                ref={textRef6}
              >
                <div className="scrolldown">
                  <div className="chevrons">
                    <div className="chevrondown" />
                    <div className="chevrondown" />
                  </div>
                </div>
              </div>
            </Link>
            <div className="w-[15rem] md:w-[30rem] h-[15rem] md:h-[30rem] rounded-full bg-red-500 absolute top-[-100px] md:top-[-350px] left-[-50px] md:left-[-150px] blur-[100px] md:blur-[200px]" />
          </div>

          <div
            className="absolute top-0 right-0 h-full z-100 w-full lg:w-[80%] md:w-[80%] opacity-80 hidden sm:block"
            ref={textRef5}
          >
            <Image
              src="/assets/Focus.png"
              alt="Fluid 3D Visual"
              layout="fill"
              objectFit="cover"
              className="opacity-80"
            />
          </div>
        </div>
      )}
    </div>
  );
}
