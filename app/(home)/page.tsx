import Banner from "@/components/shared/Banner";
import AboutSection from "@/components/shared/sections/AboutSection";
import ProjectSection from "@/components/shared/sections/ProjectSection";

export default function Home() {
  return (
    <div className="w-full">
      <Banner />
      <AboutSection />
      <ProjectSection />
    </div>
  );
}
