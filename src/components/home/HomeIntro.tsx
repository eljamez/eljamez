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
import Database from "../svgs/database";
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

  return (
    <HomePageSectionContainer className="bg-gradient-to-b from-teal-900 to-green-500 gap-10">
      <div
        ref={introContainerRef}
        className="flex flex-col items-center justify-center flex-1 gap-10"
      >
        <h3 data-speed="0.9">My name is</h3>
        <h2 className="mix-blend-difference z-20 sm:text-[7rem] ">
          James Augustus Hall.
        </h2>
        <div className="flex flex-row gap-4 bg-blur">
          <div ref={frontendRef} className="text-white font-bold text-2xl">
            <Ui />
          </div>
          <h3 ref={fullStackRef} data-speed="0.9">
            I am a full stack engineer.
          </h3>
          <div ref={backendRef} className="text-white font-bold text-2xl">
            <Database />
          </div>
        </div>

        <div className="flex gap-4 z-0">
          <div
            ref={reactRef}
            data-speed="0.3"
            className="text-white opacity-40 text-[8rem] translate-y-10"
          >
            <FaReact />
          </div>
          <div
            ref={nodeRef}
            data-speed="0.2"
            className="text-white opacity-40 text-[10rem] translate-y-10"
          >
            <FaNodeJs className="" />
          </div>
          <div
            ref={svelteRef}
            data-speed="0.4"
            className="text-white opacity-40 text-[10rem] translate-y-10"
          >
            <SiSvelte className="" />
          </div>
          <div
            ref={tailwindRef}
            data-speed="0.3"
            className="text-white opacity-40 text-[10rem] translate-y-10"
          >
            <SiTailwindcss className="" />
          </div>
          <div
            ref={pythonRef}
            data-speed="0.2"
            className="text-white opacity-40 text-[10rem] translate-y-10"
          >
            <SiPython />
          </div>
          <div
            ref={postgresRef}
            data-speed="0.3"
            className="text-white opacity-40 text-[10rem] translate-y-10"
          >
            <SiPostgresql />
          </div>
        </div>
      </div>
    </HomePageSectionContainer>
  );
}
