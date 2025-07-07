
import { ArrowRight, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-transparent" />
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-1s' }} />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="animate-fade-in">
            <div className="text-center mb-8">
              <div className="flex justify-center mb-8">
                <img
                  src="/lovable-uploads/aa897492-4a1a-4585-bbff-2a7194064424.png"
                  alt="Risha Bhandari"
                  className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-primary/30 shadow-2xl"
                />
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                Hi, I'm{" "}
                <span className="gradient-text">Risha Bhandari</span>
              </h1>
              
              <div className="flex flex-wrap justify-center items-center gap-6 mb-8 text-lg text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>rishabhandari01@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>8433480476</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Dehradun, Uttarakhand</span>
                </div>
              </div>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Software Engineer with 5+ years of experience in JavaScript/TypeScript ecosystem, 
                specializing in React.js, Next.js, and modern web development technologies.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button size="lg" className="group bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3">
                  <a href="#projects" className="flex items-center">
                    View My Work
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="px-8 py-3 border-primary/50 hover:border-primary">
                  Download Resume
                </Button>
              </div>

              <div className="flex justify-center space-x-6">
                <a
                  href="https://www.linkedin.com/in/risha-bhandari-379707154/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 hover:scale-110 transform"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="mailto:rishabhandari01@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 hover:scale-110 transform"
                  aria-label="Email"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
