"use client"

import { motion } from "framer-motion"
import { Check, ArrowRight } from "lucide-react"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { useState } from "react"

const websitePackages = [
  {
    name: "One Page Website",
    price: "₹25,000",
    description: "Perfect for portfolios and landing pages",
    features: ["Responsive design", "Contact form", "Basic SEO", "Fast loading", "1 week delivery"],
  },
  {
    name: "Medium Website",
    price: "₹40,000",
    description: "Ideal for business websites",
    features: [
      "3-5 pages",
      "Enhanced UI/UX",
      "Performance optimization",
      "Optional AI features",
      "Analytics integration",
      "2-4 weeks delivery",
    ],
    popular: true,
  },
  {
    name: "Large Website",
    price: "₹55,000",
    description: "Advanced platforms and companies",
    features: [
      "6-7+ pages",
      "AI integrations",
      "Scalable architecture",
      "Admin dashboard",
      "Priority support",
      "4-8 weeks delivery",
    ],
  },
]

const maintenancePlans = [
  {
    name: "Basic",
    monthly: "₹1,000",
    yearly: "₹10,000",
    description: "Essential maintenance & updates",
    features: ["Regular updates", "Weekly backups", "Minor bug fixes", "Email support"],
  },
  {
    name: "Standard",
    monthly: "₹2,500",
    yearly: "₹25,000",
    description: "Enhanced monitoring & support",
    features: [
      "Performance monitoring",
      "Content updates",
      "Security checks",
      "Priority email support",
      "Monthly reports",
    ],
    popular: true,
  },
  {
    name: "Premium",
    monthly: "₹5,000",
    yearly: "₹50,000",
    description: "Complete care & optimization",
    features: [
      "AI optimization",
      "Feature updates",
      "priority support",
      "Security hardening",
      "Weekly reports",
      "Dedicated manager",
    ],
  },
]

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly")

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
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Simple &{" "}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Transparent Pricing
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Choose the package that fits your needs. All prices are starting points and can be customized based on
                your requirements.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Website Packages */}
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl font-bold text-white text-center mb-12"
            >
              Website Development Packages
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-8">
              {websitePackages.map((pkg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className={`relative rounded-2xl p-8 backdrop-blur-xl border ${
                    pkg.popular
                      ? "bg-gradient-to-br from-blue-500/20 to-purple-500/20 border-blue-500/50"
                      : "bg-white/5 border-white/10"
                  } hover:border-blue-500/50 transition-all group`}
                >
                  {pkg.popular && (
                    <motion.div
                      className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-semibold px-4 py-1 rounded-full"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      Most Popular
                    </motion.div>
                  )}

                  <motion.div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{
                      background: "linear-gradient(135deg, rgba(59, 130, 246, 0.05), rgba(168, 85, 247, 0.05))",
                    }}
                  />

                  <div className="relative">
                    <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                    <p className="text-gray-400 text-sm mb-6">{pkg.description}</p>

                    <div className="mb-6">
                      <p className="text-4xl font-bold text-white">{pkg.price}</p>
                      <p className="text-gray-400 text-sm mt-1">Starting from</p>
                    </div>

                    <ul className="space-y-3 mb-8">
                      {pkg.features.map((feature, i) => (
                        <motion.li
                          key={i}
                          className="flex items-start gap-3 text-gray-300"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.15 + i * 0.05 }}
                        >
                          <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>

                    <Link href="/contact">
                      <motion.div
                        className="block w-full py-3 px-6 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold text-center hover:shadow-lg hover:shadow-blue-500/50 transition-all"
                        whileHover={{ scale: 1.03, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Get Started
                      </motion.div>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Maintenance Plans */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-4">Maintenance Plans</h2>
              <p className="text-gray-300 mb-8">Keep your website running smoothly with our maintenance plans</p>

              {/* Billing Toggle */}
              <div className="inline-flex items-center gap-4 p-1 rounded-full bg-white/5 border border-white/10">
                <motion.button
                  onClick={() => setBillingCycle("monthly")}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                    billingCycle === "monthly"
                      ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Monthly
                </motion.button>
                <motion.button
                  onClick={() => setBillingCycle("yearly")}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                    billingCycle === "yearly"
                      ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Yearly
                  <span className="ml-2 text-xs bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full">Save 17%</span>
                </motion.button>
              </div>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {maintenancePlans.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className={`relative rounded-2xl p-8 backdrop-blur-xl border ${
                    plan.popular
                      ? "bg-gradient-to-br from-blue-500/20 to-purple-500/20 border-blue-500/50"
                      : "bg-white/5 border-white/10"
                  } hover:border-blue-500/50 transition-all group`}
                >
                  {plan.popular && (
                    <motion.div
                      className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-semibold px-4 py-1 rounded-full"
                      initial={{ opacity: 0, y: -10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 }}
                    >
                      Recommended
                    </motion.div>
                  )}

                  <motion.div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{
                      background: "linear-gradient(135deg, rgba(59, 130, 246, 0.05), rgba(168, 85, 247, 0.05))",
                    }}
                  />

                  <div className="relative">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 text-sm mb-6">{plan.description}</p>

                    <div className="mb-6">
                      <motion.p
                        className="text-4xl font-bold text-white"
                        key={billingCycle}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {billingCycle === "monthly" ? plan.monthly : plan.yearly}
                      </motion.p>
                      <p className="text-gray-400 text-sm mt-1">per {billingCycle === "monthly" ? "month" : "year"}</p>
                    </div>

                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, i) => (
                        <motion.li
                          key={i}
                          className="flex items-start gap-3 text-gray-300"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.15 + i * 0.05 }}
                        >
                          <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>

                    <Link href="/contact">
                      <motion.div
                        className="block w-full py-3 px-6 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold text-center hover:shadow-lg hover:shadow-blue-500/50 transition-all"
                        whileHover={{ scale: 1.03, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Choose Plan
                      </motion.div>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Custom Pricing Note */}
        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl p-8 backdrop-blur-xl bg-blue-500/10 border border-blue-500/30 text-center"
            >
              <h3 className="text-2xl font-semibold text-white mb-3">Need a Custom Solution?</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Every project is unique. Final pricing is customized based on your specific requirements, features, and
                timeline.
              </p>
              <Link href="/contact">
                <motion.div
                  className="inline-flex items-center gap-2 py-3 px-8 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Request Custom Quote
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </Link>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  )
}
