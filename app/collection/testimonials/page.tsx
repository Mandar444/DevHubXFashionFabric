"use client"

import { useState } from "react"
import { AnimateIn, AnimateInStagger } from "@/components/animate-in"
import { Quote, ChevronLeft, ChevronRight, Star, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TestimonialsPage() {
  const testimonials = [
    {
      quote:
        "Fashion Fabric has been our trusted uniform partner for years. Their attention to detail, quality of fabrics, and timely delivery have made them an invaluable asset to our operations.",
      name: "Hotel Manager",
      company: "5-Star Hotel in Goa",
      logo: "/images/testimonials/Untitled-4_Hotel Manager.svg"
    },
    {
      quote:
        "The team at Fashion Fabric understands our brand aesthetic perfectly. They've created custom uniforms that our staff love to wear and that perfectly represent our brand image.",
      name: "F&B Director",
      company: "Luxury Resort in Goa",
      logo: "/images/testimonials/Untitled-4_F&B Director.svg"
    },
    {
      quote:
        "We've been working with Fashion Fabric for over 5 years now. Their consistent quality and reliability make them our go-to uniform supplier for all our properties.",
      name: "Procurement Manager",
      company: "Hotel Chain",
      logo: "/images/testimonials/Untitled-4_Procurement Manager.svg"
    },
    {
      quote:
        "The custom chef coats designed by Fashion Fabric are not only stylish but also incredibly comfortable and durable. Our kitchen team is very satisfied.",
      name: "Executive Chef",
      company: "Fine Dining Restaurant",
      logo: "/images/testimonials/Untitled-4_Executive Chef.svg"
    },
    {
      quote:
        "Fashion Fabric's attention to detail and commitment to quality is unmatched. They delivered our large order on time and exceeded our expectations.",
      name: "General Manager",
      company: "Casino in Goa",
      logo: "/images/testimonials/Untitled-4_General Manager.svg"
    },
    {
      quote:
        "Working with Fashion Fabric has been a pleasure. Their team is responsive, professional, and always willing to go the extra mile to meet our requirements.",
      name: "Operations Director",
      company: "Boutique Hotel",
      logo: "/images/testimonials/Untitled-4_Operations Director.svg"
    },
  ]

  const [index, setIndex] = useState(0)

  const prev = () =>
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))

  const next = () =>
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden pb-32">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/linen.png')] opacity-10 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-amber-500/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#f59e0b]/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      {/* Royal Header */}
      <section className="relative pt-40 pb-20 text-center">
        <AnimateInStagger>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-12 h-px bg-amber-500"></div>
            <span className="text-amber-500 font-bold tracking-[0.5em] uppercase text-xs">Testimonials</span>
            <div className="w-12 h-px bg-amber-500"></div>
          </div>
          
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-8 font-garamond italic px-4 leading-tight">
             Gallery of <span className="text-amber-500 text-glow">Appreciations</span>
          </h1>
          <p className="text-white/60 text-lg md:text-2xl font-garamond italic font-light max-w-3xl mx-auto px-4">
            "The voices of our patrons are the finest threads in our tapestry of excellence."
          </p>
        </AnimateInStagger>
      </section>

      {/* Modern Royal Slider */}
      <section className="relative px-4 mt-12">
        <div className="container mx-auto">
          <div className="relative h-[550px] sm:h-[650px] md:h-[750px] flex items-center justify-center">
            {testimonials.map((item, i) => {
              let position = i - index
              
              if (position < -Math.floor(testimonials.length / 2)) {
                position += testimonials.length
              }
              if (position > Math.floor(testimonials.length / 2)) {
                position -= testimonials.length
              }

              const isCenter = position === 0
              const isVisible = Math.abs(position) <= 1

              return (
                <div
                  key={i}
                  className="absolute transition-all duration-1000 cubic-bezier(0.23, 1, 0.32, 1)"
                  style={{
                    left: '50%',
                    transform: `translateX(calc(-50% + ${position * 105}%)) scale(${isCenter ? 1 : 0.75})`,
                    zIndex: isCenter ? 30 : 20 - Math.abs(position),
                    opacity: isVisible ? (isCenter ? 1 : 0.3) : 0,
                    filter: isCenter ? 'none' : 'blur(4px)',
                  }}
                >
                  <div
                    className={`bg-white/5 backdrop-blur-2xl rounded-[2.5rem] md:rounded-[3rem] border transition-all duration-1000 w-[280px] sm:w-[350px] md:w-[420px] flex flex-col items-center text-center group
                      ${isCenter ? 'h-[500px] sm:h-[550px] md:h-[650px] p-8 md:p-12 border-amber-500/40 shadow-[0_40px_80px_-20px_rgba(245,158,11,0.2)]' : 'h-[400px] sm:h-[450px] md:h-[550px] p-6 md:p-8 border-white/5'}
                    `}
                  >
                    {/* Royal Icon Decor */}
                    <div className="mb-8 relative">
                       <Quote className={`transition-all duration-700 ${isCenter ? 'text-amber-500 w-16 h-16' : 'text-white/20 w-12 h-12'}`} />
                       {isCenter && (
                         <Sparkles className="absolute -top-4 -right-4 text-amber-500/40 w-8 h-8 animate-pulse" />
                       )}
                    </div>

                    <p className={`font-garamond italic font-light leading-relaxed text-white/90 flex-grow scrollbar-hide overflow-y-auto mb-8 ${isCenter ? 'text-xl md:text-2xl' : 'text-base md:text-lg'}`}>
                      "{item.quote}"
                    </p>

                    <div className="w-full h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent mb-8"></div>

                    <div className="flex flex-col items-center">
                        <h3 className={`font-garamond italic font-bold mb-2 tracking-wide ${isCenter ? 'text-2xl md:text-3xl text-amber-500' : 'text-xl text-white/70'}`}>
                          {item.name}
                        </h3>
                        <p className={`font-garamond italic font-light tracking-[0.1em] uppercase text-xs mb-6 ${isCenter ? 'text-white/60' : 'text-white/40'}`}>
                          {item.company}
                        </p>
                        
                        {/* Star Rating */}
                        <div className="flex gap-1 mb-8">
                           {[1,2,3,4,5].map(s => (
                             <Star key={s} className={`w-4 h-4 fill-amber-500 text-amber-500 ${isCenter ? 'opacity-100' : 'opacity-30'}`} />
                           ))}
                        </div>

                        {/* Client Logo - Subtle Backdrop */}
                        <div className={`relative transition-all duration-700 ${isCenter ? 'opacity-100 h-24' : 'opacity-20 h-16 blur-sm'}`}>
                          <img src={item.logo} alt={item.company} className="h-full w-auto object-contain filter invert opacity-80" />
                        </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Navigation Controls - Royal Edition */}
          <div className="flex justify-center items-center gap-12 mt-12 md:mt-0 relative z-40">
            <button
              onClick={prev}
              className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full border border-white/10 flex items-center justify-center hover:bg-amber-500/10 hover:border-amber-500/40 transition-all duration-500 group"
            >
              <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8 text-white group-hover:text-amber-500 transition-colors" />
            </button>
            
            <div className="flex gap-4">
               {testimonials.map((_, i) => (
                 <button
                   key={i}
                   onClick={() => setIndex(i)}
                   className={`transition-all duration-500 rounded-full ${
                     index === i ? 'w-12 h-2 bg-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.5)]' : 'w-2 h-2 bg-white/20'
                   }`}
                 />
               ))}
            </div>

            <button
              onClick={next}
              className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full border border-white/10 flex items-center justify-center hover:bg-amber-500/10 hover:border-amber-500/40 transition-all duration-500 group"
            >
              <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8 text-white group-hover:text-amber-500 transition-colors" />
            </button>
          </div>
        </div>
      </section>

      {/* Royal Seal of Excellence */}
      <section className="mt-40 mb-20 text-center">
         <AnimateIn>
            <div className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 backdrop-blur-md rounded-full border border-white/10">
               <Sparkles className="text-amber-500 w-5 h-5" />
               <span className="font-garamond italic font-light tracking-[0.2em] uppercase text-xs">TRUSTED BY OVER 500+ GLOBAL EMPIRES</span>
            </div>
         </AnimateIn>
      </section>
    </div>
  )
}
