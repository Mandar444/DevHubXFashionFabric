
import Image from "next/image"
import { AnimateIn } from "@/components/animate-in"
import Process from "@/app/products/process/pages"

export default function SchoolsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
  {/* Schools Section Banner */}
<section className="py-10 bg-white">
  <div className="container px-4 md:px-6">
    <AnimateIn>
      <div className="relative w-full rounded-[2rem] md:rounded-[2.5rem] bg-[#2e7d32] overflow-hidden shadow-xl">
        <div className="relative grid md:grid-cols-2 gap-6 md:gap-8 items-end md:items-center p-6 md:p-8 lg:p-10 pr-10">

          <div className="relative z-10 bg-[#f5f3e8] rounded-xl md:rounded-2xl p-6 md:p-8 lg:p-10 shadow-lg order-1 overflow-hidden translate-x-0 md:translate-x-4 lg:translate-x-8">

            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
              Schools
            </h2>

            <p className="text-neutral-700 leading-relaxed text-sm md:text-base">
              We make uniforms for education institutes that combine durability,
              comfort, and freedom of movement. Crafted to withstand daily use from
              classroom lessons to playground activities our uniforms keep students
              and teachers alike looking neat and feeling comfortable, allowing
              them to teach, learn, and engage without restriction, while creating
              a cohesive environment.
            </p>
          </div>

          <div className="relative z-10 flex justify-center md:justify-end items-end order-2">
            <div className="relative w-full max-w-[550px] md:h-[380px] lg:h-[350px] translate-y-6 md:translate-y-10">
              <Image
                src="/images/collections-images/School.png"
                alt="School students and teachers uniforms"
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
