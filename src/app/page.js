import { ParticlesDemo } from "@/components/background";
import { AuroraBackgroundDemo } from "@/components/background-Aroora";
import { BoxRevealDemo } from "@/components/background-skill";
import { SignupFormDemo } from "@/components/example/signup-form-demo";
import { StickyScrollRevealDemo } from "@/components/experience-section";
import { TimelineDemo } from "@/components/Project-section";
import { RetroGridDemo } from "@/components/retroGride";
import SkillSection from "@/components/skil-section";
import { IconCloudDemo } from "@/components/skill";
import "./globals.css";

export default function Home() {
  return (
    <>
      {/* <Loading /> */}
      <div className="relative">
        <ParticlesDemo />
        <SkillSection />
      </div>
      <div className="bg-red-50 h-full w-full">
        {/* Uncomment below if you want to display text */}
        {/* <h1 className="font-iceland text-4xl">Welcome to My App</h1>
        <p className="font-geistSans">This is a monospace font example.</p> */}
      </div>
      <div className="h-[100vh]">
        <TimelineDemo />
        <div className="h-[100vh] flex justify-center items-center">
          <StickyScrollRevealDemo />
        </div>
        <div className="h-[100vh] mt-10">
          <AuroraBackgroundDemo />
        </div>
        {/* Use the Image component for optimized loading */}
      </div>
    </>
  );
}
