const AboutSection = () => {
  return (
    <div>
      <p className="font-bold text-xl">About</p>
      <p className="text-[15px] text-gray-500 dark:text-gray-400">
        I&apos;m a developer passionate about building{" "}
        <span className="font-semibold text-black dark:text-white/90">
          full-stack web apps
        </span>{" "}
        and{" "}
        <span className="font-semibold text-black dark:text-white/90">
          AI-powered systems
        </span>
        .         I work with React, Next.js, Node.js on the frontend/backend, and
        exploring{" "}
        <span className="font-semibold text-blue-500">
          RAG, GenAI & Multi-Agents
        </span>{" "}
        to build intelligent applications.
      </p>
    </div>
  );
};

export default AboutSection;
