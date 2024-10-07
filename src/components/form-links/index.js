import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import { IconBrandGithub } from "@tabler/icons-react";
import Image from "next/image";
import LinkedIn from "../../../public/assets/linkedin";
import HackerRank from "../../../public/assets/hackerRank";
import LeetCode from "../../../public/assets/Leetcode";

export function FloatingDockDemo() {
  const links = [
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com", // Your GitHub link here
    },
    {
      title: "LinkedIn",
      icon: <LinkedIn />,
      href: "https://linkedin.com", // Your LinkedIn link here
    },
    {
      title: "HackerRank",
      icon: <HackerRank />,
      href: "https://www.hackerrank.com", // Your HackerRank link here
    },
    {
      title: "LeetCode",
      icon: <LeetCode />,
      href: "https://leetcode.com", // Your LeetCode link here
    },
  ];

  return (
    <div className="flex items-center justify-center  mt-3 w-full">
      <FloatingDock
        // only for demo, remove for production
        mobileClassName="translate-y-20"
        items={links}
      />
    </div>
  );
}
