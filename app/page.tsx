'use client';
import HeroSection from "@/components/hero";
import ServicesSection from "@/components/services";
import ProjectsSection from "@/components/projects";
import ContactSection from "@/components/contact";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";


export default function Home() {
 

  return (
    <div className="relative bg-white">
          <Navbar />
          <HeroSection />
          <ServicesSection />
          <ProjectsSection />
          <ContactSection />
          <Footer />
    </div>
  );
}