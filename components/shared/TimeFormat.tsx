"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Teko } from "next/font/google";

const shareTechMono = Teko({
  subsets: ["latin"],
  weight: "500",
});

export default function TimeFormat() {
  const [time, setTime] = useState(getCurrentTime());

  function getCurrentTime() {
    const date = new Date();
    let hours = date.getHours();
    const minutes = ("0" + date.getMinutes()).slice(-2);
    const amOrPm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    const formattedTime = `${("0" + hours).slice(-2)}:${minutes} ${amOrPm}`;
    return formattedTime;
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(getCurrentTime());
    }, 100);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <h1 className={cn("text-5xl font-bold", shareTechMono.className)}>
      {time}
    </h1>
  );
}
