"use client"

import Link from "next/link"
import Image from "next/image"
import { AnimateIn } from "@/components/animate-in"
import Process from "@/app/products/process/pages"
import { useState } from "react"
import { ChevronDown } from "lucide-react"

export default function RestaurantChefPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
    {/*  Section Banner */}
<section className="py-10 bg-white">
  <div className="container px-4 md:px-6">
    <AnimateIn>
      <div className="relative w-full rounded-[2rem] md:rounded-[2.5rem] bg-[#2e7d32] overflow-hidden shadow-xl">
        <div className="relative grid md:grid-cols-2 gap-4 md:gap-8 items-end md:items-center p-4 md:p-8 lg:p-10 pr-6 md:pr-10">

          {/* Left Content Card */}
          <div
            className="relative z-10 bg-[#f5f3e8] rounded-lg md:rounded-2xl 
            p-4 md:p-8 lg:p-10 shadow-lg order-1 overflow-hidden 
            translate-x-0 md:translate-x-4 lg:translate-x-8"
          >
            {/* Decorative circles - bottom right of card */}
            <div className="absolute -bottom-16 -right-16 md:-bottom-20 md:-right-20">
              <div className="relative w-32 h-32 md:w-40 md:h-40">
                <div
                  className="absolute inset-0"
                  style={{
                    clipPath:
                      "polygon(0 15%, 15% 0, 85% 0, 100% 15%, 100% 100%, 0 100%)",
                  }}
                >
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={`card-arc-${i}`}
                      className="absolute rounded-full"
                      style={{
                        border: "5px solid #2e7d32",
                        width: `${50 + i * 20}px`,
                        height: `${50 + i * 20}px`,
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Updated Content */}
            <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-3 md:mb-4">
              Restaurants / Bar
            </h2>

            <p className="text-neutral-700 leading-relaxed text-xs md:text-base">
              Whether you operate a boutique fine-dining restaurant or a high-volume
              service chain, our uniforms are built for performance, comfort, and
              brand expression. Designed for long shifts and fast-paced environments,
              they offer the right balance of style, mobility, and durability.
            </p>
          </div>

          {/* Right Image Section */}
          <div className="relative z-10 flex justify-center md:justify-end items-end order-2">
            <div className="relative w-full max-w-[550px] h-[280px] md:h-[380px] lg:h-[350px] translate-y-6 md:translate-y-10">
              <Image
                src="/images/collections-images/Restaurants.png"
                alt="Restaurant and bar staff in professional uniforms"
                fill
                className="object-contain object-bottom"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </AnimateIn>
  </div>
</section>
{/* Process Section */}
<Process />

      {/* FAQ Section */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container px-4 md:px-6">
          <AnimateIn>
            <div className="text-center mb-8 md:mb-16">
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#2e7d32] mb-3 md:mb-4">
                Frequently Asked Questions
              </h2>
              <div className="w-20 md:w-24 h-1 bg-[#2e7d32] mx-auto rounded-full"></div>
            </div>
            <div className="max-w-4xl mx-auto space-y-2 md:space-y-3">
              <FAQItem
                question="Do you create theme-based uniforms for restaurants, cafés, and bars?"
                answer="Yes, we manufacture fully customized, theme-led uniforms and support smaller quantities while maintaining consistent quality, ensuring your concept translates seamlessly into staff presentation."
              />
              <FAQItem
                question="Do you offer standard size charts for restaurant and bar staff uniforms?"
                answer="Yes, we provide structured size charts for smooth bulk production, ensuring consistent fits across service, kitchen, and guest-facing teams."
              />
              <FAQItem
                question="Can you supply accessories along with the restaurant staff uniforms?"
                answer="We supply coordinated accessories including chef hats, aprons, scarves, ties, and footwear, ensuring a complete, brand-aligned uniform presentation."
              />
              <FAQItem
                question="Which restaurant departments do you provide uniforms for?"
                answer="We cover back-of-house chefs and helpers to hosts, hostesses, and servers, creating a cohesive brand presence throughout the entire dining environment."
              />
            </div>
          </AnimateIn>
        </div>
      </section>

    </div>
  )
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="group bg-white rounded-lg md:rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 md:px-6 lg:px-8 py-4 md:py-5 lg:py-6 text-left flex items-start justify-between gap-3 md:gap-4 transition-colors active:bg-gray-50"
      >
        <span className="font-semibold text-sm md:text-base lg:text-lg text-neutral-900 pr-2 md:pr-4 leading-relaxed">
          {question}
        </span>
        <div className={`flex-shrink-0 w-7 h-7 md:w-8 md:h-8 rounded-full bg-gray-100 group-hover:bg-[#2e7d32] transition-all duration-300 flex items-center justify-center ${
          isOpen ? 'bg-[#2e7d32]' : ''
        }`}>
          <ChevronDown
            className={`w-4 h-4 md:w-5 md:h-5 transition-all duration-300 ${
              isOpen ? "rotate-180 text-white" : "text-gray-600 group-hover:text-white"
            }`}
          />
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 md:px-6 lg:px-8 pb-4 md:pb-6 pt-2">
          <div className="w-10 md:w-12 h-0.5 bg-[#2e7d32] mb-3 md:mb-4 rounded-full"></div>
          <p className="text-neutral-700 leading-relaxed text-sm md:text-base">{answer}</p>
        </div>
      </div>
    </div>
  )
}
