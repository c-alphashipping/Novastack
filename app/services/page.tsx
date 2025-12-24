"use client"

import { motion } from "framer-motion"
import { Sparkles, Zap, Rocket, ArrowRight } from "lucide-react"
import { Footer } from "@/components/footer"
import Link from "next/link"

const services = [
  {
    icon: Sparkles,
    title: "Simple Website",
    subtitle: "One Page",
    description: "Perfect for portfolios, landing pages, and startups looking to establish their online presence.",
    features: [
      "Fully responsive design",
      "Contact form integration",
      "Basic SEO optimization",
      "Fast loading speed",
      "Mobile-first approach",
    ],
    price: "Starting from ₹25,000",
    popular: false,
  },
  {
    icon: Zap,
    title: "Medium Website",
    subtitle: "3-5 Pages",
    description: "Ideal for businesses and personal brands that need a professional multi-page presence.",
    features: [
      "Multiple pages & navigation",
      "Enhanced UI/UX design",
      "Performance optimization",
      "Optional AI features",
      "Content management",
      "Analytics integration",
    ],
    price: "Starting from ₹40,000",
    popular: true,
  },
  {
    icon: Rocket,
    title: "Large Website",
    subtitle: "6-7+ Pages",
    description: "For companies and platforms requiring advanced features and scalable architecture.",
    features: [
      "Advanced UI/UX design",
      "Full AI integrations",
      "Scalable architecture",
      "Admin dashboards",
      "Custom features",
      "Priority support",
    ],
    price: "Starting from ₹55,000",
    popular: false,
  },
]

export default function ServicesPage() {
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
                Professional Website
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Development Services
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Choose the perfect service tier for your needs. All packages include responsive design, SEO
                optimization, and can be enhanced with AI features.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className={`relative rounded-2xl p-8 backdrop-blur-xl border ${
                    service.popular
                      ? "bg-gradient-to-br from-blue-500/20 to-purple-500/20 border-blue-500/50"
                      : "bg-white/5 border-white/10"
                  } hover:border-blue-500/50 transition-all group`}
                >
                  {service.popular && (
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
                    className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-300"
                    initial={false}
                  />

                  <div className="relative mb-6">
                    <motion.div
                      className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30 flex items-center justify-center mb-4"
                      whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                      transition={{ duration: 0.3 }}
                    >
                      <service.icon className="w-7 h-7 text-blue-400" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white mb-1">{service.title}</h3>
                    <p className="text-gray-400 text-sm">{service.subtitle}</p>
                  </div>

                  <p className="relative text-gray-300 leading-relaxed mb-6">{service.description}</p>

                  <ul className="relative space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <motion.li
                        key={i}
                        className="flex items-start gap-2 text-gray-300 text-sm"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15 + i * 0.05 }}
                      >
                        <ArrowRight className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <div className="relative mt-auto">
                    <p className="text-2xl font-bold text-white mb-4">{service.price}</p>
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

        {/* Pricing Note */}
        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl p-8 backdrop-blur-xl bg-blue-500/10 border border-blue-500/30"
            >
              <h3 className="text-xl font-semibold text-white mb-3">Custom Pricing</h3>
              <p className="text-gray-300 leading-relaxed">
                Final pricing increases based on complexity, custom features, AI integrations, specific requirements,
                and project timeline. Contact us for a detailed quote tailored to your needs.
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
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss your project and find the perfect solution for your business.
              </p>
              <Link href="/contact">
                <motion.div
                  className="inline-flex items-center gap-2 py-4 px-8 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get a Quote
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
