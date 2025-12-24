"use client"

import type React from "react"

import { motion } from "framer-motion"
import {
  Bot,
  Zap,
  Code,
  BarChart,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Target,
  Lightbulb,
} from "lucide-react"
import { Footer } from "@/components/footer"
import Link from "next/link"

const aiFeatures = [
  {
    icon: Bot,
    title: "AI Chatbots",
    description:
      "Intelligent conversational AI that understands your business and engages visitors 24/7 with instant, accurate responses.",
    benefits: ["24/7 customer support", "Lead qualification", "Contextual responses", "Multi-language support"],
  },
  {
    icon: Zap,
    title: "Automation",
    description:
      "Automate repetitive tasks, workflows, and processes to save time and reduce errors while improving efficiency.",
    benefits: ["Form processing", "Email automation", "Data synchronization", "Scheduled tasks"],
  },
  {
    icon: Code,
    title: "API Integrations",
    description:
      "Connect your website with powerful AI models like GPT-4, Claude, and custom machine learning solutions.",
    benefits: ["OpenAI GPT integration", "Custom AI models", "Third-party APIs", "Secure connections"],
  },
  {
    icon: BarChart,
    title: "Smart Dashboards",
    description:
      "AI-powered analytics and insights that help you understand your data and make informed business decisions.",
    benefits: ["Real-time analytics", "Predictive insights", "Custom reports", "Data visualization"],
  },
]

const useCases = [
  { title: "E-commerce", description: "AI product recommendations, chatbot support, inventory predictions" },
  { title: "SaaS Platforms", description: "Automated onboarding, smart search, usage analytics" },
  { title: "Content Sites", description: "AI content generation, personalization, SEO optimization" },
  { title: "Service Businesses", description: "Appointment scheduling, customer support, lead qualification" },
]

const aiExamples = [
  {
    icon: Bot,
    title: "AI Chatbot for Lead Capture",
    description: "24/7 customer engagement that qualifies leads and answers questions instantly",
  },
  {
    icon: Zap,
    title: "Form Automation",
    description: "Intelligent form processing that reduces manual work and improves data quality",
  },
  {
    icon: Sparkles,
    title: "AI-Generated Content & FAQs",
    description: "Automated content creation that keeps your site fresh and engaging",
  },
  {
    icon: BarChart,
    title: "Smart Dashboards & Analytics",
    description: "AI-powered insights that help you make data-driven business decisions",
  },
]

export default function AIIntegrationPage() {
  return (
    <main className="min-h-screen">
      {/* Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-blue-950 to-purple-950" />
      <div className="fixed inset-0 bg-[url('/grid.svg')] opacity-20" />

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                Powered by Advanced AI
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                AI-Integrated Websites
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  That Work Smarter
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Transform your website with cutting-edge AI technology. Automate tasks, engage visitors, and gain
                insights that drive growth.
              </p>
            </motion.div>
          </div>
        </section>

        {/* AI Features */}
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
            {aiFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-2xl p-8 backdrop-blur-xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all"
              >
                <feature.icon className="w-7 h-7 text-blue-400 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Free AI Consultation Lead Magnet Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-transparent via-purple-950/30 to-transparent">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-sm font-medium mb-6">
                <CheckCircle2 className="w-4 h-4" />
                100% Free Consultation
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Free AI Feature Consultation
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Not sure how AI fits into your website? I'll suggest the best AI features based on your business
                goals.
              </p>
            </div>

            {/* AI Examples Grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-16">
              {aiExamples.map((example, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="rounded-2xl p-6 backdrop-blur-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/30"
                >
                  <div className="flex items-start gap-4">
                    <example.icon className="w-6 h-6 text-blue-400" />
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">{example.title}</h3>
                      <p className="text-gray-300 text-sm">{example.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Why This Is Valuable */}
            <div className="rounded-2xl p-8 md:p-12 backdrop-blur-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/50">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
                Why This Consultation Is Valuable
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <Target className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                  <h4 className="text-lg font-semibold text-white mb-2">Most Clients Want AI</h4>
                  <p className="text-gray-300 text-sm">Everyone's talking about AI, but few know how to apply it</p>
                </div>
                <div className="text-center">
                  <Lightbulb className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                  <h4 className="text-lg font-semibold text-white mb-2">They Don't Know Where to Start</h4>
                  <p className="text-gray-300 text-sm">AI options are overwhelming without expert guidance</p>
                </div>
                <div className="text-center">
                  <CheckCircle2 className="w-8 h-8 text-green-400 mx-auto mb-4" />
                  <h4 className="text-lg font-semibold text-white mb-2">NovaStack Becomes the Expert</h4>
                  <p className="text-gray-300 text-sm">Position yourself as the trusted AI authority</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="pt-16 pb-6 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              How AI Integration Works
            </h2>
            <p className="text-gray-300 text-lg">
              Simple, seamless, and powerful
            </p>
          </div>
        </section>


        {/* Use Cases */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6">
            {useCases.map((useCase, index) => (
              <div key={index} className="rounded-2xl p-6 bg-white/5 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-2">{useCase.title}</h3>
                <p className="text-gray-300">{useCase.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Add AI to Your Website?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how AI can transform your business and create better experiences for your users.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 py-4 px-8 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold"
            >
              Start Your AI Project
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  )
}
