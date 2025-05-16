"use client";

import Link from "next/link";

export default function HomeHeader({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="text-3xl sm:text-6xl font-bold mb-6 text-slate-700 text-center hover:scale-110 transition-all cursor-pointer hover:underline"
    >
      {children}
    </Link>
  );
}
