import { ParticlesDemo } from "@/components/background";
import { BoxRevealDemo } from "@/components/background-skill";
import { StickyScrollRevealDemo } from "@/components/experience-section";
import { TimelineDemo } from "@/components/Project-section";
import SkillSection from "@/components/skil-section";
import { IconCloudDemo } from "@/components/skill";

export default function Home() {
  return (
    <>
      {/* <Loading /> */}
      <div className="relative">
        <ParticlesDemo />
        <SkillSection />
      </div>
      <div className="h-[100vh]">
        <TimelineDemo />
      </div>
      {/* <StickyScrollRevealDemo /> */}
    </>
  );
}
