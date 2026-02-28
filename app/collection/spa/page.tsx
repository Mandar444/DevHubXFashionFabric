"use client"

import Link from "next/link"
import Image from "next/image"
import { AnimateIn, AnimateInStagger } from "@/components/animate-in"
import Process from "@/app/collection/process/pages"
import { useState } from "react"
import { ChevronDown, Star, Award, ShieldCheck, Zap, ArrowRight, Quote, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ImageSlideshow } from "@/components/image-slideshow"

// Spa/Salon images array
const spaImages = [
  { src: "/images/collection-pateners/collection-right-side-images/Spa- Saloon/Untitled-5-01.svg", alt: "Spa professionals in purple uniform" },
  { src: "/images/collection-pateners/collection-right-side-images/Spa- Saloon/Untitled-5-02.svg", alt: "Spa staff in black uniform with orange trim" },
  { src: "/images/collection-pateners/collection-right-side-images/Spa- Saloon/Untitled-5-03.svg", alt: "Salon team member 3" },
  { src: "/images/collection-pateners/collection-right-side-images/Spa- Saloon/Untitled-5-04.svg", alt: "Salon team member 4" },
  { src: "/images/collection-pateners/collection-right-side-images/Spa- Saloon/Untitled-5-05.svg", alt: "Salon team member 5" },
]

