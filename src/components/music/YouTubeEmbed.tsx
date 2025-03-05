"use client";

import { useEffect, useRef } from "react";

export const YouTubeEmbed = ({ videoId }: { videoId: string }) => {
  const embedContainerRef = useRef(null);

  useEffect(() => {
    if (embedContainerRef.current) {
      embedContainerRef.current.innerHTML = `
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/${videoId}"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      `;
    }
  }, [videoId]);

  return <div ref={embedContainerRef} />;
};

export default YouTubeEmbed;
