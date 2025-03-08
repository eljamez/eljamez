import Link from "next/link";
import { BsSubstack } from "react-icons/bs";
import { FaLinkedin, FaSoundcloud } from "react-icons/fa";

const socialLinks = [
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
    <div className="sm:hidden flex justify-between items-end gap-2 p-4">
      <ul className="text-sm">
        {socialLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="hover:text-green-500 flex gap-2 items-center"
            >
              {link.icon}
              {link.text}
            </Link>
          </li>
        ))}
      </ul>

      <div>
        <p>Copyright 20xx</p>
      </div>
    </div>
  );
};
