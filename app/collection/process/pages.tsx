
"use client"
import Image from "next/image"

const steps = [
  {
    id: 1,
    title: "Consultation",
    desc: "We understand your brand needs, team roles, operational needs to craft the perfect uniform for you.",
  },
  {
    id: 2,
    title: "Fabric Mapping",
    desc: "We select fabrics that mirror your brand, refined to touch, durability and budget-appropriate.",
  },
  {
    id: 3,
    title: "Detailing",
    desc: "From fine embroidery to premium screen prints, we apply your logo flawlessly.",
  },
  {
    id: 4,
    title: "Sampling",
    desc: "We prototype to validate fit, finish, and feel to ensure perfection before full production.",
  },
  {
    id: 5,
    title: "Measurement",
    desc: "We take measurements of your team to deliver precise, sharp, confident and polished fit.",
  },
  {
    id: 6,
    title: "Production",
    desc: "Crafted with meticulous attention, our production line delivers consistency and superior finishing.",
  },
  {
    id: 7,
    title: "Delivery",
    desc: "We ensure timely delivery with strict quality checks, so your uniforms are deadline-perfect.",
  },
  {
    id: 8,
    title: "After Sales",
    desc: "Ongoing support for alterations and reorders ensuring uniform stays seamless and consistent.",
  },
]

export default function EndToEndProcess() {
  return (
    <section className="py-32 bg-[#fcfdfc] relative border-y-4 border-amber-500/20">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/clean-textile.png')] opacity-20 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-amber-600 font-bold tracking-[0.4em] uppercase text-xs mb-4 block">The Legacy of Excellence</span>
          <h2 className="text-4xl md:text-6xl text-black font-garamond italic font-bold">
            Our End-to-End <span className="text-amber-500 drop-shadow-sm">Process</span>
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {steps.map((step) => (
            <div key={step.id} className="group flex flex-col items-center text-center">
              {/* Step Image */}
              <div className="relative w-40 h-40 mx-auto mb-8 flex items-center justify-center">
                {/* Step Number Badge */}
                <div className="absolute -top-2 -left-2 w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center text-black font-bold text-xl z-20 shadow-md group-hover:scale-110 transition-transform">
                  {step.id}
                </div>
                
                {/* Subtle Backdrop Glow */}
                <div className="absolute inset-0 bg-amber-500/5 rounded-full blur-xl group-hover:bg-amber-500/10 transition-colors pointer-events-none"></div>

                <div className="relative w-full h-full p-4 border border-neutral-200 rounded-[2rem] bg-white group-hover:border-amber-500/40 shadow-sm transition-all duration-500 flex items-center justify-center overflow-hidden">
                  <Image
                    src={`/images/collection-process/${step.title.replace(/ /g, "%20")}.png`}
                    alt={step.title}
                    width={120}
                    height={120}
                    className="object-contain opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                    priority={step.id === 1}
                  />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-amber-600 font-garamond italic font-bold text-2xl mb-4 group-hover:text-amber-500 transition-colors">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-neutral-600 text-sm leading-relaxed font-light font-garamond italic">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
