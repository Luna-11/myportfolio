// app/projects/[id]/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  ArrowLeft,
  ExternalLink,
  Monitor,
  Users,
  Clock,
  CheckCircle,
  Utensils,
  Award,
  Heart,
  MessageCircle,
  Zap,
  Layers,
  Palette,
  Layout,
  Search,
  Menu,
  X,
  Eye,
  Terminal,
} from "lucide-react";

// Mock project data (would come from API/database)
const projectData = {
  "study-with-me": {
    id: "study-with-me",
    title: "Study With Me",
    subtitle: "Interactive Study Platform for Students",
    description: "An interactive study platform designed for students to stay focused, track progress, and collaborate with peers in real-time.",
    longDescription: "Study With Me is a comprehensive platform that transforms the way students approach their study sessions. Built with modern web technologies, it combines productivity tools with social features to create an engaging learning environment.",
    category: "Web Development",
    image: "🚀",
    features: [
      {
        icon: <Clock className="h-6 w-6" />,
        title: "Pomodoro Timer",
        description: "Focus sessions with customizable work and break intervals"
      },
      {
        icon: <Users className="h-6 w-6" />,
        title: "Study Groups",
        description: "Create or join study rooms with friends and peers"
      },
      {
        icon: <CheckCircle className="h-6 w-6" />,
        title: "Task Management",
        description: "Track assignments, deadlines, and study goals"
      },
      {
        icon: <Award className="h-6 w-6" />,
        title: "Achievement System",
        description: "Earn badges and rewards for consistent study habits"
      }
    ],
    techStack: ["Next.js", "React", "TailwindCSS", "Firebase", "WebSockets", "TypeScript"],
    colorPalette: {
      primary: "#3d312e",
      secondary: "#f0eeee",
      accent: "#bba2a2",
      light: "#f0eeee",
      dark: "#3d312e"
    },
    typography: {
      font: "Crimson Text",
      heading: "Crimson Text",
      body: "Crimson Text",
    },
    components: [
      "Navigation Bar",
      "Hero Section",
      "Feature Cards",
      "Timer Widget",
      "User Dashboard",
      "Study Groups",
      "Progress Charts",
      "Achievement Badges",
      "Slideshow Layout",
      "Scroll Snap Sections"
    ],
    demo: "https://cptesting.vercel.app/"
  },
  "cooking-recipes": {
    id: "cooking-recipes",
    title: "Cooking Recipes Sharing",
    subtitle: "Community Recipe Platform",
    description: "A vibrant community platform where food lovers share, discover, and rate delicious recipes from around the world.",
    longDescription: "Cooking Recipes Sharing is a dynamic platform that connects food enthusiasts worldwide. Users can create profiles, upload their favorite recipes with photos, explore diverse cuisines, and engage with a passionate community of home cooks and professional chefs.",
    category: "Web Development",
    image: "🍳",
    features: [
      {
        icon: <Utensils className="h-6 w-6" />,
        title: "Recipe Upload",
        description: "Share your recipes with photos and step-by-step instructions"
      },
      {
        icon: <Search className="h-6 w-6" />,
        title: "Smart Search",
        description: "Filter by ingredients, cuisine, dietary preferences, and more"
      },
      {
        icon: <Heart className="h-6 w-6" />,
        title: "Save & Favorites",
        description: "Bookmark recipes you love and create personal collections"
      },
      {
        icon: <MessageCircle className="h-6 w-6" />,
        title: "Community Feedback",
        description: "Rate, review, and discuss recipes with other food lovers"
      }
    ],
    techStack: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3", "TailwindCSS"],
    colorPalette: {
      primary: "#C89091",
      secondary: "#fcfaf2",
      accent: "#FF6B35",
      light: "#f9f7f1",
      dark: "#7b4e48"
    },
    typography: {
      font: "Segoe UI",
      heading: "Segoe UI",
      body: "Segoe UI",
    },
    components: [
      "Recipe Feed",
      "Recipe Detail View",
      "Upload Form",
      "Search & Filters",
      "User Profiles",
      "Rating System",
      "Comment Section",
      "Ingredient Calculator",
      "Slideshow Gallery",
      "About Us Page"
    ],
    demo: "https://recipe-sharing-demo.com",
  }
};

