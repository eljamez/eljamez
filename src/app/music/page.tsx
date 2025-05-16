import { Discography } from "@/components/music/Discography";
import PageHeader from "@/components/PageHeader";
import PageSubheader from "@/components/PageSubheader";
import Link from "next/link";
export default function Page() {
  return (
    <div className="flex flex-col gap-8 text-slate-800 pb-10">
      <section className="flex flex-col gap-4 items-center justify-center mt-10">
        <PageHeader title="Music" />
        <PageSubheader title="I write and make music." />
      </section>

      {/* Discography Section */}
      <section className="flex flex-col gap-6 items-center justify-center">
        <h2 className="text-2xl font-bold mb-2">Discography Selections</h2>
        <Discography />
      </section>

      {/* Old Bands Section */}
      <section className="flex flex-col gap-4 items-center justify-center mt-24">
        <h2 className="text-2xl font-bold mb-2">Old Bands</h2>
        <ul className="flex flex-col gap-2 text-lg">
          <OldBandListItem
            href="https://thecaps.bandcamp.com"
            name="The Caps"
            description="(Portland OR 2006-2010) Drums"
          />
          <OldBandListItem
            href="https://giftshoprecords.bandcamp.com/album/pocket-e-p"
            name="Mild Stallions"
            description="(Portland OR 2006-2008) Vocals/Guitar"
          />
          <OldBandListItem
            href="https://giftshoprecords.bandcamp.com/album/g-t"
            name="Ghost Money G$$T"
            description="(Portland OR 2005-2006) Drums"
          />
          <OldBandListItem
            href="https://soundcloud.com/eljamez/sets/spectacular"
            name="Spectacular"
            description="(Portland OR 2004) Vocals/Guitar"
          />
          <OldBandListItem
            href="https://featherspines.bandcamp.com/album/last-day-parade"
            name="Of Spiral Arms"
            description="(Portland OR 2002-2004) Drums"
          />
          <OldBandListItem
            href="https://soundcloud.com/eljamez/sets/last-day-parade"
            name="Last Day Parade"
            description="(Albuquerque NM 1998-2001) Drums"
          />
          <OldBandListItem
            href="https://soundcloud.com/eljamez/sets/i-prefer-brand-x"
            name="I Prefer Brand X"
            description="(Albuquerque NM 1998-1999) Guitar/Vocals"
          />
          <OldBandListItem
            href="https://www.discogs.com/release/15168751-The-Stopgap-Measure-Heres-The-Sound"
            name="The Stopgap Measure"
            description="(Albuquerque NM 1998) Drums"
          />
          <OldBandListItem
            href="https://www.youtube.com/watch?app=desktop&v=evp_NeZuwiM"
            name="Smug"
            description="(Albuquerque NM 1996-1998) Drums"
          />
        </ul>
      </section>
    </div>
  );
}

function OldBandListItem({
  href,
  name,
  description,
}: {
  href: string;
  name: string;
  description: string;
}) {
  return (
    <li>
      <Link
        href={href}
        className="hover:scale-110 transition-all duration-200 hover:underline font-semibold"
      >
        {name} <span className="text-slate-600 font-normal">{description}</span>
      </Link>
    </li>
  );
}
