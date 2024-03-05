import React from "react";
import MaxContainer from "./MaxContainer";
import { Copy, Link2, MapPin, Monitor } from "lucide-react";
import { RiMapPin5Line } from "react-icons/ri";

export default function Banner() {
  return (
    <div className="w-full sticky top-0 z-10">
      <div className="w-full h-[239px] border-b bg-secondary flex flex-col justify-end">
        <MaxContainer className="flex items-center gap-8">
          <div className="bg-secondary w-[150px] h-[150px] rounded-full -mb-10 border-[10px] border-background"></div>

          <div className="flex flex-col gap-2 flex-1">
            <h1 className="text-2xl font-semibold">Abdullahi Salihu</h1>

            <div className="flex items-center gap-6">
              <p className="flex items-center text-muted-foreground text-sm">
                <Monitor className="w-4 h-4 mr-2" /> Versatile Developer
              </p>
              <p className="flex items-center text-muted-foreground text-sm">
                <RiMapPin5Line className="w-4 h-4 mr-2" /> Nigeria
              </p>
              <p className="flex items-center text-muted-foreground text-sm">
                <Copy className="w-4 h-4 mr-2" /> Email
              </p>
              <p className="flex items-center text-muted-foreground text-sm">
                <Link2 className="w-4 h-4 mr-2" /> Visit Website
              </p>
            </div>
          </div>
        </MaxContainer>
      </div>
    </div>
  );
}
