"use client";

import { useEffect, useRef } from "react";

export const BandcampEmbed = ({
  id,
  artist,
  title,
  type,
  link,
}: {
  id: string;
  artist: string;
  title: string;
  type: string;
  link: string;
}) => {
  const embedContainerRef = useRef(null);

  useEffect(() => {
    if (embedContainerRef.current) {
      //@ts-ignore
      embedContainerRef.current.innerHTML = `
        <iframe
          style="border: 0; width: 100%; height: 120px;"
          src="https://bandcamp.com/EmbeddedPlayer/${type}=${id}/size=large/bgcol=333333/linkcol=2ebd35/tracklist=false/artwork=small/transparent=true/"
          seamless
        >
          <a href="${link}">
        ${title} by ${artist}
      </a>
        </iframe>
      `;
    }
  }, [artist, id, link, title, type]);

  return <div ref={embedContainerRef} />;
};
