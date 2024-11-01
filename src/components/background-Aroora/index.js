"use client";

import React from "react";
import { AuroraBackground } from "../ui/aurora-background";
import { SignupFormDemo } from "../example/signup-form-demo";
import SparklesText from "../ui/sparkles-text";

export function AuroraBackgroundDemo() {
  return (
    <AuroraBackground>
      <div
        className="flex flex-col md:flex-row w-full max-w-[90%] md:w-[70%] justify-between items-center mx-auto px-4 md:px-0 space-y-8 md:space-y-0"
        id="contact"
      >
        {/* Text Section */}
        <div className="text-white text-center md:text-left">
          <SparklesText text="Contact me " />

          <p className="text-xl md:text-[3rem] leading-relaxed">
            Just type Hii, I will catch you!
          </p>
        </div>

        {/* Signup Form */}
        <div className="z-10 w-full md:w-auto">
          <SignupFormDemo />
        </div>
      </div>
    </AuroraBackground>
  );
}
