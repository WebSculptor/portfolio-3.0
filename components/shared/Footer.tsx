import React from "react";
import MaxContainer from "./MaxContainer";
import { Clock } from "lucide-react";
import TimeFormat from "./TimeFormat";

export default function Footer() {
  return (
    <footer className="mt-20 py-8 lg:py-16 border-t bg-secondary/50">
      <MaxContainer className="flex flex-col lg:flex-row items-start gap-4 lg:gap-8">
        <div className="w-[150px] lg:sticky lg:top-10">
          <p className="text-base font-semibold flex items-center">
            <Clock className="w-4 h-4 mr-2" />
            My Time
          </p>
        </div>

        <div className="flex flex-col gap-2 flex-1">
          <TimeFormat />

          <div className="mt-2 flex lg:items-center flex-col lg:flex-row justify-between gap-1 lg:gap-10 flex-wrap">
            <p className="text-sm text-muted-foreground">
              &copy; Copyright | All Rights Reserver
            </p>
            <p className="text-sm text-muted-foreground">Made by Abdullahi</p>
          </div>
        </div>
      </MaxContainer>
    </footer>
  );
}
