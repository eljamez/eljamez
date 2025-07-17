"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import { useRef } from "react";
import { FaCss3, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import {
  SiNextdotjs,
  SiSass,
  SiSvelte,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import H3 from "../H3";

gsap.registerPlugin(SplitText);

const frontendTech = [
  {
    name: "HTML",
    icon: <FaHtml5 />,
  },
  {
    name: "CSS",
    icon: <FaCss3 />,
  },
  {
    name: "Sass",
    icon: <SiSass />,
  },
  {
    name: "JavaScript",
    icon: <FaJs />,
  },
  {
    name: "GSAP",
    icon: <FaJs />,
  },
  {
    name: "React",
    icon: <FaReact />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs />,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
  },
  {
    name: "Svelte",
    icon: <SiSvelte />,
  },
];

export default function HomeFrontend() {
  const frontendContainerRef = useRef<HTMLDivElement>(null);
  // line 1
  const iUseRef = useRef<HTMLHeadingElement>(null);
  const splitTextIUseRef = useRef<SplitText | null>(null);
  // tech
  const techRef = useRef<HTMLDivElement>(null);
  // line 2
  const line2Ref = useRef<HTMLHeadingElement>(null);
  const splitTextLine2Ref = useRef<SplitText | null>(null);

  useGSAP(
    () => {
      if (window.innerWidth < 768) {
        return;
      }

      if (!frontendContainerRef.current) {
        return;
      }

      // "line 1" animation
      if (iUseRef.current) {
        splitTextIUseRef.current = new SplitText(iUseRef.current, {
          type: "words,chars",
        });

        // Top line animation
        if (splitTextIUseRef.current) {
          gsap.from(splitTextIUseRef.current.chars, {
            opacity: 0,
            y: 200,
            scale: 0.5,
            duration: 0.5,
            ease: "power2.out",
            stagger: 0.1,
            rotation: 180,
            scrollTrigger: {
              trigger: frontendContainerRef.current,
              start: "top 50%",
              end: "bottom 20%",
            },
          });
        }
      }

      // Tech animation, scrubbable and pinned
      if (techRef.current) {
        const horizontalContentWidth = techRef.current.scrollWidth;
        const distanceToScroll = horizontalContentWidth - window.innerWidth;

        gsap.to(techRef.current, {
          x: -distanceToScroll,
          ease: "none",
          scrollTrigger: {
            trigger: frontendContainerRef.current,
            start: "bottom bottom",
            end: () => `+=${window.innerHeight + horizontalContentWidth}`,
            scrub: true,
            pin: true,
            pinSpacing: true,
          },
        });

        gsap.to(techRef.current.children, {
          duration: 0.5,
          opacity: 1,
          ease: "power2.out",
          stagger: 0.1,
          rotation: 0,
          scrollTrigger: {
            trigger: frontendContainerRef.current,
            start: "bottom bottom",
            end: () => `+=${window.innerHeight + horizontalContentWidth}`,
          },
        });
      }

      // "line 2" animation
      if (line2Ref.current) {
        splitTextLine2Ref.current = new SplitText(line2Ref.current, {
          type: "words,chars",
        });

        gsap.from(splitTextLine2Ref.current.chars, {
          opacity: 0,
          y: -200,
          scale: 0.5,
          duration: 0.5,
          ease: "power2.out",
          stagger: 0.1,
          direction: "reverse",
          rotation: 180,
          scrollTrigger: {
            trigger: frontendContainerRef.current,
            start: "top 20%",
            end: "bottom top",
          },
        });
      }

      return () => {
        if (splitTextIUseRef.current) {
          splitTextIUseRef.current.revert();
        }
      };
    },
    { scope: frontendContainerRef } // Run only once on mount, no dependencies
  );

  return (
    <div
      className="bg-gradient-to-b from-purple-900 to-violet-500 text-white sm:h-screen w-screen flex flex-col relative items-center justify-center gap-10 px-6 overflow-hidden max-sm:py-10"
      ref={frontendContainerRef}
    >
      <div ref={iUseRef} className="flex flex-col items-center justify-center">
        <H3>I use</H3>
      </div>

      <div
        className="flex flex-col sm:flex-row sm:flex-nowrap gap-10 h-auto min-w-auto translate-x-0 max-sm:text-center sm:self-start px-60"
        ref={techRef}
      >
        {frontendTech.map((tech, idx) => (
          <h2
            className="text-nowrap text-green-500 font-bold text-2xl sm:text-[5rem] sm:rotate-12 sm:opacity-0"
            key={idx}
          >
            {tech.name}
          </h2>
        ))}
      </div>

      <div className="flex flex-col items-center justify-center" ref={line2Ref}>
        <H3>for a great UX.</H3>
      </div>
    </div>
  );
}
