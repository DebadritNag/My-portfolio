import { motion } from "motion/react";
import {
  GraduationCap,
  Award,
  Target,
  Rocket,
} from "lucide-react";

interface AboutProps {
  theme: "light" | "dark";
}

export default function About({ theme }: AboutProps) {
  const milestones = [
    {
      year: "2025",
      title: "Smart India Hackathon Screening Qualifier",
      description:
        "Qualified for SIH with innovative AI based Jal Arogya project",
      icon: Award,
    },
    {
      year: "2025",
      title: "Trigyn Technologies Internship",
      description: "Contributed to enterprise-level projects",
      icon: Rocket,
    },
    {
      year: "2022-ongoing",
      title: "Full-Stack Development",
      description: "Mastered React, Supabase, PHP & MySQL",
      icon: Target,
    },
    {
      year: "2023-2027",
      title: "Bachelors of Computer Application",
      description:
        "Pursuing advanced studies in computer application",
      icon: GraduationCap,
    },
  ];

  const achievements = [
    {
      icon: "🏆",
      title: "SIH Screening Round Qualifier",
      description: "Smart India Hackathon 2023",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: "💼",
      title: "Industry Experience",
      description: "Trigyn Technologies",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: "🚀",
      title: "HRMS Platform",
      description: "Sarjana - Full-Stack Project",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: "💡",
      title: "Innovation Focus",
      description: "SaaS & AI Solutions",
      color: "from-green-500 to-emerald-500",
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
            About Me
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={`text-lg ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}
          >
            Journey, Achievements & Milestones
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left - Story & Achievements */}
          <div className="space-y-8">
            {/* Story Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className={`p-8 rounded-2xl ${
                theme === "dark"
                  ? "bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border border-purple-500/30"
                  : "bg-gradient-to-br from-purple-500/5 to-cyan-500/5 border border-purple-500/30"
              } backdrop-blur-xl shadow-xl ${
                theme === "dark"
                  ? "shadow-purple-500/20"
                  : "shadow-purple-500/10"
              }`}
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, type: "spring" }}
                className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mb-6 shadow-lg shadow-purple-500/50"
              >
                <span className="text-3xl">👨‍💻</span>
              </motion.div>

              <h3
                className={`text-2xl mb-4 ${theme === "dark" ? "text-white" : "text-slate-900"}`}
              >
                My Journey
              </h3>
              <p
                className={`${theme === "dark" ? "text-slate-300" : "text-slate-700"} leading-relaxed mb-4`}
              >
                I'm a passionate full-stack developer with a
                strong foundation in modern web technologies. My
                journey began with a curiosity for
                problem-solving and has evolved into creating
                impactful solutions for real-world challenges.
              </p>
              <p
                className={`${theme === "dark" ? "text-slate-300" : "text-slate-700"} leading-relaxed mb-4`}
              >
                Through my internship at{" "}
                <span className="text-purple-500">
                  Trigyn Technologies
                </span>{" "}
                and participation in the{" "}
                <span className="text-cyan-500">
                  Smart India Hackathon
                </span>
                , I've gained invaluable experience in
                delivering enterprise-grade applications and
                innovative solutions.
              </p>
              <p
                className={`${theme === "dark" ? "text-slate-300" : "text-slate-700"} leading-relaxed`}
              >
                I specialize in building scalable SaaS
                platforms, with expertise in React, Supabase,
                and modern backend technologies. My focus is on
                creating user-centric applications that combine
                beautiful design with robust functionality.
              </p>
            </motion.div>

            {/* Achievement Cards Grid */}
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className={`p-6 rounded-xl ${
                    theme === "dark"
                      ? "bg-slate-900/50 border border-purple-500/20"
                      : "bg-white/50 border border-purple-500/30"
                  } backdrop-blur-xl shadow-lg hover:shadow-xl transition-all duration-300`}
                >
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                    className={`text-4xl mb-3 inline-block p-3 rounded-lg bg-gradient-to-br ${achievement.color} bg-opacity-10`}
                  >
                    {achievement.icon}
                  </motion.div>
                  <h4
                    className={`mb-2 ${theme === "dark" ? "text-white" : "text-slate-900"}`}
                  >
                    {achievement.title}
                  </h4>
                  <p
                    className={`text-sm ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}
                  >
                    {achievement.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right - Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="relative">
              {/* Timeline Line */}
              <div
                className={`absolute left-8 top-0 bottom-0 w-0.5 ${
                  theme === "dark"
                    ? "bg-gradient-to-b from-purple-500 via-pink-500 to-cyan-500"
                    : "bg-gradient-to-b from-purple-400 via-pink-400 to-cyan-400"
                } opacity-30`}
              />

              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative flex gap-6 mb-8 last:mb-0"
                >
                  {/* Icon */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.2 + 0.2,
                      type: "spring",
                    }}
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    className={`relative z-10 w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center shadow-lg ${
                      theme === "dark"
                        ? "shadow-purple-500/50"
                        : "shadow-purple-500/30"
                    }`}
                  >
                    <milestone.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Content Card */}
                  <motion.div
                    whileHover={{ scale: 1.02, x: 5 }}
                    className={`flex-1 p-6 rounded-xl ${
                      theme === "dark"
                        ? "bg-gradient-to-br from-slate-900/70 to-slate-800/70 border border-purple-500/30"
                        : "bg-gradient-to-br from-white/70 to-slate-50/70 border border-purple-500/30"
                    } backdrop-blur-xl shadow-lg hover:shadow-xl transition-all duration-300`}
                  >
                    <motion.span
                      className={`inline-block px-3 py-1 rounded-full text-sm mb-3 ${
                        theme === "dark"
                          ? "bg-purple-500/20 text-purple-300"
                          : "bg-purple-500/10 text-purple-600"
                      }`}
                    >
                      {milestone.year}
                    </motion.span>
                    <h4
                      className={`text-xl mb-2 ${theme === "dark" ? "text-white" : "text-slate-900"}`}
                    >
                      {milestone.title}
                    </h4>
                    <p
                      className={`${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}
                    >
                      {milestone.description}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}