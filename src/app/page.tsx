import About from "@/components/About";
import Hero from "@/components/Hero";
import Programs from "@/components/Programs";
import ServicesSection from "@/components/Services";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Gallery2 from "@/components/Gallery2";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Programs Section */}
      <Programs />

      <Team />

      {/* Benefits Section */}
      <ServicesSection />

      <Gallery2 />

      {/* Testimonials Section */}
      <Testimonials />

      {/* News Section */}
      <Blog />

      {/* Contact Form Section */}
      <Contact />
    </div>
  );
}
