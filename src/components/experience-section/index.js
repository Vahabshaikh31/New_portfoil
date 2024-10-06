"use client";
import React from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";
import Image from "next/image";
import { NeonGradientCard } from "../ui/neon-gradient-card";
import { useRef, useEffect } from "react";
import gsap from "gsap";

const content = [
  {
    title: "Collaborative Editing",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,#06b6d4,#10b981)] flex items-center justify-center text-white">
        Collaborative Editing
      </div>
    ),
  },
  {
    title: "Real-time changes",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/linear.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Version control",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,#f97316,#eab308)] flex items-center justify-center text-white">
        Version control
      </div>
    ),
  },
  {
    title: "Running out of content",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,#06b6d4,#10b981)] flex items-center justify-center text-white">
        Running out of content
      </div>
    ),
  },
];

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
    <div className="p-10 ">
      <h1 className=" font-bold text-white  text-3xl opacity-0" ref={text}>
        Internships And project Experience
      </h1>
      <div ref={div} className="opacity-0 mt-[1rem] bg-black">
        <NeonGradientCard className="max-w-full items-center justify-center text-center">
          <StickyScroll content={content} />
        </NeonGradientCard>
      </div>
    </div>
  );
}
