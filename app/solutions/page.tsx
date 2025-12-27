"use client"

import { motion } from "framer-motion"
import { Sparkles, Zap, Rocket, Shield, ArrowRight, Check } from "lucide-react"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function SolutionsPage() {
  const solutions = [
    {
      icon: Sparkles,
      category: "Website Development",
      description: "Professional websites built with AI-ready architecture, SEO optimization, and modern design.",
      tiers: [
        {
          name: "One-Page Website",
          features: ["Responsive design", "Contact form", "Basic SEO", "Fast loading", "Mobile-first"],
          pricing: "Starting from ₹25,000",
          note: "Perfect for portfolios, landing pages, and startups",
        },
        {
          name: "Medium Website (3-5 Pages)",
          features: [
            "Multiple pages & navigation",
            "Enhanced UI/UX",
            "Performance optimization",
            "Optional AI features",
            "Analytics integration",
          ],
          pricing: "Starting from ₹40,000",
          note: "Ideal for business websites and personal brands",
          popular: true,
        },
        {
          name: "Large Website (6-7+ Pages)",
          features: [
            "Advanced UI/UX design",
            "Full AI integrations",
            "Scalable architecture",
            "Admin dashboards",
            "Priority support",
          ],
          pricing: "Starting from ₹55,000",
          note: "For companies and platforms with advanced needs",
        },
      ],
    },
    {
      icon: Zap,
      category: "AI-Integrated Websites",
      description: "Transform your website with intelligent features that automate tasks and engage visitors.",
      tiers: [
        {
          name: "AI Chatbots",
          features: ["24/7 customer support", "Lead qualification", "Contextual responses", "Multi-language support"],
          pricing: "Pricing varies based on AI complexity and integrations",
          note: "Intelligent conversational AI for your business",
        },
        {
          name: "Automation & Workflows",
          features: ["Form processing", "Email automation", "Data synchronization", "Custom workflows"],
          pricing: "Pricing varies based on AI complexity and integrations",
          note: "Automate repetitive tasks and increase efficiency",
        },
        {
          name: "Smart Dashboards",
          features: ["Real-time analytics", "Predictive insights", "Custom reports", "AI-powered data visualization"],
          pricing: "Pricing varies based on AI complexity and integrations",
          note: "Make informed decisions with AI-driven insights",
        },
      ],
    },
    {
      icon: Shield,
      category: "Maintenance & Optimization",
      description: "Keep your website secure, fast, and up-to-date with ongoing care and improvements.",
      tiers: [
        {
          name: "Basic Maintenance",
          features: ["Regular updates", "Weekly backups", "Minor bug fixes", "Email support"],
          pricing: "₹1,000/month",
          note: "Essential maintenance for peace of mind",
        },
        {
          name: "Standard Maintenance",
          features: [
            "Performance monitoring",
            "Content updates",
            "Security checks",
            "Priority support",
            "Monthly reports",
          ],
          pricing: "₹2,500/month",
          note: "Enhanced monitoring and support",
          popular: true,
        },
        {
          name: "Premium Maintenance",
          features: [
            "AI optimization",
            "Feature updates",
            "24/7 priority support",
            "Security hardening",
            "Weekly reports",
            "Dedicated manager",
          ],
          pricing: "₹5,000/month",
          note: "Complete care with AI optimization",
        },
      ],
    },
  ]

  return (
    <main className="min-h-screen">
      {/* Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-blue-950 to-purple-950" />
      <div className="fixed inset-0 bg-[url('/grid.svg')] opacity-20" />

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="py-20 px-4 pt-32">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Smart Websites.{" "}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Intelligent Systems.
                </span>
                <br />
                Real Results.
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                From simple landing pages to advanced AI-powered platforms — NovaStack builds websites and intelligent
                systems that drive business growth.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Solutions Sections */}
        {solutions.map((solution, sectionIndex) => (
          <section key={sectionIndex} className="py-12 px-4">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-12"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30 flex items-center justify-center">
                    <solution.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white">{solution.category}</h2>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed">{solution.description}</p>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-6">
                {solution.tiers.map((tier, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className={`relative rounded-2xl p-6 backdrop-blur-xl border ${
                      tier.popular
                        ? "bg-gradient-to-br from-blue-500/20 to-purple-500/20 border-blue-500/50"
                        : "bg-white/5 border-white/10"
                    } hover:border-blue-500/50 transition-all group`}
                  >
                    {tier.popular && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                        Most Popular
                      </div>
                    )}

                    <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
                    <p className="text-gray-400 text-sm mb-4 min-h-[40px]">{tier.note}</p>

                    <div className="mb-6">
                      <p className="text-2xl font-bold text-white mb-1">{tier.pricing}</p>
                      {tier.pricing.includes("varies") && (
                        <p className="text-gray-400 text-xs">Custom quote required</p>
                      )}
                    </div>

                    <ul className="space-y-2 mb-6">
                      {tier.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                          <Check className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* Pricing Note */}
        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl p-8 backdrop-blur-xl bg-blue-500/10 border border-blue-500/30"
            >
              <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                <Rocket className="w-6 h-6 text-blue-400" />
                Note on Pricing
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Final pricing depends on pages, features, AI requirements, complexity, and timeline. Every project is
                unique and deserves a custom quote. Contact NovaStack for a detailed, tailored proposal.
              </p>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Build Something Powerful?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss your project and create a custom solution for your business.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/contact">
                  <motion.div
                    className="inline-flex items-center gap-2 py-4 px-8 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Get a Custom Quote
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </Link>
                <Link href="/ai-agents">
                  <motion.div
                    className="inline-flex items-center gap-2 py-4 px-8 rounded-xl bg-white/5 border border-white/10 text-white font-semibold hover:border-blue-500/50 transition-all"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Explore AI Agents
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  )
}