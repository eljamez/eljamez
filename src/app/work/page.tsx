import PageHeader from "@/components/PageHeader";
import PageSubheader from "@/components/PageSubheader";
import ProjectCard from "@/components/ProjectCard";
import TextContainer from "@/components/TextContainer";
import { PastWork, pastWork, Project, projects } from "@/util/consts";
import { FaCodepen, FaGithub, FaLinkedin } from "react-icons/fa";

export default function WorkPage() {
  return (
    <div className="flex flex-col gap-8 pb-10">
      {/* Summary Section */}
      <section className="flex flex-col gap-4 items-center justify-center mt-10">
        <PageHeader title="Work & Projects" />
        <PageSubheader title="Here is a selection of my professional and personal projects." />
      </section>

      {/* Social Links Section */}
      <section className="flex flex-col items-center justify-center sm:flex-row gap-4 sm:gap-x-4">
        <SocialLink
          href="https://github.com/eljamez"
          icon={<FaGithub size={22} />}
          label="GitHub"
        />
        <SocialLink
          href="https://www.linkedin.com/in/eljamez/"
          icon={<FaLinkedin size={22} />}
          label="LinkedIn"
        />
        <SocialLink
          href="https://codepen.io/eljamez"
          icon={<FaCodepen size={22} />}
          label="CodePen"
        />
      </section>

      {/* Projects Section */}
      <section>
        <h2 className="text-2xl text-center mb-4">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {projects.map((project: Project, idx: number) => (
            <ProjectCard key={idx} project={project} className="h-full" />
          ))}
        </div>
      </section>

      {/* Past Client Work Section */}
      <TextContainer className="mt-8 text-lg">
        <h2 className="text-2xl font-silkscreen mb-4">Past Client Work</h2>
        <ul className="list-disc list-inside text-slate-800 space-y-1">
          {pastWork.map((work: PastWork, idx: number) => (
            <li key={idx}>
              {work.client} – {work.project}
            </li>
          ))}
        </ul>
      </TextContainer>
    </div>
  );
}

function SocialLink({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex gap-2 items-center px-4 py-2 bg-accent text-white hover:shadow-lg font-bold rounded-lg shadow-card hover:text-slate-600 hover:bg-secondary transition-all hover:scale-110 text-base sm:text-lg"
    >
      {icon}
      <span className="">{label}</span>
    </a>
  );
}
