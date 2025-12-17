import Image from "next/image"
import { AnimateIn, AnimateInStagger } from "@/components/animate-in"

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
                  <p className="text-neutral-600 mb-4">
                    For over 15 years, Fashion Fabric has been India&apos;s premier destination for bespoke textile
                    solutions, renowned for exquisite craftsmanship and timeless elegance. We specialize in creating
                    custom-made fabrics tailored to perfection designed to complement every shape, size, and setting
                    with seamless sophistication.
                  </p>
                  <p className="text-neutral-600 mb-4">
                    Our legacy is built on trust, discretion, and an unwavering commitment to quality, earning us the
                    confidence of the most prestigious names in the hospitality industry. At Fashion Fabric, comfort and
                    style are not just a product it&apos;s an experience stitched into every garment.
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

        {/* Our Process */}
        <section className="py-16 bg-neutral-50">
          <div className="container px-4 md:px-6">
            <AnimateIn>
              <h2 className="text-3xl font-bold text-center mb-12">Our Meticulous Process</h2>
            </AnimateIn>
            <AnimateInStagger className="grid grid-cols-1 md:grid-cols-3 gap-8" staggerDelay={0.05}>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-amber-700 font-bold text-xl">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Design Concept</h3>
                <p className="text-neutral-600">
                  The creative vision, inspired by culture, art, or function. We work closely with clients to understand
                  their unique requirements.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-amber-700 font-bold text-xl">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Pattern Making</h3>
                <p className="text-neutral-600">
                  The technical process of translating a design into templates. Our expert pattern makers ensure perfect
                  fit and comfort.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-amber-700 font-bold text-xl">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Fabric Selection</h3>
                <p className="text-neutral-600">
                  Choosing materials based on texture, durability, and purpose. We source only the finest fabrics for
                  our uniforms.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-amber-700 font-bold text-xl">4</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Cutting</h3>
                <p className="text-neutral-600">
                  Precision cutting of fabric for perfect fit and minimal waste. Our skilled craftsmen ensure accuracy
                  in every cut.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-amber-700 font-bold text-xl">5</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Sewing / Stitching</h3>
                <p className="text-neutral-600">
                  Skillful joining of pieces; can involve hand-stitching or expert machine work. Our tailors have years
                  of experience in crafting perfect garments.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-amber-700 font-bold text-xl">6</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Embellishment</h3>
                <p className="text-neutral-600">
                  Embroidery, beading, dyeing, or printing that adds uniqueness. We offer customization options to make
                  your uniforms stand out.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-amber-700 font-bold text-xl">7</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Finishing</h3>
                <p className="text-neutral-600">
                  Final touches: seams, hems, buttons, zippers. We pay attention to every detail to ensure a polished
                  final product.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-amber-700 font-bold text-xl">8</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Quality Control</h3>
                <p className="text-neutral-600">
                  Ensuring consistency, durability, and no defects. Each garment undergoes rigorous inspection before
                  delivery.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-amber-700 font-bold text-xl">9</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Packaging & Presentation</h3>
                <p className="text-neutral-600">
                  Reflects the brand's care and attention even in delivery. Your uniforms arrive ready to impress.
                </p>
              </div>
            </AnimateInStagger>
          </div>
        </section>
      </main>
    </div>
  )
}
