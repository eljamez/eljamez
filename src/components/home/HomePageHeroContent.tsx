"use client";

import { useRef } from "react";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import HomePageSectionContainer from "./HomePageSectionContainer";

gsap.registerPlugin(ScrollTrigger);

export default function HomePageHeroContent() {
  const nameRef = useRef<HTMLDivElement>(null);
  const splitTextNameRef = useRef<SplitText>(null);

  const titleRef = useRef<HTMLDivElement>(null);
  const splitTextTitleRef = useRef<SplitText>(null);

  useGSAP(() => {
    if (nameRef.current) {
      // Create a new SplitText instance
      splitTextNameRef.current = new SplitText(nameRef.current, {
        type: "words,chars", // Split by words and characters
      });

      // Animate the name
      // gsap.from(splitTextNameRef.current.chars, {
      //   opacity: 0,
      //   y: -100,
      //   rotationY: 90,
      //   stagger: 0.02,
      //   duration: 2,
      //   direction: "reverse",
      //   ease: "power3.out",
      // });

      gsap.to(splitTextNameRef.current.chars, {
        opacity: 0,
        scale: 3,
        blur: 10,
        stagger: 0.02,
        letterSpacing: 40,
        duration: 1,
        scrollTrigger: {
          trigger: nameRef.current,
          start: "clamp(top 35%)",
          end: "clamp(bottom 15%)",
          //scrub: true,
          //markers: true,
        },
      });
    }

    if (titleRef.current) {
      splitTextTitleRef.current = new SplitText(titleRef.current, {
        type: "words,chars", // Split by words and characters
      });

      // Animate the title
      gsap.from(splitTextTitleRef.current.chars, {
        opacity: 0,
        y: 100,
        stagger: {
          each: 0.02,
          from: "end",
        },
        rotationY: 90,
        duration: 2,
        ease: "power3.out",
        direction: "reverse",
        delay: 1,
      });
    }

    // Cleanup function for GSAP animations
    return () => {
      // Revert the SplitText instance when the component unmounts
      if (splitTextNameRef.current) {
        splitTextNameRef.current.revert();
      }
    };
  }, []);
  return (
    <HomePageSectionContainer>
      <div className="relative z-10 px-4 md:px-12 mix-blend-luminosity">
        <h1
          ref={nameRef}
          className="name text-3xl text-white sm:text-5xl md:text-6xl font-oswald font-bold tracking-wider drop-shadow-hero text-center mb-2 mix-blend-difference"
        >
          JAMES AUGUSTUS HALL
        </h1>
        <p
          ref={titleRef}
          className="title text-white font-oswald font-bold text-2xl sm:text-3xl md:text-4xl tracking-wider drop-shadow-hero text-center mb-1"
        >
          SENIOR SOFTWARE ENGINEER / APP BUILDER
        </p>
        {/* <p className="text-turquoise-300 font-oswald font-bold text-xl sm:text-3xl md:text-4xl tracking-wider text-center">
          APP BUILDER
        </p> */}
      </div>
    </HomePageSectionContainer>
  );
}
