import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "RetroSafe Innovations",
      position: "Python Developer",
      duration: "2024-2025",
      location: "Remote",
      type: "Full-time",
      description: "Developed drowsiness detection systems using Raspberry Pi and computer vision. Implemented real-time monitoring solutions for enhanced safety applications.",
      technologies: ["Python", "OpenCV", "Raspberry Pi", "Computer Vision", "CNN", "Real-time Processing"],
      highlights: [
        "Built real-time drowsiness detection system",
        "Optimized performance for Raspberry Pi deployment",
        "Integrated machine learning models for accuracy improvement"
      ]
    },
    {
      company: "AICTE Internship",
      position: "Machine Learning Intern",
      duration: "2023",
      location: "Remote",
      type: "Internship",
      description: "Gained hands-on experience in machine learning algorithms, data preprocessing, and model development through structured learning programs.",
      technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Data Analysis"],
      highlights: [
        "Completed ML algorithms implementation",
        "Worked on data preprocessing techniques",
        "Developed predictive models for various use cases"
      ]
    },
    {
      company: "Acmegrade",
      position: "Programming Intern",
      duration: "2023",
      location: "Remote",
      type: "Internship",
      description: "Enhanced programming skills through practical projects and collaborative development. Focused on clean code practices and software development methodologies.",
      technologies: ["Python", "Java", "Git", "Software Development", "Problem Solving"],
      highlights: [
        "Improved programming fundamentals",
        "Collaborated on team projects",
        "Applied best practices in software development"
      ]
    },
    {
      company: "PHN Technology",
      position: "Programming Intern",
      duration: "2022",
      location: "Hybrid",
      type: "Internship",
      description: "Early career experience in programming and technology development. Learned industry standards and professional development practices.",
      technologies: ["Programming Fundamentals", "Web Technologies", "Database Management"],
      highlights: [
        "Foundation in professional development",
        "Exposure to industry workflows",
        "Built technical communication skills"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-1 md:px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="text-gradient">Professional Experience</span>
        </h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="card-hover p-8">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-4">
                    <h3 className="text-xl font-bold text-primary">{exp.position}</h3>
                    <Badge variant={exp.type === "Full-time" ? "default" : "secondary"}>
                      {exp.type}
                    </Badge>
                  </div>
                  
                  <div className="flex items-center gap-2 text-muted-foreground mb-2">
                    <Building className="h-4 w-4" />
                    <span className="font-medium">{exp.company}</span>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Key Achievements:</h4>
                      <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                        {exp.highlights.map((highlight, highlightIndex) => (
                          <li key={highlightIndex}>{highlight}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;