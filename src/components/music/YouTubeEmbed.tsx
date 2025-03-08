"use client";

import { useEffect, useRef } from "react";

export const YouTubeEmbed = ({ videoId }: { videoId: string }) => {
  const embedContainerRef = useRef(null);

  useEffect(() => {
    if (embedContainerRef.current) {
      //@ts-ignore
      embedContainerRef.current.innerHTML = `
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/${videoId}"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      `;
    }
  }, [videoId]);

  return (
    <div className="w-full h-auto flex justify-center sm:w-[560px] sm:h-[315px]">
      <div className="w-full h-[300px] sm:h-auto" ref={embedContainerRef} />
    </div>
  );
};

export default YouTubeEmbed;
