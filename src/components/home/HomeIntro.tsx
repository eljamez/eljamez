"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { FaNodeJs, FaReact } from "react-icons/fa";
import {
  SiPostgresql,
  SiPython,
  SiSvelte,
  SiTailwindcss,
} from "react-icons/si";
import H3 from "../H3";
import Database from "../svgs/Database";
import Ui from "../svgs/Ui";
import HomePageSectionContainer from "./HomePageSectionContainer";

export default function HomeIntro() {
  const introContainerRef = useRef<HTMLDivElement>(null);
  const frontendRef = useRef<HTMLDivElement>(null);
  const backendRef = useRef<HTMLDivElement>(null);
  const reactRef = useRef<HTMLDivElement>(null);
  const nodeRef = useRef<HTMLDivElement>(null);
  const svelteRef = useRef<HTMLDivElement>(null);
  const tailwindRef = useRef<HTMLDivElement>(null);
  const pythonRef = useRef<HTMLDivElement>(null);
  const postgresRef = useRef<HTMLDivElement>(null);
  const fullStackRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    if (window.innerWidth < 768) {
      return;
    }

    let mm = gsap.matchMedia();

    mm.add("(min-width: 769px)", () => {
      // desktop setup code here...
      if (frontendRef.current) {
        gsap.from(frontendRef.current, {
          opacity: 0,
          x: 800,
          duration: 1,
          scrollTrigger: {
            trigger: frontendRef.current,
            start: "top 80%",
            end: "bottom 50%",
          },
          ease: "power2.inOut",
        });
      }

      if (fullStackRef.current) {
        gsap.from(fullStackRef.current, {
          opacity: 0,
          scaleX: 0,
          duration: 1,
          scrollTrigger: {
            trigger: fullStackRef.current,
            start: "top 80%",
            end: "bottom 50%",
          },
          ease: "power2.inOut",
        });
      }

      if (backendRef.current) {
        gsap.from(backendRef.current, {
          opacity: 0,
          x: -800,
          duration: 1,
          delay: 0.5,
          scrollTrigger: {
            trigger: backendRef.current,
            start: "top 80%",
            end: "bottom 50%",
          },
          ease: "power2.inOut",
        });
      }

      if (reactRef.current) {
        gsap.from(reactRef.current, {
          y: -200,
          x: 300,
          scale: 0.5,
          scrollTrigger: {
            trigger: introContainerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      if (nodeRef.current) {
        gsap.from(nodeRef.current, {
          y: -300,
          x: -200,
          scale: 0.4,
          scrollTrigger: {
            trigger: introContainerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      if (svelteRef.current) {
        gsap.from(svelteRef.current, {
          y: -300,
          x: 200,
          scale: 0.5,
          scrollTrigger: {
            trigger: introContainerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      if (tailwindRef.current) {
        gsap.from(tailwindRef.current, {
          y: -300,
          x: -200,
          scale: 0.6,
          scrollTrigger: {
            trigger: introContainerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      if (pythonRef.current) {
        gsap.from(pythonRef.current, {
          y: -350,
          x: 100,
          scale: 0.8,
          scrollTrigger: {
            trigger: introContainerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      if (postgresRef.current) {
        gsap.from(postgresRef.current, {
          y: -400,
          x: -200,
          scale: 1.2,
          scrollTrigger: {
            trigger: introContainerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    });

    // mm.add("(max-width: 768px)", () => {
    //   // mobile setup code here...
    // });
  });

  return (
    <HomePageSectionContainer className="bg-gradient-to-b from-teal-900 to-green-500 gap-10 max-sm:py-10">
      <div
        ref={introContainerRef}
        className="flex flex-col items-center justify-center flex-1 gap-10 max-sm:gap-4"
      >
        <div
          className="flex flex-col items-center justify-center"
          data-speed="0.9"
        >
          <H3>My name is</H3>
        </div>
        <h2 className="sm:mix-blend-difference z-20 text-3xl sm:text-[7rem] ">
          James Augustus Hall.
        </h2>
        <div className="flex flex-row gap-4 bg-blur">
          <div
            ref={frontendRef}
            className="text-white max-sm:hidden font-bold text-2xl"
          >
            <Ui />
          </div>
          <div ref={fullStackRef} data-speed="0.9">
            <H3>I am a full stack engineer.</H3>
          </div>
          <div
            ref={backendRef}
            className="text-white max-sm:hidden font-bold text-2xl"
          >
            <Database />
          </div>
        </div>

        <div className="flex flex-col max-sm:mt-10 sm:flex-row gap-10 sm:gap-4 z-0 text-4xl sm:text-[10rem] text-white">
          <div
            ref={reactRef}
            data-speed="0.3"
            className="max-sm:animate-spin sm:opacity-40 sm:translate-y-10"
          >
            <FaReact />
          </div>
          <div
            ref={nodeRef}
            data-speed="0.2"
            className="sm:opacity-40 sm:translate-y-10"
          >
            <FaNodeJs className="" />
          </div>
          <div
            ref={svelteRef}
            data-speed="0.4"
            className="sm:opacity-40 sm:translate-y-10"
          >
            <SiSvelte className="" />
          </div>
          <div
            ref={tailwindRef}
            data-speed="0.3"
            className="sm:opacity-40 sm:translate-y-10"
          >
            <SiTailwindcss className="" />
          </div>
          <div
            ref={pythonRef}
            data-speed="0.2"
            className="sm:opacity-40 sm:translate-y-10"
          >
            <SiPython />
          </div>
          <div
            ref={postgresRef}
            data-speed="0.3"
            className="sm:opacity-40 sm:translate-y-10"
          >
            <SiPostgresql />
          </div>
        </div>
      </div>
    </HomePageSectionContainer>
  );
}
