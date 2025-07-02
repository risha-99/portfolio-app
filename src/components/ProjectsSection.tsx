
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Tunescribers",
      description: "World's leading provider of services for musicians, serving tens of thousands since 2017. Handled state management with Redux Toolkit, developed reusable components, and collaborated directly with client stakeholders for technical solutions.",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop",
      technologies: ["Next.js", "Context API", "Redux Toolkit", "Express.js", "AWS EC2", "AWS RDS", "AWS API Gateway"],
      client: "Leading provider of services for musicians worldwide",
      role: "Full Stack Developer",
      liveUrl: "https://www.tunescribers.com/",
      showLiveButton: true,
    },
    {
      title: "Code Blue Corporation",
      description: "Emergency communication solutions platform with real-time device status monitoring. We created the admin side of the application with SSR/CSR using Next.js and built robust APIs for real-time status updates. Created notification system for device status alerts.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      technologies: ["Next.js", "Node.js", "Redux Toolkit", "SSR/CSR", "Real-time APIs"],
      client: "Leading manufacturer of emergency communication solutions",
      role: "Full Stack Developer",
      liveUrl: "https://codeblue.com/",
      showLiveButton: true,
    },
    {
      title: "West River Academy",
      description: "Educational platform serving thousands of families in 50+ countries. Developed responsive frontend with React.js and integrated payment gateways (PayPal, Stripe). Migrated from FileMaker Pro database and implemented AWS streaming services.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
      technologies: ["React.js", "Redux Toolkit", "Laravel", "AWS", "PayPal", "Stripe", "Micro Frontends"],
      client: "Educational freedom platform for natural learning conversion",
      role: "Full Stack Developer",
      liveUrl: "#",
      showLiveButton: false,
    },
  ];

  const achievements = [
    "Created application resulting in 1.3x increase in Google interaction and analytics",
    "Developed new software development framework for faster application development",
    "Increased tests completed per day by 10% through improved testing processes",
    "Reduced crash fix time by 20% with new debugging techniques"
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real-world projects developed during my tenure at Rubico Tech, showcasing full-stack development 
              expertise across diverse industries and client requirements.
            </p>
          </div>

          {/* Key Achievements */}
          <div className="mb-16 animate-fade-in">
            <h3 className="text-2xl font-bold mb-8 text-center">Key Achievements</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-primary/5 border border-primary/10">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">{achievement}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-12">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="group overflow-hidden gradient-border bg-card/50 backdrop-blur-sm hover:scale-[1.02] transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative overflow-hidden lg:order-1">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 lg:h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  <div className="p-8 lg:order-2">
                    <CardHeader className="p-0 mb-6">
                      <CardTitle className="text-2xl font-bold group-hover:text-primary transition-colors mb-2">
                        {project.title}
                      </CardTitle>
                      <div className="text-sm text-primary font-medium mb-2">
                        Role: {project.role}
                      </div>
                      <div className="text-sm text-muted-foreground mb-4 italic">
                        Client: {project.client}
                      </div>
                      <CardDescription className="text-muted-foreground leading-relaxed">
                        {project.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="p-0 space-y-6">
                      <div>
                        <h4 className="font-semibold mb-3">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <Badge
                              key={techIndex}
                              variant="secondary"
                              className="bg-primary/10 text-primary text-xs"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {project.showLiveButton && (
                        <div className="pt-4">
                          <Button 
                            size="sm" 
                            className="group/btn"
                            onClick={() => window.open(project.liveUrl, '_blank')}
                          >
                            <ExternalLink className="w-4 h-4 mr-2 transition-transform group-hover/btn:scale-110" />
                            View Project
                          </Button>
                        </div>
                      )}
                    </CardContent>
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

export default ProjectsSection;
