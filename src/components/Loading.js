"use client"; // Ensure this component runs on the client side
import { useEffect, useState } from "react";
import { gsap } from "gsap";

export default function Loading() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(".loading-screen", {
          y: "-100%",
          duration: 0.8, // Animation duration
          onComplete: () => setLoading(false),
        });
      },
    });

    tl.to(".h1-1", { opacity: 1, y: "-50%", duration: 0.4 })
      .to(".h1-1", { opacity: 0, duration: 0.4 }, "+=.4")
      .to(".h1-2", { opacity: 1, y: "-50%", duration: 0.4 })
      .to(".h1-2", { opacity: 0, duration: 0.4 }, "+=.4")
      .to(".h1-3", { opacity: 1, y: "-50%", duration: 0.4 })
      .to(".h1-3", { opacity: 0, duration: 0.4 }, "+=.4");

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <>
      {loading && (
        <div className="loading-screen fixed top-0 left-0 w-[100vw] h-[100vh] bg-black flex justify-center items-center z-[9999] text-white text-[1.5rem]">
          <h1 className="h1-1 absolute opacity-0 text-4xl">Welcome</h1>
          <h1 className="h1-2 absolute opacity-0 text-4xl">To</h1>
          <h1 className="h1-3 absolute opacity-0 text-4xl">Profile...</h1>
        </div>
      )}
    </>
  );
}
