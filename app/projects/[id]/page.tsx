// app/projects/[id]/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  ArrowLeft,
  ExternalLink,
  Smartphone,
  Monitor,
  Download,
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
    image: "📚",
    stats: {
      downloads: "1.4M+",
      users: "1.35M+",
      rating: "4.8",
      countries: "120+"
    },
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
    screenshots: [
      { 
        id: 1, 
        label: "Dashboard",
        type: "desktop"
      },
      { 
        id: 2, 
        label: "Timer",
        type: "desktop" 
      },
      { 
        id: 3, 
        label: "Mobile View",
        type: "mobile" 
      },
    ],
    colorPalette: {
      primary: "#3f2a47",
      secondary: "#f0eada",
      accent: "#6C63FF",
      light: "#f9f7f1",
      dark: "#2d1b3a"
    },
    typography: {
      font: "Inter",
      heading: "Inter",
      body: "Inter",
    },
    components: [
      "Navigation Bar",
      "Hero Section",
      "Feature Cards",
      "Timer Widget",
      "User Dashboard",
      "Study Groups",
      "Progress Charts",
      "Achievement Badges"
    ],
    demo: "https://study-with-me-demo.com",
    downloadLink: "https://apps.apple.com/app/study-with-me"
  },
  "cooking-recipes": {
    id: "cooking-recipes",
    title: "Cooking Recipes Sharing",
    subtitle: "Community Recipe Platform",
    description: "A vibrant community platform where food lovers share, discover, and rate delicious recipes from around the world.",
    longDescription: "Cooking Recipes Sharing is a dynamic platform that connects food enthusiasts worldwide. Users can create profiles, upload their favorite recipes with photos, explore diverse cuisines, and engage with a passionate community of home cooks and professional chefs.",
    category: "Web Development",
    image: "🍳",
    stats: {
      downloads: "0.35M+",
      users: "1.43M+",
      rating: "4.9",
      countries: "80+"
    },
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
    techStack: ["React", "Node.js", "MongoDB", "Express", "Cloudinary", "JWT"],
    screenshots: [
      { 
        id: 1, 
        label: "Recipe Feed",
        type: "desktop" 
      },
      { 
        id: 2, 
        label: "Recipe Detail",
        type: "desktop" 
      },
      { 
        id: 3, 
        label: "Mobile View",
        type: "mobile" 
      },
    ],
    colorPalette: {
      primary: "#3f2a47",
      secondary: "#f0eada",
      accent: "#FF6B35",
      light: "#f9f7f1",
      dark: "#2d1b3a"
    },
    typography: {
      font: "Inter",
      heading: "Inter",
      body: "Inter",
    },
    components: [
      "Recipe Feed",
      "Recipe Detail View",
      "Upload Form",
      "Search & Filters",
      "User Profiles",
      "Rating System",
      "Comment Section",
      "Ingredient Calculator"
    ],
    demo: "https://recipe-sharing-demo.com",
    downloadLink: "https://play.google.com/store/apps/recipe-sharing"
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
      <div className="min-h-screen bg-[#f9f7f1] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-[#3f2a47]">Project not found</h2>
          <Link href="/projects" className="text-[#3f2a47]/70 hover:text-[#3f2a47] mt-4 inline-block">
            ← Back to projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f9f7f1]">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[#f0eada]/95 backdrop-blur-md border-b border-[#3f2a47]/20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex items-center justify-between h-16">
            <Link href="/projects" className="flex items-center gap-2 text-[#3f2a47] hover:text-[#3f2a47]/70 transition-colors">
              <ArrowLeft className="h-5 w-5" />
              <span className="font-medium">Back</span>
            </Link>
            
            <div className="hidden md:flex items-center gap-6">
              <button
                onClick={() => setActiveTab("ui")}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                  activeTab === "ui" 
                    ? "bg-[#3f2a47] text-[#f0eada]" 
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
                    ? "bg-[#3f2a47] text-[#f0eada]" 
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
                className="p-2 rounded-lg hover:bg-[#3f2a47]/10 transition-colors"
              >
                <ExternalLink className="h-5 w-5 text-[#3f2a47]" />
              </a>
              <button
                onClick={() => setShowMobileMenu(!showMobileMenu)}
                className="md:hidden p-2 rounded-lg hover:bg-[#3f2a47]/10 transition-colors"
              >
                <Menu className="h-5 w-5 text-[#3f2a47]" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {showMobileMenu && (
        <div className="md:hidden fixed inset-0 z-40 bg-[#f0eada]">
          <div className="flex flex-col items-center justify-center h-full gap-6">
            <button
              onClick={() => {
                setActiveTab("ui");
                setShowMobileMenu(false);
              }}
              className="flex items-center gap-3 px-6 py-3 rounded-lg hover:bg-[#3f2a47]/10 transition-colors"
            >
              <Eye className="h-6 w-6 text-[#3f2a47]" />
              <span className="text-lg font-medium text-[#3f2a47]">UI Design</span>
            </button>
            <button
              onClick={() => {
                setActiveTab("code");
                setShowMobileMenu(false);
              }}
              className="flex items-center gap-3 px-6 py-3 rounded-lg hover:bg-[#3f2a47]/10 transition-colors"
            >
              <Terminal className="h-6 w-6 text-[#3f2a47]" />
              <span className="text-lg font-medium text-[#3f2a47]">Code Base</span>
            </button>
            <button
              onClick={() => setShowMobileMenu(false)}
              className="absolute top-4 right-4 p-2"
            >
              <X className="h-6 w-6 text-[#3f2a47]" />
            </button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#3f2a47] to-[#5a3d6a] text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#f0eada] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#f0eada] rounded-full blur-3xl"></div>
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
                  className="inline-flex items-center gap-2 bg-[#f0eada] text-[#3f2a47] px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all"
                >
                  <ExternalLink className="h-5 w-5" />
                  Live Demo
                </a>
                <a 
                  href={project.downloadLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white/20 text-white px-6 py-3 rounded-lg font-medium hover:bg-white/30 transition-all border border-white/30"
                >
                  <Download className="h-5 w-5" />
                  Download App
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
                <div className="text-3xl font-bold">{project.stats.downloads}</div>
                <div className="text-white/70 text-sm">Total Downloads</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
                <div className="text-3xl font-bold">{project.stats.users}</div>
                <div className="text-white/70 text-sm">Active Users</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
                <div className="text-3xl font-bold">⭐ {project.stats.rating}</div>
                <div className="text-white/70 text-sm">User Rating</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
                <div className="text-3xl font-bold">{project.stats.countries}</div>
                <div className="text-white/70 text-sm">Countries</div>
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
            <div className="bg-white rounded-2xl shadow-sm border border-[#3f2a47]/10 p-8">
              <h2 className="text-2xl font-bold text-[#3f2a47] mb-2">Style Guide</h2>
              <p className="text-[#3f2a47]/70 mb-6">Complete UI design system for {project.title}</p>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* Color Palette */}
                <div>
                  <h3 className="font-semibold text-[#3f2a47] mb-3 flex items-center gap-2">
                    <Palette className="h-5 w-5" />
                    Colours
                  </h3>
                  <div className="space-y-2">
                    {Object.entries(project.colorPalette).map(([name, color]) => (
                      <div key={name} className="flex items-center gap-3">
                        <div 
                          className="w-10 h-10 rounded-lg border border-[#3f2a47]/10"
                          style={{ backgroundColor: color }}
                        ></div>
                        <div>
                          <div className="text-sm font-medium text-[#3f2a47] capitalize">{name}</div>
                          <div className="text-xs text-[#3f2a47]/60">{color}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Typography */}
                <div>
                  <h3 className="font-semibold text-[#3f2a47] mb-3 flex items-center gap-2">
                    <Layout className="h-5 w-5" />
                    Typography
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <div className="text-sm text-[#3f2a47]/60">Font</div>
                      <div className="text-2xl font-bold text-[#3f2a47]">{project.typography.font}</div>
                    </div>
                    <div>
                      <div className="text-sm text-[#3f2a47]/60">Sizes</div>
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {["h1", "h2", "h3", "h4", "p1", "p2", "p3", "p4", "p5", "p6"].map((size) => (
                          <span key={size} className="text-xs bg-[#3f2a47]/5 px-2 py-1 rounded text-[#3f2a47] border border-[#3f2a47]/10">
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
            <div className="bg-white rounded-2xl shadow-sm border border-[#3f2a47]/10 p-8">
              <h3 className="text-xl font-bold text-[#3f2a47] mb-4 flex items-center gap-2">
                <Layers className="h-5 w-5" />
                UI Components
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {project.components.map((component) => (
                  <div key={component} className="bg-[#3f2a47]/5 rounded-lg px-4 py-3 text-center border border-[#3f2a47]/10 hover:border-[#3f2a47] transition-colors">
                    <span className="text-sm font-medium text-[#3f2a47]">{component}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Screenshots - UI Style */}
            <div className="bg-white rounded-2xl shadow-sm border border-[#3f2a47]/10 p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-[#3f2a47] flex items-center gap-2">
                  <Monitor className="h-5 w-5" />
                  Website Previews
                </h3>
                <div className="flex items-center gap-3 text-sm text-[#3f2a47]/60">
                  <span className="flex items-center gap-1">
                    <Monitor className="h-4 w-4" /> Desktop
                  </span>
                  <span className="flex items-center gap-1">
                    <Smartphone className="h-4 w-4" /> Mobile
                  </span>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {project.screenshots.map((screenshot) => (
                  <div 
                    key={screenshot.id} 
                    className="group cursor-pointer"
                  >
                    <div className={`bg-[#f9f7f1] rounded-xl p-4 border border-[#3f2a47]/10 hover:shadow-lg transition-all ${
                      screenshot.type === "mobile" ? "max-w-[280px] mx-auto" : ""
                    }`}>
                      <div className={`relative bg-gradient-to-br from-[#3f2a47]/5 to-[#3f2a47]/10 rounded-lg flex items-center justify-center mb-3 overflow-hidden ${
                        screenshot.type === "mobile" 
                          ? "aspect-[9/16] max-h-[400px]" 
                          : "aspect-[16/9]"
                      }`}>
                        {/* Mock website preview */}
                        <div className={`absolute inset-0 flex items-center justify-center bg-white`}>
                          <div className={`${
                            screenshot.type === "mobile" 
                              ? "w-full h-full p-4 flex flex-col items-center justify-center" 
                              : "w-full h-full p-6 flex flex-col items-center justify-center"
                          }`}>
                            {/* Browser chrome simulation */}
                            {screenshot.type === "desktop" && (
                              <div className="absolute top-0 left-0 right-0 h-8 bg-[#f0eada] flex items-center px-3 gap-2">
                                <div className="flex gap-1.5">
                                  <div className="w-3 h-3 rounded-full bg-[#FF6B6B]"></div>
                                  <div className="w-3 h-3 rounded-full bg-[#FFD93D]"></div>
                                  <div className="w-3 h-3 rounded-full bg-[#6BCB77]"></div>
                                </div>
                                <div className="flex-1 mx-4">
                                  <div className="h-4 bg-[#3f2a47]/10 rounded-full w-3/4 mx-auto"></div>
                                </div>
                              </div>
                            )}
                            
                            {/* Content preview */}
                            <div className={`${
                              screenshot.type === "mobile" 
                                ? "mt-4 w-full space-y-3" 
                                : "mt-8 w-full space-y-4"
                            }`}>
                              <div className={`${
                                screenshot.type === "mobile" 
                                  ? "h-6 w-3/4 bg-[#3f2a47]/30 rounded mx-auto" 
                                  : "h-8 w-1/2 bg-[#3f2a47]/30 rounded mx-auto"
                              }`}></div>
                              <div className="space-y-2">
                                <div className={`${
                                  screenshot.type === "mobile" 
                                    ? "h-3 w-full bg-[#3f2a47]/10 rounded" 
                                    : "h-4 w-full bg-[#3f2a47]/10 rounded"
                                }`}></div>
                                <div className={`${
                                  screenshot.type === "mobile" 
                                    ? "h-3 w-5/6 bg-[#3f2a47]/10 rounded" 
                                    : "h-4 w-5/6 bg-[#3f2a47]/10 rounded"
                                }`}></div>
                                <div className={`${
                                  screenshot.type === "mobile" 
                                    ? "h-3 w-4/6 bg-[#3f2a47]/10 rounded" 
                                    : "h-4 w-4/6 bg-[#3f2a47]/10 rounded"
                                }`}></div>
                              </div>
                              <div className="flex gap-2 justify-center mt-2">
                                <div className={`${
                                  screenshot.type === "mobile" 
                                    ? "h-6 w-16 bg-[#3f2a47] rounded" 
                                    : "h-8 w-20 bg-[#3f2a47] rounded"
                                }`}></div>
                                <div className={`${
                                  screenshot.type === "mobile" 
                                    ? "h-6 w-16 bg-[#3f2a47]/20 rounded" 
                                    : "h-8 w-20 bg-[#3f2a47]/20 rounded"
                                }`}></div>
                              </div>
                            </div>
                            
                            {/* Mobile notch simulation */}
                            {screenshot.type === "mobile" && (
                              <>
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-5 bg-black rounded-b-xl"></div>
                                <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1/4 h-1 bg-[#3f2a47]/20 rounded-full"></div>
                              </>
                            )}
                          </div>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-[#3f2a47]/60">
                          <div className="text-white text-sm font-medium flex items-center gap-2">
                            <Eye className="h-4 w-4" />
                            Preview
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-[#3f2a47]">{screenshot.label}</p>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          screenshot.type === "desktop" 
                            ? "bg-[#3f2a47]/10 text-[#3f2a47]" 
                            : "bg-[#3f2a47]/20 text-[#3f2a47]"
                        }`}>
                          {screenshot.type === "desktop" ? "Desktop" : "Mobile"}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Features */}
            <div className="bg-white rounded-2xl shadow-sm border border-[#3f2a47]/10 p-8">
              <h3 className="text-xl font-bold text-[#3f2a47] mb-6 flex items-center gap-2">
                <Zap className="h-5 w-5" />
                Key Features
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {project.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-[#f9f7f1] border border-[#3f2a47]/10">
                    <div className="text-[#3f2a47] mt-1">{feature.icon}</div>
                    <div>
                      <h4 className="font-semibold text-[#3f2a47]">{feature.title}</h4>
                      <p className="text-sm text-[#3f2a47]/70">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Download CTA */}
            <div className="bg-gradient-to-r from-[#3f2a47] to-[#5a3d6a] rounded-2xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-2">Ready to experience {project.title}?</h3>
              <p className="text-white/80 mb-6">Visit the website or download the app today</p>
              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#f0eada] text-[#3f2a47] px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all"
                >
                  <Monitor className="h-5 w-5" />
                  Visit Website
                </a>
                <a 
                  href={project.downloadLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white/20 text-white px-6 py-3 rounded-lg font-medium hover:bg-white/30 transition-all border border-white/30"
                >
                  <Download className="h-5 w-5" />
                  Download App
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Code Base Tab */}
        {activeTab === "code" && (
          <div className="space-y-12">
            {/* Tech Stack */}
            <div className="bg-white rounded-2xl shadow-sm border border-[#3f2a47]/10 p-8">
              <h2 className="text-2xl font-bold text-[#3f2a47] mb-2">Code Base</h2>
              <p className="text-[#3f2a47]/70 mb-6">Technology stack and implementation details</p>
              
              <div className="mb-8">
                <h3 className="font-semibold text-[#3f2a47] mb-3">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="bg-[#3f2a47]/5 px-4 py-2 rounded-lg text-sm font-medium text-[#3f2a47] border border-[#3f2a47]/10">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-[#3f2a47] mb-3 flex items-center gap-2">
                    <ExternalLink className="h-5 w-5" />
                    Live Demo
                  </h3>
                  <a 
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#3f2a47] text-[#f0eada] px-4 py-2 rounded-lg hover:bg-[#3f2a47]/90 transition-all"
                  >
                    Visit Live Demo
                  </a>
                </div>
                <div>
                  <h3 className="font-semibold text-[#3f2a47] mb-3 flex items-center gap-2">
                    <Download className="h-5 w-5" />
                    Download
                  </h3>
                  <a 
                    href={project.downloadLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#3f2a47] text-[#f0eada] px-4 py-2 rounded-lg hover:bg-[#3f2a47]/90 transition-all"
                  >
                    Download App
                  </a>
                </div>
              </div>
            </div>

            {/* Code Structure */}
            <div className="bg-white rounded-2xl shadow-sm border border-[#3f2a47]/10 p-8">
              <h3 className="text-xl font-bold text-[#3f2a47] mb-4">Project Structure</h3>
              <div className="bg-[#3f2a47]/5 rounded-xl p-6 overflow-x-auto border border-[#3f2a47]/10">
                <pre className="text-[#3f2a47] text-sm font-mono">
                  {project.id === "study-with-me" ? `📁 study-with-me/
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
├── 📁 client/
│   ├── 📁 src/
│   │   ├── 📁 components/
│   │   ├── 📁 pages/
│   │   ├── 📁 hooks/
│   │   └── 📁 utils/
│   └── 📄 package.json
├── 📁 server/
│   ├── 📁 models/
│   ├── 📁 routes/
│   ├── 📁 controllers/
│   ├── 📁 middleware/
│   └── 📄 server.js
├── 📁 database/
└── 📄 docker-compose.yml`}
                </pre>
              </div>
            </div>

            {/* Code Snippets */}
            <div className="bg-white rounded-2xl shadow-sm border border-[#3f2a47]/10 p-8">
              <h3 className="text-xl font-bold text-[#3f2a47] mb-4">Code Examples</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-[#3f2a47] mb-2">Component Example</h4>
                  <div className="bg-[#3f2a47]/5 rounded-xl p-6 overflow-x-auto border border-[#3f2a47]/10">
                    <pre className="text-[#3f2a47] text-sm font-mono">
{`import { useState } from 'react';
import { Clock, Play, Pause } from 'lucide-react';

export const PomodoroTimer = () => {
  const [time, setTime] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <div className="flex items-center gap-2 mb-4">
        <Clock className="h-6 w-6 text-[#3f2a47]" />
        <h3 className="text-xl font-bold">Focus Timer</h3>
      </div>
      
      <div className="text-4xl font-bold text-center mb-4">
        {Math.floor(time / 60)}:{String(time % 60).padStart(2, '0')}
      </div>
      
      <div className="flex justify-center gap-4">
        <button 
          onClick={() => setIsRunning(!isRunning)}
          className="bg-[#3f2a47] text-[#f0eada] p-3 rounded-full hover:bg-[#3f2a47]/90"
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
                  <h4 className="font-semibold text-[#3f2a47] mb-2">API Route Example</h4>
                  <div className="bg-[#3f2a47]/5 rounded-xl p-6 overflow-x-auto border border-[#3f2a47]/10">
                    <pre className="text-[#3f2a47] text-sm font-mono">
{`import { NextResponse } from 'next/server';
import { db } from '@/lib/firebase';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { userId, groupId } = body;
    
    // Add user to study group
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
              </div>
            </div>

            {/* Deployment Info */}
            <div className="bg-white rounded-2xl shadow-sm border border-[#3f2a47]/10 p-8">
              <h3 className="text-xl font-bold text-[#3f2a47] mb-4">Deployment</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-[#f9f7f1] rounded-xl p-4 border border-[#3f2a47]/10">
                  <h4 className="font-semibold text-[#3f2a47] mb-2">Production Build</h4>
                  <div className="text-sm text-[#3f2a47]/70 font-mono">npm run build</div>
                </div>
                <div className="bg-[#f9f7f1] rounded-xl p-4 border border-[#3f2a47]/10">
                  <h4 className="font-semibold text-[#3f2a47] mb-2">Start Server</h4>
                  <div className="text-sm text-[#3f2a47]/70 font-mono">npm start</div>
                </div>
                <div className="bg-[#f9f7f1] rounded-xl p-4 border border-[#3f2a47]/10">
                  <h4 className="font-semibold text-[#3f2a47] mb-2">Environment Variables</h4>
                  <div className="text-sm text-[#3f2a47]/70 font-mono">.env.local</div>
                </div>
                <div className="bg-[#f9f7f1] rounded-xl p-4 border border-[#3f2a47]/10">
                  <h4 className="font-semibold text-[#3f2a47] mb-2">Docker Support</h4>
                  <div className="text-sm text-[#3f2a47]/70 font-mono">docker-compose up</div>
                </div>
              </div>
            </div>

            {/* Contributing */}
            <div className="bg-white rounded-2xl shadow-sm border border-[#3f2a47]/10 p-8">
              <h3 className="text-xl font-bold text-[#3f2a47] mb-4">Contributing</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#3f2a47]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-[#3f2a47]">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#3f2a47]">Fork the Repository</h4>
                    <p className="text-sm text-[#3f2a47]/70">Create your own fork of the project</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#3f2a47]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-[#3f2a47]">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#3f2a47]">Create Feature Branch</h4>
                    <p className="text-sm text-[#3f2a47]/70">git checkout -b feature/your-feature</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#3f2a47]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-[#3f2a47]">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#3f2a47]">Submit Pull Request</h4>
                    <p className="text-sm text-[#3f2a47]/70">Push and open a PR to the main branch</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-[#3f2a47] text-[#f0eada] py-8 px-4 border-t border-[#f0eada]/10">
        <div className="container mx-auto max-w-7xl text-center">
          <p className="text-[#f0eada]/70 text-sm">© 2024 Pann Ei Khin. Built with 💻 Passion for Computing &amp; AI</p>
        </div>
      </footer>
    </div>
  );
}