export default function SpaUniformPage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Royal Spa Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        {/* Background Textures & Lighting */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/linen.png')] opacity-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-amber-500/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#f59e0b]/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            {/* Content Area */}
            <div className="w-full lg:w-1/2 order-2 lg:order-1">
              <AnimateInStagger>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-px bg-amber-500"></div>
                  <span className="text-amber-500 font-bold tracking-[0.5em] uppercase text-xs">The Serenity Suite</span>
                </div>
                
                <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-8 font-garamond italic leading-tight">
                  Spa & <br /><span className="text-amber-500">Wellness</span>
                </h1>
                
                <p className="text-white/70 text-lg md:text-2xl font-light italic leading-relaxed font-garamond mb-12">
                  "We create uniforms for the spa and salon industry that let your team focus on what matters, delivering a relaxing and professional experience. Designed with functional cuts, breathable fabrics, and smart details, each uniform supports movement, ease, and a polished look that complements the serene environment your guest expects."
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6">
                  <Link href="/enquiry" className="w-full sm:w-auto">
                    <Button size="lg" className="w-full bg-amber-600 hover:bg-amber-700 text-white rounded-full px-8 md:px-12 py-6 md:py-8 text-sm md:text-lg font-garamond font-bold tracking-widest transition-all shadow-[0_20px_50px_rgba(245,158,11,0.2)]">
                      BEGIN THE TRANSFORMATION
                    </Button>
                  </Link>
                  <Link href="/catalogue" className="w-full sm:w-auto mt-4 sm:mt-0">
                    <Button size="lg" variant="outline" className="w-full bg-white text-black border-transparent hover:bg-gray-200 rounded-full px-8 md:px-12 py-6 md:py-8 text-sm md:text-lg font-garamond font-bold tracking-widest shadow-lg">
                      VIEW FULL CATALOGUE
                    </Button>
                  </Link>
                </div>
              </AnimateInStagger>
            </div>

            {/* Hero Image Showcase */}
            <div className="w-full lg:w-1/2 order-1 lg:order-2">
              <AnimateIn direction="right" className="relative group">
                <div className="absolute -inset-4 border border-amber-500/20 rounded-[3rem] -z-10 group-hover:border-amber-500/40 transition-colors"></div>
                <div className="relative aspect-square md:aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10">
                  <Image
                    src="/images/collections-images/Spa.png"
                    alt="Elite Wellness Presentation"
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                </div>
                {/* Royal Badge */}
                <div className="absolute -top-8 -right-8 w-32 h-32 bg-black border border-amber-500/30 rounded-full flex items-center justify-center shadow-2xl z-20 animate-pulse">
                  <Sparkles className="text-amber-500 w-12 h-12" />
                </div>
              </AnimateIn>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars of Mastery Section */}
      <section className="py-32 relative overflow-hidden bg-black">
        {/* Subtle Texture */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/exclusive-paper.png')] opacity-5 pointer-events-none"></div>
        
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center text-center mb-24">
            <AnimateIn>
              <span className="text-amber-500 font-bold tracking-[0.5em] uppercase text-xs mb-6 block">Elite Engineering</span>
              <h2 className="text-4xl md:text-7xl font-bold text-white mb-8 font-garamond italic">
                The Fabric of <span className="text-amber-500">Luxury</span>
              </h2>
              <div className="w-32 h-px bg-amber-500 mx-auto"></div>
            </AnimateIn>
          </div>
          
          <AnimateInStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                title: "Premium Fabric", 
                desc: "Carefully sourced materials tested for durability and king-level comfort.", 
                icon: "/images/collections-images/built-on-icons/Icons-07 1.svg" 
              },
              { 
                title: "Precision Fit", 
                desc: "Patterned and fitted to move with your team, never restricting the flow.", 
                icon: "/images/collections-images/built-on-icons/Icons-08 1.svg" 
              },
              { 
                title: "Reliable Fulfilment", 
                desc: "On-time production, quality checks, and nationwide white-glove delivery.", 
                icon: "/images/collections-images/built-on-icons/Icons-09 1.svg" 
              },
              { 
                title: "Ethical Sourcing", 
                desc: "Eco-conscious procurement and ethical partnerships across our empire.", 
                icon: "/images/collections-images/built-on-icons/Icons-10 1.svg" 
              }
            ].map((pillar, i) => (
              <div key={i} className="group relative bg-black p-10 rounded-[2.5rem] border border-white/5 hover:border-amber-500/40 transition-all duration-700 hover:shadow-[0_40px_80px_-20px_rgba(245,158,11,0.1)]">
                <div className="w-20 h-20 mb-8 bg-white/5 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-inner">
                  <Image src={pillar.icon} alt={pillar.title} width={60} height={60} className="filter invert" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 font-garamond italic">{pillar.title}</h3>
                <p className="text-white/60 font-light font-garamond italic leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </AnimateInStagger>
        </div>
      </section>

      {/* The Master's Advantage - Why Partner With Us */}
      <section className="py-40 relative overflow-hidden bg-black">
        <div className="container px-4 md:px-6">
          <AnimateInStagger className="flex flex-col lg:flex-row items-center gap-24">
            <div className="w-full lg:w-1/2">
              <span className="text-amber-500 font-bold tracking-[0.5em] uppercase text-xs mb-6 block">Our Kingdom's Advantage</span>
              <h2 className="text-4xl md:text-7xl font-bold text-white mb-12 font-garamond italic leading-tight">
                The Master's <br /><span className="text-amber-500">Service</span>
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { title: "Personal Concierge", desc: "A single expert point of contact ensuring royal consistency.", icon: "/images/collection-pateners/Icons-01 1.svg" },
                  { title: "Flexible Quantities", desc: "From single bespoke units to massive team rollouts.", icon: "/images/collection-pateners/Icons-02 1.svg" },
                  { title: "Master Speed", desc: "Industry leading speed from patterns to final production.", icon: "/images/collection-pateners/Icons-03 1.svg" },
                  { title: "Scalable Empire", desc: "Production expands seamlessly with your global operations.", icon: "/images/collection-pateners/Icons-04 1.svg" }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 items-start">
                    <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center flex-shrink-0 border border-amber-500/20">
                      <Image src={item.icon} alt={item.title} width={24} height={24} className="filter invert sepia saturate-200 hue-rotate-[320deg]" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2 font-garamond italic">{item.title}</h4>
                      <p className="text-white/60 text-sm font-light leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Lookbook Slideshow Showcase */}
            <div className="w-full lg:w-1/2">
               <div className="relative group">
                  <div className="absolute -inset-4 border border-amber-500/10 rounded-[3rem] -z-10"></div>
                  <div className="rounded-[2.5rem] overflow-hidden border border-white/10 shadow-3xl">
                    <ImageSlideshow images={spaImages} />
                  </div>
                  {/* Decorative Label */}
                  <div className="absolute -bottom-8 left-12 bg-amber-500 text-black px-8 py-3 rounded-full font-bold tracking-[0.2em] uppercase text-xs shadow-xl">
                    Season LOOKBOOK
                  </div>
               </div>
            </div>
          </AnimateInStagger>
        </div>
      </section>

      <Process />

      {/* Royal FAQ Section */}
      <section className="py-40 relative overflow-hidden bg-black">
        <div className="container px-4 md:px-6">
          <AnimateIn className="flex flex-col items-center text-center mb-24">
            <span className="text-amber-500 font-bold tracking-[0.5em] uppercase text-xs mb-6 block">Divine Clarification</span>
            <h2 className="text-4xl md:text-7xl font-bold text-white mb-8 font-garamond italic">
              Common <span className="text-amber-500">Inquiries</span>
            </h2>
            <div className="w-32 h-px bg-amber-500 mx-auto"></div>
          </AnimateIn>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <FAQItem
              question="Can spa and salon uniforms be designed to look premium and luxurious?"
              answer="Yes, we use refined fabrics, elegant detailing, and elevated finishes to create uniforms that feel luxurious while remaining practical for daily professional use."
            />
            <FAQItem
              question="Are your fabrics suitable for movement-intensive salon and spa roles?"
              answer="Yes, we use flexible fabric blends with stretch and soft structure, allowing therapists and stylists to move freely throughout long service hours."
            />
            <FAQItem
              question="Do you offer standard size charts and customization for spa uniforms?"
              answer="Yes, we provide standard sizing for production efficiency along with customization options to ensure the right fit, silhouette, and brand-aligned finish."
            />
          </div>
        </div>
      </section>
      
      {/* Last Call to Greatness */}
      <section className="py-32 relative overflow-hidden bg-gradient-to-b from-[#000000] to-[#050505]">
         <div className="container px-4 md:px-6 relative z-10">
            <AnimateIn className="bg-white/5 backdrop-blur-xl rounded-[4rem] p-12 md:p-24 border border-white/10 text-center relative overflow-hidden">
               {/* Decorative Background Icon */}
               <Quote className="absolute -top-10 -left-10 text-white/5 w-64 h-64 rotate-12" />
               
                <div className="relative z-10 max-w-4xl mx-auto">
                  <h2 className="text-4xl sm:text-6xl md:text-8xl font-bold text-white mb-8 font-garamond italic leading-tight">
                    Ready to <span className="text-amber-500 text-glow">Enthrone</span> Your Brand?
                  </h2>
                  <p className="text-white/70 text-lg md:text-3xl font-garamond italic font-light mb-12 md:text-16 leading-relaxed">
                    "Every masterpiece begins with a single conversation. Let us draft your legacy."
                  </p>
                  <Link href="/enquiry">
                    <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-black rounded-full px-10 md:px-16 py-6 md:py-10 text-lg md:text-2xl font-bold font-garamond italic tracking-widest transition-all hover:scale-105 shadow-[0_0_60px_rgba(245,158,11,0.3)]">
                      BEGIN THE JOURNEY
                    </Button>
                  </Link>
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
    <div className={`group bg-white/5 backdrop-blur-md rounded-[2rem] border transition-all duration-700 overflow-hidden ${isOpen ? 'border-amber-500/30' : 'border-white/5 hover:border-white/10'}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-8 py-10 text-left flex items-center justify-between gap-6"
      >
        <span className={`text-xl md:text-2xl font-garamond italic tracking-tight transition-colors ${isOpen ? 'text-amber-500' : 'text-white/90'}`}>
          {question}
        </span>
        <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${isOpen ? 'bg-amber-500 rotate-180' : 'bg-white/10 group-hover:bg-white/20'}`}>
          <ChevronDown className={`w-6 h-6 ${isOpen ? 'text-black' : 'text-white'}`} />
        </div>
      </button>
      <div className={`transition-all duration-700 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100 pb-10' : 'max-h-0 opacity-0'}`}>
        <div className="px-8 flex gap-6">
          <div className="w-1 bg-amber-500/50 rounded-full" />
          <p className="text-white/60 text-lg md:text-xl font-garamond italic font-light leading-relaxed pr-12">
            {answer}
          </p>
        </div>
      </div>
    </div>
  )
}
