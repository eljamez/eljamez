"use client";

import Link from "next/link";
import { BandcampEmbed } from "./BandcampEmbed";
import { SoundcloudEmbed } from "./SoundcloudEmbed";

const myMusic = [
  {
    id: "2071978275",
    service: "bandcamp",
    artist: "Ensly Mogul",
    title: "Platformer E.P",
    type: "album",
    link: "https://enslymogul.bandcamp.com/album/platformer-e-p",
    note: "",
  },
  {
    id: "3237834010",
    service: "bandcamp",
    artist: "Ensly Mogul",
    title: "Grid Victory Team Theme (single)",
    type: "track",
    link: "https://enslymogul.bandcamp.com/track/grid-victory-team-theme-single",
  },
  {
    id: "3236673844",
    service: "bandcamp",
    artist: "Ensly Mogul",
    title: "Casual Space (single)",
    type: "track",
    link: "https://enslymogul.bandcamp.com/track/casual-space-single",
  },
  {
    id: "3826097895",
    service: "bandcamp",
    artist: "Ensly Mogul",
    title: "Puppet Maybes (single)",
    type: "track",
    link: "https://enslymogul.bandcamp.com/track/puppet-maybes-single",
  },
  {
    id: "1203570331",
    service: "soundcloud",
    artist: "Ensly Mogul",
    title: "Gold Synths (Pavement Cover) Single",
    type: "tracks",
    link: "https://soundcloud.com/ensly-mogul/gold-synthz-pavement-cover",
    note: "",
  },
  {
    id: "1057812049",
    service: "soundcloud",
    artist: "Ensly Mogul",
    title: "Drug (Huey Lewis Remix) Single",
    type: "tracks",
    link: "https://soundcloud.com/ensly-mogul/drug-1",
  },
];

export const Discography = () => {
  return (
    <div className="flex flex-col gap-8">
      {myMusic.map((value, index) => (
        <div className="flex flex-col gap-2" key={index}>
          <h3>
            {value.artist} - {value.title}
          </h3>
          {value.service === "bandcamp" && (
            <BandcampEmbed
              id={value.id}
              artist={value.artist}
              title={value.title}
              type={value.type}
              link={value.link}
            />
          )}
          {value.service === "soundcloud" && (
            <SoundcloudEmbed
              id={value.id}
              artist={value.artist}
              title={value.title}
              type={value.type}
              link={value.link}
            />
          )}
        </div>
      ))}
      <Link
        href="https://enslymogul.com"
        className="text-sky-500 transition-all hover:text-pink-500 group mt-4 text-3xl"
      >
        More Ensly Mogul{" "}
        <span className="group-hover:opacity-100 opacity-0">HERE</span>
      </Link>
    </div>
  );
};
