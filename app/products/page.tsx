"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AnimateIn, AnimateInStagger } from "@/components/animate-in"

export default function ProductsPage() {
  const categories = [
    { name: "Air Hostess Uniform", image: "/images/catalogue/air-hostess.png" },
    { name: "Bar Tender Uniform", image: "/images/catalogue/bar-tendor.png" },
    { name: "Bow Tie", image: "/images/catalogue/bow.jpg" },
    { name: "Casino Uniform", image: "/images/catalogue/casino-uniform.jpg" },
    { name: "Catering Uniforms", image: "/images/catalogue/catering-uniforms.png" },
    { name: "Chef Accessories", image: "/images/catalogue/CHEF-ACCESSORIES.jpg" },
    { name: "Chef Apron", image: "/images/catalogue/chef-apron.png" },
    { name: "Chef Coats", image: "/images/catalogue/chef-coats.jpg" },
    { name: "Corporate Wear Suit", image: "/images/catalogue/CORPORATE-WEAR-SUIT.png" },
    { name: "Doorman Uniforms", image: "/images/catalogue/DOORMAN-UNIFORMS.png" },
    { name: "Driver Uniforms", image: "/images/catalogue/driver-uniforms.png" },
    { name: "F&B Uniforms", image: "/images/catalogue/f&b-uniforms.png" },
    { name: "Front Office Uniforms", image: "/images/catalogue/FRONT-OFFICE-UNIFORMS.png" },
    { name: "Hospital Uniforms", image: "/images/catalogue/HOSPITAL-UNIFORMS.png" },
    { name: "Security Uniform", image: "/images/catalogue/hotel-security.jpg" },
    { name: "Housekeeping Uniforms", image: "/images/catalogue/HOUSEKEEPING-UNIFORMS.png" },
    { name: "Lab Coats", image: "/images/catalogue/lab-coats.png" },
    { name: "Polo T-shirt", image: "/images/catalogue/polo-tshirt.jpg" },
    { name: "School Uniform", image: "/images/catalogue/school-uniform.png" },
    { name: "Spa Uniforms", image: "/images/catalogue/SPA-UNIFORMS.png" },
    { name: "Tie", image: "/images/catalogue/tie.jpg" },
    { name: "Trousers", image: "/images/catalogue/trousers.jpg" },
    { name: "Round Neck T-shirt", image: "/images/catalogue/uniform-ROUND-NECK-T-SHIRT.jpg" },
  ]

  const menShoes = [
    { name: "Oxford shoes", image: "/images/catalogue/oxford-shoes.webp" },
    { name: "Derby shoes", image: "/images/catalogue/derby-shoes.jpg" },
    { name: "Brogues", image: "/images/catalogue/Brogues.webp" },
    { name: "Monk Straps", image: "/images/catalogue/Monk-Straps.webp" },
    { name: "Loafers", image: "/images/catalogue/Loafers.avif" },
    { name: "Wholecut", image: "/images/catalogue/Wholecut.jpeg" },
    { name: "Chelsea Boots", image: "/images/catalogue/Chelsea.jpg" },
  ]

  const womenShoes = [
    { name: "Classic Pumps", image: "/images/catalogue/Classic-Pumps.jpg" },
    { name: "Ballet Flats", image: "/images/catalogue/Ballet-Flats.jpg" },
    { name: "Moccasins", image: "/images/catalogue/Moccasins.jpg" },
  ]

  const unisexShoes = [
    { name: "Chef clogs", image: "/images/catalogue/Chef-clogs.jpg" },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full min-h-[40vh] flex items-center justify-center overflow-hidden bg-neutral-200">
          {/* Video for desktop */}
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="none"
            className="absolute inset-0 w-full h-full object-cover z-0 hidden sm:block"
            poster="/images/work/DSC00467.jpg"
          >
            <source
              src="https://dhyeydeveloper.github.io/fashion-fabric-videos/V1.mp4"
              type="video/mp4"
            />
          </video>

          {/* Fallback image for mobile */}
          <Image
            src="/images/work/DSC00467.jpg"
            alt="Our Products"
            fill
            className="absolute inset-0 w-full h-full object-cover z-0 block sm:hidden"
          />

          <div className="absolute inset-0 z-10 bg-black/40"></div>
          <div className="container relative z-20 px-4 md:px-6 flex flex-col items-center text-center">
            <AnimateIn>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-4">Our Products</h1>
            </AnimateIn>
            <AnimateIn delay={0.2}>
              <p className="max-w-[800px] text-lg text-white/90">
                Explore our complete range of high-quality uniforms and footwear for the hospitality industry
              </p>
            </AnimateIn>
          </div>
        </section>

        {/* Product Catalogue Section */}
        <section className="py-16 bg-white">
          <div className="container px-4 md:px-6">
            <AnimateIn>
              <h2 className="text-3xl font-bold text-center mb-12">Product Catalogue</h2>
            </AnimateIn>
            <AnimateInStagger
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              staggerDelay={0.03}
            >
              {categories.map((category, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border"
                >
                  <div className="aspect-[4/3] relative">
                    <Image
                      src={category.image || "/placeholder.svg"}
                      alt={category.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-base font-semibold text-center">{category.name}</h3>
                  </div>
                </div>
              ))}
            </AnimateInStagger>
          </div>
        </section>

        {/* Formal Shoes Collection Section */}
        <section className="py-16 bg-neutral-50">
          <div className="container px-4 md:px-6">
            <AnimateIn>
              <h2 className="text-3xl font-bold text-center mb-12">Formal Shoes Collection</h2>
            </AnimateIn>

            {/* MEN Section */}
            <AnimateIn>
              <h3 className="text-2xl font-semibold mb-6 mt-8 text-center text-neutral-800">MEN</h3>
            </AnimateIn>
            <AnimateInStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {menShoes.map((shoe, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border"
                >
                  <div className="aspect-[4/3] relative">
                    <Image
                      src={shoe.image}
                      alt={shoe.name}
                      fill
                      className="object-contain group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-base font-semibold text-center">{shoe.name}</h3>
                  </div>
                </div>
              ))}
            </AnimateInStagger>

            {/* WOMEN Section */}
            <AnimateIn>
              <h3 className="text-2xl font-semibold mb-6 mt-8 text-center text-neutral-800">WOMEN</h3>
            </AnimateIn>
            <AnimateInStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {womenShoes.map((shoe, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border"
                >
                  <div className="aspect-[4/3] relative">
                    <Image
                      src={shoe.image}
                      alt={shoe.name}
                      fill
                      className="object-contain group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-base font-semibold text-center">{shoe.name}</h3>
                  </div>
                </div>
              ))}
            </AnimateInStagger>

            {/* UNISEX Section */}
            <AnimateIn>
              <h3 className="text-2xl font-semibold mb-6 mt-8 text-center text-neutral-800">UNISEX</h3>
            </AnimateIn>
            <AnimateInStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {unisexShoes.map((shoe, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border"
                >
                  <div className="aspect-[4/3] relative">
                    <Image
                      src={shoe.image}
                      alt={shoe.name}
                      fill
                      className="object-contain group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-base font-semibold text-center">{shoe.name}</h3>
                  </div>
                </div>
              ))}
            </AnimateInStagger>
          </div>
        </section>

        {/* CTA Section - Need Custom Uniforms */}
        <section className="py-16 bg-amber-50">
          <div className="container px-4 md:px-6 text-center">
            <AnimateIn>
              <h2 className="text-3xl font-bold mb-6">Need Custom Uniforms?</h2>
              <p className="max-w-[600px] mx-auto text-neutral-600 mb-8">
                We specialize in creating bespoke uniform solutions tailored to your specific requirements. Contact us
                today to discuss your needs.
              </p>
              <Button asChild size="lg" className="bg-amber-700 hover:bg-amber-800 text-white">
                <Link href="/enquiry">Request a Quote</Link>
              </Button>
            </AnimateIn>
          </div>
        </section>
      </main>
    </div>
  )
}
