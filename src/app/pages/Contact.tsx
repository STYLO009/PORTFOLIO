import { motion } from "motion/react";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  Github,
  Linkedin,
  Twitter,
  Globe,
  MessageSquare,
} from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Thank you for your message! I'll get back to you soon.");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "your.email@example.com",
      href: "mailto:your.email@example.com",
      gradient: "from-blue-600 to-cyan-600",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567",
      gradient: "from-green-600 to-emerald-600",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Your City, Country",
      href: "#",
      gradient: "from-purple-600 to-pink-600",
    },
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      href: "https://github.com",
      gradient: "from-gray-700 to-gray-900",
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      href: "https://linkedin.com",
      gradient: "from-blue-600 to-blue-700",
    },
    {
      icon: <Twitter className="w-6 h-6" />,
      label: "Twitter",
      href: "https://twitter.com",
      gradient: "from-sky-500 to-blue-600",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      label: "Portfolio",
      href: "#",
      gradient: "from-purple-600 to-pink-600",
    },
  ];

  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 mb-6"
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <MessageSquare className="w-5 h-5 text-purple-400" />
            <span className="text-sm text-purple-300">Let's Connect</span>
          </motion.div>
          <h1 className="text-5xl font-bold text-white mb-4">Get in Touch</h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-300 mb-2 font-medium">Name</label>
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2 font-medium">Email</label>
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2 font-medium">Subject</label>
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                    placeholder="Project inquiry"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2 font-medium">Message</label>
                  <motion.textarea
                    whileFocus={{ scale: 1.01 }}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-medium flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-purple-500/50 transition-shadow"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info & Social */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Contact Information */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white mb-6">
                Contact Information
              </h2>
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="block"
                >
                  <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-purple-500/50 transition-all">
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-12 h-12 bg-gradient-to-br ${info.gradient} rounded-lg flex items-center justify-center text-white`}
                      >
                        {info.icon}
                      </div>
                      <div>
                        <div className="text-sm text-gray-400 mb-1">{info.label}</div>
                        <div className="text-white font-medium">{info.value}</div>
                      </div>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Media */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Follow Me</h2>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="block"
                  >
                    <div
                      className={`bg-gradient-to-br ${social.gradient} rounded-xl p-6 text-center`}
                    >
                      <div className="flex justify-center mb-3">{social.icon}</div>
                      <div className="text-white font-medium">{social.label}</div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8"
            >
              <h3 className="text-xl font-bold text-white mb-4">
                Currently Available for
              </h3>
              <div className="space-y-3">
                {[
                  "ML Engineering Projects",
                  "Research Collaborations",
                  "Consulting & Mentorship",
                  "Open Source Contributions",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-gray-300">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Response Time */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 text-center"
            >
              <div className="text-3xl font-bold text-white mb-2">24 Hours</div>
              <div className="text-gray-400">Average Response Time</div>
            </motion.div>
          </motion.div>
        </div>

        {/* FAQ or Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Let's Create Something Amazing
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Whether you're looking to build a cutting-edge ML solution, need technical
              consultation, or just want to discuss ideas, I'm here to help. Let's turn your
              vision into reality with the power of artificial intelligence and machine
              learning.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
