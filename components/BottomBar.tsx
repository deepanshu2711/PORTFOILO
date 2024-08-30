import { FileText, Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Separator } from "./ui/separator";

const BottomBar = () => {
  return (
    <div className="fixed z-30 bottom-2 animate-bounce hover:animate-none border border-gray-300 shadow-lg self-center bg-white  rounded-full p-1  text-black">
      <div className="flex items-center gap-6 px-4">
        <div className="flex items-center gap-2">
          <div className="hover:p-4 py-4 transition-all delay-[25] hover:bg-gray-100 rounded-full cursor-pointer">
            <FileText className="h-[20px] w-[20px]" />
          </div>
          <div className="w-[1px] h-[30px] bg-gray-300" />
        </div>
        <div className="flex items-center gap-2">
          <div className="hover:p-4 py-4 transition-all delay-[25] hover:bg-gray-100 rounded-full cursor-pointer">
            <Github className="h-[20px] w-[20px]" />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="hover:p-4 py-4 transition-all delay-[25] hover:bg-gray-100 rounded-full cursor-pointer">
            <Twitter className="h-[20px] w-[20px]" />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="hover:p-4 py-4 transition-all delay-[25] hover:bg-gray-100 rounded-full cursor-pointer">
            <Linkedin className="h-[20px] w-[20px]" />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="hover:p-4 py-4 transition-all delay-[25] hover:bg-gray-100 rounded-full cursor-pointer">
            <Mail className="h-[20px] w-[20px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomBar;
