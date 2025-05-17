import HomeHeader from "./HomeHeader";
import HomeSubheader from "./HomeSubheader";

export default function HomePageAboutContent() {
  return (
    <div className="fadeIn flex flex-col items-center justify-center max-w-2xl mx-auto px-2 sm:px-0">
      <HomeHeader href="/about">About Me</HomeHeader>
      <HomeSubheader>
        I&apos;m a Senior Full Stack Software Engineer based in Ojai, CA. I
        focus on clean maintainable code and user experience. I like to make
        apps that people like to use.
      </HomeSubheader>
    </div>
  );
}
