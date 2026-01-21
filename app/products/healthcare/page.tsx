import Image from "next/image"
import { AnimateIn } from "@/components/animate-in"
import Process from "@/app/products/process/pages"
export default function HotelUniformPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
   {/* Healthcare Section Banner */}
<section className="py-10 bg-white">
  <div className="container px-4 md:px-6">
    <AnimateIn>
      <div className="relative w-full rounded-[2rem] md:rounded-[2.5rem] bg-[#2e7d32] overflow-hidden shadow-xl">
        <div className="relative grid md:grid-cols-2 gap-6 md:gap-8 items-end md:items-center p-6 md:p-8 lg:p-10 pr-10">

          {/* Left Content Card */}
          <div
            className="relative z-10 bg-[#f5f3e8] rounded-xl md:rounded-2xl 
            p-6 md:p-8 lg:p-10 shadow-lg order-1 overflow-hidden 
            translate-x-0 md:translate-x-4 lg:translate-x-8"
          >
            {/* Decorative circles - bottom right of card */}
            <div className="absolute -bottom-16 -right-16 md:-bottom-20 md:-right-20">
              <div className="relative w-32 h-32 md:w-40 md:h-40">
                <div
                  className="absolute inset-0"
                  style={{
                    clipPath:
                      "polygon(0 15%, 15% 0, 85% 0, 100% 15%, 100% 100%, 0 100%)",
                  }}
                >
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={`card-arc-${i}`}
                      className="absolute rounded-full"
                      style={{
                        border: "5px solid #2e7d32",
                        width: `${50 + i * 20}px`,
                        height: `${50 + i * 20}px`,
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Updated Content */}
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
              Healthcare
            </h2>

            <p className="text-neutral-700 leading-relaxed text-sm md:text-base">
              We make uniforms for healthcare professionals with hygiene and
              functionality as the top priority. Made from durable, easy-to-clean
              fabrics and crafted for comfort and ease of movement, each uniform
              keeps staff ready for a long day without compromising their comfort.
            </p>
          </div>

          {/* Right Image Section */}
          <div className="relative z-10 flex justify-center md:justify-end items-end order-2">
            <div className="relative w-full max-w-[550px] aspect-[16/10] md:aspect-auto md:h-[380px] lg:h-[350px] translate-y-6 md:translate-y-10">
              <Image
                src="/images/collections-images/Healthcare.png"
                alt="Healthcare professionals wearing medical uniforms"
                fill
                className="object-contain object-bottom"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </AnimateIn>
  </div>
</section>
<Process />
    </div>
  )
}
