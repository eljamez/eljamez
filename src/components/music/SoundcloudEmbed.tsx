"use client";

import { useEffect, useRef } from "react";

export const SoundcloudEmbed = ({
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
      embedContainerRef.current.innerHTML = `
      <iframe
          width="100%"
          height="120"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/${type}/${id}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
        ></iframe>   
      `;
    }
  }, [artist, id, link, title]);

  return <div ref={embedContainerRef} />;
};
