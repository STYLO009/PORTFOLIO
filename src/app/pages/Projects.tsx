import { motion } from "motion/react";
import { ExternalLink, Github, MessageSquare, Mic, TrendingUp } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function Projects() {
  const projects = [
    {
      title: "Sanjeevani",
      subtitle: "Healthcare Chatbot",
      description:
        "An intelligent healthcare chatbot powered by NLP and machine learning that provides medical information, symptom analysis, and health recommendations. Built using transformers and fine-tuned language models for accurate medical query responses.",
      image:
        "https://images.unsplash.com/photo-1682941664177-7920d0e59418?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwbWVkaWNhbCUyMHRlY2hub2xvZ3klMjBjaGF0Ym90fGVufDF8fHx8MTc3MzkzOTM2MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      icon: <MessageSquare className="w-6 h-6" />,
      tech: ["Python", "NLP", "TensorFlow", "Flask", "BERT"],
      gradient: "from-green-600 to-emerald-600",
    },
    {
      title: "Jarvis",
      subtitle: "Smart Voice Bot",
      description:
        "An advanced voice-activated AI assistant that performs tasks through voice commands. Integrated with speech recognition, natural language understanding, and text-to-speech capabilities. Supports home automation, web searches, and productivity tasks.",
      image:
        "https://images.unsplash.com/photo-1760087616415-62270db23966?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2b2ljZSUyMGFzc2lzdGFudCUyMHNtYXJ0JTIwc3BlYWtlciUyMEFJfGVufDF8fHx8MTc3MzkzOTM2MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      icon: <Mic className="w-6 h-6" />,
      tech: ["Python", "Speech Recognition", "PyTorch", "OpenAI", "FastAPI"],
      gradient: "from-blue-600 to-cyan-600",
    },
    {
      title: "Loan Predictor",
      subtitle: "ML Prediction Model",
      description:
        "A comprehensive machine learning model for loan approval prediction using ensemble methods and deep learning. Analyzes credit history, income, employment, and other factors to predict loan eligibility with high accuracy. Includes data visualization dashboard.",
      image:
        "https://images.unsplash.com/photo-1618044733300-9472054094ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZmluYW5jaWFsJTIwcHJlZGljdGlvbnxlbnwxfHx8fDE3NzM5MzkzNjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      icon: <TrendingUp className="w-6 h-6" />,
      tech: ["Python", "Scikit-learn", "XGBoost", "Pandas", "Django"],
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
          <h1 className="text-5xl font-bold text-white mb-4">Featured Projects</h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Innovative machine learning solutions solving real-world problems
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-20">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div
                className={`grid lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}
              >
                {/* Image */}
                <motion.div
                  className={`relative ${index % 2 === 1 ? "lg:col-start-2" : ""}`}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative rounded-2xl overflow-hidden border border-slate-700/50 group-hover:border-purple-500/50 transition-all shadow-2xl">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-[400px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                    {/* Floating Icon */}
                    <motion.div
                      className={`absolute top-6 right-6 w-14 h-14 bg-gradient-to-br ${project.gradient} rounded-xl flex items-center justify-center text-white shadow-lg`}
                      animate={{
                        y: [0, -8, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      {project.icon}
                    </motion.div>
                  </div>
                </motion.div>

                {/* Content */}
                <div className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                  <div>
                    <motion.div
                      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      <div
                        className={`inline-block px-4 py-1 rounded-full bg-gradient-to-r ${project.gradient} text-white text-sm font-medium mb-4`}
                      >
                        {project.subtitle}
                      </div>
                    </motion.div>

                    <motion.h2
                      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className="text-4xl font-bold text-white mb-4"
                    >
                      {project.title}
                    </motion.h2>

                    <motion.p
                      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="text-gray-300 text-lg leading-relaxed"
                    >
                      {project.description}
                    </motion.p>
                  </div>

                  {/* Tech Stack */}
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="flex flex-wrap gap-3"
                  >
                    {project.tech.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        whileHover={{ scale: 1.1 }}
                        className="px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-lg text-sm text-gray-300"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>

                  {/* Action Buttons */}
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="flex gap-4"
                  >
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`px-6 py-3 bg-gradient-to-r ${project.gradient} text-white rounded-lg font-medium flex items-center gap-2 hover:shadow-lg transition-shadow`}
                    >
                      <Github className="w-5 h-5" />
                      View Code
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-3 border-2 border-slate-600 text-gray-300 rounded-lg font-medium flex items-center gap-2 hover:border-purple-500 hover:text-white transition-all"
                    >
                      <ExternalLink className="w-5 h-5" />
                      Live Demo
                    </motion.button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* More Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="inline-block bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Want to see more projects?
            </h3>
            <p className="text-gray-400 mb-6">
              Check out my GitHub for additional work and open-source contributions
            </p>
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-medium transition-colors"
            >
              <Github className="w-5 h-5" />
              Visit GitHub Profile
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}