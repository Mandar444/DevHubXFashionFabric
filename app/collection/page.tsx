"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AnimateIn, AnimateInStagger } from "@/components/animate-in"
import { Sparkles, ArrowRight, Star, Award, ShieldCheck, Quote } from "lucide-react"

export default function ProductsPage() {
  const collectionCategories = [
    { name: "Hospitality", href: "/collection/hospitality", image: "/images/collections-images/Hospitality.png", tag: "Royal Comfort" },
    { name: "Restaurant & Chef", href: "/collection/restaurant-chef", image: "/images/collections-images/Restaurants.png", tag: "Culinary Mastery" },
    { name: "Spa / Salons", href: "/collection/spa", image: "/images/collections-images/Spa.png", tag: "Serene Elegance" },
    { name: "Healthcare", href: "/collection/healthcare", image: "/images/collections-images/Healthcare.png", tag: "Clinical Precision" },
    { name: "Airline", href: "/collection/airline", image: "/images/collections-images/Airline.png", tag: "Aviation Heritage" },
    { name: "Corporate", href: "/collection/corporate", image: "/images/collections-images/Corporate.png", tag: "Executive Power" },
    { name: "Educational Institutes", href: "/collection/school", image: "/images/collections-images/School.png", tag: "Elite Knowledge" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <main className="flex-1">
        {/* Cinematic Royal Hero */}
        <section className="relative w-full h-[70vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/linen.png')] opacity-15 pointer-events-none"></div>
          
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover z-0 opacity-40 scale-105 grayscale"
            poster="/images/work/DSC00467.jpg"
          >
            <source
              src="/video/V5.mp4"
              type="video/mp4"
            />
          </video>
          
          {/* Layered Cinematic Overlays */}
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/80 via-black/20 to-[#050505]"></div>
          
          <div className="container relative z-20 px-4 md:px-6 flex flex-col items-center text-center">
            <AnimateInStagger>
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="w-12 h-px bg-amber-500"></div>
                <span className="text-amber-500 font-bold tracking-[0.6em] uppercase text-xs">The Royal Archives</span>
                <div className="w-12 h-px bg-amber-500"></div>
              </div>
              <h1 className="text-4xl sm:text-6xl md:text-[8rem] font-bold tracking-tighter text-white mb-8 font-garamond italic leading-none">
                Our <span className="text-amber-500 text-glow">Collections</span>
              </h1>
              <p className="max-w-[800px] text-lg md:text-3xl font-garamond italic text-white/70 font-light leading-relaxed px-4">
                "Stitched with the precision of a king's guard, designed for the empires of tomorrow."
              </p>
            </AnimateInStagger>
          </div>
          
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 animate-bounce">
            <div className="w-px h-16 bg-gradient-to-b from-amber-500 to-transparent"></div>
          </div>
        </section>

        {/* Featured Hospitality Banner (Royal Edition) */}
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/exclusive-paper.png')] opacity-5 pointer-events-none"></div>
          
          <div className="container px-4 md:px-6 relative z-10">
            <AnimateIn>
              <div className="relative w-full rounded-[4rem] bg-black overflow-hidden border border-white/10 shadow-[0_50px_100px_-30px_rgba(0,0,0,0.5)] group">
                {/* Background Decorations */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2"></div>
                
                <div className="relative grid md:grid-cols-12 gap-12 items-center p-12 md:p-20">
                  {/* Left Content Card */}
                  <div className="md:col-span-12 lg:col-span-6 relative z-10 order-2 lg:order-1">
                    <div className="bg-white/5 backdrop-blur-xl rounded-[3rem] p-12 border border-white/10 shadow-2xl">
                      <div className="flex items-center gap-4 mb-8">
                        <Sparkles className="text-amber-500" size={24} />
                        <span className="text-amber-500 font-bold tracking-[0.4em] uppercase text-xs">Exquisite Mastery</span>
                      </div>
                      
                      <h2 className="text-4xl md:text-7xl font-bold text-white mb-8 font-garamond italic leading-tight">
                        Grand <br /><span className="text-amber-500">Hospitality</span>
                      </h2>
                      
                      <p className="text-white/70 text-xl font-garamond italic font-light leading-relaxed mb-10">
                        "In hospitality, every interaction tells a story, and your team is its narrator. We craft uniforms that move with your staff, balance comfort with style, and reflect the personality of your brand."
                      </p>
                      
                      <Link href="/collection/hospitality">
                        <Button className="bg-amber-500 hover:bg-amber-600 text-black rounded-full px-10 py-6 font-bold tracking-widest transition-all hover:scale-105 group/btn">
                          EXPLORE WARDROBE <ArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform" size={16} />
                        </Button>
                      </Link>
                    </div>
                  </div>

                  {/* Right Image Section */}
                  <div className="md:col-span-12 lg:col-span-6 relative z-10 order-1 lg:order-2 flex justify-center">
                    <div className="relative w-full aspect-square max-w-[500px] group-hover:scale-105 transition-transform duration-1000">
                      <div className="absolute inset-0 bg-amber-500/20 rounded-full blur-[100px] animate-pulse"></div>
                      <Image
                        src="/images/collections-images/Hospitality.png"
                        alt="Hospitality Masterpiece"
                        fill
                        className="object-contain filter drop-shadow-[0_20px_50px_rgba(245,158,11,0.2)]"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>
            </AnimateIn>
          </div>
        </section>

        {/* Categories Grid - Royal Showcase */}
        <section className="py-40 relative">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center mb-32">
              <AnimateInStagger>
                 <span className="text-amber-500 font-bold tracking-[0.5em] uppercase text-xs mb-6 block">The Sovereign Selection</span>
                 <h2 className="text-5xl md:text-7xl font-bold text-white mb-10 font-garamond italic">Browse our <span className="text-amber-500">Empires</span></h2>
                 <div className="w-40 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto"></div>
              </AnimateInStagger>
            </div>

            <AnimateInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12" staggerDelay={0.05}>
              {collectionCategories.slice(1).map((category, index) => (
                <Link
                  key={index}
                  href={category.href}
                  className="group relative bg-black rounded-[2.5rem] md:rounded-[3rem] overflow-hidden border border-white/5 hover:border-amber-500/40 transition-all duration-700 hover:shadow-[0_50px_100px_-20px_rgba(245,158,11,0.15)] h-[500px] md:h-[600px]"
                >
                  {/* Image Container */}
                  <div className="h-2/3 relative overflow-hidden">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-cover opacity-80 transition-transform duration-1000 group-hover:scale-110 group-hover:opacity-100"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-transparent to-transparent"></div>
                  </div>
                  
                  {/* Content Container */}
                  <div className="p-10 flex flex-col justify-between h-1/3">
                    <div>
                      <span className="text-amber-500/60 font-bold tracking-widest text-[10px] uppercase mb-2 block">{category.tag}</span>
                      <h3 className="text-3xl font-garamond italic font-bold text-white group-hover:text-amber-500 transition-colors">{category.name}</h3>
                    </div>
                    <div className="flex items-center gap-2 text-white/40 group-hover:text-amber-500 transition-all font-bold tracking-widest uppercase text-[10px]">
                      Enter Realm <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                  
                  {/* Hover Accent */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-amber-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
                </Link>
              ))}
            </AnimateInStagger>
          </div>
        </section>

        {/* Grand CTA Section */}
        <section className="py-40 relative flex justify-center text-center overflow-hidden">
           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/linen.png')] opacity-5 pointer-events-none"></div>
           <AnimateInStagger>
              <Quote size={80} className="text-amber-500/10 mb-12 mx-auto rotate-12" />
              <h2 className="text-4xl md:text-[6rem] font-bold font-garamond italic text-white/90 leading-tight mb-12 md:mb-16 px-4">
                Your Legacy <br />
                <span className="text-amber-500 text-glow">Awaits Its Uniform</span>
              </h2>
              <Link href="/enquiry">
                <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-black rounded-full px-12 md:px-20 py-6 md:py-10 text-xl md:text-2xl font-bold font-garamond italic tracking-widest transition-all hover:scale-105 shadow-[0_0_60px_rgba(245,158,11,0.3)]">
                  BEGIN THE DECREE
                </Button>
              </Link>
           </AnimateInStagger>
        </section>
      </main>
    </div>
  )
}
