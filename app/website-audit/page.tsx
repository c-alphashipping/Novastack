"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import {
  CheckCircle2,
  Search,
  Gauge,
  Smartphone,
  TrendingUp,
  Bot,
  ArrowRight,
  X,
} from "lucide-react"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function WebsiteAuditPage() {
  /* ============================
     STATE
     ============================ */
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

  /* ============================
     FIXED SUBMIT HANDLER
     ============================ */
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

  /* ============================
     STATIC DATA
     ============================ */
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
      {/* Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-sm font-medium mb-6">
        <CheckCircle2 className="w-4 h-4" />
        100% Free • No Strings Attached
      </div>

      {/* Heading */}
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
        Get a Free
        <br />
        <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Website Audit
        </span>
      </h1>

      {/* Subtitle */}
      <p className="text-xl text-gray-300 leading-relaxed mb-10">
        I’ll review your website and show you exactly what’s holding it back —
        design, speed, SEO, conversions, and AI opportunities.
      </p>

      {/* CTA */}
      <Button
        onClick={() =>
          document
            .getElementById("audit-form")
            ?.scrollIntoView({ behavior: "smooth" })
        }
        className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-6 text-lg h-auto shadow-lg shadow-blue-500/20"
      >
        Request Free Audit
        <ArrowRight className="w-5 h-5 ml-2" />
      </Button>
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

        {/* Audit Form Section */}
        <section id="audit-form" className="py-20 px-4">
          <div className="max-w-2xl mx-auto">
            {!submitted ? (
              <div className="rounded-2xl p-8 backdrop-blur-xl bg-white/5 border border-white/10">
                <h2 className="text-3xl font-bold text-white text-center mb-8">
                  Request Your Free Audit
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <Input
                    required
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />

                  <Input
                    required
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />

                  <Input
                    required
                    placeholder="Website URL"
                    value={formData.website}
                    onChange={(e) =>
                      setFormData({ ...formData, website: e.target.value })
                    }
                  />

                  <Input
                    required
                    placeholder="Business Type"
                    value={formData.businessType}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        businessType: e.target.value,
                      })
                    }
                  />

                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white py-6 text-lg h-auto"
                  >
                    {loading ? "Submitting..." : "Get My Free Audit"}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </form>
              </div>
            ) : (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="rounded-2xl p-12 bg-gradient-to-br from-green-500/20 to-blue-500/20 border border-green-500/40 text-center"
              >
                <CheckCircle2 className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-white mb-2">
                  Request Received!
                </h3>
                <p className="text-gray-300">
                  I’ll review your website and send your audit within 24 hours.
                </p>
              </motion.div>
            )}
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
                    Your free website audit will be delivered within 24 hours.
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
