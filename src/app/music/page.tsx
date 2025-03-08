import { Discography } from "@/components/music/Discography";
import Link from "next/link";

export default function Page() {
  return (
    <div className="text-xl flex flex-col gap-4">
      <p className="text-3xl mb-8">
        I <b className="text-orange-500">write</b> and{" "}
        <i className="text-teal-500">make</i> music
      </p>
      <p className="text-2xl mb-2 sm:mb-8">
        Here is a discography of sorts, songs I write and record as{" "}
        <span className="text-lime-500">Myself</span> or as{" "}
        <Link
          href="https://enslymogul.com"
          className="text-sky-500 transition-all hover:text-pink-500 group"
        >
          Ensly Mogul{" "}
          <span className="group-hover:opacity-100 opacity-0">
            go to website
          </span>
        </Link>
      </p>
      <Discography />
      <hr className="mt-6" />
      <p className="text-3xl my-8">Here are some Old Bands</p>
      <Link
        href="https://thecaps.bandcamp.com"
        className="hover:text-teal-500 text-fuchsia-500"
      >
        The Caps (Portland OR 2006-2010) Drums
      </Link>{" "}
      <Link
        href="https://giftshoprecords.bandcamp.com/album/pocket-e-p"
        className="hover:text-teal-500 text-fuchsia-500"
      >
        Mild Stallions (Portland OR 2006-2008) Vocals/Guitar
      </Link>
      <Link
        href="https://giftshoprecords.bandcamp.com/album/g-t"
        className="hover:text-teal-500 text-fuchsia-500"
      >
        Ghost Money G$$T (Portland OR 2005-2006) Drums
      </Link>
      <Link
        href="https://soundcloud.com/eljamez/sets/spectacular"
        className="hover:text-teal-500 text-fuchsia-500"
      >
        Spectacular (Portland OR 2004) Vocals/Guitar
      </Link>
      <Link
        href="https://giftshoprecords.bandcamp.com/album/pocket-e-p"
        className="hover:text-teal-500 text-fuchsia-500"
      >
        Of Spiral Arms (Portland OR 2002-2004) Drums
      </Link>
      <Link
        href="https://featherspines.bandcamp.com/album/last-day-parade"
        className="hover:text-teal-500 text-fuchsia-500"
      >
        Last Day Parade (Albuquerque NM 1998-2001) Drums
      </Link>
      <Link
        href="https://soundcloud.com/eljamez/sets/i-prefer-brand-x"
        className="hover:text-teal-500 text-fuchsia-500"
      >
        I Prefer Brand X (Albuquerque NM 1998-1999) Guitar/Vocals
      </Link>
      <Link
        href="https://www.discogs.com/release/15168751-The-Stopgap-Measure-Heres-The-Sound"
        className="hover:text-teal-500 text-fuchsia-500"
      >
        The Stopgap Measure (Albuquerque NM 1998) Drums
      </Link>
      <Link
        href="https://www.youtube.com/watch?app=desktop&v=evp_NeZuwiM"
        className="hover:text-teal-500 text-fuchsia-500"
      >
        Smug (Albuquerque NM 1996-1998) Drums
      </Link>
    </div>
  );
}
