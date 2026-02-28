"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { AnimateIn, AnimateInStagger } from "@/components/animate-in"
import { useState, useEffect } from "react"
import { Download, BookOpen, FileText, Sparkles, ArrowRight, Star } from "lucide-react"

interface Catalogue {
  id: string
  title: string
  subtitle?: string | null
  description?: string | null
  category: string
  coverImage: string
  pdfUrl: string
  color: string
  publishedAt: string
}

export default function CataloguePage() {
  const [catalogues, setCatalogues] = useState<Catalogue[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchCatalogues()
  }, [])

  const fetchCatalogues = async () => {
    try {
      setIsLoading(true)
      const response = await fetch("/api/catalogue")

      if (!response.ok) {
        throw new Error("Failed to fetch catalogues")
      }

      const data = await response.json()
      setCatalogues(data)
    } catch (err) {
      console.error("Error fetching catalogues:", err)
      setError("Failed to load catalogues. Please try again later.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#fcfdfc] text-black">
      <main className="flex-1">
        {/* Royal Hero Section - Dynamic Blend */}
        <section className="relative w-full min-h-[70vh] flex items-center justify-center overflow-hidden bg-black">
          {/* Background Textures & Lighting */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/linen.png')] opacity-15 pointer-events-none z-10"></div>
          <Image
            src="/images/bg-imges-hero-sections/image-02.jpg"
            alt="Royal Catalogue Backdrop"
            fill
            className="object-cover z-0 opacity-60 scale-105"
            priority
          />
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/80 via-transparent to-[#fcfdfc]"></div>
          
          <div className="container relative z-20 px-4 md:px-6 flex flex-col items-center text-center pt-24">
            <AnimateIn>
              <div className="flex items-center justify-center gap-6 mb-10">
                <div className="w-16 h-px bg-amber-500/50"></div>
                <span className="text-amber-500 font-bold tracking-[0.6em] uppercase text-xs">The Official Archives</span>
                <div className="w-16 h-px bg-amber-500/50"></div>
              </div>
              <h1 className="text-6xl md:text-[9rem] font-bold tracking-tighter text-white mb-10 font-garamond italic leading-none drop-shadow-2xl">
                Royal <span className="text-amber-500">Catalogues</span>
              </h1>
            </AnimateIn>
            <AnimateIn delay={0.2}>
              <p className="max-w-[850px] text-2xl md:text-3xl font-garamond italic text-white font-light leading-relaxed mb-12 text-shadow-lg">
                "Behold our complete collection of masterworks. A testament to fifteen years of sartorial excellence and uncompromising quality."
              </p>
            </AnimateIn>
            <AnimateIn delay={0.4}>
              <div className="flex items-center justify-center gap-2 mb-12">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={24} className="text-amber-500 fill-amber-500" />
                ))}
              </div>
            </AnimateIn>
          </div>
        </section>

        {/* Catalogues Grid Section - Bright & Lavish */}
        <section className="py-40 relative overflow-hidden bg-[#fcfdfc]">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/exclusive-paper.png')] opacity-30 pointer-events-none"></div>
          
          <div className="container px-4 md:px-6">
            <div className="text-center mb-32">
              <AnimateIn>
                <h2 className="text-6xl md:text-[7rem] font-bold font-garamond italic text-black mb-10 leading-none">Available <span className="text-amber-500 font-light">Masterpieces</span></h2>
                <div className="w-60 h-[2px] bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto"></div>
              </AnimateIn>
            </div>

            {isLoading ? (
              <div className="flex justify-center items-center min-h-[400px]">
                <div className="text-center space-y-6">
                  <div className="animate-spin rounded-full h-20 w-20 border-b-4 border-amber-500 mx-auto"></div>
                  <p className="text-amber-600 font-garamond italic text-2xl animate-pulse">Summoning archives...</p>
                </div>
              </div>
            ) : error ? (
              <div className="flex justify-center items-center min-h-[400px]">
                <div className="text-center bg-white p-12 rounded-[3.5rem] border border-neutral-100 shadow-2xl">
                  <p className="text-red-500 font-garamond italic text-2xl mb-10">{error}</p>
                  <Button onClick={fetchCatalogues} className="bg-amber-600 text-white hover:bg-black rounded-full px-12 py-8 font-bold tracking-widest text-sm transition-all shadow-xl">
                    Try Again
                  </Button>
                </div>
              </div>
            ) : catalogues.length === 0 ? (
              <div className="flex justify-center items-center min-h-[400px]">
                <div className="text-center bg-white p-24 rounded-[4rem] border border-neutral-100 shadow-2xl">
                  <FileText className="w-32 h-32 text-amber-500/30 mx-auto mb-10" />
                  <p className="text-neutral-400 text-2xl font-garamond italic">Our vaults are currently refreshing. Please return soon.</p>
                </div>
              </div>
            ) : (
              <AnimateInStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 md:gap-16">
                {catalogues.map((catalogue, index) => (
                  <div key={catalogue.id} className="group relative">
                    {/* Royal Frame */}
                    <div className="absolute -inset-6 border border-neutral-100 rounded-[3rem] -z-10 group-hover:border-amber-500/30 transition-all duration-700 bg-white shadow-sm"></div>
                    
                    <Card className="bg-white border-none overflow-hidden hover:shadow-2xl transition-all duration-700 flex flex-col h-full rounded-[2.5rem] group-hover:-translate-y-4">
                      {/* Cover Image */}
                      <div className="relative w-full aspect-[3/4] overflow-hidden">
                        <Image
                          src={catalogue.coverImage}
                          alt={catalogue.title}
                          fill
                          className="object-cover transition-transform duration-1000 group-hover:scale-110"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity"></div>
                        
                        {/* Category Badge */}
                        <div className="absolute top-6 left-6 bg-black text-amber-500 text-[9px] font-bold tracking-widest uppercase px-5 py-2.5 rounded-full shadow-2xl border border-white/10">
                          {catalogue.category}
                        </div>
                        
                        {/* Quick View Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                           <div className="w-16 h-16 bg-amber-500 text-black rounded-full flex items-center justify-center scale-75 group-hover:scale-100 transition-all duration-500 shadow-2xl shadow-amber-500/40">
                             <BookOpen size={24} />
                           </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-10 flex flex-col flex-1">
                        <h3 className="text-3xl font-bold text-black mb-4 font-garamond italic group-hover:text-amber-600 transition-colors leading-tight">
                          {catalogue.title}
                        </h3>
                        {catalogue.subtitle && (
                          <p className="text-base text-neutral-500 mb-8 font-light font-garamond italic line-clamp-2 leading-relaxed">
                            {catalogue.subtitle}
                          </p>
                        )}

                        {/* Description */}
                        {catalogue.description && (
                          <div className="text-sm text-neutral-600 mb-10 font-garamond italic border-l-2 border-amber-500/20 pl-6 py-2">
                            <p className="mb-4 font-bold text-amber-600 tracking-[0.2em] uppercase text-[10px]">Inside the masterwork:</p>
                            <ul className="space-y-3">
                              {catalogue.description.split('\n').filter(line => line.trim()).slice(0, 3).map((line, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                  <span className="w-1.5 h-1.5 bg-amber-500/40 rounded-full mt-2" />
                                  <span className="line-clamp-1">{line}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Spacer */}
                        <div className="flex-1"></div>

                        {/* Download Button */}
                        <Link
                          href={`/catalogue/${catalogue.id}/download`}
                          className="w-full"
                        >
                          <Button className="w-full bg-neutral-900 hover:bg-amber-500 text-white hover:text-black border-none rounded-2xl py-8 group/btn font-bold tracking-[0.3em] uppercase text-[10px] transition-all duration-700 shadow-xl overflow-hidden">
                            <Download className="w-4 h-4 mr-3 group-hover/btn:translate-y-1 transition-transform" />
                            Acquire Catalogue
                          </Button>
                        </Link>
                      </div>
                    </Card>
                  </div>
                ))}
              </AnimateInStagger>
            )}
          </div>
        </section>

        {/* Why Download - Royal Advantage Section - Contrasting Black */}
        <section className="py-40 relative overflow-hidden bg-black">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/linen.png')] opacity-20 pointer-events-none"></div>
          
          <div className="container px-4 md:px-6 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-32">
                <AnimateInStagger>
                  <span className="text-amber-500 font-bold tracking-[0.5em] uppercase text-xs mb-8 block">The Sovereign Choice</span>
                  <h2 className="text-6xl md:text-[8rem] font-bold text-white mb-10 font-garamond italic leading-none">
                    Why Consult <br />the <span className="text-amber-500">Archives?</span>
                  </h2>
                </AnimateInStagger>
              </div>

              <AnimateInStagger className="grid md:grid-cols-3 gap-16 mt-12">
                {[
                  {
                    icon: BookOpen,
                    label: "The Royal Anthology",
                    desc: "Witness our entire empire of garment solutions, meticulously categorized for your browsing pleasure."
                  },
                  {
                    icon: Sparkles,
                    label: "Artistic Precision",
                    desc: "Detailed fabric specs, master sizing charts, and cinematic lookbooks that reveal every stitch."
                  },
                  {
                    icon: Download,
                    label: "Persistent Legacy",
                    desc: "Download once, carry our expertise forever. High-resolution PDFs optimized for king-level presentation."
                  }
                ].map((item, i) => (
                  <div key={i} className="text-center group p-12 bg-white/5 backdrop-blur-3xl rounded-[4rem] border border-white/10 hover:border-amber-500/40 transition-all duration-700 hover:-translate-y-4">
                    <div className="w-24 h-24 bg-black border border-white/20 group-hover:border-amber-500 rounded-3xl flex items-center justify-center mx-auto mb-12 group-hover:rotate-[15deg] transition-all duration-700 shadow-2xl">
                      <item.icon className="w-10 h-10 text-amber-500" />
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-8 font-garamond italic tracking-tight">{item.label}</h3>
                    <p className="text-white/60 text-xl font-garamond font-light italic leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </AnimateInStagger>
            </div>
          </div>
        </section>

        {/* Grand CTA - Bright Finale */}
        <section className="py-40 relative overflow-hidden bg-[#fcfdfc]">
           <div className="container px-4 md:px-6 relative z-10">
              <AnimateIn className="bg-white rounded-[5rem] p-16 md:p-32 border border-neutral-100 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] text-center relative overflow-hidden group hover:border-amber-500/40 transition-all duration-1000">
                 <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/exclusive-paper.png')] opacity-20 pointer-events-none"></div>
                 
                 <div className="relative z-10 max-w-5xl mx-auto">
                    <h2 className="text-5xl md:text-[9rem] font-bold text-black mb-12 font-garamond italic leading-tight drop-shadow-sm">
                      Ready to <span className="text-amber-500">Commission</span> <br />Your Fleet?
                    </h2>
                    <p className="text-neutral-500 text-2xl md:text-4xl font-garamond italic font-light mb-20 leading-relaxed px-4">
                      "A physical catalogue is just paper. Our expertise is the soul truly woven into every garment."
                    </p>
                    <Link href="/enquiry">
                      <Button size="lg" className="bg-amber-600 hover:bg-black text-white rounded-full px-20 py-12 text-3xl font-bold font-garamond italic tracking-widest transition-all hover:scale-105 shadow-[0_20px_50px_rgba(180,83,9,0.3)] border-none">
                        COMMENCE THE DIALOGUE
                      </Button>
                    </Link>
                 </div>
              </AnimateIn>
           </div>
        </section>
      </main>
    </div>
  )
}
