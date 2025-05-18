import { projects } from "@/util/consts";
import ProjectCard from "../ProjectCard";
import HomeHeader from "./HomeHeader";
import HomeSubheader from "./HomeSubheader";

export default function HomePageProjectsContent() {
  return (
    <div className="fadeIn flex flex-col items-center justify-center w-full  px-2">
      <HomeHeader href="/work">My Work</HomeHeader>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 items-stretch mb-6">
        {projects.slice(0, 6).map((project, idx) => (
          <ProjectCard key={idx} project={project} className="h-full" />
        ))}
      </div>
      <div className="flex justify-center">
        <HomeSubheader href="/work">More</HomeSubheader>
      </div>
    </div>
  );
}
