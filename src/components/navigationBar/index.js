"use client";
import React from "react";
import { FloatingNav } from "../ui/floating-navbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import Github from "../../../public/assets/github";
import { useEffect, useState } from "react";

export function FloatingNavDemo() {
  const [showComponent, setShowComponent] = useState(false); // State to control visibility

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowComponent(true); // Show the component after delay
    }, 4800);
    return () => clearTimeout(timer);
  }, []);
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Projects",
      link: "/about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];

  return (
    <div className="relative w-full">
      {showComponent && <FloatingNav navItems={navItems} icon={<Github />} />}
    </div>
  );
}
