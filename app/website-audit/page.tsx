"use client"

import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  CheckCircle2,
  Search,
  Gauge,
  Smartphone,
  TrendingUp,
  Bot,
  ArrowRight,
  X,
  AlertCircle,
  Loader2,
} from "lucide-react"
import { Footer } from "@/components/footer"

export default function WebsiteAuditPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    businessType: "",
  })

  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [status, setStatus] = useState<"success" | "error" | null>(null)
  const [errorMessage, setErrorMessage] = useState("")
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({})
  const [touched, setTouched] = useState<Record<string, boolean>>({})

  // Real-time validation
  const validateField = (name: string, value: string): string => {
    switch (name) {
      case "name":
        if (!value.trim()) return "Name is required"
        if (value.trim().length < 2) return "Name must be at least 2 characters"
        return ""
      case "email":
        if (!value.trim()) return "Email is required"
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(value)) return "Please enter a valid email"
        return ""
      case "website":
        if (!value.trim()) return "Website URL is required"
        try {
          const url = value.startsWith("http") ? value : `https://${value}`
          new URL(url)
          return ""
        } catch {
          return "Please enter a valid website URL"
        }
      case "businessType":
        if (!value.trim()) return "Business type is required"
        if (value.trim().length < 3) return "Please be more specific"
        return ""
      default:
        return ""
    }
  }

  const handleBlur = (name: string) => {
    setTouched({ ...touched, [name]: true })
    const error = validateField(name, formData[name as keyof typeof formData])
    setFieldErrors({ ...fieldErrors, [name]: error })
  }

  const handleChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value })
    if (touched[name]) {
      const error = validateField(name, value)
      setFieldErrors({ ...fieldErrors, [name]: error })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate all fields
    const errors: Record<string, string> = {}
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key as keyof typeof formData])
      if (error) errors[key] = error
    })

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors)
      setTouched({ name: true, email: true, website: true, businessType: true })
      return
    }

    setLoading(true)
    setStatus(null)
    setErrorMessage("")

    try {
      // Normalize website URL
      const normalizedWebsite = formData.website.startsWith("http")
        ? formData.website
        : `https://${formData.website}`

      const res = await fetch("/api/audits", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          website: normalizedWebsite,
        }),
      })

      const data = await res.json()

      if (!res.ok || !data.success) {
        throw new Error(data?.message || "Submission failed")
      }

      setSubmitted(true)
      setStatus("success")
    } catch (error: any) {
      console.error(error)
      setErrorMessage(error.message || "Something went wrong. Please try again.")
      setStatus("error")
    } finally {
      setLoading(false)
    }
  }

  const auditItems = [
    { icon: Search, title: "Design & UI Quality", description: "Visual appeal, branding consistency, user experience" },
    { icon: Smartphone, title: "Mobile Responsiveness", description: "Cross-device compatibility and mobile optimization" },
    { icon: Gauge, title: "Speed & Performance", description: "Load times, optimization, Core Web Vitals" },
    { icon: TrendingUp, title: "SEO Basics", description: "Meta tags, structure, search engine visibility" },
    { icon: CheckCircle2, title: "Conversion Issues", description: "CTAs, forms, user journey optimization" },
    { icon: Bot, title: "AI Opportunities", description: "How AI can enhance your website's capabilities" },
  ]

  return (
    <main className="min-h-screen">
      {/* Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-blue-950 to-purple-950" />
      <div className="fixed inset-0 bg-[url('/grid.svg')] opacity-20" />

      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-sm font-medium mb-6">
              <CheckCircle2 className="w-4 h-4" />
              100% Free • No Strings Attached
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Get a Free
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Website Audit
              </span>
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed mb-10">
              I'll review your website and show you exactly what's holding it back —
              design, speed, SEO, conversions, and AI opportunities.
            </p>

            <button
              onClick={() =>
                document
                  .getElementById("audit-form")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/20 transition-all"
            >
              Request Free Audit
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </section>

      <div className="relative z-10">
        {/* What I Review Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What I Review in Your Website</h2>
              <p className="text-gray-300 text-lg">A comprehensive analysis of what matters most</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {auditItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="rounded-2xl p-6 backdrop-blur-xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30 flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* What You Get Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-transparent via-blue-950/20 to-transparent">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-2xl p-8 md:p-12 backdrop-blur-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/30"
            >
              <h2 className="text-3xl font-bold text-white mb-6 text-center">What You'll Receive</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-blue-500/20 border border-blue-500/50 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Clear List of Problems</h3>
                  <p className="text-gray-300 text-sm">No jargon, just honest feedback on what needs fixing</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-purple-500/20 border border-purple-500/50 flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Actionable Suggestions</h3>
                  <p className="text-gray-300 text-sm">Specific steps you can take to improve immediately</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-green-500/20 border border-green-500/50 flex items-center justify-center mx-auto mb-4">
                    <Bot className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Professional Insights</h3>
                  <p className="text-gray-300 text-sm">Expert recommendations that prove my expertise</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why This Works Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
                Why Free Audits & Consultations Work
              </h2>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="rounded-2xl p-8 backdrop-blur-xl bg-white/5 border border-white/10">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Free Expert Advice Builds Trust</h3>
                      <p className="text-gray-300 leading-relaxed">
                        By providing value upfront, I demonstrate expertise and show that I care about your success before asking for payment.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl p-8 backdrop-blur-xl bg-white/5 border border-white/10">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Personalized Insights Establish Authority</h3>
                      <p className="text-gray-300 leading-relaxed">
                        A custom audit proves I understand your specific challenges and have the skills to solve them effectively.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl p-8 backdrop-blur-xl bg-white/5 border border-white/10">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Small Commitment Feels Low-Risk</h3>
                      <p className="text-gray-300 leading-relaxed">
                        Requesting an audit is easy and risk-free, making it the perfect first step toward a partnership.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl p-8 backdrop-blur-xl bg-white/5 border border-white/10">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-orange-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Value Received Creates Action</h3>
                      <p className="text-gray-300 leading-relaxed">
                        Once you see the audit and understand what's possible, you're far more likely to hire me to implement the fixes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl p-8 backdrop-blur-xl bg-gradient-to-r from-red-500/10 to-green-500/10 border border-white/20 text-center">
                <div className="flex items-center justify-center gap-8 flex-wrap">
                  <div className="flex items-center gap-3">
                    <X className="w-8 h-8 text-red-400" />
                    <span className="text-gray-300 text-lg">Random Inquiries</span>
                  </div>
                  <ArrowRight className="w-8 h-8 text-gray-400" />
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-8 h-8 text-green-400" />
                    <span className="text-white text-lg font-semibold">Qualified, Serious Leads</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why This Audit Works Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-transparent via-purple-950/20 to-transparent">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} className="rounded-2xl p-8 md:p-12 backdrop-blur-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/50">
              <h2 className="text-3xl font-bold text-white mb-6 text-center">Why This Audit Works</h2>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <p className="text-gray-200 text-lg">You already have a business</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <p className="text-gray-200 text-lg">You care about your website's performance</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <p className="text-gray-200 text-lg">You're ready to improve and invest in growth</p>
                </div>
              </div>
              <div className="p-6 rounded-xl bg-black/30 border border-white/10">
                <p className="text-gray-300 text-center leading-relaxed">
                  <span className="text-blue-400 font-semibold">Hidden Advantage:</span> After the audit, I can fix these issues for you — turning feedback into real results. You'll already know what needs to be done, and I'll be the obvious choice to do it.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Enhanced Audit Form Section */}
        <section id="audit-form" className="py-20 px-4">
          <div className="max-w-2xl mx-auto">
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="rounded-2xl p-8 md:p-10 backdrop-blur-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/30"
                >
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-white mb-3">Request Your Free Audit</h2>
                    <p className="text-gray-300">Takes less than 30 seconds</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name Field */}
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        onBlur={() => handleBlur("name")}
                        className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${
                          fieldErrors.name && touched.name
                            ? "border-red-500/50 focus:border-red-500 focus:ring-red-500/20"
                            : "border-white/10 focus:border-blue-500/50 focus:ring-blue-500/20"
                        } text-white placeholder-gray-500 focus:outline-none focus:ring-2 transition-all`}
                        placeholder="John Doe"
                      />
                      <AnimatePresence>
                        {fieldErrors.name && touched.name && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="flex items-center gap-2 mt-2 text-red-400 text-sm"
                          >
                            <AlertCircle className="w-4 h-4" />
                            {fieldErrors.name}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Email Field */}
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        onBlur={() => handleBlur("email")}
                        className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${
                          fieldErrors.email && touched.email
                            ? "border-red-500/50 focus:border-red-500 focus:ring-red-500/20"
                            : "border-white/10 focus:border-blue-500/50 focus:ring-blue-500/20"
                        } text-white placeholder-gray-500 focus:outline-none focus:ring-2 transition-all`}
                        placeholder="john@company.com"
                      />
                      <AnimatePresence>
                        {fieldErrors.email && touched.email && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="flex items-center gap-2 mt-2 text-red-400 text-sm"
                          >
                            <AlertCircle className="w-4 h-4" />
                            {fieldErrors.email}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Website Field */}
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Website URL *
                      </label>
                      <input
                        type="text"
                        value={formData.website}
                        onChange={(e) => handleChange("website", e.target.value)}
                        onBlur={() => handleBlur("website")}
                        className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${
                          fieldErrors.website && touched.website
                            ? "border-red-500/50 focus:border-red-500 focus:ring-red-500/20"
                            : "border-white/10 focus:border-blue-500/50 focus:ring-blue-500/20"
                        } text-white placeholder-gray-500 focus:outline-none focus:ring-2 transition-all`}
                        placeholder="example.com or https://example.com"
                      />
                      <AnimatePresence>
                        {fieldErrors.website && touched.website && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="flex items-center gap-2 mt-2 text-red-400 text-sm"
                          >
                            <AlertCircle className="w-4 h-4" />
                            {fieldErrors.website}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Business Type Field */}
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Business Type *
                      </label>
                      <input
                        type="text"
                        value={formData.businessType}
                        onChange={(e) => handleChange("businessType", e.target.value)}
                        onBlur={() => handleBlur("businessType")}
                        className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${
                          fieldErrors.businessType && touched.businessType
                            ? "border-red-500/50 focus:border-red-500 focus:ring-red-500/20"
                            : "border-white/10 focus:border-blue-500/50 focus:ring-blue-500/20"
                        } text-white placeholder-gray-500 focus:outline-none focus:ring-2 transition-all`}
                        placeholder="E-commerce, SaaS, Service Business, etc."
                      />
                      <AnimatePresence>
                        {fieldErrors.businessType && touched.businessType && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="flex items-center gap-2 mt-2 text-red-400 text-sm"
                          >
                            <AlertCircle className="w-4 h-4" />
                            {fieldErrors.businessType}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 px-8 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          Get My Free Audit
                          <ArrowRight className="w-5 h-5" />
                        </>
                      )}
                    </button>

                    <p className="text-center text-gray-400 text-sm">
                      🔒 Your information is secure and never shared
                    </p>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  className="rounded-2xl p-12 backdrop-blur-xl bg-gradient-to-br from-green-500/20 to-blue-500/20 border border-green-500/50 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                    className="w-20 h-20 rounded-full bg-green-500/20 border-2 border-green-500/50 flex items-center justify-center mx-auto mb-6"
                  >
                    <CheckCircle2 className="w-10 h-10 text-green-400" />
                  </motion.div>
                  <h3 className="text-3xl font-bold text-white mb-4">Audit Request Received!</h3>
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    Thank you for your interest! I'll review your website and send your detailed audit.
                  </p>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm">
                    <CheckCircle2 className="w-4 h-4" />
                    Check your inbox for confirmation
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* Enhanced Status Popup */}
        <AnimatePresence>
          {status && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
              onClick={() => setStatus(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-zinc-900 border border-white/10 rounded-2xl p-8 max-w-sm w-full text-center shadow-2xl"
              >
                {status === "success" ? (
                  <>
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring" }}
                    >
                      <CheckCircle2 className="w-16 h-16 mx-auto text-green-400 mb-4" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Success! 🚀
                    </h3>
                    <p className="text-gray-400 mb-6">
                      Your audit request has been received. Check your email for next steps!
                    </p>
                  </>
                ) : (
                  <>
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring" }}
                    >
                      <X className="w-16 h-16 mx-auto text-red-400 mb-4" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Oops! Something went wrong
                    </h3>
                    <p className="text-gray-400 mb-6">{errorMessage}</p>
                  </>
                )}

                <button
                  onClick={() => setStatus(null)}
                  className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all"
                >
                  Close
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <Footer />
      </div>
    </main>
  )
}