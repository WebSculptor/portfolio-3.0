import React from "react";
import MaxContainer from "../MaxContainer";

export default function AboutSection() {
  return (
    <MaxContainer className="flex items-start gap-8 py-20">
      <div className="w-[150px]">
        <p className="text-lg font-semibold">About</p>
      </div>

      <div className="flex flex-col gap-3 flex-1">
        <p className="text-sm leading-7 font-normal text-muted-foreground">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          veritatis, laboriosam qui est sequi minus vitae consectetur dolorum?
          Repellat, incidunt?
        </p>
        <p className="text-sm leading-7 font-normal text-muted-foreground">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Exercitationem, facere fugit, recusandae consectetur commodi assumenda
          nobis sit, quo obcaecati odio expedita. Maxime earum voluptas ipsum
          tenetur velit debitis at labore optio! Voluptates vel praesentium
          incidunt!
        </p>
      </div>
    </MaxContainer>
  );
}