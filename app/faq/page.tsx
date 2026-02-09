"use client"

import { JSX, useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { AnimateIn } from "@/components/animate-in"
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
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-[35vh] sm:h-[40vh] md:h-[45vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/bg-imges-hero-sections/image-03.jpg"
          alt="FAQ Background"
          fill
          className="object-cover z-0"
          priority
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/50 via-black/40 to-black/50"></div>
        <div className="container relative z-20 px-4 md:px-6 flex flex-col items-center text-center">
          <AnimateIn>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-3 sm:mb-4 md:mb-5">
              Frequently Asked Questions
            </h1>
            <div className="w-24 sm:w-32 h-1.5 bg-[#2e7d32] mx-auto rounded-full mb-4"></div>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <p className="max-w-[800px] text-sm sm:text-base md:text-lg text-white/95 px-2 leading-relaxed">
              Find answers to common questions about our uniform manufacturing and services
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-12 sm:py-16 md:py-20 px-3 sm:px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-5xl">
          {faqSections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="mb-12 sm:mb-14 md:mb-16">
              <AnimateIn>
                <div className=" mb-8 sm:mb-10 md:mb-12">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2e7d32] mb-3 sm:mb-4">
                    {section.title}
                  </h2>
                  <div className="w-20 sm:w-24 h-1 bg-[#2e7d32] rounded-full"></div>
                </div>
              </AnimateIn>
              <div className="space-y-3 sm:space-y-4">
                {section.items.map((item, itemIndex) => {
                  const key = `${sectionIndex}-${itemIndex}`
                  const isOpen = openItems[key]

                  return (
                    <AnimateIn key={itemIndex} delay={itemIndex * 0.1}>
                      <div className="border-2 border-[#2e7d32]/20 rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:border-[#2e7d32]/40 transition-all duration-300 bg-white">
                        <button
                          onClick={() => toggleItem(sectionIndex, itemIndex)}
                          className="w-full px-4 sm:px-5 md:px-6 py-4 sm:py-5 md:py-6 bg-gradient-to-r from-white to-gray-50 hover:from-[#2e7d32]/5 hover:to-[#2e7d32]/10 transition-all duration-300 flex items-center justify-between text-left gap-2 group"
                        >
                          <span className="font-semibold text-neutral-800 group-hover:text-[#2e7d32] text-sm sm:text-base md:text-lg pr-2 transition-colors">
                            {item.question}
                          </span>
                          <div className="bg-[#2e7d32]/10 group-hover:bg-[#2e7d32]/20 rounded-full p-1.5 transition-colors">
                            {isOpen ? (
                              <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6 text-[#2e7d32] flex-shrink-0" />
                            ) : (
                              <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-[#2e7d32] flex-shrink-0" />
                            )}
                          </div>
                        </button>
                        {isOpen && (
                          <div className="px-4 sm:px-5 md:px-6 py-5 sm:py-6 bg-gradient-to-br from-white to-gray-50 border-t-2 border-[#2e7d32]/10">
                            <div className="text-neutral-700 leading-relaxed text-sm sm:text-base pl-3 border-l-4 border-[#2e7d32]">
                              {item.answer}
                            </div>
                          </div>
                        )}
                      </div>
                    </AnimateIn>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 bg-gradient-to-b from-[#2e7d32]/5 to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-72 h-72 bg-[#2e7d32] rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#2e7d32] rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <AnimateIn>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-5 text-[#2e7d32]">
              Still Have Questions?
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-[#2e7d32] mx-auto rounded-full mb-6 sm:mb-8"></div>
            <p className="text-base sm:text-lg text-neutral-700 mb-8 sm:mb-10 px-2 max-w-2xl mx-auto">
              We're here to help! Contact our team for personalized assistance with your uniform requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center px-2">
              <Link
                href="/enquiry"
                className="inline-flex items-center justify-center px-8 sm:px-10 py-4 bg-[#2e7d32] text-white text-sm sm:text-base font-semibold rounded-xl shadow-lg hover:bg-[#1b5e20] hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
              >
                Get in Touch
              </Link>
              <Link
                href="/catalogue"
                className="inline-flex items-center justify-center px-8 sm:px-10 py-4 bg-white text-[#2e7d32] text-sm sm:text-base font-semibold rounded-xl border-2 border-[#2e7d32] shadow-lg hover:bg-[#2e7d32] hover:text-white hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
              >
                View Our Catalogue
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>
    </div>
  )
}
