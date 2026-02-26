import Image from "next/image"
import { AnimateIn, AnimateInStagger } from "@/components/animate-in"
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
    title: "Craftsmanship",
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
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
                <div className="flex flex-col md:flex-row items-center gap-8 bg-white rounded-lg p-6">
                  {/* Person Image */}
                  <div className="relative w-[260px] h-[380px] md:w-[300px] md:h-[450px] rounded-lg overflow-hidden flex-shrink-0 shadow-lg">
                    <Image
                      src="/images/about-choose-ff/person-img.jpeg"
                      alt="Founder - Fashion Fabric"
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Quote & Signature */}
                  <div className="flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-black  mb-4">Founder's Note </h3>
                    <p className="text-sm md:text-base text-black leading-relaxed mb-6 text-justify">
                      &ldquo;I started this company because I believed a well-crafted uniform could do more than dress your staff. At Fashion Fabric, every piece we manufacture for Goa&apos;s hotels and casinos is made with one goal in mind &mdash; to give your team an identity that your guests never forget. We don&apos;t just make uniforms, we craft your brand&apos;s first impression.&rdquo;
                    </p>
                    <div>
                      <p className="text-lg font-bold text-black">Deepak Goyal
 </p>
                      
                      <div className="relative w-[220px] h-[110px] mt-3 -ml-8">
                        <Image
                          src="/images/about-choose-ff/sing.svg"
                          alt="Signature"
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateIn>
            </div>
          </div>
        </section>
   <section className="py-16 bg-white">
      <div className="container px-4 md:px-6 ">
        {/* Heading */}
        <h2 className="text-3xl text-[#2e7d32] font-bold mb-8 md:mb-16 md:-ml-1">
          Redefining The Art of Workwear
        </h2>

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 md:gap-x-16 gap-y-8 md:gap-y-12">
          {values.map((item, index) => (
            <div key={index} className="flex items-start gap-3 md:gap-5">
              {/* Icon */}
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-green-700 flex items-center justify-center flex-shrink-0">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={80}
                  height={80}
                  className={`object-contain ${item.title === "Client-First Approach" || item.title === "Craftsmanship" ? "w-32 h-32 md:w-36 md:h-36" : "w-16 h-16 md:w-20 md:h-20"}`}
                  loading="lazy"
                />
              </div>

              {/* Text */}
              <div>
                <h3 className="text-green-700 font-semibold text-base md:text-lg mb-1">
                  {item.title}
                </h3>
                <p className="text-xs md:text-sm italic text-black leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Dots Section */}
        <div className="mt-12 md:mt-20 flex flex-col items-center">
          <div className="grid grid-cols-3 gap-3 md:gap-4 mb-4 md:mb-6">
            {Array.from({ length: 9 }).map((_, i) => (
              <div
                key={i}
                className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-green-700"
              />
            ))}
          </div>

            <p className="text-center text-xs md:text-sm text-black max-w-md px-4 font-garamond-pro ">
            Each dot symbolizes a core value in our approach to exceptional
            uniform manufacturing
          </p>
        </div>
      </div>
    </section>
        {/* <WhyChooseFashionFabric /> */}
      </main>
    </div>
  )
}
