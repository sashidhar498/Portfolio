import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  PolarRadiusAxis, 
  Radar, 
  ResponsiveContainer 
} from 'recharts';

const Skills = () => {
  const skillCategories = [
    {
      name: "Languages",
      skills: ["Python", "C++", "Java", "JavaScript"],
      color: "primary"
    },
    {
      name: "ML/DL Frameworks",
      skills: ["TensorFlow", "Keras", "PyTorch", "Scikit-learn", "OpenCV"],
      color: "accent"
    },
    {
      name: "Computer Vision",
      skills: ["OpenCV", "Image Processing", "Object Detection", "CNNs", "YOLO"],
      color: "primary"
    },
    {
      name: "Tools & DevOps",
      skills: ["Docker", "Git", "Raspberry Pi", "Linux", "AWS"],
      color: "accent"
    },
    {
      name: "Web Technologies",
      skills: ["React", "HTML", "CSS", "Node.js", "REST APIs"],
      color: "primary"
    }
  ];

  const radarData = [
    { subject: 'Python/ML', A: 90, fullMark: 100 },
    { subject: 'Computer Vision', A: 85, fullMark: 100 },
    { subject: 'Web Development', A: 70, fullMark: 100 },
    { subject: 'Data Science', A: 80, fullMark: 100 },
    { subject: 'Problem Solving', A: 88, fullMark: 100 },
  ];

  return (
    <section id="skills" className="py-20 px-1 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="text-gradient">Skills & Expertise</span>
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Radar Chart */}
          <Card className="card-hover p-8">
            <h3 className="text-2xl font-semibold mb-6 text-center">Skill Proficiency</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={radarData}>
                  <PolarGrid stroke="hsl(var(--border))" />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: 'hsl(var(--foreground))', fontSize: 12 }} />
                  <PolarRadiusAxis 
                    domain={[0, 100]} 
                    tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 10 }}
                    tickCount={5}
                  />
                  <Radar
                    name="Skills"
                    dataKey="A"
                    stroke="hsl(var(--primary))"
                    fill="hsl(var(--primary))"
                    fillOpacity={0.2}
                    strokeWidth={2}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </Card>
          
          {/* Skills Categories */}
          <div className="space-y-6">
            {skillCategories.map((category, index) => (
              <Card key={index} className="skill-item p-6">
                <h4 className="text-lg font-semibold mb-4 text-primary">
                  {category.name}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant={category.color === "primary" ? "default" : "secondary"}
                      className="text-sm"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
