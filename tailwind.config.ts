import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        // Scalinova Brand Colors
        scalinova: {
          gold: "hsl(var(--scalinova-gold))", // Crown gold #D1A940
          teal: "hsl(var(--scalinova-teal))", // Shield dark teal #004238
          blue: "hsl(var(--scalinova-blue))", // Circle blue-green #00667D
          "green-scali": "hsl(var(--scalinova-green-scali))", // SCALI green #4F7B3E
          "green-nova": "hsl(var(--scalinova-green-nova))", // NOVA green #6F9333
          lime: "hsl(var(--scalinova-lime))", // NOVA lime #A3B631
          yellow: "hsl(var(--scalinova-yellow))", // NOVA yellow #F0C529
          cream: "hsl(var(--scalinova-cream))", // Background cream #F5F1E6
        },
        gradient: {
          from: "hsl(var(--scalinova-teal))",
          to: "hsl(var(--scalinova-blue))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fadeIn 0.6s ease-in-out",
        "slide-up": "slideUp 0.6s ease-out",
        float: "float 3s ease-in-out infinite",
        "bounce-slow": "bounceSlow 4s ease-in-out infinite",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
        "rotate-3d": "rotate3d 10s linear infinite",
        "slide-in-left": "slideInLeft 0.8s ease-out",
        "slide-in-right": "slideInRight 0.8s ease-out",
        "scale-in": "scaleIn 0.5s ease-out",
        flip: "flip 0.6s ease-in-out",
        wiggle: "wiggle 1s ease-in-out infinite",
        "gradient-shift": "gradientShift 8s ease infinite",
        "border-morph": "borderMorph 4s ease infinite",
        "text-glow": "textGlow 2s ease-in-out infinite alternate",
        "card-hover": "cardHover 0.3s ease",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        bounceSlow: {
          "0%, 20%, 50%, 80%, 100%": { transform: "translateY(0)" },
          "40%": { transform: "translateY(-10px)" },
          "60%": { transform: "translateY(-5px)" },
        },
        pulseGlow: {
          "0%, 100%": {
            boxShadow: "0 0 5px hsl(var(--scalinova-gold) / 0.5)",
          },
          "50%": {
            boxShadow:
              "0 0 20px hsl(var(--scalinova-gold) / 0.8), 0 0 30px hsl(var(--scalinova-blue) / 0.6)",
          },
        },
        rotate3d: {
          "0%": { transform: "rotateY(0deg) rotateX(0deg)" },
          "25%": { transform: "rotateY(90deg) rotateX(0deg)" },
          "50%": { transform: "rotateY(180deg) rotateX(180deg)" },
          "75%": { transform: "rotateY(270deg) rotateX(180deg)" },
          "100%": { transform: "rotateY(360deg) rotateX(360deg)" },
        },
        slideInLeft: {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideInRight: {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.8)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        flip: {
          "0%": { transform: "rotateY(0)" },
          "50%": { transform: "rotateY(-90deg)" },
          "100%": { transform: "rotateY(0)" },
        },
        wiggle: {
          "0%, 7%": { transform: "rotateZ(0)" },
          "15%": { transform: "rotateZ(-15deg)" },
          "20%": { transform: "rotateZ(10deg)" },
          "25%": { transform: "rotateZ(-10deg)" },
          "30%": { transform: "rotateZ(6deg)" },
          "35%": { transform: "rotateZ(-4deg)" },
          "40%, 100%": { transform: "rotateZ(0)" },
        },
        gradientShift: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        borderMorph: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        textGlow: {
          from: { textShadow: "0 0 10px hsl(var(--scalinova-gold) / 0.8)" },
          to: {
            textShadow:
              "0 0 20px hsl(var(--scalinova-gold) / 0.8), 0 0 30px hsl(var(--scalinova-blue) / 0.6)",
          },
        },
        cardHover: {
          "0%": {
            transform: "perspective(1000px) rotateX(0deg) rotateY(0deg)",
          },
          "100%": {
            transform: "perspective(1000px) rotateX(10deg) rotateY(10deg)",
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
