import { Project } from "@/util/consts";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  project: Project;
  asLink?: boolean; // If true, wrap the card in a Link to the project page
  className?: string;
}

export default function ProjectCard({
  project,
  asLink = false,
  className = "",
}: ProjectCardProps) {
  const cardContent = (
    <div
      className={`bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-blue-500/20 rounded-lg p-0 shadow border border-zinc-800 overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-sky-400 group min-h-[320px] sm:min-h-[420px] flex flex-col ${className}`}
    >
      <Image
        src={project.image}
        alt={project.title}
        width={1000}
        height={1000}
        className="w-full h-32 sm:h-40 object-cover object-top transition-all duration-300 group-hover:brightness-110 group-hover:scale-105"
      />
      <div className="p-3 sm:p-5 flex flex-col h-full flex-1">
        <h3 className="text-lg sm:text-xl font-bold mb-0 font-russo-one text-white drop-shadow">
          {project.title}
        </h3>
        <span className="text-xs text-zinc-400 mb-2 font-silkscreen tracking-wide">
          {project.employer}
        </span>
        <p className="text-zinc-100 mb-4 text-sm sm:text-base">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, tIdx) => (
            <span
              key={tIdx}
              className="bg-sky-800 text-sky-200 px-2 sm:px-3 py-1 rounded-full text-xs font-silkscreen tracking-wide border border-sky-700 shadow-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        {asLink && (
          <span className="text-sky-200 hover:underline font-silkscreen mt-auto text-sm sm:text-base">
            View Project
          </span>
        )}
      </div>
    </div>
  );

  if (asLink) {
    return (
      <Link
        href={`/work/${project.slug}`}
        className="block focus:outline-none focus:ring-2 focus:ring-sky-400"
      >
        {cardContent}
      </Link>
    );
  }
  return cardContent;
}
