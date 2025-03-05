"use client";

import Link from "next/link";

export default function Page() {
  return (
    <div className="text-xl flex flex-col gap-4">
      <p className="text-3xl mb-8">
        I have a{" "}
        <Link
          href="https://substack.com/@jamesaugustushall"
          className="text-orange-500"
        >
          Substack
        </Link>
      </p>
      <p>I have a lot of dumb notes. I should write more. Good times</p>
    </div>
  );
}
