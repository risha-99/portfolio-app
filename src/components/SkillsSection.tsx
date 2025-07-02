
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend Technologies",
      skills: [
        "JavaScript", "TypeScript", "React.js", "Next.js", "Vue.js", "Nuxt.js",
        "HTML5", "CSS3", "Redux", "Redux Toolkit", "Vuex", "jQuery"
      ],
    },
    {
      title: "Backend & APIs",
      skills: [
        "Node.js", "Express.js", "REST APIs", "Laravel", "AWS API Gateway",
        "RESTful APIs", "Microservices", "API Integration"
      ],
    },
    {
      title: "Tools & DevOps",
      skills: [
        "Webpack", "NPM", "Yarn", "Git", "GitHub", "Jenkins", "AWS EC2",
        "AWS RDS", "AWS S3", "Minio", "Sentry"
      ],
    },
    {
      title: "Development & Testing",
      skills: [
        "Agile Methodology", "JIRA", "Trello", "Unit Testing", "Performance Testing",
        "Micro Frontends", "CI/CD", "Code Review"
      ],
    },
  ];

  const expertiseAreas = [
    { name: "React & Ecosystem", rating: 5 },
    { name: "TypeScript", rating: 5 },
    { name: "JavaScript (ES6+)", rating: 5 },
    { name: "Next.js", rating: 4 },
    { name: "Redux/State Management", rating: 5 },
    { name: "Full Stack Development", rating: 4 },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating
            ? "text-yellow-500 fill-yellow-500"
            : "text-gray-300 dark:text-gray-600"
        }`}
      />
    ));
  };

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
              5+ years of expertise in the JavaScript/TypeScript ecosystem with comprehensive experience 
              in modern web development technologies and frameworks.
            </p>
          </div>

          {/* Expertise Levels */}
          <div className="mb-16 animate-fade-in">
            <h3 className="text-2xl font-bold mb-8 text-center">Areas of Expertise</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {expertiseAreas.map((area, index) => (
                <Card key={index} className="gradient-border bg-card/30 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-3">
                      <span className="font-medium text-lg">{area.name}</span>
                    </div>
                    <div className="flex gap-1">
                      {renderStars(area.rating)}
                    </div>
                  </CardContent>
                </Card>
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
