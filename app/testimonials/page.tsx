"use client"

import { useState } from "react"
import { AnimateIn } from "@/components/animate-in"

export default function TestimonialsPage() {
  const testimonials = [
    {
      quote:
        "Fashion Fabric has been our trusted uniform partner for years. Their attention to detail, quality of fabrics, and timely delivery have made them an invaluable asset to our operations.",
      name: "Hotel Manager",
      company: "5-Star Hotel in Goa",
    },
    {
      quote:
        "The team at Fashion Fabric understands our brand aesthetic perfectly. They've created custom uniforms that our staff love to wear and that perfectly represent our brand image.",
      name: "F&B Director",
      company: "Luxury Resort in Goa",
    },
    {
      quote:
        "We've been working with Fashion Fabric for over 5 years now. Their consistent quality and reliability make them our go-to uniform supplier for all our properties.",
      name: "Procurement Manager",
      company: "Hotel Chain",
    },
    {
      quote:
        "The custom chef coats designed by Fashion Fabric are not only stylish but also incredibly comfortable and durable. Our kitchen team is very satisfied.",
      name: "Executive Chef",
      company: "Fine Dining Restaurant",
    },
    {
      quote:
        "Fashion Fabric's attention to detail and commitment to quality is unmatched. They delivered our large order on time and exceeded our expectations.",
      name: "General Manager",
      company: "Casino in Goa",
    },
    {
      quote:
        "Working with Fashion Fabric has been a pleasure. Their team is responsive, professional, and always willing to go the extra mile to meet our requirements.",
      name: "Operations Director",
      company: "Boutique Hotel",
    },
  ]

  const [index, setIndex] = useState(1)

  const prev = () =>
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))

  const next = () =>
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))

  return (
    <div className="min-h-screen bg-neutral-50 text-white">
      {/* Title */}
      <section className="py-20 text-center">
        <AnimateIn>
          <h1 className="text-4xl md:text-5xl font-serif text-black font-semibold">
            Client Testimonials
          </h1>
        </AnimateIn>
      </section>

      {/* Slider */}
      <section className="relative pb-24 px-4">
        <div className="container mx-auto">
          <div className="relative h-[550px] flex items-center justify-center">
            {testimonials.map((item, i) => {
              // Calculate position relative to center
              let position = i - index
              
              // Handle wrap around
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
                  className="absolute transition-all duration-700 ease-in-out"
                  style={{
                    left: '50%',
                    transform: `translateX(calc(-50% + ${position * 380}px)) scale(${isCenter ? 1 : 0.85})`,
                    zIndex: isCenter ? 20 : 10 - Math.abs(position),
                    opacity: isVisible ? (isCenter ? 1 : 0.5) : 0,
                    pointerEvents: isVisible ? 'auto' : 'none',
                  }}
                >
                  <div
                    className={`bg-[#2e7d32] text-black rounded-2xl shadow-2xl
                      transition-all duration-700 w-[360px]
                      ${isCenter ? 'h-[480px] p-12' : 'h-[400px] p-8'}
                    `}
                  >
                    <h3 className={`font-serif font-semibold text-center mb-1 text-white ${isCenter ? 'text-2xl' : 'text-xl'}`}>
                      {item.name}
                    </h3>
                    {/* <p className={`text-center text-neutral-700 mb-6 ${isCenter ? 'text-sm' : 'text-xs'}`}>
                      {item.title}
                    </p> */}

                    <p className={`leading-relaxed text-center mb-8 text-white  ${isCenter ? 'text-base' : 'text-sm'}`}>
                      {item.quote}
                    </p>

                    <div className="flex justify-center text-amber-500 mb-6">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <span key={i} className={isCenter ? 'text-xl' : 'text-base'}>★</span>
                      ))}
                    </div>

                    <p className={`text-center font-semibold tracking-wide text-white ${isCenter ? 'text-base' : 'text-sm'}`}>
                      {item.company}
                    </p>
                    {/* <img src={item.logo} alt={`${item.company} logo`} className="mx-auto mt-4" /> */}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Left Button */}
          <button
            onClick={prev}
            className="absolute left-6 top-1/2 -translate-y-1/2
                       text-black text-4xl hover:opacity-70 z-30"
          >
            ‹
          </button>

          {/* Right Button */}
          <button
            onClick={next}
            className="absolute right-6 top-1/2 -translate-y-1/2
                       text-black text-4xl hover:opacity-70 z-30"
          >
            ›
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-10">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-3 w-3 rounded-full transition ${
                  index === i ? "bg-black" : "bg-neutral-400"
                }`}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}