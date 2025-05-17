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
    href: "https://www.linkedin.com/in/eljamez/",
    text: "LinkedIn",
    icon: <FaLinkedin />,
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
    href: "https://soundcloud.com/eljamez",
    text: "SoundCloud",
    icon: <FaSoundcloud />,
  },
];

export const Footer = () => {
  return (
    <footer className="w-full flex flex-col sm:flex-row sm:justify-between items-center justify-center gap-2 p-4 sm:p-6">
      <ul className="flex gap-4 sm:gap-6 text-xl sm:text-2xl mb-2 items-center w-full justify-center">
        {socialLinks.map((link) => (
          <li key={link.href} className="w-full sm:w-auto flex justify-center">
            <Link
              href={link.href}
              className=" hover:scale-125 transition-all drop-shadow-hero flex gap-2 items-center justify-center text-slate-100"
              target="_blank"
              rel="noopener noreferrer"
              title={link.text}
            >
              {link.icon}
              <span className="hidden sm:inline text-base">{link.text}</span>
            </Link>
          </li>
        ))}
      </ul>
      {/* <Link
        href="/contact"
        className="ml-2 px-4 py-2 hover:shadow-lg bg-accent text-white font-bold rounded-lg shadow-card hover:text-slate-600 hover:bg-secondary transition-all hover:scale-110 text-base sm:text-lg"
      >
        Contact
      </Link> */}
    </footer>
  );
};
