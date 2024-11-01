"use client"; // Ensure this component runs on the client side
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function Loading() {
  const [loading, setLoading] = useState(true);

  const loadingScreenRef = useRef(null);
  const h1Ref1 = useRef(null);
  const h1Ref2 = useRef(null);
  const h1Ref3 = useRef(null);

  useEffect(() => {
    // GSAP timeline for the loading screen
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(loadingScreenRef.current, {
          y: "-100%", // Move the loading screen out of view
          duration: 0.8, // Animation duration for screen exit
          ease: "power4.inOut",
          onComplete: () => setLoading(false), // Set loading to false after the animation completes
        });
      },
    });

    // Animating each text element
    tl.to(h1Ref1.current, { opacity: 1, y: "-50%", duration: 0.4 })
      .to(h1Ref1.current, { opacity: 0, duration: 0.4 }, "+=.4")
      .to(h1Ref2.current, { opacity: 1, y: "-50%", duration: 0.4 })
      .to(h1Ref2.current, { opacity: 0, duration: 0.4 }, "+=.4")
      .to(h1Ref3.current, { opacity: 1, y: "-50%", duration: 0.4 })
      .to(h1Ref3.current, { opacity: 0, duration: 0.4 }, "+=.4");

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <>
      {loading && (
        <div
          ref={loadingScreenRef}
          className="loading-screen fixed top-0 left-0 w-[100vw] h-[100vh] bg-black flex justify-center items-center z-[9999] text-white text-[1.5rem]"
        >
          <h1 ref={h1Ref1} className="absolute opacity-0 text-4xl">
            Welcome
          </h1>
          <h1 ref={h1Ref2} className="absolute opacity-0 text-4xl">
            To
          </h1>
          <h1 ref={h1Ref3} className="absolute opacity-0 text-4xl">
            Profile...
          </h1>
        </div>
      )}
    </>
  );
}
