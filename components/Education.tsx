import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface EducationProps {
  name: string;
  degree: string;
  startDate: string;
  endDate: string;
  image: string;
}

const Education = ({
  name,
  degree,
  startDate,
  endDate,
  image,
}: EducationProps) => {
  return (
    <div className="flex items-start gap-3 w-full">
      <Avatar className="border-[5px] dark:border-gray-300">
        <AvatarImage src={image} />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="flex flex-col flex-1 items-start w-full justify-between cursor-pointer group">
        <div className="flex items-start justify-between w-full">
          <div>
            <div className="flex items-center gap-2">
              <p className="inline-flex font-semibold leading-none text-xs sm:text-sm">
                {name}{" "}
              </p>
            </div>
            <div className="flex items-center gap-2 mt-1 md:mt-0">
              <p className="font-sans text-[12px] md:text-[12px]">{degree}</p>
              <p className="font-medium md:hidden text-gray-500 text-[12px] md:text-[14px]">
                {startDate} - {endDate}
              </p>
            </div>
          </div>
          <div className="hidden md:block">
            <p className="font-medium text-gray-500 text-sm md:text-[14px]">
              {startDate} - {endDate}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
