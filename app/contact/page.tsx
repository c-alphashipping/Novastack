"use client"

import type React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Mail, MessageSquare, Send, ChevronDown, CheckCircle, XCircle } from "lucide-react"
import { Footer } from "@/components/footer"
import { useState } from "react"
import { Button } from "@/components/ui/button" // Adjust path to your Button component

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.project,
        }),
      })

      const data = await res.json()

      if (!res.ok || !data.success) {
        throw new Error(data?.error || "Submission failed")
      }

      setSubmitStatus("success")
      setFormData({ name: "", email: "", project: "" })

      // Auto-hide success popup after 5 seconds
      setTimeout(() => setSubmitStatus("idle"), 5000)
    } catch (err: any) {
      console.error(err)
      setSubmitStatus("error")
      setTimeout(() => setSubmitStatus("idle"), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const faqs = [
    {
      question: "How long does it take to build a website?",
      answer: "Most websites are completed within 1–2 weeks, depending on scope, pages, and AI features.",
    },
    {
      question: "Can pricing change after the initial quote?",
      answer:
        "Pricing may change only if project scope or features change. All updates are discussed and approved in advance.",
    },
    {
      question: "Do you offer ongoing support?",
      answer:
        "Yes. NovaStack offers monthly and yearly maintenance plans for performance, security, and AI optimization.",
    },
    {
      question: "Can you add features or AI later?",
      answer:
        "Absolutely. All NovaStack websites are scalable, and new features or AI integrations can be added anytime.",
    },
  ]

  return (
    <main className="min-h-screen relative">
      {/* Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-blue-950 to-purple-950" />
      <div className="fixed inset-0 bg-[url('/grid.svg')] opacity-20" />

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Let's Build{" "}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Something Powerful
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Ready to start your project? Fill out the form below and I'll get back to you with a
                custom quote.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <div className="rounded-2xl p-8 backdrop-blur-xl bg-white/5 border border-white/10">
                  <h2 className="text-2xl font-bold text-white mb-6">Get in Touch</h2>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30 flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold mb-1">Email</h3>
                        <a
                          href="mailto:novastack.studio@gmail.com"
                          className="text-gray-400 text-sm hover:text-blue-400 transition-colors"
                        >
                          novastack.studio@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30 flex items-center justify-center flex-shrink-0">
                        <MessageSquare className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold mb-1">Phone</h3>
                        <p className="text-gray-400 text-sm">+91 8422802008</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl p-8 backdrop-blur-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/30">
                  <h3 className="text-xl font-bold text-white mb-3">What Happens Next?</h3>
                  <ul className="space-y-3 text-gray-300 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 font-bold">1.</span>
                      <span>I'll review your project details</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 font-bold">2.</span>
                      <span>We'll schedule a consultation call</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 font-bold">3.</span>
                      <span>You'll receive a detailed quote</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 font-bold">4.</span>
                      <span>We start building your website!</span>
                    </li>
                  </ul>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
                <form
                  onSubmit={handleSubmit}
                  className="rounded-2xl p-8 backdrop-blur-xl bg-white/5 border border-white/10 relative"
                >
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="project" className="block text-sm font-medium text-gray-300 mb-2">
                        Project Details *
                      </label>
                      <textarea
                        id="project"
                        name="project"
                        value={formData.project}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all resize-none"
                        placeholder="Tell me about your project, goals, and any specific requirements..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Request a Quote
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Full-Screen AI-Style Modal Popup */}
        <AnimatePresence>
          {submitStatus !== "idle" && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-zinc-900 border border-white/10 rounded-xl p-6 max-w-sm text-center"
              >
                {submitStatus === "success" ? (
                  <>
                    <CheckCircle className="w-10 h-10 mx-auto text-green-400 mb-3" />
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Request Sent Successfully 🚀
                    </h3>
                    <p className="text-gray-400 mb-6">
                      Thanks for reaching out. NovaStack will contact you shortly.
                    </p>
                  </>
                ) : (
                  <>
                    <XCircle className="w-10 h-10 mx-auto text-red-400 mb-3" />
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Submission Failed
                    </h3>
                    <p className="text-gray-400 mb-6">Oops! Something went wrong. Please try again.</p>
                  </>
                )}

                <Button onClick={() => setSubmitStatus("idle")} className="w-full">
                  Close
                </Button>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* FAQ Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Before You Reach Out</h2>
              <p className="text-gray-400">Common questions answered</p>
            </motion.div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="rounded-xl backdrop-blur-xl bg-white/5 border border-white/10 overflow-hidden relative"
                >
                  <button
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors group"
                  >
                    <span className="text-white font-semibold pr-4">{faq.question}</span>
                    <motion.div
                      animate={{ rotate: openFAQ === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0"
                    >
                      <ChevronDown className="w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-colors" />
                    </motion.div>
                  </button>

                  <motion.div
                    initial={false}
                    animate={{
                      height: openFAQ === index ? "auto" : 0,
                      opacity: openFAQ === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-gray-400 leading-relaxed">{faq.answer}</div>
                  </motion.div>

                  {openFAQ === index && (
                    <motion.div
                      className="absolute inset-0 bg-blue-500/5 pointer-events-none"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Info */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl p-8 backdrop-blur-xl bg-blue-500/10 border border-blue-500/30 text-center"
            >
              <h3 className="text-2xl font-semibold text-white mb-3">Prefer to Chat First?</h3>
              <p className="text-gray-300 leading-relaxed">
                Try the AI chatbot in the bottom-right corner! It can answer questions about services, pricing, and
                timelines instantly.
              </p>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  )
}
