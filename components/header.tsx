"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Pricing", href: "/pricing" },
    { name: "AI Integration", href: "/ai-integration" },
    { name: "Website Audit", href: "/website-audit" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 backdrop-blur-xl bg-black/50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold">
             <h3 className="flex items-center gap-3 text-xl font-bold text-white mb-2">
              <img
                src="/logo.jpeg"
                alt="NovaStack logo"
                className="h-15 w-auto opacity-90 transition-transform duration-300 hover:scale-105"
              />
            </h3>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors relative ${
                  pathname === item.href ? "text-blue-400" : "text-gray-300 hover:text-white"
                }`}
              >
                {item.name}
                {pathname === item.href && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-white p-2">
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-white/10 bg-black/95 backdrop-blur-xl"
          >
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-2 text-sm font-medium transition-colors ${
                    pathname === item.href ? "text-blue-400" : "text-gray-300 hover:text-white"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
