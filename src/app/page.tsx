import Header from "./ui/header/header";
import HeroSection from "./ui/heroSection/HeroSection";
import AboutSection from "./ui/aboutSection/aboutSection";
import Services from "./ui/servicesSection/service";
import Methodology from "./ui/methodSection/methodology";
import Portfolio from "./ui/portfolioSection/portfolio";

export default function Home() {
  return (
    <>
      <Header />
      <main className=" bg-[#1F2937]">
        {/* Hero Section */}
        <HeroSection />

        {/* about section */}
        <AboutSection />

        {/* Services Section */}
        <Services />

        <Methodology />
        <Portfolio/>
      </main>
    </>
  );
}
