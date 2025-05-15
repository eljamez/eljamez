export default function HomePageContactContent() {
  return (
    <>
      <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-yellow-400 mb-4 text-center">
        Let&apos;s Connect
      </h2>
      <p className="text-zinc-300 text-base sm:text-lg mb-4 text-center px-2 sm:px-0">
        Want to work together or just say hi?{" "}
        <a href="/contact" className="underline hover:text-yellow-300">
          Get in touch
        </a>{" "}
        — I&apos;m always open to new collaborations and fun ideas.
      </p>
    </>
  );
}
