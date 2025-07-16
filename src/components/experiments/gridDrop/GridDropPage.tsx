"use client";

import ExperimentsHeader from "@/components/experiments/ExperimentsHeader";
import { useEffect, useRef } from "react";
import type { Swapy } from "swapy";
import { createSwapy } from "swapy";

const cards = [
  { id: 1, label: "Card 1" },
  { id: 2, label: "Card 2" },
  { id: 3, label: "Card 3" },
  { id: 4, label: "Card 4" },
  { id: 5, label: "Card 5" },
  { id: 6, label: "Card 6" },
  { id: 7, label: "Card 7" },
  { id: 8, label: "Card 8" },
  { id: 9, label: "Card 9" },
  { id: 10, label: "Card 10" },
];

export default function GridDrop() {
  const swapy = useRef<Swapy | null>(null);
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // If container element is loaded
    if (container.current) {
      swapy.current = createSwapy(container.current);

      // Your event listeners
      // swapy.current.onSwap((event) => {
      //   console.log("swap", event);
      // });
    }

    return () => {
      // Destroy the swapy instance on component destroy
      swapy.current?.destroy();
    };
  }, []);

  return (
    <>
      <ExperimentsHeader title="Grid Drop" description="Grid Drop" />
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold">Grid Drop</h2>
        <div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-4"
          ref={container}
        >
          {cards.map((card, idx) => (
            <div data-swapy-slot={`${idx}`} key={card.id}>
              <div data-swapy-item={`${idx}`}>
                <DraggableCard key={card.id} card={card} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

const DraggableCard = ({ card }: { card: { id: number; label: string } }) => {
  return (
    <div className="bg-gray-200 rounded-lg shadow-md p-6 text-center cursor-move select-none transition-transform duration-150 hover:scale-105">
      {card.label}
    </div>
  );
};
