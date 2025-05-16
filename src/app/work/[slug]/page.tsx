import PageHeader from "@/components/PageHeader";
import PageSubheader from "@/components/PageSubheader";
import TechPill from "@/components/TechPill";
import TextContainer from "@/components/TextContainer";
import { projects } from "@/util/consts";
import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return {};
  const imageUrl = project.image.startsWith("http")
    ? project.image
    : `https://www.eljamez.com/${project.image}`;
  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      url: `https://eljamez.com/work/${project.slug}`,
      siteName: "eljamez.com",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
      locale: "en_US",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.description,
      images: [imageUrl],
      creator: "@eljamez", // Update if you have a Twitter handle
    },
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) return notFound();

  return (
    <div className="w-full mx-auto flex flex-col gap-8 px-2 sm:px-0 min-h-[73vh] pb-10">
      <a
        href="/work"
        className="flex items-center group font-bold gap-2 text-slate-800 origin-center hover:underline transition-all w-auto"
      >
        <FaArrowLeft />
        <span className="text-lg group-hover:translate-x-4 group-hover:scale-125 transition-all">
          Back to Work
        </span>
      </a>

      {/* Title and Subtitle */}
      <div className="flex flex-col items-center text-center mb-4">
        <PageHeader title={project.title} />
        <PageSubheader title={project.employer} />
      </div>

      {/* 2 Column Layout */}
      <div className="flex flex-col md:flex-row gap-8 w-full">
        {/* Image Left */}
        <div className="md:w-1/2 w-full flex justify-center items-start">
          <Image
            src={project.image}
            alt={project.title}
            width={1000}
            height={1000}
            className="w-full h-80 object-cover object-top rounded  border-2"
          />
        </div>
        {/* Info Right */}
        <TextContainer className="md:w-1/2 w-full flex flex-col justify-start">
          <p className="text-slate-800 mb-4 leading-relaxed">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((tech, idx) => (
              <TechPill key={idx} tech={tech} />
            ))}
          </div>
          <div className="text-slate-800 leading-relaxed mb-6 whitespace-pre-line">
            {project.details}
          </div>
          <div className="flex gap-2">
            {project.link && project.link !== "#" && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-accent text-white hover:shadow-lg font-bold rounded-lg shadow-card hover:text-slate-600 hover:bg-secondary transition-all hover:scale-110 text-base sm:text-lg"
              >
                Visit {project.title}
              </a>
            )}
          </div>
        </TextContainer>
      </div>
    </div>
  );
}