export default function ProjectDetailPage() {
  const params = useParams();
  const projectId = params.id as string;
  const project = projectData[projectId as keyof typeof projectData];
  
  const [activeTab, setActiveTab] = useState<"ui" | "code">("ui");
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#f0eeee] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-[#3d312e]">Project not found</h2>
          <Link href="/projects" className="text-[#3d312e]/70 hover:text-[#3d312e] mt-4 inline-block">
            ← Back to projects
          </Link>
        </div>
      </div>
    );
  }

  // Check if this is the study-with-me project for special styling
  const isStudyApp = projectId === "study-with-me";

  return (
    <div className={`min-h-screen ${isStudyApp ? 'bg-[#f0eeee]' : 'bg-[#f9f7f1]'}`}>
      {/* Navigation */}
      <nav className={`sticky top-0 z-50 ${isStudyApp ? 'bg-[#3d312e] text-[#f0eeee]' : 'bg-[#f0eada]/95 backdrop-blur-md'} border-b ${isStudyApp ? 'border-[#f0eeee]/20' : 'border-[#3f2a47]/20'}`}>
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex items-center justify-between h-16">
            <Link href="/projects" className={`flex items-center gap-2 ${isStudyApp ? 'text-[#f0eeee] hover:text-[#bba2a2]' : 'text-[#3f2a47] hover:text-[#3f2a47]/70'} transition-colors`}>
              <ArrowLeft className="h-5 w-5" />
              <span className="font-medium">Back</span>
            </Link>
            
            <div className="hidden md:flex items-center gap-6">
              <button
                onClick={() => setActiveTab("ui")}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                  activeTab === "ui" 
                    ? isStudyApp 
                      ? "bg-[#f0eeee] text-[#3d312e]" 
                      : "bg-[#3f2a47] text-[#f0eada]"
                    : isStudyApp
                      ? "text-[#f0eeee]/70 hover:text-[#f0eeee]"
                      : "text-[#3f2a47]/70 hover:text-[#3f2a47]"
                }`}
              >
                <Eye className="h-4 w-4" />
                UI Design
              </button>
              <button
                onClick={() => setActiveTab("code")}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                  activeTab === "code" 
                    ? isStudyApp 
                      ? "bg-[#f0eeee] text-[#3d312e]" 
                      : "bg-[#3f2a47] text-[#f0eada]"
                    : isStudyApp
                      ? "text-[#f0eeee]/70 hover:text-[#f0eeee]"
                      : "text-[#3f2a47]/70 hover:text-[#3f2a47]"
                }`}
              >
                <Terminal className="h-4 w-4" />
                Code Base
              </button>
            </div>

            <div className="flex items-center gap-3">
              <a 
                href={project.demo} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`p-2 rounded-lg ${isStudyApp ? 'hover:bg-[#f0eeee]/10' : 'hover:bg-[#3f2a47]/10'} transition-colors`}
              >
                <ExternalLink className={`h-5 w-5 ${isStudyApp ? 'text-[#f0eeee]' : 'text-[#3f2a47]'}`} />
              </a>
              <button
                onClick={() => setShowMobileMenu(!showMobileMenu)}
                className={`p-2 rounded-lg ${isStudyApp ? 'hover:bg-[#f0eeee]/10' : 'hover:bg-[#3f2a47]/10'} transition-colors md:hidden`}
              >
                <Menu className={`h-5 w-5 ${isStudyApp ? 'text-[#f0eeee]' : 'text-[#3f2a47]'}`} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {showMobileMenu && (
        <div className="md:hidden fixed inset-0 z-40 bg-[#f0eeee]">
          <div className="flex flex-col items-center justify-center h-full gap-6">
            <button
              onClick={() => {
                setActiveTab("ui");
                setShowMobileMenu(false);
              }}
              className="flex items-center gap-3 px-6 py-3 rounded-lg hover:bg-[#3d312e]/10 transition-colors"
            >
              <Eye className="h-6 w-6 text-[#3d312e]" />
              <span className="text-lg font-medium text-[#3d312e]">UI Design</span>
            </button>
            <button
              onClick={() => {
                setActiveTab("code");
                setShowMobileMenu(false);
              }}
              className="flex items-center gap-3 px-6 py-3 rounded-lg hover:bg-[#3d312e]/10 transition-colors"
            >
              <Terminal className="h-6 w-6 text-[#3d312e]" />
              <span className="text-lg font-medium text-[#3d312e]">Code Base</span>
            </button>
            <button
              onClick={() => setShowMobileMenu(false)}
              className="absolute top-4 right-4 p-2"
            >
              <X className="h-6 w-6 text-[#3d312e]" />
            </button>
          </div>
        </div>
      )}

      {/* Hero Section - Study App specific gradient */}
      <section className={`relative overflow-hidden ${isStudyApp ? 'bg-gradient-to-b from-[#3d312e] via-[#bba2a2] to-[#f0eeee]' : 'bg-gradient-to-br from-[#3f2a47] to-[#5a3d6a]'} text-white`}>
        <div className="absolute inset-0 opacity-10">
          <div className={`absolute top-0 right-0 w-96 h-96 ${isStudyApp ? 'bg-[#f0eeee]' : 'bg-[#f0eada]'} rounded-full blur-3xl`}></div>
          <div className={`absolute bottom-0 left-0 w-96 h-96 ${isStudyApp ? 'bg-[#f0eeee]' : 'bg-[#f0eada]'} rounded-full blur-3xl`}></div>
        </div>
        <div className="container mx-auto px-4 py-16 max-w-7xl relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-6xl mb-4">{project.image}</div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
              <p className="text-xl text-white/80 mb-6">{project.subtitle}</p>
              <p className="text-white/70 max-w-lg mb-8">{project.description}</p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 ${isStudyApp ? 'bg-[#f0eeee] text-[#3d312e] hover:shadow-lg' : 'bg-[#f0eada] text-[#3f2a47] hover:shadow-lg'} px-6 py-3 rounded-lg font-medium transition-all`}
                >
                  <ExternalLink className="h-5 w-5" />
                  Live Demo
                </a>
              
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        {/* UI Design Tab */}
        {activeTab === "ui" && (
          <div className="space-y-12">
            {/* Style Guide */}
            <div className={`${isStudyApp ? 'bg-[#3d312e] text-[#f0eeee]' : 'bg-white'} rounded-2xl shadow-sm border ${isStudyApp ? 'border-[#f0eeee]/20' : 'border-[#3f2a47]/10'} p-8`}>
              <h2 className={`text-2xl font-bold ${isStudyApp ? 'text-[#f0eeee]' : 'text-[#3f2a47]'} mb-2`}>Style Guide</h2>
              <p className={`${isStudyApp ? 'text-[#f0eeee]/70' : 'text-[#3f2a47]/70'} mb-6`}>Complete UI design system for {project.title}</p>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* Color Palette */}
                <div>
                  <h3 className={`font-semibold ${isStudyApp ? 'text-[#f0eeee]' : 'text-[#3f2a47]'} mb-3 flex items-center gap-2`}>
                    <Palette className="h-5 w-5" />
                    Colours
                  </h3>
                  <div className="space-y-2">
                    {Object.entries(project.colorPalette).map(([name, color]) => (
                      <div key={name} className="flex items-center gap-3">
                        <div 
                          className="w-10 h-10 rounded-lg border border-[#f0eeee]/10"
                          style={{ backgroundColor: color }}
                        ></div>
                        <div>
                          <div className={`text-sm font-medium ${isStudyApp ? 'text-[#f0eeee]' : 'text-[#3f2a47]'} capitalize`}>{name}</div>
                          <div className={`text-xs ${isStudyApp ? 'text-[#f0eeee]/60' : 'text-[#3f2a47]/60'}`}>{color}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Typography */}
                <div>
                  <h3 className={`font-semibold ${isStudyApp ? 'text-[#f0eeee]' : 'text-[#3f2a47]'} mb-3 flex items-center gap-2`}>
                    <Layout className="h-5 w-5" />
                    Typography
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <div className={`text-sm ${isStudyApp ? 'text-[#f0eeee]/60' : 'text-[#3f2a47]/60'}`}>Font</div>
                      <div className={`text-2xl font-bold ${isStudyApp ? 'text-[#f0eeee]' : 'text-[#3f2a47]'}`}>{project.typography.font}</div>
                    </div>
                    <div>
                      <div className={`text-sm ${isStudyApp ? 'text-[#f0eeee]/60' : 'text-[#3f2a47]/60'}`}>Sizes</div>
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {["h1", "h2", "h3", "h4", "p1", "p2", "p3", "p4", "p5", "p6"].map((size) => (
                          <span key={size} className={`text-xs ${isStudyApp ? 'bg-[#f0eeee]/10 text-[#f0eeee]' : 'bg-[#3f2a47]/5 text-[#3f2a47]'} px-2 py-1 rounded border ${isStudyApp ? 'border-[#f0eeee]/20' : 'border-[#3f2a47]/10'}`}>
                            {size}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* UI Components */}
            <div className={`${isStudyApp ? 'bg-[#3d312e] text-[#f0eeee]' : 'bg-white'} rounded-2xl shadow-sm border ${isStudyApp ? 'border-[#f0eeee]/20' : 'border-[#3f2a47]/10'} p-8`}>
              <h3 className={`text-xl font-bold ${isStudyApp ? 'text-[#f0eeee]' : 'text-[#3f2a47]'} mb-4 flex items-center gap-2`}>
                <Layers className="h-5 w-5" />
                UI Components
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {project.components.map((component) => (
                  <div key={component} className={`${isStudyApp ? 'bg-[#f0eeee]/10 text-[#f0eeee] hover:border-[#f0eeee]' : 'bg-[#3f2a47]/5 text-[#3f2a47] hover:border-[#3f2a47]'} rounded-lg px-4 py-3 text-center border ${isStudyApp ? 'border-[#f0eeee]/20' : 'border-[#3f2a47]/10'} transition-colors`}>
                    <span className="text-sm font-medium">{component}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Features */}
            <div className={`${isStudyApp ? 'bg-[#3d312e] text-[#f0eeee]' : 'bg-white'} rounded-2xl shadow-sm border ${isStudyApp ? 'border-[#f0eeee]/20' : 'border-[#3f2a47]/10'} p-8`}>
              <h3 className={`text-xl font-bold ${isStudyApp ? 'text-[#f0eeee]' : 'text-[#3f2a47]'} mb-6 flex items-center gap-2`}>
                <Zap className="h-5 w-5" />
                Key Features
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {project.features.map((feature, index) => (
                  <div key={index} className={`flex items-start gap-3 p-4 rounded-lg ${isStudyApp ? 'bg-[#f0eeee]/10 border-[#f0eeee]/20' : 'bg-[#f9f7f1] border-[#3f2a47]/10'} border`}>
                    <div className={`${isStudyApp ? 'text-[#f0eeee]' : 'text-[#3f2a47]'} mt-1`}>{feature.icon}</div>
                    <div>
                      <h4 className={`font-semibold ${isStudyApp ? 'text-[#f0eeee]' : 'text-[#3f2a47]'}`}>{feature.title}</h4>
                      <p className={`text-sm ${isStudyApp ? 'text-[#f0eeee]/70' : 'text-[#3f2a47]/70'}`}>{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Download CTA */}
            <div className={`${isStudyApp ? 'bg-gradient-to-b from-[#3d312e] via-[#bba2a2] to-[#f0eeee]' : 'bg-gradient-to-r from-[#3f2a47] to-[#5a3d6a]'} rounded-2xl p-8 text-center`}>
              <h3 className={`text-2xl font-bold ${isStudyApp ? 'text-[#3d312e]' : 'text-white'} mb-2`}>Ready to experience {project.title}?</h3>
              <p className={`${isStudyApp ? 'text-[#3d312e]/80' : 'text-white/80'} mb-6`}>Visit the website or download the app today</p>
              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 ${isStudyApp ? 'bg-[#3d312e] text-[#f0eeee] hover:shadow-lg' : 'bg-[#f0eada] text-[#3f2a47] hover:shadow-lg'} px-6 py-3 rounded-lg font-medium transition-all`}
                >
                  <Monitor className="h-5 w-5" />
                  Visit Website
                </a>

              </div>
            </div>
          </div>
        )}

        {/* Code Base Tab */}
        {activeTab === "code" && (
          <div className="space-y-12">
            {/* Tech Stack */}
            <div className={`${isStudyApp ? 'bg-[#3d312e] text-[#f0eeee]' : 'bg-white'} rounded-2xl shadow-sm border ${isStudyApp ? 'border-[#f0eeee]/20' : 'border-[#3f2a47]/10'} p-8`}>
              <h2 className={`text-2xl font-bold ${isStudyApp ? 'text-[#f0eeee]' : 'text-[#3f2a47]'} mb-2`}>Code Base</h2>
              <p className={`${isStudyApp ? 'text-[#f0eeee]/70' : 'text-[#3f2a47]/70'} mb-6`}>Technology stack and implementation details</p>
              
              <div className="mb-8">
                <h3 className={`font-semibold ${isStudyApp ? 'text-[#f0eeee]' : 'text-[#3f2a47]'} mb-3`}>Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span key={tech} className={`${isStudyApp ? 'bg-[#f0eeee]/10 text-[#f0eeee] border-[#f0eeee]/20' : 'bg-[#3f2a47]/5 text-[#3f2a47] border-[#3f2a47]/10'} px-4 py-2 rounded-lg text-sm font-medium border`}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h3 className={`font-semibold ${isStudyApp ? 'text-[#f0eeee]' : 'text-[#3f2a47]'} mb-3 flex items-center gap-2`}>
                    <ExternalLink className="h-5 w-5" />
                    Live Demo
                  </h3>
                  <a 
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 ${isStudyApp ? 'bg-[#f0eeee] text-[#3d312e] hover:bg-[#f0eeee]/90' : 'bg-[#3f2a47] text-[#f0eada] hover:bg-[#3f2a47]/90'} px-4 py-2 rounded-lg transition-all`}
                  >
                    Visit Live Demo
                  </a>
                </div>

              </div>
            </div>

            {/* Code Structure */}
            <div className={`${isStudyApp ? 'bg-[#3d312e] text-[#f0eeee]' : 'bg-white'} rounded-2xl shadow-sm border ${isStudyApp ? 'border-[#f0eeee]/20' : 'border-[#3f2a47]/10'} p-8`}>
              <h3 className={`text-xl font-bold ${isStudyApp ? 'text-[#f0eeee]' : 'text-[#3f2a47]'} mb-4`}>Project Structure</h3>
              <div className={`${isStudyApp ? 'bg-[#f0eeee]/5 border-[#f0eeee]/20' : 'bg-[#3f2a47]/5 border-[#3f2a47]/10'} rounded-xl p-6 overflow-x-auto border`}>
                <pre className={`${isStudyApp ? 'text-[#f0eeee]' : 'text-[#3f2a47]'} text-sm font-mono`}>
                  {projectId === "study-with-me" ? `📁 study-with-me/
├── 📁 app/
│   ├── 📁 api/
│   │   ├── 📁 auth/
│   │   ├── 📁 groups/
│   │   └── 📁 tasks/
│   ├── 📁 components/
│   │   ├── 📁 ui/
│   │   ├── 📁 forms/
│   │   └── 📁 layouts/
│   ├── 📁 hooks/
│   ├── 📁 lib/
│   └── 📁 styles/
├── 📁 public/
├── 📁 types/
├── 📄 package.json
├── 📄 tailwind.config.js
└── 📄 tsconfig.json` : `📁 cooking-recipes/
├── 📁 assets/
│   └── 📁 images/
├── 📁 includes/
│   ├── 📄 config.php
│   ├── 📄 db.php
│   ├── 📄 functions.php
│   └── 📄 session.php
├── 📁 pages/
│   ├── 📄 index.php
│   ├── 📄 about.php
│   ├── 📄 recipes.php
│   ├── 📄 recipe-detail.php
│   ├── 📄 upload.php
│   ├── 📄 profile.php
│   └── 📄 login.php
├── 📁 css/
│   └── 📄 style.css
├── 📁 js/
│   ├── 📄 main.js
│   ├── 📄 slideshow.js
│   └── 📄 form-validation.js
├── 📁 uploads/
├── 📄 navbar.php
├── 📄 footer.php
└── 📄 .htaccess`}
                </pre>
              </div>
            </div>

            {/* Code Snippets */}
            <div className={`${isStudyApp ? 'bg-[#3d312e] text-[#f0eeee]' : 'bg-white'} rounded-2xl shadow-sm border ${isStudyApp ? 'border-[#f0eeee]/20' : 'border-[#3f2a47]/10'} p-8`}>
              <h3 className={`text-xl font-bold ${isStudyApp ? 'text-[#f0eeee]' : 'text-[#3f2a47]'} mb-4`}>Code Examples</h3>
              <div className="space-y-6">
                {projectId === "cooking-recipes" ? (
                  // PHP code examples for cooking recipes
                  <>
                    <div>
                      <h4 className={`font-semibold ${isStudyApp ? 'text-[#f0eeee]' : 'text-[#3f2a47]'} mb-2`}>PHP Database Connection</h4>
                      <div className={`${isStudyApp ? 'bg-[#f0eeee]/5 border-[#f0eeee]/20' : 'bg-[#3f2a47]/5 border-[#3f2a47]/10'} rounded-xl p-6 overflow-x-auto border`}>
                        <pre className={`${isStudyApp ? 'text-[#f0eeee]' : 'text-[#3f2a47]'} text-sm font-mono`}>
{`<?php
// includes/db.php
$host = 'localhost';
$dbname = 'recipe_db';
$username = 'root';
$password = '';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
} catch(PDOException $e) {
    die("Connection failed: " . $e->getMessage());
}

// Get all recipes with user info
function getRecipes($pdo) {
    $stmt = $pdo->query(
        "SELECT r.*, u.username, u.avatar 
         FROM recipes r 
         JOIN users u ON r.user_id = u.id 
         ORDER BY r.created_at DESC"
    );
    return $stmt->fetchAll();
}
?>`}
                        </pre>
                      </div>
                    </div>

                    <div>
                      <h4 className={`font-semibold ${isStudyApp ? 'text-[#f0eeee]' : 'text-[#3f2a47]'} mb-2`}>Recipe Upload Handler</h4>
                      <div className={`${isStudyApp ? 'bg-[#f0eeee]/5 border-[#f0eeee]/20' : 'bg-[#3f2a47]/5 border-[#3f2a47]/10'} rounded-xl p-6 overflow-x-auto border`}>
                        <pre className={`${isStudyApp ? 'text-[#f0eeee]' : 'text-[#3f2a47]'} text-sm font-mono`}>
{`<?php
// pages/upload.php handler
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $title = $_POST['title'];
    $description = $_POST['description'];
    $ingredients = $_POST['ingredients'];
    $instructions = $_POST['instructions'];
    $category = $_POST['category'];
    $user_id = $_SESSION['user_id'];
    
    // Handle image upload
    $target_dir = "uploads/";
    $image_name = time() . '_' . basename($_FILES["image"]["name"]);
    $target_file = $target_dir . $image_name;
    
    if (move_uploaded_file($_FILES["image"]["tmp_name"], $target_file)) {
        $stmt = $pdo->prepare(
            "INSERT INTO recipes 
             (title, description, ingredients, instructions, category, image, user_id) 
             VALUES (?, ?, ?, ?, ?, ?, ?)"
        );
        
        $stmt->execute([$title, $description, $ingredients, $instructions, $category, $image_name, $user_id]);
        header("Location: recipe-detail.php?id=" . $pdo->lastInsertId());
    }
}
?>`}
                        </pre>
                      </div>
                    </div>

                    <div>
                      <h4 className={`font-semibold ${isStudyApp ? 'text-[#f0eeee]' : 'text-[#3f2a47]'} mb-2`}>Vanilla JavaScript - Slideshow</h4>
                      <div className={`${isStudyApp ? 'bg-[#f0eeee]/5 border-[#f0eeee]/20' : 'bg-[#3f2a47]/5 border-[#3f2a47]/10'} rounded-xl p-6 overflow-x-auto border`}>
                        <pre className={`${isStudyApp ? 'text-[#f0eeee]' : 'text-[#3f2a47]'} text-sm font-mono`}>
{`// js/slideshow.js
let slideIndex = 1;
showSlides(slideIndex);

