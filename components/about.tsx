"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"

export function About() {
  const features = [
    "AI-powered features (chatbots, automation, APIs)",
    "Clean & scalable code architecture",
    "SEO & performance optimization",
    "Long-term support & maintenance",
  ]

  return (
    <section className="relative py-24 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-950 via-black to-black" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            About <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed text-balance">
            I help businesses and creators build modern websites integrated with AI, automation, and scalable
            architecture.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="grid md:grid-cols-2 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature}
              className="flex items-start gap-4 p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm"
              whileHover={{ scale: 1.02, borderColor: "rgba(59, 130, 246, 0.3)" }}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                <Check className="w-5 h-5 text-blue-400" />
              </div>
              <p className="text-gray-300 leading-relaxed">{feature}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
