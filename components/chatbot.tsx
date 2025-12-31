"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X, Send, Sparkles } from "lucide-react"

interface Message {
  role: "user" | "assistant"
  content: string
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "👋 Hi, I’m **Nova**. Ask me about websites, AI agents, or pricing.",
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages, isTyping])

  const handleSubmit = async (e: React.FormEvent, preset?: string) => {
    e.preventDefault()
    const text = preset ?? input
    if (!text.trim() || isLoading) return

    setInput("")
    setMessages((prev) => [...prev, { role: "user", content: text }])
    setIsLoading(true)
    setIsTyping(true)

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      })

      const data = await response.json()

      setTimeout(() => {
        setIsTyping(false)
        setMessages((prev) => [...prev, { role: "assistant", content: data.message }])
      }, 700)
    } catch {
      setIsTyping(false)
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Something went wrong. Please try again or contact us directly.",
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={
          !isOpen
            ? {
                boxShadow: [
                  "0 0 20px rgba(99,102,241,0.6)",
                  "0 0 35px rgba(168,85,247,0.8)",
                  "0 0 20px rgba(99,102,241,0.6)",
                ],
              }
            : {}
        }
        transition={{ duration: 2, repeat: Infinity }}
      >
        {isOpen ? <X /> : <MessageCircle />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ type: "spring", damping: 24, stiffness: 280 }}
            className="
              fixed z-50 overflow-hidden
              bottom-0 right-0 left-0
              md:bottom-24 md:right-6 md:left-auto
              w-full md:w-[380px]
              h-[55vh] md:h-[520px]
              rounded-t-2xl md:rounded-2xl
              bg-[#0b1220]/95 backdrop-blur-xl
              border border-white/10
              shadow-2xl
            "
          >
            {/* Mobile drag handle */}
            <div className="md:hidden flex justify-center pt-2">
              <div className="w-10 h-1 rounded-full bg-white/20" />
            </div>

            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-purple-400" />
                <div>
                  <p className="text-white font-semibold text-sm">Nova AI</p>
                  <p className="text-xs text-gray-400">Website & Growth Assistant</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)}>
                <X className="w-5 h-5 text-gray-400 hover:text-white" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
              {messages.map((m, i) => (
                <motion.div
                  key={i}
                  className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    className={`max-w-[80%] px-4 py-2 rounded-2xl text-sm leading-relaxed ${
                      m.role === "user"
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                        : "bg-white/10 text-gray-100"
                    }`}
                  >
                    {m.content}
                  </div>
                </motion.div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <div className="flex gap-1">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      className="w-2 h-2 bg-blue-400 rounded-full"
                      animate={{ y: [0, -6, 0], opacity: [0.6, 1, 0.6] }}
                      transition={{
                        duration: 0.6,
                        repeat: Infinity,
                        delay: i * 0.15,
                        ease: "easeInOut",
                      }}
                    />
                  ))}
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick actions (only before first user message) */}
            {messages.length === 1 && (
              <div className="px-4 pb-3 flex gap-2 flex-wrap">
                {["Website Pricing", "AI Agents", "Free Audit"].map((q) => (
                  <button
                    key={q}
                    onClick={(e) => handleSubmit(e as any, q)}
                    className="text-xs px-3 py-1.5 rounded-full bg-white/10 text-gray-200 hover:bg-white/20 transition"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <form
              onSubmit={handleSubmit}
              className="p-4 border-t border-white/10 flex gap-2"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message…"
                disabled={isLoading}
                className="flex-1 rounded-full px-4 py-2 bg-white/10 text-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <motion.button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="p-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white disabled:opacity-50"
                whileTap={{ scale: 0.9 }}
              >
                <Send className="w-4 h-4" />
              </motion.button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
