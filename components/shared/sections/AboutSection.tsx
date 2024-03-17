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
          👋 Hello! I&apos;m Abdullahi Salihu, a passionate frontend developer with a knack for crafting engaging and intuitive user experiences. With a strong foundation in technologies like React, Next.js, and TypeScript, I specialize in building modern web applications that blend functionality with aesthetics seamlessly.
        </p>
        <p className="text-sm leading-7 font-normal text-muted-foreground">
          🚀 My journey into the world of development began with a fascination for creating digital solutions that make a tangible impact. Over the years, I&apos;ve honed my skills through hands-on experience and a commitment to staying abreast of the latest trends and best practices in the ever-evolving tech landscape.
        </p>
        <p className="text-sm leading-7 font-normal text-muted-foreground">
          💻 Whether it&apos;s translating complex ideas into elegant code or collaborating with cross-functional teams to bring projects to life, I thrive on the challenge of solving problems and delivering solutions that exceed expectations. From designing captivating user interfaces with SCSS to delving into the intricacies of blockchain integration with Solidity, I&apos;m always eager to explore new technologies and push the boundaries of what&apos;s possible.
        </p>
        <p className="text-sm leading-7 font-normal text-muted-foreground">
          🌟 Outside of coding, you&apos;ll find me exploring the great outdoors, indulging my passion for photography, or immersing myself in a good book. I believe in the power of continuous learning and growth, both personally and professionally, and I&apos;m excited to see where the journey takes me next!
        </p>
        <p className="text-sm leading-7 font-normal text-muted-foreground">
          Let&apos;s connect and create something extraordinary together. Feel free to reach out—I&apos;d love to chat!
        </p>
      </div>
    </MaxContainer>
  );
}
