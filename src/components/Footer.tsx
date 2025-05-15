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
    <footer className="w-full flex flex-col items-center justify-center gap-2 p-4 sm:p-6 bg-zinc-950 border-t border-zinc-800">
      <ul className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-xl sm:text-2xl mb-2 items-center w-full justify-center">
        {socialLinks.map((link) => (
          <li key={link.href} className="w-full sm:w-auto flex justify-center">
            <Link
              href={link.href}
              className="hover:text-green-500 flex gap-2 items-center justify-center"
              target="_blank"
              rel="noopener noreferrer"
              title={link.text}
            >
              {link.icon}
              <span className="hidden sm:inline text-base">{link.text}</span>
            </Link>
          </li>
        ))}
        <li className="w-full sm:w-auto flex justify-center mt-2 sm:mt-0">
          <Link
            href="/contact"
            className="px-4 py-2 bg-zinc-800 text-green-400 rounded-lg font-semibold hover:bg-zinc-700 hover:text-green-300 transition-all text-base w-full sm:w-auto text-center"
          >
            Contact
          </Link>
        </li>
      </ul>
    </footer>
  );
};
