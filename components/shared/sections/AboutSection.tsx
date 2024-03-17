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
        <p className="text-sm leading-7 font-normal text-muted-foreground">
          Hello, I&apos;m Abdullahi Salihu, a front-end developer who loves to create visually striking user interfaces. I create cutting-edge web applications that skillfully combine functionality and design, with a particular emphasis on technologies like React, Next.js, and TypeScript.
        </p>
        <p className="text-sm leading-7 font-normal text-muted-foreground">
         I enjoy working with teams to surpass project goals and converting intricate concepts into beautiful code. I enjoy the challenge of finding solutions and pushing the frontiers of technology, whether I&apos;m using Solidity to explore blockchain integration or SCSS to create engaging interfaces. Aside from coding, I like going on outdoor excursions, taking pictures, and always improving both personally and professionally.
        </p>
        <p className="text-sm leading-7 font-normal text-muted-foreground">
           I&apos;m always up for a conversation, so let&apos;s connect and make something amazing together!
        </p>
      </div>
    </MaxContainer>
  );
}
