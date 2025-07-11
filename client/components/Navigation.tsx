import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border animate-slide-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-3 hover-lift group cursor-pointer">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F002b0baeac61412f826a94580e123c13%2Fdf0da07cd0ac456db54fcdcc2a692583?format=webp&width=100"
                alt="Scalinova Logo"
                className="h-10 w-auto transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110"
              />
              <span className="text-xl font-bold animate-fade-in">
                <span className="text-scalinova-green-scali hover:animate-pulse-glow transition-all duration-300 cursor-pointer">
                  SCAL
                </span>
                <span className="text-scalinova-gold hover:animate-wiggle transition-all duration-300 cursor-pointer">
                  I
                </span>
                <span className="bg-gradient-to-r from-scalinova-green-nova to-scalinova-blue bg-clip-text text-transparent hover:text-animated-gradient transition-all duration-300 cursor-pointer">
                  NOVA
                </span>
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                className="relative text-muted-foreground hover:text-foreground transition-all duration-300 font-medium group hover-slide-bg px-3 py-2 rounded-lg animate-slide-in-right"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="relative z-10">{item.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-scalinova-gold to-scalinova-blue transition-all duration-300 group-hover:w-full"></span>
                <span className="absolute inset-0 bg-scalinova-gold/10 rounded-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
              </a>
            ))}
            <Button className="bg-scalinova-teal hover:bg-scalinova-blue text-scalinova-cream font-semibold relative overflow-hidden group hover-glow transition-all duration-300 hover:scale-105 animate-bounce-slow">
              <span className="relative z-10">Get Started</span>
              <span className="absolute inset-0 bg-gradient-to-r from-scalinova-gold to-scalinova-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground mt-4 w-full">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
