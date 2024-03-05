import GoBack from "@/components/shared/GoBack";
import MaxContainer from "@/components/shared/MaxContainer";
import React from "react";

export default function ProjectDetails({
  params: { id },
}: {
  params: { id: number };
}) {
  return (
    <MaxContainer className="py-5 space-y-4">
      <GoBack />

      <div className="flex flex-col gap-2">
        <div className="w-full aspect-[1.3] bg-secondary rounded-xl border mb-2 lg:mb-4"></div>

        <h1 className="text-xl font-bold">Project Name - {id}</h1>
        <p className="text-sm text-muted-foreground">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt,
          corporis?
        </p>
      </div>
    </MaxContainer>
  );
}
