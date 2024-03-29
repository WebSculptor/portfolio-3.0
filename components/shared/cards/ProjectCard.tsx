import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ProjectCard({ id }: { id: number }) {
  return (
    <Link
      href={`/projects/${id}`}
      className="border rounded-xl overflow-hidden shadow bg-secondary/80 dark:bg-secondary/50">
      <div className="aspect-[1.5] overflow-hidden group">
        <Image
          src="https://fakeimg.pl/600x400/262626/fff?font=museo"
          alt="Abdullahi Salihu"
          priority
          width={150}
          height={199}
          className="object-cover object-center h-full w-full group-hover:scale-110 transition"
        />
      </div>
      <div className="gap-1 flex flex-col p-4 border-t">
        <h2 className="text-foreground font-medium">Project Name - {id}</h2>
        <p className="text-sm text-muted-foreground">Small description</p>
      </div>
    </Link>
  );
}
