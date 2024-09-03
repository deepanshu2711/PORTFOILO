"use client";
import { FileText, Github, Linkedin, Mail, Twitter } from "lucide-react";
import { ModeToggle } from "./toggleTheme";
import { FloatingDock } from "./ui/floating-dock";


const data = [
  {
    title: "Resume",
    icon: <FileText />,
    href: "/Resume latest.pdf"
  },
  {
    title: "Github",
    icon: <Github />,
    href: "https://github.com/deepanshu2711"
  },
  {
    title: "Twitter",
    icon: <Twitter />,
    href: "https://x.com/DeepanshuS7943"
  },
  {
    title: "Linkedin",
    icon: <Linkedin />,
    href: "https://www.linkedin.com/in/deepanshu-saini-a6757b213/"
  },
  {
    title: "Mail",
    icon: <Mail />,
    href: "mailto:deepanshusaini2711@gmail.com"
  },
  {
    title: "Theme",
    icon: <ModeToggle />,
    href: "/"
  },
]

const BottomBar = () => {
  return (
    <FloatingDock mobileClassName="fixed bottom-10 left-1/2 transform -translate-x-1/2 z-30 border hover:border-0" desktopClassName="fixed bottom-2 left-1/2 transform -translate-x-1/2 z-30 border hover:border-0" items={data} />
  );
};

export default BottomBar;
