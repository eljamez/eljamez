import { projects } from "@/util/consts";
import Link from "next/link";
import ProjectCard from "../ProjectCard";

export default function HomePageProjectsContent() {
  return (
    <>
      <h2 className="text-2xl md:text-4xl font-bold text-blue-400 mb-4">
        Featured Projects
      </h2>
      <p className="text-zinc-300 text-lg mb-6">
        Check out some of my favorite work:
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 items-stretch mb-6">
        {projects.slice(0, 3).map((project, idx) => (
          <ProjectCard key={idx} project={project} asLink className="h-full" />
        ))}
      </div>
      <div className="flex justify-center">
        <Link
          href="/projects"
          className="text-zinc-300 hover:text-zinc-100 underline"
        >
          View All Projects
        </Link>
      </div>
    </>
  );
}
