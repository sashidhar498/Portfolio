import { useState } from 'react';
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
import { Plus, X, Sparkles } from 'lucide-react';

const Skills = () => {
  const [skillCategories, setSkillCategories] = useState([
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
  ]);

  const [radarData, setRadarData] = useState([
    { subject: 'Python/ML', A: 90, fullMark: 100 },
    { subject: 'Computer Vision', A: 85, fullMark: 100 },
    { subject: 'Web Development', A: 70, fullMark: 100 },
    { subject: 'Data Science', A: 80, fullMark: 100 },
    { subject: 'Problem Solving', A: 88, fullMark: 100 },
  ]);

  const [editingCategory, setEditingCategory] = useState(null);
  const [newSkillInput, setNewSkillInput] = useState("");
  const [newCategoryInput, setNewCategoryInput] = useState({ name: "", skill: "" });

  const addSkill = (categoryIndex) => {
    if (newSkillInput.trim()) {
      const updated = [...skillCategories];
      updated[categoryIndex].skills.push(newSkillInput.trim());
      setSkillCategories(updated);
      setNewSkillInput("");
      setEditingCategory(null);
    }
  };

  const removeSkill = (categoryIndex, skillIndex) => {
    const updated = [...skillCategories];
    updated[categoryIndex].skills.splice(skillIndex, 1);
    setSkillCategories(updated);
  };

  const addCategory = () => {
    if (newCategoryInput.name.trim() && newCategoryInput.skill.trim()) {
      setSkillCategories([
        ...skillCategories,
        {
          name: newCategoryInput.name.trim(),
          skills: [newCategoryInput.skill.trim()],
          color: skillCategories.length % 2 === 0 ? "primary" : "accent"
        }
      ]);
      setNewCategoryInput({ name: "", skill: "" });
    }
  };

  const removeCategory = (categoryIndex) => {
    const updated = skillCategories.filter((_, i) => i !== categoryIndex);
    setSkillCategories(updated);
  };

  return (
    <section id="skills" className="py-20 px-4 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-gradient">Skills & Expertise</span>
          </h2>
          
          <div className="flex items-center justify-center gap-2 mb-2">
            <Sparkles className="w-5 h-5 text-primary animate-pulse" />
            <p className="text-lg text-muted-foreground italic">
              Can't find the skill you need? You name it — I'll learn it.
            </p>
            <Sparkles className="w-5 h-5 text-primary animate-pulse" />
          </div>
          <p className="text-base text-muted-foreground font-medium">
            My skills evolve with every project.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Radar Chart */}
          <Card className="card-hover p-8 lg:sticky lg:top-24">
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
            {skillCategories.map((category, categoryIndex) => (
              <Card key={categoryIndex} className="skill-item p-6 relative group">
                <div className="flex items-start justify-between mb-4">
                  <h4 className="text-lg font-semibold text-primary">
                    {category.name}
                  </h4>
                  <button
                    onClick={() => removeCategory(categoryIndex)}
                    className="text-destructive/60 hover:text-destructive transition-colors opacity-0 group-hover:opacity-100"
                    title="Remove category"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="relative group/badge">
                      <Badge 
                        variant={category.color === "primary" ? "default" : "secondary"}
                        className="text-sm pr-7 cursor-default"
                      >
                        {skill}
                        <button
                          onClick={() => removeSkill(categoryIndex, skillIndex)}
                          className="absolute right-1 top-1/2 -translate-y-1/2 opacity-0 group-hover/badge:opacity-100 transition-opacity hover:text-destructive"
                          title="Remove skill"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </Badge>
                    </div>
                  ))}
                </div>
                
                <div className="mt-3">
                  {editingCategory === categoryIndex ? (
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={newSkillInput}
                        onChange={(e) => setNewSkillInput(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') addSkill(categoryIndex);
                          if (e.key === 'Escape') {
                            setEditingCategory(null);
                            setNewSkillInput("");
                          }
                        }}
                        placeholder="Enter skill name"
                        className="flex-1 px-3 py-1.5 rounded border text-sm focus:outline-none focus:ring-2 focus:ring-primary text-black"
                        autoFocus
                      />
                      <button
                        onClick={() => addSkill(categoryIndex)}
                        className="px-3 py-1.5 bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-colors text-sm font-medium"
                      >
                        Add
                      </button>
                      <button
                        onClick={() => {
                          setEditingCategory(null);
                          setNewSkillInput("");
                        }}
                        className="px-3 py-1.5 bg-secondary rounded hover:bg-secondary/80 transition-colors"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => setEditingCategory(categoryIndex)}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5 hover:gap-2"
                    >
                      <Plus className="w-4 h-4" />
                      Add skill
                    </button>
                  )}
                </div>
              </Card>
            ))}
            
            {/* Add New Category Card */}
            <Card className="p-6 border-dashed border-2 hover:border-primary/50 transition-colors">
              <h4 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
                <Plus className="w-5 h-5" />
                Add New Category
              </h4>
              <div className="space-y-3">
                <input
                  type="text"
                  value={newCategoryInput.name}
                  onChange={(e) => setNewCategoryInput({ ...newCategoryInput, name: e.target.value })}
                  placeholder="Category name (e.g., Cloud Services)"
                  className="w-full px-3 py-2 rounded border text-sm focus:outline-none focus:ring-2 focus:ring-primary text-black"
                />
                <input
                  type="text"
                  value={newCategoryInput.skill}
                  onChange={(e) => setNewCategoryInput({ ...newCategoryInput, skill: e.target.value })}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') addCategory();
                  }}
                  placeholder="First skill (e.g., AWS)"
                  className="w-full px-3 py-2 rounded border text-sm focus:outline-none focus:ring-2 focus:ring-primary text-black"
                />
                <button
                  onClick={addCategory}
                  disabled={!newCategoryInput.name.trim() || !newCategoryInput.skill.trim()}
                  className="w-full px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Create Category
                </button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;