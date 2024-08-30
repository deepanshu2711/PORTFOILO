"use client";

import { ChevronRight, Dot } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useState } from "react";

const WorkExperienceSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-col gap-4">
      <p className="text-xl font-bold">Work Experience</p>
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-3 w-full">
          <Avatar className="border-[5px] dark:border-gray-300 ">
            <AvatarImage src="/searchAI.jpg" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col flex-1 items-start w-full justify-between cursor-pointer group"
          >
            <div className="flex items-start justify-between w-full">
              <div>
                <div className="flex items-center gap-2">
                  <p className="inline-flex font-semibold leading-none text-xs sm:text-sm">
                    SearchAI Infrastructure Technology Pvt Ltd{" "}
                  </p>
                  {isOpen ? (
                    <ChevronRight className="inline-block w-4 h-4 ml-1 text-gray-400 transform transition-transform duration-400 rotate-90" />
                  ) : (
                    <ChevronRight className="inline-block w-4 h-4 ml-1 text-gray-400 transform transition-transform duration-400 animate-bounce group-hover:text-black dark:group-hover:text-white " />
                  )}
                </div>
                <p className="font-sans text-xs">
                  FRONTEND CORE ENGINEER(NEXT/REACT)
                </p>
              </div>
              <div>
                <p className="font-medium hidden md:block text-gray-500 text-sm md:text-[14px]">
                  April 2024 - July 2024
                </p>
              </div>
            </div>
            {isOpen && (
              <div className="mt-2">
                <p className="font-normal text-gray-500 dark:text-gray-400 text-[14px]">
                  As a Frontend Core Engineer at SearchAI, I specialize in
                  developing and optimizing our e-commerce platform using
                  Next.js and React. My role involves designing and implementing
                  dynamic, responsive user interfaces to enhance the shopping
                  experience for our customers.
                </p>
                <div className="mt-2">
                  <ul>
                    <li className="flex items-start gap-2 text-gray-500 dark:text-gray-400">
                      <Dot />
                      <p className="text-[14px]">
                        Building and maintaining scalable and high-performance
                        web applications with Next.js and React.
                      </p>
                    </li>
                    <li className="flex items-start gap-2 text-gray-500 dark:text-gray-400">
                      <Dot />
                      <p className="text-[14px]">
                        Implementing best practices to ensure fast loading times
                        and smooth interactions across various devices.
                      </p>
                    </li>
                    <li className="flex items-start gap-2 text-gray-500 dark:text-gray-400">
                      <Dot />
                      <p className="text-[14px]">
                        Working closely with design and backend teams to deliver
                        seamless integration and innovative solutions for
                        complex problems.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperienceSection;
