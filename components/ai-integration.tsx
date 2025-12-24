"use client"

import React from "react"

import { motion } from "framer-motion"
import { Bot, Workflow, Plug, BarChart3, FileCode, TrendingUp } from "lucide-react"

export function AIIntegration() {
  const features = [
    {
      icon: Bot,
      title: "AI Chatbots",
      description: "Intelligent conversational interfaces that understand and engage with your users",
    },
    {
      icon: Workflow,
      title: "AI Forms & Automation",
      description: "Smart forms that adapt and automate workflows based on user input",
    },
    {
      icon: Plug,
      title: "API Integrations",
      description: "Seamless connection with third-party AI services and platforms",
    },
    {
      icon: BarChart3,
      title: "Smart Dashboards",
      description: "Data visualization with AI-powered insights and analytics",
    },
    {
      icon: FileCode,
      title: "AI Content Tools",
      description: "Content generation and optimization powered by cutting-edge AI",
    },
    {
      icon: TrendingUp,
      title: "AI Analytics & Insights",
      description:
        "Actionable insights powered by AI to understand user behavior, improve performance, and optimize conversions",
    },
  ]

  return (
    <section className="relative py-24 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-indigo-950/30 to-black" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000,transparent)]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Bot className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-300 font-medium">Advanced AI Features</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            AI{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Integration
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Transform your website with cutting-edge AI capabilities
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              whileHover={{
                scale: 1.03,
                y: -5,
              }}
              className="group relative p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-blue-500/50 transition-all cursor-pointer"
            >
              {/* Soft glow on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"
                initial={false}
              />

              <div className="relative">
                {/* Icon with micro-animation */}
                <motion.div
                  className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center mb-4"
                  whileHover={{
                    scale: 1.1,
                    rotate: [0, -5, 5, 0],
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {React.createElement(feature.icon, {
                    className: "w-6 h-6 text-blue-400",
                  })}
                </motion.div>

                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-12 text-gray-500 italic text-sm"
        >
          AI modules working together in real time
        </motion.p>
      </div>
    </section>
  )
}
