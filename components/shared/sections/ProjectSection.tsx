import React from "react";
import MaxContainer from "../MaxContainer";
import Card from "../Card";

export default function ProjectSection() {
  return (
    <MaxContainer className="flex items-start gap-8 py-20">
      <div className="w-[150px]">
        <p className="text-lg font-semibold">Project</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">
        <Card />
        <Card />
      </div>
    </MaxContainer>
  );
}
