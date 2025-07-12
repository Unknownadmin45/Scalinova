import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Code,
  Cloud,
  Smartphone,
  BarChart3,
  Shield,
  Zap,
  Users,
  Cog,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ServicesSection() {
  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Custom Software Development",
      description:
        "Build scalable, high-performance applications tailored to your business needs with modern technologies and best practices.",
      features: [
        "React & Next.js",
        "Node.js & Python",
        "Mobile Apps",
        "API Development",
      ],
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Solutions",
      description:
        "Migrate to the cloud seamlessly with our expert guidance. Optimize costs, improve scalability, and enhance security.",
      features: [
        "AWS & Azure",
        "DevOps",
        "Microservices",
        "Container Orchestration",
      ],
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Digital Transformation",
      description:
        "Transform your business processes with cutting-edge digital solutions. Increase efficiency and drive growth.",
      features: [
        "Process Automation",
        "Data Analytics",
        "AI Integration",
        "Digital Strategy",
      ],
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Cybersecurity",
      description:
        "Protect your business with comprehensive security solutions. Ensure compliance and safeguard sensitive data.",
      features: [
        "Security Audits",
        "Threat Detection",
        "Compliance",
        "Risk Assessment",
      ],
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Development",
      description:
        "Create engaging mobile experiences that connect with your audience. Native and cross-platform solutions.",
      features: [
        "iOS & Android",
        "React Native",
        "Flutter",
        "Progressive Web Apps",
      ],
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Consulting & Strategy",
      description:
        "Get expert guidance on technology strategy and digital initiatives. Make informed decisions for your business.",
      features: [
        "Technology Roadmap",
        "Architecture Design",
        "Team Scaling",
        "Best Practices",
      ],
    },
  ];

  return (
    <section id="services" className="py-20 lg:py-32 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="flex items-center space-x-2 bg-scalinova-gold/20 px-4 py-2 rounded-full hover-lift hover-glow group">
              <Zap className="w-4 h-4 text-scalinova-teal group-hover:animate-wiggle" />
              <span className="text-sm font-medium text-scalinova-teal group-hover:text-animated-gradient">
                Our Services
              </span>
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 animate-slide-up">
            Comprehensive Solutions for{" "}
            <span className="bg-gradient-to-r from-scalinova-teal via-scalinova-blue to-scalinova-green-nova bg-clip-text text-transparent text-animated-gradient">
              Modern Businesses
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We offer end-to-end technology solutions to help your business
            thrive in the digital age. From custom software development to
            strategic consulting, we've got you covered.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-500 border-scalinova-gold/30 bg-card hover:bg-scalinova-cream/50 hover-lift hover-glow card-3d perspective-1000 relative overflow-hidden animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-scalinova-gold/5 to-scalinova-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="relative z-10">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-scalinova-teal/10 rounded-lg text-scalinova-teal group-hover:bg-scalinova-teal group-hover:text-scalinova-cream transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl text-foreground group-hover:text-animated-gradient transition-all duration-300">
                    {service.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-muted-foreground mb-6 group-hover:text-foreground transition-colors duration-300 text-reveal">
                  {service.description}
                </p>
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center space-x-2 group/feature hover-slide-bg rounded px-2 py-1 animate-slide-in-left"
                      style={{
                        animationDelay: `${index * 0.1 + featureIndex * 0.05}s`,
                      }}
                    >
                      <div className="w-1.5 h-1.5 bg-scalinova-gold rounded-full animate-pulse-glow group-hover/feature:animate-wiggle"></div>
                      <span className="text-sm text-muted-foreground group-hover/feature:text-scalinova-teal transition-colors duration-300">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-card border border-scalinova-gold/30 rounded-2xl p-8 lg:p-12 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <Cog
                className="w-12 h-12 text-scalinova-teal animate-spin"
                style={{ animationDuration: "3s" }}
              />
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how our solutions can help you achieve your goals.
              Schedule a free consultation with our experts today.
            </p>
            <Button
              size="lg"
              className="bg-scalinova-teal hover:bg-scalinova-blue text-scalinova-cream px-8 py-4 font-semibold"
            >
              Schedule Free Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
