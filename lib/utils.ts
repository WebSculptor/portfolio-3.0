import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";
import { FiGithub } from "react-icons/fi";
import { Smartphone } from "lucide-react";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const links = [
  {
    name: "Phone",
    text: "+234 912 099 6480",
    path: "tel:+2349120996480",
    target: false,
    icon: Smartphone,
  },
  {
    name: "Email",
    text: "abdullahisalihuinusa@gmail.com",
    path: "mailto:abdullahusalihuinusa@gmail.com",
    target: false,
    icon: MdAlternateEmail,
  },
  {
    name: "Twitter",
    text: "@web_sculptor",
    path: "https://twitter.com/web_sculptor",
    target: true,
    icon: FaXTwitter,
  },
  {
    name: "LinkedIn",
    text: "Connect",
    path: "https://www.linkedin.com/in/abdullahisalihu/",
    target: true,
    icon: FaLinkedinIn,
  },
  {
    name: "GitHub",
    text: "WebSculptor",
    path: "https://github.com/WebSculptor",
    target: true,
    icon: FiGithub,
  },
];
