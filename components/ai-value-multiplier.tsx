"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { TrendingUp, Zap, Target } from "lucide-react"

function CountUpNumber({ end, duration = 2, suffix = "" }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return

    let startTime: number | null = null
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1)

      setCount(Math.floor(progress * end))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [isInView, end, duration])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

export function AIValueMultiplier() {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/20 to-black" />

      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 40,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        >
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute inset-0 rounded-full border border-blue-500/10"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{
                scale: [0.5, 1.5],
                opacity: [0.5, 0],
              }}
              transition={{
                duration: 4,
                delay: i * 1.3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeOut",
              }}
            />
          ))}
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            AI Is Not a Feature.{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              It's a Multiplier.
            </span>
          </h2>
          <motion.p
            className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            AI transforms websites into systems that learn, adapt, and improve over time.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              icon: Zap,
              value: 3,
              suffix: "x",
              label: "Faster Performance",
              description: "AI-optimized loading and rendering",
            },
            {
              icon: TrendingUp,
              value: 40,
              suffix: "%",
              label: "Higher Efficiency",
              description: "Automated workflows save time",
            },
            {
              icon: Target,
              value: 2,
              suffix: "x",
              label: "Better Conversions",
              description: "AI-powered personalization",
            },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm text-center group hover:border-blue-500/50 transition-all"
            >
              {/* Breathing glow effect */}
              <motion.div
                className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100"
                animate={{
                  opacity: [0, 0.5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />

              <div className="relative">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-blue-400" />
                </div>

                <motion.div
                  className="text-5xl font-bold text-white mb-2"
                  initial={{ scale: 1 }}
                  whileInView={{ scale: [1, 1.1, 1] }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.5, duration: 0.5 }}
                >
                  <CountUpNumber end={stat.value} suffix={stat.suffix} />
                </motion.div>

                <h3 className="text-xl font-semibold text-white mb-2">{stat.label}</h3>
                <p className="text-gray-400 text-sm">{stat.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
