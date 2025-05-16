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
      className="text-[4rem] font-bold mb-4 text-slate-700 text-center hover:scale-110 transition-all cursor-pointer hover:underline"
    >
      {children}
    </Link>
  );
}
