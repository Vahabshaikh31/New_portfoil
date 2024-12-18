"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const StickyScroll = ({ content, contentClassName }) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef(null);

  const cardLength = content.length;

  // Pre-calculate the breakpoints to avoid recalculating every scroll event
  const cardsBreakpoints = content.map((_, index) => index / cardLength);

  const backgroundColors = [
    "#0f172a", // slate-900
    "#0f172a", // black
    "#18181b", // neutral-900
  ];

  const linearGradients = [
    "linear-gradient(to bottom right, #06b6d4, #10b981)",
    "linear-gradient(to bottom right, #ec4899, #6366f1)",
    "linear-gradient(to bottom right, #f97316, #eab308)",
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const newActiveIndex = parseInt(entry.target.dataset.index);
            setActiveCard(newActiveIndex);
            setBackgroundGradient(
              linearGradients[newActiveIndex % linearGradients.length]
            );
          }
        });
      },
      {
        root: null,
        threshold: 0.5,
      }
    );

    const sections = document.querySelectorAll(".scroll-section");
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <motion.div
      className="h-[30rem] overflow-y-auto flex justify-center relative space-x-10 rounded-md p-10"
      ref={ref}
    >
      <div className="relative flex items-start px-4">
        <div className="max-w-2xl text-left">
          {content.map((item, index) => (
            <div
              key={item.title + index}
              data-index={index}
              className="my-20 scroll-section"
            >
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                transition={{ duration: 0.3 }} // Smooth transition for opacity
                className="text-2xl font-bold text-slate-100"
              >
                {item.title} <span className="text-sm">{item.Cname}</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                transition={{ duration: 0.3 }} // Smooth transition for opacity
                className="text-slate-300 max-w-sm mt-10"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <div
        style={{ background: backgroundGradient }}
        className={cn(
          "hidden lg:block h-60 w-80 rounded-md bg-white sticky top-10 overflow-hidden",
          contentClassName
        )}
      >
        {content[activeCard]?.content ?? null}
      </div>
    </motion.div>
  );
};
