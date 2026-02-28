"use client"

import Link from "next/link"
import Image from "next/image"
import { AnimateIn, AnimateInStagger } from "@/components/animate-in"
import Process from "@/app/collection/process/pages"
import { useState } from "react"
import { ChevronDown, Star, Award, ShieldCheck, Zap, ArrowRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ImageSlideshow } from "@/components/image-slideshow"

// Hospitality images array
const hospitalityImages = [
  { src: "/images/collection-pateners/collection-right-side-images/Hotels/Untitled-3-01.svg", alt: "Hospitality staff uniform 1" },
  { src: "/images/collection-pateners/collection-right-side-images/Hotels/Untitled-3-02.svg", alt: "Hospitality staff uniform 2" },
  { src: "/images/collection-pateners/collection-right-side-images/Hotels/Untitled-3-03.svg", alt: "Hospitality staff uniform 3" },
  { src: "/images/collection-pateners/collection-right-side-images/Hotels/Untitled-3-04.svg", alt: "Hospitality staff uniform 4" },
  { src: "/images/collection-pateners/collection-right-side-images/Hotels/Untitled-3-05.svg", alt: "Hospitality staff uniform 5" },
  { src: "/images/collection-pateners/collection-right-side-images/Hotels/Untitled-3-06.svg", alt: "Hospitality staff uniform 6" },
  { src: "/images/collection-pateners/collection-right-side-images/Hotels/Untitled-3-07.svg", alt: "Hospitality staff uniform 7" },
  { src: "/images/collection-pateners/collection-right-side-images/Hotels/Untitled-3-08.svg", alt: "Hospitality staff uniform 8" },
  { src: "/images/collection-pateners/collection-right-side-images/Hotels/Untitled-3-09.svg", alt: "Hospitality staff uniform 9" },
  { src: "/images/collection-pateners/collection-right-side-images/Hotels/Untitled-3-10.svg", alt: "Hospitality staff uniform 10" },
  { src: "/images/collection-pateners/collection-right-side-images/Hotels/Untitled-3-11.svg", alt: "Hospitality staff uniform 11" },
  {src:"/images/collection-pateners/collection-right-side-images/Hotels/hotels-05.svg", alt: "Hospitality staff uniform 12"},
]

