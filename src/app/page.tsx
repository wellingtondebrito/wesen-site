import Header from "./ui/header/header";
import AboutSection from "./ui/aboutSection/aboutSection";
import Services from "./ui/servicesSection/service";
import Methodology from "./ui/methodSection/methodology";
import Portfolio from "./ui/portfolioSection/portfolio";
import OurValues from "./ui/ourValues/ourValues";
import Contact from "./ui/contact/contact";
import Footer from "./ui/footer/footer";
import Hero from "./ui/heroSection/heroSection";


export default function Home() {
  return (
    <>
      <Header />
      <main className=" bg-[#1F2937]">
        {/* Hero Section */}
       <Hero/>

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
