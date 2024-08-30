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
      <Avatar>
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
            <p className="font-sans text-xs">{degree}</p>
          </div>
          <div>
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
