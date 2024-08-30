"use client";
import { FileText, Github, Linkedin, Mail, Twitter } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import Link from "next/link";
import { ModeToggle } from "./toggleTheme";

const BottomBar = () => {
  return (
    <div className="fixed z-30 bottom-2 animate-bounce hover:animate-none border border-gray-300 dark:border-gray-700 shadow-lg self-center bg-white dark:bg-[#0F1011]  rounded-full p-1  text-black">
      <div className="flex items-center hover:gap-6  gap-4 px-4 transition-all delay-75">
        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger>
              <Link
                href={"/Resume latest.pdf"}
                target="_blank"
                className="flex items-center gap-2"
              >
                <div className="hover:p-4 py-4 transition-all delay-[50] hover:bg-gray-100 dark:hover:bg-white/10 rounded-full cursor-pointer">
                  <FileText className="h-[20px] w-[20px] dark:text-white" />
                </div>
                <div className="w-[1px] h-[30px] bg-gray-300" />
              </Link>
            </TooltipTrigger>
            <TooltipContent className="bg-gray-950 text-gray-100">
              <p className="text-sm">Resume</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger>
              <Link
                href={"https://github.com/deepanshu2711"}
                target="_blank"
                className="flex items-center gap-2"
              >
                <div className="hover:p-4 py-4 transition-all delay-[50] hover:bg-gray-100 dark:hover:bg-white/10 rounded-full cursor-pointer">
                  <Github className="h-[20px] w-[20px] dark:text-white" />
                </div>
              </Link>
            </TooltipTrigger>
            <TooltipContent className="bg-gray-950 text-gray-100">
              <p className="text-sm">GitHub</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger>
              <Link
                href={"https://x.com/DeepanshuS7943"}
                target="_blank"
                className="flex items-center gap-2"
              >
                <div className="hover:p-4 py-4 transition-all delay-[50] hover:bg-gray-100 dark:hover:bg-white/10 rounded-full cursor-pointer">
                  <Twitter className="h-[20px] w-[20px] dark:text-white" />
                </div>
              </Link>
            </TooltipTrigger>
            <TooltipContent className="bg-gray-950 text-gray-100">
              <p className="text-sm">Twitter</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger>
              <Link
                href={"https://www.linkedin.com/in/deepanshu-saini-a6757b213/"}
                target="_blank"
                className="flex items-center gap-2"
              >
                <div className="hover:p-4 py-4 transition-all delay-[50] hover:bg-gray-100 dark:hover:bg-white/10 rounded-full cursor-pointer">
                  <Linkedin className="h-[20px] w-[20px] dark:text-white" />
                </div>
              </Link>
            </TooltipTrigger>
            <TooltipContent className="bg-gray-950 text-gray-100">
              <p className="text-sm">Linkedin</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger>
              <Link
                href={"mailto:deepanshusaini2711@gmail.com"}
                target="_blank"
                className="flex items-center gap-2"
              >
                <div className="hover:p-4 py-4 transition-all delay-[50] hover:bg-gray-100 dark:hover:bg-white/10  rounded-full cursor-pointer">
                  <Mail className="h-[20px] w-[20px] dark:text-white" />
                </div>
              </Link>
            </TooltipTrigger>
            <TooltipContent className="bg-gray-950 text-gray-100">
              <p className="text-sm">Mail</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger className="flex items-center gap-2">
              <div className="w-[1px] h-[30px] bg-gray-300" />
              <ModeToggle />
            </TooltipTrigger>
            <TooltipContent className="bg-gray-950 text-gray-100">
              <p className="text-sm">Theme</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
};

export default BottomBar;
