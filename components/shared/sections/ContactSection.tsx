import React from "react";
import MaxContainer from "../MaxContainer";
import { PhoneCall } from "lucide-react";
import Link from "next/link";
import { links } from "@/lib/utils";

export default function ContactSection() {
  return (
    <MaxContainer className="flex flex-col lg:flex-row items-start gap-4 lg:gap-8 pt-20">
      <div className="w-[150px] lg:sticky lg:top-10">
        <p className="text-base font-semibold flex items-center">
          <PhoneCall className="w-4 h-4 mr-2" />
          Contact
        </p>
      </div>

      <div className="flex flex-col gap-2 flex-1 w-full">
        {links.map((link) => (
          <div key={link.path} className="flex items-center w-full gap-4">
            <p className="font-normal text-muted-foreground">
              <span className="font-bold text-foreground text-sm md:text-base">
                {link.name}:{" "}
              </span>{" "}
              <Link
                href={link.path}
                target={link.target ? "_blank" : undefined}
                className="hover:underline">
                {link.text}
              </Link>
            </p>

            <hr className="w-full flex-1" />

            <link.icon className="w-4 h-4 text-muted-foreground" />
          </div>
        ))}
      </div>
    </MaxContainer>
  );
}
