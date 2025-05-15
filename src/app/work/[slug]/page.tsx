import { projects } from "@/util/consts";
import Image from "next/image";
import { notFound } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) return notFound();

  return (
    <div className="max-w-3xl mx-auto flex flex-col gap-8">
      <a
        href="/work"
        className="flex items-center gap-2 text-sky-400 hover:underline font-silkscreen mb-4"
      >
        <FaArrowLeft /> Back to Work
      </a>
      <div className="bg-zinc-900 rounded-lg shadow p-6 border border-zinc-800">
        <Image
          src={project.image}
          alt={project.title}
          width={1000}
          height={1000}
          className="w-full h-56 object-cover object-top rounded mb-6 border-zinc-700 border-2"
        />
        <h1 className="text-3xl font-russo-one mb-2">{project.title}</h1>
        <span className="text-sm text-zinc-400 mb-2 font-silkscreen tracking-wide block">
          {project.employer}
        </span>
        <p className="text-zinc-400 mb-4 text-lg">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech, idx) => (
            <span
              key={idx}
              className="bg-sky-800 text-sky-200 px-3 py-1 rounded-full text-xs font-silkscreen tracking-wide border border-sky-700 shadow-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="text-zinc-200 leading-relaxed mb-6 whitespace-pre-line">
          {project.details}
        </div>
        {project.link && project.link !== "#" && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-6 py-2 bg-sky-700 hover:bg-sky-600 text-white rounded font-silkscreen transition-colors"
          >
            View Live / Source
          </a>
        )}
      </div>
    </div>
  );
}
