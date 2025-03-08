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

export const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="flex p-4 sm:p-8 sm:flex-col gap-4 w-full sm:w-1/4 bg-zinc-900 hover:bg-zinc-800 transition-all sm:rounded-r-3xl duration-400">
      <ul className="text-xl sm:text-3xl flex sm:flex-col gap-4">
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
      <ul className="text-sm mt-20 hidden sm:block">
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

      <p className="hidden sm:block">Copyright 20xx</p>
    </aside>
  );
};
