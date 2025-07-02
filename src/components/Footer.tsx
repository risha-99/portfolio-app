
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card/50 backdrop-blur-sm border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold gradient-text mb-4">
                {"<Dev />"}
              </div>
              <p className="text-muted-foreground mb-4">
                Frontend Developer with 5+ years of experience creating beautiful, 
                responsive, and user-friendly web applications.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 hover:scale-110 transform"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 hover:scale-110 transform"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 hover:scale-110 transform"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="text-muted-foreground hover:text-primary transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#skills" className="text-muted-foreground hover:text-primary transition-colors">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>Frontend Development</li>
                <li>React Applications</li>
                <li>Responsive Design</li>
                <li>Performance Optimization</li>
                <li>Technical Consulting</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-muted-foreground text-sm">
                © {currentYear} Frontend Developer. All rights reserved.
              </p>
              <p className="text-muted-foreground text-sm flex items-center mt-4 md:mt-0">
                Made with <Heart className="h-4 w-4 text-red-500 mx-1" /> and lots of coffee
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
