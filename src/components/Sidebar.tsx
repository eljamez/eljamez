"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BsSubstack } from "react-icons/bs";
import { FaLinkedin, FaSoundcloud } from "react-icons/fa"; // Import the icons

const navLinks = [
  {
    href: "/code",
    text: "Code",
  },
  {
    href: "/music",
    text: "Music",
  },
  {
    href: "/video",
    text: "Video",
  },
  {
    href: "/words",
    text: "Words",
  },
];

const socialLinks = [
  {
    href: "https://soundcloud.com/eljamez",
    text: "SoundCloud",
    icon: <FaSoundcloud />,
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
];

export const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="flex p-8 flex-col gap-4 w-1/4 bg-zinc-900 hover:bg-zinc-800 transition-all rounded-r-3xl duration-400">
      <ul className="text-3xl">
        {navLinks.map((link) => (
          <li
            key={link.href}
            className={clsx(
              link.href === pathname
                ? "text-green-500"
                : "hover:text-green-500 hover:translate-x-4",
              " transition-all "
            )}
          >
            <Link href={link.href}>{link.text}</Link>
          </li>
        ))}
      </ul>
      <ul className="text-sm mt-20">
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

      <p>Copyright 20xx</p>
    </aside>
  );
};
