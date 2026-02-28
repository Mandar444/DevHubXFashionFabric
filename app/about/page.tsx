"use client"

import Image from "next/image"
import { AnimateIn, AnimateInStagger } from "@/components/animate-in"
import { Sparkles, Quote, Award, Star, ShieldCheck, Zap } from "lucide-react"

const values = [
  {
    title: "Reliability",
    desc: "A partner you can depend on every order",
    icon: "/images/about-choose-ff/Reliability.png",
  },
  {
    title: "Client-First Approach",
    desc: "We design around your operations, not our convenience.",
    icon: "/images/about-choose-ff/Client First.png",
  },
  {
    title: "Craftsmanship",
    desc: "Refined finishing that turns uniforms into signature pieces.",
    icon: "/images/about-choose-ff/Craftmenship.png",
  },
  {
    title: "Quality",
    desc: "Every thread chosen to outperform daily wear",
    icon: "/images/about-choose-ff/Quality.png",
  },
  {
    title: "Consistency",
    desc: "One look, one standard, across teams and locations",
    icon: "/images/about-choose-ff/Consistency.png",
  },
  {
    title: "Customization",
    desc: "Tailored to your brand down to the smallest detail.",
    icon: "/images/about-choose-ff/Customization.png",
  },
  {
    title: "Functionality",
    desc: "Designed for movement, service, and long shifts.",
    icon: "/images/about-choose-ff/Functionality.png",
  },
  {
    title: "Comfort",
    desc: "Breathable fits that keep your team at ease all day",
    icon: "/images/about-choose-ff/Comfort.png",
  },
  {
    title: "Excellence",
    desc: "The final polish that makes everything unforgettable.",
    icon: "/images/about-choose-ff/Exellence.png",
  },
]

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white selection:bg-amber-500/30">
      <main className="flex-1 pt-24">
        {/* Dynamic Header Section - Lavish Royal Style */}
        <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black">
          <Image
            src="/images/work/DSC00446.jpg"
            alt="Fashion Fabric Legacy"
            fill
            className="absolute inset-0 object-cover z-0 opacity-50 scale-105"
            priority
          />
          
          {/* Layered Cinematic Overlays - Smooth Dark to White Blend */}
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/90 via-black/20 to-[#fcfdfc] pointer-events-none"></div>
          
          <div className="container relative z-20 px-4 md:px-6 flex flex-col items-center text-center">
            <AnimateIn>
              <span className="text-amber-500 font-bold tracking-[0.4em] uppercase text-[10px] md:text-sm mb-6 block bg-white/5 backdrop-blur-md px-6 py-2 rounded-full border border-white/10 shadow-lg flex items-center gap-2">
                <Star className="w-4 h-4 fill-amber-500" />
                THE ROYAL SAGA
                <Star className="w-4 h-4 fill-amber-500" />
              </span>
              <h1 className="text-5xl md:text-[7rem] font-bold tracking-tight text-white mb-6 font-garamond italic leading-tight drop-shadow-2xl">
                Our <span className="text-amber-500">Legacy</span>
              </h1>
            </AnimateIn>
            <AnimateIn delay={0.2}>
              <div className="flex items-center gap-6">
                <div className="h-px w-12 bg-amber-500/50"></div>
                <p className="max-w-[700px] text-lg md:text-2xl text-white/90 font-garamond italic font-light tracking-wide text-shadow">
                  "A tradition of trust, stitched into the finest fabrics since 2010."
                </p>
                <div className="h-px w-12 bg-amber-500/50"></div>
              </div>
            </AnimateIn>
          </div>
        </section>

        {/* The Heritage Story - Bright Royal */}
        <section className="py-40 bg-[#fcfdfc] relative border-t-4 border-amber-500/20">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/clean-textile.png')] opacity-30 pointer-events-none"></div>
          
          <div className="container px-4 md:px-6 relative z-10">
            <div className="max-w-5xl mx-auto">
              <AnimateIn className="flex flex-col items-center text-center mb-16 md:mb-24">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-amber-500/10 flex items-center justify-center mb-8 border border-amber-500/30 shadow-md">
                  <ShieldCheck className="text-amber-600" size={32} />
                </div>
                <h2 className="text-4xl md:text-[7rem] font-bold text-black mb-8 font-garamond italic text-center tracking-tight leading-tight">
                  How We <span className="text-amber-500">Began</span>
                </h2>
                <div className="w-40 md:w-60 h-[2px] bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
              </AnimateIn>
              
              <AnimateInStagger className="space-y-10 md:space-y-12 text-black/80 text-xl md:text-3xl font-light font-garamond italic leading-relaxed text-center px-4">
                <p>
                  Fashion Fabric began its journey in 2010, not as a uniform manufacturer, but as a retail linen showroom built on a deep understanding of textiles. Our strength has always been fabric-first—quality, feel, finish, and durability—because we believe every great garment starts with the right material.
                </p>
                <p>
                  Our entry into uniforms happened through a sheer request from a spa that needed professional uniforms. We weren't specialized at the time, but we said yes. We managed multiple rounds of follow-ups just to deliver the perfect final product. When we saw the client's smile, we knew we had created something beyond a garment—we had created trust.
                </p>
                <p>
                  That one order became a turning point. Today, Fashion Fabric outfits over 100,000 crew members every year, redefining what uniforms mean to the modern workforce. With over 15 years of expertise, we deliver uniforms crafted with precision, quality control, and elegance; where comfort and style are stitched into every detail.
                </p>
              </AnimateInStagger>
            </div>
          </div>
        </section>

        {/* Founder's Note Section - Dark & Lavish */}
        <section className="py-40 relative overflow-hidden bg-black border-y border-white/5">
          <div className="absolute top-1/2 left-1/4 w-[800px] h-[800px] bg-amber-500/[0.03] rounded-full blur-[180px] pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
          
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-24 lg:gap-32">
              
              {/* Founder Image Container */}
              <AnimateIn direction="left" className="relative group flex-shrink-0">
                <div className="absolute -inset-6 border border-white/10 rounded-[4rem] -z-10 bg-white/5 shadow-2xl"></div>
                
                <div className="relative w-[320px] h-[480px] md:w-[450px] md:h-[650px] rounded-[3rem] overflow-hidden shadow-[0_40px_100px_rgba(245,158,11,0.2)] border border-white/10">
                  <Image
                    src="/images/about-choose-ff/person-img.jpeg"
                    alt="Deepak Goyal - Founder"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-1000 opacity-90 group-hover:opacity-100"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                  
                  {/* Floating Identity Label */}
                  <div className="absolute bottom-12 left-0 right-0 text-center px-4">
                    <span className="block text-amber-500 font-bold tracking-[0.5em] uppercase text-xs mb-3">Visionary Founder</span>
                    <h3 className="text-4xl md:text-5xl font-garamond italic text-white drop-shadow-md tracking-tight">Deepak Goyal</h3>
                  </div>
                </div>
                
                {/* Master Accents - Yellow Double Inverted Comma */}
                <div className="absolute -top-10 -right-10 w-24 h-24 rounded-full bg-black flex items-center justify-center shadow-2xl border-4 border-amber-500 z-20 transition-transform group-hover:scale-110">
                  <Quote className="text-amber-500 rotate-180" size={40} />
                </div>
              </AnimateIn>

              {/* Founder's Note Text */}
              <AnimateIn direction="right" className="flex-1">
                <div className="space-y-10">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-[1px] bg-amber-500/40"></div>
                    <span className="text-amber-500 font-bold tracking-[0.4em] uppercase text-xs">A Founder's Vow</span>
                  </div>
                  
                  <h2 className="text-4xl md:text-8xl font-bold text-white font-garamond italic leading-tight">
                    Voice of <br /><span className="text-amber-500 drop-shadow-sm">The Master</span>
                  </h2>
                  
                  <div className="relative">
                    {/* Yellow Double Inverted Comma - Increased opacity for "minimal and good" pop */}
                    <div className="absolute -left-12 -top-16 text-[12rem] md:text-[15rem] font-garamond italic text-amber-500 leading-none select-none drop-shadow-[0_0_20px_rgba(245,158,11,0.5)] opacity-60">“</div>
                    <p className="text-2xl md:text-5xl text-white/90 leading-relaxed font-garamond italic font-light relative z-10 drop-shadow-sm border-l-4 border-amber-500/30 pl-10 ml-4 py-4">
                      "I started this company because I believed a well-crafted uniform could do more than dress your staff. At Fashion Fabric, every piece we manufacture is made with one goal—to give your team an identity that your guests never forget. We don't just make uniforms; we craft your brand's first impression."
                    </p>
                  </div>
                  
                  <div className="pt-10 flex flex-col sm:flex-row items-center gap-12 border-t border-white/10">
                    <div className="text-center sm:text-left">
                      <p className="text-xs tracking-[0.2em] font-bold text-white/30 uppercase mb-4">Official Signature</p>
                      <div className="relative w-[280px] h-[100px]">
                        <Image
                          src="/images/about-choose-ff/sing.svg"
                          alt="Deepak Goyal Signature"
                          fill
                          className="object-contain filter invert brightness-200"
                        />
                      </div>
                    </div>
                    
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center gap-3 text-white/60">
                        <Award className="text-amber-500" size={20} />
                        <span className="text-sm tracking-widest uppercase font-medium">Est. 2010</span>
                      </div>
                      <div className="flex items-center gap-3 text-white/60">
                        <ShieldCheck className="text-amber-500" size={20} />
                        <span className="text-sm tracking-widest uppercase font-medium">Quality Guaranteed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateIn>

            </div>
          </div>
        </section>

        {/* Values Section - Core Principles - Bright Royal */}
        <section className="py-32 bg-[#fcfdfc] relative overflow-hidden border-t-4 border-amber-500/20">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/clean-textile.png')] opacity-30 pointer-events-none"></div>
          
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center text-center mb-20">
              <AnimateIn>
                <span className="text-amber-600 font-bold tracking-[0.4em] uppercase text-xs mb-6 block">Why Choose Us</span>
                <h2 className="text-5xl md:text-7xl font-bold text-black mb-8 font-garamond italic">
                  Our Core <span className="text-amber-500 font-light drop-shadow-sm">Values</span>
                </h2>
                <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto"></div>
              </AnimateIn>
            </div>

            <AnimateInStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              {values.map((item, index) => (
                <div key={index} className="group flex items-start gap-6 bg-white p-8 rounded-[2rem] border border-neutral-200 hover:border-amber-500/40 hover:shadow-[0_20px_40px_rgba(245,158,11,0.05)] shadow-sm transition-all duration-500 hover:-translate-y-1">
                  <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-[1.25rem] bg-gradient-to-br from-amber-500/5 to-amber-500/10 flex items-center justify-center flex-shrink-0 border border-amber-500/20 shadow-sm group-hover:rotate-6 group-hover:scale-105 transition-all duration-500">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={60}
                      height={60}
                      className={`object-contain transition-all ${item.title === "Client-First Approach" || item.title === "Craftsmanship" ? "scale-110" : "scale-75"}`}
                      loading="lazy"
                    />
                  </div>
                  <div className="pt-2">
                    <h3 className="text-black font-bold text-xl mb-2 tracking-tight group-hover:text-amber-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-neutral-600 text-sm md:text-base leading-relaxed font-garamond italic font-light">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </AnimateInStagger>
          </div>
        </section>
      </main>
    </div>
  )
}
