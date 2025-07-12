import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageCircle,
  Clock,
  Globe,
} from "lucide-react";

export default function ContactSection() {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      content: "hello@scalinova.com",
      description: "Send us an email anytime",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      content: "+1 (555) 123-4567",
      description: "Mon-Fri from 8am to 5pm",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      content: "123 Innovation Drive",
      description: "San Francisco, CA 94105",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Business Hours",
      content: "Mon - Fri: 8am - 5pm",
      description: "Weekend support available",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 lg:py-32 bg-muted/20 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="flex items-center space-x-2 bg-scalinova-gold/20 px-4 py-2 rounded-full hover-lift hover-glow group cursor-pointer">
              <MessageCircle className="w-4 h-4 text-scalinova-teal group-hover:animate-wiggle" />
              <span className="text-sm font-medium text-scalinova-teal group-hover:text-animated-gradient">
                Get In Touch
              </span>
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 animate-slide-up leading-tight">
            <span className="block">Ready to Start Your</span>
            <span className="block bg-gradient-to-r from-scalinova-teal via-scalinova-blue to-scalinova-green-nova bg-clip-text text-transparent text-animated-gradient hover-tilt">
              Digital Journey?
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Let's discuss how we can help transform your business with our
            innovative solutions. Reach out to us and let's build something
            amazing together.
          </p>
        </div>

        <div className="lg:grid lg:grid-cols-3 lg:gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 mb-12 lg:mb-0">
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="border-scalinova-gold/30 bg-card hover:shadow-lg transition-all duration-500 hover-lift hover-glow animate-slide-in-left"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-scalinova-teal/10 rounded-lg text-scalinova-teal group-hover:bg-scalinova-teal group-hover:text-scalinova-cream transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1 group-hover:text-scalinova-teal transition-colors duration-300">
                          {info.title}
                        </h3>
                        <p className="text-foreground font-medium mb-1 group-hover:text-animated-gradient transition-all duration-300">
                          {info.content}
                        </p>
                        <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Additional CTA */}
            <Card className="mt-8 border-scalinova-gold/30 bg-gradient-to-br from-scalinova-gold/10 to-scalinova-blue/10">
              <CardContent className="p-6 text-center">
                <Globe className="w-12 h-12 text-scalinova-teal mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Global Reach
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Serving clients worldwide with 24/7 support and local
                  expertise.
                </p>
                <Button
                  variant="outline"
                  className="border-scalinova-teal text-scalinova-teal hover:bg-scalinova-teal hover:text-scalinova-cream font-semibold"
                >
                  View Our Locations
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-scalinova-gold/30 bg-card hover-glow animate-slide-in-right relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-scalinova-gold/5 to-scalinova-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="relative z-10">
                <CardTitle className="text-2xl text-foreground group-hover:text-animated-gradient transition-all duration-300">
                  Send us a Message
                </CardTitle>
                <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  Fill out the form below and we'll get back to you within 24
                  hours.
                </p>
              </CardHeader>
              <CardContent className="relative z-10">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        First Name
                      </label>
                      <Input
                        placeholder="John"
                        className="border-border bg-background hover:border-scalinova-gold focus:border-scalinova-teal transition-colors duration-300"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Last Name
                      </label>
                      <Input
                        placeholder="Doe"
                        className="border-border bg-background"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <Input
                      type="email"
                      placeholder="john@company.com"
                      className="border-border bg-background"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Company
                    </label>
                    <Input
                      placeholder="Your Company Name"
                      className="border-border bg-background"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Project Type
                    </label>
                    <select className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
                      <option value="">Select a service</option>
                      <option value="web-development">Web Development</option>
                      <option value="mobile-development">
                        Mobile Development
                      </option>
                      <option value="cloud-solutions">Cloud Solutions</option>
                      <option value="digital-transformation">
                        Digital Transformation
                      </option>
                      <option value="consulting">Consulting</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <Textarea
                      placeholder="Tell us about your project..."
                      rows={6}
                      className="border-border bg-background"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-scalinova-teal hover:bg-scalinova-blue text-scalinova-cream font-semibold"
                  >
                    Send Message
                    <Send className="ml-2 w-4 h-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
