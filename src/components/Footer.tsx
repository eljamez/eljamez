import Link from "next/link";
import { BsSubstack } from "react-icons/bs";
import { FaCodepen, FaGithub, FaLinkedin, FaSoundcloud } from "react-icons/fa";

const socialLinks = [
  {
    href: "https://github.com/eljamez",
    text: "GitHub",
    icon: <FaGithub />,
  },
  {
    href: "https://codepen.io/eljamez",
    text: "CodePen",
    icon: <FaCodepen />,
  },
  {
    href: "https://substack.com/@jamesaugustushall",
    text: "Substack",
    icon: <BsSubstack />,
  },
  {
    href: "https://www.linkedin.com/in/eljamez/",
    text: "LinkedIn",
    icon: <FaLinkedin />,
  },
  {
    href: "https://soundcloud.com/eljamez",
    text: "SoundCloud",
    icon: <FaSoundcloud />,
  },
];

export const Footer = () => {
  return (
    <footer className="w-full flex flex-col items-center justify-center gap-2 p-6 bg-zinc-950 border-t border-zinc-800">
      <ul className="flex gap-6 text-2xl mb-2 items-center">
        {socialLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="hover:text-green-500 flex gap-2 items-center"
              target="_blank"
              rel="noopener noreferrer"
              title={link.text}
            >
              {link.icon}
              <span className="hidden sm:inline text-base">{link.text}</span>
            </Link>
          </li>
        ))}
        <li>
          <Link
            href="/contact"
            className="ml-4 px-4 py-2 bg-zinc-800 text-green-400 rounded-lg font-semibold hover:bg-zinc-700 hover:text-green-300 transition-all text-base"
          >
            Contact
          </Link>
        </li>
      </ul>
    </footer>
  );
};
