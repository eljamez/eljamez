export default function HomePageMusicContent() {
  return (
    <>
      <h2 className="text-2xl md:text-4xl font-bold text-pink-400 mb-4">
        Music
      </h2>
      <p className="text-zinc-300 text-lg">
        I write and record music as{" "}
        <a
          href="https://soundcloud.com/eljamez"
          className="text-lime-400 hover:opacity-80"
        >
          Myself
        </a>{" "}
        and{" "}
        <a
          href="https://enslymogul.bandcamp.com/"
          className="text-sky-400 hover:opacity-80"
        >
          Ensly Mogul
        </a>
        . Check out my{" "}
        <a href="/music" className="underline hover:text-pink-300">
          music page
        </a>{" "}
        for more.
      </p>
    </>
  );
}
