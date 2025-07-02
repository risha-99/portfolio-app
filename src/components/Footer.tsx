
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-card/50 backdrop-blur-sm border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold gradient-text mb-4">
                Risha Bhandari
              </div>
              <p className="text-muted-foreground mb-4">
                Software Engineer with 5+ years of experience creating beautiful, 
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
                  href="mailto:rishabhandari01@gmail.com"
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
                  <button 
                    onClick={() => handleNavClick('home')} 
                    className="text-muted-foreground hover:text-primary transition-colors text-left"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleNavClick('about')} 
                    className="text-muted-foreground hover:text-primary transition-colors text-left"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleNavClick('skills')} 
                    className="text-muted-foreground hover:text-primary transition-colors text-left"
                  >
                    Skills
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleNavClick('projects')} 
                    className="text-muted-foreground hover:text-primary transition-colors text-left"
                  >
                    Projects
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleNavClick('contact')} 
                    className="text-muted-foreground hover:text-primary transition-colors text-left"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-muted-foreground text-sm">
                © {currentYear} Risha Bhandari. All rights reserved.
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
