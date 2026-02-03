import Image from "next/image"
import { AnimateIn } from "@/components/animate-in"
import Process from "@/app/products/process/pages"  
export default function CorporatePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
   {/* Corporate Section Banner */}
<section className="py-10 bg-white">
  <div className="container px-4 md:px-6">
    <AnimateIn>
      <div className="relative w-full rounded-[2rem] md:rounded-[2.5rem] bg-[#2e7d32] overflow-hidden shadow-xl">
        <div className="relative grid md:grid-cols-2 gap-4 md:gap-8 items-end md:items-center p-4 md:p-8 lg:p-10 pr-6 md:pr-10">

          <div className="relative z-10 bg-[#f5f3e8] rounded-lg md:rounded-2xl p-4 md:p-8 lg:p-10 shadow-lg order-1 overflow-hidden translate-x-0 md:translate-x-4 lg:translate-x-8">

            <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-3 md:mb-4">
              Corporate
            </h2>

            <p className="text-neutral-700 leading-relaxed text-xs md:text-base">
              We make corporate uniforms that move seamlessly from boardroom to
              beyond. Crafted from premium, breathable fabrics with sharp tailoring
              and all-day comfort, our pieces are made to keep you looking composed
              from your 9–5 to your 5–9 because professionalism shouldn’t end when
              the day does.
            </p>
          </div>

          <div className="relative z-10 flex justify-center md:justify-end items-end order-2">
            <div className="relative w-full max-w-[550px] h-[280px] md:h-[380px] lg:h-[350px] translate-y-6 md:translate-y-10">
              <Image
                src="/images/collections-images/Corporate.png"
                alt="Corporate professional uniforms"
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
