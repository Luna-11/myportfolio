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
  ExternalLink,
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
  const skills = {
    frontend: ["React", "TypeScript", "HTML", "CSS", "Figma", "Adobe XD"],
    backend: ["Node.js", "Python", "C#", "Django", "GraphQL", "F#"],
    database: ["SQL", "Azure", "API"],
    tools: ["Git", "Visual Studio", "Photoshop", "ChartJS"],
  };

  const services = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Reasonable and flexible prices for clients",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas consequuntur iure.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Elaborating ideas in a discussion",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas consequuntur iure.",
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Full of range design and motion services",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas consequuntur iure.",
    },
  ];

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React and Node.js",
      tags: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "Portfolio Dashboard",
      description: "Interactive dashboard for creative professionals",
      tags: ["Next.js", "Tailwind", "Framer"],
    },
    {
      title: "Mobile App UI",
      description: "Modern mobile interface design and implementation",
      tags: ["Figma", "React Native", "Firebase"],
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
            Hello, I am Maha
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-2xl md:text-3xl text-gray-600 mb-6"
          >
            Front End Developer
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex items-center justify-center gap-2 text-gray-500 mb-8"
          >
            <MapPin className="w-5 h-5" />
            <span>Currently located in Pakistan</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto mb-10"
          >
            I love building effective digital experiences on the web. Let's create something amazing together!
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
              Let's get in touch!
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

      {/* Skills Section */}
      <Section className="bg-white/50 backdrop-blur-sm">
        <SectionTitle>Skills & Tools</SectionTitle>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          For a more detailed overview, please feel free to check the tools that were used on a per-project basis.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <Code2 className="w-5 h-5 text-blue-500" /> Frontend
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.frontend.map((skill) => (
                <span key={skill} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <Server className="w-5 h-5 text-green-500" /> Backend
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.backend.map((skill) => (
                <span key={skill} className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <Database className="w-5 h-5 text-purple-500" /> Database & Cloud
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.database.map((skill) => (
                <span key={skill} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <Palette className="w-5 h-5 text-orange-500" /> Tools & Design
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.tools.map((skill) => (
                <span key={skill} className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Services Section */}
      <Section>
        <SectionTitle>What I Offer</SectionTitle>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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

      {/* Work Section */}
      <Section className="bg-white/50" id="work">
        <SectionTitle>Featured Work</SectionTitle>
        <p className="text-center text-gray-600 mb-12">
          Take a look at what we've created and be inspired by
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
                <Globe className="w-16 h-16 text-white opacity-80" />
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

        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all"
          >
            See more projects <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact">
        <SectionTitle>Let's talk about your project</SectionTitle>
        <div className="max-w-2xl mx-auto bg-white rounded-2xl p-8 shadow-xl">
          <form className="space-y-6">
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
                href="#"
                className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Mail className="w-5 h-5" /> maha@frontend.dev
              </a>
              <div className="flex gap-6">
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                  
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                  
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-500 border-t border-gray-200">
        <p>&copy; 2024 Maha - Front End Developer. All rights reserved.</p>
      </footer>
    </main>
  );
}