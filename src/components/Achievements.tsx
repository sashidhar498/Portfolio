import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Medal, Trophy } from "lucide-react";

interface Certification {
  provider: string;
  title: string;
  icon: string;
  year: string;
  skills: string[];
  link: string;
}

const Achievements = () => {
  const certifications: Certification[] = [
    {
      provider: "AWS Academy",
      title: "Cloud Foundations",
      icon: "☁️",
      year: "2023",
      skills: ["AWS", "Cloud", "DevOps"],
      link: "/Certificates/AWS_Academy_Graduate___AWS_Academy_Cloud_Foundations_Badge20230524-28-hhemu1.pdf"
    },
    {
      provider: "AWS Academy",
      title: "Machine Learning Foundations",
      icon: "☁️",
      year: "2023",
      skills: ["AWS", "ML", "Cloud"],
      link: "/Certificates/AWS_Academy_Graduate___AWS_Academy_Machine_Learning_Foundations_Badge20230620-28-p2psai.pdf"
    },
    {
      provider: "Coursera Project Network",
      title: "Build & Deploy AI Messenger Chatbot using IBM Watson",
      icon: "🤖",
      year: "2021",
      skills: ["AI Chatbots", "Watson", "NLP"],
      link: "/Certificates/Coursera bot.pdf"
    },
    {
      provider: "Google",
      title: "Foundations: Data, Data, Everywhere",
      icon: "📊",
      year: "2022",
      skills: ["Data Analysis", "Statistics", "Visualization"],
      link: "/Certificates/Data analytics_.pdf"
    },
    {
      provider: "University of California, Irvine",
      title: "Effective Problem-Solving and Decision-Making",
      icon: "💡",
      year: "2021",
      skills: ["Problem Solving", "Critical Thinking"],
      link: "/Certificates/Effective problem solving_.pdf"
    },
    {
      provider: "IBM",
      title: "IBM Machine Learning",
      icon: "🔵",
      year: "2023",
      skills: ["Machine Learning", "Data Science", "Python"],
      link: "/Certificates/IBM machine learning_.pdf"
    },
    {
      provider: "LearnQuest",
      title: "Object-Oriented Programming Concepts",
      icon: "🟣",
      year: "2023",
      skills: ["Java", "OOP", "Software Design"],
      link: "/Certificates/Object oriented programming_.pdf"
    },
    {
      provider: "Google",
      title: "Crash Course on Python",
      icon: "🔴",
      year: "2022",
      skills: ["Python", "Programming", "Automation"],
      link: "/Certificates/Python.pdf"
    },
    {
      provider: "Lyft",
      title: "Back-End Engineering Virtual Experience Program",
      icon: "🚗",
      year: "2023",
      skills: ["Software Architecture", "Refactoring", "Unit Testing", "TDD"],
      link: "/Certificates/lyft.pdf"
    }
  ];

const achievements = [
  {
    title: "Entrepreneurship Achievement",
    description: "Participated in Empresario 2024 – Golden Business Model Competition at IIT Kharagpur on 3rd Feb 2024 and emerged as final winners of the AI track",
    icon: <Trophy className="h-6 w-6" />
  },
  {
    title: "Prototype Fund Winner",
    description: "Participated in the GITAM Prototype Fund held on 6th July 2023 and won a Prototype Fund grant of INR 1,00,000/-",
    icon: <Award className="h-6 w-6" />
  },
  {
    title: "Innovation Oasis Runner-Up",
    description: "Awarded Runner Up in the Innovation Oasis competition at IIIT Nagpur as part of Tantra Fiesta 2023, recognizing exceptional innovation and project excellence",
    icon: <Medal className="h-6 w-6" />
  }
];


  return (
    <section id="achievements" className="py-20 px-6 bg-secondary/10">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="text-gradient">Achievements & Certifications</span>
        </h2>
        
        {/* Key Achievements */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <Card key={index} className="card-hover p-6 text-center">
              <div className="text-primary mb-4 flex justify-center">
                {achievement.icon}
              </div>
              <h3 className="text-lg font-semibold mb-3">{achievement.title}</h3>
              <p className="text-muted-foreground text-sm">{achievement.description}</p>
            </Card>
          ))}
        </div>
        
        {/* Certifications Grid */}
        <h3 className="text-2xl font-semibold text-center mb-12">Professional Certifications</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <a href={cert.link} target="_blank" rel="noopener noreferrer" key={index}>
              <Card className="skill-item p-6 h-full">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">{cert.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="font-semibold text-primary">{cert.provider}</h4>
                      <Badge variant="outline" className="text-xs">{cert.year}</Badge>
                    </div>
                    <p className="text-sm font-medium mb-3">{cert.title}</p>
                    <div className="flex flex-wrap gap-1">
                      {cert.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </a>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Achievements;
