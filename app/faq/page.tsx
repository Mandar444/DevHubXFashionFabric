"use client"

import { JSX, useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { AnimateIn, AnimateInStagger } from "@/components/animate-in"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

interface FAQItem {
  question: string
  answer: string | JSX.Element
}

interface FAQSection {
  title: string
  items: FAQItem[]
}

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({
    "general-0": true, // First item open by default
  })

  const toggleItem = (sectionIndex: number, itemIndex: number) => {
    const key = `${sectionIndex}-${itemIndex}`
    setOpenItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  const faqSections: FAQSection[] = [
    {
      title: " General",
      items: [
        {
          question: "What type of uniforms do you manufacture?",
          answer: "We create premium, custom-made uniforms that enhance brand image and professionalism. With specialization in hospitality and experience across corporate, healthcare, and retail sectors, we offer fully customizable, made-to-measure uniforms supported by an end-to-end process; from initial concept to production and timely delivery.",
        },
        {
          question: "Where is Fashion Fabric located?",
          answer: "Based in Goa, India. We proudly serve clients across the country, delivering high-quality uniform solutions Pan-India.",
        },
        {
          question: "Do you offer ready fit or custom made uniforms?",
          answer: "We create bespoke, custom-made uniforms tailored to your exact specifications. Each uniform is crafted to suit every body type and professional setting, and we work closely with you throughout the process to ensure it reflects your brand perfectly.",
        },
        {
          question: "Which companies do you work with?",
          answer: "With approximately two decades of experience, we have been trusted by renowned hospitality brands including St. Regis, Marriott, Taj, Hyatt, Novotel, Holiday Inn, Big Daddy Casino, etc. Our proven track record of quality, reliability, and service continues to attract new prestigious names to our growing portfolio.",
        },
      ],
    },
    {
      title: "Why Choose Fashion Fabric",
      items: [
        {
          question: "What makes Fashion Fabric different from other suppliers?",
          answer: "We combine affordability with exceptional quality. With over 15 years of experience in the industry, we provide 100% customized, made-to-measure uniforms at competitive prices to suit every budget. Our reputation is built on trust, reliability, and timely delivery, earning us the confidence of leading hospitality brands.",
        },
        {
          question: "To what extent can the uniforms be customized?",
          answer: "Absolutely! Our uniforms are 100% customizable. From fabric and fit to every design detail, you can personalize colors, trims, logo placement, and choose whether branding is done via embroidery or screen printing, including the threads, buttons, and finishes used. Think of it as a blank canvas—we tailor every element to match your exact vision.",
        },
      ],
    },
    {
      title: "Product Quality",
      items: [
        {
          question: "What products does Fashion Fabric Offer?",
          answer: "We offer end-to-end uniform solutions across industries, with a strong specialization in hospitality. From front-of-house and back-of-house uniforms to corporate wear for men and women, we deliver complete uniform programs. We also provide accessories and finishing elements to ensure a consistent, polished, and truly uniform look across every department.",
        },
        {
          question: "What materials are used to make uniforms?",
          answer: "We use premium-quality fabrics sourced from trusted suppliers. Our material selection is based on comfort, durability, finish, and performance, and includes cotton, polyester blends, linen, and specialized performance fabrics. Fabric choice is customized as per department and working conditions.",
        },
        {
          question: "What are Fashion Fabric's quality control measures?",
          answer: "Quality is at the heart of everything we do at Fashion Fabric. We believe comfort and style aren't just features; they're an experience stitched into every garment. Each uniform undergoes rigorous multi-stage quality checks, from fabric inspection to cutting, stitching, and final finishing. With strict standards and expert craftsmanship, we ensure every piece delivers long-lasting durability, superior comfort, and a polished professional look.",
        },
        {
          question: "What is your minimum order quantity?",
          answer: "We don't have a fixed minimum order quantity. Order requirements depend on the style, design complexity, and customization details; so we tailor it to your needs. Share your requirements with us and we'll provide the best possible quote and production plan.",
        },
      ],
    },
    {
      title: "Ordering & Delivery",
      items: [
        {
          question: "What is the step-by-step process from enquiry to delivery?",
          answer: "From enquiry to delivery, Fashion Fabric ensures a seamless, end-to-end uniform experience. Once you share your requirements, our team consults you on design, fabric and branding options and provides a detailed quotation. After confirmation, we arrange a physical visit to take accurate measurements for the best fit and finalize the design for approval. Production then begins with stringent quality checks at every stage, followed by timely packaging and delivery to your location as per the committed schedule.",
        },
        {
          question: "Can you replicate an existing uniform design?",
          answer: "Yes, we can replicate your existing uniform design based on clear photos/videos or a physical sample piece. Our team matches the pattern, colour, fabric feel and branding as closely as possible, and if any fabric or accessory is unavailable, we recommend the nearest alternatives and proceed only after your approval.",
        },
        {
          question: "Can we place repeat orders later?",
          answer: "Yes, absolutely. Repeat orders are easy with Fashion Fabric. Once your design is finalized, we keep the pattern, fabric details, sizing and branding records so you can reorder anytime without restarting the process. This is ideal when you hire new staff or need additional uniforms later.",
        },
      ],
    },
    {
      title: "Samples & Designs",
      items: [
        {
          question: "Does Fashion Fabric provide samples?",
          answer: "Yes. Fashion Fabric provides samples to help you finalize the fabric quality, fit, and overall design before bulk production. For new departments or first-time clients, we strongly recommend sample development and approval to ensure complete clarity, eliminate errors, and guarantee satisfaction with the final uniforms.",
        },
        {
          question: "Is there a sample cost?",
          answer: "Sample charges are applicable based on the design complexity, fabric type, and branding requirements. For bulk orders, the sample cost is adjusted in the final order value once the order is confirmed.",
        },
        {
          question: "How long does sample development take?",
          answer: "Sample development typically takes 2 weeks depending on customization and material availability. For urgent requirements, we can also offer an expedited sample process subject to feasibility.",
        },
      ],
    },
    {
      title: "After-sales",
      items: [
        {
          question: "Do you offer uniform maintenance or after-sales services?",
          answer: "Yes. We provide after-sales support including alterations, size adjustments, patchwork, and finishing improvements. We also assist with edits such as additions/deletions of design elements.",
        },
        {
          question: "Return / exchange policy for customized uniforms",
          answer: "Since uniforms are customized as per approved design, measurements, and branding details, returns are not applicable. However, in case of sizing issues or approved changes, we support alterations, adjustments and fit corrections wherever feasible to ensure the final uniform fits perfectly.",
        },
        {
          question: "Do you offer replacement for defective pieces?",
          answer: "Yes. Fashion Fabric offers free replacement for any quality defect from our end, including stitching issues, fabric defects, or branding errors identified at the time of delivery. Our priority is to ensure every uniform meets our quality standards before it reaches you.",
        },
        {
          question: "How do you handle stitching defects?",
          answer: "At Fashion Fabric all uniforms go through strict quality checks, but if any stitching defect is identified, our team promptly rectifies it through re-stitching, patchwork, reinforcement, or finishing corrections. If required, we also provide replacement for the affected piece, depending on the issue and feasibility.",
        },
      ],
    },
    {
      title: "Contact & Support",
      items: [
        {
          question: "How do I request a quotation?",
          answer: "You can request a quotation by reaching out to us via email at fashionfabric@rocketmail.com, call/ WhatsApp at 9867275524, or visiting our store offline. Share your uniform requirement and our team will assist you with a quick consultation and provide a detailed quotation.",
        },
        {
          question: "What details should I share for a quotation?",
          answer: "To receive a quotation, share the uniform type, quantity, fabric preference, design reference, branding details, size range/measurement method. Based on this, we will revert with the quotation and estimated delivery timeline.",
        },
        {
          question: "Can I schedule a meeting / site visit?",
          answer: "Yes. You can schedule a meeting or site visit with our team for consultation, fabric selection, and overall uniform planning. Our team ensures a smooth and professional experience from discussion to final execution.",
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-[#fdfbf7] text-emerald-950">
      {/* Royal Hero Section - Lighter more elegant approach */}
      <section className="relative w-full h-[50vh] flex items-center justify-center overflow-hidden">
        {/* Subtle royal texture */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] opacity-20 pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/10 via-transparent to-[#fdfbf7]"></div>
        
        {/* Ornate corner decorations */}
        <div className="absolute top-10 left-10 w-32 h-32 border-t-2 border-l-2 border-amber-500/30 rounded-tl-3xl hidden md:block" />
        <div className="absolute top-10 right-10 w-32 h-32 border-t-2 border-r-2 border-amber-500/30 rounded-tr-3xl hidden md:block" />

        <div className="container relative z-20 px-4 md:px-6 flex flex-col items-center text-center">
          <AnimateInStagger>
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-12 h-px bg-amber-500"></div>
              <span className="text-amber-600 font-bold tracking-[0.6em] uppercase text-xs">The Archives of Knowledge</span>
              <div className="w-12 h-px bg-amber-500"></div>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-emerald-950 mb-8 font-garamond italic drop-shadow-sm">
              Sovereign <span className="text-amber-600">Clarification</span>
            </h1>
            
            <p className="max-w-[800px] text-2xl md:text-3xl font-garamond italic text-emerald-950/70 font-light leading-relaxed">
              "Every great achievement begins with understanding. We reveal the meticulous details of our craft."
            </p>
          </AnimateInStagger>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-24 relative overflow-hidden">
        {/* Philosophical Dividers */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
        
        <div className="container mx-auto max-w-5xl px-4">
          <div className="flex flex-col gap-24">
            {faqSections.map((section, sectionIndex) => (
              <div key={sectionIndex} className="relative">
                <AnimateIn>
                  <div className="flex items-center gap-6 mb-16">
                    <span className="text-4xl md:text-5xl border-b-2 border-amber-500 pb-2 font-garamond italic font-bold">0{sectionIndex + 1}</span>
                    <h2 className="text-4xl md:text-6xl font-bold font-garamond italic text-emerald-950">
                      {section.title}
                    </h2>
                  </div>
                </AnimateIn>

                <div className="grid grid-cols-1 gap-8">
                  {section.items.map((item, itemIndex) => {
                    const key = `${sectionIndex}-${itemIndex}`
                    const isOpen = openItems[key]

                    return (
                      <AnimateIn key={itemIndex} delay={itemIndex * 0.1}>
                        <div className={`group relative transition-all duration-700 bg-white border-2 rounded-[2.5rem] overflow-hidden ${
                          isOpen 
                            ? "border-amber-500 shadow-[0_30px_60px_-15px_rgba(180,120,0,0.1)]" 
                            : "border-amber-500/10 hover:border-amber-500/30"
                        }`}>
                          <button
                            onClick={() => toggleItem(sectionIndex, itemIndex)}
                            className="w-full px-8 md:px-12 py-8 md:py-10 flex items-center justify-between text-left gap-6"
                          >
                            <span className={`text-xl md:text-2xl font-garamond italic font-medium transition-colors ${
                              isOpen ? "text-emerald-950" : "text-emerald-950/80 group-hover:text-amber-600"
                            }`}>
                              {item.question}
                            </span>
                            <div className={`shrink-0 w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-500 ${
                              isOpen ? "bg-amber-500 border-amber-500 rotate-180" : "bg-transparent border-amber-500/20"
                            }`}>
                              <ChevronDown className={`w-6 h-6 ${isOpen ? "text-white" : "text-amber-500"}`} />
                            </div>
                          </button>
                          
                          <div className={`transition-all duration-700 ease-in-out ${
                            isOpen ? "max-h-[800px] opacity-100 pb-12" : "max-h-0 opacity-0"
                          }`}>
                            <div className="px-8 md:px-12 flex gap-8">
                              <div className="w-1.5 bg-amber-500/30 rounded-full shrink-0" />
                              <div className="text-emerald-950/70 text-lg md:text-2xl font-garamond italic font-light leading-relaxed pr-8">
                                {item.answer}
                              </div>
                            </div>
                          </div>
                        </div>
                      </AnimateIn>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Book Call Section - More Lavish Ivory/Gold approach */}
      <section className="py-32 bg-emerald-950 relative overflow-hidden">
        {/* Background Texture */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/linen.png')] opacity-10 pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500/5 rounded-full blur-[180px] pointer-events-none" />

        <div className="container px-4 md:px-6 relative z-10 text-center">
          <AnimateInStagger>
            <div className="max-w-4xl mx-auto">
              <span className="text-amber-400 font-bold tracking-[0.5em] uppercase text-xs mb-8 block">Royal Proclamation</span>
              <h2 className="text-5xl md:text-8xl font-bold text-white mb-10 font-garamond italic">
                Ready to <span className="text-amber-500">Transform</span> Your Image?
              </h2>
              <p className="text-white/60 text-xl md:text-3xl font-garamond italic mb-16 font-light leading-relaxed">
                "Experience the bespoke consultation that has defined the aesthetics of world-class establishments for two decades."
              </p>
              
              <Link href="/enquiry">
                <Button 
                  size="lg" 
                  className="bg-amber-500 hover:bg-amber-600 text-emerald-950 px-16 py-10 rounded-full text-2xl font-garamond italic font-bold tracking-[0.1em] shadow-[0_20px_60px_rgba(245,158,11,0.3)] hover:scale-105 transition-all"
                >
                  SCHEDULE AN AUDIENCE
                </Button>
              </Link>
            </div>
          </AnimateInStagger>
        </div>
      </section>
    </div>
  )
}
