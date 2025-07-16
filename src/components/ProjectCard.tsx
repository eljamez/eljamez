"use client";

import { Project } from "@/util/consts";
import Image from "next/image";
import TechPill from "./TechPill";
interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="h-full bg-blend-saturation bg-slate-100 rounded-lg p-0 shadow overflow-hidden transform transition-all duration-300 min-h-[320px] sm:min-h-[420px] flex w-1/3 flex-shrink-0">
      <div className="w-20 bg-zinc-800 flex items-center justify-center">
        <h3 className="text-xl -rotate-90 sm:text-5xl font-bold text-zinc-100 mt-10 whitespace-nowrap">
          {project.title}
        </h3>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center">
        <Image
          src={project.image}
          alt={project.title}
          width={300}
          height={300}
          className="w-full flex-1 sm:h-40 object-cover object-top"
        />
        <div className="p-3 sm:p-5 flex flex-col gap-6 h-full flex-1 text-center">
          <span className="text-sm sm:text-base text-zinc-600 mb-2 font-silkscreen tracking-wide">
            {project.employer}
          </span>
          <p className="text-zinc-800 mb-4 text-lg flex-1 sm:text-xl leading-relaxed">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2  mb-4 justify-center">
            {project.tech.map((tech, tIdx) => (
              <TechPill key={tIdx} tech={tech} />
            ))}
          </div>
          {/* <div className="flex flex-1 gap-2 items-end justify-center">
            <span className="hover:scale-110 transition-all text-zinc-800 hover:underline font-silkscreen mt-auto text-sm sm:text-base">
              View Project
            </span>
          </div> */}
        </div>
      </div>
    </div>
  );
}
