
import { Mail, MapPin, Phone, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "rishabhandari01@gmail.com",
      href: "mailto:rishabhandari01@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "8433480476",
      href: "tel:8433480476",
    },
    {
      icon: MapPin,
      title: "Location",
      content: "Dehradun",
      href: "#",
    },
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Have a project in mind or want to collaborate? I'd love to hear from you. 
              Let's create something amazing together!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* LinkedIn Connect Section */}
            <Card className="gradient-border bg-card/50 backdrop-blur-sm animate-slide-in-left">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-semibold">Let's Connect</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-6">
                <p className="text-muted-foreground">
                  Connect with me on LinkedIn to discuss opportunities, collaborations, 
                  and the latest in web development.
                </p>
                
                <Button 
                  size="lg" 
                  className="w-full group bg-[#0077B5] hover:bg-[#0077B5]/90 text-white"
                  asChild
                >
                  <a 
                    href="https://www.linkedin.com/in/risha-bhandari-379707154/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                  >
                    <Linkedin className="w-5 h-5 mr-2" />
                    Connect on LinkedIn
                  </a>
                </Button>
                
                <div className="pt-6">
                  <p className="text-sm text-muted-foreground">
                    Or reach out directly via email or phone using the contact information below.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8 animate-fade-in">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                <p className="text-muted-foreground mb-8">
                  Feel free to reach out through any of these channels. I'm always excited to discuss new opportunities and interesting projects.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="gradient-border bg-card/30 backdrop-blur-sm hover:scale-105 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg">
                          <info.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold">{info.title}</h4>
                          <a
                            href={info.href}
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            {info.content}
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="pt-8">
                <h4 className="font-semibold mb-4">Professional Background</h4>
                <p className="text-muted-foreground">
                  I'm always open to discussing new opportunities, collaborating on interesting projects, 
                  or just having a chat about the latest in web development. Don't hesitate to reach out!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
