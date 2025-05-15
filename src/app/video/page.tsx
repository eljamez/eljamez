import YouTubeEmbed from "@/components/music/YouTubeEmbed";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col gap-8">
      {/* Intro Section */}
      <section className="bg-zinc-800 rounded-lg p-6 shadow-md flex flex-col gap-4">
        <h1 className="text-3xl font-russo-one mb-2 text-blue-300">Videos</h1>
        <p className="text-zinc-300 text-xl">
          I make the occasional <b className="text-lime-400">short film</b> or{" "}
          <i className="text-sky-400">YouTube</i> video.
        </p>
        <p className="text-zinc-400 text-lg">
          Sometimes I do things with my friend Peter
          <br />@{" "}
          <Link
            href="https://youtube.com/@universal-dork"
            className="text-teal-400 transition-all hover:text-pink-400 group font-bold"
          >
            Universal Dork
            <span className="group-hover:opacity-100 opacity-0 ml-1">
              👉 go to YouTube Channel
            </span>
          </Link>
        </p>
      </section>

      {/* Featured Video Section */}
      <section className="bg-zinc-800 rounded-lg p-6 shadow-md flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-pink-400 mb-2">
          Featured Video
        </h2>
        <YouTubeEmbed videoId="e4s_AEOtLrE" />
      </section>

      {/* Playlist Section */}
      <section className="bg-zinc-800 rounded-lg p-6 shadow-md flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-green-400 mb-2">Fun Playlist</h2>
        <p className="text-zinc-300 text-lg mb-2">
          I have also made silly random videos throughout the years. Here is a
          fun playlist.
        </p>
        <YouTubeEmbed videoId="videoseries?si=6kTSIDL8s3M5BrLE&amp;list=PL503Oa3NWf3acHbLC1QQgpb-E1FW6WFyu" />
      </section>

      {/* Old Video Section */}
      <section className="bg-zinc-800 rounded-lg p-6 shadow-md flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-orange-400 mb-2">
          Vintage Video
        </h2>
        <p className="text-zinc-300 text-lg mb-2">
          I made this one 20 years ago.
        </p>
        <YouTubeEmbed videoId="t3f9FcyDrA8" />
      </section>
    </div>
  );
}
