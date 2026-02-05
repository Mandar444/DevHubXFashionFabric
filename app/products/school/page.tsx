"use client"

import Image from "next/image"
import { AnimateIn } from "@/components/animate-in"
import Process from "@/app/products/process/pages"
import { useState } from "react"
import { ChevronDown } from "lucide-react"

export default function SchoolsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
  {/* Schools Section Banner */}
<section className="py-10 bg-white">
  <div className="container px-4 md:px-6">
    <AnimateIn>
      <div className="relative w-full rounded-[2rem] md:rounded-[2.5rem] bg-[#2e7d32] overflow-hidden shadow-xl">
        <div className="relative grid md:grid-cols-2 gap-4 md:gap-8 items-end md:items-center p-4 md:p-8 lg:p-10 pr-6 md:pr-10">

          <div className="relative z-10 bg-[#f5f3e8] rounded-lg md:rounded-2xl p-4 md:p-8 lg:p-10 shadow-lg order-1 overflow-hidden translate-x-0 md:translate-x-4 lg:translate-x-8">

            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-3 md:mb-4">
              Schools
            </h2>

            <p className="text-neutral-700 leading-relaxed text-xs md:text-base">
              We make uniforms for education institutes that combine durability,
              comfort, and freedom of movement. Crafted to withstand daily use from
              classroom lessons to playground activities our uniforms keep students
              and teachers alike looking neat and feeling comfortable, allowing
              them to teach, learn, and engage without restriction, while creating
              a cohesive environment.
            </p>
          </div>

          <div className="relative z-10 flex justify-center md:justify-end items-end order-2">
            <div className="relative w-full max-w-[550px] h-[300px] md:h-[380px] lg:h-[350px] translate-y-6 md:translate-y-10">
              <Image
                src="/images/collections-images/School.png"
                alt="School students and teachers uniforms"
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
                question="What fabrics do you recommend for school and college uniforms?"
                answer="We primarily use breathable 100% pure cotton and durable blended fabrics designed for daily wear, comfort, easy maintenance, and long classroom hours."
              />
              <FAQItem
                question="Can you produce uniforms for different school houses with color variations?"
                answer="Yes, we maintain consistent designs while incorporating house-based color distinctions, ensuring visual unity alongside clear identity across student groups."
              />
              <FAQItem
                question="Do you ensure uniform fabric and color continuity year after year?"
                answer="Yes, we run continuity programs to maintain consistent fabric quality, color shades, and design standards for repeat academic cycles."
              />
              <FAQItem
                question="Do you provide matching accessories along with student uniforms?"
                answer="Yes, we supply coordinated accessories such as ties, belts, bows, and shoes to ensure a complete, polished school uniform program."
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
