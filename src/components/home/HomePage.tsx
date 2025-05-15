"use client";

import FadeInSection from "../FadeInSection";
import HomeNextSectionButton from "./HomeNextSectionButton";
import HomePageAboutContent from "./HomePageAboutContent";
import HomePageContactContent from "./HomePageContactContent";
import HomePageHeroContent from "./HomePageHeroContent";
import HomePageMusicContent from "./HomePageMusicContent";
import HomePageProjectsContent from "./HomePageProjectsContent";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-20 h-full items-center justify-center text-center py-0">
      {/* Hero Section with vibrant gradient background */}
      <div
        id="hero"
        className="w-full flex flex-col items-center justify-center px-4 rounded-3xl relative overflow-hidden min-h-[80vh] h-[80vh]"
      >
        <HomePageHeroContent />
        <HomeNextSectionButton sectionId="about" />
      </div>

      <FadeInSection>
        <section
          id="about"
          className="min-h-[90vh] flex flex-col justify-center items-center w-full mx-auto relative"
        >
          <HomePageAboutContent />
          <HomeNextSectionButton sectionId="projects" />
        </section>
      </FadeInSection>

      {/* Featured Projects with Project Cards */}
      <FadeInSection>
        <section
          id="projects"
          className="min-h-[90vh] flex flex-col justify-center mx-auto w-full relative"
        >
          <HomePageProjectsContent />
          <HomeNextSectionButton sectionId="music" />
        </section>
      </FadeInSection>

      <FadeInSection>
        <section
          id="music"
          className="min-h-[90vh] flex flex-col justify-center max-w-2xl mx-auto relative"
        >
          <HomePageMusicContent />
          <HomeNextSectionButton sectionId="contact" />
        </section>
      </FadeInSection>

      <FadeInSection>
        <section
          id="contact"
          className="min-h-[90vh] flex flex-col justify-center max-w-2xl mx-auto relative"
        >
          <HomePageContactContent />
        </section>
      </FadeInSection>
    </div>
  );
}
