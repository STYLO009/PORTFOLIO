import { motion } from "motion/react";
import {
  Code2,
  Database,
  Brain,
  Globe,
  Terminal,
  Layers,
  Cpu,
  GitBranch,
} from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      category: "Programming Languages",
      icon: <Code2 className="w-6 h-6" />,
      gradient: "from-blue-600 to-cyan-600",
      skills: [
        { name: "Python", level: 95 },
        { name: "C++", level: 85 },
        { name: "C", level: 80 },
        { name: "SQL", level: 75 },
      ],
    },
    {
      category: "ML & Deep Learning",
      icon: <Brain className="w-6 h-6" />,
      gradient: "from-purple-600 to-pink-600",
      skills: [
        { name: "TensorFlow", level: 90 },
        { name: "PyTorch", level: 88 },
        { name: "Scikit-learn", level: 92 },
        { name: "Keras", level: 85 },
        { name: "OpenCV", level: 80 },
        { name: "NLTK", level: 82 },
      ],
    },
    {
      category: "Deep Learning Concepts",
      icon: <Cpu className="w-6 h-6" />,
      gradient: "from-orange-600 to-red-600",
      skills: [
        { name: "Neural Networks", level: 90 },
        { name: "CNNs", level: 88 },
        { name: "RNNs/LSTMs", level: 85 },
        { name: "Transformers", level: 82 },
        { name: "GANs", level: 75 },
        { name: "Transfer Learning", level: 88 },
      ],
    },
    {
      category: "Data Science & Analysis",
      icon: <Database className="w-6 h-6" />,
      gradient: "from-green-600 to-emerald-600",
      skills: [
        { name: "Pandas", level: 92 },
        { name: "NumPy", level: 90 },
        { name: "Matplotlib", level: 85 },
        { name: "Seaborn", level: 83 },
        { name: "Data Preprocessing", level: 90 },
      ],
    },
    {
      category: "Web Development",
      icon: <Globe className="w-6 h-6" />,
      gradient: "from-indigo-600 to-purple-600",
      skills: [
        { name: "Django", level: 87 },
        { name: "Flask", level: 85 },
        { name: "FastAPI", level: 80 },
        { name: "REST APIs", level: 88 },
      ],
    },
    {
      category: "Python Concepts",
      icon: <Terminal className="w-6 h-6" />,
      gradient: "from-yellow-600 to-orange-600",
      skills: [
        { name: "OOP Principles", level: 90 },
        { name: "Design Patterns", level: 85 },
        { name: "Async Programming", level: 80 },
        { name: "Data Structures", level: 88 },
      ],
    },
    {
      category: "MLOps & Tools",
      icon: <Layers className="w-6 h-6" />,
      gradient: "from-pink-600 to-rose-600",
      skills: [
        { name: "Git/GitHub", level: 88 },
        { name: "Docker", level: 75 },
        { name: "MLflow", level: 70 },
        { name: "Jupyter", level: 92 },
      ],
    },
    {
      category: "Other Technologies",
      icon: <GitBranch className="w-6 h-6" />,
      gradient: "from-teal-600 to-cyan-600",
      skills: [
        { name: "NLP", level: 85 },
        { name: "Computer Vision", level: 83 },
        { name: "Model Deployment", level: 80 },
        { name: "Feature Engineering", level: 88 },
      ],
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
          <h1 className="text-5xl font-bold text-white mb-4">Skills & Expertise</h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            A comprehensive toolkit for building intelligent solutions
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="h-full bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-purple-500/50 transition-all">
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${category.gradient} rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform`}
                  >
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.category}</h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: categoryIndex * 0.1 + skillIndex * 0.05,
                      }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                        <span className="text-gray-500 text-sm">{skill.level}%</span>
                      </div>
                      <div className="relative h-2 bg-slate-700/50 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1,
                            delay: categoryIndex * 0.1 + skillIndex * 0.05,
                            ease: "easeOut",
                          }}
                          className={`h-full bg-gradient-to-r ${category.gradient} rounded-full`}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 grid md:grid-cols-3 gap-8"
        >
          {[
            {
              title: "Continuous Learning",
              description:
                "Always staying updated with the latest ML research papers and emerging technologies",
              gradient: "from-blue-600 to-purple-600",
            },
            {
              title: "Problem Solving",
              description:
                "Strong analytical skills with a focus on finding efficient solutions to complex challenges",
              gradient: "from-purple-600 to-pink-600",
            },
            {
              title: "Collaboration",
              description:
                "Experience working in teams and contributing to open-source projects",
              gradient: "from-pink-600 to-orange-600",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <div
                className={`bg-gradient-to-br ${item.gradient} rounded-2xl p-8 h-full`}
              >
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-white/80">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications & Learning */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-purple-500/30 rounded-3xl p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Committed to Excellence
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              With expertise spanning from low-level programming in C/C++ to high-level ML
              frameworks, I bring a comprehensive understanding of both software engineering
              and machine learning. My knowledge of Python OOP principles ensures clean,
              maintainable, and scalable code architecture.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
