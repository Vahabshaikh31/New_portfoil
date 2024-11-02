import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { data } from "./data";
export function TimelineDemo() {
  
  return (
    <div className="w-full" id="projects">
      <Timeline data={data} />
    </div>
  );
}
