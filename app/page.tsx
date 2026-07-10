"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Code2,
  ArrowRight,
  Mail,
  MapPin,
  Phone,
  Users,
  Menu,
  X,
  Heart,
  Coffee,
  Star,
  Briefcase,
  Languages,
  Cpu,
  TrendingUp,
  Shield,
  Zap,
  Terminal,
  Braces,
  Globe,
  ShoppingBag,
  Home as HomeIcon,
  Building2,
  ChevronRight,
} from "lucide-react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = ["Home", "About", "Skills", "Experience", "Contact"];

  // System Analysis Projects Data
  const systemProjects = [
    {
      id: "trading",
      title: "Trading",
      icon: TrendingUp,
      description: "Optimized order flow & data visualization",
      image: "/images/trading.jpg",
      gradient: "from-blue-500/40 to-blue-600/20",
    },
    {
      id: "travel",
      title: "Travel & Tour",
      icon: Globe,
      description: "Booking systems & itinerary management",
      image: "/images/travel.jpg",
      gradient: "from-emerald-500/40 to-emerald-600/20",
    },
    {
      id: "ecommerce",
      title: "E-Commerce",
      icon: ShoppingBag,
      description: "Payment integrations & inventory management",
      image: "/images/business.jpg",
      gradient: "from-purple-500/40 to-purple-600/20",
    },
    {
      id: "flooring",
      title: "Flooring Services",
      icon: HomeIcon,
      description: "Project management & service delivery",
      image: "/images/flooring.jpg", // Using business.jpg as fallback
      gradient: "from-orange-500/40 to-orange-600/20",
    },
    {
      id: "education",
      title: "Education Agency",
      icon: Building2,
      description: "Academic advising & curriculum management",
      image: "/images/edu.jpg",
      gradient: "from-pink-500/40 to-pink-600/20",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F5F5F5] text-[#0A0A0A]">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur-xl border-b border-white/20 shadow-sm">
        <div className="container mx-auto flex items-center justify-between px-4 py-3 max-w-6xl">
          <span className="text-xl font-bold text-[#0A0A0A]">
            Pann Ei Khin
          </span>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-6">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-[#0A0A0A]/70 hover:text-[#0A0A0A] transition-colors">
                {item}
              </a>
            ))}
            <Link href="/projects" className="text-sm font-medium text-[#0A0A0A]/70 hover:text-[#0A0A0A] transition-colors">
              Projects
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-[#0A0A0A]" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white/80 backdrop-blur-xl border-b border-white/20 py-4">
            <div className="flex flex-col items-center gap-4">
              {navItems.map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-[#0A0A0A]/70 hover:text-[#0A0A0A]" onClick={() => setMobileMenuOpen(false)}>
                  {item}
                </a>
              ))}
              <Link href="/projects" className="text-sm font-medium text-[#0A0A0A]/70 hover:text-[#0A0A0A]" onClick={() => setMobileMenuOpen(false)}>
                Projects
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden px-2 pt-32 pb-20 md:pt-30 md:pb-32 bg-gradient-to-br from-white via-[#F5F5F5] to-white">
        <div className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[size:40px_40px]" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#0A0A0A]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-[#0A0A0A]/5 rounded-full blur-3xl" />

        <div className="container relative mx-auto max-w-6xl">
          <div className="flex flex-col items-center text-center">
            <h1 className="mb-6 text-3xl font-bold tracking-tight md:text-7xl text-[#0A0A0A]">
              Hello <br />
              I am <span className="text-[#0A0A0A]">Pann Ei Khin</span>,
              <br />
              <span className="text-3xl md:text-5xl text-[#0A0A0A]/60">Computing Student &amp; System Analyst</span>
            </h1>
            <p className="mb-8 max-w-2xl text-lg text-[#0A0A0A]/50">
              Based in Mandalay, Myanmar. Passionate about websites, applications, data science, and AI —
              applying technology to solve real-world problems.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#contact" className="inline-flex items-center gap-2 bg-[#0A0A0A] text-white px-6 py-3 rounded-lg font-medium hover:bg-black hover:shadow-xl transition-all">
                Let&apos;s connect! <ArrowRight className="h-4 w-4" />
              </a>
              <a href="mailto:panneikhin11102001@gmail.com" className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-white/30 text-[#0A0A0A] px-6 py-3 rounded-lg font-medium hover:bg-white/90 hover:shadow-xl transition-all">
                <Phone className="h-4 w-4" /> +95 9796301405
              </a>
              <Link href="/projects" className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-white/30 text-[#0A0A0A] px-6 py-3 rounded-lg font-medium hover:bg-white/90 hover:shadow-xl transition-all">
                <Code2 className="h-4 w-4" /> View My Projects
              </Link>
            </div>

            {/* Quick Stats - Glass Style */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 w-full max-w-3xl">
              {[
                { number: "10+", label: "Certifications" },
                { number: "3+", label: "Languages" },
                { number: "4+", label: "Tech Skills" },
                { number: "2+", label: "Years Teaching" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center bg-white/60 backdrop-blur-md rounded-2xl p-4 border border-white/30 shadow-lg hover:shadow-xl transition-all hover:bg-white/80"
                >
                  <div className="text-3xl font-bold text-[#0A0A0A]">{stat.number}</div>
                  <div className="text-sm text-[#0A0A0A]/50">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Personal Profile Section */}
      <section id="about" className="px-4 py-16 bg-[#F5F5F5] border-t border-[#0A0A0A]/5">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3 text-[#0A0A0A]">About Me</h2>
            <div className="w-20 h-1 bg-[#0A0A0A] mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-4">
              <p className="text-[#0A0A0A]/60 leading-relaxed">
                Motivated computing student with strong academic performance and practical experience in system analysis
                and emerging technologies. Passionate about data science, AI, and intelligent systems, with a strong
                interest in applying technology to solve real-world problems.
              </p>
              <p className="text-[#0A0A0A]/60 leading-relaxed">
                Experienced in system analysis across multiple domains including <strong className="text-[#0A0A0A]/80">Trading</strong>,
                <strong className="text-[#0A0A0A]/80"> Travel &amp; Tour</strong>,
                <strong className="text-[#0A0A0A]/80"> E-Commerce</strong>,
                <strong className="text-[#0A0A0A]/80"> Flooring Services</strong>, and
                <strong className="text-[#0A0A0A]/80"> Education Agency &amp; Consultant</strong> —
                designing efficient and scalable solutions for diverse business needs.
              </p>
              <div className="flex flex-wrap gap-3 pt-4">
                <div className="flex items-center gap-2 text-sm bg-white/70 backdrop-blur-sm px-3 py-1 rounded-full text-[#0A0A0A] border border-white/30 shadow-sm">
                  <Heart className="h-4 w-4 text-[#0A0A0A]" /> Data Science
                </div>
                <div className="flex items-center gap-2 text-sm bg-white/70 backdrop-blur-sm px-3 py-1 rounded-full text-[#0A0A0A] border border-white/30 shadow-sm">
                  <Cpu className="h-4 w-4 text-[#0A0A0A]" /> AI &amp; ML
                </div>
                <div className="flex items-center gap-2 text-sm bg-white/70 backdrop-blur-sm px-3 py-1 rounded-full text-[#0A0A0A] border border-white/30 shadow-sm">
                  <TrendingUp className="h-4 w-4 text-[#0A0A0A]" /> Intelligent Systems
                </div>
              </div>
            </div>
            <div className="bg-white/70 backdrop-blur-md rounded-2xl p-6 text-center border border-white/30 shadow-lg">
              <Shield className="h-12 w-12 text-[#0A0A0A] mx-auto mb-3" />
              <h3 className="font-bold mb-2 text-[#0A0A0A]">🏆 Achievement</h3>
              <p className="text-sm text-[#0A0A0A]/60">Nationalist of ASCIS Cybersecurity Competition (2021)</p>
              <p className="text-xs text-[#0A0A0A]/40 mt-2">Team Bermuda</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="px-4 py-16 bg-gradient-to-br from-white via-[#F5F5F5] to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3 text-[#0A0A0A]">Skills &amp; Tools</h2>
            <div className="w-20 h-1 bg-[#0A0A0A] mx-auto rounded-full" />
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Programming Skills */}
            <div className="bg-white/70 backdrop-blur-md rounded-2xl p-6 border border-white/30 shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-center gap-3 mb-4">
                <Terminal className="h-6 w-6 text-[#0A0A0A]" />
                <h3 className="font-semibold text-lg text-[#0A0A0A]">Programming</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {["C Programming", "Python", "Java", "JavaScript", "C++"].map((skill) => (
                  <span key={skill} className="bg-white/50 backdrop-blur-sm px-3 py-1.5 rounded-lg text-sm font-medium shadow-sm text-[#0A0A0A] border border-white/20">{skill}</span>
                ))}
              </div>
            </div>

            {/* Tools & Technologies */}
            <div className="bg-white/70 backdrop-blur-md rounded-2xl p-6 border border-white/30 shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-center gap-3 mb-4">
                <Braces className="h-6 w-6 text-[#0A0A0A]" />
                <h3 className="font-semibold text-lg text-[#0A0A0A]">Tools &amp; Tech</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Azure", "Figma", "VS Code", "Git", "Microsoft Office", "Google Workspace"].map((tool) => (
                  <span key={tool} className="bg-white/50 backdrop-blur-sm px-3 py-1.5 rounded-lg text-sm font-medium shadow-sm text-[#0A0A0A] border border-white/20">{tool}</span>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="bg-white/70 backdrop-blur-md rounded-2xl p-6 border border-white/30 shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-center gap-3 mb-4">
                <Languages className="h-6 w-6 text-[#0A0A0A]" />
                <h3 className="font-semibold text-lg text-[#0A0A0A]">Languages</h3>
              </div>
              <div className="space-y-3">
                <div><span className="font-medium text-[#0A0A0A]">Burmese</span> <span className="text-sm text-[#0A0A0A]/50">(Native)</span><div className="w-full bg-[#0A0A0A]/10 rounded-full h-2 mt-1"><div className="bg-[#0A0A0A] h-2 rounded-full w-full" /></div></div>
                <div><span className="font-medium text-[#0A0A0A]">English</span> <span className="text-sm text-[#0A0A0A]/50">(Fluent)</span><div className="w-full bg-[#0A0A0A]/10 rounded-full h-2 mt-1"><div className="bg-[#0A0A0A] h-2 rounded-full w-[90%]" /></div></div>
                <div><span className="font-medium text-[#0A0A0A]">Japanese</span> <span className="text-sm text-[#0A0A0A]/50">(Beginner)</span><div className="w-full bg-[#0A0A0A]/10 rounded-full h-2 mt-1"><div className="bg-[#0A0A0A] h-2 rounded-full w-[40%]" /></div></div>
              </div>
            </div>

            {/* Soft Skills */}
            <div className="bg-white/70 backdrop-blur-md rounded-2xl p-6 border border-white/30 shadow-lg hover:shadow-xl transition-all md:col-span-2 lg:col-span-3">
              <div className="flex items-center gap-3 mb-4">
                <Users className="h-6 w-6 text-[#0A0A0A]" />
                <h3 className="font-semibold text-lg text-[#0A0A0A]">Soft Skills</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {["Communication", "Teamwork", "Time Management", "Problem Solving", "Teaching", "Leadership", "Adaptability", "Critical Thinking"].map((skill) => (
                  <span key={skill} className="bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full text-sm shadow-sm border border-white/20 text-[#0A0A0A]">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section - GLASS STYLE WITH IMAGES */}
      <section id="experience" className="px-4 py-16 bg-[#F5F5F5] border-y border-[#0A0A0A]/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3 text-[#0A0A0A]">Experience</h2>
            <div className="w-20 h-1 bg-[#0A0A0A] mx-auto rounded-full" />
          </div>

          {/* System Analysis Projects - GLASS CARDS WITH IMAGES */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="h-6 w-6 text-[#0A0A0A]" />
              <h3 className="text-2xl font-semibold text-[#0A0A0A]">System Analysis Projects</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              {systemProjects.map((project) => {
                const Icon = project.icon;
                return (
                  <div
                    key={project.id}
                    className="group relative h-64 rounded-2xl overflow-hidden bg-white/70 backdrop-blur-md border border-white/30 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:z-10"
                  >
                    {/* Image Container - Full card */}
                    <div className="relative h-full w-full overflow-hidden">
                      {/* Actual Image */}
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                      />

                      {/* Gradient Overlay - makes text readable */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                      {/* Glass Effect Overlay - subtle on hover */}
                      <div className="absolute inset-0 bg-white/5 backdrop-blur-[1px] group-hover:backdrop-blur-0 transition-all duration-500" />

                      {/* Content - Always visible, positioned at bottom */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 transform transition-all duration-500 group-hover:translate-y-[-4px]">
                        {/* Icon with badge */}
                        <div className="flex items-center gap-2 mb-1">
                          <div className="p-1.5 bg-white/20 backdrop-blur-md rounded-lg border border-white/20">
                            <Icon className="h-4 w-4 text-white" />
                          </div>
                          <h4 className="font-semibold text-white text-sm">
                            {project.title}
                          </h4>
                        </div>

                        {/* Description - slides up on hover */}
                        <p className="text-white/80 text-xs transform transition-all duration-500 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0">
                          {project.description}
                        </p>

                        {/* Hover indicator arrow */}
                        <div className="absolute right-4 top-0 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-2 group-hover:translate-x-0">
                          <ChevronRight className="h-4 w-4 text-white/60" />
                        </div>
                      </div>

                      {/* Glass Glow Effect - on hover */}
                      <div className={`absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-br ${project.gradient} rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-700`} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Work and Volunteer Experience in 2-column grid - GLASS STYLE */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Work Experience */}
            <div className="bg-white/70 backdrop-blur-md rounded-2xl p-6 border border-white/30 shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-center gap-3 mb-4">
                <Briefcase className="h-5 w-5 text-[#0A0A0A]" />
                <h3 className="text-xl font-semibold text-[#0A0A0A]">Work Experience</h3>
              </div>

              <div className="space-y-4">
                <div className="border-l-2 border-[#0A0A0A]/20 pl-4">
                  <p className="font-semibold text-[#0A0A0A]">System Analyst (NeuraOne)</p>
                  <p className="text-sm text-[#0A0A0A]/50">Remote | April 2025 - June 2026</p>
                  <ul className="text-sm text-[#0A0A0A]/60 mt-2 space-y-1 list-disc list-inside">
                    <li>Requirement Gathering and Communication with Clients</li>
                    <li>Scope Research and Design Reference Research</li>
                    <li>Check Design stages & Delivered high-quality Prototypes within deadlines</li>
                  </ul>
                </div>
              </div>
              <div className="space-y-4 mt-4">
                <div className="border-l-2 border-[#0A0A0A]/20 pl-4">
                  <p className="font-semibold text-[#0A0A0A]">Freelance Translator (English-Burmese)</p>
                  <p className="text-sm text-[#0A0A0A]/50">Remote | 2019-2022</p>
                  <ul className="text-sm text-[#0A0A0A]/60 mt-2 space-y-1 list-disc list-inside">
                    <li>Translated Korean manhwa (digital comics) into Burmese</li>
                    <li>Worked with digital text editing tools for comic panel integration</li>
                    <li>Delivered high-quality translations within deadlines</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Volunteer Experience */}
            <div className="bg-white/70 backdrop-blur-md rounded-2xl p-6 border border-white/30 shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-center gap-3 mb-4">
                <Heart className="h-5 w-5 text-[#0A0A0A]" />
                <h3 className="text-xl font-semibold text-[#0A0A0A]">Volunteer Experience</h3>
              </div>
              <div className="space-y-4">
                <div className="border-l-2 border-[#0A0A0A]/20 pl-4">
                  <p className="font-semibold text-[#0A0A0A]">C Programming Instructor</p>
                  <p className="text-sm text-[#0A0A0A]/50">Start Smart | 2021 (3 months)</p>
                  <ul className="text-sm text-[#0A0A0A]/60 mt-2 space-y-1 list-disc list-inside">
                    <li>Taught C programming basics (variables, loops, functions)</li>
                    <li>Assisted with coding exercises and debugging</li>
                    <li>Developed logical thinking and problem-solving skills</li>
                  </ul>
                </div>
                <div className="border-l-2 border-[#0A0A0A]/20 pl-4">
                  <p className="font-semibold text-[#0A0A0A]">English Tutor</p>
                  <p className="text-sm text-[#0A0A0A]/50">Young Learners| 2015-2016</p>
                  <ul className="text-sm text-[#0A0A0A]/60 mt-2 space-y-1 list-disc list-inside">
                    <li>Taught basic English skills during summer holidays</li>
                    <li>Developed teaching materials and exercises</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Leadership - GLASS STYLE */}
          <div className="bg-white/70 backdrop-blur-md rounded-2xl p-6 border border-white/30 shadow-lg hover:shadow-xl transition-all mt-6">
            <div className="flex items-center gap-3 mb-4">
              <Star className="h-5 w-5 text-[#0A0A0A]" />
              <h3 className="text-xl font-semibold text-[#0A0A0A]">Leadership &amp; Activities</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white/40 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <p className="font-semibold text-[#0A0A0A]">Executive Committee Member</p>
                <p className="text-sm text-[#0A0A0A]/50">MIIT | 2018-2019</p>
                <p className="text-sm text-[#0A0A0A]/60 mt-1">Represented students and coordinated with faculty, organized university activities</p>
              </div>
              <div className="bg-white/40 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <p className="font-semibold text-[#0A0A0A]">Art Club Leader</p>
                <p className="text-sm text-[#0A0A0A]/50">MIIT | 2020</p>
                <p className="text-sm text-[#0A0A0A]/60 mt-1">Managed club members and organized art-related collaborative projects</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-4 py-16 bg-gradient-to-br from-[#0A0A0A] to-gray-900">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
            <h2 className="mb-4 text-3xl font-bold text-white">Let&apos;s Work Together</h2>
            <p className="mb-8 text-white/70">
              Open to opportunities in data science, AI, software development, and tutoring.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <a href="mailto:panneikhin11102001@gmail.com" className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm text-[#0A0A0A] px-6 py-3 rounded-lg font-medium hover:shadow-xl hover:bg-white transition-all border border-white/30">
                <Mail className="h-4 w-4" /> panneikhin11102001@gmail.com
              </a>
              <a href="tel:+959796301405" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white border border-white/30 px-6 py-3 rounded-lg font-medium hover:bg-white/20 transition-all">
                <Phone className="h-4 w-4" /> +95 9796301405
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-3 text-white/70 text-sm">
              <span className="flex items-center gap-1"><MapPin className="h-4 w-4" /> Mandalay, Myanmar</span>
              <span className="flex items-center gap-1"><Coffee className="h-4 w-4" /> Available for freelance</span>
              <span className="flex items-center gap-1"><Zap className="h-4 w-4" /> Quick response</span>
            </div>

            <div className="flex justify-center gap-6 mt-8 pt-6 border-t border-white/10">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors">
                GitHub
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors">
                LinkedIn
              </a>
              <a href="#" className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors">
                💼 Upwork
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0A0A0A] text-white py-8 px-4 border-t border-white/5">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-white/60 text-sm">© 2024 Pann Ei Khin. Built with 💻 Passion for Computing &amp; AI</p>
          <p className="text-white/40 text-xs mt-2">Mandalay, Myanmar | +95 9796301405</p>
        </div>
      </footer>
    </div>
  );
}