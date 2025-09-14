import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Eye, X, ExternalLink, Star, GitFork, Clock, Code } from "lucide-react";
import { useState, useEffect } from "react";

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  demo?: string;
  featured: boolean;
}

interface GitHubRepo {
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  updated_at: string;
  created_at: string;
  topics: string[];
  size: number;
  open_issues_count: number;
  license?: {
    name: string;
    spdx_id: string;
  };
  owner: {
    login: string;
    avatar_url: string;
  };
}

interface GitHubLanguages {
  [key: string]: number;
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [repoData, setRepoData] = useState<GitHubRepo | null>(null);
  const [languageData, setLanguageData] = useState<GitHubLanguages | null>(null);
  const [loading, setLoading] = useState(false);

  const projects: Project[] = [
    {
      title: "Sleep Detection System",
      description: "Real-time drowsiness detection using Raspberry Pi, CNN, and OpenCV. Monitors driver alertness and provides instant alerts to prevent accidents.",
      image: "🛡️",
      technologies: ["Python", "OpenCV", "TensorFlow", "Raspberry Pi", "CNN"],
      github: "https://github.com/sashidhar498/Sleep_detection",
      featured: true
    },
    {
      title: "Lane Detection for Self-Driving Cars",
      description: "Advanced computer vision system for autonomous vehicles using YOLOv5 and Python. Accurately detects and tracks road lanes in real-time.",
      image: "🚗",
      technologies: ["Python", "YOLOv5", "Computer Vision", "OpenCV"],
      github: "https://github.com/sashidhar498/Lane_detection",
      featured: true
    },
    {
      title: "Custom WhatsApp API",
      description: "A custom API to automate WhatsApp messaging, built with modern tools and technologies.",
      image: "📱",
      technologies: ["n8n", "Docker", "Automation"],
      github: "https://github.com/sashidhar498/Custom-WhatsApp-Api",
      featured: false
    },
    {
      title: "Custom WhatsApp GUI",
      description: "Modern web application recreating WhatsApp's interface with enhanced features and responsive design using React and modern web technologies.",
      image: "💬",
      technologies: ["React", "TypeScript", "CSS", "Web APIs"],
      github: "https://github.com/sashidhar498/Custom-Whatsapp",
      featured: false
    }
  ];

  const extractRepoInfo = (githubUrl: string) => {
    const match = githubUrl.match(/github\.com\/([^\/]+)\/([^\/]+)/);
    if (match) {
      return { owner: match[1], repo: match[2] };
    }
    return null;
  };

