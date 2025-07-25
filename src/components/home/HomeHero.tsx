"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import { useRef } from "react";
import HomePageSectionContainer from "./HomePageSectionContainer";

gsap.registerPlugin(SplitText);

export default function HomeHero() {
  const titleRef = useRef<HTMLDivElement>(null);
  const downArrowRef = useRef<HTMLDivElement>(null);
  const splitTextTitleRef = useRef<SplitText | null>(null);
  useGSAP(() => {
    // check for refs
    if (!titleRef.current || !downArrowRef.current) {
      return;
    }

    splitTextTitleRef.current = new SplitText(titleRef.current, {
      type: "words,chars", // Split by words and characters
    });

    gsap.set(titleRef.current, {
      opacity: 1,
    });

    // Animate the title
    gsap.from(splitTextTitleRef.current.chars, {
      opacity: 0,
      y: 100,
      scale: 0.3,
      letterSpacing: 40,
      stagger: {
        each: 0.05,
      },
      rotationY: 90,
      duration: 0.5,
      delay: 0.5,
      ease: "back.out",
      //direction: "reverse",
    });

    gsap.to(downArrowRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: 5,
      ease: "back.out",
    });

    return () => {
      if (splitTextTitleRef.current) {
        splitTextTitleRef.current.revert();
      }
    };
  });
  return (
    <HomePageSectionContainer className="bg-black text-5xl sm:text-[10rem] max-sm:py-10">
      <div
        ref={titleRef}
        className="flex flex-col items-center justify-center opacity-0"
      >
        <h1 data-speed="0.5">Hello</h1>
      </div>
      <div
        ref={downArrowRef}
        className="max-sm:hidden flex items-center justify-center opacity-0 translate-y-[-500px]"
      >
        <h3 data-speed="0.4">⤵️</h3>
      </div>
    </HomePageSectionContainer>
  );
}
