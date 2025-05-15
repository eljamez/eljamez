import ProjectCard from "@/components/ProjectCard";
import { PastWork, pastWork, Project, projects } from "@/util/consts";
import { FaCodepen, FaGithub, FaLinkedin } from "react-icons/fa";

export default function WorkPage() {
  return (
    <div className="flex flex-col gap-8">
      {/* Summary Section */}
      <section className="bg-zinc-800 rounded-lg p-6 shadow-md">
        <h1 className="text-3xl font-russo-one mb-2">Work & Projects</h1>
        <p className="text-zinc-300">
          Here you&apos;ll find a selection of my professional and personal
          projects. Some have been collaborative, and some have been solo
          endeavors. I enjoy building useful things in a clean and concise way.
          Code is fun.
        </p>
      </section>

      {/* Social Links Section */}
      <section className="flex justify-center gap-6 mt-2 mb-2">
        <a
          href="https://github.com/eljamez"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-green-400 rounded-lg font-semibold shadow transition-all text-lg"
        >
          <FaGithub size={22} />
          <span className="font-silkscreen">GitHub</span>
        </a>
        <a
          href="https://www.linkedin.com/in/eljamez/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-blue-400 rounded-lg font-semibold shadow transition-all text-lg"
        >
          <FaLinkedin size={22} />
          <span className="font-silkscreen">LinkedIn</span>
        </a>
        <a
          href="https://codepen.io/eljamez"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-yellow-300 rounded-lg font-semibold shadow transition-all text-lg"
        >
          <FaCodepen size={22} />
          <span className="font-silkscreen">CodePen</span>
        </a>
      </section>

      {/* Projects Section */}
      <section>
        <h2 className="text-2xl font-silkscreen mb-4">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {projects.map((project: Project, idx: number) => (
            <ProjectCard
              key={idx}
              project={project}
              asLink
              className="h-full"
            />
          ))}
        </div>
      </section>

      {/* Past Client Work Section */}
      <section className="mt-8">
        <h2 className="text-2xl font-silkscreen mb-4">Past Client Work</h2>
        <ul className="list-disc list-inside text-zinc-300 space-y-1">
          {pastWork.map((work: PastWork, idx: number) => (
            <li key={idx}>
              {work.client} – {work.project}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