  const fetchGitHubData = async (project: Project) => {
    setLoading(true);
    const repoInfo = extractRepoInfo(project.github);
    
    if (!repoInfo) {
      setLoading(false);
      return;
    }

    try {
      // Fetch repository data
      const repoResponse = await fetch(`https://api.github.com/repos/${repoInfo.owner}/${repoInfo.repo}`);
      const repoData = await repoResponse.json();

      // Fetch languages data
      const languagesResponse = await fetch(`https://api.github.com/repos/${repoInfo.owner}/${repoInfo.repo}/languages`);
      const languagesData = await languagesResponse.json();

      setRepoData(repoData);
      setLanguageData(languagesData);
    } catch (error) {
      console.error('Error fetching GitHub data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setRepoData(null);
    setLanguageData(null);
    fetchGitHubData(project);
  };

  const closeBrowser = () => {
    setSelectedProject(null);
    setRepoData(null);
    setLanguageData(null);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getLanguagePercentages = () => {
    if (!languageData) return [];
    
    const total = Object.values(languageData).reduce((sum, bytes) => sum + bytes, 0);
    return Object.entries(languageData)
      .map(([language, bytes]) => ({
        language,
        percentage: ((bytes / total) * 100).toFixed(1)
      }))
      .sort((a, b) => parseFloat(b.percentage) - parseFloat(a.percentage));
  };

  const getLanguageColor = (language: string) => {
    const colors: { [key: string]: string } = {
      JavaScript: 'bg-yellow-400',
      TypeScript: 'bg-blue-500',
      Python: 'bg-green-500',
      Java: 'bg-red-500',
      CSS: 'bg-purple-500',
      HTML: 'bg-orange-500',
      React: 'bg-cyan-400',
      default: 'bg-gray-400'
    };
    return colors[language] || colors.default;
  };

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-4">
          <span className="text-gradient">Featured Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16">
          Click on any project to explore its GitHub repository and technical details
        </p>
        
        <div className="flex gap-8">
          {/* Projects Grid */}
          <div className={`transition-all duration-500 ${selectedProject ? 'w-1/2' : 'w-full'}`}>
            <div className={`grid gap-6 transition-all duration-500 ${selectedProject ? 'md:grid-cols-1' : 'md:grid-cols-2'}`}>
              {projects.map((project, index) => (
                <Card 
                  key={index} 
                  className={`card-hover overflow-hidden cursor-pointer transition-all duration-300 relative ${
                    project.featured ? 'ring-2 ring-primary/20' : ''
                  } ${
                    selectedProject?.title === project.title ? 'ring-4 ring-blue-500 shadow-lg scale-[1.02]' : 'hover:shadow-md'
                  }`}
                  onClick={() => handleProjectClick(project)}
                >
                  {/* Click Me Text */}
                  <div className="absolute top-3 right-3 text-xs text-blue-500 font-medium bg-blue-50 dark:bg-blue-950 px-2 py-1 rounded-md border border-blue-200 dark:border-blue-800 opacity-70 hover:opacity-100 transition-opacity pointer-events-none">
                    Click me
                  </div>
                  
                  <div className="p-6">
                    <div className="text-6xl mb-4 text-center">{project.image}</div>
                    
                    {project.featured && (
                      <Badge className="mb-4" variant="default">
                        Featured
                      </Badge>
                    )}
                    
                    <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex gap-3">
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="flex-1"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.github, '_blank');
                        }}
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Button>
                      {project.demo && (
                        <Button 
                          size="sm" 
                          variant="default" 
                          className="flex-1"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(project.demo, '_blank');
                          }}
                        >
                          <Eye className="mr-2 h-4 w-4" />
                          Demo
                        </Button>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* GitHub Repository Browser */}
          {selectedProject && (
            <div className="w-1/2 transition-all duration-500 animate-in slide-in-from-right">
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
                      <Github className="h-4 w-4 flex-shrink-0" />
                      <span className="truncate">{selectedProject.github}</span>
                      <ExternalLink 
                        className="h-4 w-4 cursor-pointer hover:text-primary ml-auto flex-shrink-0" 
                        onClick={() => window.open(selectedProject.github, '_blank')}
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

                {/* Repository Content */}
                <div className="flex-1 overflow-y-auto">
                  {loading ? (
                    <div className="flex items-center justify-center h-full">
                      <div className="text-center">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
                        <p className="text-sm text-muted-foreground">Fetching repository data...</p>
                      </div>
                    </div>
                  ) : repoData ? (
                    <div className="p-6 space-y-6">
                      {/* Repository Header */}
                      <div className="flex items-start gap-4">
                        <img 
                          src={repoData.owner.avatar_url} 
                          alt={repoData.owner.login}
                          className="w-12 h-12 rounded-full"
                        />
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-sm text-muted-foreground">{repoData.owner.login}</span>
                            <span className="text-muted-foreground">/</span>
                            <h3 className="text-lg font-bold text-blue-600">{repoData.name}</h3>
                            {selectedProject.featured && (
                              <Badge variant="default" className="ml-2">Featured</Badge>
                            )}
                          </div>
                          <p className="text-muted-foreground mb-4">{repoData.description}</p>
                        </div>
                      </div>

                      {/* Repository Stats */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-center gap-2 p-3 bg-muted/30 rounded-lg">
                          <Star className="h-4 w-4 text-yellow-500" />
                          <span className="font-medium">{repoData.stargazers_count}</span>
                          <span className="text-sm text-muted-foreground">stars</span>
                        </div>
                        <div className="flex items-center gap-2 p-3 bg-muted/30 rounded-lg">
                          <GitFork className="h-4 w-4 text-blue-500" />
                          <span className="font-medium">{repoData.forks_count}</span>
                          <span className="text-sm text-muted-foreground">forks</span>
                        </div>
                      </div>

                      {/* Languages */}
                      {languageData && (
                        <div>
                          <h4 className="font-semibold mb-3 flex items-center gap-2">
                            <Code className="h-4 w-4" />
                            Languages
                          </h4>
                          <div className="space-y-2">
                            {getLanguagePercentages().slice(0, 5).map(({ language, percentage }) => (
                              <div key={language} className="flex items-center gap-3">
                                <div className={`w-3 h-3 rounded-full ${getLanguageColor(language)}`}></div>
                                <span className="text-sm font-medium flex-1">{language}</span>
                                <span className="text-sm text-muted-foreground">{percentage}%</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Topics/Tags */}
                      {repoData.topics && repoData.topics.length > 0 && (
                        <div>
                          <h4 className="font-semibold mb-3">Topics</h4>
                          <div className="flex flex-wrap gap-2">
                            {repoData.topics.map((topic, index) => (
                              <Badge key={index} variant="secondary" className="text-xs">
                                {topic}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Repository Info */}
                      <div className="space-y-3 text-sm">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span>Updated on {formatDate(repoData.updated_at)}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-muted-foreground">Created on {formatDate(repoData.created_at)}</span>
                        </div>
                        {repoData.license && (
                          <div className="flex items-center gap-2">
                            <span className="text-muted-foreground">License:</span>
                            <Badge variant="outline">{repoData.license.name}</Badge>
                          </div>
                        )}
                      </div>

                      {/* Action Buttons */}
                      <div className="space-y-3 pt-4 border-t">
                        <Button 
                          className="w-full"
                          onClick={() => window.open(repoData.html_url, '_blank')}
                        >
                          <Github className="mr-2 h-4 w-4" />
                          View Repository
                        </Button>
                        {selectedProject.demo && (
                          <Button 
                            variant="outline" 
                            className="w-full"
                            onClick={() => window.open(selectedProject.demo, '_blank')}
                          >
                            <Eye className="mr-2 h-4 w-4" />
                            Live Demo
                          </Button>
                        )}
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center h-full">
                      <div className="text-center">
                        <Github className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                        <p className="text-muted-foreground">Unable to load repository data</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;