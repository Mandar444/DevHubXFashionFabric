"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Quote, Star, ChevronRight, ChevronLeft } from "lucide-react"

interface Testimonial {
  quote: string
  name: string
  company: string
  logo: string
}

interface TestimonialStackProps {
  testimonials: Testimonial[]
}

export function TestimonialStack({ testimonials }: TestimonialStackProps) {
  const [cards, setCards] = useState(testimonials)
  const [exitX, setExitX] = useState<number | string>(0)

  // Move the front card to the back
  const moveToEnd = (fromScroll = false) => {
    setCards((prev) => {
      const newCards = [...prev]
      const first = newCards.shift()
      if (first) newCards.push(first)
      return newCards
    })
    setExitX(0)
  }

  const movePrev = () => {
    setCards((prev) => {
      const newCards = [...prev]
      const last = newCards.pop()
      if (last) newCards.unshift(last)
      return newCards
    })
  }

  if (!testimonials || testimonials.length === 0) return null

  return (
    <div className="relative w-full max-w-5xl mx-auto h-[600px] flex items-center justify-center select-none">
      {/* Navigation Buttons - Royal Style */}
      <div className="absolute top-1/2 -left-20 -translate-y-1/2 z-50 hidden xl:block">
        <button 
          onClick={movePrev}
          className="p-5 bg-white rounded-full border border-neutral-100 hover:bg-amber-500 hover:text-white transition-all shadow-xl text-neutral-400 group"
        >
          <ChevronLeft size={28} className="group-hover:-translate-x-1 transition-transform" />
        </button>
      </div>
      <div className="absolute top-1/2 -right-20 -translate-y-1/2 z-50 hidden xl:block">
        <button 
          onClick={() => moveToEnd()}
          className="p-5 bg-white rounded-full border border-neutral-100 hover:bg-amber-500 hover:text-white transition-all shadow-xl text-neutral-400 group"
        >
          <ChevronRight size={28} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      <div className="relative w-full h-full flex justify-center items-center">
        <AnimatePresence initial={false}>
          {cards.map((testimonial, index) => {
            const isTop = index === 0
            // Only render top 3 to keep it clean
            if (index > 2) return null

            return (
              <motion.div
                key={testimonial.name}
                style={{
                  zIndex: 10 - index,
                  cursor: isTop ? "grab" : "default"
                }}
                drag={isTop ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -100) {
                    setExitX(-500)
                    setTimeout(moveToEnd, 200)
                  } else if (info.offset.x > 100) {
                    setExitX(500)
                    setTimeout(moveToEnd, 200)
                  }
                }}
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{
                  scale: 1 - index * 0.04,
                  y: index * 12, // Tighter stacking
                  x: isTop ? 0 : 0,
                  opacity: 1 - index * 0.15,
                  rotate: index === 0 ? 0 : (index % 2 === 0 ? index * 1.5 : index * -1.5), // Subtle royal randomness
                }}
                exit={{
                  x: exitX,
                  opacity: 0,
                  scale: 0.8,
                  transition: { duration: 0.3 }
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}
                className="absolute w-full max-w-4xl bg-gradient-to-br from-[#1a3a1f] to-[#0a1f0d] text-white p-10 md:p-16 rounded-[4rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.4)] border border-white/10 overflow-hidden"
              >
                {/* Royal Texture */}
                <div className="absolute inset-0 bg-[#306f34]/5 bg-[url('https://www.transparenttextures.com/patterns/exclusive-paper.png')] pointer-events-none"></div>
                
                {/* Large Background Quote */}
                <Quote className="absolute top-10 right-10 text-white/5 w-40 h-40 -z-10" />

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex text-amber-500 mb-10 gap-1.5 justify-center md:justify-start">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-7 h-7 fill-amber-500" />
                    ))}
                  </div>
                  
                  <p className="text-2xl md:text-5xl font-light italic leading-[1.3] mb-16 font-garamond text-white/95 text-shadow-lg text-center md:text-left">
                    "{testimonial.quote}"
                  </p>

                  <div className="mt-auto pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0">
                    <div className="flex items-center gap-8">
                      <div className="h-24 w-24 bg-white rounded-3xl flex items-center justify-center p-3 shadow-2xl border-4 border-white/10 overflow-hidden">
                         <Image 
                           src={testimonial.logo} 
                           alt={testimonial.company} 
                           width={100} 
                           height={50} 
                           className="object-contain"
                         />
                      </div>
                      <div className="text-center md:text-left">
                        <h4 className="text-3xl font-bold text-white font-garamond italic tracking-tight">{testimonial.name}</h4>
                        <p className="text-amber-500 text-[10px] tracking-[0.5em] uppercase font-bold mt-2">{testimonial.company}</p>
                      </div>
                    </div>
                    
                    <div className="hidden md:flex items-center gap-4 text-white/20 italic font-garamond text-xl">
                      <span className="w-12 h-px bg-white/10"></span>
                      Verified Excellence
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </AnimatePresence>
      </div>

      {/* Swipe Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-4">
        {testimonials.map((_, i) => (
          <div 
            key={i} 
            className={`w-2 h-2 rounded-full transition-all duration-500 ${cards[0].name === testimonials[i].name ? 'w-10 bg-amber-500' : 'bg-neutral-300'}`}
          />
        ))}
      </div>
    </div>
  )
}
