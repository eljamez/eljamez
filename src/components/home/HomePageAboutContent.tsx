"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function HomePageAboutContent() {
  const helloRef = useRef<HTMLHeadingElement>(null);
  const splitTextHelloRef = useRef<SplitText | null>(null);

  useGSAP(() => {
    if (helloRef.current) {
      // Create a new SplitText instance
      splitTextHelloRef.current = new SplitText(helloRef.current, {
        type: "words,chars", // Split by words and characters
      });

      // gsap.from(splitTextHelloRef.current.chars, {
      //   opacity: 0,
      //   y: 100,
      //   rotationX: 90,
      //   rotationY: 90,
      //   rotationZ: 90,
      //   duration: 0.8,
      //   ease: "power3.inOut",
      //   stagger: 0.2,
      // });

      gsap.to(splitTextHelloRef.current.chars, {
        opacity: 1,
        y: 100,
        x: 100,
        rotationX: 0,
        rotationY: 0,
        rotationZ: 0,
        duration: 0.8,
        ease: "power3.inOut",
        stagger: 0.2,
        scrollTrigger: {
          trigger: helloRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
          pin: true,
          //markers: true,
        },
      });
    }
    return () => {
      if (splitTextHelloRef.current) {
        splitTextHelloRef.current.revert();
      }
    };
  }, []);

  return (
    <div
      ref={helloRef}
      className="w-full flex bg-black flex-col items-center justify-center px-2 sm:px-4 relative overflow-hidden h-screen mix-blend-difference"
    >
      <h1 className="text-3xl uppercase font-oswald sm:text-6xl font-bold mb-6 text-white drop-shadow-hero text-center hover:scale-110 transition-all cursor-pointer hover:underline">
        Hello
      </h1>
      {/* <HomeHeader href="/about">About Me</HomeHeader>
      <HomeSubheader>
        I&apos;m a Senior Software Engineer based in Ojai, CA. I enjoy writing
        code and making apps that people like to use.
      </HomeSubheader> */}
    </div>
  );
}
