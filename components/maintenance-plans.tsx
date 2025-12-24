"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export function MaintenancePlans() {
  const [isYearly, setIsYearly] = useState(false)

  const plans = [
    {
      name: "Basic",
      monthlyPrice: "₹1,000",
      yearlyPrice: "₹10,000",
      features: ["Updates & backups", "Minor fixes", "Email support", "48-hour response time"],
    },
    {
      name: "Standard",
      monthlyPrice: "₹2,500",
      yearlyPrice: "₹25,000",
      features: [
        "Performance monitoring",
        "Content updates",
        "Security checks",
        "Priority support",
        "24-hour response time",
      ],
      popular: true,
    },
    {
      name: "Premium",
      monthlyPrice: "₹5,000",
      yearlyPrice: "₹50,000",
      features: [
        "AI optimization",
        "Feature updates",
        "Priority support",
        "Dedicated account manager",
        "4-hour response time",
        "Monthly strategy calls",
      ],
    },
  ]

  return (
    <section className="relative py-24 px-4">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/20 to-black" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Maintenance{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Plans</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed">
            Keep your website running smoothly with ongoing support
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-4 p-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                !isYearly ? "bg-blue-600 text-white" : "text-gray-400 hover:text-white"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                isYearly ? "bg-blue-600 text-white" : "text-gray-400 hover:text-white"
              }`}
            >
              Yearly
              <span className="ml-2 text-xs bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full">Save 17%</span>
            </button>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card
                className={`relative overflow-hidden border-white/10 bg-white/5 backdrop-blur-sm h-full ${plan.popular ? "md:scale-105 border-blue-500/50" : ""}`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                    POPULAR
                  </div>
                )}

                <CardHeader>
                  <CardTitle className="text-2xl text-white">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <div className="text-3xl font-bold text-white">
                      {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                    </div>
                    <div className="text-sm text-gray-400">per {isYearly ? "year" : "month"}</div>
                  </div>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-gray-300">
                        <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                        <span className="text-sm leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                    Choose Plan
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
