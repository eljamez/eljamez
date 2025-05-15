import { SoundcloudEmbed } from "@/components/music/SoundcloudEmbed";
import Image from "next/image";
import Link from "next/link";
import {
  SiGit,
  SiNextdotjs,
  SiNodedotjs,
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
    <div className="flex flex-col gap-8">
      {/* Bio Section */}
      <section className="bg-zinc-800 rounded-lg p-6 shadow-md flex flex-col md:flex-row items-center gap-6">
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
          <h1 className="text-3xl font-russo-one mb-2">About Me</h1>
          <p className="text-zinc-300 mb-2">
            Hi, I&apos;m <span className="font-bold">James Augustus Hall</span>{" "}
            — a Senior Software Engineer with 20 years of professional
            experience. I&apos;ve worked with a wide range of clients, from
            small startups to larger companies like Nike, HBO, and Mastercard.
            As you can imagine, I&apos;ve seen a lot change in the industry over
            the years, watching Flash and web2.0 give way to jQuery and evolve
            into a landscape of JavaScript frameworks and libraries, and now AI
            tooling. In the end, the technology is the tool but the important
            thing is to build something that people like to use.
          </p>
          <p className="text-zinc-300 mb-2">
            I strive for clean, readable code that is easy to maintain and
            extend. I believe in getting a product out the door quickly, and
            then iterating on it. You will quickly find out if your product is
            something people want to use, and if not, you can pivot quickly.
          </p>
          <p className="text-zinc-300">
            When I&apos;m not coding, you&apos;ll find me making music, drawing
            fantasy maps, or going on fun mini adventures with my family.
          </p>
        </div>
      </section>
      <section className="bg-zinc-800 rounded-lg p-6 shadow-md flex flex-col md:flex-row items-center gap-6">
        <ul className="flex flex-wrap justify-center items-center gap-2">
          <li className="bg-zinc-700 rounded-md p-2 flex items-center gap-2">
            <SiReact size={24} className="mr-2" />
            <span className="font-bold">React</span>
          </li>
          <li className="bg-zinc-700 rounded-md p-2 flex items-center gap-2">
            <SiNextdotjs size={24} className="mr-2" />
            <span className="font-bold">Next.js</span>
          </li>
          <li className="bg-zinc-700 rounded-md p-2 flex items-center gap-2">
            <SiTypescript size={24} className="mr-2" />
            <span className="font-bold">TypeScript</span>
          </li>
          <li className="bg-zinc-700 rounded-md p-2 flex items-center gap-2">
            <SiVuedotjs size={24} className="mr-2" />
            <span className="font-bold">Vue.js</span>
          </li>
          <li className="bg-zinc-700 rounded-md p-2 flex items-center gap-2">
            <SiSvelte size={24} className="mr-2" />
            <span className="font-bold">Svelte</span>
          </li>
          <li className="bg-zinc-700 rounded-md p-2 flex items-center gap-2">
            <SiNodedotjs size={24} className="mr-2" />
            <span className="font-bold">Node.js</span>
          </li>
          <li className="bg-zinc-700 rounded-md p-2 flex items-center gap-2">
            <SiTailwindcss size={24} className="mr-2" />
            <span className="font-bold">Tailwind CSS</span>
          </li>
          <li className="bg-zinc-700 rounded-md p-2 flex items-center gap-2">
            <SiGit size={24} className="mr-2" />
            <span className="font-bold">Git</span>
          </li>
          <li className="bg-zinc-700 rounded-md p-2 flex items-center gap-2">
            <SiPrisma size={24} className="mr-2" />
            <span className="font-bold">Prisma</span>
          </li>
          <li className="bg-zinc-700 rounded-md p-2 flex items-center gap-2">
            <SiPython size={24} className="mr-2" />
            <span className="font-bold">Python</span>
          </li>
          <li className="bg-zinc-700 rounded-md p-2 flex items-center gap-2">
            <span className="font-bold">And More...</span>
          </li>
        </ul>
      </section>

      {/* Add this just before the Music Links Section */}
      <section className="flex justify-center gap-6 my-4">
        <Link
          href="/music"
          className="flex flex-col items-center bg-green-800 hover:bg-green-900 text-white rounded-lg shadow-md p-6 w-full transition-colors duration-200"
        >
          <span className="text-2xl font-bold mb-2">Music Page</span>
          <span className="text-sm text-green-200 px-24 text-center">
            I&apos;m always making music, either with live instruments or
            messing around in Logic Pro. Click here for some auditory treats and
            a deep dive into my musical history.
          </span>
        </Link>
        {/* <Link
          href="/video"
          className="flex flex-col items-center bg-blue-800 hover:bg-blue-900 text-white rounded-lg shadow-md p-6 w-56 transition-colors duration-200"
        >
          <span className="text-2xl font-bold mb-2">Video Page</span>
          <span className="text-sm text-blue-200">
            I like to make videos for fun sometimes. Click here to see some of
          </span>
        </Link> */}
      </section>

      {/* Music Links Section */}
      <section>
        {/* Embedded Music Examples */}
        <div className="flex flex-col gap-8">
          <div>
            <h3 className="font-bold mb-2">
              James Augustus Hall - Kokomo (SoundCloud)
            </h3>
            <SoundcloudEmbed
              id="186924852"
              artist="James Augustus Hall"
              title="Kokomo"
              type="tracks"
              link="https://soundcloud.com/eljamez/kokomo"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
