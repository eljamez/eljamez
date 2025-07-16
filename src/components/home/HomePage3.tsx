"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

export default function HomePage3() {
  const wrapperRef = useRef(null);
  const contentRef = useRef(null);
  const horizontalSectionRef = useRef(null);
  const horizontalContentRef = useRef(null);

  useGSAP(
    () => {
      if (wrapperRef.current && contentRef.current) {
        // 1. Initialize ScrollSmoother
        const smoother = ScrollSmoother.create({
          wrapper: wrapperRef.current,
          content: contentRef.current,
          smooth: 1.2,
          effects: true,
        });

        // 2. Horizontal Scroll Effect with Pre-Pin Animation
        if (horizontalSectionRef.current && horizontalContentRef.current) {
          const horizontalContentWidth =
            horizontalContentRef.current.scrollWidth;
          const viewportWidth = window.innerWidth;
          const distanceToScroll = horizontalContentWidth - viewportWidth;

          if (distanceToScroll > 0) {
            gsap.to(horizontalContentRef.current, {
              x: -distanceToScroll,
              ease: "none",
              scrollTrigger: {
                trigger: horizontalSectionRef.current,
                // Start the animation when the bottom of the section hits the bottom of the viewport
                // You can adjust 'bottom bottom' to 'bottom center' or a specific pixel value
                start: "bottom bottom",
                // The end of the animation will be when the bottom of the trigger
                // has scrolled past a certain point.
                // This is where you determine the total scroll distance for the animation.
                // Let's make it the pinning duration (viewportHeight) plus some extra for pre-pinning.
                // If your section is 100vh, this will be 100vh of pinning + 100vh of pre-animation.
                end: () => `+=${window.innerHeight + horizontalContentWidth}`, // Total scroll distance for animation
                pin: true, // Still pin the section
                pinSpacing: true, // Automatically adds space for the pinned element
                scrub: true,
                // markers: true,
                invalidateOnRefresh: true,
              },
            });
          }
        }
      }
    },
    { scope: wrapperRef }
  );

  return (
    <div id="smooth-wrapper" ref={wrapperRef}>
      <div id="smooth-content" ref={contentRef}>
        <section
          style={{
            height: "100vh",
            backgroundColor: "#f0f8ff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "2em",
          }}
        >
          <h1>Section 1 - Standard Scroll</h1>
        </section>

        {/* Pinned Horizontal Scroll Section */}
        <section
          ref={horizontalSectionRef}
          className="horizontal-scroll-section"
          style={{
            position: "relative",
            height: "100vh", // This is the *pinned height*
            backgroundColor: "#e6e6fa",
            display: "flex",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          <div
            ref={horizontalContentRef}
            className="horizontal-content-wrapper"
            style={{
              display: "flex",
              flexWrap: "nowrap",
              minWidth: "auto",
              padding: "0 5vw",
              gap: "3vw",
              transform: "translateX(0px)", // Start at 0, animation will move it
            }}
          >
            <div
              className="horizontal-item"
              style={{
                flexShrink: 0,
                width: "40vw",
                height: "60vh",
                backgroundColor: "#ffd700",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "1.5em",
                border: "2px solid black",
              }}
            >
              Item 1
            </div>
            <div
              className="horizontal-item"
              style={{
                flexShrink: 0,
                width: "40vw",
                height: "60vh",
                backgroundColor: "#ffa500",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "1.5em",
                border: "2px solid black",
              }}
            >
              Item 2
            </div>
            <div
              className="horizontal-item"
              style={{
                flexShrink: 0,
                width: "40vw",
                height: "60vh",
                backgroundColor: "#ff6347",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "1.5em",
                border: "2px solid black",
              }}
            >
              Item 3
            </div>
            <div
              className="horizontal-item"
              style={{
                flexShrink: 0,
                width: "40vw",
                height: "60vh",
                backgroundColor: "#ff4500",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "1.5em",
                border: "2px solid black",
              }}
            >
              Item 4
            </div>
            <div
              className="horizontal-item"
              style={{
                flexShrink: 0,
                width: "40vw",
                height: "60vh",
                backgroundColor: "#dc143c",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "1.5em",
                border: "2px solid black",
              }}
            >
              Item 5
            </div>
          </div>
        </section>

        <section
          style={{
            height: "100vh",
            backgroundColor: "#add8e6",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "2em",
          }}
        >
          <h1>Section 3 - Scroll Continues</h1>
        </section>

        <section
          style={{
            height: "100vh",
            backgroundColor: "#87ceeb",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "2em",
          }}
        >
          <h1>Section 4 - End of Page</h1>
        </section>
      </div>
    </div>
  );
}
