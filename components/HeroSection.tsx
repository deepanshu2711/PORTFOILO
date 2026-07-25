import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="flex items-center gap-5 justify-between">
      <div className="flex flex-col gap-2">
        <h1 className="inline-block text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
          Hi, I&apos;m Deepanshu 👋
        </h1>
        <p className="max-w-[300px] md:max-w-[500px] text-[14px] md:text-[16px]">
          Full Stack + AI Developer building intelligent systems. Working with{" "}
          <span className="font-semibold text-blue-500">RAG</span>,{" "}
          <span className="font-semibold text-blue-500">GenAI</span>, and{" "}
          <span className="font-semibold text-blue-500">Multi-Agents</span>.
        </p>
      </div>
      <div>
        <Image
          src={"/me.jpeg"}
          alt="Deepanshu"
          width={150}
          height={150}
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default HeroSection;
