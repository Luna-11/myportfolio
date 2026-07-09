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
      id: "study-with-me",
      title: "Study With Me",
      description: "An interactive study platform designed for students to stay focused, track progress, and collaborate with peers.",
      longDescription: "Built with Next.js and TailwindCSS, this platform features real-time study timers, task management, group study rooms, and progress tracking. Includes Pomodoro timer, note-taking capabilities, and achievement badges to keep students motivated.",
      tags: ["Next.js", "React", "TailwindCSS", "WebSockets", "Firebase"],
      category: "web",
      image: "📚",
      github: "https://github.com/Luna-11/cptesting",
      demo: "https://cptesting.vercel.app/",
      featured: true
    },
    {
      id: "cooking-recipes",
      title: "Cooking Recipes Sharing",
      description: "A vibrant community platform where food lovers share, discover, and rate delicious recipes from around the world.",
      longDescription: "Developed with PHP and vanilla JavaScript, this platform allows users to create profiles, upload recipes with photos, rate recipes, and save favorites. Features include ingredient-based search, dietary filters, and step-by-step cooking instructions.",
      tags: ["PHP", "JavaScript", "MySQL", "HTML5", "CSS3"],
      category: "web",
      image: "🍳",
      github: "https://github.com/Luna-11/BEAssignment",
      featured: true
    }
  ];

  const categories = [
    { id: "all", name: "All Projects", icon: "🎯" },
    { id: "web", name: "Web Dev", icon: "🌐" }
  ];

  const filteredProjects = filter === "all"
    ? projects
    : projects.filter(p => p.category === filter);

  const featuredProjects = projects.filter(p => p.featured);

  return (
    <div className="min-h-screen bg-[#F5F5F5] text-[#0A0A0A]">
      {/* Navigation Header */}
      <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#0A0A0A]/10">
        <div className="container mx-auto px-4 py-4 max-w-6xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#0A0A0A] hover:text-[#0A0A0A]/60 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            Back to Portfolio
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="px-4 py-16 text-center bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-6 inline-flex items-center gap-2 bg-[#0A0A0A]/10 px-4 py-2 rounded-full">
            <Code2 className="h-5 w-5 text-[#0A0A0A]" />
            <span className="text-sm font-medium text-[#0A0A0A]">My Work</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-[#0A0A0A] mb-4">
            Projects &amp; Case Studies
          </h1>
          <p className="text-lg text-[#0A0A0A]/60 max-w-2xl mx-auto">
            A collection of my work in web development, data science, and AI.
            Each project represents a unique challenge and solution.
          </p>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="px-4 py-8 bg-[#F5F5F5]">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-[#0A0A0A] flex items-center gap-2">
              <Star className="h-6 w-6 text-[#0A0A0A]" />
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-[#0A0A0A] mt-2 rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-white rounded-2xl shadow-sm border border-[#0A0A0A]/10 overflow-hidden hover:shadow-md transition-all hover:-translate-y-1 duration-200"
              >
                <Link
                  href={`/projects/${project.id}`}
                  className="block p-6"
                >
                  <div className="text-6xl mb-4">{project.image}</div>
                  <h3 className="text-xl font-bold text-[#0A0A0A] mb-2 group-hover:text-[#0A0A0A]/70 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[#0A0A0A]/60 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="bg-[#0A0A0A]/5 px-2 py-1 rounded-md text-xs text-[#0A0A0A]">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[#0A0A0A]/50 group-hover:text-[#0A0A0A] transition-colors">
                    <ExternalLink className="h-4 w-4" />
                    View Details →
                  </div>
                </Link>
                <div className="px-6 pb-6 pt-2 flex gap-4 border-t border-[#0A0A0A]/5">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-[#0A0A0A]/50 hover:text-[#0A0A0A] transition-colors"
                  >
                    Source
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-[#0A0A0A]/50 hover:text-[#0A0A0A] transition-colors"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="px-4 py-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-5 py-2 rounded-full font-medium transition-all ${filter === cat.id
                    ? "bg-[#0A0A0A] text-white shadow-md"
                    : "bg-[#F5F5F5] text-[#0A0A0A] border border-[#0A0A0A]/20 hover:border-[#0A0A0A]"
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
      <section className="px-4 py-8 pb-20 bg-[#F5F5F5]">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-white rounded-xl shadow-sm border border-[#0A0A0A]/10 overflow-hidden hover:shadow-md transition-all hover:-translate-y-1 duration-200"
              >
                <Link
                  href={`/projects/${project.id}`}
                  className="block p-5"
                >
                  <div className="text-5xl mb-3">{project.image}</div>
                  <h3 className="text-lg font-bold text-[#0A0A0A] mb-2 group-hover:text-[#0A0A0A]/70 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-[#0A0A0A]/60 mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.tags.map((tag) => (
                      <span key={tag} className="bg-[#0A0A0A]/5 px-2 py-0.5 rounded text-xs text-[#0A0A0A]">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#0A0A0A]/50 group-hover:text-[#0A0A0A] transition-colors">
                    <ExternalLink className="h-3.5 w-3.5" />
                    View Project →
                  </div>
                </Link>
                <div className="px-5 pb-5 pt-2 flex gap-4 border-t border-[#0A0A0A]/5">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-[#0A0A0A]/50 hover:text-[#0A0A0A] transition-colors"
                  >
                    GitHub
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-[#0A0A0A]/50 hover:text-[#0A0A0A] transition-colors"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Empty state */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-[#0A0A0A]/50">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* GitHub Stats Section */}
      <section className="px-4 py-12 bg-white border-y border-[#0A0A0A]/5">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-bold text-[#0A0A0A] mb-6">Open Source Contributions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            <div className="text-center bg-[#F5F5F5] rounded-2xl p-4 border border-[#0A0A0A]/5">
              <div className="text-3xl font-bold text-[#0A0A0A]">12+</div>
              <div className="text-sm text-[#0A0A0A]/50">GitHub Repos</div>
            </div>
            <div className="text-center bg-[#F5F5F5] rounded-2xl p-4 border border-[#0A0A0A]/5">
              <div className="text-3xl font-bold text-[#0A0A0A]">50+</div>
              <div className="text-sm text-[#0A0A0A]/50">Commits</div>
            </div>
            <div className="text-center bg-[#F5F5F5] rounded-2xl p-4 border border-[#0A0A0A]/5">
              <div className="text-3xl font-bold text-[#0A0A0A]">3</div>
              <div className="text-sm text-[#0A0A0A]/50">Contributions</div>
            </div>
            <div className="text-center bg-[#F5F5F5] rounded-2xl p-4 border border-[#0A0A0A]/5">
              <div className="text-3xl font-bold text-[#0A0A0A]">5</div>
              <div className="text-sm text-[#0A0A0A]/50">Stars ⭐</div>
            </div>
          </div>
          <div className="mt-8">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#0A0A0A] text-white px-6 py-3 rounded-lg font-medium hover:bg-black hover:shadow-xl transition-all"
            >
              View My GitHub Profile
            </a>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-4 py-16 bg-[#F5F5F5]">
        <div className="container mx-auto max-w-3xl text-center">
          <div className="bg-[#0A0A0A] rounded-3xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Have a Project in Mind?
            </h2>
            <p className="text-white/70 mb-6">
              I&apos;m always open to discussing new projects, collaborations, or opportunities.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 bg-white text-[#0A0A0A] px-6 py-3 rounded-lg font-medium hover:bg-[#F5F5F5] hover:shadow-xl transition-all"
            >
              Let&apos;s Work Together →
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0A0A0A] text-white py-8 px-4 border-t border-white/5">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-white/60 text-sm">© 2024 Pann Ei Khin. Built with 💻 Passion for Computing &amp; AI</p>
        </div>
      </footer>
    </div>
  );
}