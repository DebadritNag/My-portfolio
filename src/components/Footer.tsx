import { motion } from "motion/react";
import {
  Heart,
  Github,
  Linkedin,
  Twitter,
  Mail,
} from "lucide-react";

interface FooterProps {
  theme: "light" | "dark";
}

export default function Footer({ theme }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/DebadritNag",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com",
      label: "LinkedIn",
    },
    {
      icon: Twitter,
      href: "https://twitter.com",
      label: "Twitter",
    },
    {
      icon: Mail,
      href: "mailto:ritnag2023@gmail.com",
      label: "Email",
    },
  ];

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer
      className={`relative ${
        theme === "dark"
          ? "bg-slate-950/80 border-t border-purple-500/20"
          : "bg-slate-100/80 border-t border-purple-500/30"
      } backdrop-blur-xl mt-20`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <motion.h3
              whileHover={{ scale: 1.05 }}
              className="text-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 bg-clip-text text-transparent"
            >
              Debadrit Nag
            </motion.h3>
            <p
              className={`${theme === "dark" ? "text-slate-400" : "text-slate-600"} leading-relaxed`}
            >
              Full-Stack Developer crafting innovative solutions
              with modern technologies.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-10 h-10 rounded-lg ${
                    theme === "dark"
                      ? "bg-slate-900/50 text-slate-400 hover:text-purple-400 border border-purple-500/20"
                      : "bg-white/50 text-slate-600 hover:text-purple-600 border border-purple-500/30"
                  } backdrop-blur-sm flex items-center justify-center transition-colors duration-300`}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <h4
              className={`text-lg ${theme === "dark" ? "text-white" : "text-slate-900"}`}
            >
              Quick Links
            </h4>
            <nav className="flex flex-col space-y-2">
              {quickLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.05 }}
                  whileHover={{ x: 5 }}
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById(
                      link.href.substring(1),
                    );
                    if (element) {
                      element.scrollIntoView({
                        behavior: "smooth",
                      });
                    }
                  }}
                  className={`${
                    theme === "dark"
                      ? "text-slate-400 hover:text-purple-400"
                      : "text-slate-600 hover:text-purple-600"
                  } transition-colors duration-300`}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h4
              className={`text-lg ${theme === "dark" ? "text-white" : "text-slate-900"}`}
            >
              Get in Touch
            </h4>
            <div className="space-y-3">
              <motion.a
                href="mailto:ritnag2023@gmail.com"
                whileHover={{ x: 5 }}
                className={`block ${
                  theme === "dark"
                    ? "text-slate-400 hover:text-purple-400"
                    : "text-slate-600 hover:text-purple-600"
                } transition-colors duration-300`}
              >
                ritnag2023@gmail.com
              </motion.a>
              <motion.p
                whileHover={{ x: 5 }}
                className={`${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}
              >
                +91 98765 43210
              </motion.p>
              <motion.p
                whileHover={{ x: 5 }}
                className={`${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}
              >
                Kolkata, India
              </motion.p>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          className={`h-px ${
            theme === "dark"
              ? "bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"
              : "bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"
          } mb-8`}
        />

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center"
        >
          <p
            className={`flex items-center justify-center gap-2 ${
              theme === "dark"
                ? "text-slate-400"
                : "text-slate-600"
            }`}
          >
            <span>
              © {currentYear} Debadrit Nag. Made with
            </span>
            <motion.span
              animate={{
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <Heart className="w-4 h-4 text-pink-500 fill-current" />
            </motion.span>
            <span>and</span>
            <motion.span
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              ⚛️
            </motion.span>
          </p>
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 opacity-50" />
      </div>
    </footer>
  );
}