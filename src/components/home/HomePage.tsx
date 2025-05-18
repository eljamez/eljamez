"use client";

import FadeInSection from "../FadeInSection";
import HomePageAboutContent from "./HomePageAboutContent";
import HomePageContactContent from "./HomePageContactContent";
import HomePageHeroContent from "./HomePageHeroContent";
import HomePageProjectsContent from "./HomePageProjectsContent";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-12 sm:gap-20 h-full items-center justify-center text-center py-0 w-full">
      <div
        id="hero"
        className="w-full flex flex-col items-center justify-center px-2 sm:px-4 rounded-3xl relative overflow-hidden h-[70vh]"
      >
        <HomePageHeroContent />
        {/* <div className="hidden sm:block">
          <HomeNextSectionButton sectionId="about" />
        </div> */}
      </div>

      <FadeInSection>
        <section
          id="about"
          className="min-h-[90vh] flex flex-col justify-center items-center w-full mx-auto relative px-2 sm:px-0"
        >
          <HomePageAboutContent />
          {/* <div className="hidden sm:block">
            <HomeNextSectionButton sectionId="projects" />
          </div> */}
        </section>
      </FadeInSection>

      {/* Featured Projects with Project Cards */}
      <FadeInSection>
        <section
          id="projects"
          className="min-h-[90vh] flex flex-col justify-center mx-auto w-full relative px-2 sm:px-0"
        >
          <HomePageProjectsContent />
          {/* <div className="hidden sm:block">
            <HomeNextSectionButton sectionId="contact" />
          </div> */}
        </section>
      </FadeInSection>

      <FadeInSection>
        <section
          id="contact"
          className="min-h-[90vh] flex flex-col justify-center max-w-2xl mx-auto relative px-2 sm:px-0"
        >
          <HomePageContactContent />
        </section>
      </FadeInSection>
    </div>
  );
}
