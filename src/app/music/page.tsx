import { Discography } from "@/components/music/Discography";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col gap-8">
      {/* Intro Section */}
      <section className="bg-zinc-800 rounded-lg p-6 shadow-md flex flex-col gap-4">
        <h1 className="text-3xl font-russo-one mb-2 text-green-300">Music</h1>
        <p className="text-zinc-300 text-xl">
          I <b className="text-orange-500">write</b> and{" "}
          <i className="text-teal-400">make</i> music.
        </p>
        <p className="text-zinc-400 text-lg">
          Here is a discography of sorts, songs I write and record as{" "}
          <span className="text-lime-400 font-bold">Myself</span> or as{" "}
          <Link
            href="https://enslymogul.com"
            className="text-sky-400 transition-all hover:text-pink-400 group font-bold"
          >
            Ensly Mogul
            <span className="group-hover:opacity-100 opacity-0 ml-1">
              go to website
            </span>
          </Link>
        </p>
      </section>

      {/* Discography Section */}
      <section className="bg-zinc-800 rounded-lg p-6 shadow-md flex flex-col gap-6">
        <h2 className="text-2xl font-bold text-pink-400 mb-2">Discography</h2>
        <Discography />
      </section>

      {/* Old Bands Section */}
      <section className="bg-zinc-800 rounded-lg p-6 shadow-md flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-blue-300 mb-2">Old Bands</h2>
        <ul className="flex flex-col gap-2 text-lg">
          <li>
            <Link
              href="https://thecaps.bandcamp.com"
              className="hover:text-teal-400 text-fuchsia-400 font-semibold"
            >
              The Caps{" "}
              <span className="text-zinc-400 font-normal">
                (Portland OR 2006-2010) Drums
              </span>
            </Link>
          </li>
          <li>
            <Link
              href="https://giftshoprecords.bandcamp.com/album/pocket-e-p"
              className="hover:text-teal-400 text-fuchsia-400 font-semibold"
            >
              Mild Stallions{" "}
              <span className="text-zinc-400 font-normal">
                (Portland OR 2006-2008) Vocals/Guitar
              </span>
            </Link>
          </li>
          <li>
            <Link
              href="https://giftshoprecords.bandcamp.com/album/g-t"
              className="hover:text-teal-400 text-fuchsia-400 font-semibold"
            >
              Ghost Money G$$T{" "}
              <span className="text-zinc-400 font-normal">
                (Portland OR 2005-2006) Drums
              </span>
            </Link>
          </li>
          <li>
            <Link
              href="https://soundcloud.com/eljamez/sets/spectacular"
              className="hover:text-teal-400 text-fuchsia-400 font-semibold"
            >
              Spectacular{" "}
              <span className="text-zinc-400 font-normal">
                (Portland OR 2004) Vocals/Guitar
              </span>
            </Link>
          </li>
          <li>
            <Link
              href="https://giftshoprecords.bandcamp.com/album/pocket-e-p"
              className="hover:text-teal-400 text-fuchsia-400 font-semibold"
            >
              Of Spiral Arms{" "}
              <span className="text-zinc-400 font-normal">
                (Portland OR 2002-2004) Drums
              </span>
            </Link>
          </li>
          <li>
            <Link
              href="https://featherspines.bandcamp.com/album/last-day-parade"
              className="hover:text-teal-400 text-fuchsia-400 font-semibold"
            >
              Last Day Parade{" "}
              <span className="text-zinc-400 font-normal">
                (Albuquerque NM 1998-2001) Drums
              </span>
            </Link>
          </li>
          <li>
            <Link
              href="https://soundcloud.com/eljamez/sets/i-prefer-brand-x"
              className="hover:text-teal-400 text-fuchsia-400 font-semibold"
            >
              I Prefer Brand X{" "}
              <span className="text-zinc-400 font-normal">
                (Albuquerque NM 1998-1999) Guitar/Vocals
              </span>
            </Link>
          </li>
          <li>
            <Link
              href="https://www.discogs.com/release/15168751-The-Stopgap-Measure-Heres-The-Sound"
              className="hover:text-teal-400 text-fuchsia-400 font-semibold"
            >
              The Stopgap Measure{" "}
              <span className="text-zinc-400 font-normal">
                (Albuquerque NM 1998) Drums
              </span>
            </Link>
          </li>
          <li>
            <Link
              href="https://www.youtube.com/watch?app=desktop&v=evp_NeZuwiM"
              className="hover:text-teal-400 text-fuchsia-400 font-semibold"
            >
              Smug{" "}
              <span className="text-zinc-400 font-normal">
                (Albuquerque NM 1996-1998) Drums
              </span>
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
}
