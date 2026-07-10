"use client";

import { useState } from "react";
import Link from "next/link";
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
  GraduationCap,
} from "lucide-react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = ["Home", "About", "Skills", "Experience", "Contact"];

  return (
    <div className="min-h-screen bg-[#F5F5F5] text-[#0A0A0A]">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-[#0A0A0A]/10">
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
          <div className="md:hidden bg-white border-b border-[#0A0A0A]/10 py-4">
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
      <section id="home" className="relative overflow-hidden px-2 pt-32 pb-20 md:pt-30 md:pb-32 bg-white">
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
              <a href="mailto:panneikhin11102001@gmail.com" className="inline-flex items-center gap-2 border border-[#0A0A0A]/20 bg-white text-[#0A0A0A] px-6 py-3 rounded-lg font-medium hover:border-[#0A0A0A] hover:bg-[#F5F5F5] transition-all">
                <Phone className="h-4 w-4" /> +95 9796301405
              </a>
              <Link href="/projects" className="inline-flex items-center gap-2 border border-[#0A0A0A]/20 bg-white text-[#0A0A0A] px-6 py-3 rounded-lg font-medium hover:border-[#0A0A0A] hover:bg-[#F5F5F5] transition-all">
                <Code2 className="h-4 w-4" /> View My Projects
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 w-full max-w-3xl">
              <div className="text-center bg-[#F5F5F5] rounded-2xl p-4 border border-[#0A0A0A]/5">
                <div className="text-3xl font-bold text-[#0A0A0A]">10+</div>
                <div className="text-sm text-[#0A0A0A]/50">Certifications</div>
              </div>
              <div className="text-center bg-[#F5F5F5] rounded-2xl p-4 border border-[#0A0A0A]/5">
                <div className="text-3xl font-bold text-[#0A0A0A]">3+</div>
                <div className="text-sm text-[#0A0A0A]/50">Languages</div>
              </div>
              <div className="text-center bg-[#F5F5F5] rounded-2xl p-4 border border-[#0A0A0A]/5">
                <div className="text-3xl font-bold text-[#0A0A0A]">4+</div>
                <div className="text-sm text-[#0A0A0A]/50">Tech Skills</div>
              </div>
              <div className="text-center bg-[#F5F5F5] rounded-2xl p-4 border border-[#0A0A0A]/5">
                <div className="text-3xl font-bold text-[#0A0A0A]">2+</div>
                <div className="text-sm text-[#0A0A0A]/50">Years Teaching</div>
              </div>
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
                <div className="flex items-center gap-2 text-sm bg-white px-3 py-1 rounded-full text-[#0A0A0A] border border-[#0A0A0A]/10 shadow-sm">
                  <Heart className="h-4 w-4 text-[#0A0A0A]" /> Data Science
                </div>
                <div className="flex items-center gap-2 text-sm bg-white px-3 py-1 rounded-full text-[#0A0A0A] border border-[#0A0A0A]/10 shadow-sm">
                  <Cpu className="h-4 w-4 text-[#0A0A0A]" /> AI &amp; ML
                </div>
                <div className="flex items-center gap-2 text-sm bg-white px-3 py-1 rounded-full text-[#0A0A0A] border border-[#0A0A0A]/10 shadow-sm">
                  <TrendingUp className="h-4 w-4 text-[#0A0A0A]" /> Intelligent Systems
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center border border-[#0A0A0A]/10 shadow-sm">
              <Shield className="h-12 w-12 text-[#0A0A0A] mx-auto mb-3" />
              <h3 className="font-bold mb-2 text-[#0A0A0A]">🏆 Achievement</h3>
              <p className="text-sm text-[#0A0A0A]/60">Nationalist of ASCIS Cybersecurity Competition (2021)</p>
              <p className="text-xs text-[#0A0A0A]/40 mt-2">Team Bermuda</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="px-4 py-16 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3 text-[#0A0A0A]">Skills &amp; Tools</h2>
            <div className="w-20 h-1 bg-[#0A0A0A] mx-auto rounded-full" />
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Programming Skills */}
            <div className="bg-[#F5F5F5] rounded-2xl p-6 border border-[#0A0A0A]/10 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Terminal className="h-6 w-6 text-[#0A0A0A]" />
                <h3 className="font-semibold text-lg text-[#0A0A0A]">Programming</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {["C Programming", "Python", "Java", "JavaScript", "C++"].map((skill) => (
                  <span key={skill} className="bg-white px-3 py-1.5 rounded-lg text-sm font-medium shadow-sm text-[#0A0A0A] border border-[#0A0A0A]/10">{skill}</span>
                ))}
              </div>
            </div>

            {/* Tools & Technologies */}
            <div className="bg-[#F5F5F5] rounded-2xl p-6 border border-[#0A0A0A]/10 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Braces className="h-6 w-6 text-[#0A0A0A]" />
                <h3 className="font-semibold text-lg text-[#0A0A0A]">Tools &amp; Tech</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Azure", "Figma", "VS Code", "Git", "Microsoft Office", "Google Workspace"].map((tool) => (
                  <span key={tool} className="bg-white px-3 py-1.5 rounded-lg text-sm font-medium shadow-sm text-[#0A0A0A] border border-[#0A0A0A]/10">{tool}</span>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="bg-[#F5F5F5] rounded-2xl p-6 border border-[#0A0A0A]/10 shadow-sm">
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
            <div className="bg-[#F5F5F5] rounded-2xl p-6 border border-[#0A0A0A]/10 shadow-sm md:col-span-2 lg:col-span-3">
              <div className="flex items-center gap-3 mb-4">
                <Users className="h-6 w-6 text-[#0A0A0A]" />
                <h3 className="font-semibold text-lg text-[#0A0A0A]">Soft Skills</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {["Communication", "Teamwork", "Time Management", "Problem Solving", "Teaching", "Leadership", "Adaptability", "Critical Thinking"].map((skill) => (
                  <span key={skill} className="bg-white px-4 py-2 rounded-full text-sm shadow-sm border border-[#0A0A0A]/10 text-[#0A0A0A]">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="px-4 py-16 bg-[#F5F5F5] border-y border-[#0A0A0A]/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3 text-[#0A0A0A]">Experience</h2>
            <div className="w-20 h-1 bg-[#0A0A0A] mx-auto rounded-full" />
          </div>

          <div className="grid gap-6">
            {/* System Analysis Projects - Full width card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#0A0A0A]/10">
              <div className="flex items-center gap-3 mb-4">
                <Briefcase className="h-5 w-5 text-[#0A0A0A]" />
                <h3 className="text-xl font-semibold text-[#0A0A0A]">System Analysis Projects</h3>
              </div>
              <p className="text-[#0A0A0A]/60 mb-4">
                Experienced in analyzing and designing systems across multiple domains, ensuring efficient and scalable solutions.
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-[#F5F5F5] rounded-xl p-4 border border-[#0A0A0A]/5">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="h-5 w-5 text-[#0A0A0A]" />
                    <span className="font-semibold text-[#0A0A0A]">Trading</span>
                  </div>
                  <p className="text-sm text-[#0A0A0A]/60">Analyzed trading platforms, optimized order flow, and improved data visualization for better decision-making.</p>
                </div>
                <div className="bg-[#F5F5F5] rounded-xl p-4 border border-[#0A0A0A]/5">
                  <div className="flex items-center gap-2 mb-2">
                    <Globe className="h-5 w-5 text-[#0A0A0A]" />
                    <span className="font-semibold text-[#0A0A0A]">Travel &amp; Tour</span>
                  </div>
                  <p className="text-sm text-[#0A0A0A]/60">Designed booking systems, itinerary management, and customer experience workflows for travel agencies.</p>
                </div>
                <div className="bg-[#F5F5F5] rounded-xl p-4 border border-[#0A0A0A]/5">
                  <div className="flex items-center gap-2 mb-2">
                    <ShoppingBag className="h-5 w-5 text-[#0A0A0A]" />
                    <span className="font-semibold text-[#0A0A0A]">E-Commerce</span>
                  </div>
                  <p className="text-sm text-[#0A0A0A]/60">Built and analyzed online store systems, payment integrations, and inventory management solutions.</p>
                </div>
                <div className="bg-[#F5F5F5] rounded-xl p-4 border border-[#0A0A0A]/5">
                  <div className="flex items-center gap-2 mb-2">
                    <HomeIcon className="h-5 w-5 text-[#0A0A0A]" />
                    <span className="font-semibold text-[#0A0A0A]">Flooring Services</span>
                  </div>
                  <p className="text-sm text-[#0A0A0A]/60">Developed systems for project management, client communication, and service delivery optimization.</p>
                </div>
                <div className="bg-[#F5F5F5] rounded-xl p-4 border border-[#0A0A0A]/5 sm:col-span-2 lg:col-span-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Building2 className="h-5 w-5 text-[#0A0A0A]" />
                    <span className="font-semibold text-[#0A0A0A]">Education Agency &amp; Consultant</span>
                  </div>
                  <p className="text-sm text-[#0A0A0A]/60">Analyzed and designed systems for academic advising, curriculum management, and education technology integration.</p>
                </div>
              </div>
            </div>

            {/* Work and Volunteer Experience in 2-column grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Work Experience */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#0A0A0A]/10">
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
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#0A0A0A]/10">
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

            {/* Leadership */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#0A0A0A]/10">
              <div className="flex items-center gap-3 mb-4">
                <Star className="h-5 w-5 text-[#0A0A0A]" />
                <h3 className="text-xl font-semibold text-[#0A0A0A]">Leadership &amp; Activities</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-[#F5F5F5] rounded-xl p-4 border border-[#0A0A0A]/10">
                  <p className="font-semibold text-[#0A0A0A]">Executive Committee Member</p>
                  <p className="text-sm text-[#0A0A0A]/50">MIIT | 2018-2019</p>
                  <p className="text-sm text-[#0A0A0A]/60 mt-1">Represented students and coordinated with faculty, organized university activities</p>
                </div>
                <div className="bg-[#F5F5F5] rounded-xl p-4 border border-[#0A0A0A]/10">
                  <p className="font-semibold text-[#0A0A0A]">Art Club Leader</p>
                  <p className="text-sm text-[#0A0A0A]/50">MIIT | 2020</p>
                  <p className="text-sm text-[#0A0A0A]/60 mt-1">Managed club members and organized art-related collaborative projects</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-4 py-16 bg-[#0A0A0A]">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10">
            <h2 className="mb-4 text-3xl font-bold text-white">Let&apos;s Work Together</h2>
            <p className="mb-8 text-white/70">
              Open to opportunities in data science, AI, software development, and tutoring.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <a href="mailto:panneikhin11102001@gmail.com" className="inline-flex items-center gap-2 bg-white text-[#0A0A0A] px-6 py-3 rounded-lg font-medium hover:shadow-xl hover:bg-[#F5F5F5] transition-all">
                <Mail className="h-4 w-4" /> panneikhin11102001@gmail.com
              </a>
              <a href="tel:+959796301405" className="inline-flex items-center gap-2 bg-white/10 text-white border border-white/30 px-6 py-3 rounded-lg font-medium hover:bg-white/20 transition-all">
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

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </div>
  );
}