"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      name: "Captain Fahim Shamsi",
      role: "Managing Director & CEO, C-Alpha Shipping",
      content:
        "Absolutely phenomenal work! The website feels modern, fast, and incredibly professional. Highly recommended!",
      rating: 5,
    },
    {
      name: "Captain Daljeet Singh",
      role: "Managing Director – Americas, C-Alpha Shipping",
      content:
        "Fast delivery, clean implementation, and excellent support. The new website significantly improved our online visibility and user experience.",
      rating: 5,
    },
  ]

  return (
    <section className="relative py-24 px-4">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/20 to-black" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Client{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Testimonials
            </span>
          </h2>

          {/* Trust label */}
          <p className="text-sm uppercase tracking-widest text-blue-400 mb-4">
            Verified client feedback from real projects
          </p>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Trusted by businesses for modern, high-performance websites
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="border-white/10 bg-white/5 backdrop-blur-sm h-full">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    “{testimonial.content}”
                  </p>

                  <div>
                    <div className="font-semibold text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-400">
                      {testimonial.role}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
