"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useRef } from "react";
import H3 from "../H3";

const icons = ["⌨️", "🎸", "🎹", "⛰️", "🎲"];

export default function HomePlatforms() {
  const platformsSectionRef = useRef<HTMLDivElement>(null);
  const downArrowRef = useRef<HTMLDivElement>(null);
  const iconsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (window.innerWidth < 768) {
      return;
    }

    if (
      !downArrowRef.current ||
      !platformsSectionRef.current ||
      !iconsRef.current
    ) {
      return;
    }

    // calculate the amount to slide based on the height of the down arrow text
    const amountToSlide =
      window.innerWidth - (downArrowRef.current.offsetHeight || 0);

    gsap.to(platformsSectionRef.current, {
      x: amountToSlide,
      duration: 0.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: platformsSectionRef.current,
        start: "bottom bottom",
        end: "bottom top",
        scrub: 2,
        pin: true,
        pinSpacing: true,
      },
    });

    gsap.to(downArrowRef.current, {
      rotate: 90,
      duration: 1,
      yPercent: -100,
      ease: "power2.out",
      scrollTrigger: {
        trigger: platformsSectionRef.current,
        start: "bottom bottom",
        end: "bottom top",
        scrub: 1,
      },
    });

    // rotate the icons container
    gsap.to(iconsRef.current, {
      x:
        platformsSectionRef.current.offsetLeft +
        downArrowRef.current.offsetHeight,
      y: platformsSectionRef.current.offsetTop - iconsRef.current.offsetTop,
      duration: 0.5,
      ease: "linear",
      rotate: 90,
      scrollTrigger: {
        trigger: platformsSectionRef.current,
        start: "bottom bottom",
        end: "bottom top",
        scrub: 1,
      },
    });

    // slide them in from the top
    gsap.from(iconsRef.current.children, {
      opacity: 0,
      yPercent: -500,
      duration: 1,
      ease: "power2.out",
      stagger: 0.1,
      scrollTrigger: {
        trigger: platformsSectionRef.current,
        start: "top 80%",
      },
    });

    gsap.to(iconsRef.current.children, {
      rotate: -90,
      ease: "linear",
      scrollTrigger: {
        trigger: platformsSectionRef.current,
        start: "bottom bottom",
        end: "bottom top",
        scrub: 2,
      },
    });
  });

  return (
    <div
      className="w-screen flex flex-col relative bg-gradient-to-b from-blue-900 to-blue-500 text-white sm:h-screen items-start justify-start text-center gap-10 z-50"
      ref={platformsSectionRef}
    >
      <div
        ref={downArrowRef}
        className="flex flex-col sm:self-start sm:items-start origin-bottom-left sm:justify-start justify-center items-center p-10 max-sm:w-full"
      >
        <H3>Find me here ⤵️</H3>
      </div>

      <div
        className="max-sm:hidden flex items-start justify-start px-10 gap-4 text-6xl origin-bottom-left"
        ref={iconsRef}
      >
        {icons.map((icon, index) => (
          <div className="flex-1" key={index}>
            <span className="text-9xl">{icon}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
