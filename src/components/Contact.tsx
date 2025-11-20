import { useState } from "react";
import { motion } from "motion/react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
  MessageSquare,
} from "lucide-react";

interface ContactProps {
  theme: "light" | "dark";
}

export default function Contact({ theme }: ContactProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setSubmitted(false);
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "ritnag2023@gmail.com",
      href: "mailto:ritnag2023@gmail.com",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 95648 89278",
      href: "tel:+919564889278",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Kolkata, India",
      href: "#",
      color: "from-blue-500 to-cyan-500",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/DebadritNag",
      color: "hover:text-purple-400",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com",
      color: "hover:text-blue-400",
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://twitter.com",
      color: "hover:text-cyan-400",
    },
    {
      icon: MessageSquare,
      label: "Discord",
      href: "https://discord.com",
      color: "hover:text-indigo-400",
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
            Get In Touch
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={`text-lg ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}
          >
            Let's discuss your next project
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.03, x: 10 }}
                  className={`block p-6 rounded-xl ${
                    theme === "dark"
                      ? "bg-gradient-to-br from-slate-900/70 to-slate-800/70 border border-purple-500/30"
                      : "bg-gradient-to-br from-white/70 to-slate-50/70 border border-purple-500/30"
                  } backdrop-blur-xl shadow-lg hover:shadow-xl transition-all duration-300`}
                >
                  <div className="flex items-center gap-4">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.5 }}
                      className={`w-14 h-14 rounded-full bg-gradient-to-br ${info.color} flex items-center justify-center shadow-lg`}
                    >
                      <info.icon className="w-7 h-7 text-white" />
                    </motion.div>
                    <div>
                      <p
                        className={`text-sm mb-1 ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}
                      >
                        {info.label}
                      </p>
                      <p
                        className={`text-lg ${theme === "dark" ? "text-white" : "text-slate-900"}`}
                      >
                        {info.value}
                      </p>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className={`p-8 rounded-xl ${
                theme === "dark"
                  ? "bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border border-purple-500/30"
                  : "bg-gradient-to-br from-purple-500/5 to-cyan-500/5 border border-purple-500/30"
              } backdrop-blur-xl shadow-lg`}
            >
              <h3
                className={`text-xl mb-6 ${theme === "dark" ? "text-white" : "text-slate-900"}`}
              >
                Connect on Social Media
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-12 h-12 rounded-lg ${
                      theme === "dark"
                        ? "bg-slate-900/50 text-slate-400"
                        : "bg-white/50 text-slate-600"
                    } border ${
                      theme === "dark"
                        ? "border-purple-500/20"
                        : "border-purple-500/30"
                    } flex items-center justify-center ${social.color} transition-colors duration-300`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className={`p-6 rounded-xl ${
                theme === "dark"
                  ? "bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/30"
                  : "bg-gradient-to-br from-green-500/5 to-emerald-500/5 border border-green-500/30"
              } backdrop-blur-xl shadow-lg`}
            >
              <div className="flex items-center gap-3">
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [1, 0.5, 1],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-3 h-3 rounded-full bg-green-500"
                />
                <p
                  className={`${theme === "dark" ? "text-green-400" : "text-green-600"}`}
                >
                  Available for freelance opportunities
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.form
              onSubmit={handleSubmit}
              className={`p-8 rounded-2xl ${
                theme === "dark"
                  ? "bg-gradient-to-br from-slate-900/70 to-slate-800/70 border border-purple-500/30"
                  : "bg-gradient-to-br from-white/70 to-slate-50/70 border border-purple-500/30"
              } backdrop-blur-xl shadow-xl space-y-6`}
            >
              {/* Name Field */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <label
                  htmlFor="name"
                  className={`block mb-2 ${theme === "dark" ? "text-slate-300" : "text-slate-700"}`}
                >
                  Your Name
                </label>
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-xl ${
                    theme === "dark"
                      ? "bg-slate-900/50 border-purple-500/30 text-white placeholder-slate-500"
                      : "bg-white/50 border-purple-500/30 text-slate-900 placeholder-slate-400"
                  } border-2 focus:border-purple-500 focus:outline-none transition-all duration-300`}
                  placeholder="John Doe"
                />
              </motion.div>

              {/* Email Field */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <label
                  htmlFor="email"
                  className={`block mb-2 ${theme === "dark" ? "text-slate-300" : "text-slate-700"}`}
                >
                  Your Email
                </label>
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-xl ${
                    theme === "dark"
                      ? "bg-slate-900/50 border-purple-500/30 text-white placeholder-slate-500"
                      : "bg-white/50 border-purple-500/30 text-slate-900 placeholder-slate-400"
                  } border-2 focus:border-purple-500 focus:outline-none transition-all duration-300`}
                  placeholder="john@example.com"
                />
              </motion.div>

              {/* Subject Field */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <label
                  htmlFor="subject"
                  className={`block mb-2 ${theme === "dark" ? "text-slate-300" : "text-slate-700"}`}
                >
                  Subject
                </label>
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-xl ${
                    theme === "dark"
                      ? "bg-slate-900/50 border-purple-500/30 text-white placeholder-slate-500"
                      : "bg-white/50 border-purple-500/30 text-slate-900 placeholder-slate-400"
                  } border-2 focus:border-purple-500 focus:outline-none transition-all duration-300`}
                  placeholder="Project Inquiry"
                />
              </motion.div>

              {/* Message Field */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <label
                  htmlFor="message"
                  className={`block mb-2 ${theme === "dark" ? "text-slate-300" : "text-slate-700"}`}
                >
                  Message
                </label>
                <motion.textarea
                  whileFocus={{ scale: 1.01 }}
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className={`w-full px-4 py-3 rounded-xl ${
                    theme === "dark"
                      ? "bg-slate-900/50 border-purple-500/30 text-white placeholder-slate-500"
                      : "bg-white/50 border-purple-500/30 text-slate-900 placeholder-slate-400"
                  } border-2 focus:border-purple-500 focus:outline-none transition-all duration-300 resize-none`}
                  placeholder="Tell me about your project..."
                />
              </motion.div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting || submitted}
                whileHover={
                  !isSubmitting && !submitted
                    ? {
                        scale: 1.02,
                        boxShadow:
                          "0 0 30px rgba(168, 85, 247, 0.5)",
                      }
                    : {}
                }
                whileTap={
                  !isSubmitting && !submitted
                    ? { scale: 0.98 }
                    : {}
                }
                className={`w-full py-4 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 ${
                  submitted
                    ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white"
                    : "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/50 hover:shadow-purple-500/80"
                } disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                    />
                    <span>Sending...</span>
                  </>
                ) : submitted ? (
                  <>
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring" }}
                    >
                      ✓
                    </motion.span>
                    <span>Message Sent!</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}