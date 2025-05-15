"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [mobileMenuOpen]);

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
    <>
      <nav
        className="sticky top-0 z-50 w-full p-4 sm:py-4 sm:px-8 flex justify-between items-center group bg-zinc-950/95 backdrop-blur relative"
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
                className={`origin-center group-hover:${rotations[rotation]} transition-all delay-[${100 * (i + 1)}ms]`}
              >
                {item.l}
              </span>
            ))}
          </p>
        </Link>
        <button
          className="sm:hidden absolute right-4 top-1/2 -translate-y-1/2 flex flex-col justify-center items-center w-10 h-10 ml-2 focus:outline-none"
          aria-label="Open menu"
          onClick={() => setMobileMenuOpen((v) => !v)}
        >
          <span
            className={`block w-6 h-0.5 bg-white mb-1 transition-all ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-white mb-1 transition-all ${mobileMenuOpen ? "opacity-0" : ""}`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-white transition-all ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          ></span>
        </button>
        <div className="hidden sm:flex items-center gap-6">
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
      {typeof window !== "undefined" &&
        mobileMenuOpen &&
        createPortal(
          <div className="fixed inset-0 z-[100] bg-zinc-950 flex flex-col sm:hidden animate-fade-in min-h-0 font-silkscreen">
            <button
              className="absolute top-4 right-4 text-3xl text-white"
              aria-label="Close menu"
              onClick={() => setMobileMenuOpen(false)}
            >
              ×
            </button>
            <div className="flex-1 flex flex-col justify-center items-center min-h-0 overflow-y-auto w-full">
              <ul className="flex flex-col gap-8 text-2xl w-full items-center py-8">
                {navLinks.map((link) => (
                  <li
                    key={link.href}
                    className="w-full flex justify-center font-silkscreen"
                  >
                    <Link
                      href={link.href}
                      className={
                        link.isButton
                          ? "px-6 py-3 bg-green-500 text-zinc-950 font-bold rounded-lg shadow hover:bg-green-400 transition-all text-xl w-4/5 text-center font-silkscreen"
                          : link.href === pathname
                            ? "text-green-500 w-4/5 text-center font-silkscreen"
                            : "hover:text-green-500 transition-all w-4/5 text-center font-silkscreen"
                      }
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>,
          document.body
        )}
    </>
  );
};
