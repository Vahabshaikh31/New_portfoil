"use client";
import React from "react";
import { FloatingNav } from "../ui/floating-navbar";
import {
  IconHome,
  IconBriefcase,
  IconCode,
  IconMessage,
  IconUser,
} from "@tabler/icons-react"; // Changed to include relevant icons
import Github from "../../../public/assets/github";
import { useEffect, useState } from "react";

export function FloatingNavDemo() {
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowComponent(true);
    }, 8000);
    return () => clearTimeout(timer);
  }, []);

  const navItems = [
    {
      name: "Home",
      link: "home", // ID of the home section
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Skills",
      link: "skills", // ID of the skills section
      icon: <IconCode className="h-4 w-4 text-neutral-500 dark:text-white" />, // Updated icon to "Code" for Skills
    },
    {
      name: "Projects",
      link: "projects", // ID of the projects section
      icon: (
        <IconBriefcase className="h-4 w-4 text-neutral-500 dark:text-white" />
      ), // Updated icon to "Briefcase" for Projects
    },
    {
      name: "Experience",
      link: "experience", // ID of the experience section
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "contact", // ID of the contact section
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];

  return (
    <div className="relative w-full">
      {showComponent && <FloatingNav navItems={navItems} />}
    </div>
  );
}
