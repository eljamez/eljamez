"use client";

import { cx } from "@/util/cx";
import useInterval from "@/util/useInterval";
import { useState } from "react";

const thingsIDo = [
  "write code 💻",
  "build apps 📱",
  "make music 🎵",
  "draw maps 🗺️",
  "wear flannel 🪓",
  "drink coffee ☕",
  "play D&D 🎲",
  "review movies 🎥",
];

export default function ThingsIDo() {
  const [doIndex, setDoIndex] = useState(0);

  useInterval(() => {
    setDoIndex((prev) => {
      if (prev === thingsIDo.length - 1) {
        return 0;
      }
      return prev + 1;
    });
  }, 5000);

  return (
    <div className="flex gap-4 font-silkscreen font-bold drop-shadow-lg py-4 px-8">
      <div className="">
        <h1 className="w-full text-3xl">My name is James and I</h1>
      </div>
      <div className="relative flex-1">
        {thingsIDo.map((thing) => (
          <h2
            key={thing}
            className={cx(
              thing === thingsIDo[doIndex]
                ? "opacity-100"
                : "opacity-0 translate-x-8",
              "absolute transition-all text-3xl w-full text-green-500"
            )}
          >
            {thing}
          </h2>
        ))}
      </div>
    </div>
  );
}
