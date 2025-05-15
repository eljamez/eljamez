"use client";
import { cx } from "@/util/cx";
import { useEffect, useRef, useState } from "react";

export default function FadeInSection({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cx(
        "transition-all duration-1000 motion-safe:opacity-0 motion-safe:translate-y-8", // initial state
        isVisible ? "motion-safe:opacity-100 motion-safe:translate-y-0" : "", // fade in
        className
      )}
    >
      {children}
    </div>
  );
}
