"use client";

import { useRef } from "react";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { BsSubstack } from "react-icons/bs";
import { FaCodepen, FaGithub, FaLinkedin, FaSoundcloud } from "react-icons/fa";
import HomeBackend from "./HomeBackend";
import HomeFrontend from "./HomeFrontend";
import HomeHero from "./HomeHero";
import HomeIntro from "./HomeIntro";
import HomeOjai from "./HomeOjai";
import HomePlatforms from "./HomePlatforms";
import HomeProjects from "./HomeProjects";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const socialLinks = [
  {
    href: "https://github.com/eljamez",
    text: "GitHub",
    icon: <FaGithub />,
  },
  {
    href: "https://www.linkedin.com/in/eljamez/",
    text: "LinkedIn",
    icon: <FaLinkedin />,
  },
  {
    href: "https://codepen.io/eljamez",
    text: "CodePen",
    icon: <FaCodepen />,
  },
  {
    href: "https://substack.com/@jamesaugustushall",
    text: "Substack",
    icon: <BsSubstack />,
  },
  {
    href: "https://soundcloud.com/eljamez",
    text: "SoundCloud",
    icon: <FaSoundcloud />,
  },
];

export default function HomePage2() {
  // wrapper refs
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const socialLinksContentRef = useRef<HTMLDivElement>(null);
  const socialLinksRef = useRef<HTMLUListElement>(null);
  useGSAP(
    () => {
      if (!wrapperRef.current || !contentRef.current) {
        return;
      }

      // Create the ScrollSmoother instance
      ScrollSmoother.create({
        wrapper: wrapperRef.current,
        content: contentRef.current,
        smooth: 1, // how long it takes to "catch up" to the scroll
        effects: true, // looks for data-speed and data-lag attributes on children
      });

      gsap.from(socialLinksRef.current, {
        duration: 1,
        y: -500,
        ease: "power2.out",
        scrollTrigger: {
          trigger: socialLinksContentRef.current,
          start: "top bottom", // when the top of the element hits 50% of the viewport height
          end: "bottom bottom",
          scrub: true,
        },
      });
    },
    { scope: wrapperRef }
  );
  return (
    <div id="smooth-wrapper" ref={wrapperRef}>
      <div id="smooth-content" ref={contentRef} className="text-white">
        <HomeHero />
        <HomeIntro />
        <HomeOjai />
        <HomeFrontend />
        <HomeBackend />
        <HomeProjects />
        <HomePlatforms />

        <div
          className="bg-gradient-to-b to-green-900 from-green-500 text-white rounded-none flex flex-col items-center justify-center text-center px-6 py-16 relative h-screen"
          ref={socialLinksContentRef}
        >
          <ul
            className="absolute top-0 left-0 flex gap-4 sm:gap-10 text-2xl sm:text-4xl mb-2 items-center justify-center z-50 p-10"
            ref={socialLinksRef}
          >
            {socialLinks.map((link) => (
              <li
                key={link.href}
                className="w-full sm:w-auto flex items-center justify-center"
              >
                <Link
                  href={link.href}
                  className="hover:scale-125 transition-all flex gap-4 items-center justify-center flex-col text-slate-100"
                  target="_blank"
                  rel="noopener noreferrer"
                  title={link.text}
                >
                  <span className="sm:text-4xl text-2xl">{link.icon}</span>
                  <span className="hidden sm:inline">{link.text}</span>
                </Link>
              </li>
            ))}
          </ul>
          <h2 className="text-white font-bold text-[5rem]">
            Have a wonderful day!
          </h2>
        </div>
      </div>
    </div>
  );
}
