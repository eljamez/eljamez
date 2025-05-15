import Link from "next/link";

export default function HomePageAboutContent() {
  return (
    <div className="fadeIn flex flex-col items-center justify-center max-w-2xl mx-auto px-2 sm:px-0">
      <Link
        href="/about"
        className="text-xl sm:text-2xl md:text-4xl font-bold text-green-400 mb-4 hover:text-green-500 text-center"
      >
        About Me
      </Link>
      <p className="text-zinc-300 text-base sm:text-lg text-center">
        I&apos;m a Senior Software Engineer, musician, and dad. I love building
        things that people like to use. My main focus is on the frontend, but I
        also go full-stack.
      </p>
    </div>
  );
}
