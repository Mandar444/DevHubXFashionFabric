"use client"
import Image from "next/image"
import { AnimateIn } from "@/components/animate-in"
import { Quote, Star } from "lucide-react"

const testimonials = [
  {
    quote: "Fashion Fabric has been our trusted uniform partner for years. Their attention to detail, quality of fabrics, and timely delivery have made them an invaluable asset to our operations. The team consistently delivers excellence.",
    name: "Hotel Manager",
    company: "5-Star Hotel in Goa",
    logo: "/images/testimonials/Untitled-4_Hotel Manager.svg"
  },
  {
    quote: "The team at Fashion Fabric understands our brand aesthetic perfectly. They've created custom uniforms that our staff love to wear and that perfectly represent our brand image in every detail.",
    name: "F&B Director",
    company: "Luxury Resort in Goa",
    logo: "/images/testimonials/Untitled-4_F&B Director.svg"
  },
  {
    quote: "We've been working with Fashion Fabric for over 5 years now. Their consistent quality and reliability make them our go-to uniform supplier for all our properties across the country.",
    name: "Procurement Manager",
    company: "Hotel Chain",
    logo: "/images/testimonials/Untitled-4_Procurement Manager.svg"
  }
]

export function TestimonialsSlider() {
  return (
    <section className="relative py-24 md:py-32 px-4 bg-[#f8faf8] overflow-hidden min-h-[95vh] flex flex-col justify-center">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] border border-[#00712C]/5 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] border border-[#00712C]/3 rounded-full"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-[#00712C]/5 to-transparent"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10 text-center">
        {/* Centered Heading - Big and Bold */}
        <AnimateIn className="mb-16 md:mb-20">
          <h2 className="text-4xl md:text-7xl font-bold tracking-tight text-neutral-900 mb-6">
            What Our <span className="text-[#00712C]">Clients</span> Say
          </h2>
          <div className="w-24 h-2 bg-[#00712C] mx-auto rounded-full mb-8"></div>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-neutral-500 font-medium italic leading-relaxed">
            "Your success is our signature. Discover how we've transformed the identity of India's leading hospitality brands."
          </p>
        </AnimateIn>

        {/* Centered Big Card Design */}
        <AnimateIn delay={0.2}>
          <div className="relative h-[650px] md:h-[750px] flex items-center justify-center perspective-[2000px]">
            
            {/* Background Decorative Card (Left) */}
            <div className="absolute hidden lg:flex flex-col items-center justify-center text-center -translate-x-[280px] rotate-[-10deg] w-[320px] h-[500px] bg-white text-neutral-300 shadow-xl rounded-[3rem] p-10 border border-neutral-100 z-10 opacity-40">
               <Quote size={32} className="mb-6 opacity-20" fill="currentColor" />
               <h3 className="font-serif font-bold text-2xl mb-2">Hotel Manager</h3>
               <p className="text-xs tracking-widest uppercase mb-4">5-STAR HOTEL</p>
            </div>

            {/* Main Center Card - HUGE and PROMINENT */}
            <div className="relative z-30 flex flex-col items-center justify-between text-center bg-gradient-to-br from-[#00712C] to-[#043d07] text-white shadow-[0_60px_120px_-30px_rgba(0,113,44,0.5)] rounded-[4rem] p-12 md:p-20 w-[350px] sm:w-[450px] md:w-[650px] h-[580px] md:h-[700px] border border-white/10 group transition-all duration-700 hover:scale-[1.03]">
              <div className="text-white/20 transform group-hover:scale-110 transition-transform duration-500">
                <Quote size={80} className="md:w-24 md:h-24" fill="currentColor" />
              </div>
              
              <div className="text-[10px] md:text-xs tracking-[0.3em] font-bold uppercase py-2 px-8 rounded-full border-2 border-white/20 text-white/90 my-8">
                VERIFIED PARTNER V3
              </div>

              <h3 className="font-serif font-bold text-3xl md:text-5xl mb-2 text-white tracking-tight">F&B Director</h3>
              <p className="text-[10px] md:text-sm tracking-[0.4em] uppercase mb-10 text-white/60">LUXURY RESORT IN GOA</p>

              <p className="leading-relaxed italic flex-grow text-lg md:text-2xl font-medium text-white/95 max-w-[90%]">
                "The team at Fashion Fabric understands our brand aesthetic perfectly. They've created custom uniforms that our staff love to wear and that perfectly represent our brand image!"
              </p>

              <div className="flex gap-3 mb-12 w-full justify-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={28} className="text-yellow-400 fill-yellow-400 drop-shadow-[0_4px_12px_rgba(0,0,0,0.4)]" />
                ))}
              </div>

              {/* Logo - Large and Clear */}
              <div className="relative w-72 h-36 md:w-[450px] md:h-52 opacity-100 mt-4 h-auto">
                <Image src="/images/testimonials/Untitled-4_F&B Director.svg" alt="Signature Logo" fill className="object-contain object-bottom" priority />
              </div>
            </div>

            {/* Background Decorative Card (Right) */}
            <div className="absolute hidden lg:flex flex-col items-center justify-center text-center translate-x-[280px] rotate-[10deg] w-[320px] h-[500px] bg-white text-neutral-300 shadow-xl rounded-[3rem] p-10 border border-neutral-100 z-10 opacity-40">
               <Quote size={32} className="mb-6 opacity-20" fill="currentColor" />
               <h3 className="font-serif font-bold text-2xl mb-2">Procurement Manager</h3>
               <p className="text-xs tracking-widest uppercase mb-4">HOTEL CHAIN</p>
            </div>

          </div>
        </AnimateIn>
      </div>
    </section>
  )
}
