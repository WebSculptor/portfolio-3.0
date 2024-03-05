import Banner from "@/components/shared/Banner";
import AboutSection from "@/components/shared/sections/AboutSection";
import BackgroundSection from "@/components/shared/sections/BackgroundSection";
import ProjectSection from "@/components/shared/sections/ProjectSection";
import ContactSection from "@/components/shared/sections/ContactSection";
import Footer from "@/components/shared/Footer";

export default function Home() {
  return (
    <div className="w-full">
      <Banner />
      <AboutSection />
      <ProjectSection />
      <BackgroundSection type="ed" list={20} />
      <BackgroundSection type="ex" list={1} />
      <ContactSection />

      <Footer />
    </div>
  );
}
