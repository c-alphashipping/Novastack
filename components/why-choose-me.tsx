"use client"

import { motion } from "framer-motion"
import { Sparkles, Code2, Zap, DollarSign, Handshake, Target } from "lucide-react"

export function WhyChooseMe() {
  const reasons = [
    {
      icon: Sparkles,
      title: "AI-First Development",
      description: "Leveraging the latest AI technologies to build smarter, more efficient websites",
    },
    {
      icon: Code2,
      title: "Clean & Future-Proof Code",
      description: "Maintainable, scalable code that stands the test of time",
    },
    {
      icon: Zap,
      title: "Fast Turnaround",
      description: "Quick delivery without compromising on quality or attention to detail",
    },
    {
      icon: DollarSign,
      title: "Honest Pricing",
      description: "Transparent pricing with no hidden fees or unexpected costs",
    },
    {
      icon: Handshake,
      title: "Long-Term Partnership",
      description: "Building lasting relationships, not just websites",
    },
    {
      icon: Target,
      title: "Conversion-Focused Design",
      description:
        "Every website is designed with clear goals — turning visitors into leads, customers, and long-term users",
    },
  ]

  return (
    <section className="relative py-24 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-black" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            What sets my work apart from the rest
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                delay: index * 0.12,
                duration: 0.5,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{
                scale: 1.03,
                y: -5,
              }}
              className="relative p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-blue-500/50 transition-all group"
            >
              {/* Subtle border glow and gradient shift on hover */}
              <motion.div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"
                style={{
                  background: "linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(168, 85, 247, 0.1))",
                }}
              />

              {/* Breathing glow for center cards */}
              {(index === 2 || index === 3) && (
                <motion.div
                  className="absolute inset-0 rounded-xl bg-blue-500/5"
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />
              )}

              <div className="relative">
                <motion.div
                  className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center mb-4"
                  whileHover={{
                    scale: 1.15,
                    rotate: [0, -10, 10, 0],
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <reason.icon className="w-6 h-6 text-blue-400" />
                </motion.div>

                <h3 className="text-xl font-semibold text-white mb-2">{reason.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
