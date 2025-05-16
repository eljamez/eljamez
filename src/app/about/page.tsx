import PageHeader from "@/components/PageHeader";
import PageSubheader from "@/components/PageSubheader";
import Image from "next/image";
import Link from "next/link";
import {
  SiGit,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReact,
  SiSvelte,
  SiTailwindcss,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-8 pb-10">
      <section className="flex flex-col gap-4 items-center justify-center mt-10">
        <PageHeader title="About Me" />
        <PageSubheader title="I'm a Senior Full Stack Engineer." />
      </section>
      {/* Bio Section */}
      <section className="flex flex-col gap-8 items-center justify-center w-3/4 sm:w-1/2 mx-auto">
        <div className="flex-shrink-0">
          <Image
            src="/profile.png" // Place your photo in public/profile.png
            alt="James Augustus Hall"
            width={160}
            height={160}
            className="rounded-full border-4 border-zinc-700 shadow-lg"
            priority
          />
        </div>
        <div>
          <p className="text-slate-800 mb-2">
            I&apos;m <span className="font-bold">James Augustus Hall</span> — a
            Senior Software Engineer with 20 years of professional experience.
            I&apos;ve worked with a wide range of clients, from small startups
            to larger companies like Nike, HBO, and Mastercard. As you can
            imagine, I&apos;ve seen a lot change in the industry over the years,
            watching Flash and web2.0 give way to jQuery and evolve into a
            landscape of JavaScript frameworks and libraries, and now AI
            tooling. In the end, the technology is the tool but the important
            thing is to build something that people like to use.
          </p>
          <p className="text-slate-800 mb-2">
            I strive for clean, readable code that is easy to maintain and
            extend. I believe in getting a product out the door quickly, and
            then iterating on it. You will quickly find out if your product is
            something people want to use, and if not, you can pivot quickly.
          </p>
          <p className="text-slate-800">
            When I&apos;m not coding, you&apos;ll find me making music, drawing
            fantasy maps, or going on fun mini adventures with my family.
          </p>
        </div>
      </section>
      <section className="mt-10 flex flex-col gap-6 items-center justify-center">
        <h2 className="text-4xl font-bold">Skills</h2>
        <p className="text-slate-800 mb-4">but not limited to:</p>
        <div className="w-full sm:w-2/3 px-10">
          <ul className="flex flex-wrap w-full justify-center items-center gap-2">
            <SkillPill skill="React" icon={<SiReact size={24} />} />
            <SkillPill skill="Next.js" icon={<SiNextdotjs size={24} />} />
            <SkillPill skill="TypeScript" icon={<SiTypescript size={24} />} />
            <SkillPill skill="Vue.js" icon={<SiVuedotjs size={24} />} />
            <SkillPill skill="Svelte" icon={<SiSvelte size={24} />} />
            <SkillPill skill="Node.js" icon={<SiNodedotjs size={24} />} />
            <SkillPill skill="Python" icon={<SiPython size={24} />} />
            <SkillPill skill="Git" icon={<SiGit size={24} />} />
            <SkillPill skill="Prisma" icon={<SiPrisma size={24} />} />
            <SkillPill skill="PostgreSQL" icon={<SiPostgresql size={24} />} />
            <SkillPill
              skill="Tailwind CSS"
              icon={<SiTailwindcss size={24} />}
            />
          </ul>
        </div>
      </section>

      {/* Add this just before the Music Links Section */}
      <section className="flex justify-center gap-6 my-4">
        <Link
          href="/music"
          className="text-2xl font-bold hover:scale-110 transition-all duration-200 hover:underline"
        >
          Music I Make
        </Link>
      </section>
    </div>
  );
}

function SkillPill({ skill, icon }: { skill: string; icon: React.ReactNode }) {
  return (
    <li className="bg-accent border-2 border-secondary text-white rounded-md p-2 flex items-center gap-2">
      {icon}
      <span className="font-bold">{skill}</span>
    </li>
  );
}
