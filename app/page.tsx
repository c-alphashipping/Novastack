"use client"

import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { AIAgents } from "@/components/ai-agents"
import { AIIntegration } from "@/components/ai-integration"
import { AIValueMultiplier } from "@/components/ai-value-multiplier"
import { MaintenancePlans } from "@/components/maintenance-plans"
import { WhyChooseMe } from "@/components/why-choose-me"
import { Testimonials } from "@/components/testimonials"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { ScrollProgress } from "@/components/scroll-progress"

export default function Home() {
  return (
    <main className="min-h-screen">
      <ScrollProgress />
      <Hero />
      <About />
      <Services />
      <AIAgents/>
      <AIIntegration />
      <AIValueMultiplier />
      <MaintenancePlans />
      <WhyChooseMe />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
