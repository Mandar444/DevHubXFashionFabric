"use client"

import Image from "next/image"

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
    title: "Craftmenship",
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

export default function WhyChooseFashionFabric() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-16">
          Why Choose Fashion Fabric ?
        </h2>

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-12">
          {values.map((item, index) => (
            <div key={index} className="flex items-start gap-5">
              {/* Icon */}
              <div className="w-20 h-20 rounded-full bg-green-700 flex items-center justify-center flex-shrink-0">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>

              {/* Text */}
              <div>
                <h3 className="text-green-700 font-semibold text-lg mb-1">
                  {item.title}
                </h3>
                <p className="text-sm italic text-gray-700 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Dots Section */}
        <div className="mt-20 flex flex-col items-center">
          <div className="grid grid-cols-3 gap-4 mb-6">
            {Array.from({ length: 9 }).map((_, i) => (
              <div
                key={i}
                className="w-4 h-4 rounded-full bg-green-700"
              />
            ))}
          </div>

          <p className="text-center text-sm font-serif text-gray-800 max-w-md">
            Each dot symbolizes a core value in our approach to exceptional
            uniform manufactures
          </p>
        </div>
      </div>
    </section>
  )
}
