import { Hash, Music } from "lucide-react";
import { BsSubstack } from "react-icons/bs";
import { FaCodepen, FaGithub, FaLinkedin, FaSoundcloud } from "react-icons/fa";

const links = [
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
  { href: "https://github.com/eljamez", text: "GitHub", icon: <FaGithub /> },
  { href: "https://www.linkedin.com/in/eljamez/", text: "LinkedIn", icon: <FaLinkedin /> },
  { href: "https://substack.com/@jamesaugustushall", text: "Substack", icon: <BsSubstack /> },
  { href: "https://codepen.io/eljamez", text: "CodePen", icon: <FaCodepen /> },
  { href: "https://soundcloud.com/eljamez", text: "SoundCloud", icon: <FaSoundcloud /> },
];

const linkDelays = ["delay-[420ms]", "delay-[520ms]", "delay-[620ms]"];

const socialDelays = [
  "delay-[750ms]",
  "delay-[820ms]",
  "delay-[890ms]",
  "delay-[960ms]",
  "delay-[1030ms]",
];

export default function HomePage4() {
  return (
    <div className="w-full min-h-screen bg-slate-900 text-slate-100 flex flex-col p-4 sm:p-8">
      <div className="flex flex-col flex-1 max-w-4xl w-full">
        <h1 className="text-[2.75rem] sm:text-[4rem] md:text-[5.5rem] font-bold leading-tight mb-4 animate-slide-up-fade delay-[0ms]">
          Hello <span className="text-green-500">I&apos;m James</span>
        </h1>
        <h2 className="text-base sm:text-lg md:text-xl mb-8 text-slate-300 font-light leading-relaxed animate-slide-up-fade delay-[150ms]">
          Senior Software Engineer based in Ojai, CA. I write code, make music,
          and build apps that people like to use.
        </h2>
        <ul className="flex flex-col gap-3 sm:gap-4 text-xl sm:text-3xl sm:p-6 p-4 bg-slate-800 rounded-lg animate-slide-up-fade delay-[300ms]">
          {links.map((link, i) => (
            <li key={link.href} className={`animate-slide-up-fade ${linkDelays[i]}`}>
              <a
                href={link.href}
                target="_blank"
                className="hover:text-green-500 group transition-all duration-200 flex sm:gap-5 gap-3 items-center hover:translate-x-1"
              >
                <span className="group-hover:rotate-180 transition-transform duration-300 sm:w-9 sm:h-9 w-7 h-7 flex items-center justify-center flex-shrink-0">
                  {link.icon}
                </span>
                <span>{link.text}</span>
                <span className="text-slate-400 text-sm sm:text-base transition-all duration-200 group-hover:text-slate-300">
                  {link.description}
                </span>
              </a>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-5 sm:gap-8 text-sm sm:text-base mt-auto pt-8 pb-2">
          {socialLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`hover:text-green-500 transition-all duration-200 flex gap-2 items-center hover:scale-110 text-slate-400 animate-slide-up-fade ${socialDelays[i]}`}
            >
              {link.icon}
              <span className="hidden sm:inline">{link.text}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
