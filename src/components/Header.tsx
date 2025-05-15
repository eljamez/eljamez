"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BsSubstack } from "react-icons/bs";
import { FaLinkedin, FaSoundcloud } from "react-icons/fa";

const emojis: string[] = [
  "😀",
  "😅",
  "😍",
  "🤔",
  "👍",
  "🎉",
  "❤️",
  "☕️",
  "🖥️",
  "🌊",
  "🚀",
  "🎈",
  "👏",
  "☕️",
  "🚪",
  "🎶",
  "👌",
];

const rotations = ["-rotate-45", "rotate-45", "-rotate-180", "rotate-180"];

const navLinks = [
  {
    href: "/",
    text: "Home",
  },
  {
    href: "/work",
    text: "Work",
  },
  {
    href: "/about",
    text: "About",
  },
  {
    href: "/contact",
    text: "Hire Me",
    isButton: true,
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

export const Header = () => {
  const [emoji, setEmoji] = useState(0);
  const [rotation, setRotation] = useState(0);
  const pathname = usePathname();

  const logoLetters = [
    { l: "e" },
    { l: "l" },
    { l: "j" },
    { l: "a" },
    { l: "m" },
    { l: "e" },
    { l: "z" },
    { l: "." },
    { l: "c" },
    { l: "o" },
    { l: "m" },
  ];

  return (
    <nav
      className="sticky top-0 z-50 w-full p-4 sm:py-4 sm:px-8 flex justify-between items-center group bg-zinc-950/95 backdrop-blur"
      onMouseEnter={() => {
        setEmoji(Math.floor(Math.random() * emojis.length));
        setRotation(Math.floor(Math.random() * rotations.length));
      }}
    >
      <Link className="flex text-3xl sm:text-5xl" href="/">
        <div className="hidden sm:block group-hover:translate-x-0 transition sm:-translate-x-24">
          {emojis[emoji]}
        </div>
        <p className="sm:-translate-x-12 flex flex-1 transition-all ease-in-out group-hover:translate-x-8">
          {logoLetters.map((item, i) => (
            <span
              key={i}
              className={`origin-center group-hover:${
                rotations[rotation]
              } transition-all delay-[${100 * (i + 1)}ms]`}
            >
              {item.l}
            </span>
          ))}
        </p>
      </Link>
      <div className="flex items-center gap-6">
        <ul className="flex gap-4 text-lg sm:text-xl">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={
                  link.isButton
                    ? "ml-2 px-4 py-2 bg-green-500 text-zinc-950 font-bold rounded-lg shadow hover:bg-green-400 transition-all text-base sm:text-lg"
                    : link.href === pathname
                      ? "text-green-500"
                      : "hover:text-green-500 transition-all"
                }
              >
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
