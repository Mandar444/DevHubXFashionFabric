"use client"

import { JSX, useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { AnimateIn } from "@/components/animate-in"
import Link from "next/link"

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
      title: "I. General",
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
      title: "II. Why Choose Fashion Fabric",
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
      title: "III. Product Quality",
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
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-[30vh] sm:h-[35vh] md:h-[40vh] flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
          poster="/images/work/DSC00446.jpg"
        >
          <source src="https://dhyeydeveloper.github.io/fashion-fabric-videos/V2.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 z-10 bg-black/40"></div>
        <div className="container relative z-20 px-4 md:px-6 flex flex-col items-center text-center">
          <AnimateIn>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-2 sm:mb-3 md:mb-4">
              Frequently Asked Questions
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <p className="max-w-[800px] text-sm sm:text-base md:text-lg text-white/90 px-2">
              Find answers to common questions about our uniform manufacturing and services
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-8 sm:py-12 md:py-16 px-3 sm:px-4">
        <div className="container mx-auto max-w-5xl">
          {faqSections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="mb-8 sm:mb-10 md:mb-12">
              <AnimateIn>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-5 md:mb-6 text-neutral-800 px-1">
                  {section.title}
                </h2>
              </AnimateIn>
              <div className="space-y-3 sm:space-y-4">
                {section.items.map((item, itemIndex) => {
                  const key = `${sectionIndex}-${itemIndex}`
                  const isOpen = openItems[key]

                  return (
                    <AnimateIn key={itemIndex} delay={itemIndex * 0.1}>
                      <div className="border-2 border-[#2e7d32] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                        <button
                          onClick={() => toggleItem(sectionIndex, itemIndex)}
                          className="w-full px-4 sm:px-5 md:px-6 py-3 sm:py-4 md:py-5 bg-[#2e7d32] hover:bg-[#1b5e20] transition-colors flex items-center justify-between text-left gap-2"
                        >
                          <span className="font-semibold text-white text-sm sm:text-base md:text-lg pr-2">
                            {item.question}
                          </span>
                          {isOpen ? (
                            <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6 text-white flex-shrink-0" />
                          ) : (
                            <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-white flex-shrink-0" />
                          )}
                        </button>
                        {isOpen && (
                          <div className="px-4 sm:px-5 md:px-6 py-4 sm:py-5 bg-white border-t-2 border-[#2e7d32]">
                            <div className="text-neutral-700 leading-relaxed text-sm sm:text-base">
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
      <section className="py-10 sm:py-12 md:py-16 px-4 bg-neutral-50">
        <div className="container mx-auto max-w-4xl text-center">
          <AnimateIn>
            <h2 className="text-2xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-neutral-800">
              Still Have Questions?
            </h2>
            <p className="text-base sm:text-lg text-neutral-600 mb-6 sm:mb-8 px-2">
              We're here to help! Contact our team for personalized assistance with your uniform requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2">
              <Link
                href="/enquiry"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 bg-[#2e7d32] text-white text-sm sm:text-base font-semibold rounded-lg hover:bg-[#1b5e20] transition-colors"
              >
                Get in Touch
              </Link>
              <Link
                href="/catalogue"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 bg-white text-[#2e7d32] text-sm sm:text-base font-semibold rounded-lg border-2 border-[#2e7d32] hover:bg-[#f5f5f5] transition-colors"
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
