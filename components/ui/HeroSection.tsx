import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="flex  items-center justify-between">
      <div className="flex flex-col gap-2">
        <h1 className="inline-block text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
          Hi, I&apos;m Deepanshu 👋
        </h1>
        <p className=" max-w-[400px] md:max-w-[500px] text-[12px] md:text-[16px]">
          Full Stack Developer. I love building things and helping people.
          I&apos;m currently learning{" "}
          <Link
            className="text-blue-500 hover:text-blue-600"
            href="https://kubernetes.io/"
          >
            kubernetes
          </Link>
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
