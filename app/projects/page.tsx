"use client";

import GoBack from "@/components/shared/GoBack";
import MaxContainer from "@/components/shared/MaxContainer";
import ProjectCard from "@/components/shared/cards/ProjectCard";

export default function page() {
  return (
    <MaxContainer className="py-5 space-y-4">
      <GoBack />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {Array.from({ length: 8 }).map((_, _key) => (
          <ProjectCard key={_key} id={_key + 1} />
        ))}
      </div>
    </MaxContainer>
  );
}
