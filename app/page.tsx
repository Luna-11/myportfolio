"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import {
  Mail,
  MapPin,
  Code2,
  Palette,
  Database,
  Server,
  Globe,
  ChevronRight,
  Users,
  GraduationCap,
  Briefcase,
  Heart,
  Award,
  Languages,
  BookOpen,
  PenTool,
  Cpu,
} from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Section = ({ children, className = "", id = "" }: { children: React.ReactNode; className?: string; id?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.section
      ref={ref}
      id={id}
      initial="hidden"
      animate={controls}
      variants={staggerContainer}
      className={`py-20 px-4 md:px-8 ${className}`}
    >
      {children}
    </motion.section>
  );
};

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-12 text-center">
    {children}
  </motion.h2>
);

export default function Home() {
  // Skills based on CV
  const skills = {
    programming: ["C Programming", "Java", "Python", "JavaScript", "TypeScript", "Basic Programming Concepts"],
    design: ["Figma", "Graphic Design", "Adobe XD", "Photoshop", "High-Fidelity Designs"],
    cloudTools: ["Azure Cognitive Services", "Google Workspace", "Microsoft Office", "CISCO Cybersecurity"],
    languages: ["Burmese (Native)", "English (Fluent)", "Japanese (Beginner)"],
  };

  // Education from CV
  const education = [
    {
      degree: "Bachelor's Degree in Computer Science",
      institution: "University of the People (USA) - Scholarship Awarded",
      year: "2026 (currently)",
      icon: <GraduationCap className="w-5 h-5" />,
    },
    {
      degree: "Diploma in Computing",
      institution: "Strategy First University",
      year: "Completed (Level 4, 5)",
      icon: <GraduationCap className="w-5 h-5" />,
    },
    {
      degree: "Computer Science Engineering",
      institution: "Myanmar Institute of Information Technology",
      year: "2018 - 2020",
      icon: <Cpu className="w-5 h-5" />,
    },
    {
      degree: "High School Graduation",
      institution: "KMC Private High School, Mandalay",
      year: "2018",
      icon: <BookOpen className="w-5 h-5" />,
    },
  ];

  // Certifications from CV
  const certifications = [
    "Grammar and Punctuation of Advanced Writing - Coursera (2026)",
    "Business Analysis & Process Management - Coursera (2025)",
    "Computer Vision App with Azure Cognitive Services - Coursera (2025)",
    "High-Fidelity Designs and Prototypes in Figma - Coursera (2025)",
    "English for Career Development - UPenn (2023) (94.38%)",
    "OMPT-D (Mathematics) - Passed (2023)",
    "Complete Japanese Course for Beginners - Udemy (2021)",
    "Introduction to Cybersecurity - CISCO (2020)",
    "Java Certificate - SarLokPar (2020)",
    "Graphic Design - MCC (2018)",
  ];

  const services = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "System Analysis & Development",
      description: "Experienced in analyzing systems and building intelligent applications to solve real-world problems.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Teaching & Mentorship",
      description: "Passionate about teaching programming and helping students develop logical thinking skills.",
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Design & Prototyping",
      description: "Create high-fidelity designs and prototypes using Figma and modern design tools.",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Translation (English-Burmese)",
      description: "Professional translation services for digital content, maintaining quality and meeting deadlines.",
    },
  ];

  const projects = [
    {
      title: "Computer Vision Application",
      description: "Built computer vision app using Azure Cognitive Services for intelligent image analysis.",
      tags: ["Azure", "Computer Vision", "AI"],
    },
    {
      title: "Business Process Analysis",
      description: "Process management and business analysis project focusing on workflow optimization.",
      tags: ["Business Analysis", "Process Management", "Strategy"],
    },
    {
      title: "High-Fidelity Prototypes",
      description: "Created detailed interactive prototypes and designs using Figma for web applications.",
      tags: ["Figma", "UI/UX", "Prototyping"],
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.6;
          }
        }
        .animate-pulse-custom {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>

      <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300/30 rounded-full blur-3xl animate-pulse-custom" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-300/30 rounded-full blur-3xl animate-pulse-custom delay-1000" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center z-10"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="inline-block mb-6"
          >
            <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
              <span className="text-5xl">👩‍💻</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            Hello, I am Pann Ei Khin
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-2xl md:text-3xl text-gray-600 mb-6"
          >
            Computing Student | Aspiring Data Scientist & AI Enthusiast
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col md:flex-row items-center justify-center gap-2 text-gray-500 mb-8"
          >
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>Mandalay, Myanmar</span>
            </div>
            <span className="hidden md:inline mx-2">•</span>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              <span>panneikhin11102001@gmail.com</span>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto mb-10"
          >
            Motivated computing student with strong academic performance and practical experience in system analysis 
            and emerging technologies. Passionate about data science, AI, and intelligent systems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <a
              href="#contact"
              className="group px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transition-all hover:scale-105 inline-flex items-center gap-2"
            >
              {`Let's connect`}
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition" />
            </a>
            <a
              href="#work"
              className="px-8 py-3 border-2 border-gray-300 rounded-full font-semibold hover:border-blue-500 transition-colors"
            >
              View my work
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Education Section */}
      <Section className="bg-white/50 backdrop-blur-sm">
        <SectionTitle>Education & Certifications</SectionTitle>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <GraduationCap className="w-6 h-6 text-blue-500" /> Academic Background
              </h3>
              <div className="space-y-6">
                {education.map((edu, idx) => (
                  <motion.div
                    key={idx}
                    variants={fadeInUp}
                    className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-md"
                  >
                    <div className="text-blue-500 mt-1">{edu.icon}</div>
                    <div>
                      <h4 className="font-semibold text-lg">{edu.degree}</h4>
                      <p className="text-gray-600">{edu.institution}</p>
                      <p className="text-sm text-gray-400">{edu.year}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Award className="w-6 h-6 text-purple-500" /> Certifications
              </h3>
              <div className="space-y-2 max-h-96 overflow-y-auto pr-2">
                {certifications.map((cert, idx) => (
                  <motion.div
                    key={idx}
                    variants={fadeInUp}
                    className="flex items-center gap-2 text-sm text-gray-700 p-2 hover:bg-white rounded-lg transition"
                  >
                    <ChevronRight className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span>{cert}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Skills Section */}
      <Section>
        <SectionTitle>Skills & Tools</SectionTitle>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Based on my academic journey and hands-on experience with various technologies and tools.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <Code2 className="w-5 h-5 text-blue-500" /> Programming
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.programming.map((skill) => (
                <span key={skill} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <PenTool className="w-5 h-5 text-orange-500" /> Design & Prototyping
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.design.map((skill) => (
                <span key={skill} className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <Server className="w-5 h-5 text-green-500" /> Cloud & Tools
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.cloudTools.map((skill) => (
                <span key={skill} className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <Languages className="w-5 h-5 text-purple-500" /> Languages
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.languages.map((skill) => (
                <span key={skill} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Experience Section */}
      <Section className="bg-white/50 backdrop-blur-sm">
        <SectionTitle>Experience & Leadership</SectionTitle>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Briefcase className="w-6 h-6 text-blue-500" /> Work Experience
            </h3>
            <motion.div variants={fadeInUp} className="bg-white rounded-xl p-6 shadow-md">
              <h4 className="font-semibold text-lg">Freelance Translator (English-Burmese)</h4>
              <p className="text-gray-500 text-sm">Remote | 2019 - 2022</p>
              <ul className="mt-3 space-y-2 text-gray-600">
                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 mt-1 text-blue-500"/>Translated Korean manhwa (digital comics) into Burmese</li>
                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 mt-1 text-blue-500"/>Worked with digital text editing tools to integrate translated content</li>
                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 mt-1 text-blue-500"/>Delivered translations within deadlines while maintaining high quality</li>
              </ul>
            </motion.div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Heart className="w-6 h-6 text-purple-500" /> Volunteer Experience
            </h3>
            <div className="space-y-4">
              <motion.div variants={fadeInUp} className="bg-white rounded-xl p-6 shadow-md">
                <h4 className="font-semibold text-lg">English Tutor (Volunteer)</h4>
                <p className="text-gray-500 text-sm">Neighborhood Kids | 2015-2016</p>
                <p className="mt-2 text-gray-600">Taught basic English skills, helped improve vocabulary and communication.</p>
              </motion.div>
              <motion.div variants={fadeInUp} className="bg-white rounded-xl p-6 shadow-md">
                <h4 className="font-semibold text-lg">C Programming Instructor (Volunteer)</h4>
                <p className="text-gray-500 text-sm">Start Smart | 2021 (3 months)</p>
                <p className="mt-2 text-gray-600">Taught programming basics (variables, loops, functions), assisted with debugging.</p>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-8">
          <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <Users className="w-6 h-6 text-green-500" /> Leadership & Activities
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div variants={fadeInUp} className="bg-white rounded-xl p-6 shadow-md">
              <h4 className="font-semibold text-lg">Member of Executive Committee</h4>
              <p className="text-gray-500 text-sm">MITT (Myanmar Institute of Information Technology) | 2018-2019</p>
              <ul className="mt-2 text-gray-600">
                <li>• Represented and coordinated communication between students and faculty</li>
                <li>• Assisted in organizing university activities and student events</li>
              </ul>
            </motion.div>
            <motion.div variants={fadeInUp} className="bg-white rounded-xl p-6 shadow-md">
              <h4 className="font-semibold text-lg">Leader - Art Club</h4>
              <p className="text-gray-500 text-sm">MIT (Myanmar Institute of Information Technology) | 2020</p>
              <ul className="mt-2 text-gray-600">
                <li>• Organized art-related activities and collaborative projects</li>
                <li>• Managed club members and coordinated club meetings</li>
              </ul>
            </motion.div>
          </div>
          <motion.div variants={fadeInUp} className="mt-6 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-6 border border-yellow-200">
            <h4 className="font-semibold text-lg flex items-center gap-2"><Award className="w-5 h-5 text-yellow-600"/> Academic Achievement</h4>
            <p className="text-gray-700">Nationalist of ASCIS Cybersecurity Competition (2021) - Team Bermuda</p>
          </motion.div>
        </div>
      </Section>

      {/* Services Section */}
      <Section>
        <SectionTitle>What I Offer</SectionTitle>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Work Section - Projects */}
      <Section className="bg-white/50" id="work">
        <SectionTitle>Featured Projects</SectionTitle>
        <p className="text-center text-gray-600 mb-12">
          Hands-on projects from my learning journey and certifications
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg"
            >
              <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                {index === 0 && <Cpu className="w-16 h-16 text-white opacity-80" />}
                {index === 1 && <Database className="w-16 h-16 text-white opacity-80" />}
                {index === 2 && <Palette className="w-16 h-16 text-white opacity-80" />}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-gray-100 rounded-md text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact">
        <SectionTitle>{`Let's talk about your project`}</SectionTitle>
        <div className="max-w-2xl mx-auto bg-white rounded-2xl p-8 shadow-xl">
          <form className="space-y-6" action="mailto:panneikhin11102001@gmail.com" method="post" encType="text/plain">
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Tell me about your project..."
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all hover:scale-[1.02]"
            >
              Send Message
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="flex flex-col items-center gap-4">
              <a
                href="mailto:panneikhin11102001@gmail.com"
                className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Mail className="w-5 h-5" /> panneikhin11102001@gmail.com
              </a>
              <div className="flex gap-6">
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                  LinkedIn
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-500 border-t border-gray-200">
        <p>&copy; 2024 Pann Ei Khin - Computing Student & Aspiring Data Scientist. All rights reserved.</p>
        <p className="text-sm mt-2">📍 Mandalay, Myanmar | 📧 panneikhin11102001@gmail.com | 📞 +95 9796301405</p>
      </footer>
    </main>
  );
}