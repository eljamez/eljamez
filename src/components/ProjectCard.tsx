import { Project } from "@/util/consts";
import Image from "next/image";
import Link from "next/link";
import TechPill from "./TechPill";
interface ProjectCardProps {
  project: Project;
  className?: string;
}

export default function ProjectCard({
  project,
  className = "",
}: ProjectCardProps) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="block focus:outline-none focus:ring-2 focus:ring-sky-400"
    >
      <div
        className={`bg-blend-saturation bg-white/50 rounded-lg p-0 shadow overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl group min-h-[320px] sm:min-h-[420px] flex flex-col backdrop-blur-md ${className}`}
      >
        <Image
          src={project.image}
          alt={project.title}
          width={1000}
          height={1000}
          className="w-full h-32 sm:h-40 object-cover object-top transition-all duration-300 group-hover:brightness-110 group-hover:scale-105"
        />
        <div className="p-3 sm:p-5 flex flex-col h-full flex-1 text-center">
          <h3 className="text-xl sm:text-2xl font-bold mb-0 font-russo-one drop-shadow">
            {project.title}
          </h3>
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
    </Link>
  );
}
