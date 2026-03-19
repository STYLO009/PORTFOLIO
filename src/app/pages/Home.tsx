import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowRight, Brain, Code, Database, Sparkles } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const floatingAnimation = {
    y: [0, -15, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <motion.div
          className="max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-8">
              <motion.div variants={itemVariants} className="space-y-4">
                <motion.div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30"
                  whileHover={{ scale: 1.05 }}
                >
                  <Sparkles className="w-4 h-4 text-purple-400" />
                  <span className="text-sm text-purple-300">Machine Learning Engineer</span>
                </motion.div>
                <h1 className="text-5xl lg:text-7xl font-bold text-white">
                  I am{" "}
                  <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                    Abir Majumdar
                  </span>{" "}
                </h1>
                <p className="text-xl text-gray-300">
                  Passionate ML Engineer crafting intelligent solutions that transform ideas
                  into reality. Specializing in Deep Learning, NLP, and Computer Vision.
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
                <Link to="/projects">
                  <motion.button
                    className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-medium flex items-center gap-2 hover:shadow-lg hover:shadow-purple-500/50 transition-shadow"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Projects
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </Link>
                <Link to="/contact">
                  <motion.button
                    className="px-8 py-3 border-2 border-purple-500 text-purple-300 rounded-lg font-medium hover:bg-purple-500/10 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get in Touch
                  </motion.button>
                </Link>
              </motion.div>

              {/* Stats */}
              <motion.div
                variants={itemVariants}
                className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-700/50"
              >
                <div>
                  <div className="text-3xl font-bold text-white">3+</div>
                  <div className="text-sm text-gray-400">Major Projects</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">10+</div>
                  <div className="text-sm text-gray-400">Tech Skills</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">1</div>
                  <div className="text-sm text-gray-400">Hackathon Finalist</div>
                </div>
              </motion.div>
            </div>

            {/* Image */}
            <motion.div
              variants={itemVariants}
              className="relative"
              animate={floatingAnimation}
            >
              <div className="relative rounded-2xl overflow-hidden border border-purple-500/30 shadow-2xl shadow-purple-500/20">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1763568258143-904ea924ac53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmclMjBhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwY29kZXxlbnwxfHx8fDE3NzM5MzkzNjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Machine Learning"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
              </div>
              {/* Floating Icons */}
              <motion.div
                className="absolute -top-6 -left-6 w-20 h-20 bg-purple-600/20 backdrop-blur-md rounded-2xl border border-purple-500/30 flex items-center justify-center"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <Brain className="w-10 h-10 text-purple-400" />
              </motion.div>
              <motion.div
                className="absolute -bottom-6 -right-6 w-20 h-20 bg-pink-600/20 backdrop-blur-md rounded-2xl border border-pink-500/30 flex items-center justify-center"
                animate={{
                  rotate: [360, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <Code className="w-10 h-10 text-pink-400" />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              What I Bring to the Table
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Combining technical expertise with a passion for innovation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Brain className="w-8 h-8" />,
                title: "Deep Learning Expertise",
                description:
                  "Advanced knowledge in neural networks, CNNs, RNNs, and transformer models for cutting-edge AI solutions.",
                gradient: "from-purple-600 to-blue-600",
              },
              {
                icon: <Code className="w-8 h-8" />,
                title: "Full-Stack ML Development",
                description:
                  "End-to-end ML pipeline development from data preprocessing to model deployment using Python and Django.",
                gradient: "from-pink-600 to-purple-600",
              },
              {
                icon: <Database className="w-8 h-8" />,
                title: "Data-Driven Solutions",
                description:
                  "Expert in data analysis, feature engineering, and building scalable ML models for real-world applications.",
                gradient: "from-blue-600 to-cyan-600",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                <div className="h-full bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-purple-500/50 transition-all">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-purple-500/30 rounded-3xl p-12">
            <h2 className="text-4xl font-bold text-white mb-6">
              Let's Build Something Amazing Together
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              I'm always excited to collaborate on innovative ML projects and explore new
              opportunities.
            </p>
            <Link to="/contact">
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-medium text-lg hover:shadow-lg hover:shadow-purple-500/50 transition-shadow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start a Conversation
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}