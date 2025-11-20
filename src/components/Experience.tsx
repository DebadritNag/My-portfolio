import { motion } from "motion/react";
import {
  Briefcase,
  Calendar,
  MapPin,
  Award,
} from "lucide-react";

interface ExperienceProps {
  theme: "light" | "dark";
}

export default function Experience({ theme }: ExperienceProps) {
  const experiences = [
    {
      company: "Trigyn Technologies",
      role: "Python Developer Intern",
      period: "Apr 2025 - Jul 2025",
      location: "Remote",
      description:
        "Contributed to backend development of enterprise-grade applications, leveraging Python and industry-standard practices during a professional internship.",
      achievements: [
        "Developed responsive UI components using React and modern CSS frameworks",
        "Collaborated with senior developers on API integration and database optimization",
        "Participated in code reviews and agile development practices",
        "Improved application performance by 25% through optimization techniques",
      ],
      technologies: [
        "React",
        "Python",
        "Flask",
        "REST APIs",
        "Git",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      company: "Sarjana Ltd",
      role: "Full-Stack Developer Intern",
      period: "Oct 2025 - Nov 2025",
      location: "Remote",
      description:
        "Built a comprehensive Human Resource Management System using React and Supabase.",
      achievements: [
        "Designed and implemented full-stack HRMS platform with employee management",
        "Integrated Supabase for real-time data synchronization and authentication",
        "Created intuitive dashboards with data visualization and reporting features",
        "Implemented role-based access control and secure data handling",
      ],
      technologies: [
        "React",
        "Supabase",
        "TypeScript",
        "Tailwind CSS",
        "PostgreSQL",
      ],
      color: "from-purple-500 to-pink-500",
    },
    {
      company: "Smart India Hackathon",
      role: "Team Lead - Jal Arogya Project",
      period: "Sep 2025 - Oct 2025",
      location: "National Competition",
      description:
        "Led team to qualification round with innovative water quality monitoring solution.",
      achievements: [
        "Qualified for Smart India Hackathon 2023 with Jal Arogya project",
        "Developed data-driven solution for water quality analysis and monitoring",
        "Coordinated team of 6 developers for rapid prototype development",
        "Presented solution to panel of judges and industry experts",
      ],
      technologies: [
        "Python",
        "Data Analytics",
        "React",
        "APIs",
        "Database Design",
      ],
      color: "from-green-500 to-emerald-500",
    },
    {
      company: "E-Voting Platform",
      role: "Backend Developer",
      period: "Sep 2025 - Nov 2025",
      location: "Academic Project",
      description:
        "Developed secure electronic voting system with PHP and MySQL.",
      achievements: [
        "Built secure authentication and authorization system",
        "Implemented vote encryption and database security measures",
        "Created admin dashboard for election management",
        "Ensured system integrity with comprehensive testing",
      ],
      technologies: [
        "PHP",
        "MySQL",
        "JavaScript",
        "Laravel",
        "Blockchain",
      ],
      color: "from-orange-500 to-red-500",
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
            Experience
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={`text-lg ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}
          >
            Professional journey and key projects
          </motion.p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Central Timeline Line */}
          <div
            className={`hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 -ml-px ${
              theme === "dark"
                ? "bg-gradient-to-b from-purple-500 via-pink-500 to-cyan-500"
                : "bg-gradient-to-b from-purple-400 via-pink-400 to-cyan-400"
            } opacity-30`}
          />

          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`relative mb-12 lg:mb-20 ${
                index % 2 === 0
                  ? "lg:pr-12"
                  : "lg:pl-12 lg:ml-auto"
              } lg:w-1/2`}
            >
              {/* Timeline Dot */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.2 + 0.2,
                  type: "spring",
                }}
                className={`hidden lg:flex absolute ${
                  index % 2 === 0 ? "-right-6" : "-left-6"
                } top-8 w-12 h-12 rounded-full bg-gradient-to-br ${experience.color} shadow-lg items-center justify-center z-10`}
              >
                <Briefcase className="w-6 h-6 text-white" />
              </motion.div>

              {/* Experience Card */}
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className={`p-8 rounded-2xl ${
                  theme === "dark"
                    ? "bg-gradient-to-br from-slate-900/70 to-slate-800/70 border border-purple-500/30"
                    : "bg-gradient-to-br from-white/70 to-slate-50/70 border border-purple-500/30"
                } backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all duration-300`}
              >
                {/* Header */}
                <div className="mb-6">
                  <motion.div
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm mb-4 ${
                      theme === "dark"
                        ? "bg-purple-500/20 text-purple-300 border border-purple-500/30"
                        : "bg-purple-500/10 text-purple-600 border border-purple-500/30"
                    }`}
                  >
                    <Calendar className="w-4 h-4" />
                    {experience.period}
                  </motion.div>

                  <h3
                    className={`text-2xl mb-2 ${theme === "dark" ? "text-white" : "text-slate-900"}`}
                  >
                    {experience.role}
                  </h3>

                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <span
                      className={`flex items-center gap-2 ${
                        theme === "dark"
                          ? "text-cyan-400"
                          : "text-cyan-600"
                      }`}
                    >
                      <Briefcase className="w-4 h-4" />
                      {experience.company}
                    </span>
                    <span
                      className={`flex items-center gap-2 ${
                        theme === "dark"
                          ? "text-slate-400"
                          : "text-slate-600"
                      }`}
                    >
                      <MapPin className="w-4 h-4" />
                      {experience.location}
                    </span>
                  </div>

                  <p
                    className={`${theme === "dark" ? "text-slate-300" : "text-slate-700"} leading-relaxed`}
                  >
                    {experience.description}
                  </p>
                </div>

                {/* Achievements */}
                <div className="mb-6">
                  <h4
                    className={`flex items-center gap-2 mb-4 ${
                      theme === "dark"
                        ? "text-purple-400"
                        : "text-purple-600"
                    }`}
                  >
                    <Award className="w-5 h-5" />
                    <span>Key Achievements</span>
                  </h4>
                  <ul className="space-y-3">
                    {experience.achievements.map(
                      (achievement, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            delay: index * 0.2 + i * 0.1,
                          }}
                          className={`flex items-start gap-3 ${
                            theme === "dark"
                              ? "text-slate-400"
                              : "text-slate-600"
                          }`}
                        >
                          <motion.span
                            whileHover={{
                              scale: 1.3,
                              rotate: 360,
                            }}
                            className={`inline-block mt-1 w-2 h-2 rounded-full bg-gradient-to-r ${experience.color} flex-shrink-0`}
                          />
                          <span>{achievement}</span>
                        </motion.li>
                      ),
                    )}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4
                    className={`mb-3 text-sm ${
                      theme === "dark"
                        ? "text-slate-500"
                        : "text-slate-600"
                    }`}
                  >
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: index * 0.2 + i * 0.05,
                        }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className={`px-3 py-1 rounded-lg text-sm ${
                          theme === "dark"
                            ? "bg-gradient-to-r from-purple-500/10 to-cyan-500/10 text-purple-300 border border-purple-500/20"
                            : "bg-gradient-to-r from-purple-500/5 to-cyan-500/5 text-purple-600 border border-purple-500/30"
                        }`}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            {
              title: "Communication",
              icon: "💬",
              desc: "Strong presentation and collaboration skills",
            },
            {
              title: "Problem Solving",
              icon: "🧩",
              desc: "Analytical thinking and creative solutions",
            },
            {
              title: "Team Leadership",
              icon: "👥",
              desc: "Experience leading development teams",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className={`p-6 rounded-xl text-center ${
                theme === "dark"
                  ? "bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border border-purple-500/30"
                  : "bg-gradient-to-br from-purple-500/5 to-cyan-500/5 border border-purple-500/30"
              } backdrop-blur-xl shadow-lg hover:shadow-xl transition-all duration-300`}
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="text-5xl mb-4"
              >
                {item.icon}
              </motion.div>
              <h4
                className={`text-lg mb-2 ${theme === "dark" ? "text-white" : "text-slate-900"}`}
              >
                {item.title}
              </h4>
              <p
                className={`text-sm ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}
              >
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}