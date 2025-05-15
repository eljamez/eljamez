"use client";

import { BsSubstack } from "react-icons/bs";
import { FaLinkedin, FaSoundcloud } from "react-icons/fa"; // Import the icons

const navLinks = [
  {
    href: "/code",
    text: "Code",
  },
  {
    href: "/music",
    text: "Music",
  },
  {
    href: "/video",
    text: "Video",
  },
  {
    href: "/words",
    text: "Words",
  },
];

const socialLinks = [
  {
    href: "https://substack.com/@jamesaugustushall",
    text: "Substack",
    icon: <BsSubstack />,
  },
  {
    href: "https://www.linkedin.com/in/eljamez/",
    text: "LinkedIn",
    icon: <FaLinkedin />,
  },
  {
    href: "https://soundcloud.com/eljamez",
    text: "SoundCloud",
    icon: <FaSoundcloud />,
  },
];

export const Sidebar = () => {
  return null;
};
