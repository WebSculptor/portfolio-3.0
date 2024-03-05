import React from "react";
import MaxContainer from "../MaxContainer";
import DetailsCard from "../cards/DetailsCard";
import { Briefcase, Library } from "lucide-react";

interface BackgroundSectionProps {
  type: "ed" | "ex";
  list: number;
}

export default function BackgroundSection({
  type,
  list,
}: BackgroundSectionProps) {
  return (
    <MaxContainer className="flex flex-col lg:flex-row items-start gap-4 lg:gap-8 pt-20">
      <div className="w-[150px] lg:sticky lg:top-10">
        <p className="text-base font-semibold flex items-center">
          {type == "ex" ? (
            <Briefcase className="w-4 h-4 mr-2" />
          ) : (
            <Library className="w-4 h-4 mr-2" />
          )}

          {type == "ex" ? "Experience" : "Education"}
        </p>
      </div>

      <div className="flex flex-col gap-4 flex-1">
        {Array.from({ length: list }).map((_, _key) => (
          <DetailsCard key={_key} />
        ))}
      </div>
    </MaxContainer>
  );
}
