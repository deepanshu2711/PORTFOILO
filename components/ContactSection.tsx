import Link from "next/link";
import { Badge } from "./ui/badge";

const ContactSection = () => {
  return (
    <div className="mt-10 mb-5">
      <div className="flex flex-col items-center justify-center gap-4">
        <Badge variant={"secondary"} className="px-5 py-3 rounded-md uppercase">
          Contact
        </Badge>
        <div className="flex flex-col gap-2 items-center ">
          <p className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Get in Touch
          </p>
          <p className="md:text-[16px] max-w-[700px] text-[14px] text-gray-500 dark:text-gray-400 text-center">
            Want to chat? Just shoot me a dm with a{" "}
            <Link
              href={"https://x.com/DeepanshuS7943"}
              target="_blank"
              className="text-blue-500"
            >
              direct question on twitter
            </Link>{" "}
            and I&apos;ll respond whenever I can. I will ignore all soliciting.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
