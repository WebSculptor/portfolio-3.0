import Link from "next/link";
import React from "react";

export default function Card() {
  return (
    <Link href="/" className="border rounded-lg overflow-hidden">
      <div className="aspect-[1.4] bg-secondary/50"></div>
      <div className="gap-1 flex flex-col p-4 border-t bg-background">
        <h2 className="text-foreground font-medium">Project Name</h2>
        <p className="text-sm text-muted-foreground">Small description</p>
      </div>
    </Link>
  );
}
