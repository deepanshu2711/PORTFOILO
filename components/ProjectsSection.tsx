import Project from "./project";
import { Badge } from "./ui/badge";

const ProjectsSection = () => {
  return (
    <div className="mt-10">
      <div className="flex flex-col items-center justify-center gap-4">
        <Badge variant={"secondary"} className="px-5 py-3 rounded-md uppercase">
          My Projects
        </Badge>
        <div className="flex flex-col gap-2 items-center ">
          <p className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Check out my latest work
          </p>
          <p className="md:text-[16px] max-w-[700px] text-[14px] text-gray-500 dark:text-gray-400 text-center">
            I&apos;ve worked on a variety of projects, from simple websites to
            complex web applications. Here are a few of my favorites.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <Project
            title="Save-To-Drive"
            description="SaveToDrive is a file storage web application .It is designed to provide a seamless experience for users to store and manage their files effortlessly."
            image="/saveToDrive.png"
            gihtub="https://github.com/deepanshu2711/SaveToDrive"
            live="https://save-to-drive.vercel.app/"
            skills={[
              "Next.js",
              "React",
              "Firebase",
              "MongoDB",
              "Tailwind",
              "ShadCn",
            ]}
          />
          <Project
            title="E-Connect"
            description="A one-to-one Video calling application using WebRtc from scratch which lets you create a room or join a room with roomId and also have a functionality to schedule a meeting with a particular User and users can also view their meeting history"
            image="/e-connect.jpg"
            gihtub="https://github.com/deepanshu2711/E-Connect-WebRTC"
            skills={[
              "React",
              "Node",
              "WebRtc",
              "Websockets",
              "MongoDb",
              "Tailwind",
            ]}
          />
          <Project
            title="Discord Clone"
            description="A comprehensive Discord clone featuring real-time messaging, video and audio calling, file uploads, and secure authentication. This platform leverages a robust backend, a real-time database, and cutting-edge communication technology to deliver a seamless user experience."
            image="/discord.jpg"
            gihtub="https://github.com/deepanshu2711/discord-clone"
            skills={[
              "React",
              "Next.js",
              "Prisma",
              "Socket.io",
              "Supabase",
              "Tailwind",
            ]}
          />
          <Project
            title="Genius AI"
            description="Genius AI is a software which uses OpenAI-API to generate text, images, and code snippets based on user prompt. It is build using Nextjs, shadcn and tailwind for styling."
            image="/genius2.png"
            gihtub="https://github.com/deepanshu2711/Ai_saas"
            live="https://ai-saas-three-zeta.vercel.app/"
            skills={[
              "React",
              "Next.js",
              "Clerk",
              "OpenAI",
              "OpenAI API",
              "Shadcn",
              "Tailwind",
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
