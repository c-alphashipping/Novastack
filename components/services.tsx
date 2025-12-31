"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Layers, Building2, ArrowRight } from "lucide-react"

export function Services() {
  const services = [
    {
      icon: FileText,
      title: "Simple Website",
      subtitle: "One Page",
      description: "Best for portfolios, landing pages, startups",
      features: ["Responsive design", "Contact form", "Basic SEO"],
      price: "₹25,000",
      gradient: "from-blue-600/20 to-cyan-600/20",
    },
    {
      icon: Layers,
      title: "Medium Website",
      subtitle: "3–5 Pages",
      description: "Business websites, personal brands",
      features: ["Multiple pages", "Better UI/UX", "Performance optimization", "Optional AI features"],
      price: "₹40,000",
      gradient: "from-purple-600/20 to-pink-600/20",
      featured: true,
    },
    {
      icon: Building2,
      title: "Large Website",
      subtitle: "6–7+ Pages",
      description: "Companies, platforms, advanced needs",
      features: ["Advanced UI/UX", "AI integrations", "Scalable architecture", "Admin dashboards (optional)"],
      price: "₹55,000",
      gradient: "from-indigo-600/20 to-blue-600/20",
    },
  ]

  return (
    <section className="relative py-24 px-4">
      <div className="absolute inset-0 bg-black" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Services &{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Pricing</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Choose the perfect package for your needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card
                className={`relative overflow-hidden border-white/10 bg-white/5 backdrop-blur-sm h-full ${service.featured ? "md:scale-105 border-blue-500/50" : ""}`}
              >
                {service.featured && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                    POPULAR
                  </div>
                )}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-50`} />

                <CardHeader className="relative">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-white">{service.title}</CardTitle>
                  <CardDescription className="text-gray-400">{service.subtitle}</CardDescription>
                  <p className="text-sm text-gray-400 mt-2">{service.description}</p>
                </CardHeader>

                <CardContent className="relative">
                  <div className="mb-6">
                    <div className="text-3xl font-bold text-white mb-1">{service.price}</div>
                    <div className="text-sm text-gray-400">Starting from</div>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-gray-300">
                        <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="w-2 h-2 rounded-full bg-blue-400" />
                        </div>
                        <span className="text-sm leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                    <a href="/contact">Get Started</a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center p-6 rounded-xl bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm"
        >
          <p className="text-gray-300 leading-relaxed">
            <span className="font-semibold text-blue-400">Note:</span> Final pricing increases based on complexity,
            features, AI integrations, and timeline.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
