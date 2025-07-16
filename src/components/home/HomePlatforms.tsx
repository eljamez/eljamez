"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useRef } from "react";
import H3 from "../H3";

export default function HomePlatforms() {
  const platformsSectionRef = useRef<HTMLDivElement>(null);
  const downArrowRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    gsap.to(platformsSectionRef.current, {
      xPercent: 80,
      duration: 0.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: platformsSectionRef.current,
        start: "top 50%",
        end: "bottom top",
        scrub: true,
      },
    });

    gsap.to(downArrowRef.current, {
      rotate: 90,
      x: -600,
      y: 600,
      scrollTrigger: {
        trigger: platformsSectionRef.current,
        start: "top 80%",
        end: "bottom top",
        scrub: true,
        markers: true,
      },
    });
  });
  return (
    <div
      className="w-screen flex relative bg-gradient-to-b from-blue-900 to-blue-500 text-white h-screen items-start justify-center text-center gap-10 z-50"
      ref={platformsSectionRef}
    >
      <div
        ref={downArrowRef}
        className="flex flex-col self-start items-start justify-center p-10"
      >
        <H3>Find me here ⤵️</H3>
      </div>
    </div>
  );
}
