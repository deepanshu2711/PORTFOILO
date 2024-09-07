import { video } from "framer-motion/client";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Github, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  skills: string[];
  gihtub: string;
  live?: string;
  video?: string;
}

const Project = ({
  description,
  gihtub,
  image,
  skills,
  title,
  live,
  video,
}: ProjectProps) => {
  return (
    <Card className="shadow-md">
      <CardHeader className="p-0">
        <div>
          {video ? (
            <video
              width="300"
              className="w-[500px] h-[170px] object-cover"
              autoPlay
              loop
              muted
            >
              <source src="/save-t-drive.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <Image
              src={image}
              alt="Save To Drive"
              height={500}
              width={500}
              className="rounded-t-lg h-[170px] object-cover"
            />
          )}
        </div>
      </CardHeader>
      <CardContent>
        <p className="font-semibold tracking-tight mt-1 text-base">{title}</p>
        <p className="prose mt-2 max-w-full line-clamp-3 text-pretty font-medium font-sans text-xs text-muted-foreground dark:prose-invert">
          {description}
        </p>
        <div className="flex items-center gap-2 flex-wrap mt-4">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 bg-gray-100 rounded-lg px-2 py-1 cursor-pointer"
            >
              <p className="text-[10px] font-semibold text-gray-900">{skill}</p>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-2 mt-4">
          {live && (
            <Link
              href={live}
              target="_blank"
              className="flex items-center gap-2 bg-gray-950 hover:bg-gray-700 rounded-lg px-2 py-1 cursor-pointer"
            >
              <Globe className="h-4 w-4 text-white" />
              <p className="text-[10px] text-white">Website</p>
            </Link>
          )}
          <Link
            href={gihtub}
            target="_blank"
            className="flex items-center gap-2 bg-gray-950 hover:bg-gray-700 rounded-lg px-2 py-1 cursor-pointer"
          >
            <Github className="h-4 w-4 text-white" />
            <p className="text-[10px] text-white">Source</p>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default Project;
