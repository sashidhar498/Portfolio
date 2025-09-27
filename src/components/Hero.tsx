import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, FileText } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  return (
    <section className="hero-container">
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="relative z-10 container mx-auto px-6 text-center animate-fade-in-up">
        <div className="animate-float">
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="text-gradient">Sabbu</span> <span className="text-foreground">Sashidhar</span>
          </h1>
        </div>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          AI/ML Engineer & Python Developer
        </p>
        
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          Transforming ideas into intelligent solutions through machine learning, 
          computer vision, and modern web technologies.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <a href="https://github.com/sashidhar498" target="_blank" rel="noopener noreferrer">
            <Button variant="default" size="lg" className="btn-glow">
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </Button>
          </a>
          <a href="https://linkedin.com/in/sabbusashidhar" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="lg" className="btn-glow">
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </Button>
          </a>
          <a
        href="Sabbu_Sashidhar.pdf"
        download="Sabbu_Sashidhar_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
            <Button variant="outline" size="lg" className="btn-glow">
              <FileText className="mr-2 h-5 w-5" />
              Resume
            </Button>
          </a>
          <a href="mailto:sashidhar498@gmail.com">
            <Button variant="outline" size="lg" className="btn-glow">
              <Mail className="mr-2 h-5 w-5" />
              Contact
            </Button>
          </a>
        </div>
        
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full mx-auto relative">
            <div className="w-1 h-3 bg-primary rounded-full mx-auto mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
