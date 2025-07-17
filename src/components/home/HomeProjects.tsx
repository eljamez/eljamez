"use client";

import { projects } from "@/util/consts";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useRef } from "react";
import H3 from "../H3";
import ProjectCard from "../ProjectCard";

export default function HomeProjects() {
  const projectsSectionRef = useRef<HTMLDivElement>(null);
  const projectsContentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (window.innerWidth < 768) {
      return;
    }

    if (projectsSectionRef.current && projectsContentRef.current) {
      const horizontalContentWidth = projectsContentRef.current.scrollWidth;

      const distanceToScroll = horizontalContentWidth - window.innerWidth;

      gsap.to(projectsContentRef.current, {
        x: -distanceToScroll,
        ease: "none",
        scrollTrigger: {
          trigger: projectsSectionRef.current,
          start: "bottom bottom",
          end: () => `+=${window.innerHeight + horizontalContentWidth}`,
          scrub: true,
          pin: true,
          pinSpacing: true,
        },
      });
    }
  });

  return (
    <div
      className="w-screen flex flex-col relative sm:overflow-hidden bg-gradient-to-b from-red-900 to-red-500 text-white sm:h-screen items-center justify-center text-center gap-10 max-sm:py-10"
      ref={projectsSectionRef}
    >
      <div className="flex flex-col items-center justify-center">
        <H3>
          Some of my <span className="text-green-500">work</span>
        </H3>
      </div>

      <div
        className="flex flex-col sm:flex-row sm:flex-nowrap w-auto gap-10 sm:h-[75vh] sm:translate-x-0 sm:self-start px-10 pb-2"
        ref={projectsContentRef}
      >
        {projects.slice(0, 6).map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </div>
    </div>
  );
}
