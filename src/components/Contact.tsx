import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, MessageSquare } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-secondary/10">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-8">
          <span className="text-gradient">Let's Build Something Together</span>
        </h2>
        
        <p className="text-xl text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
          I'm always excited to discuss new opportunities, collaborate on innovative projects, 
          or simply connect with fellow developers and AI enthusiasts.
        </p>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="card-hover p-6">
              <h3 className="text-xl font-semibold mb-6">Get In Touch</h3>
              
              <div className="space-y-4">
                <a 
                  href="mailto:sabbu.sashidhar@email.com" 
                  className="flex items-center gap-4 p-4 rounded-lg bg-secondary/20 hover:bg-secondary/40 transition-colors"
                >
                  <Mail className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-muted-foreground">sabbu.sashidhar@email.com</p>
                  </div>
                </a>
                
                <a 
                  href="https://github.com/sabbusashidhar" 
                  className="flex items-center gap-4 p-4 rounded-lg bg-secondary/20 hover:bg-secondary/40 transition-colors"
                >
                  <Github className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">GitHub</p>
                    <p className="text-sm text-muted-foreground">github.com/sabbusashidhar</p>
                  </div>
                </a>
                
                <a 
                  href="https://linkedin.com/in/sabbusashidhar" 
                  className="flex items-center gap-4 p-4 rounded-lg bg-secondary/20 hover:bg-secondary/40 transition-colors"
                >
                  <Linkedin className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">LinkedIn</p>
                    <p className="text-sm text-muted-foreground">linkedin.com/in/sabbusashidhar</p>
                  </div>
                </a>
              </div>
            </Card>
            
            <Card className="card-hover p-6">
              <h3 className="text-xl font-semibold mb-4">What I Can Help With</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  Machine Learning & AI Development
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  Computer Vision Applications
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  Python Development & Automation
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  Web Application Development
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  Technical Consulting & Mentoring
                </li>
              </ul>
            </Card>
          </div>
          
          {/* Contact Form */}
          <Card className="card-hover p-6">
            <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
            
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">First Name</label>
                  <Input placeholder="John" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Last Name</label>
                  <Input placeholder="Doe" />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Email</label>
                <Input type="email" placeholder="john.doe@example.com" />
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Subject</label>
                <Input placeholder="Let's collaborate on an AI project" />
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Message</label>
                <Textarea 
                  placeholder="Tell me about your project or how we can work together..."
                  rows={5}
                />
              </div>
              
              <Button type="submit" className="w-full btn-glow">
                <MessageSquare className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;