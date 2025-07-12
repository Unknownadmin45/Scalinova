import { Button } from "@/components/ui/button";
import { ArrowRight, Play, CheckCircle } from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";
import TypingAnimation from "./TypingAnimation";
import HeroTypingText from "./HeroTypingText";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background to-muted/20"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-scalinova-gold/20 rounded-full blur-3xl animate-float"></div>
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-scalinova-blue/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="lg:col-span-6 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start mb-6 animate-slide-in-left">
              <div className="flex items-center space-x-2 bg-scalinova-gold/20 px-4 py-2 rounded-full hover-lift hover-glow group cursor-pointer">
                <CheckCircle className="w-4 h-4 text-scalinova-teal group-hover:animate-wiggle" />
                <span className="text-sm font-medium text-scalinova-teal group-hover:text-animated-gradient">
                  Trusted by 500+ Companies
                </span>
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 animate-slide-up hover:animate-text-glow group cursor-default">
              <span className="animate-fade-in">Scale Your Business with </span>
              <span className="bg-gradient-to-r from-scalinova-teal via-scalinova-blue to-scalinova-green-nova bg-clip-text text-transparent text-animated-gradient hover-tilt inline-block">
                Next-Gen Solutions
              </span>
            </h1>

            <p
              className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 animate-slide-up"
              style={{ animationDelay: "0.1s" }}
            >
              Transform your business with our cutting-edge technology
              solutions. We help companies scale efficiently with innovative
              software, strategic consulting, and digital transformation
              services.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12 animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              <Button
                size="lg"
                className="bg-scalinova-teal hover:bg-scalinova-blue text-scalinova-cream px-8 py-4 text-lg font-semibold hover-lift hover-glow group relative overflow-hidden transform transition-all duration-300 hover:scale-105"
              >
                <span className="relative z-10 flex items-center">
                  Get Started Free
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-scalinova-gold to-scalinova-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-4 text-lg border-scalinova-teal text-scalinova-teal hover:bg-scalinova-teal hover:text-scalinova-cream font-semibold hover-lift group morphing-border relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  <Play className="mr-2 w-5 h-5 group-hover:animate-pulse-glow" />
                  Watch Demo
                </span>
              </Button>
            </div>

            {/* Stats */}
            <div
              className="grid grid-cols-3 gap-8 pt-8 border-t border-border animate-slide-up"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="text-center lg:text-left hover-lift group cursor-pointer">
                <div className="text-2xl sm:text-3xl font-bold text-foreground group-hover:text-animated-gradient animate-scale-in">
                  <AnimatedCounter end={500} suffix="+" duration={2000} />
                </div>
                <div className="text-sm text-muted-foreground group-hover:text-scalinova-teal transition-colors duration-300">
                  Happy Clients
                </div>
              </div>
              <div className="text-center lg:text-left hover-lift group cursor-pointer">
                <div className="text-2xl sm:text-3xl font-bold text-foreground group-hover:text-animated-gradient animate-scale-in">
                  <AnimatedCounter end={99.9} suffix="%" duration={2200} />
                </div>
                <div className="text-sm text-muted-foreground group-hover:text-scalinova-blue transition-colors duration-300">
                  Uptime
                </div>
              </div>
              <div className="text-center lg:text-left hover-lift group cursor-pointer">
                <div className="text-2xl sm:text-3xl font-bold text-foreground group-hover:text-animated-gradient animate-scale-in">
                  24/7
                </div>
                <div className="text-sm text-muted-foreground group-hover:text-scalinova-gold transition-colors duration-300">
                  Support
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Visual */}
          <div className="lg:col-span-6 mt-12 lg:mt-0">
            <div
              className="relative animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-scalinova-gold/30 to-scalinova-blue/20 rounded-2xl blur-3xl"></div>
              <div className="relative bg-card border border-scalinova-gold/30 rounded-2xl p-8 shadow-2xl">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-scalinova-yellow rounded-full"></div>
                    <div className="w-3 h-3 bg-scalinova-green-nova rounded-full"></div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-4 bg-scalinova-teal/30 rounded w-3/4"></div>
                    <div className="h-4 bg-scalinova-gold/20 rounded w-1/2"></div>
                    <div className="h-4 bg-scalinova-blue/40 rounded w-5/6"></div>
                    <div className="h-20 bg-gradient-to-br from-scalinova-teal/10 to-scalinova-blue/20 rounded-lg border border-scalinova-gold/30"></div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="h-8 bg-scalinova-gold/20 rounded"></div>
                      <div className="h-8 bg-scalinova-green-scali/30 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
