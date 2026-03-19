import { motion } from "motion/react";
import {
  Trophy,
  Award,
  Heart,
  BookOpen,
  Target,
  Zap,
  Users,
  Code,
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function Achievements() {
  const achievements = [
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "HackLoop Finalist",
      category: "Hackathon",
      description:
        "Reached the finals of HackLoop, a prestigious hackathon competition, by developing an innovative ML-powered solution that impressed judges with its technical complexity and real-world applicability.",
      date: "2025",
      gradient: "from-yellow-600 to-orange-600",
      image:
        "https://images.unsplash.com/photo-1649451844813-3130d6f42f8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWNrYXRob24lMjBjb2RpbmclMjBjb21wZXRpdGlvbiUyMHByb2dyYW1taW5nfGVufDF8fHx8MTc3MzkzOTM2Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "NGO Volunteer Work",
      category: "Social Impact",
      description:
        "Actively contributing to NGO initiatives by leveraging technology for social good. Developed tools and solutions to help underserved communities and participated in various social welfare programs.",
      date: "Ongoing",
      gradient: "from-pink-600 to-rose-600",
      image:
        "https://images.unsplash.com/photo-1559027615-cd4628902d4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2b2x1bnRlZXIlMjBjb21tdW5pdHklMjBzZXJ2aWNlJTIwTkdPfGVufDF8fHx8MTc3MzkzOTM2Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  const milestones = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "3+ ML Projects",
      description: "Successfully deployed production-ready machine learning solutions",
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Deep Learning Expert",
      description: "Mastered advanced DL concepts including CNNs, RNNs, and Transformers",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Open Source Contributor",
      description: "Contributing to ML and AI open-source projects on GitHub",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Problem Solver",
      description: "Solved 100+ coding challenges across multiple platforms",
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
            <Award className="w-5 h-5 text-purple-400" />
            <span className="text-sm text-purple-300">Recognition & Impact</span>
          </motion.div>
          <h1 className="text-5xl font-bold text-white mb-4">
            Achievements & Milestones
          </h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            A journey of continuous growth, learning, and making a difference
          </p>
        </motion.div>

        {/* Major Achievements */}
        <div className="space-y-12 mb-20">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className="grid lg:grid-cols-5 gap-8 items-center">
                {/* Image */}
                <motion.div
                  className="lg:col-span-2"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative rounded-2xl overflow-hidden border border-slate-700/50 group-hover:border-purple-500/50 transition-all shadow-2xl">
                    <ImageWithFallback
                      src={achievement.image}
                      alt={achievement.title}
                      className="w-full h-[300px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60" />

                    {/* Floating Icon */}
                    <motion.div
                      className={`absolute top-6 left-6 w-16 h-16 bg-gradient-to-br ${achievement.gradient} rounded-2xl flex items-center justify-center text-white shadow-2xl`}
                      animate={{
                        rotate: [0, 5, -5, 0],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      {achievement.icon}
                    </motion.div>
                  </div>
                </motion.div>

                {/* Content */}
                <div className="lg:col-span-3 space-y-4">
                  <div>
                    <div
                      className={`inline-block px-4 py-1 rounded-full bg-gradient-to-r ${achievement.gradient} text-white text-sm font-medium mb-3`}
                    >
                      {achievement.category}
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-2">
                      {achievement.title}
                    </h2>
                    <p className="text-gray-400 text-sm mb-4">{achievement.date}</p>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>

                  {/* Achievement Stats */}
                  <div className="flex flex-wrap gap-4 pt-4">
                    <div className="px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-lg">
                      <div className="flex items-center gap-2">
                        <Zap className="w-4 h-4 text-yellow-400" />
                        <span className="text-gray-300 text-sm">Excellence</span>
                      </div>
                    </div>
                    <div className="px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-lg">
                      <div className="flex items-center gap-2">
                        <Target className="w-4 h-4 text-green-400" />
                        <span className="text-gray-300 text-sm">Impact</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Milestones Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Key Milestones
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="h-full bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-purple-500/50 transition-all">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                    {milestone.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">
                  Technical Expertise
                </h2>
                <p className="text-gray-300 text-lg mb-6">
                  Proficient in multiple programming languages and frameworks, with a deep
                  understanding of machine learning algorithms, deep learning architectures,
                  and software engineering best practices.
                </p>
                <div className="space-y-3">
                  {[
                    "Advanced Python & Python OOP",
                    "C/C++ System Programming",
                    "Django Web Development",
                    "TensorFlow & PyTorch",
                    "Complete ML/DL Pipeline",
                  ].map((skill, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-2 h-2 bg-purple-500 rounded-full" />
                      <span className="text-gray-300">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Years Experience", value: "2+" },
                  { label: "Projects", value: "10+" },
                  { label: "Technologies", value: "15+" },
                  { label: "Success Rate", value: "95%" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-slate-900/50 border border-slate-700/50 rounded-xl p-6 text-center"
                  >
                    <div className="text-3xl font-bold text-white mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Future Goals */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-purple-500/30 rounded-3xl p-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Always Pushing Boundaries
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-8">
              Committed to continuous learning and innovation in the field of machine
              learning and artificial intelligence. Currently exploring cutting-edge research
              in transformer architectures and their applications in real-world scenarios.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {["Research", "Innovation", "Impact", "Excellence"].map((value, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="px-6 py-3 bg-slate-900/50 border border-purple-500/50 rounded-lg text-purple-300 font-medium"
                >
                  {value}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
