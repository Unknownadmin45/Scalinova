import { Button } from "@/components/ui/button";
import {
  Github,
  Twitter,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ArrowUp,
} from "lucide-react";

export default function Footer() {
  const footerLinks = {
    Services: [
      "Custom Software Development",
      "Cloud Solutions",
      "Mobile Development",
      "Digital Transformation",
      "Cybersecurity",
      "Consulting",
    ],
    Company: ["About Us", "Our Team", "Careers", "Blog", "Contact", "Privacy"],
    Resources: [
      "Documentation",
      "Case Studies",
      "White Papers",
      "Support",
      "FAQ",
      "Downloads",
    ],
  };

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: "#", label: "GitHub" },
    { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
    { icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-4 mb-12 lg:mb-0">
              <div className="flex items-center space-x-3 mb-6">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F002b0baeac61412f826a94580e123c13%2Fdf0da07cd0ac456db54fcdcc2a692583?format=webp&width=100"
                  alt="Scalinova Logo"
                  className="h-10 w-auto"
                />
                <span className="text-xl font-bold">
                  <span className="text-scalinova-green-scali">SCAL</span>
                  <span className="text-scalinova-gold">I</span>
                  <span className="bg-gradient-to-r from-scalinova-green-nova to-scalinova-blue bg-clip-text text-transparent">
                    NOVA
                  </span>
                </span>
              </div>
              <p className="text-muted-foreground mb-6 max-w-sm">
                Empowering businesses through innovative technology solutions.
                We help companies scale efficiently with cutting-edge software
                and strategic consulting.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-scalinova-gold" />
                  <span className="text-muted-foreground">
                    hello@scalinova.com
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-scalinova-gold" />
                  <span className="text-muted-foreground">
                    +1 (555) 123-4567
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4 text-scalinova-gold" />
                  <span className="text-muted-foreground">
                    San Francisco, CA
                  </span>
                </div>
              </div>
            </div>

            {/* Links Sections */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {Object.entries(footerLinks).map(([category, links]) => (
                  <div key={category}>
                    <h3 className="text-lg font-semibold text-foreground mb-4">
                      {category}
                    </h3>
                    <ul className="space-y-3">
                      {links.map((link) => (
                        <li key={link}>
                          <a
                            href="#"
                            className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                          >
                            {link}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="mt-16 pt-8 border-t border-border">
            <div className="lg:flex lg:items-center lg:justify-between">
              <div className="mb-8 lg:mb-0">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Stay Updated
                </h3>
                <p className="text-muted-foreground">
                  Subscribe to our newsletter for the latest updates and
                  insights.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <Button className="bg-scalinova-teal hover:bg-scalinova-blue text-scalinova-cream font-semibold">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-border">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="text-center lg:text-left mb-4 lg:mb-0">
              <p className="text-muted-foreground">
                © {new Date().getFullYear()} Scalinova. All rights reserved.
              </p>
            </div>
            <div className="flex items-center justify-center lg:justify-end space-x-6">
              {/* Social Links */}
              <div className="flex items-center space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
              {/* Scroll to Top */}
              <Button
                variant="outline"
                size="sm"
                onClick={scrollToTop}
                className="border-border hover:bg-muted"
              >
                <ArrowUp className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
