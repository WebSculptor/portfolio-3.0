import React from "react";
import MaxContainer from "../MaxContainer";
import { User } from "lucide-react";

export default function AboutSection() {
  return (
    <MaxContainer className="flex flex-col lg:flex-row items-start gap-4 lg:gap-8 pt-20">
      <div className="w-[150px] lg:sticky lg:top-10">
        <p className="text-base font-semibold flex items-center">
          <User className="w-4 h-4 mr-2" /> About
        </p>
      </div>

      <div className="flex flex-col gap-3 flex-1">
        <p className="text-xs md:text-sm leading-normal md:leading-7 font-normal text-muted-foreground">
           👋 Hi there, I&apos;m a front-end developer who loves to create visually striking user interfaces. I create cutting-edge web applications that skillfully combine functionality and design, with a particular emphasis on technologies like React, Next.js, TypeScript and Tailwind.
        </p>
        <p className="text-xs md:text-sm leading-normal md:leading-7 font-normal text-muted-foreground">
           I enjoy working with teams to surpass project goals, converting intricate concepts into beautiful code, the challenge of finding solutions and pushing the frontiers of technology, whether I&apos;m using Solidity to explore blockchain integration or SCSS to create engaging interfaces. Aside from coding, I like going on outdoor excursions, taking pictures, and always improving both personally and professionally.
        </p>
        <p className="text-xs md:text-sm leading-normal md:leading-7 font-normal text-muted-foreground">
           Let&apos;s connect and create something extraordinary together. Feel free to reach out—I&apos;d love to chat!
        </p>
      </div>
    </MaxContainer>
  );
}
