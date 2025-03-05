"use client";

import { cx } from "@/util/cx";
import useInterval from "@/util/useInterval";
import { useState } from "react";

const thingsIDo = [
  "write code 💻",
  "build apps 📱",
  "make music 🎵",
  "like to draw maps 🗺️",
  "roll 20 sided dice 🎲",
  "drink coffee ☕",
  "like good and bad movies 🎥",
  "look at the internet 🖥️",
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
    <div className="flex gap-4 font-silkscreen font-bold drop-shadow-lg text-3xl">
      <p>I</p>
      <div className="relative flex-1">
        {thingsIDo.map((thing) => (
          <h2
            key={thing}
            className={cx(
              thing === thingsIDo[doIndex]
                ? "motion-opacity-in-0 motion-translate-y-in-100 motion-blur-in-md"
                : "opacity-0 motion-translate-y-out-100",
              "absolute transition-all w-full text-green-500"
            )}
          >
            {thing}
          </h2>
        ))}
      </div>
    </div>
  );
}
