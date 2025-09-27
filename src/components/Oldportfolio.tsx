import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar, Code, Eye } from "lucide-react";

const OlderPortfolio = () => {
  const portfolioVersions = [
    {
      id: 1,
      title: "Current Portfolio",
      year: "2024",
      description: "My current portfolio built with modern React and Next.js, featuring advanced animations and responsive design.",
      technologies: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
      liveUrl: "#",
      name:'Current',
      codeUrl: "https://github.com/sashidhar498/Portfolio",
      image: "new.png" // Replace with actual screenshot
    },
    {
      id: 2,
      title: "Previous Portfolio",
      year: "2023",
      description: "My earlier portfolio showcasing foundational web development skills and initial project implementations.",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      liveUrl: "Portfolio/index.html",
      name:'View Live',
      codeUrl: "https://github.com/sashidhar498/Portfolio",
      image: "old.png" // Replace with actual screenshot
    }
  ];

  return (
    <section id="older-portfolio" className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Portfolio</span> Evolution
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Compare my current portfolio with the previous version to see how my 
            design skills and technical expertise have evolved over time.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {portfolioVersions.map((portfolio, index) => (
            <div
              key={portfolio.id}
              className={`group relative bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 overflow-hidden hover:shadow-2xl transition-all duration-500 ${
                index % 2 === 0 ? 'animate-fade-in-left' : 'animate-fade-in-right'
              }`}
              style={{
                animationDelay: `${index * 0.2}s`
              }}
            >
              {/* Portfolio Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={portfolio.image}
                  alt={portfolio.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                
                {/* Year badge */}
                <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm text-primary-foreground px-3 py-1 rounded-full text-sm font-medium flex items-center">
                  <Calendar className="w-3 h-3 mr-1" />
                  {portfolio.year}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {portfolio.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {portfolio.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {portfolio.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex gap-3">
                  <a
                    href={portfolio.liveUrl}
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button variant="default" size="sm" className="w-full btn-glow">
                      <Eye className="mr-2 h-4 w-4" />
                      {portfolio.name}
                    </Button>
                  </a>
                  <a
                    href={portfolio.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button variant="outline" size="sm" className="w-full">
                      <Code className="mr-2 h-4 w-4" />
                      View Code
                    </Button>
                  </a>
                </div>
              </div>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OlderPortfolio;