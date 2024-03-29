import React from "react";
import MaxContainer from "../MaxContainer";
import ProjectCard from "../cards/ProjectCard";
import Link from "next/link";
import { ScrollText } from "lucide-react";

export default function ProjectSection() {
  return (
    <MaxContainer className="flex flex-col lg:flex-row items-start gap-4 lg:gap-8 pt-20">
      <div className="w-[150px] lg:sticky lg:top-10">
        <p className="text-base font-semibold flex items-center">
          <ScrollText className="w-4 h-4 mr-2" />
          Project
        </p>
      </div>

      <div className="flex-1 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ProjectCard id={1} />
          <ProjectCard id={2} />
        </div>

        <div className="flex justify-end mt-3">
          <Link href="/projects" className="text-sm hover:underline">
            View More
          </Link>
        </div>
      </div>
    </MaxContainer>
  );
}
