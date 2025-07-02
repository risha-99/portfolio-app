
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend Technologies",
      skills: [
        "React", "TypeScript", "JavaScript (ES6+)", "Next.js", "Vue.js",
        "HTML5", "CSS3", "Sass/SCSS", "Tailwind CSS", "Styled Components"
      ],
    },
    {
      title: "Tools & Frameworks",
      skills: [
        "Git", "Webpack", "Vite", "npm/yarn", "ESLint", "Prettier",
        "Jest", "Cypress", "Figma", "Adobe XD"
      ],
    },
    {
      title: "Backend & Database",
      skills: [
        "Node.js", "Express.js", "REST APIs", "GraphQL", "MongoDB",
        "PostgreSQL", "Firebase", "Supabase"
      ],
    },
    {
      title: "Deployment & DevOps",
      skills: [
        "Vercel", "Netlify", "AWS", "Docker", "GitHub Actions",
        "CI/CD", "Linux", "Nginx"
      ],
    },
  ];

  const expertiseAreas = [
    { name: "React & Ecosystem", level: 95 },
    { name: "TypeScript", level: 90 },
    { name: "CSS & Styling", level: 92 },
    { name: "JavaScript", level: 95 },
    { name: "Responsive Design", level: 98 },
    { name: "Performance Optimization", level: 85 },
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              My <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive toolkit of modern technologies and frameworks that I use to build exceptional web experiences.
            </p>
          </div>

          {/* Expertise Levels */}
          <div className="mb-16 animate-fade-in">
            <h3 className="text-2xl font-bold mb-8 text-center">Areas of Expertise</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {expertiseAreas.map((area, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{area.name}</span>
                    <span className="text-sm text-muted-foreground">{area.level}%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-primary to-blue-400 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${area.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Categories */}
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <Card 
                key={index} 
                className="gradient-border bg-card/50 backdrop-blur-sm hover:scale-105 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-center">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-200 cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
