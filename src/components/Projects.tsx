import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ExternalLink,
  Github,
  ChevronDown,
  ChevronUp,
  Sparkles,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ProjectsProps {
  theme: "light" | "dark";
}

export default function Projects({ theme }: ProjectsProps) {
  const [expandedProject, setExpandedProject] = useState<
    number | null
  >(null);

  const projects = [
    {
      title: "Sarjana HRMS",
      subtitle: "Human Resource Management System",
      description:
        "A comprehensive HRMS platform built with React and Supabase, featuring employee management, attendance tracking, leave management, and performance reviews.",
      fullDescription:
        "Sarjana is a full-featured Human Resource Management System designed to streamline HR operations for modern businesses. The platform includes modules for employee onboarding, attendance tracking, leave management, payroll processing, and performance evaluations. Built with real-time data synchronization using Supabase, the system ensures data consistency across all devices.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
      technologies: [
        "React",
        "Supabase",
        "TypeScript",
        "Tailwind CSS",
        "PostgreSQL",
        "REST APIs",
      ],
      category: "Full-Stack",
      color: "from-purple-500 to-pink-500",
      highlights: [
        "Real-time data synchronization",
        "Role-based access control",
        "Interactive dashboards with data visualization",
        "Automated email notifications",
        "Mobile-responsive design",
      ],
      github: "https://github.com/DebadritNag/V2Sarj",
      demo: "https://demo.com",
      year: "2025",
    },
    {
      title: "Jal Arogya",
      subtitle: "Smart India Hackathon Project",
      description:
        "Water quality monitoring and analysis platform that qualified for Smart India Hackathon 2025. Features real-time data collection, analysis, and reporting.",
      fullDescription:
        "Jal Arogya is an innovative solution for monitoring and analyzing water quality across multiple sources. The platform aggregates data from IoT sensors, performs real-time analysis using machine learning algorithms, and provides actionable insights through intuitive dashboards. The project addresses critical challenges in water resource management and public health.",
      image:
        "https://images.unsplash.com/photo-1583909292639-6bcc0bb5191e?w=800",
      technologies: [
        "Python",
        "React",
        "Data Analytics",
        "Machine Learning",
        "APIs",
        "Chart.js",
      ],
      category: "Data & Analytics",
      color: "from-green-500 to-emerald-500",
      highlights: [
        "Real-time water quality monitoring",
        "Predictive analytics using ML",
        "Geographic data visualization",
        "Alert system for contamination",
        "Qualified for SIH 2023",
      ],
      github: "https://github.com/DebadritNag/Jal-Arogya",
      demo: "https://demo.com",
      year: "2025",
    },
    {
      title: "E-Voting Platform",
      subtitle: "Secure Electronic Voting System",
      description:
        "A secure and transparent electronic voting platform built with PHP and MySQL, featuring encrypted vote storage, admin dashboard, and comprehensive audit trails.",
      fullDescription:
        "This E-Voting Platform ensures the integrity and security of digital elections through advanced encryption techniques and comprehensive audit mechanisms. The system supports multiple election types, voter authentication, real-time vote counting, and detailed result analytics. Built with security as the top priority, it implements multiple layers of protection against tampering and fraud.",
      image:
        "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?w=800",
      technologies: [
        "PHP",
        "MySQL",
        "JavaScript",
        "HTML/CSS",
        "Security",
        "Encryption",
      ],
      category: "Backend",
      color: "from-orange-500 to-red-500",
      highlights: [
        "End-to-end vote encryption",
        "Secure voter authentication",
        "Real-time vote counting",
        "Admin dashboard for election management",
        "Comprehensive audit trails",
      ],
      github: "https://github.com/DebadritNag/Voting-System",
      demo: "https://demo.com",
      year: "2025",
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-7xl w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl lg:text-6xl bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 bg-clip-text text-transparent mb-4"
          >
            Featured Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={`text-lg ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}
          >
            Showcasing my best work and innovations
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group"
            >
              <motion.div
                whileHover={{ scale: 1.01 }}
                className={`overflow-hidden rounded-2xl ${
                  theme === "dark"
                    ? "bg-gradient-to-br from-slate-900/70 to-slate-800/70 border border-purple-500/30"
                    : "bg-gradient-to-br from-white/70 to-slate-50/70 border border-purple-500/30"
                } backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all duration-500`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Project Image */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="relative overflow-hidden h-64 lg:h-auto"
                  >
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />

                    {/* Overlay with year badge */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      className={`absolute top-4 right-4 px-4 py-2 rounded-full bg-gradient-to-r ${project.color} text-white shadow-lg`}
                    >
                      {project.year}
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className={`absolute bottom-4 left-4 px-4 py-2 rounded-full ${
                        theme === "dark"
                          ? "bg-slate-900/80 text-purple-300 border border-purple-500/30"
                          : "bg-white/80 text-purple-600 border border-purple-500/30"
                      } backdrop-blur-xl text-sm`}
                    >
                      {project.category}
                    </motion.div>
                  </motion.div>

                  {/* Project Details */}
                  <div className="p-8 flex flex-col justify-between">
                    <div>
                      {/* Title */}
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="mb-4"
                      >
                        <h3
                          className={`text-3xl mb-2 bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}
                        >
                          {project.title}
                        </h3>
                        <p
                          className={`text-lg ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}
                        >
                          {project.subtitle}
                        </p>
                      </motion.div>

                      {/* Description */}
                      <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className={`mb-6 leading-relaxed ${theme === "dark" ? "text-slate-300" : "text-slate-700"}`}
                      >
                        {expandedProject === index
                          ? project.fullDescription
                          : project.description}
                      </motion.p>

                      {/* Expand Button */}
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() =>
                          setExpandedProject(
                            expandedProject === index
                              ? null
                              : index,
                          )
                        }
                        className={`flex items-center gap-2 mb-6 text-sm ${
                          theme === "dark"
                            ? "text-purple-400"
                            : "text-purple-600"
                        } hover:underline`}
                      >
                        {expandedProject === index ? (
                          <>
                            <span>Show Less</span>
                            <ChevronUp className="w-4 h-4" />
                          </>
                        ) : (
                          <>
                            <span>Read More</span>
                            <ChevronDown className="w-4 h-4" />
                          </>
                        )}
                      </motion.button>

                      {/* Highlights */}
                      <AnimatePresence>
                        {expandedProject === index && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{
                              opacity: 1,
                              height: "auto",
                            }}
                            exit={{ opacity: 0, height: 0 }}
                            className="mb-6"
                          >
                            <h4
                              className={`flex items-center gap-2 mb-3 ${
                                theme === "dark"
                                  ? "text-purple-400"
                                  : "text-purple-600"
                              }`}
                            >
                              <Sparkles className="w-4 h-4" />
                              <span>Key Highlights</span>
                            </h4>
                            <ul className="space-y-2">
                              {project.highlights.map(
                                (highlight, i) => (
                                  <motion.li
                                    key={i}
                                    initial={{
                                      opacity: 0,
                                      x: -20,
                                    }}
                                    animate={{
                                      opacity: 1,
                                      x: 0,
                                    }}
                                    transition={{
                                      delay: i * 0.1,
                                    }}
                                    className={`flex items-start gap-2 ${
                                      theme === "dark"
                                        ? "text-slate-400"
                                        : "text-slate-600"
                                    }`}
                                  >
                                    <span
                                      className={`inline-block mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${project.color} flex-shrink-0`}
                                    />
                                    <span>{highlight}</span>
                                  </motion.li>
                                ),
                              )}
                            </ul>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Technologies */}
                      <div className="mb-6">
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map(
                            (tech, i) => (
                              <motion.span
                                key={i}
                                initial={{
                                  opacity: 0,
                                  scale: 0.8,
                                }}
                                whileInView={{
                                  opacity: 1,
                                  scale: 1,
                                }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                whileHover={{
                                  scale: 1.1,
                                  y: -2,
                                }}
                                className={`px-3 py-1 rounded-lg text-sm ${
                                  theme === "dark"
                                    ? "bg-gradient-to-r from-purple-500/10 to-cyan-500/10 text-purple-300 border border-purple-500/20"
                                    : "bg-gradient-to-r from-purple-500/5 to-cyan-500/5 text-purple-600 border border-purple-500/30"
                                }`}
                              >
                                {tech}
                              </motion.span>
                            ),
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4">
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{
                          scale: 1.05,
                          boxShadow:
                            "0 0 20px rgba(168, 85, 247, 0.4)",
                        }}
                        whileTap={{ scale: 0.95 }}
                        className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r ${project.color} text-white shadow-lg transition-all duration-300`}
                      >
                        <ExternalLink className="w-5 h-5" />
                        <span>View Demo</span>
                      </motion.a>
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl border-2 ${
                          theme === "dark"
                            ? "border-purple-500/50 text-purple-300 hover:bg-purple-500/10"
                            : "border-purple-500 text-purple-600 hover:bg-purple-500/10"
                        } backdrop-blur-sm transition-all duration-300`}
                      >
                        <Github className="w-5 h-5" />
                        <span>GitHub</span>
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Additional Projects Teaser */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className={`inline-block p-8 rounded-2xl ${
              theme === "dark"
                ? "bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border border-purple-500/30"
                : "bg-gradient-to-br from-purple-500/5 to-cyan-500/5 border border-purple-500/30"
            } backdrop-blur-xl shadow-xl`}
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-4xl mb-4"
            >
              🚀
            </motion.div>
            <h3
              className={`text-xl mb-2 ${theme === "dark" ? "text-white" : "text-slate-900"}`}
            >
              More Projects Coming Soon
            </h3>
            <p
              className={`${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}
            >
              Currently working on exciting new projects
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}