
import { Code, Users, Lightbulb, Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  const highlights = [
    {
      icon: Code,
      title: "Full Stack Development",
      description: "Expertise in JavaScript/TypeScript ecosystem with React.js, Next.js, and Node.js",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Experience with Agile Development Methodology and cross-functional team collaboration",
    },
    {
      icon: Lightbulb,
      title: "Problem Solving",
      description: "Independently solved complex requirements with exceptional logical skills",
    },
    {
      icon: Briefcase,
      title: "Industry Experience",
      description: "5+ years at Rubico Tech, working on complex application components and frameworks",
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
              A passionate Software Engineer with expertise in the JavaScript/TypeScript ecosystem and 
              5 years of hands-on experience building modern web applications.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-slide-in-left">
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I have 5 years of experience working with React.js using TypeScript, utilizing tools such as 
                  Webpack, NPM/Yarn, Routers, Redux, Redux-Toolkit, Flux, and Redux-Thunk. My expertise spans 
                  the full development lifecycle from design to deployment.
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Currently working as a Software Engineer at Rubico Tech Pvt Limited, I've designed and developed 
                  highly complex application components, integrated software packages for multiple platforms, and 
                  leveraged open-source solutions to build novel applications.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  I'm familiar with newer specifications of ECMAScript and RESTful APIs, with experience in 
                  Agile Development Methodology. I've successfully created applications resulting in significant 
                  performance improvements and developed frameworks for more efficient development processes.
                </p>

                <div className="flex flex-wrap gap-4 pt-4">
                  <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    5+ Years Experience
                  </span>
                  <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    Full Stack Developer
                  </span>
                  <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    B.Tech (CSE) Graduate
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
