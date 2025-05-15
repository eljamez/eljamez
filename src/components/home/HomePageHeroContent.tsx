export default function HomePageHeroContent() {
  return (
    <div className="fadeIn">
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 opacity-80 blur-2xl" />
      <div className="relative z-10">
        <h1 className="text-3xl md:text-5xl font-bold font-russo-one text-white drop-shadow-lg">
          Hi, I&apos;m James —{" "}
          <span className="text-yellow-300">Senior Software Engineer</span>,{" "}
          <span className="text-purple-300">CoFounder</span>,{" "}
          <span className="text-green-300">Application Builder</span>, and{" "}
          <span className="text-pink-300">Musician</span>.
        </h1>
        <p className="text-lg md:text-2xl text-zinc-100 max-w-3xl mx-auto mt-4 drop-shadow">
          I make applications for the web.
        </p>
      </div>
    </div>
  );
}
