import React from "react";
import MaxContainer from "./MaxContainer";
import { Copy, Link2, MapPin, Monitor } from "lucide-react";
import { RiMapPin5Line } from "react-icons/ri";
import Image from "next/image";
import { ModeToggle } from "./ModeToggle";

export default function Banner() {
  return (
    <div className="w-full lg:h-[239px] py-10 lg:py-0 border-b bg-secondary/80 dark:bg-secondary/50 flex flex-col lg:justify-end relative">
      <div className="absolute top-6 right-6">
        <ModeToggle />
      </div>
      <MaxContainer className="flex items-center flex-col lg:flex-row gap-4 lg:gap-8">
        <div className="bg-secondary w-[150px] h-[150px] rounded-full overflow-hidden lg:-mb-10 border-[5px] border-background group">
          <Image
            src="/me.jpg"
            alt="Abdullahi Salihu"
            priority
            width={150}
            height={150}
            className="object-cover object-center rounded-full group-hover:scale-110 transition"
          />
        </div>

        <div className="flex flex-col items-center lg:items-start gap-2 flex-1">
          <h1 className="text-2xl font-semibold">Abdullahi Salihu</h1>

          <div className="flex items-center justify-center gap-x-5 gap-y-2 flex-wrap">
            <p className="flex items-center text-muted-foreground text-sm">
              <Monitor className="w-3.5 h-3.5 mr-2" /> Versatile Developer
            </p>
            <p className="flex items-center text-muted-foreground text-sm">
              <RiMapPin5Line className="w-3.5 h-3.5 mr-2" /> Nigeria
            </p>
            <p className="flex items-center text-muted-foreground text-sm">
              <Copy className="w-3.5 h-3.5 mr-2" /> Email
            </p>
          </div>
        </div>
      </MaxContainer>
    </div>
  );
}
