import AboutSection from "@/components/AboutSection";
import BlurBottom from "@/components/BlurBottom";
import EducationSection from "@/components/EducationSection";
import HeroSection from "@/components/HeroSection";
import WorkExperienceSection from "@/components/WorkExperienceSection";

export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-[20px] md:px-0">
      <div className="flex flex-col gap-10 mt-16">
        <BlurBottom />
        <HeroSection />
        <AboutSection />
        <WorkExperienceSection />
        <EducationSection />
      </div>
    </main>
  );
}
