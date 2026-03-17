"use client";

import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero";
import ServicesSection from "@/components/services";
import TechSection from "@/components/tech-section";
import ProjectsSection from "@/components/projects";
import ContactSection from "@/components/contact";
import Footer from "@/components/footer";
import CodeCards from "@/components/CodeCards";
import Techs from "@/components/Techs";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <CodeCards />
        <Techs />
        <ServicesSection />
        <TechSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
