import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, Medal, Trophy, ExternalLink, X, FileText, Calendar, Building, Star, Eye, Clock, LinkIcon } from "lucide-react";
import { useState } from "react";

interface Certification {
  provider: string;
  title: string;
  icon: string;
  year: string;
  skills: string[];
}

interface Achievement {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  date?: string;
  organization?: string;
  category?: string;
  prize?: string;
  participants?: string;
  location?: string;
}

const Achievements = () => {
  const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null);

  const certifications: Certification[] = [
    {
      provider: "AWS Academy",
      title: "Cloud Foundations",
      icon: "☁️",
      year: "2023",
      skills: ["AWS", "Cloud", "DevOps"]
    },
    {
      provider: "AWS Academy",
      title: "Machine Learning Foundations",
      icon: "☁️",
      year: "2023",
      skills: ["AWS", "ML", "Cloud"]
    },
    {
      provider: "Coursera Project Network",
      title: "Build & Deploy AI Messenger Chatbot using IBM Watson",
      icon: "🤖",
      year: "2021",
      skills: ["AI Chatbots", "Watson", "NLP"]
    },
    {
      provider: "Google",
      title: "Foundations: Data, Data, Everywhere",
      icon: "📊",
      year: "2022",
      skills: ["Data Analysis", "Statistics", "Visualization"]
    },
    {
      provider: "University of California, Irvine",
      title: "Effective Problem-Solving and Decision-Making",
      icon: "💡",
      year: "2021",
      skills: ["Problem Solving", "Critical Thinking"]
    },
    {
      provider: "IBM",
      title: "IBM Machine Learning",
      icon: "🔵",
      year: "2023",
      skills: ["Machine Learning", "Data Science", "Python"]
    },
    {
      provider: "LearnQuest",
      title: "Object-Oriented Programming Concepts",
      icon: "🟣",
      year: "2023",
      skills: ["Java", "OOP", "Software Design"]
    },
    {
      provider: "Google",
      title: "Crash Course on Python",
      icon: "🔴",
      year: "2022",
      skills: ["Python", "Programming", "Automation"]
    },
    {
      provider: "Lyft",
      title: "Back-End Engineering Virtual Experience Program",
      icon: "🚗",
      year: "2023",
      skills: ["Software Architecture", "Refactoring", "Unit Testing", "TDD"]
    }
  ];

  const achievements: Achievement[] = [
    {
      title: "Entrepreneurship Achievement",
      description: "Participated in Empresario 2024 – Golden Business Model Competition at IIT Kharagpur and emerged as final winners of the AI track with innovative business solutions.",
      icon: <Trophy className="h-6 w-6" />,
      link: "https://www.gitam.edu/sites/default/files/docs/others/newsletter_jul-dec_2023_0.pdf",
      date: "February 3, 2024",
      organization: "IIT Kharagpur",
      category: "Business Competition",
      prize: "1st Place - AI Track",
      participants: "500+ teams nationwide",
      location: "Kharagpur, West Bengal"
    },
    {
      title: "Prototype Fund Winner",
      description: "Successfully secured a substantial prototype development grant through competitive evaluation process, demonstrating exceptional innovation potential and technical feasibility.",
      icon: <Award className="h-6 w-6" />,
      link: "https://www.gitam.edu/sites/default/files/docs/others/newsletter_jul-dec_2023_0.pdf",
      date: "July 6, 2023",
      organization: "GITAM University",
      category: "Innovation Grant",
      prize: "INR 1,00,000 Grant",
      participants: "200+ applicants",
      location: "Visakhapatnam, AP"
    },
    {
      title: "Innovation Oasis Runner-Up",
      description: "Recognized for exceptional innovation and project excellence in one of India's premier technology competitions, showcasing cutting-edge solutions and technical prowess.",
      icon: <Medal className="h-6 w-6" />,
      link: "src/assets/IIIT nagpur-2nd price.pdf",
      date: "March 2023",
      organization: "IIIT Nagpur",
      category: "Technical Competition",
      prize: "2nd Place",
      participants: "300+ participants",
      location: "Nagpur, Maharashtra"
    }
  ];

  const handleAchievementClick = (achievement: Achievement) => {
    setSelectedAchievement(achievement);
  };

  const closeBrowser = () => {
    setSelectedAchievement(null);
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section id="achievements" className="py-20 px-1 md:px-6 bg-secondary/10">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-4">
          <span className="text-gradient">Achievements & Certifications</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16">
          Click on any achievement to view detailed information and certificates
        </p>
        
        {/* Key Achievements Section with Browser */}
        <div className="flex flex-col lg:flex-row gap-8 mb-20">
  {/* Achievements */}
  <div className={`transition-all duration-500 ${selectedAchievement ? 'lg:w-1/2 w-full' : 'w-full'}`}>
    <h3 className="text-2xl font-semibold text-center mb-12">Key Achievements</h3>
    <div className={`grid gap-6 transition-all duration-500 grid-cols-1 ${selectedAchievement ? 'lg:grid-cols-1' : 'lg:grid-cols-3'}`}>
      {achievements.map((achievement, index) => (
        <div key={index}>
          <Card 
            className={`card-hover overflow-hidden cursor-pointer transition-all duration-300 relative ${
              selectedAchievement?.title === achievement.title ? 'ring-4 ring-blue-500 shadow-lg scale-[1.02]' : 'hover:shadow-md'
            }`}
            onClick={() => handleAchievementClick(achievement)}
          >
            {/* Click Me Text */}
            <div className="absolute top-3 right-3 text-xs text-blue-500 font-medium bg-blue-50 dark:bg-blue-950 px-2 py-1 rounded-md border border-blue-200 dark:border-blue-800 opacity-70 hover:opacity-100 transition-opacity pointer-events-none">
              Click me
            </div>
            
            <div className="p-6">
              <div className="text-primary mb-4 flex justify-center text-4xl">
                {achievement.icon}
              </div>
              
              <h3 className="text-xl font-semibold mb-3 text-center">{achievement.title}</h3>
              <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{achievement.description}</p>
              
              {/* Key Info Badges */}
              <div className="flex flex-wrap gap-2 mb-4 justify-center">
                {achievement.prize && (
                  <Badge variant="default" className="text-xs">
                    {achievement.prize}
                  </Badge>
                )}
                {achievement.organization && (
                  <Badge variant="secondary" className="text-xs">
                    {achievement.organization}
                  </Badge>
                )}
              </div>

              {/* Action Button */}
              <div className="flex">
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="flex-1"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(achievement.link, '_blank');
                  }}
                >
                  <LinkIcon className="mr-2 h-4 w-4" />
                  Link
                </Button>
              </div>
            </div>
          </Card>

          {/* Achievement Details Browser - appears below card on mobile only */}
          {selectedAchievement?.title === achievement.title && (
            <div className="mt-6 lg:hidden">
              <div className="bg-card rounded-lg shadow-2xl border overflow-hidden h-[600px] flex flex-col">
                {/* Browser Header */}
                <div className="bg-muted/50 border-b p-4 flex items-center justify-between min-h-[60px]">
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    <div className="flex gap-2 flex-shrink-0">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="text-sm font-medium text-center flex-1">
                      {selectedAchievement.title}
                    </div>
                  </div>
                  <Button 
                    size="sm" 
                    variant="ghost" 
                    onClick={closeBrowser}
                    className="hover:bg-destructive/20 p-2 flex-shrink-0 ml-2"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>

                {/* Achievement Content */}
                <div className="flex-1 overflow-y-auto">
                  <div className="p-6 space-y-6">
                    {/* Achievement Header */}
                    <div className="text-center">
                      <div className="text-primary mb-4 flex justify-center text-6xl">
                        {selectedAchievement.icon}
                      </div>
                      <h3 className="text-2xl font-bold mb-2">{selectedAchievement.title}</h3>
                      <p className="text-muted-foreground mb-4">{selectedAchievement.description}</p>
                    </div>

                    {/* Achievement Stats */}
                    <div className="grid grid-cols-1 gap-4">
                      <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                        <Building className="h-5 w-5 text-blue-500" />
                        <div>
                          <div className="font-medium">{selectedAchievement.organization}</div>
                          <div className="text-sm text-muted-foreground">Organization</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                        <Star className="h-5 w-5 text-yellow-500" />
                        <div>
                          <div className="font-medium">{selectedAchievement.prize}</div>
                          <div className="text-sm text-muted-foreground">Achievement</div>
                        </div>
                      </div>
                    </div>

                    {/* Additional Details */}
                    <div>
                      <h4 className="font-semibold mb-3">Event Details</h4>
                      <div className="space-y-3 text-sm">
                        {selectedAchievement.date && (
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                            <span>Date: {formatDate(selectedAchievement.date)}</span>
                          </div>
                        )}
                        {selectedAchievement.location && (
                          <div className="flex items-center gap-2">
                            <Building className="h-4 w-4 text-muted-foreground" />
                            <span>Location: {selectedAchievement.location}</span>
                          </div>
                        )}
                        {selectedAchievement.participants && (
                          <div className="flex items-center gap-2">
                            <Eye className="h-4 w-4 text-muted-foreground" />
                            <span>Participants: {selectedAchievement.participants}</span>
                          </div>
                        )}
                        {selectedAchievement.category && (
                          <div className="flex items-center gap-2">
                            <Trophy className="h-4 w-4 text-muted-foreground" />
                            <span>Category: {selectedAchievement.category}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Category Badge */}
                    {selectedAchievement.category && (
                      <div>
                        <h4 className="font-semibold mb-3">Category</h4>
                        <Badge variant="secondary" className="text-sm px-3 py-1">
                          {selectedAchievement.category}
                        </Badge>
                      </div>
                    )}

                    {/* Action Button */}
                    <div className="space-y-3 pt-4 border-t">
                      <Button 
                        className="w-full"
                        onClick={() => window.open(selectedAchievement.link, '_blank')}
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Visit Website
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  </div>

  {/* Achievement Details Browser for Desktop - side by side */}
  {selectedAchievement && (
    <div className="hidden lg:block lg:w-1/2 transition-all duration-500 animate-in slide-in-from-right">
      <div className="bg-card rounded-lg shadow-2xl border overflow-hidden h-[600px] flex flex-col sticky top-20">
        {/* Browser Header */}
        <div className="bg-muted/50 border-b p-4 flex items-center justify-between min-h-[60px]">
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <div className="flex gap-2 flex-shrink-0">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground bg-background px-3 py-1 rounded flex-1 max-w-md min-w-0">
              <FileText className="h-4 w-4 flex-shrink-0" />
              <span className="truncate">Achievement Details</span>
              <ExternalLink 
                className="h-4 w-4 cursor-pointer hover:text-primary ml-auto flex-shrink-0" 
                onClick={() => window.open(selectedAchievement.link, '_blank')}
              />
            </div>
          </div>
          <Button 
            size="sm" 
            variant="ghost" 
            onClick={closeBrowser}
            className="hover:bg-destructive/20 p-2 flex-shrink-0 ml-2"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        {/* Achievement Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-6 space-y-6">
            {/* Achievement Header */}
            <div className="text-center">
              <div className="text-primary mb-4 flex justify-center text-6xl">
                {selectedAchievement.icon}
              </div>
              <h3 className="text-2xl font-bold mb-2">{selectedAchievement.title}</h3>
              <p className="text-muted-foreground mb-4">{selectedAchievement.description}</p>
            </div>

            {/* Achievement Stats */}
            <div className="grid grid-cols-1 gap-4">
              <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                <Building className="h-5 w-5 text-blue-500" />
                <div>
                  <div className="font-medium">{selectedAchievement.organization}</div>
                  <div className="text-sm text-muted-foreground">Organization</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                <Star className="h-5 w-5 text-yellow-500" />
                <div>
                  <div className="font-medium">{selectedAchievement.prize}</div>
                  <div className="text-sm text-muted-foreground">Achievement</div>
                </div>
              </div>
            </div>

            {/* Additional Details */}
            <div>
              <h4 className="font-semibold mb-3">Event Details</h4>
              <div className="space-y-3 text-sm">
                {selectedAchievement.date && (
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span>Date: {formatDate(selectedAchievement.date)}</span>
                  </div>
                )}
                {selectedAchievement.location && (
                  <div className="flex items-center gap-2">
                    <Building className="h-4 w-4 text-muted-foreground" />
                    <span>Location: {selectedAchievement.location}</span>
                  </div>
                )}
                {selectedAchievement.participants && (
                  <div className="flex items-center gap-2">
                    <Eye className="h-4 w-4 text-muted-foreground" />
                    <span>Participants: {selectedAchievement.participants}</span>
                  </div>
                )}
                {selectedAchievement.category && (
                  <div className="flex items-center gap-2">
                    <Trophy className="h-4 w-4 text-muted-foreground" />
                    <span>Category: {selectedAchievement.category}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Category Badge */}
            {selectedAchievement.category && (
              <div>
                <h4 className="font-semibold mb-3">Category</h4>
                <Badge variant="secondary" className="text-sm px-3 py-1">
                  {selectedAchievement.category}
                </Badge>
              </div>
            )}

            {/* Action Button */}
            <div className="space-y-3 pt-4 border-t">
              <Button 
                className="w-full"
                onClick={() => window.open(selectedAchievement.link, '_blank')}
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Visit Website
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )}
</div>

        {/* Professional Certifications Section - Completely Separate */}
        <div className="w-full">
          <h3 className="text-2xl font-semibold text-center mb-12">Professional Certifications</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="skill-item p-6 h-full">
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;