export default function HotelUniformPage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden selection:bg-amber-500/30">
      {/* Royal Hospitality Hero Section */}
      <section className="relative pt-40 pb-24 md:pt-[15vh] md:pb-40 overflow-hidden">
        {/* Background Textures & Lighting */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/linen.png')] opacity-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-amber-500/10 rounded-full blur-[180px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#f59e0b]/10 rounded-full blur-[150px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-32">
            {/* Content Area */}
            <div className="w-full lg:w-3/5 order-2 lg:order-1">
              <AnimateInStagger>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-px bg-amber-500"></div>
                  <span className="text-amber-500 font-bold tracking-[0.6em] uppercase text-[10px] md:text-sm drop-shadow-lg">
                    THE GRAND ESTABLISHMENT
                  </span>
                </div>
                
                <h1 className="text-6xl md:text-[10rem] font-bold mb-10 font-garamond italic leading-[1.1] md:leading-[0.9] tracking-tighter">
                  Hospitality <br />
                  <span className="text-amber-500 text-glow">Collection</span>
                </h1>
                
                <p className="text-white/80 text-xl md:text-4xl font-light italic leading-relaxed font-garamond mb-16 max-w-2xl">
                  "We craft uniforms that don't just dress staff—they crown your guest experience with silent, regal distinction."
                </p>
                
                <div className="flex flex-col sm:flex-row gap-8">
                  <Link href="/enquiry" className="w-full sm:w-auto">
                    <Button size="lg" className="w-full sm:w-auto bg-amber-600 hover:bg-amber-700 text-white rounded-full px-16 py-10 text-xl font-garamond font-bold tracking-widest transition-all shadow-[0_20px_50px_rgba(245,158,11,0.2)] border border-amber-500/20 active:scale-95">
                      COMMISSION A SUITE
                    </Button>
                  </Link>
                  <Link href="/catalogue" className="w-full sm:w-auto mt-4 sm:mt-0">
                    <Button size="lg" variant="outline" className="w-full bg-white text-black border-transparent hover:bg-gray-200 rounded-full px-8 md:px-12 py-6 md:py-8 text-sm md:text-lg font-garamond font-bold tracking-widest shadow-lg">
                      EXPLORE WARDROBE
                    </Button>
                  </Link>
                </div>
              </AnimateInStagger>
            </div>

            {/* Hero Image Showcase */}
            <div className="w-full lg:w-2/5 order-1 lg:order-2">
              <AnimateIn direction="right" className="relative group">
                {/* Royal Ornate Frame */}
                <div className="absolute -inset-6 border border-amber-500/10 rounded-[3.5rem] -z-10 group-hover:border-amber-500/30 transition-all duration-700"></div>
                <div className="absolute -inset-3 border border-white/5 rounded-[3rem] -z-10"></div>
                
                <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-3xl border border-white/10 group-hover:shadow-[0_0_80px_rgba(245,158,11,0.15)] transition-all duration-700">
                  <Image
                    src="/images/collections-images/Hospitality.png"
                    alt="Elite Hospitality Presentation"
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
                </div>
                
                {/* Royal Signature Badge */}
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-black border border-amber-500/20 rounded-full flex flex-col items-center justify-center shadow-3xl z-20 group-hover:border-amber-500/50 transition-colors duration-700">
                  <Star className="text-amber-500 w-10 h-10 fill-amber-500/10 mb-2" />
                  <span className="text-[8px] font-bold tracking-widest text-amber-500 uppercase">Masterpiece</span>
                  <span className="text-[8px] font-bold tracking-widest text-white/40 uppercase">Verified</span>
                </div>
              </AnimateIn>
            </div>
          </div>
        </div>
      </section>

      {/* The Pillars of the Kingdom */}
      <section className="py-40 relative overflow-hidden bg-black">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/exclusive-paper.png')] opacity-5 pointer-events-none"></div>
        
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center text-center mb-32">
            <AnimateIn>
              <span className="text-amber-500 font-bold tracking-[0.5em] uppercase text-xs mb-8 block">Sovereign Standards</span>
              <h2 className="text-5xl md:text-8xl font-bold text-white mb-10 font-garamond italic">
                Pillars of <span className="text-amber-500">Mastery</span>
              </h2>
              <div className="w-40 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto"></div>
            </AnimateIn>
          </div>
          
          <AnimateInStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { 
                title: "Imperial Fabric", 
                desc: "Hand-selected textiles that breathe like silk but endure like armor for the modern realm.", 
                icon: "/images/collections-images/built-on-icons/Icons-07 1.svg" 
              },
              { 
                title: "Bespoke Precision", 
                desc: "Engineered to follow the body's natural grace, ensuring absolute poise in movement.", 
                icon: "/images/collections-images/built-on-icons/Icons-08 1.svg" 
              },
              { 
                title: "Sovereign Logistics", 
                desc: "Rapid deployment across borders with the white-glove care of a personal emissary.", 
                icon: "/images/collections-images/built-on-icons/Icons-09 1.svg" 
              },
              { 
                title: "Eternal Legacy", 
                desc: "Commitment to the long-standing identity of your house, beyond the reach of time.", 
                icon: "/images/collections-images/built-on-icons/Icons-10 1.svg" 
              }
            ].map((pillar, i) => (
              <div key={i} className="group relative bg-black p-12 rounded-[3.5rem] border border-white/5 hover:border-amber-500/40 transition-all duration-1000 hover:shadow-[0_50px_100px_-30px_rgba(245,158,11,0.15)] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 via-transparent to-amber-500/0 group-hover:to-amber-500/5 transition-all duration-1000"></div>
                <div className="w-24 h-24 mb-10 bg-white/5 rounded-[2rem] flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-700 shadow-2xl relative z-10">
                  <Image src={pillar.icon} alt={pillar.title} width={64} height={64} className="filter invert opacity-80" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-6 font-garamond italic relative z-10">{pillar.title}</h3>
                <p className="text-white/50 font-light font-garamond italic text-xl leading-relaxed relative z-10">{pillar.desc}</p>
              </div>
            ))}
          </AnimateInStagger>
        </div>
      </section>

      {/* The Master's Advantage - Why Partner With Us */}
      <section className="py-48 relative overflow-hidden bg-black">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-32">
            <div className="w-full lg:w-1/2">
              <span className="text-amber-500 font-bold tracking-[0.5em] uppercase text-xs mb-8 block">The Imperial Service</span>
              <h2 className="text-5xl md:text-8xl font-bold text-white mb-16 font-garamond italic leading-[1.1]">
                Mastery in <br /><span className="text-amber-500">Practice</span>
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                {[
                  { title: "Royal Concierge", desc: "A singular dedicated expert to manage your brand's visual identity.", icon: "/images/collection-pateners/Icons-01 1.svg" },
                  { title: "Bespoke Scaling", desc: "From singular flagship pieces to massive multi-property rollouts.", icon: "/images/collection-pateners/Icons-02 1.svg" },
                  { title: "Lightning Draught", desc: "Industry-leading turnarounds from concept to final royal inspection.", icon: "/images/collection-pateners/Icons-03 1.svg" },
                  { title: "Global Command", desc: "Logistics that span the globe while maintaining local precision.", icon: "/images/collection-pateners/Icons-04 1.svg" }
                ].map((item, i) => (
                  <div key={i} className="flex gap-8 items-start group">
                    <div className="w-14 h-14 rounded-2xl bg-amber-500/10 flex items-center justify-center flex-shrink-0 border border-amber-500/20 group-hover:bg-amber-500/20 transition-all duration-500">
                      <Image src={item.icon} alt={item.title} width={28} height={28} className="filter invert sepia saturate-200 hue-rotate-[320deg]" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-white mb-3 font-garamond italic transition-colors group-hover:text-amber-500">{item.title}</h4>
                      <p className="text-white/50 text-base font-light font-garamond italic leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Lookbook Slideshow Showcase */}
            <div className="w-full lg:w-1/2">
              <div className="relative group">
                {/* Master Framery */}
                <div className="absolute -inset-8 border border-amber-500/5 rounded-[4rem] -z-10 group-hover:border-amber-500/20 transition-all duration-1000"></div>
                <div className="absolute -inset-4 border border-white/5 rounded-[3.5rem] -z-10"></div>
                
                <div className="rounded-[3rem] overflow-hidden border border-white/10 shadow-3xl relative">
                  <ImageSlideshow images={hospitalityImages} />
                  <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                </div>
                
                {/* Decorative Label - The Wax Seal */}
                <div className="absolute -bottom-8 right-12 bg-amber-500 text-black px-10 py-4 rounded-full font-bold tracking-[0.3em] uppercase text-[10px] shadow-3xl hover:scale-110 transition-transform cursor-default border-4 border-[#050505]">
                  OFFICIAL LOOKBOOK
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent"></div>
        <Process />
      </div>

      {/* Royal FAQ Section */}
      <section className="py-48 relative overflow-hidden bg-black">
        {/* Ghost Typography Backdrop */}
        <div className="absolute top-40 -left-20 opacity-[0.02] pointer-events-none select-none hidden lg:block">
           <span className="text-[25rem] font-garamond italic leading-none text-white">Archives</span>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center text-center mb-32">
            <AnimateIn>
              <span className="text-amber-500 font-bold tracking-[0.5em] uppercase text-xs mb-8 block">Seeking Wisdom</span>
              <h2 className="text-5xl md:text-[8rem] font-bold text-white mb-10 font-garamond italic leading-none">
                Common <span className="text-amber-500">Enquiries</span>
              </h2>
              <div className="w-40 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto"></div>
            </AnimateIn>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <FAQItem
              question="Do you provide uniforms for all hotel departments?"
              answer="Indeed. From the Grand Conjoint's first impression to the silent precision of the culinary staff, we weave a singular visual narrative across your entire property."
            />
            <FAQItem
              question="Can you match our hotel's royal brand colors?"
              answer="Consistency is the soul of identity. We custom-dye and curate fibers to your exact house shades, ensuring absolute fidelity from pattern to production."
            />
            <FAQItem
              question="What fabrics are best for high-performance roles?"
              answer="We employ Master-Blends: fabrics that possess the ethereal breath of fine linen but serve with the unyielding endurance of a high-performance weave."
            />
            <FAQItem
              question="How do you handle global rollouts?"
              answer="Our empire is architected for expansion. We manage complex logistics with personal concierge oversight, ensuring every property is outfitted to the highest standard."
            />
          </div>
        </div>
      </section>
      
      {/* Last Call to Greatness */}
      <section className="py-48 relative overflow-hidden bg-gradient-to-b from-[#000000] to-[#050505]">
         <div className="container px-4 md:px-6 relative z-10">
            <AnimateIn className="bg-white/5 backdrop-blur-3xl rounded-[5rem] p-16 md:p-32 border border-white/10 text-center relative overflow-hidden group hover:border-amber-500/20 transition-all duration-1000">
               {/* Decorative Master Signature Background */}
               <Quote className="absolute -top-16 -left-16 text-white/5 w-[30rem] h-[30rem] rotate-12 group-hover:rotate-45 transition-transform duration-1000" />
               
               <div className="relative z-10 max-w-4xl mx-auto">
                  <h2 className="text-5xl md:text-[10rem] font-bold text-white mb-12 font-garamond italic leading-[0.9]">
                    Begin Your <br /><span className="text-amber-500 text-glow">Legacy</span>
                  </h2>
                  <p className="text-white/70 text-2xl md:text-5xl font-garamond italic font-light mb-20 leading-relaxed max-w-3xl mx-auto">
                    "Every masterpiece begins with a single conversation. Allow us to draft your brand's crown."
                  </p>
                  <Link href="/enquiry" className="inline-block">
                    <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-black rounded-full px-20 py-12 text-3xl font-bold font-garamond italic tracking-widest transition-all hover:scale-110 shadow-[0_0_80px_rgba(245,158,11,0.4)] border-4 border-amber-400/20 active:scale-95">
                      ENROLL NOW
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
