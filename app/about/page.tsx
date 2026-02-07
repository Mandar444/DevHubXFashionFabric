import Image from "next/image"
import { AnimateIn, AnimateInStagger } from "@/components/animate-in"
import WhyChooseFashionFabric from "../about/why-choose-ff/pages"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full h-[40vh] flex items-center justify-center overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0"
            poster="/images/work/DSC00446.jpg"
          >
            <source src="https://dhyeydeveloper.github.io/fashion-fabric-videos/V2.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 z-10 bg-black/40"></div>
          <div className="container relative z-20 px-4 md:px-6 flex flex-col items-center text-center">
            <AnimateIn>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-4">About Fashion Fabric</h1>
            </AnimateIn>
            <AnimateIn delay={0.2}>
              <p className="max-w-[800px] text-lg text-white/90">
                Our story, our journey, and our commitment to excellence
              </p>
            </AnimateIn>
          </div>
        </section>

        {/* About Content */}
        <section className="py-16 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <AnimateIn direction="left">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                  <p className=" mb-4 text-black text-justify">
                    Fashion Fabric began its journey in 2010, not as a uniform manufacturer, but as a retail linen showroom built on a deep understanding of textiles. Our strength has always been fabric-first quality, feel, finish and durability; because we believe every great garment starts with the right material.
                  </p>
                  <p className=" mb-4 text-black text-justify">
                    Our entry into uniforms happened through a sheer request from a spa that needed professional uniforms. We weren&apos;t specialised in uniforms at the time, and we didn&apos;t have the full infrastructure either, but we said yes. We sourced the fabric, got customisation done in another city, and managed multiple rounds of follow-ups just to deliver the perfect final product. When we saw the client&apos;s smile at delivery, we knew we had created something beyond a garment, we had created trust.
                  </p>
                  <p className=" mb-4 text-black text-justify">
                    That one order became a turning point. More requests followed, and we realised there was a genuine need for uniforms that looked premium, felt comfortable, and represented the brand with pride. That&apos;s when Fashion Fabric evolved from a showroom into a full-scale uniform solution brand. Since then, Fashion Fabric has grown into a brand trusted by leading names across industries, especially hospitality and service-driven businesses; building processes, strengthening production capability, and taking ownership of design, tailoring, branding and finishing. What began as a request became our purpose and uniforms became our core.
                  </p>
                  <p className=" mb-4 text-black text-justify">
                    Today, Fashion Fabric outfits over 100,000 crew members every year, redefining what uniforms mean to the modern workforce. Uniforms are no longer just attire, they carry your team&apos;s confidence and your brand&apos;s first impression. With over 15 years of expertise, we deliver uniforms crafted with precision, quality control and elegance; where comfort and style are stitched into every detail.
                  </p>
                </div>
              </AnimateIn>
              <AnimateIn direction="right">
                <div className="relative h-[400px] rounded-lg overflow-hidden">
                  <Image
                    src="/images/work/DSC00460.jpg"
                    alt="Fashion Fabric Workshop"
                    fill
                    className="object-cover"
                  />
                </div>
              </AnimateIn>
            </div>
          </div>
        </section>

        <WhyChooseFashionFabric />
      </main>
    </div>
  )
}
