import PageHeader from "@/components/PageHeader";
import PageSubheader from "@/components/PageSubheader";
import TextContainer from "@/components/TextContainer";
import Image from "next/image";
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
      </section>
      {/* Bio Section */}
      <section className="flex flex-col gap-8 items-center justify-center w-full sm:w-1/3 mx-auto">
        <div className="flex-shrink-0">
          <Image
            src="/profile.png" // Place your photo in public/profile.png
            alt="James Augustus Hall"
            width={160}
            height={160}
            className="rounded-full drop-shadow-hero border-4 border-accent"
            priority
          />
        </div>
        <PageSubheader title="James Augustus Hall" />
        <TextContainer className="flex flex-col gap-4">
          <p className="text-center">
            I&apos;m a Senior Software Engineer based in Ojai, CA that enjoys
            writing code and making apps that people like to use.
            <br />
            <br />
            Past Clients Include: Nike, LifeWater, HBO, Kettle Chips, and
            Mastercard.
          </p>
        </TextContainer>
      </section>
      <section className="mt-10 flex flex-col gap-6 items-center justify-center">
        <PageSubheader title="Skills" />
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

      {/* <section className="flex justify-center gap-6 my-4">
        <Link
          href="/music"
          className="text-2xl text-white drop-shadow-hero font-bold hover:scale-110 transition-all duration-200 hover:underline"
        >
          Music I Make
        </Link>
      </section> */}
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
