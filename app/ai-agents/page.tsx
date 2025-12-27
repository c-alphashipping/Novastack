"use client"

import type React from "react"

import { motion } from "framer-motion"
import {
  Bot,
  Sparkles,
  Zap,
  TrendingUp,
  MessageSquare,
  Users,
  FileText,
  Calendar,
  ArrowRight,
  ChevronDown,
  CheckCircle2,
  X,
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"

import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function AIAgentsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    businessType: "",
    challenge: "",
  })
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [status, setStatus] = useState<"success" | "error" | null>(null)
  const [errorMessage, setErrorMessage] = useState("")
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)
    setErrorMessage("")

    try {
      const res = await fetch("/api/audits", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const data = await res.json()

      if (!res.ok || !data.success) {
        throw new Error(data?.message || "Submission failed")
      }

      setSubmitted(true)
      setStatus("success")
    } catch (error: any) {
      console.error(error)
      setErrorMessage(error.message || "Something went wrong")
      setStatus("error")
    } finally {
      setLoading(false)
    }
  }

  const demoScenarios = [
    {
      icon: MessageSquare,
      title: "Customer Support Agent",
      description: "Handles FAQs, bookings, and support 24/7 with natural conversation and context understanding",
      examples: ["Answer product questions", "Process bookings", "Handle returns", "Escalate to humans when needed"],
    },
    {
      icon: Users,
      title: "Lead Qualification Agent",
      description: "Filters and qualifies leads automatically, saving your sales team time and effort",
      examples: ["Ask qualifying questions", "Score leads intelligently", "Schedule demos", "Sync with your CRM"],
    },
    {
      icon: Zap,
      title: "Internal Automation Agent",
      description: "Automates repetitive business tasks, reducing manual work and human error",
      examples: ["Process invoices", "Generate reports", "Update databases", "Send notifications"],
    },
    {
      icon: FileText,
      title: "Content & Workflow Agent",
      description: "Generates, updates, and manages content while automating content workflows",
      examples: ["Write blog posts", "Generate social media", "Update product descriptions", "Manage content calendar"],
    },
  ]

  const faqs = [
    {
      question: "How much does an AI agent cost?",
      answer:
        "Pricing depends on complexity, integrations, and automation level. Each agent is custom-built for your specific needs. Contact NovaStack for a tailored quote after we understand your requirements.",
    },
    {
      question: "Can AI agents be added to existing websites?",
      answer:
        "Yes. NovaStack can integrate AI agents into new or existing websites. We work with any tech stack and ensure seamless integration with your current systems.",
    },
    {
      question: "Do AI agents require maintenance?",
      answer:
        "Yes. AI agents need ongoing optimization and improvement as your business evolves. We offer maintenance plans that include monitoring, updates, and continuous improvement based on usage data.",
    },
    {
      question: "Can AI agents scale as my business grows?",
      answer:
        "Absolutely. All agents are designed to scale and evolve with your business. They can handle increasing volume, learn from new data, and adapt to changing requirements without complete rebuilds.",
    },
    {
      question: "What technologies do you use for AI agents?",
      answer:
        "We use cutting-edge AI models like GPT-4, Claude, and custom machine learning solutions. The tech stack is chosen based on your specific needs, budget, and performance requirements.",
    },
    {
      question: "How long does it take to build an AI agent?",
      answer:
        "Timeline varies based on complexity: Simple agents take 2-4 weeks, moderate agents take 4-8 weeks, and complex multi-agent systems can take 8-12+ weeks. We provide detailed timelines during consultation.",
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
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm font-medium mb-6">
                <Bot className="w-4 h-4" />
                Custom AI Agents
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Custom{" "}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  AI Agents
                </span>
                <br />
                Built for Your Business
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
                We design AI agents that think, act, and automate — tailored to your workflows, reducing manual work and
                increasing efficiency.
              </p>
              <motion.button
                onClick={() => document.getElementById("audit-form")?.scrollIntoView({ behavior: "smooth" })}
                className="inline-flex items-center gap-2 py-4 px-8 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Book Free AI Agent Call
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* What Are AI Agents */}
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">What Are AI Agents?</h2>
              <div className="rounded-2xl p-8 md:p-12 backdrop-blur-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/30">
                <p className="text-xl text-gray-200 leading-relaxed mb-6">
                  AI agents are{" "}
                  <span className="text-blue-400 font-semibold">intelligent systems that understand inputs</span>,{" "}
                  <span className="text-purple-400 font-semibold">make decisions</span>, and{" "}
                  <span className="text-green-400 font-semibold">perform tasks autonomously</span> — reducing manual
                  work and increasing efficiency.
                </p>
                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-blue-500/20 border border-blue-500/50 flex items-center justify-center mx-auto mb-3">
                      <TrendingUp className="w-8 h-8 text-blue-400" />
                    </div>
                    <p className="text-white font-semibold">Understand Context</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-purple-500/20 border border-purple-500/50 flex items-center justify-center mx-auto mb-3">
                      <Sparkles className="w-8 h-8 text-purple-400" />
                    </div>
                    <p className="text-white font-semibold">Make Decisions</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-green-500/20 border border-green-500/50 flex items-center justify-center mx-auto mb-3">
                      <Zap className="w-8 h-8 text-green-400" />
                    </div>
                    <p className="text-white font-semibold">Take Action</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* AI Agents in Action */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">AI Agents in Action</h2>
              <p className="text-gray-300 text-lg">See how AI agents solve real business problems</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {demoScenarios.map((scenario, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="rounded-2xl p-8 backdrop-blur-xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all group"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30 flex items-center justify-center flex-shrink-0">
                      <scenario.icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{scenario.title}</h3>
                      <p className="text-gray-300 text-sm leading-relaxed">{scenario.description}</p>
                    </div>
                  </div>

                  <div className="ml-16">
                    <p className="text-gray-400 text-sm font-semibold mb-3">Example Capabilities:</p>
                    <ul className="space-y-2">
                      {scenario.examples.map((example, i) => (
                        <li key={i} className="flex items-center gap-2 text-gray-300 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Strategy */}
        <section className="py-20 px-4 bg-gradient-to-b from-transparent via-blue-950/20 to-transparent">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">AI Agent Pricing</h2>
              <div className="rounded-2xl p-8 md:p-12 backdrop-blur-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/50">
                <p className="text-xl text-gray-200 leading-relaxed mb-6">
                  AI agent pricing depends on <span className="text-blue-400 font-semibold">complexity</span>,{" "}
                  <span className="text-purple-400 font-semibold">integrations</span>,{" "}
                  <span className="text-green-400 font-semibold">data sources</span>, and{" "}
                  <span className="text-orange-400 font-semibold">automation depth</span>.
                </p>
                <div className="p-6 rounded-xl bg-black/30 border border-white/10 mb-6">
                  <p className="text-gray-300 text-lg">
                    Each AI agent is <span className="text-white font-semibold">custom-built</span>. Contact NovaStack
                    for a tailored quote based on your specific needs.
                  </p>
                </div>
                <Link href="/contact">
                  <motion.div
                    className="inline-flex items-center gap-2 py-4 px-8 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Discuss My AI Agent
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">AI Agent FAQs</h2>
              <p className="text-gray-400">Common questions about custom AI agents</p>
            </motion.div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="rounded-xl backdrop-blur-xl bg-white/5 border border-white/10 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                  >
                    <span className="text-white font-semibold pr-4">{faq.question}</span>
                    <motion.div
                      animate={{ rotate: openFAQ === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0"
                    >
                      <ChevronDown className="w-5 h-5 text-blue-400" />
                    </motion.div>
                  </button>

                  <motion.div
                    initial={false}
                    animate={{
                      height: openFAQ === index ? "auto" : 0,
                      opacity: openFAQ === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-gray-400 leading-relaxed">{faq.answer}</div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Audit Form Section */}
        <section
          id="audit-form"
          className="py-20 px-4 bg-gradient-to-b from-transparent via-purple-950/20 to-transparent"
        >
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {!submitted ? (
                <div className="rounded-2xl p-8 md:p-12 backdrop-blur-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/30">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-white mb-4">Free AI Agent Strategy Call</h2>
                    <p className="text-gray-300 leading-relaxed">
                      I'll analyze your workflow and suggest where AI agents can save time and increase efficiency. Book
                      your free consultation now.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Name *</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Email *</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Business Type *</label>
                      <input
                        type="text"
                        required
                        value={formData.businessType}
                        onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20"
                        placeholder="E-commerce, SaaS, Service Business, etc."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 px-8 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {loading ? "Submitting..." : "Book Free AI Agent Call"}
                    </button>
                  </form>
                </div>
              ) : (
                <div className="rounded-2xl p-12 backdrop-blur-xl bg-gradient-to-br from-green-500/20 to-blue-500/20 border border-green-500/50 text-center">
                  <div className="w-20 h-20 rounded-full bg-green-500/20 border-2 border-green-500/50 flex items-center justify-center mx-auto mb-6">
                    <Calendar className="w-10 h-10 text-green-400" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">Call Requested!</h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Thank you for your interest in AI agents. I'll reach out within 24 hours to schedule your free
                    strategy call.
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        </section>

        {/* AI POPUP */}
        {status && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-zinc-900 border border-white/10 rounded-2xl p-8 max-w-sm w-full text-center shadow-2xl"
            >
              {status === "success" ? (
                <>
                  <CheckCircle2 className="w-12 h-12 mx-auto text-green-400 mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Request Sent Successfully 🚀
                  </h3>
                  <p className="text-gray-400 mb-6">
                    Your free website audit will be delivered.
                  </p>
                </>
              ) : (
                <>
                  <X className="w-12 h-12 mx-auto text-red-400 mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Submission Failed
                  </h3>
                  <p className="text-gray-400 mb-6">{errorMessage}</p>
                </>
              )}

              <Button
                onClick={() => setStatus(null)}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-500"
              >
                Close
              </Button>
            </motion.div>
          </div>
        )}

        <Footer />
      </div>
    </main>
  )
}