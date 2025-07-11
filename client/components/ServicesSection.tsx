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
            <div className="flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Our Services
              </span>
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Comprehensive Solutions for{" "}
            <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
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
              className="group hover:shadow-xl transition-all duration-300 border-border bg-card hover:bg-card/80 hover:-translate-y-1"
            >
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl text-foreground">
                    {service.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center space-x-2"
                    >
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span className="text-sm text-muted-foreground">
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
          <div className="bg-card border border-border rounded-2xl p-8 lg:p-12 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <Cog
                className="w-12 h-12 text-primary animate-spin"
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
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4"
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
