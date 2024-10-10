"use client";

import React from "react";
import { AuroraBackground } from "../ui/aurora-background";
import { SignupFormDemo } from "../example/signup-form-demo";
import SparklesText from "../ui/sparkles-text";

export function AuroraBackgroundDemo() {
  return (
    <AuroraBackground>
      <div className="flex w-[60%] justify-between items-center ">
        <div className="text-white ">
          <SparklesText text="Contact Me " />

          <p className=" text-[3rem]">Just type Hii I will Catch you!</p>
        </div>
        <div className="z-10">
          <SignupFormDemo />
        </div>
      </div>
    </AuroraBackground>
  );
}
