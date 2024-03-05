import React from "react";
import MaxContainer from "../MaxContainer";

export default function ContactSection() {
  return (
    <MaxContainer className="flex flex-col lg:flex-row items-start gap-4 lg:gap-8 pt-20">
      <div className="w-[150px] lg:sticky lg:top-10">
        <p className="text-base font-semibold">Contact</p>
      </div>

      <div className="flex flex-col gap-2 flex-1">
        <p className="font-normal text-muted-foreground">
          <span className="font-bold text-foreground">Email: </span>{" "}
          abdullahisalihuinusa@gmail.com
        </p>
        <p className="font-normal text-muted-foreground">
          <span className="font-bold text-foreground">Phone: </span> +234 912
          099 6480
        </p>
        <p className="font-normal text-muted-foreground">
          <span className="font-bold text-foreground">Twitter: </span>{" "}
          @web_sculptor
        </p>
        <p className="font-normal text-muted-foreground">
          <span className="font-bold text-foreground">LinkedIn: </span> Connect
        </p>
      </div>
    </MaxContainer>
  );
}
