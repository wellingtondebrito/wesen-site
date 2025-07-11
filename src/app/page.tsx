import Header from "./ui/header";
import AboutSection from "./ui/aboutSection";
import Services from "./ui/servicesSection";
import Methodology from "./ui/methodSection";
import Portfolio from "./ui/portfolioSection";
import OurValues from "./ui/ourValues";
import Contact from "./ui/contact";
import Footer from "./ui/footer";
import HeroSection from "./ui/heroSection";


export default function Home() {
  return (
    <>
      <Header />
      <main className=" bg-[#1F2937]">
        {/* Hero Section */}
       <HeroSection/>

        {/* about section */}
        <AboutSection />

        {/* Services Section */}
        <Services />

        <Methodology />
        <Portfolio/>
        <OurValues/>
        <Contact/>
        <Footer/>
      </main>
    </>
  );
}
