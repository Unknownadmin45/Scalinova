# 📁 Scalinova Landing Page - File Structure

## 🏗️ **Project Overview**

This is a complete file structure for the Scalinova landing page, optimized for Netlify deployment.

## 📋 **Root Level Files**

```
scalinova-landing-page/
├── package.json              # NPM dependencies and scripts
├── netlify.toml              # Netlify deployment configuration
├── vite.config.ts            # Vite build tool configuration
├── tsconfig.json             # TypeScript configuration
├── tsconfig.node.json        # TypeScript config for Node.js files
├── tailwind.config.ts        # Tailwind CSS configuration
├── postcss.config.js         # PostCSS configuration
├── index.html                # HTML template with SEO meta tags
├── README.md                 # Deployment guide and instructions
└── FILE-STRUCTURE.md         # This file
```

## 📱 **Client Application Structure**

```
client/
├── main.tsx                  # React application entry point
├── App.tsx                   # Main app component with routing
├── global.css                # Global styles and Tailwind imports
├──
├── components/               # Reusable React components
│   ├── Navigation.tsx        # Header navigation with mobile menu
│   ├── HeroSection.tsx       # Hero section with CTA
│   ├── ServicesSection.tsx   # Services showcase
│   ├── AboutSection.tsx      # About company section
│   ├── ContactSection.tsx    # Contact form and info
│   ├── Footer.tsx            # Footer with links and newsletter
│   └── ui/                   # Base UI components
│       ├── button.tsx        # Reusable button component
│       ├── card.tsx          # Card container component
│       ├── input.tsx         # Form input component
│       └── textarea.tsx      # Textarea component
│
├── pages/                    # Route pages
│   ├── Index.tsx             # Homepage (main landing page)
│   └── NotFound.tsx          # 404 error page
│
└── lib/                      # Utility functions
    └── utils.ts              # Tailwind CSS class utilities
```

## 🔧 **File Purposes Explained**

### **Configuration Files**

| File                 | Purpose                                              |
| -------------------- | ---------------------------------------------------- |
| `package.json`       | Defines dependencies, scripts, and project metadata  |
| `netlify.toml`       | Netlify-specific build and deployment settings       |
| `vite.config.ts`     | Vite bundler configuration with React and TypeScript |
| `tsconfig.json`      | TypeScript compiler settings for the React app       |
| `tsconfig.node.json` | TypeScript settings for build tools                  |
| `tailwind.config.ts` | Tailwind CSS customization and theme                 |
| `postcss.config.js`  | CSS processing configuration                         |

### **Entry Points**

| File              | Purpose                                           |
| ----------------- | ------------------------------------------------- |
| `index.html`      | HTML template with SEO meta tags and font loading |
| `client/main.tsx` | React application bootstrap and mounting          |
| `client/App.tsx`  | Main app component with React Router setup        |

### **Styling**

| File                 | Purpose                                         |
| -------------------- | ----------------------------------------------- |
| `client/global.css`  | Global CSS, Tailwind imports, custom animations |
| `tailwind.config.ts` | Custom colors, animations, and design tokens    |

### **Components**

| Component             | Purpose                                      |
| --------------------- | -------------------------------------------- |
| `Navigation.tsx`      | Fixed header with responsive mobile menu     |
| `HeroSection.tsx`     | Hero section with animated elements and CTAs |
| `ServicesSection.tsx` | Service offerings grid with hover effects    |
| `AboutSection.tsx`    | Company information and team statistics      |
| `ContactSection.tsx`  | Contact form and company details             |
| `Footer.tsx`          | Site footer with links and newsletter signup |

### **UI Components**

| Component         | Purpose                                  |
| ----------------- | ---------------------------------------- |
| `ui/button.tsx`   | Reusable button with multiple variants   |
| `ui/card.tsx`     | Container component for content sections |
| `ui/input.tsx`    | Form input field component               |
| `ui/textarea.tsx` | Multi-line text input component          |

### **Pages**

| Page           | Purpose                                  |
| -------------- | ---------------------------------------- |
| `Index.tsx`    | Main landing page combining all sections |
| `NotFound.tsx` | 404 error page with navigation options   |

### **Utilities**

| File           | Purpose                              |
| -------------- | ------------------------------------ |
| `lib/utils.ts` | Tailwind CSS class merging utilities |

## 🚀 **Build Output**

When you run `npm run build`, it creates:

```
dist/
├── index.html            # Optimized HTML
├── assets/
│   ├── index-[hash].css  # Compiled and minified CSS
│   └── index-[hash].js   # Compiled and minified JavaScript
└── favicon.ico           # Site favicon
```

## 📦 **Dependencies Overview**

### **Production Dependencies**

- `react` + `react-dom` - Core React framework
- `react-router-dom` - Client-side routing
- `lucide-react` - Icon library
- `@radix-ui/react-slot` - UI component primitives

### **Development Dependencies**

- `vite` - Fast build tool and dev server
- `typescript` - Type safety
- `tailwindcss` - Utility-first CSS framework
- `@vitejs/plugin-react-swc` - Fast React compilation

## ✅ **Ready for Deployment**

All files are optimized and ready for Netlify deployment with:

- ✅ SEO meta tags
- ✅ Responsive design
- ✅ Modern animations
- ✅ Type safety
- ✅ Performance optimization
- ✅ Security headers
