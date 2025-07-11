import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Target,
  Users,
  Award,
  ArrowRight,
  CheckCircle,
  TrendingUp,
} from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";

export default function AboutSection() {
  const stats = [
    { number: 500, suffix: "+", label: "Projects Delivered", icon: <Target /> },
    { number: 50, suffix: "+", label: "Expert Team Members", icon: <Users /> },
    { number: 98, suffix: "%", label: "Client Satisfaction", icon: <Award /> },
    {
      number: 5,
      suffix: "+",
      label: "Years of Excellence",
      icon: <TrendingUp />,
    },
  ];

  const values = [
    {
      title: "Innovation First",
      description:
        "We stay ahead of the curve by embracing cutting-edge technologies and innovative approaches to solve complex problems.",
    },
    {
      title: "Client-Centric Approach",
      description:
        "Your success is our priority. We work closely with you to understand your needs and deliver solutions that exceed expectations.",
    },
    {
      title: "Quality Assurance",
      description:
        "We maintain the highest standards of quality in everything we do, ensuring reliable and scalable solutions.",
    },
    {
      title: "Agile Methodology",
      description:
        "Our agile approach ensures faster delivery, better collaboration, and the flexibility to adapt to changing requirements.",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 lg:py-32 bg-background relative overflow-hidden"
    >
      {/* Background Animation Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-scalinova-gold/10 rounded-full blur-3xl animate-float"></div>
      <div
        className="absolute bottom-20 left-10 w-48 h-48 bg-scalinova-blue/15 rounded-full blur-2xl animate-pulse-glow"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 px-4 py-2">
          <div className="flex items-center justify-center mb-4">
            <div className="flex items-center space-x-2 bg-scalinova-gold/20 px-4 py-2 rounded-full hover-lift hover-glow group cursor-pointer">
              <Users className="w-4 h-4 text-scalinova-teal group-hover:animate-wiggle" />
              <span className="text-sm font-medium text-scalinova-teal group-hover:text-animated-gradient">
                About Scalinova
              </span>
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-8 animate-slide-up leading-relaxed">
            <span className="block pb-2">Empowering Businesses Through</span>
            <span className="block gradient-text-safe hover-tilt pb-2">
              Technology Excellence
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Since our founding, we've been dedicated to helping businesses scale
            and succeed through innovative technology solutions. Our passionate
            team of experts combines technical excellence with strategic
            thinking to deliver results that matter.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="text-center p-6 border-scalinova-gold/30 bg-card hover:shadow-lg transition-all duration-500 hover-lift hover-glow group animate-scale-in cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-scalinova-teal/10 rounded-lg text-scalinova-teal group-hover:animate-bounce-slow group-hover:bg-scalinova-teal group-hover:text-scalinova-cream transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-2xl lg:text-3xl font-bold text-foreground mb-2 group-hover:text-animated-gradient transition-all duration-300">
                  <AnimatedCounter
                    end={stat.number}
                    suffix={stat.suffix}
                    duration={2000 + index * 200}
                  />
                </div>
                <div className="text-sm text-muted-foreground group-hover:text-scalinova-teal transition-colors duration-300">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center mb-20">
          {/* Left - Story */}
          <div>
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
              Our Story & Mission
            </h3>
            <p className="text-muted-foreground mb-6">
              Founded with a vision to bridge the gap between business needs and
              technology solutions, Scalinova has grown from a small team of
              passionate developers to a comprehensive technology partner
              trusted by businesses worldwide.
            </p>
            <p className="text-muted-foreground mb-8">
              We believe that technology should empower businesses, not
              complicate them. That's why we focus on creating solutions that
              are not only technically excellent but also practical, scalable,
              and aligned with your business objectives.
            </p>
            <Button className="bg-scalinova-teal hover:bg-scalinova-blue text-scalinova-cream px-8 py-4 font-semibold hover-lift hover-glow group relative overflow-hidden transform transition-all duration-300 hover:scale-105">
              <span className="relative z-10 flex items-center">
                Learn More About Us
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-scalinova-gold to-scalinova-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </Button>
          </div>

          {/* Right - Image/Visual */}
          <div className="mt-12 lg:mt-0">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl blur-3xl"></div>
              <Card className="relative border-border bg-card p-8">
                <CardContent className="p-0">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-4">
                      <div className="h-4 bg-primary/30 rounded w-full"></div>
                      <div className="h-4 bg-muted rounded w-3/4"></div>
                      <div className="h-4 bg-primary/20 rounded w-1/2"></div>
                    </div>
                    <div className="space-y-4">
                      <div className="h-4 bg-muted rounded w-2/3"></div>
                      <div className="h-4 bg-primary/40 rounded w-full"></div>
                      <div className="h-4 bg-muted rounded w-3/4"></div>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
                    <div className="flex items-center space-x-2 mb-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium text-primary">
                        Excellence Delivered
                      </span>
                    </div>
                    <div className="h-2 bg-primary/20 rounded-full">
                      <div className="h-2 bg-primary rounded-full w-4/5"></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Values */}
        <div>
          <h3 className="text-2xl lg:text-3xl font-bold text-foreground text-center mb-12">
            Our Core Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="border-scalinova-gold/30 bg-card hover:shadow-lg transition-shadow duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-scalinova-teal/10 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-scalinova-teal" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">
                        {value.title}
                      </h4>
                      <p className="text-muted-foreground">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
