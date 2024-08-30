import AboutSection from "@/components/AboutSection";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-[20px] md:px-0">
      <div className="flex flex-col gap-10 mt-16">
        <HeroSection />
        <AboutSection />
      </div>
    </main>
  );
}
