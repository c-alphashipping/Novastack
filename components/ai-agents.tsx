"use client"

import { motion } from "framer-motion"
import { Bot, Users, MessageSquare, Workflow } from "lucide-react"

export function AIAgents() {
  const useCases = [
    {
      icon: MessageSquare,
      title: "AI Website Chat Agent",
      description: "Engage visitors 24/7, answer questions instantly, and guide them through your services naturally.",
    },
    {
      icon: Users,
      title: "Lead Qualification & Routing",
      description: "Automatically qualify leads, collect information, and route them to the right team member.",
    },
    {
      icon: Bot,
      title: "Customer Support Automation",
      description: "Handle common questions, troubleshoot issues, and escalate complex cases to your team.",
    },
    {
      icon: Workflow,
      title: "Internal Workflow Agents",
      description: "Automate repetitive tasks, process data, and streamline operations behind the scenes.",
    },
  ]

  // Smooth container animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  // Card entrance animation
  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.6,
      },
    },
  }

  // Subtle icon pulse animation
  const iconVariants = {
    initial: { scale: 1, rotate: 0 },
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  }

  // Floating ambient background orbs
  const floatingVariants = {
    initial: { y: 0, opacity: 0.3 },
    animate: {
      y: [0, -30, 0],
      opacity: [0.3, 0.5, 0.3],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  }

  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Ambient AI glow background - slow breathing effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/20 to-black" />
      
      {/* Floating gradient orbs for depth */}
      <motion.div
        variants={floatingVariants}
        initial="initial"
        animate="animate"
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        variants={floatingVariants}
        initial="initial"
        animate="animate"
        transition={{ delay: 2 }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header with fade + slide up */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
          >
            AI Agents Built Directly{" "}
            <motion.span
              className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
              initial={{ backgroundPosition: "0% 50%" }}
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            >
              Into Your Website
            </motion.span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            AI agents live on your website, working around the clock to talk to users, qualify leads, automate support,
            and reduce manual work. They handle conversations, answer questions, and take action — so you don't have to.
          </motion.p>
        </motion.div>

        {/* Use case grid with staggered animation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-8 mb-12"
        >
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -8,
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
              className="group relative rounded-2xl p-8 backdrop-blur-xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-colors duration-500"
            >
              {/* Gradient glow effect on hover */}
              <motion.div
                className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/0 to-purple-500/0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"
                initial={false}
              />

              {/* Icon with subtle hover animation */}
              <motion.div
                variants={iconVariants}
                initial="initial"
                whileHover="hover"
                className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30 flex items-center justify-center mb-4 relative"
              >
                {/* Icon glow pulse */}
                <motion.div
                  className="absolute inset-0 rounded-xl bg-blue-500/20 blur-md"
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <useCase.icon className="w-6 h-6 text-blue-400 relative z-10" />
              </motion.div>

              {/* Text content with micro fade-in */}
              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300"
              >
                {useCase.title}
              </motion.h3>
              
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-gray-400 leading-relaxed"
              >
                {useCase.description}
              </motion.p>

              {/* Subtle shine effect on hover */}
              <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{
                  background: "linear-gradient(90deg, transparent, rgba(96, 165, 250, 0.05), transparent)",
                }}
                animate={{
                  x: ["-100%", "200%"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 3,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA with fade-in */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <motion.p
            className="text-gray-400 text-lg"
            animate={{
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Available as a standalone service or bundled with your website.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}