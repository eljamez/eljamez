"use client";

import Link from "next/link";
import { useState } from "react";

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

export const Header = () => {
  const [emoji, setEmoji] = useState(0);

  return (
    <nav
      className="w-full p-4 sm:py-4 sm:px-8 flex justify-between group"
      onMouseEnter={() => setEmoji(Math.floor(Math.random() * emojis.length))}
    >
      <Link className="flex text-3xl sm:text-5xl" href="/">
        <div className="hidden sm:block group-hover:translate-x-0 transition sm:-translate-x-24">
          {emojis[emoji]}
        </div>
        <p className="sm:-translate-x-12 flex flex-1 transition-all ease-in-out group-hover:gap-8 group-hover:translate-x-12">
          <span className="group-hover:-rotate-45 transition-all delay-75">
            e
          </span>
          <span className="group-hover:-rotate-45 transition-all delay-75">
            l
          </span>
          <span className="group-hover:-rotate-45 transition-all delay-100">
            j
          </span>
          <span className="group-hover:-rotate-45 transition-all delay-150">
            a
          </span>
          <span className="group-hover:-rotate-45 transition-all delay-200">
            m
          </span>
          <span className="group-hover:-rotate-45 transition-all delay-300">
            e
          </span>
          <span className="group-hover:-rotate-45 transition-all delay-500">
            z
          </span>
          <span className="group-hover:-rotate-45 transition-all delay-700">
            .
          </span>
          <span className="group-hover:-rotate-45 transition-all delay-1000">
            c
          </span>
          <span className="group-hover:-rotate-45 transition-all delay-700">
            o
          </span>
          <span className="group-hover:-rotate-45 transition-all delay-500">
            m
          </span>
        </p>
      </Link>
    </nav>
  );
};
