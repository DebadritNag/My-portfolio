import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Code2,
  Database,
  Cloud,
  Wrench,
  Sparkles,
} from "lucide-react";

interface SkillsProps {
  theme: "light" | "dark";
}

type SkillCategory =
  | "all"
  | "frontend"
  | "backend"
  | "cloud"
  | "tools";

export default function Skills({ theme }: SkillsProps) {
  const [activeCategory, setActiveCategory] =
    useState<SkillCategory>("all");

  const categories = [
    {
      id: "all" as SkillCategory,
      label: "All Skills",
      icon: Sparkles,
    },
    {
      id: "frontend" as SkillCategory,
      label: "Frontend",
      icon: Code2,
    },
    {
      id: "backend" as SkillCategory,
      label: "Backend",
      icon: Database,
    },
    {
      id: "cloud" as SkillCategory,
      label: "Cloud & DB",
      icon: Cloud,
    },
    {
      id: "tools" as SkillCategory,
      label: "Tools",
      icon: Wrench,
    },
  ];

  const skills = [
    {
      name: "React",
      category: "frontend",
      level: 85,
      icon: "⚛️",
      color: "from-cyan-500 to-blue-500",
    },
    {
      name: "JavaScript",
      category: "frontend",
      level: 90,
      icon: "📜",
      color: "from-yellow-500 to-orange-500",
    },
    {
      name: "TypeScript",
      category: "frontend",
      level: 88,
      icon: "🔷",
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "CSS/Tailwind",
      category: "frontend",
      level: 90,
      icon: "🎨",
      color: "from-pink-500 to-purple-500",
    },
    {
      name: "HTML5",
      category: "frontend",
      level: 95,
      icon: "🌐",
      color: "from-orange-500 to-red-500",
    },
    {
      name: "Python",
      category: "backend",
      level: 85,
      icon: "🐍",
      color: "from-blue-500 to-green-500",
    },
    {
      name: "PHP",
      category: "backend",
      level: 86,
      icon: "🐘",
      color: "from-indigo-500 to-purple-500",
    },
    {
      name: "Node.js",
      category: "backend",
      level: 80,
      icon: "💚",
      color: "from-green-500 to-emerald-500",
    },
    {
      name: "Supabase",
      category: "cloud",
      level: 93,
      icon: "⚡",
      color: "from-green-500 to-cyan-500",
    },
    {
      name: "MySQL",
      category: "cloud",
      level: 88,
      icon: "🗄️",
      color: "from-blue-500 to-indigo-500",
    },
    {
      name: "PostgreSQL",
      category: "cloud",
      level: 85,
      icon: "🐘",
      color: "from-blue-600 to-blue-400",
    },
    {
      name: "Firebase",
      category: "cloud",
      level: 80,
      icon: "🔥",
      color: "from-yellow-500 to-orange-500",
    },
    {
      name: "Git",
      category: "tools",
      level: 90,
      icon: "📦",
      color: "from-orange-500 to-red-500",
    },
    {
      name: "VS Code",
      category: "tools",
      level: 95,
      icon: "💻",
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Figma",
      category: "tools",
      level: 78,
      icon: "🎯",
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "REST APIs",
      category: "tools",
      level: 82,
      icon: "🔌",
      color: "from-green-500 to-teal-500",
    },
  ];

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter(
          (skill) => skill.category === activeCategory,
        );

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
            Skills & Expertise
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={`text-lg ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}
          >
            Technologies I work with
          </motion.p>
        </motion.div>

        {/* Filter Chips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-xl flex items-center gap-2 transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/50"
                  : theme === "dark"
                    ? "bg-slate-900/50 border border-purple-500/30 text-slate-300 hover:bg-purple-500/10"
                    : "bg-white/50 border border-purple-500/30 text-slate-700 hover:bg-purple-500/10"
              } backdrop-blur-xl`}
            >
              <category.icon className="w-5 h-5" />
              <span>{category.label}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`p-6 rounded-xl ${
                  theme === "dark"
                    ? "bg-gradient-to-br from-slate-900/70 to-slate-800/70 border border-purple-500/30"
                    : "bg-gradient-to-br from-white/70 to-slate-50/70 border border-purple-500/30"
                } backdrop-blur-xl shadow-lg hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300`}
              >
                {/* Skill Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className={`text-4xl p-2 rounded-lg bg-gradient-to-br ${skill.color} bg-opacity-10`}
                    >
                      {skill.icon}
                    </motion.div>
                    <div>
                      <h3
                        className={`text-lg ${theme === "dark" ? "text-white" : "text-slate-900"}`}
                      >
                        {skill.name}
                      </h3>
                      <span
                        className={`text-sm ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}
                      >
                        {skill.level}% Proficiency
                      </span>
                    </div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div
                  className={`h-3 rounded-full ${
                    theme === "dark"
                      ? "bg-slate-800"
                      : "bg-slate-200"
                  } overflow-hidden relative`}
                >
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1,
                      delay: index * 0.05,
                    }}
                    className={`h-full bg-gradient-to-r ${skill.color} relative overflow-hidden`}
                  >
                    {/* Shimmer effect */}
                    <motion.div
                      animate={{
                        x: ["-100%", "100%"],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    />
                  </motion.div>
                </div>

                {/* Skill Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 + 0.3 }}
                  className={`mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs ${
                    skill.level >= 90
                      ? "bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-400 border border-green-500/30"
                      : skill.level >= 80
                        ? "bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-400 border border-blue-500/30"
                        : "bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-400 border border-purple-500/30"
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-current animate-pulse" />
                  {skill.level >= 90
                    ? "Expert"
                    : skill.level >= 80
                      ? "Advanced"
                      : "Intermediate"}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
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
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="text-4xl mb-4"
            >
              🚀
            </motion.div>
            <h3
              className={`text-xl mb-2 ${theme === "dark" ? "text-white" : "text-slate-900"}`}
            >
              Always Learning
            </h3>
            <p
              className={`${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}
            >
              Continuously expanding my skill set with emerging
              technologies
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}