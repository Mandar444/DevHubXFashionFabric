"use client"

import Link from "next/link"
import Image from "next/image"
import { AnimateIn } from "@/components/animate-in"
import Process from "@/app/products/process/pages"
import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CorporatePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
 {/* Corporate Section Banner */}   
 <div className="flex justify-center px-2 sm:px-4 md:px-8 lg:px-12 mb-8 md:mb-12 pt-6 md:pt-10">
  <div className="relative w-full max-w-7xl min-h-[650px] sm:min-h-[550px] md:min-h-[600px] md:h-[600px] bg-[#1a3c1a] rounded-lg overflow-hidden shadow-2xl flex items-center">
        
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

        <div className="relative z-10 w-full h-full flex flex-col md:flex-row items-start md:items-center justify-between px-3 sm:px-4 md:px-16 pt-6 md:pt-0 gap-4 md:gap-12">
          {/* Content Area (The White Box) */}
          <div className="w-full sm:w-11/12 md:w-2/5 h-auto md:h-[75%] bg-white rounded-tr-[50px] sm:rounded-tr-[80px] rounded-bl-[30px] sm:rounded-bl-[40px] rounded-tl-[15px] sm:rounded-tl-[20px] rounded-br-[15px] sm:rounded-br-[20px] shadow-lg">
            {/* Add your text or logo here */}
            <div className="p-4 md:p-8 lg:p-10 flex flex-col justify-center h-full">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-2 md:mb-4">
                Corporate
              </h2>
              <p className="text-black leading-relaxed text-sm md:text-lg front-medium">
                We make corporate uniforms that move seamlessly from boardroom to
                beyond. Crafted from premium, breathable fabrics with sharp tailoring
                and all-day comfort, our pieces are made to keep you looking composed
                from your 9–5 to your 5–9 because professionalism shouldn't end when
                the day does.
              </p>
            </div>
          </div>

          {/* Image on Right Side */}
          <div className="w-full md:w-3/5 h-[280px] sm:h-[320px] md:h-full flex items-end justify-center md:justify-end">
            <div className="relative w-full h-full flex items-end justify-center md:justify-end">
              <Image
                src="/images/collections-images/Corporate.png"
                alt="Corporate professional uniforms"
                fill
                className="object-contain object-bottom"
                priority
              />
            </div>
          </div>
        </div>

      </div>  
     </div>

      {/* What We're Built On Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container px-4 md:px-6 max-w-7xl mx-auto">
          <AnimateIn>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2e7d32] text-center mb-12 md:mb-16">
              What We're Built On
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {/* Premium Fabric */}
              <div className="group hover:scale-105 transition-transform duration-300">
                <div className="h-full p-6 md:p-8 rounded-3xl border-2 border-[#2e7d32] bg-gradient-to-br from-gray-50 to-white shadow-sm hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl md:text-2xl font-bold text-[#2e7d32] text-center mb-4">
                    Premium Fabric
                  </h3>
                  <p className="text-gray-700 text-center leading-relaxed text-sm md:text-base">
                    Carefully sourced materials tested for durability and comfort
                  </p>
                </div>
              </div>

              {/* Precision Fit */}
              <div className="group hover:scale-105 transition-transform duration-300">
                <div className="h-full p-6 md:p-8 rounded-3xl border-2 border-[#2e7d32] bg-gradient-to-br from-gray-50 to-white shadow-sm hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl md:text-2xl font-bold text-[#2e7d32] text-center mb-4">
                    Precision Fit
                  </h3>
                  <p className="text-gray-700 text-center leading-relaxed text-sm md:text-base">
                    Patterned and fitted to move with your team, not restrict them
                  </p>
                </div>
              </div>

              {/* Reliable Fulfilment */}
              <div className="group hover:scale-105 transition-transform duration-300">
                <div className="h-full p-6 md:p-8 rounded-3xl border-2 border-[#2e7d32] bg-gradient-to-br from-gray-50 to-white shadow-sm hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl md:text-2xl font-bold text-[#2e7d32] text-center mb-4">
                    Reliable Fulfilment
                  </h3>
                  <p className="text-gray-700 text-center leading-relaxed text-sm md:text-base">
                    On-time production, quality checks, and nationwide delivery
                  </p>
                </div>
              </div>

              {/* Responsible Sourcing */}
              <div className="group hover:scale-105 transition-transform duration-300">
                <div className="h-full p-6 md:p-8 rounded-3xl border-2 border-[#2e7d32] bg-gradient-to-br from-gray-50 to-white shadow-sm hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl md:text-2xl font-bold text-[#2e7d32] text-center mb-4">
                    Responsible Sourcing
                  </h3>
                  <p className="text-gray-700 text-center leading-relaxed text-sm md:text-base">
                    Carefully sourced materials tested for durability and comfort
                  </p>
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Why Partner With Us Section */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container px-4 md:px-6 max-w-7xl mx-auto">
          <AnimateIn>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2e7d32] mb-12 md:mb-16">
              Why Partner With Us
            </h2>
            
            <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center">
              {/* Left Side - Content Cards */}
              <div className="w-full lg:w-3/5 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {/* Dedicated Concierge */}
                <div className="group hover:scale-105 transition-transform duration-300">
                  <div className="h-full p-5 md:p-6 rounded-3xl bg-[#2e7d32] text-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                        <Image
                          src="/images/collection-pateners/Icons-01 1.svg"
                          alt="Dedicated Concierge"
                          width={32}
                          height={32}
                          className="w-7 h-7 md:w-8 md:h-8"
                        />
                      </div>
                      <h3 className="text-lg md:text-xl font-bold">
                        Dedicated Concierge
                      </h3>
                    </div>
                    <p className="leading-relaxed text-sm">
                      A single expert point of contact ensuring clarity consistency personalised service
                    </p>
                  </div>
                </div>

                {/* Flexible Quantities */}
                <div className="group hover:scale-105 transition-transform duration-300">
                  <div className="h-full p-5 md:p-6 rounded-3xl bg-[#2e7d32] text-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                        <Image
                          src="/images/collection-pateners/Icons-02 1.svg"
                          alt="Flexible Quantities"
                          width={32}
                          height={32}
                          className="w-7 h-7 md:w-8 md:h-8"
                        />
                      </div>
                      <h3 className="text-lg md:text-xl font-bold">
                        Flexible Quantities
                      </h3>
                    </div>
                    <p className="leading-relaxed text-sm">
                      Single uniforms for new hires, small replenishments for occasions to large replacements for entire teams
                    </p>
                  </div>
                </div>

                {/* Turnaround Time */}
                <div className="group hover:scale-105 transition-transform duration-300">
                  <div className="h-full p-5 md:p-6 rounded-3xl bg-[#2e7d32] text-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                        <Image
                          src="/images/collection-pateners/Icons-03 1.svg"
                          alt="Turnaround Time"
                          width={32}
                          height={32}
                          className="w-7 h-7 md:w-8 md:h-8"
                        />
                      </div>
                      <h3 className="text-lg md:text-xl font-bold">
                        Turnaround Time
                      </h3>
                    </div>
                    <p className="leading-relaxed text-sm">
                      Industry leading speed including, measurements, trails, resizing & final production
                    </p>
                  </div>
                </div>

                {/* Scalable Capacity */}
                <div className="group hover:scale-105 transition-transform duration-300">
                  <div className="h-full p-5 md:p-6 rounded-3xl bg-[#2e7d32] text-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                        <Image
                          src="/images/collection-pateners/Icons-04 1.svg"
                          alt="Scalable Capacity"
                          width={32}
                          height={32}
                          className="w-7 h-7 md:w-8 md:h-8"
                        />
                      </div>
                      <h3 className="text-lg md:text-xl font-bold">
                        Scalable Capacity
                      </h3>
                    </div>
                    <p className="leading-relaxed text-sm">
                      Production expands seamlessly to match your expanding operations and staffing demands
                    </p>
                  </div>
                </div>

                {/* Smart Inventory */}
                <div className="group hover:scale-105 transition-transform duration-300">
                  <div className="h-full p-5 md:p-6 rounded-3xl bg-[#2e7d32] text-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                        <Image
                          src="/images/collection-pateners/Icons-05 1.svg"
                          alt="Smart Inventory"
                          width={32}
                          height={32}
                          className="w-7 h-7 md:w-8 md:h-8"
                        />
                      </div>
                      <h3 className="text-lg md:text-xl font-bold">
                        Smart Inventory
                      </h3>
                    </div>
                    <p className="leading-relaxed text-sm">
                      Pre-managed fabrics, trims, & size reorders enable effortless reorders with consistent fit
                    </p>
                  </div>
                </div>

                {/* Sustained Alliance */}
                <div className="group hover:scale-105 transition-transform duration-300">
                  <div className="h-full p-5 md:p-6 rounded-3xl bg-[#2e7d32] text-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                        <Image
                          src="/images/collection-pateners/Icons-06 1.svg"
                          alt="Sustained Alliance"
                          width={32}
                          height={32}
                          className="w-7 h-7 md:w-8 md:h-8"
                        />
                      </div>
                      <h3 className="text-lg md:text-xl font-bold">
                        Sustained Alliance
                      </h3>
                    </div>
                    <p className="leading-relaxed text-sm">
                      Ongoing support across reorders refinements, fittings, & evolving uniforms needs
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Side - Images */}
              <div className="w-full lg:w-2/5">
                <div className="relative h-auto lg:h-[1050px] space-y-6 md:space-y-8">
                  <div className="relative h-[450px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src="/images/collection-pateners/collection-right-side-images/Corporate/Corporate/Corporate 1.png"
                      alt="Corporate professionals"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-[450px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src="/images/collection-pateners/collection-right-side-images/Corporate/Corporate/Corporate 2.png"
                      alt="Corporate team members"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

<Process />

      {/* Book Demo Call Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-[#2e7d32] to-[#1b5e20]">
        <div className="container px-4 md:px-6 max-w-7xl mx-auto">
          <AnimateIn>
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="flex flex-col items-center justify-center">
                {/* Centered Content */}
                <div className="w-full max-w-4xl p-8 md:p-12 lg:p-16 text-center">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2e7d32] mb-4 md:mb-6">
                    Ready to Elevate Your Team's Look?
                  </h2>
                  <p className="text-lg md:text-xl text-gray-700 mb-6 md:mb-8 leading-relaxed">
                    Schedule a personalized demo call with our uniform experts. We'll discuss your specific needs, 
                    show you our customization options, and create a solution that perfectly fits your corporate brand.
                  </p>
                  
                  <div className="flex justify-center">
                    <Link href="/enquiry">
                    <Button 
                      size="lg" 
                      className="bg-[#2e7d32] hover:bg-[#1b5e20] text-white text-lg px-8 md:px-12 py-6 md:py-7 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                    >
                       Let's Schedule a Call
                      <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Button>
                  </Link>
                  </div>
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container px-4 md:px-6">
          <AnimateIn>
            <div className="pl-4 sm:pl-6 md:pl-10 mb-8 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#2e7d32] mb-3 md:mb-4">
                Frequently Asked Questions
              </h2>
              
            </div>
            <div className="max-w-7xl pl-4 sm:pl-6 md:pl-10 pr-4 md:pr-6 space-y-2 md:space-y-3">
              <FAQItem
                question="Can you manufacture custom-designed corporate uniforms for multiple office locations?"
                answer="Yes, we produce corporate uniforms for organizations with multiple offices, ensuring consistent quality, branding, and sizing across all locations."
              />
              <FAQItem
                question="Do you offer professional corporate uniform designs suitable for different departments?"
                answer="Yes, we design corporate uniforms for various departments including front desk, sales, management, and back-office teams, maintaining a cohesive brand identity while accommodating different role requirements."
              />
              <FAQItem
                question="Can you provide standardized sizing and fit guidance for large corporate uniform orders?"
                answer="Yes, we offer comprehensive size charts and professional fit consultations to ensure consistent sizing across your entire corporate team, streamlining the ordering process for large deployments."
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
