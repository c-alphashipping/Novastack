"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, MessageSquare, CheckCircle, XCircle } from "lucide-react"
import Link from "next/link"

export function Contact() {
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<"success" | "error" | null>(null)
  const [errorMessage, setErrorMessage] = useState("")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setStatus(null)
    setErrorMessage("")

    const form = e.currentTarget
    const formData = new FormData(form)

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

      let data: any = {}
      try {
        data = await res.json()
      } catch {
        // ignore JSON parse errors
      }

      if (!res.ok) {
        throw new Error(data?.error || "Submission failed")
      }

      // Success
      setStatus("success")
      form.reset()

      // Auto close success popup after 3s
      setTimeout(() => setStatus(null), 3000)
    } catch (err: any) {
      console.error(err)
      setErrorMessage(err.message || "Something went wrong")
      setStatus("error")
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/30 to-black" />

        {/* AI Glow */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Let’s Build Something{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Powerful
              </span>
            </h2>
            <p className="text-xl text-gray-400">
              Ready to transform your digital presence? Let’s talk.
            </p>
          </motion.div>

          <Card className="border-white/10 bg-white/5 backdrop-blur-sm">
            <CardContent className="p-8">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm text-gray-300 mb-2">Name</label>
                  <Input
                    name="name"
                    required
                    placeholder="Your name"
                    className="bg-white/5 border-white/10 text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-300 mb-2">Email</label>
                  <Input
                    name="email"
                    type="email"
                    required
                    placeholder="your@email.com"
                    className="bg-white/5 border-white/10 text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-300 mb-2">
                    Project Details
                  </label>
                  <Textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="bg-white/5 border-white/10 text-white resize-none"
                  />
                </div>

                <Button
                  size="lg"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600"
                >
                  {loading ? "Sending..." : "Request a Quote"}
                </Button>
              </form>

              {/* Quick contact */}
              <div className="mt-8 pt-8 border-t border-white/10">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild variant="outline" className="border-white/10 text-white">
                    <Link href="mailto:novastack.studio@gmail.com">
                      <Mail className="w-4 h-4 mr-2" />
                      Email Me
                    </Link>
                  </Button>

                  <Button asChild variant="outline" className="border-white/10 text-white">
                    <Link
                      href="https://wa.me/918422802008?text=Hi%20NovaStack,%20I%20want%20to%20build%20a%20website"
                      target="_blank"
                    >
                      <MessageSquare className="w-4 h-4 mr-2" />
                      WhatsApp
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* AI POPUP */}
      {status && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-zinc-900 border border-white/10 rounded-xl p-6 max-w-sm text-center"
          >
            {status === "success" ? (
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
                <p className="text-gray-400 mb-6">{errorMessage}</p>
              </>
            )}

            <Button onClick={() => setStatus(null)} className="w-full">
              Close
            </Button>
          </motion.div>
        </div>
      )}
    </>
  )
}
