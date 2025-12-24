"use client"

import { Linkedin, Mail, MessageCircle } from "lucide-react"
import Link from "next/link"

const socialLinks = [
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/hamdan-shaikh-165b17297/",
    label: "Connect on LinkedIn",
  },
  {
    icon: MessageCircle,
    href: "https://wa.me/918422802008",
    label: "Chat on WhatsApp",
  },
  {
    icon: Mail,
    href: "mailto:novastack.studio@gmail.com",
    label: "Email NovaStack",
  },
]

export function Footer() {
  return (
    <footer className="relative py-12 px-4 border-t border-white/10">
      <div className="absolute inset-0 bg-black" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="flex items-center gap-3 text-xl font-bold text-white mb-2">
              <img
                src="/logo.jpeg"
                alt="NovaStack logo"
                className="h-16 w-auto opacity-90 transition-transform duration-300 hover:scale-105"
              />
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Building high-converting, AI-integrated websites that drive results.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { name: "Services", href: "/services" },
                { name: "Pricing", href: "/pricing" },
                { name: "AI Integration", href: "/ai-integration" },
                { name: "Website Audit", href: "/website-audit" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">
              Connect
            </h4>
            <div className="flex gap-4">
              {socialLinks.map(({ icon: Icon, href, label }, index) => (
                <Link
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="group flex items-center justify-center h-10 w-10 rounded-lg
                             bg-white/5 border border-white/10
                             hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500
                             transition-all duration-300"
                >
                  <Icon className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} NovaStack — Built by an independent AI-first developer
        </div>
      </div>
    </footer>
  )
}
