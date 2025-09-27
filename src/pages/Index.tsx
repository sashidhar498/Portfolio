import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import OlderPortfolio from "@/components/Oldportfolio";

const Index = () => {
  return (
    <div className="smooth-scroll">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <OlderPortfolio />
      <Achievements />
      <Experience />
      <Contact />
    </div>
  );
};

export default Index;
