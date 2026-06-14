// app/projects/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ExternalLink,
  Code2,
  Star,
} from "lucide-react";

export default function ProjectsPage() {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "AI-Powered Resume Screener",
      description: "An intelligent system that automatically screens and ranks resumes based on job descriptions using natural language processing.",
      longDescription: "Built with Python and scikit-learn, this tool uses TF-IDF vectorization and cosine similarity to match resumes with job descriptions. Features include PDF parsing, keyword extraction, and a Streamlit dashboard for visualization.",
      tags: ["Python", "NLP", "Machine Learning", "Streamlit"],
      category: "ai",
      image: "🤖",
      github: "https://github.com/",
      demo: "https://demo.com",
      featured: true
    },
    {
      id: 2,
      title: "Student Performance Analytics",
      description: "Data analysis dashboard for tracking and predicting student academic performance using historical data.",
      longDescription: "Developed using Pandas, Matplotlib, and Scikit-learn to analyze factors affecting student performance. Includes interactive visualizations and predictive models for early intervention.",
      tags: ["Python", "Pandas", "Data Visualization", "Jupyter"],
      category: "data",
      image: "📊",
      github: "https://github.com/",
      demo: "https://demo.com",
      featured: true
    },
    {
      id: 3,
      title: "Burmese Sign Language Recognition",
      description: "Computer vision system for recognizing Burmese sign language gestures in real-time.",
      longDescription: "Using TensorFlow and OpenCV, this project achieves 92% accuracy in recognizing 20+ common Burmese sign language gestures. Includes a web interface for real-time testing.",
      tags: ["TensorFlow", "OpenCV", "Computer Vision", "Deep Learning"],
      category: "ai",
      image: "✋",
      github: "https://github.com/",
      featured: false
    },
    {
      id: 4,
      title: "Cloud Cost Optimizer",
      description: "Tool for analyzing and optimizing cloud infrastructure costs across AWS and Azure.",
      longDescription: "Built with Python and Boto3, this tool analyzes cloud usage patterns and provides recommendations for cost savings. Includes automated reporting and alerting system.",
      tags: ["AWS", "Azure", "Python", "Cloud Computing"],
      category: "cloud",
      image: "☁️",
      github: "https://github.com/",
      demo: "https://demo.com",
      featured: false
    },
    {
      id: 5,
      title: "E-Learning Platform API",
      description: "RESTful API backend for an e-learning platform with course management and user authentication.",
      longDescription: "Built with Node.js, Express, and MongoDB. Features include JWT authentication, course enrollment system, quiz management, and grade tracking.",
      tags: ["Node.js", "Express", "MongoDB", "REST API"],
      category: "web",
      image: "🎓",
      github: "https://github.com/",
      featured: true
    },
    {
      id: 6,
      title: "Cybersecurity Threat Detector",
      description: "Network intrusion detection system using machine learning algorithms.",
      longDescription: "Implemented using Python and Scikit-learn with the NSL-KDD dataset. Achieves 95% accuracy in detecting various types of network attacks.",
      tags: ["Python", "Cybersecurity", "ML", "Network"],
      category: "security",
      image: "🛡️",
      github: "https://github.com/",
      featured: false
    }
  ];

  const categories = [
    { id: "all", name: "All Projects", icon: "🎯" },
    { id: "ai", name: "AI & ML", icon: "🧠" },
    { id: "data", name: "Data Science", icon: "📊" },
    { id: "web", name: "Web Dev", icon: "🌐" },
    { id: "cloud", name: "Cloud", icon: "☁️" },
    { id: "security", name: "Security", icon: "🔒" }
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(p => p.category === filter);

  const featuredProjects = projects.filter(p => p.featured);

  return (
    <div className="min-h-screen bg-[#f0eada]">
      {/* Navigation Header */}
      <div className="sticky top-0 z-50 bg-[#f0eada]/95 backdrop-blur-md border-b border-[#3f2a47]/20">
        <div className="container mx-auto px-4 py-4 max-w-6xl">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-[#3f2a47] hover:text-[#3f2a47]/70 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            Back to Portfolio
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="px-4 py-16 text-center">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-6 inline-flex items-center gap-2 bg-[#3f2a47]/10 px-4 py-2 rounded-full">
            <Code2 className="h-5 w-5 text-[#3f2a47]" />
            <span className="text-sm font-medium text-[#3f2a47]">My Work</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-[#3f2a47] mb-4">
            Projects &amp; Case Studies
          </h1>
          <p className="text-lg text-[#3f2a47]/70 max-w-2xl mx-auto">
            A collection of my work in data science, AI, and software development. 
            Each project represents a unique challenge and solution.
          </p>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="px-4 py-8">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-[#3f2a47] flex items-center gap-2">
              <Star className="h-6 w-6 text-[#3f2a47]" />
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-[#3f2a47] mt-2 rounded-full" />
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {featuredProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-2xl shadow-sm border border-[#3f2a47]/10 overflow-hidden hover:shadow-md transition-all">
                <div className="p-6">
                  <div className="text-6xl mb-4">{project.image}</div>
                  <h3 className="text-xl font-bold text-[#3f2a47] mb-2">{project.title}</h3>
                  <p className="text-[#3f2a47]/70 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="bg-[#3f2a47]/5 px-2 py-1 rounded-md text-xs text-[#3f2a47]">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <a href={project.github} className="inline-flex items-center gap-1 text-sm text-[#3f2a47] hover:text-[#3f2a47]/70">
                    
                    </a>
                    {project.demo && (
                      <a href={project.demo} className="inline-flex items-center gap-1 text-sm text-[#3f2a47] hover:text-[#3f2a47]/70">
                        <ExternalLink className="h-4 w-4" /> Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="px-4 py-8">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-5 py-2 rounded-full font-medium transition-all ${
                  filter === cat.id
                    ? "bg-[#3f2a47] text-[#f0eada] shadow-md"
                    : "bg-white text-[#3f2a47] border border-[#3f2a47]/20 hover:border-[#3f2a47]"
                }`}
              >
                <span className="mr-2">{cat.icon}</span>
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-4 py-8 pb-20">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-xl shadow-sm border border-[#3f2a47]/10 overflow-hidden hover:shadow-md transition-all group">
                <div className="p-5">
                  <div className="text-5xl mb-3">{project.image}</div>
                  <h3 className="text-lg font-bold text-[#3f2a47] mb-2">{project.title}</h3>
                  <p className="text-sm text-[#3f2a47]/70 mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.tags.map((tag) => (
                      <span key={tag} className="bg-[#3f2a47]/5 px-2 py-0.5 rounded text-xs text-[#3f2a47]">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3 pt-2 border-t border-[#3f2a47]/10">
                    <a href={project.github} className="inline-flex items-center gap-1 text-xs text-[#3f2a47] hover:text-[#3f2a47]/70">
                      Source
                    </a>
                    {project.demo && (
                      <a href={project.demo} className="inline-flex items-center gap-1 text-xs text-[#3f2a47] hover:text-[#3f2a47]/70">
                        <ExternalLink className="h-3.5 w-3.5" /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Empty state */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-[#3f2a47]/60">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* GitHub Stats Section */}
      <section className="px-4 py-12 bg-[#3f2a47]/5 border-y border-[#3f2a47]/10">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-bold text-[#3f2a47] mb-6">Open Source Contributions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#3f2a47]">10+</div>
              <div className="text-sm text-[#3f2a47]/60">GitHub Repos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#3f2a47]">50+</div>
              <div className="text-sm text-[#3f2a47]/60">Commits</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#3f2a47]">3</div>
              <div className="text-sm text-[#3f2a47]/60">Contributions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#3f2a47]">2</div>
              <div className="text-sm text-[#3f2a47]/60">Stars ⭐</div>
            </div>
          </div>
          <div className="mt-8">
            <a 
              href="https://github.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#3f2a47] text-[#f0eada] px-6 py-3 rounded-lg font-medium hover:bg-[#3f2a47]/90 transition-all"
            >
             
              View My GitHub Profile
            </a>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-3xl text-center">
          <div className="bg-[#3f2a47] rounded-3xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#f0eada] mb-4">
              Have a Project in Mind?
            </h2>
            <p className="text-[#f0eada]/80 mb-6">
              I&apos;m always open to discussing new projects, collaborations, or opportunities.
            </p>
            <Link 
              href="/#contact" 
              className="inline-flex items-center gap-2 bg-[#f0eada] text-[#3f2a47] px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all"
            >
              Let&apos;s Work Together →
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#3f2a47] text-[#f0eada] py-8 px-4 border-t border-[#f0eada]/10">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-[#f0eada]/70 text-sm">© 2024 Pann Ei Khin. Built with 💻 Passion for Computing &amp; AI</p>
        </div>
      </footer>
    </div>
  );
}