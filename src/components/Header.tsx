"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const rotations = ["-rotate-45", "rotate-45", "-rotate-180", "rotate-180"];

const navLinks = [
  {
    href: "/",
    text: "HOME",
  },
  {
    href: "/work",
    text: "WORK",
  },
  {
    href: "/about",
    text: "ABOUT",
  },
  {
    href: "/contact",
    text: "Contact",
    isButton: true,
  },
];

const delays = [
  "delay-[100ms]",
  "delay-[200ms]",
  "delay-[300ms]",
  "delay-[400ms]",
  "delay-[500ms]",
  "delay-[600ms]",
  "delay-[700ms]",
  "delay-[800ms]",
  "delay-[900ms]",
  "delay-[1000ms]",
  "delay-[1100ms]",
];

export const Header = () => {
  const [rotation, setRotation] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 4);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // set initial state
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [mobileMenuOpen]);

  const logoLetters = [
    { l: "e" },
    { l: "l" },
    { l: "j" },
    { l: "a" },
    { l: "m" },
    { l: "e" },
    { l: "z" },
    { l: "." },
    { l: "c" },
    { l: "o" },
    { l: "m" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 z-50 w-full p-4 sm:py-4 sm:px-8 flex justify-between items-center group transition-all duration-300 ${
          scrolled ? "bg-white/20 backdrop-blur" : "bg-transparent"
        }`}
        onMouseEnter={() => {
          setRotation(Math.floor(Math.random() * rotations.length));
        }}
      >
        <Link className="flex text-3xl sm:text-5xl text-primary" href="/">
          <p className="flex flex-1 transition-all ease-in-out font-oswald font-bold tracking-tighter uppercase">
            {logoLetters.map((item, i) => (
              <span
                key={i}
                className={`origin-center group-hover:rotate-180 mr-1 transition-all ${delays[i]} group-hover:translate-y-1`}
              >
                {item.l}
              </span>
            ))}
          </p>
        </Link>
        <button
          className="sm:hidden absolute right-4 top-1/2 -translate-y-1/2 flex flex-col justify-center items-center w-10 h-10 ml-2 focus:outline-none"
          aria-label="Open menu"
          onClick={() => setMobileMenuOpen((v) => !v)}
        >
          <span
            className={`block w-6 h-0.5 bg-primary mb-1 transition-all ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-primary mb-1 transition-all ${mobileMenuOpen ? "opacity-0" : ""}`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-primary transition-all ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          ></span>
        </button>
        <div className="hidden sm:flex items-center gap-6">
          <ul className="flex gap-6 text-lg sm:text-xl">
            {navLinks.map((link) => (
              <li
                key={link.href}
                className="hover:scale-125 transition-transform"
              >
                <Link
                  href={link.href}
                  className={
                    link.isButton
                      ? "ml-2 px-4 py-2 bg-accent text-white hover:shadow-lg font-bold rounded-lg shadow-card hover:text-slate-600 hover:bg-secondary transition-all hover:scale-110 text-base sm:text-lg"
                      : link.href === pathname
                        ? "text-accent font-oswald"
                        : "hover:text-accent transition-all font-oswald"
                  }
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      {typeof window !== "undefined" &&
        mobileMenuOpen &&
        createPortal(
          <div className="fixed inset-0 z-[100] bg-background/90 flex flex-col sm:hidden animate-fade-in min-h-0 font-sans border-t border-border shadow-card">
            <button
              className="absolute top-4 right-4 text-3xl text-primary"
              aria-label="Close menu"
              onClick={() => setMobileMenuOpen(false)}
            >
              ×
            </button>
            <div className="flex-1 flex flex-col justify-center items-center min-h-0 overflow-y-auto w-full">
              <ul className="flex flex-col gap-8 text-2xl w-full items-center py-8">
                {navLinks.map((link) => (
                  <li
                    key={link.href}
                    className="w-full flex justify-center font-oswald"
                  >
                    <Link
                      href={link.href}
                      className={
                        link.isButton
                          ? "px-6 py-3 bg-accent text-white font-bold rounded-lg shadow-card hover:bg-orange-500 transition-all text-xl w-4/5 text-center"
                          : link.href === pathname
                            ? "text-accent w-4/5 text-center"
                            : "hover:text-accent transition-all w-4/5 text-center"
                      }
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>,
          document.body
        )}
    </>
  );
};
