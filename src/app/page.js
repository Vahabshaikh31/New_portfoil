import { useMemo } from "react";
import { ParticlesDemo, WavyBackgroundDemo } from "@/components/background";
import { AuroraBackgroundDemo } from "@/components/background-Aroora";
import { StickyScrollRevealDemo } from "@/components/experience-section";
import { TimelineDemo } from "@/components/Project-section";
import SkillSection from "@/components/skil-section";
import "./globals.css";
import Loading from "@/components/Loading";

export default function Home() {
  // Memoize static components that don't need to be re-rendered
  const ParticlesMemo = useMemo(() => <ParticlesDemo />, []);
  const SkillSectionMemo = useMemo(() => <SkillSection />, []);
  const TimelineMemo = useMemo(() => <TimelineDemo />, []);
  const StickyScrollMemo = useMemo(() => <StickyScrollRevealDemo />, []);
  const AuroraBackgroundMemo = useMemo(() => <AuroraBackgroundDemo />, []);

  return (
    <>
      <Loading />
      <div className="relative">
        {ParticlesMemo}
        {SkillSectionMemo}
      </div>
      <div className="h-[100vh]">
        {TimelineMemo}
        <div className="h-[100vh] flex justify-center items-center ov">
          {StickyScrollMemo}
        </div>
        <div className="h-[100vh] mt-10">{AuroraBackgroundMemo}</div>
      </div>
    </>
  );
}
