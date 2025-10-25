import { Hash, Music } from "lucide-react";
import { BsSubstack } from "react-icons/bs";
import { FaCodepen, FaGithub, FaLinkedin, FaSoundcloud } from "react-icons/fa";

const links = [
  //   {
  //     href: "https://bleepsandbloops.com",
  //     text: "Bleeps and Bloops",
  //     icon: <Code />,
  //     description: "Apps and Tools and Things I Make",
  //   },
  {
    href: "https://whatsoever.biz",
    text: "Whatsoever",
    icon: <Hash />,
    description: "An App for Namers",
  },
  {
    href: "https://www.enslymogul.com/",
    text: "Ensly Mogul",
    icon: <Music />,
    description: "A Music Project",
  },
  {
    href: "https://linkedin.com/in/eljamez",
    text: "LinkedIn",
    icon: <FaLinkedin />,
    description: "My LinkedIn Profile",
  },
];

const socialLinks = [
  {
    href: "https://github.com/eljamez",
    text: "GitHub",
    icon: <FaGithub />,
  },
  {
    href: "https://www.linkedin.com/in/eljamez/",
    text: "LinkedIn",
    icon: <FaLinkedin />,
  },
  {
    href: "https://substack.com/@jamesaugustushall",
    text: "Substack",
    icon: <BsSubstack />,
  },
  {
    href: "https://codepen.io/eljamez",
    text: "CodePen",
    icon: <FaCodepen />,
  },
  {
    href: "https://soundcloud.com/eljamez",
    text: "SoundCloud",
    icon: <FaSoundcloud />,
  },
];

export default function HomePage4() {
  return (
      <div className="w-full flex flex-col gap-4 h-auto sm:h-full min-h-screen bg-slate-900 text-slate-100 flex flex-col p-4 sm:p-8 gap-4">
      <div className="flex flex-col flex-1">
        <h1 className="text-[3rem] sm:text-[5rem] md:text-[6rem] font-bold">
          Hello <span className="text-green-500">I&apos;m James</span>
        </h1>
        <h2 className="text-[1rem] sm:text-[2rem] md:text-[3rem] mb-8">
          I&apos;m a Senior Software Engineer based in Ojai, CA. I enjoy writing
          code, creating music, and making apps that people like to use.
        </h2>
        <ul className="flex flex-col gap-4 text-xl sm:text-4xl sm:p-8 p-4 bg-slate-800 rounded-lg">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                target="_blank"
                className="hover:text-green-500 group transition-all flex sm:gap-6 gap-4 items-center"
              >
                <span className="group-hover:rotate-180 transition-transform sm:w-10 sm:h-10 w-8 h-8 flex items-center justify-center">
                  {link.icon}
                </span>
                <span>{link.text}</span>
                <span className="text-slate-400 text-sm sm:text-3xl">
                  {link.description}
                </span>
              </a>
            </li>
          ))}
        </ul>
        </div>

        <div className="fixed bottom-6 md:bottom-0 left-6 md:left-0 md:relative flex gap-8 text-lg sm:text-xl flex-1 md:items-end items-center">
          {socialLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-green-500 transition-all flex gap-2 items-center"
            >
              {link.icon}
              <span className="hidden md:inline">{link.text}</span>
            </a>
          ))}
        </div>
      </div>
  );
}
