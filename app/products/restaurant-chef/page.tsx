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
 {/* Restaurant & Chef Section Banner */}   
 <div className="flex justify-center px-4 md:px-8 lg:px-12 mb-12 pt-10">
  <div className="relative w-full max-w-7xl h-[500px] md:h-[600px] bg-[#1a3c1a] rounded-lg overflow-hidden shadow-2xl flex items-center">
        
        {/* Layered Waves Logic */}
        {/* We use absolute positioning and skew/rotate to mimic the organic flow */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Top Dark Wave */}
          <div className="absolute -right-20 -top-20 w-[120%] h-[150%] bg-[#2d5a27] border-t-2 border-yellow-200/30 rounded-[40%] rotate-[-15deg] transform translate-y-20"></div>
          
          {/* Middle Wave */}
          <div className="absolute -right-20 -top-10 w-[120%] h-[150%] bg-[#3d7a36] border-t-2 border-yellow-200/40 rounded-[42%] rotate-[-12deg] transform translate-y-40"></div>
          
          {/* Lower Bright Wave */}
          <div className="absolute -right-20 top-10 w-[120%] h-[150%] bg-[#5eab55] border-t-2 border-yellow-200/50 rounded-[45%] rotate-[-10deg] transform translate-y-60"></div>
          
          {/* Bottom Corner Accent */}
          <div className="absolute right-0 bottom-0 w-64 h-64 bg-[#8ed97d] rounded-full blur-3xl opacity-40"></div>
        </div>

        <div className="relative z-10 w-full h-full flex items-center justify-between px-8 md:px-16 gap-8 md:gap-12">
          {/* Content Area (The White Box) */}
          <div className="w-full md:w-2/5 h-[75%] bg-white rounded-tr-[80px] rounded-bl-[40px] rounded-tl-[20px] rounded-br-[20px] shadow-lg">
            {/* Add your text or logo here */}
            <div className="p-6 md:p-8 lg:p-10 flex flex-col justify-center h-full">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
                Restaurants / Bar
              </h2>
              <p className="text-black leading-relaxed text-base md:text-lg front-medium">
                Whether you operate a boutique fine-dining restaurant or a high-volume
                service chain, our uniforms are built for performance, comfort, and
                brand expression. Designed for long shifts and fast-paced environments,
                they offer the right balance of style, mobility, and durability.
              </p>
            </div>
          </div>

          {/* Image on Right Side */}
          <div className="hidden md:block w-3/5 h-full flex items-end justify-end">
            <div className="relative w-full h-full flex items-end justify-end">
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
     </div>
{/* Process Section */}
<Process />

      {/* FAQ Section */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container px-4 md:px-6">
          <AnimateIn>
            <div className="pl-10 mb-8 md:mb-16">
              <h2 className=" text-3xl md:text-4xl lg:text-5xl font-bold text-[#2e7d32] mb-3 md:mb-4">
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
