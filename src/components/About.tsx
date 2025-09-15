import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 px-1 md:px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="text-gradient">About Me</span>
        </h2>
        
        <Card className="card-hover p-8 md:p-12">
          <div className="text-center">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-accent mx-auto mb-8 flex items-center justify-center">
              <span className="text-4xl font-bold text-primary-foreground">SS</span>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I'm a passionate <span className="text-primary font-semibold">AI/ML Engineer</span> and 
              <span className="text-primary font-semibold"> Python Developer</span> with a strong foundation 
              in computer vision and machine learning. As a recent graduate, I bring fresh perspectives 
              and cutting-edge knowledge to real-world challenges.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              My expertise spans across <span className="text-accent font-semibold">Python development</span>, 
              <span className="text-accent font-semibold"> machine learning frameworks</span>, and 
              <span className="text-accent font-semibold"> computer vision applications</span>. 
              I'm particularly excited about building AI-driven solutions that solve real-world problems 
              and make a positive impact.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding, you'll find me exploring the latest developments in AI research, 
              experimenting with new technologies, or working on personal projects that push the 
              boundaries of what's possible with machine learning.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default About;