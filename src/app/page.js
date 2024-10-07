import { ParticlesDemo } from "@/components/background";
import { AuroraBackgroundDemo } from "@/components/background-Aroora";
import { BoxRevealDemo } from "@/components/background-skill";
import { SignupFormDemo } from "@/components/example/signup-form-demo";
import { StickyScrollRevealDemo } from "@/components/experience-section";
import Loading from "@/components/Loading";
import { TimelineDemo } from "@/components/Project-section";
import { RetroGridDemo } from "@/components/retroGride";
import SkillSection from "@/components/skil-section";
import { IconCloudDemo } from "@/components/skill";

export default function Home() {
  return (
    <>
      <Loading />
      <div className="relative">
        <ParticlesDemo />
        <SkillSection />
      </div>
      <div className="h-[100vh]">
        <TimelineDemo />
        <div className="h-[100vh] justify-center items-center flex">
          <StickyScrollRevealDemo />
        </div>{" "}
        <div className="h-[100vh] mt-10">
          <AuroraBackgroundDemo />
        </div>
      </div>
    </>
  );
}
