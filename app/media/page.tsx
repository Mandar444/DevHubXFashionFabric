import Image from "next/image"
import { AnimateIn, AnimateInStagger } from "@/components/animate-in"

export default function MediaPage() {
  const mediaItems = [
    // Images
    { type: "image", src: "/images/work/DSC00443.jpg", alt: "Workshop Image 1", caption: "" },
    { type: "image", src: "/images/work/DSC00446.jpg", alt: "Workshop Image 2", caption: "" },
    { type: "image", src: "/images/work/DSC00447.jpg", alt: "Workshop Image 3", caption: "" },
    { type: "image", src: "/images/work/DSC00460.jpg", alt: "Workshop Image 4", caption: "" },
    { type: "image", src: "/images/work/DSC00467.jpg", alt: "Workshop Image 5", caption: "" },
    { type: "image", src: "/images/work/DSC00470.jpg", alt: "Workshop Image 6", caption: "" },
    // Videos (with poster if available)
    { type: "video", src: "https://dhyeydeveloper.github.io/fashion-fabric-videos/V1.mp4", alt: "Workshop Video 1", caption: "", poster: "/images/work/DSC00443.jpg" },
    { type: "video", src: "https://dhyeydeveloper.github.io/fashion-fabric-videos/V2.mp4", alt: "Workshop Video 2", caption: "", poster: "/images/work/DSC00446.jpg" },
    { type: "video", src: "https://dhyeydeveloper.github.io/fashion-fabric-videos/V3.mp4", alt: "Workshop Video 3", caption: "", poster: "/images/work/DSC00447.jpg" },
    { type: "video", src: "https://dhyeydeveloper.github.io/fashion-fabric-videos/V4.mp4", alt: "Workshop Video 4", caption: "", poster: "/images/work/DSC00460.jpg" },
    { type: "video", src: "https://dhyeydeveloper.github.io/fashion-fabric-videos/V5.mp4", alt: "Workshop Video 5", caption: "", poster: "/images/work/DSC00467.jpg" },
    { type: "video", src: "https://dhyeydeveloper.github.io/fashion-fabric-videos/V6.mp4", alt: "Workshop Video 6", caption: "", poster: "/images/work/DSC00470.jpg" },
    { type: "video", src: "https://dhyeydeveloper.github.io/fashion-fabric-videos/V7.mp4", alt: "Workshop Video 7", caption: "", poster: "/images/work/DSC00443.jpg" },
    { type: "video", src: "https://dhyeydeveloper.github.io/fashion-fabric-videos/V8.mp4", alt: "Workshop Video 8", caption: "", poster: "/images/work/DSC00446.jpg" },
    { type: "video", src: "https://dhyeydeveloper.github.io/fashion-fabric-videos/V9.mp4", alt: "Workshop Video 9", caption: "", poster: "/images/work/DSC00447.jpg" },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full min-h-[40vh] flex items-center justify-center overflow-hidden bg-neutral-200">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="none"
            className="absolute inset-0 w-full h-full object-cover z-0"
            poster="/images/work/DSC00447.jpg"
          >
            <source src="https://dhyeydeveloper.github.io/fashion-fabric-videos/V8.mp4" type="video/mp4" />
            <img src="/images/work/DSC00447.jpg" alt="Media Gallery" className="w-full h-full object-cover" />
          </video>
          <div className="absolute inset-0 z-10 bg-black/40"></div>
          <div className="container relative z-20 px-4 md:px-6 flex flex-col items-center text-center">
            <AnimateIn>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-4">Media Gallery</h1>
            </AnimateIn>
            <AnimateIn delay={0.2}>
              <p className="max-w-[800px] text-lg text-white/90">A glimpse into our workshop and craftsmanship</p>
            </AnimateIn>
          </div>
        </section>

        {/* Media Gallery */}
        <section className="py-16 bg-white">
          <div className="container px-4 md:px-6">
            <AnimateIn>
              <p className="text-center text-neutral-600 mb-12 max-w-[800px] mx-auto">
                Take a look behind the scenes at Fashion Fabric. Our gallery showcases our skilled craftsmen at work,
                our workshop, and the meticulous process that goes into creating each uniform.
              </p>
            </AnimateIn>
            <AnimateInStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
              {mediaItems.map((item, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="aspect-[4/3] relative flex items-center justify-center">
                    {item.type === "image" ? (
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <video
                        src={item.src}
                        controls
                        poster={item.poster}
                        className="absolute inset-0 w-full h-full object-cover rounded"
                      />
                    )}
                  </div>
                  <div className="p-4">
                    <p className="text-neutral-600 text-center">{item.caption}</p>
                  </div>
                </div>
              ))}
            </AnimateInStagger>
            <AnimateIn delay={0.5}>
              <div className="mt-12 text-center">
                <p className="text-neutral-600 italic">
                  Note: Video content of our tailoring process will be added soon.
                </p>
              </div>
            </AnimateIn>
          </div>
        </section>

        {/* Process Highlight */}
        <section className="py-16 bg-neutral-50">
          <div className="container px-4 md:px-6">
            <AnimateIn>
              <h2 className="text-3xl font-bold text-center mb-12">Our Craftsmanship Process</h2>
            </AnimateIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <AnimateIn direction="left">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-amber-700 font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Design & Consultation</h3>
                      <p className="text-neutral-600">
                        We begin with understanding your requirements and creating designs that align with your brand
                        identity.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-amber-700 font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Material Selection</h3>
                      <p className="text-neutral-600">
                        We help you select the perfect fabrics that balance comfort, durability, and appearance.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-amber-700 font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Precision Crafting</h3>
                      <p className="text-neutral-600">
                        Our skilled tailors meticulously craft each uniform with attention to every detail.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-amber-700 font-bold">4</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
                      <p className="text-neutral-600">
                        Every uniform undergoes rigorous quality checks before being delivered to our clients.
                      </p>
                    </div>
                  </div>
                </div>
              </AnimateIn>
              <AnimateIn direction="right">
                <div className="relative h-[400px] rounded-lg overflow-hidden">
                  <Image
                    src="/images/work/DSC00467.jpg"
                    alt="Craftsmanship Process"
                    fill
                    className="object-cover"
                  />
                </div>
              </AnimateIn>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
