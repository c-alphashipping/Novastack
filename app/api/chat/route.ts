import { NextResponse } from "next/server"

// Website context for the chatbot
const WEBSITE_CONTEXT = `
You are a professional assistant for an AI-integrated website development business. Answer questions clearly and honestly using only the information provided below.

SERVICES OFFERED:
1. Simple Website (One Page)
   - Best for portfolios, landing pages, startups
   - Responsive design, contact form, basic SEO
   - Starting price: ₹25,000

2. Medium Website (3-5 Pages)
   - Business websites, personal brands
   - Multiple pages, better UI/UX, performance optimization
   - Optional AI features
   - Starting price: ₹40,000

3. Large Website (6-7+ Pages)
   - Companies, platforms, advanced needs
   - Advanced UI/UX, AI integrations, scalable architecture
   - Admin dashboards (optional)
   - Starting price: ₹55,000

Note: Final pricing increases based on complexity, features, AI integrations, and timeline.

AI INTEGRATION FEATURES:
- AI Chatbots (like this one!)
- AI Forms & Automation
- API Integrations (OpenAI, Claude, etc.)
- Smart dashboards with analytics
- AI content generation tools

MAINTENANCE PLANS:
Basic Maintenance:
- Updates & backups
- Minor fixes
- Price: ₹1,000/month

Standard Maintenance:
- Performance monitoring
- Content updates
- Security checks
- Price: ₹2,500/month

Premium Maintenance:
- AI optimization
- Feature updates
- Priority support
- Price: ₹5,000/month

Yearly plans offer discounted rates.

WHY CHOOSE US:
- AI-first development approach
- Clean & future-proof code
- Fast turnaround
- Honest pricing
- Long-term partnership mindset
- Full stack expertise (Next.js, React, Node.js)
- SEO & performance optimization included

CONTACT PROCESS:
Clients can reach out through the contact form on the /contact page or by email.

If you don't know the answer or the question is outside this scope, say:
"For custom requirements or more details, please contact us through the contact form."

Keep responses friendly, concise, and professional.
`

export async function POST(request: Request) {
  try {
    const { message } = await request.json()

    if (!message || typeof message !== "string") {
      return NextResponse.json({ error: "Invalid message" }, { status: 400 })
    }

    // Simulate AI response with context-aware logic
    const response = await generateResponse(message)

    return NextResponse.json({ message: response })
  } catch (error) {
    console.error("Chat API error:", error)
    return NextResponse.json({ error: "Failed to process message" }, { status: 500 })
  }
}

// Simple context-aware response generator
async function generateResponse(userMessage: string): Promise<string> {
  const messageLower = userMessage.toLowerCase()

  // Pricing queries
  if (messageLower.includes("price") || messageLower.includes("pricing") || messageLower.includes("cost")) {
    if (messageLower.includes("simple") || messageLower.includes("one page") || messageLower.includes("1 page")) {
      return "Simple one-page websites start from ₹25,000. These include responsive design, a contact form, and basic SEO. Perfect for portfolios, landing pages, and startups. Final pricing varies based on specific features and complexity."
    }
    if (messageLower.includes("medium") || messageLower.includes("3") || messageLower.includes("5")) {
      return "Medium websites (3-5 pages) start from ₹40,000. These include multiple pages, better UI/UX, performance optimization, and optional AI features. Great for business websites and personal brands."
    }
    if (messageLower.includes("large") || messageLower.includes("advanced") || messageLower.includes("complex")) {
      return "Large websites (6-7+ pages) start from ₹55,000. These include advanced UI/UX, AI integrations, scalable architecture, and optional admin dashboards. Perfect for companies and platforms with advanced needs."
    }
    if (messageLower.includes("maintenance")) {
      return "We offer three maintenance plans:\n\n• Basic: ₹1,000/month (updates, backups, minor fixes)\n• Standard: ₹2,500/month (performance monitoring, content updates, security)\n• Premium: ₹5,000/month (AI optimization, feature updates, priority support)\n\nYearly plans come with discounted rates."
    }
    return "We offer three service tiers:\n\n• Simple Website (1 page): Starting from ₹25,000\n• Medium Website (3-5 pages): Starting from ₹40,000\n• Large Website (6-7+ pages): Starting from ₹55,000\n\nFinal pricing depends on complexity, features, and AI integrations. Which tier interests you?"
  }

  // AI integration queries
  if (messageLower.includes("ai") || messageLower.includes("chatbot") || messageLower.includes("automation")) {
    return "We specialize in AI-integrated websites! Our AI services include:\n\n• AI Chatbots (like this one)\n• AI Forms & Automation\n• API Integrations (OpenAI, Claude, custom models)\n• Smart dashboards with analytics\n• AI content generation tools\n\nAI features can be added to any service tier. Would you like to know more about a specific AI feature?"
  }

  // Service queries
  if (
    messageLower.includes("service") ||
    messageLower.includes("what do you") ||
    messageLower.includes("what can you")
  ) {
    return "I build professional AI-integrated websites! Services include:\n\n• Simple Websites (1 page) - Portfolios, landing pages\n• Medium Websites (3-5 pages) - Business sites, personal brands\n• Large Websites (6-7+ pages) - Platforms, companies\n\nAll include responsive design, SEO optimization, and can integrate AI features like chatbots, automation, and APIs. What type of website are you looking for?"
  }

  // Maintenance queries
  if (messageLower.includes("maintenance") || messageLower.includes("support") || messageLower.includes("update")) {
    return "We offer ongoing maintenance plans:\n\n• Basic (₹1,000/month): Updates, backups, minor fixes\n• Standard (₹2,500/month): Performance monitoring, content updates, security\n• Premium (₹5,000/month): AI optimization, feature updates, priority support\n\nYearly plans offer better rates. What level of support are you looking for?"
  }

  // Timeline queries
  if (messageLower.includes("how long") || messageLower.includes("timeline") || messageLower.includes("time")) {
    return "Typical timelines:\n\n• Simple website: 1-2 weeks\n• Medium website: 2-4 weeks\n• Large website: 4-8 weeks\n\nTimelines vary based on complexity, AI integrations, and specific requirements. For custom requirements, please contact us through the contact form."
  }

  // Technology queries
  if (messageLower.includes("tech") || messageLower.includes("technology") || messageLower.includes("stack")) {
    return "I build with modern, cutting-edge technologies:\n\n• Next.js & React for fast, SEO-friendly sites\n• Tailwind CSS for beautiful, responsive design\n• AI APIs (OpenAI, Claude, custom models)\n• Node.js for backend services\n• Vercel for reliable hosting\n\nAll sites are optimized for performance, SEO, and scalability."
  }

  // Contact queries
  if (messageLower.includes("contact") || messageLower.includes("reach") || messageLower.includes("email")) {
    return "You can reach out through the Contact page on this website. Fill out the form with your name, email, and project details. Looking forward to hearing about your project!"
  }

  // Why choose queries
  if (messageLower.includes("why") || messageLower.includes("choose") || messageLower.includes("better")) {
    return "Here's why clients choose to work with me:\n\n• AI-first development approach\n• Clean, future-proof code\n• Fast turnaround times\n• Transparent, honest pricing\n• Long-term partnership mindset\n• Full-stack expertise\n• SEO & performance optimization included\n\nI focus on building websites that drive real business results."
  }

  // Default response
  return "Thanks for your question! I can help you with information about:\n\n• Services & pricing\n• AI integration features\n• Maintenance plans\n• Project timelines\n• Technologies used\n\nWhat would you like to know more about? For custom requirements, please use the contact form."
}
