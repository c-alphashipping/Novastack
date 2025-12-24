"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X, Send } from "lucide-react"

interface Message {
  role: "user" | "assistant"
  content: string
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hi 👋 I'm Nova, your AI assistant. Ask me anything about this website.",
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
  }, [messages])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage = input.trim()
    setInput("")
    setMessages((prev) => [...prev, { role: "user", content: userMessage }])
    setIsLoading(true)
    setIsTyping(true)

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage }),
      })

      const data = await response.json()

      // Simulate typing delay
      setTimeout(() => {
        setIsTyping(false)
        setMessages((prev) => [...prev, { role: "assistant", content: data.message }])
      }, 800)
    } catch (error) {
      setIsTyping(false)
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Sorry, I encountered an error. Please try again or contact us directly.",
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/50 flex items-center justify-center hover:shadow-xl hover:shadow-blue-500/70 transition-shadow"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={
          !isOpen
            ? {
                boxShadow: [
                  "0 10px 30px rgba(59, 130, 246, 0.5)",
                  "0 10px 40px rgba(59, 130, 246, 0.7)",
                  "0 10px 30px rgba(59, 130, 246, 0.5)",
                ],
              }
            : {}
        }
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-24 right-6 z-50 w-[380px] h-[500px] rounded-2xl overflow-hidden shadow-2xl"
            style={{
              background: "rgba(17, 24, 39, 0.95)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-4">
              <h3 className="text-white font-semibold">Nova AI Assistant</h3>
              <p className="text-white/80 text-xs mt-1">Ask me anything about our services</p>
            </div>

            {/* Messages */}
            <div className="h-[360px] overflow-y-auto p-4 space-y-4">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                      message.role === "user"
                        ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                        : "bg-white/10 text-gray-100"
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{message.content}</p>
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <motion.div
                  className="flex justify-start"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="bg-white/10 rounded-2xl px-4 py-3 flex gap-1">
                    {[0, 1, 2].map((i) => (
                      <motion.div
                        key={i}
                        className="w-2 h-2 bg-blue-400 rounded-full"
                        animate={{
                          y: [0, -8, 0],
                        }}
                        transition={{
                          duration: 0.6,
                          repeat: Number.POSITIVE_INFINITY,
                          delay: i * 0.15,
                        }}
                      />
                    ))}
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="p-4 border-t border-white/10">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 bg-white/10 text-white placeholder-gray-400 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  disabled={isLoading}
                />
                <motion.button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-2 rounded-xl hover:shadow-lg transition-shadow disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Send className="w-5 h-5" />
                </motion.button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
