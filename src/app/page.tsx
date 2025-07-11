import Header from "./ui/Header";
import Methodology from "./ui/Methodology";
import Portfolio from "./ui/Portfolio";
import OurValues from "./ui/ourValues";
import Contact from "./ui/Contact";
import Footer from "./ui/Footer";
import Hero from "./ui/Hero";
import About from "./ui/About";
import ServicesSection from "./ui/ServicesSection";

export default function Home() {
  return (
    <>
      <Header />
      <main className=" bg-[#1F2937]">
        {/* Hero Section */}
        <Hero/>
        {/* about section */}
        <About/>
        {/* Services Section */}
        <ServicesSection />
        <Methodology />
        <Portfolio />
        <OurValues />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
