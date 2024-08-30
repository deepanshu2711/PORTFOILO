import Education from "./Education";

const EducationSection = () => {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-xl font-bold">Education</p>
      <div className="flex flex-col gap-4 w-full">
        <Education
          degree="B-tech in Computer Science"
          name="Maharishi Markandeshwar University, Mullana"
          startDate="2020"
          endDate="2024"
          image="/mmu.jpg"
        />
        <Education
          degree="12th Grade Non-Medical"
          name="SMB Gita Sr. Sec. School ,Kurukshetra"
          startDate="2018"
          endDate="2019"
          image="/smb.jpg"
        />
        <Education
          degree="10th Grade"
          name="DAV Centenary Public School, Radaur"
          startDate="2016"
          endDate="2017"
          image="/dav.png"
        />
      </div>
    </div>
  );
};

export default EducationSection;
