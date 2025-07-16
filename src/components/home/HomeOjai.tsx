"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import HomePageSectionContainer from "./HomePageSectionContainer";

const ojaiImages = ["/bg.png", "/bg4.png", "/bg5.jpg"];

export default function HomeOjai() {
  const ojaiRef = useRef<HTMLDivElement>(null);
  const ojaiTextRef = useRef<HTMLHeadingElement>(null);
  const [ojaiImage, setOjaiImage] = useState(ojaiImages[0]);

  useEffect(() => {
    const randomImageIndex = Math.floor(Math.random() * ojaiImages.length);
    setOjaiImage(ojaiImages[randomImageIndex]);
  }, []);

  useGSAP(() => {
    if (ojaiRef.current) {
      gsap.from(ojaiRef.current, {
        x: -600,
        duration: 1,
        scrollTrigger: {
          trigger: ojaiRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
          //markers: true,
        },
      });
    }
  });
  return (
    <HomePageSectionContainer className="bg-gradient-to-b from-green-900 to-green-500 text-white rounded-none h-screen flex flex-col items-center justify-center text-center px-6">
      <div
        data-speed="0.5"
        ref={ojaiRef}
        className="w-full h-full flex items-center justify-center"
      >
        <Image
          className="object-cover w-full h-full translate-x-[100px] scale-150"
          src={ojaiImage}
          alt="Ojai"
          width={2000}
          height={2000}
        />
      </div>
      <h2
        data-speed="0.5"
        ref={ojaiTextRef}
        className="text-white absolute top-0 h-full translate-y-1/2 -translate-x-1/2 right-0 font-bold text-[5rem]"
      >
        I live in <br />
        <span className="italic">Ojai, CA</span>
      </h2>
    </HomePageSectionContainer>
  );
}