// Auto-advance slides every 5 seconds
setInterval(function() {
    plusSlides(1);
}, 5000);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}`}
                        </pre>
                      </div>
                    </div>
                  </>
                ) : (
                  // React/Next.js code examples for study app
                  <>
                    <div>
                      <h4 className={`font-semibold ${isStudyApp ? 'text-[#f0eeee]' : 'text-[#3f2a47]'} mb-2`}>Component Example</h4>
                      <div className={`${isStudyApp ? 'bg-[#f0eeee]/5 border-[#f0eeee]/20' : 'bg-[#3f2a47]/5 border-[#3f2a47]/10'} rounded-xl p-6 overflow-x-auto border`}>
                        <pre className={`${isStudyApp ? 'text-[#f0eeee]' : 'text-[#3f2a47]'} text-sm font-mono`}>
{`import { useState } from 'react';
import { Clock, Play, Pause } from 'lucide-react';

export const PomodoroTimer = () => {
  const [time, setTime] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <div className="flex items-center gap-2 mb-4">
        <Clock className="h-6 w-6 text-[#3d312e]" />
        <h3 className="text-xl font-bold">Focus Timer</h3>
      </div>
      
      <div className="text-4xl font-bold text-center mb-4">
        {Math.floor(time / 60)}:{String(time % 60).padStart(2, '0')}
      </div>
      
      <div className="flex justify-center gap-4">
        <button 
          onClick={() => setIsRunning(!isRunning)}
          className="bg-[#3d312e] text-[#f0eeee] p-3 rounded-full hover:bg-[#3d312e]/90"
        >
          {isRunning ? <Pause /> : <Play />}
        </button>
      </div>
    </div>
  );
};`}
                        </pre>
                      </div>
                    </div>

                    <div>
                      <h4 className={`font-semibold ${isStudyApp ? 'text-[#f0eeee]' : 'text-[#3f2a47]'} mb-2`}>API Route Example</h4>
                      <div className={`${isStudyApp ? 'bg-[#f0eeee]/5 border-[#f0eeee]/20' : 'bg-[#3f2a47]/5 border-[#3f2a47]/10'} rounded-xl p-6 overflow-x-auto border`}>
                        <pre className={`${isStudyApp ? 'text-[#f0eeee]' : 'text-[#3f2a47]'} text-sm font-mono`}>
{`import { NextResponse } from 'next/server';
import { db } from '@/lib/firebase';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { userId, groupId } = body;
    
    const groupRef = db.collection('groups').doc(groupId);
    await groupRef.update({
      members: admin.firestore.FieldValue.arrayUnion(userId)
    });
    
    return NextResponse.json({ 
      success: true, 
      message: 'Joined group successfully' 
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to join group' },
      { status: 500 }
    );
  }
}`}
                        </pre>
                      </div>
                    </div>

                    <div>
                      <h4 className={`font-semibold ${isStudyApp ? 'text-[#f0eeee]' : 'text-[#3f2a47]'} mb-2`}>TailwindCSS Configuration</h4>
                      <div className={`${isStudyApp ? 'bg-[#f0eeee]/5 border-[#f0eeee]/20' : 'bg-[#3f2a47]/5 border-[#3f2a47]/10'} rounded-xl p-6 overflow-x-auto border`}>
                        <pre className={`${isStudyApp ? 'text-[#f0eeee]' : 'text-[#3f2a47]'} text-sm font-mono`}>
{`// tailwind.config.js
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'study-primary': '#3d312e',
        'study-secondary': '#f0eeee',
        'study-accent': '#bba2a2',
      },
      fontFamily: {
        'crimson': ['Crimson Text', 'serif'],
      },
    },
  },
  plugins: [],
};`}
                        </pre>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Deployment Info */}
            <div className={`${isStudyApp ? 'bg-[#3d312e] text-[#f0eeee]' : 'bg-white'} rounded-2xl shadow-sm border ${isStudyApp ? 'border-[#f0eeee]/20' : 'border-[#3f2a47]/10'} p-8`}>
              <h3 className={`text-xl font-bold ${isStudyApp ? 'text-[#f0eeee]' : 'text-[#3f2a47]'} mb-4`}>Deployment</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {projectId === "cooking-recipes" ? (
                  // PHP deployment info
                  <>
                    <div className={`${isStudyApp ? 'bg-[#f0eeee]/5 border-[#f0eeee]/20' : 'bg-[#f9f7f1] border-[#3f2a47]/10'} rounded-xl p-4 border`}>
                      <h4 className={`font-semibold ${isStudyApp ? 'text-[#f0eeee]' : 'text-[#3f2a47]'} mb-2`}>Server Requirements</h4>
                      <div className={`text-sm ${isStudyApp ? 'text-[#f0eeee]/70' : 'text-[#3f2a47]/70'} font-mono`}>PHP 7.4+ / MySQL 5.7+</div>
                    </div>
                    <div className={`${isStudyApp ? 'bg-[#f0eeee]/5 border-[#f0eeee]/20' : 'bg-[#f9f7f1] border-[#3f2a47]/10'} rounded-xl p-4 border`}>
                      <h4 className={`font-semibold ${isStudyApp ? 'text-[#f0eeee]' : 'text-[#3f2a47]'} mb-2`}>Setup Instructions</h4>
                      <div className={`text-sm ${isStudyApp ? 'text-[#f0eeee]/70' : 'text-[#3f2a47]/70'} font-mono`}>Import database.sql</div>
                    </div>
                    <div className={`${isStudyApp ? 'bg-[#f0eeee]/5 border-[#f0eeee]/20' : 'bg-[#f9f7f1] border-[#3f2a47]/10'} rounded-xl p-4 border`}>
                      <h4 className={`font-semibold ${isStudyApp ? 'text-[#f0eeee]' : 'text-[#3f2a47]'} mb-2`}>Configuration</h4>
                      <div className={`text-sm ${isStudyApp ? 'text-[#f0eeee]/70' : 'text-[#3f2a47]/70'} font-mono`}>Update db.php credentials</div>
                    </div>
                    <div className={`${isStudyApp ? 'bg-[#f0eeee]/5 border-[#f0eeee]/20' : 'bg-[#f9f7f1] border-[#3f2a47]/10'} rounded-xl p-4 border`}>
                      <h4 className={`font-semibold ${isStudyApp ? 'text-[#f0eeee]' : 'text-[#3f2a47]'} mb-2`}>Web Server</h4>
                      <div className={`text-sm ${isStudyApp ? 'text-[#f0eeee]/70' : 'text-[#3f2a47]/70'} font-mono`}>Apache / Nginx + PHP</div>
                    </div>
                  </>
                ) : (
                  // Next.js deployment info
                  <>
                    <div className={`${isStudyApp ? 'bg-[#f0eeee]/5 border-[#f0eeee]/20' : 'bg-[#f9f7f1] border-[#3f2a47]/10'} rounded-xl p-4 border`}>
                      <h4 className={`font-semibold ${isStudyApp ? 'text-[#f0eeee]' : 'text-[#3f2a47]'} mb-2`}>Production Build</h4>
                      <div className={`text-sm ${isStudyApp ? 'text-[#f0eeee]/70' : 'text-[#3f2a47]/70'} font-mono`}>npm run build</div>
                    </div>
                    <div className={`${isStudyApp ? 'bg-[#f0eeee]/5 border-[#f0eeee]/20' : 'bg-[#f9f7f1] border-[#3f2a47]/10'} rounded-xl p-4 border`}>
                      <h4 className={`font-semibold ${isStudyApp ? 'text-[#f0eeee]' : 'text-[#3f2a47]'} mb-2`}>Start Server</h4>
                      <div className={`text-sm ${isStudyApp ? 'text-[#f0eeee]/70' : 'text-[#3f2a47]/70'} font-mono`}>npm start</div>
                    </div>
                    <div className={`${isStudyApp ? 'bg-[#f0eeee]/5 border-[#f0eeee]/20' : 'bg-[#f9f7f1] border-[#3f2a47]/10'} rounded-xl p-4 border`}>
                      <h4 className={`font-semibold ${isStudyApp ? 'text-[#f0eeee]' : 'text-[#3f2a47]'} mb-2`}>Environment Variables</h4>
                      <div className={`text-sm ${isStudyApp ? 'text-[#f0eeee]/70' : 'text-[#3f2a47]/70'} font-mono`}>.env.local</div>
                    </div>
                    <div className={`${isStudyApp ? 'bg-[#f0eeee]/5 border-[#f0eeee]/20' : 'bg-[#f9f7f1] border-[#3f2a47]/10'} rounded-xl p-4 border`}>
                      <h4 className={`font-semibold ${isStudyApp ? 'text-[#f0eeee]' : 'text-[#3f2a47]'} mb-2`}>Docker Support</h4>
                      <div className={`text-sm ${isStudyApp ? 'text-[#f0eeee]/70' : 'text-[#3f2a47]/70'} font-mono`}>docker-compose up</div>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Contributing */}
            <div className={`${isStudyApp ? 'bg-[#3d312e] text-[#f0eeee]' : 'bg-white'} rounded-2xl shadow-sm border ${isStudyApp ? 'border-[#f0eeee]/20' : 'border-[#3f2a47]/10'} p-8`}>
              <h3 className={`text-xl font-bold ${isStudyApp ? 'text-[#f0eeee]' : 'text-[#3f2a47]'} mb-4`}>Contributing</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className={`w-6 h-6 rounded-full ${isStudyApp ? 'bg-[#f0eeee]/20' : 'bg-[#3f2a47]/10'} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                    <span className={`text-xs font-bold ${isStudyApp ? 'text-[#f0eeee]' : 'text-[#3f2a47]'}`}>1</span>
                  </div>
                  <div>
                    <h4 className={`font-semibold ${isStudyApp ? 'text-[#f0eeee]' : 'text-[#3f2a47]'}`}>Fork the Repository</h4>
                    <p className={`text-sm ${isStudyApp ? 'text-[#f0eeee]/70' : 'text-[#3f2a47]/70'}`}>Create your own fork of the project</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className={`w-6 h-6 rounded-full ${isStudyApp ? 'bg-[#f0eeee]/20' : 'bg-[#3f2a47]/10'} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                    <span className={`text-xs font-bold ${isStudyApp ? 'text-[#f0eeee]' : 'text-[#3f2a47]'}`}>2</span>
                  </div>
                  <div>
                    <h4 className={`font-semibold ${isStudyApp ? 'text-[#f0eeee]' : 'text-[#3f2a47]'}`}>Create Feature Branch</h4>
                    <p className={`text-sm ${isStudyApp ? 'text-[#f0eeee]/70' : 'text-[#3f2a47]/70'}`}>git checkout -b feature/your-feature</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className={`w-6 h-6 rounded-full ${isStudyApp ? 'bg-[#f0eeee]/20' : 'bg-[#3f2a47]/10'} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                    <span className={`text-xs font-bold ${isStudyApp ? 'text-[#f0eeee]' : 'text-[#3f2a47]'}`}>3</span>
                  </div>
                  <div>
                    <h4 className={`font-semibold ${isStudyApp ? 'text-[#f0eeee]' : 'text-[#3f2a47]'}`}>Submit Pull Request</h4>
                    <p className={`text-sm ${isStudyApp ? 'text-[#f0eeee]/70' : 'text-[#3f2a47]/70'}`}>Push and open a PR to the main branch</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className={`${isStudyApp ? 'bg-[#3d312e] text-[#f0eeee] border-[#f0eeee]/10' : 'bg-[#3f2a47] text-[#f0eada] border-[#f0eada]/10'} py-8 px-4 border-t`}>
        <div className="container mx-auto max-w-7xl text-center">
          <p className={`${isStudyApp ? 'text-[#f0eeee]/70' : 'text-[#f0eada]/70'} text-sm`}>© 2024 Pann Ei Khin. Built with 💻 Passion for Computing &amp; AI</p>
        </div>
      </footer>
    </div>
  );
}