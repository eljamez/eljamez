import YouTubeEmbed from "@/components/music/YouTubeEmbed";
import Link from "next/link";

export default function Page() {
  return (
    <div className="text-xl flex flex-col gap-4">
      <p className="text-3xl mb-8">
        I make the occasional <b className="text-lime-500">short film</b> or{" "}
        <i className="text-sky-500">YouTube</i> video
      </p>
      <p className="text-2xl mb-8">
        Sometimes I do things with my friend Peter
        <br />@{" "}
        <Link
          href="https://youtube.com/@universal-dork"
          className="text-teal-500 transition-all hover:text-pink-500 group"
        >
          Universal Dork{" "}
          <span className="group-hover:opacity-100 opacity-0">
            👉 go to YouTube Channel
          </span>
        </Link>
      </p>
      <YouTubeEmbed videoId="e4s_AEOtLrE" />
      <p className="text-2xl my-8">
        I have also made silly random videos throughout the years.
      </p>
      <YouTubeEmbed videoId="videoseries?si=6kTSIDL8s3M5BrLE&amp;list=PL503Oa3NWf3acHbLC1QQgpb-E1FW6WFyu" />
      <p className="text-2xl my-8">I made this one 20 years ago.</p>
      <YouTubeEmbed videoId="t3f9FcyDrA8" />
    </div>
  );
}
