
import { Code, Coffee, Lightbulb, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code following best practices",
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Collaborative approach with strong communication and problem-solving skills",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Always exploring new technologies and creative solutions to complex problems",
    },
    {
      icon: Coffee,
      title: "Dedication",
      description: "Passionate about continuous learning and delivering exceptional user experiences",
    },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              I'm a passionate frontend developer with 5+ years of experience building modern web applications.
              I love turning complex problems into simple, beautiful designs.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-slide-in-left">
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  My journey in web development started 5 years ago when I discovered the perfect blend of 
                  creativity and logic that frontend development offers. Since then, I've worked on numerous
                  projects ranging from small business websites to large-scale enterprise applications.
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I specialize in React, TypeScript, and modern CSS frameworks, always staying up-to-date 
                  with the latest trends and best practices in the industry. My goal is to create seamless 
                  user experiences that not only look great but also perform exceptionally well.
                </p>

                <div className="flex flex-wrap gap-4 pt-4">
                  <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    5+ Years Experience
                  </span>
                  <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    50+ Projects Completed
                  </span>
                  <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    Always Learning
                  </span>
                </div>
              </div>
            </div>

            <div className="animate-fade-in">
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-2xl flex items-center justify-center">
                  <div className="text-6xl opacity-20">👨‍💻</div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary/10 rounded-2xl" />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="group hover:scale-105 transition-all duration-300 gradient-border bg-card/50 backdrop-blur-sm animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6 text-center">
                  <div className="mb-4 inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <highlight.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{highlight.title}</h3>
                  <p className="text-muted-foreground text-sm">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
