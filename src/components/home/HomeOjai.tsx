"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import H3 from "../H3";
import HomePageSectionContainer from "./HomePageSectionContainer";

const ojaiImages = ["/bg.png", "/bg5.jpg"];

export default function HomeOjai() {
  const ojaiRef = useRef<HTMLDivElement>(null);
  const [ojaiImage, setOjaiImage] = useState(ojaiImages[0]);

  useEffect(() => {
    const randomImageIndex = Math.floor(Math.random() * ojaiImages.length);
    setOjaiImage(ojaiImages[randomImageIndex]);
  }, []);

  useGSAP(() => {
    if (window.innerWidth < 768) {
      return;
    }

    let mm = gsap.matchMedia();

    if (!ojaiRef.current) {
      return;
    }

    mm.add("(min-width: 769px)", () => {
      // desktop setup code here...
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
    });
  });
  return (
    <HomePageSectionContainer className="bg-[url(/bg5.jpg)] bg-cover bg-center text-white rounded-none h-screen flex flex-col items-center justify-center text-center px-6 ">
      <div
        data-speed="0.5"
        ref={ojaiRef}
        className="w-full h-full max-sm:flex-1 flex flex-col justify-start sm:flex-row items-center sm:justify-center max-sm:hidden"
      >
        <Image
          className="sm:object-cover w-full h-full sm:translate-x-[100px] scale-150"
          src={ojaiImage}
          alt="Ojai"
          width={2000}
          height={2000}
        />
      </div>
      <div
        className="flex flex-col sm:items-end sm:justify-start z-20 w-full sm:h-full pr-32 pb-32"
        data-speed="0.5"
      >
        <H3>I live in</H3>
        <H3>
          <span className="italic">Ojai, CA</span>
        </H3>
      </div>
    </HomePageSectionContainer>
  );
}
