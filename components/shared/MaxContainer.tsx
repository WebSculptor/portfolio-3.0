import { cn } from "@/lib/utils";
import React from "react";

interface MaxContainerProps {
  className?: string;
  children: React.ReactNode;
}

export default function MaxContainer({
  className,
  children,
}: MaxContainerProps) {
  return (
    <div className={cn("mx-auto w-full px-4 max-w-6xl", className)}>
      {children}
    </div>
  );
}
