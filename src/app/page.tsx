import { SmoothScrollProvider } from "@/components/layout/SmoothScrollProvider";
import { Navbar }           from "@/components/layout/Navbar";
import { SideNav }          from "@/components/layout/SideNav";
import { Footer }           from "@/components/layout/Footer";
import { ScrollProgress }   from "@/components/ui/ScrollProgress";
import { BackToTop }        from "@/components/ui/BackToTop";
import { HeroSection }      from "@/components/sections/HeroSection";
import { AboutSection }     from "@/components/sections/AboutSection";
import { TechStackSection } from "@/components/sections/TechStackSection";
import { SkillsSection }    from "@/components/sections/SkillsSection";
import { ProjectsSection }  from "@/components/sections/ProjectsSection";
import { ExperienceSection }from "@/components/sections/ExperienceSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ContactSection }   from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <SmoothScrollProvider>
      <ScrollProgress />
      <Navbar />
      <SideNav />
      <main>
        <HeroSection />
        <AboutSection />
        <TechStackSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <EducationSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
      <BackToTop />
    </SmoothScrollProvider>
  );
}
