import { motion } from "motion/react";
import {
  LucideGithub as Github,
  Linkedin,
  Mail,
  Download,
  Twitter,
  Code2,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import myPic from "../assets/mypic.png";

interface HeroProps {
  theme: "light" | "dark";
}

export default function Hero({ theme }: HeroProps) {
  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/DebadritNag",
      label: "GitHub",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com",
      label: "LinkedIn",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Twitter,
      href: "https://twitter.com",
      label: "Twitter",
      color: "from-cyan-500 to-blue-500",
    },
    {
      icon: Mail,
      href: "mailto:ritnag2023@gmail.com",
      label: "Email",
      color: "from-pink-500 to-purple-500",
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
      <div className="max-w-7xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block"
            >
              <span
                className={`text-lg ${theme === "dark" ? "text-purple-400" : "text-purple-600"}`}
              >
                Hello, I'm
              </span>
            </motion.div>

            {/* Name with gradient animation */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="relative"
            >
              <span className="text-5xl sm:text-6xl lg:text-7xl bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 bg-clip-text text-transparent animate-gradient bg-300%">
                Debadrit Nag
              </span>
            </motion.h1>

            {/* Tagline with typing effect */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className={`text-xl sm:text-2xl ${theme === "dark" ? "text-slate-300" : "text-slate-700"} space-y-2`}
            >
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
              >
                Full-Stack Developer
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
                className="flex items-center gap-2"
              >
                <Code2 className="w-5 h-5" />
                <span>App Developer</span>
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
              >
                React & Supabase Specialist
              </motion.p>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className={`text-lg ${theme === "dark" ? "text-slate-400" : "text-slate-600"} leading-relaxed`}
            >
              Crafting scalable web applications with
              cutting-edge technologies. Passionate about
              creating innovative solutions that make a
              difference.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(168, 85, 247, 0.5)",
                }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl shadow-lg shadow-purple-500/50 hover:shadow-purple-500/80 transition-all duration-300 flex items-center gap-3"
              >
                <Download className="w-5 h-5 group-hover:animate-bounce" />
                <span>Download CV</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const element =
                    document.getElementById("contact");
                  if (element) {
                    element.scrollIntoView({
                      behavior: "smooth",
                    });
                  }
                }}
                className={`px-8 py-4 rounded-xl border-2 ${
                  theme === "dark"
                    ? "border-purple-500/50 text-purple-300 hover:bg-purple-500/10"
                    : "border-purple-500 text-purple-600 hover:bg-purple-500/10"
                } backdrop-blur-sm transition-all duration-300`}
              >
                Get in Touch
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
              className="flex gap-4"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-3 rounded-lg bg-gradient-to-br ${social.color} bg-opacity-10 backdrop-blur-sm border ${
                    theme === "dark"
                      ? "border-purple-500/30"
                      : "border-purple-500/50"
                  } ${theme === "dark" ? "text-purple-300" : "text-purple-600"} hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300`}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Avatar with Glass Frame */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: 0.3,
            }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Animated glow rings */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 blur-3xl opacity-30"
              />

              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="absolute inset-4 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 blur-2xl opacity-40"
              />

              {/* Glass frame */}
              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full p-1 bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-500`}
              >
                <div
                  className={`w-full h-full rounded-full ${
                    theme === "dark"
                      ? "bg-slate-900/50"
                      : "bg-white/50"
                  } backdrop-blur-xl border-4 ${
                    theme === "dark"
                      ? "border-purple-500/30"
                      : "border-purple-500/50"
                  } overflow-hidden shadow-2xl shadow-purple-500/50`}
                >
                  <ImageWithFallback
                    src={myPic}
                    alt="Debadrit Nag"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5, type: "spring" }}
                whileHover={{ scale: 1.1, rotate: 10 }}
                className={`absolute -bottom-4 -right-4 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-xl shadow-purple-500/50 border-4 ${
                  theme === "dark"
                    ? "border-slate-900"
                    : "border-white"
                }`}
              >
                <motion.span
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  ✨
                </motion.span>
                <span className="ml-2">Available</span>
              </motion.div>

              {/* Floating particles */}
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"
                  style={{
                    top: `${20 + i * 15}%`,
                    left: `${-10 + i * 5}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2 + i * 0.5,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className={`w-6 h-10 border-2 ${
              theme === "dark"
                ? "border-purple-500/50"
                : "border-purple-500"
            } rounded-full flex justify-center pt-2`}
          >
            <motion.div
              animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className={`w-1.5 h-1.5 ${
                theme === "dark"
                  ? "bg-purple-500"
                  : "bg-purple-600"
              } rounded-full`}
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}