
"use client";
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimateIn, AnimateInStagger } from "@/components/animate-in"
import { InfiniteLogoScroll } from "./components/infinite-logo-scroll"
import { StatCard } from "@/components/stat-card"
import dynamic from "next/dynamic"
import { Suspense ,useState} from "react"



// Dynamic import for TestimonialsPage - loads only when needed
const TestimonialsPage = dynamic(() => import("./testimonials/page"), {
  loading: () => <div className="h-[600px] bg-neutral-50 flex items-center justify-center">
    <div className="animate-pulse text-gray-400">Loading testimonials...</div>
  </div>
})

const clients = [
  { name: "Araqila", logo: "/images/home-icons-all/clients-home-logos/Araqila.png" },
  { name: "Baale", logo: "/images/home-icons-all/clients-home-logos/Baale.png" },
  { name: "Big B Casino", logo: "/images/home-icons-all/clients-home-logos/Big B Casino.png" },
  { name: "Big Daddy", logo: "/images/home-icons-all/clients-home-logos/Big Daddy.png" },
  { name: "Birch", logo: "/images/home-icons-all/clients-home-logos/Birch.png" },
  { name: "Cadillac Casino", logo: "/images/home-icons-all/clients-home-logos/Cadillac Casino.png" },
  { name: "Caravela", logo: "/images/home-icons-all/clients-home-logos/Caravela.png" },
  { name: "Casino Gold", logo: "/images/home-icons-all/clients-home-logos/Casino Gold.png" },
  { name: "Casino Pride", logo: "/images/home-icons-all/clients-home-logos/Casino Pride .png" },
  { name: "Club Mahindra", logo: "/images/home-icons-all/clients-home-logos/Club Mahindra.png" },
  { name: "Deltin", logo: "/images/home-icons-all/clients-home-logos/deltin.png" },
  { name: "Double Tree", logo: "/images/home-icons-all/clients-home-logos/Double Tree.png" },
  { name: "Elements", logo: "/images/home-icons-all/clients-home-logos/Elements.png" },
  { name: "Fairfield", logo: "/images/home-icons-all/clients-home-logos/Fairfield.png" },
  { name: "Fortune", logo: "/images/home-icons-all/clients-home-logos/Fortune.png" },
  { name: "Grand Hyatt", logo: "/images/home-icons-all/clients-home-logos/Grand Hyatt.png" },
  { name: "Hard Rock", logo: "/images/home-icons-all/clients-home-logos/Hard Rock.png" },
  { name: "Hilton", logo: "/images/home-icons-all/clients-home-logos/Hilton.png" },
  { name: "Holiday Inn", logo: "/images/home-icons-all/clients-home-logos/Holiday Inn.png" },
  { name: "Hyatt Centric", logo: "/images/home-icons-all/clients-home-logos/Hyatt Centric.png" },
  { name: "Ibis", logo: "/images/home-icons-all/clients-home-logos/Ibis.png" },
  { name: "JW Marriott", logo: "/images/home-icons-all/clients-home-logos/JW Marriott.png" },
  { name: "Kenilworth", logo: "/images/home-icons-all/clients-home-logos/Kenilworth.png" },
  { name: "Le Meridien", logo: "/images/home-icons-all/clients-home-logos/Le Meridien.png" },
  { name: "Marriott", logo: "/images/home-icons-all/clients-home-logos/Marriott.png" },
  { name: "Neptune", logo: "/images/home-icons-all/clients-home-logos/Neptune.png" },
  { name: "Novotel", logo: "/images/home-icons-all/clients-home-logos/Novotel.png" },
  { name: "Planet Hollywood", logo: "/images/home-icons-all/clients-home-logos/Planet Hollywood.png" },
  { name: "Ramada", logo: "/images/home-icons-all/clients-home-logos/Ramada.png" },
  { name: "SeleQtions", logo: "/images/home-icons-all/clients-home-logos/SeleQtions.png" },
  { name: "SinQ", logo: "/images/home-icons-all/clients-home-logos/SinQ.png" },
  { name: "St. Regis", logo: "/images/home-icons-all/clients-home-logos/St. Regis.png" },
  { name: "Strike", logo: "/images/home-icons-all/clients-home-logos/Strike.png" },
  { name: "Taj", logo: "/images/home-icons-all/clients-home-logos/Taj.png" },
  { name: "The Astor", logo: "/images/home-icons-all/clients-home-logos/The Astor.png" },
  { name: "The Fern", logo: "/images/home-icons-all/clients-home-logos/The Fern.png" },
  { name: "Vivanta", logo: "/images/home-icons-all/clients-home-logos/Vivanta.png" },
  { name: "W Hotels", logo: "/images/home-icons-all/clients-home-logos/W Hotels.png" }
]

// Featured products data for cleaner JSX
const featuredProducts = [
  { title: "Hotels", image: "/images/home-icons-all/featured-images/Hotels.png", tagline: "Uniforms that elevate every guest interaction.", desc: "Tailored for comfort, durability, and brand presence, so your team looks poised through every shift.", href: "/products/hospitality" },
  { title: "Food Production", image: "/images/home-icons-all/featured-images/Food Production.png", tagline: "Refined for discipline. Designed for distinction.", desc: "Designed for controlled environments and strict hygiene standards offering comfort, durability, and a polished professional look.", href: "/products/restaurant-chef" },
  { title: "Food Service", image: "/images/home-icons-all/featured-images/Food Service.png", tagline: "Built for service. Styled for impact.", desc: "Performance-driven uniforms designed for fast-paced floors, long hours, and consistent brand expression.", href: "/products/restaurant-chef" },
  { title: "Spa/Saloons", image: "/images/home-icons-all/featured-images/Spa Image.png", tagline: "Polished uniforms for calm, professional spaces.", desc: "Breathable fabrics and fluid cuts designed for ease of movement and a refined, serene look.", href: "/products/spa" },
  { title: "Healthcare", image: "/images/home-icons-all/featured-images/Healthcare.png", tagline: "Hygiene-first uniforms made for long shifts.", desc: "Durable, easy-care fabrics with functional design, built for comfort, movement, and everyday reliability.", href: "/products/healthcare" },
  { title: "Airlines", image: "/images/home-icons-all/featured-images/Airline.png", tagline: "Elegance in motion at 30,000 feet above the sky", desc: "Breathable, enduring uniforms designed to keep every crew member sharp from check-in to touchdown.", href: "/products/airline" },
  { title: "Corporate", image: "/images/home-icons-all/featured-images/Corporate Image.png", tagline: "Sharp tailoring, around the clock comfort.", desc: "Premium corporate wear built to look composed from meetings to after-hours, without compromise!", href: "/products/corporate" },
  { title: "Education", image: "/images/home-icons-all/featured-images/School-home.png", tagline: "A smarter uniform for smarter institutions.", desc: "Made for comfort and built for supporting students from classrooms to campus life.", href: "/products/school" },
]

export default function Home() {

    const testimonials = [
      {
        quote:
          "Fashion Fabric has been our trusted uniform partner for years. Their attention to detail, quality of fabrics, and timely delivery have made them an invaluable asset to our operations.",
        name: "Hotel Manager",
        company: "5-Star Hotel in Goa",
        logo: "/images/testimonieals/Untitled-4_Hotel Manager.svg"
      },
      {
        quote:
          "The team at Fashion Fabric understands our brand aesthetic perfectly. They've created custom uniforms that our staff love to wear and that perfectly represent our brand image.",
        name: "F&B Director",
        company: "Luxury Resort in Goa",
        logo: "/images/testimonieals/Untitled-4_F&B Director.svg"
      },
      {
        quote:
          "We've been working with Fashion Fabric for over 5 years now. Their consistent quality and reliability make them our go-to uniform supplier for all our properties.",
        name: "Procurement Manager",
        company: "Hotel Chain",
        logo: "/images/testimonieals/Untitled-4_Procurement Manager.svg"
      },
      {
        quote:
          "The custom chef coats designed by Fashion Fabric are not only stylish but also incredibly comfortable and durable. Our kitchen team is very satisfied.",
        name: "Executive Chef",
        company: "Fine Dining Restaurant",
        logo: "/images/testimonieals/Untitled-4_Executive Chef.svg"
      },
      {
        quote:
          "Fashion Fabric's attention to detail and commitment to quality is unmatched. They delivered our large order on time and exceeded our expectations.",
        name: "General Manager",
        company: "Casino in Goa",
        logo: "/images/testimonieals/Untitled-4_General Manager.svg"
      },
      {
        quote:
          "Working with Fashion Fabric has been a pleasure. Their team is responsive, professional, and always willing to go the extra mile to meet our requirements.",
        name: "Operations Director",
        company: "Boutique Hotel",
        logo: "/images/testimonieals/Untitled-4_Operations Director.svg"
      },
    ]
  
    const [index, setIndex] = useState(1)
  
    const prev = () =>
      setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  
    const next = () =>
      setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section - Optimized video loading */}
        <section className="relative w-full h-[70vh] flex items-center justify-center overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster="/images/hero-poster.jpg"
            className="absolute inset-0 w-full h-full object-cover z-0"
          >
            {/* Use optimized video with quality parameter */}
            <source src="/video/V5.webm" type="video/webm" />
            <source src="/video/V5.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 z-10 bg-black/40"></div>
          <div className="container relative z-20 px-4 md:px-6 flex flex-col items-center text-center">
            <AnimateIn>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-4">
                India&apos;s Premier Uniform Manufacturer
              </h1>
            </AnimateIn>
            <AnimateIn delay={0.2}>
              <p className="max-w-[800px] text-lg md:text-xl text-white/90 mb-8">
                End-to-end bespoke uniform solution for teams across industries with over 15 years of excellence 

              </p>
            </AnimateIn>
            <AnimateIn delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-[#2e7d32] hover:bg-[#388e3c] text-white">
                  <Link href="/enquiry">Make an Enquiry</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-white/10 text-white border-white/20 hover:bg-white/20"
                >
                  <Link href="/catalogue">View Catalogue</Link>
                </Button>
              </div>
            </AnimateIn>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="py-16 bg-white">
          <div className="container px-4 md:px-6">
            <AnimateIn>
              <h2 className="text-3xl font-bold text-black pl-6 mb-12">Why Choose Fashion Fabric?</h2>
            </AnimateIn>
            <AnimateInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-neutral-50 p-6 rounded-lg text-center">
                <div className="w-40 h-40 flex items-center justify-center mx-auto mb-4">
                  <Image src="/images/home-icons-all/home-icons/Cost-Effective.svg" alt="Cost-Effective" width={140} height={140} loading="lazy" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[#306f34]">Cost-Effective</h3>
                <p className="text-black">Quality uniforms at competitive prices for all budgets</p>
              </div>
              <div className="bg-neutral-50 p-6 rounded-lg text-center">
                <div className="w-40 h-40 flex items-center justify-center mx-auto mb-4">
                  <Image src="/images/home-icons-all/home-icons/Reliable Service .svg" alt="Custom-Made" width={152} height={152} loading="lazy" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[#306f34]">Bespoke Solution</h3>
                <p className="text-black">Tailored to your exact specifications and requirements</p>
              </div>
              <div className="bg-neutral-50 p-6 rounded-lg text-center">
                <div className="w-40 h-40 flex items-center justify-center mx-auto mb-4">
                  <Image src="/images/home-icons-all/home-icons/Premium Quality.svg" alt="Premium Quality" width={150} height={150} loading="lazy" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[#306f34]">Premium Quality</h3>
                <p className="text-black">Premium fabrics and expert craftsmanship in every piece</p>
              </div>
              <div className="bg-neutral-50 p-6 rounded-lg text-center">
                <div className="w-40 h-40 flex items-center justify-center mx-auto mb-4">
                  <Image src="/images/home-icons-all/home-icons/Bespoke Solution .svg" alt="Bespoke Solution" width={150} height={150} loading="lazy" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[#306f34]">Reliable Services</h3>
                <p className="text-black">Reliable and punctual delivery to meet your deadlines</p>
              </div>
            </AnimateInStagger>
          </div>
        </section>
    
       
   {/* Featured Products - Optimized with mapped data */}
        <section className="py-16 bg-neutral-50">
          <div className="container px-4 md:px-6">
            <AnimateIn>
              <div className="flex flex-col md:flex-row justify-between items-center mb-12 pl-6">
                <h2 className="text-3xl text-[#2e7d32] font-bold">Industry Served </h2>
              </div>
            </AnimateIn>
            <AnimateInStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {featuredProducts.map((product, index) => (
                <div key={product.title} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <Image 
                      src={product.image} 
                      alt={product.title} 
                      fill 
                      className="object-cover transition-transform duration-300 group-hover:scale-110" 
                      loading={index < 4 ? "eager" : "lazy"}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 group-hover:opacity-0 transition-opacity duration-300">
                      <h3 className="text-white text-xl font-bold">{product.title}</h3>
                    </div>
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <h3 className="text-white text-xl font-bold mb-2">{product.title}</h3>
                      <p className="text-white/90 text-sm mb-1 font-bold">{product.tagline}</p>
                      <p className="text-white/80 text-sm mb-4">{product.desc}</p>
                      <Link href={product.href} className="text-white font-medium hover:underline">
                        Learn More →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </AnimateInStagger>
          </div>
        </section>  

        {/* Statistics Section */}
        <section className="py-16 bg-neutral-50">
          <div className="container px-4 md:px-6 ">
            <AnimateIn>
              <h2 className="text-3xl font-bold text-black pl-6 mb-12">Performance You Can Depend On</h2>
            </AnimateIn>
            <AnimateInStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatCard value="10+" label="Industries Served" icon="/images/home-icons-all/our-achivments-icons/Industries Served.svg" />
              <StatCard value="60+" label="Brands Served" icon="/images/home-icons-all/our-achivments-icons/Brands Served.svg" />
              <StatCard value="15+" label="Years of Industry Experience" icon="/images/home-icons-all/our-achivments-icons/Year of experience.svg" />
              <StatCard value="+88%" label="Repeat Customers" icon="/images/home-icons-all/our-achivments-icons/Repeat Customer.svg" />
              <StatCard value="43,700+" label="Completed Orders" icon="/images/home-icons-all/our-achivments-icons/Completed Order.svg" />
              <StatCard value="100,000+" label="Crews outfitted annually" icon="/images/home-icons-all/our-achivments-icons/Crew Outfitted .svg" />
              <StatCard value="+95%" label="On-Time Delivery" icon="/images/home-icons-all/our-achivments-icons/On-time delivery.svg" />
              <StatCard value="4.6/5" label="Client Rating" icon="/images/home-icons-all/our-achivments-icons/Clinet Rating.svg" />
            </AnimateInStagger>
          </div>
        </section>

        {/* Trusted By Section */}
        <section className="py-16 bg-white">
          <div className="container px-4 md:px-6">
            <AnimateIn>
              <h2 className="text-3xl font-bold text-[#2e7d32]  mb-12 pl-6">Trusted By Leading Hospitality Brands</h2>
            </AnimateIn>
            <AnimateIn>
              <InfiniteLogoScroll clients={clients} speed={60} logoSize={160} />
            </AnimateIn>
            <AnimateIn delay={0.5}>
              <div className="text-center mt-8">
                <Link href="/clients" className="text-[#2e7d32] font-medium hover:underline">
                  View All Clients
                </Link>
              </div>
            </AnimateIn>
          </div>
        </section>

      {/* <div className="min-h-screen bg-neutral-50 text-white"> */}
      {/* Title */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <AnimateIn>
            <h1 className="text-3xl font-bold text-[#2e7d32] mb-12 pl-6">
              Client Testimonials
            </h1>
          </AnimateIn>
        </div>
      </section>

      {/* Slider */}
      <section className="relative pb-24 px-4">
        <div className="container mx-auto">
          <div className="relative h-[550px] flex items-center justify-center">
            {testimonials.map((item, i) => {
              // Calculate position relative to center
              let position = i - index
              
              // Handle wrap around
              if (position < -Math.floor(testimonials.length / 2)) {
                position += testimonials.length
              }
              if (position > Math.floor(testimonials.length / 2)) {
                position -= testimonials.length
              }

              const isCenter = position === 0
              const isVisible = Math.abs(position) <= 1

              return (
                <div
                  key={i}
                  className="absolute transition-all duration-700 ease-in-out"
                  style={{
                    left: '50%',
                    transform: `translateX(calc(-50% + ${position * 380}px)) scale(${isCenter ? 1 : 0.85})`,
                    zIndex: isCenter ? 20 : 10 - Math.abs(position),
                    opacity: isVisible ? (isCenter ? 1 : 0.5) : 0,
                    pointerEvents: isVisible ? 'auto' : 'none',
                  }}
                >
                  <div
                    className={`bg-[#306f34] text-black rounded-2xl shadow-2xl
                      transition-all duration-700 w-[360px] flex flex-col
                      ${isCenter ? 'h-[480px] p-10' : 'h-[400px] p-8'}
                    `}
                  >
                    <h3 className={`font-semibold text-center mb-4 text-white ${isCenter ? 'text-2xl' : 'text-xl'}`}>
                      {item.name}
                    </h3>

                    <p className={`leading-relaxed text-center mb-8 text-white flex-grow ${isCenter ? 'text-base' : 'text-sm'}`}>
                      {item.quote}
                    </p>

                    <div className="flex justify-center text-amber-500 mb-3">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <span key={i} className={isCenter ? 'text-2xl' : 'text-xl'}>★</span>
                      ))}
                    </div>

                    <p className={`text-center font-semibold tracking-wide text-white mb-0 ${isCenter ? 'text-base' : 'text-sm'}`}>
                      {item.company}
                    </p>
                    
                    <div className="flex justify-center items-end ">
                      <img src={item.logo} alt={`${item.company} logo`} className={`${isCenter ? 'h-[178px]' : 'h-32'}`} />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Left Button */}
          <button
            onClick={prev}
            className="absolute left-6 top-1/2 -translate-y-1/2
                       text-black text-4xl hover:opacity-70 z-30"
          >
            ‹
          </button>

          {/* Right Button */}
          <button
            onClick={next}
            className="absolute right-6 top-1/2 -translate-y-1/2
                       text-black text-4xl hover:opacity-70 z-30"
          >
            ›
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-10 hidden">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-3 w-3 rounded-full transition ${
                  index === i ? "bg-black" : "bg-neutral-400"
                }`}
              />
            ))}
          </div>
        </div>
      </section>
    {/* </div> */}
    {/* Testimonials Section - Dynamically loaded
    <Suspense fallback={<div className="h-[600px] bg-neutral-50" />}>
      <TestimonialsPage />
    </Suspense> */}

    {/* Mission Section */}
    <section className="py-16 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start md:items-center max-w-6xl mx-auto">
          <AnimateIn className="md:w-1/3 md:pl-12">
            <h2 className="text-3xl flex font-bold text-[#2e7d32] leading-tight">Our<br />Mission</h2>
          </AnimateIn>
        
          <AnimateIn delay={0.2} className="md:w-2/3">
            <p className="text-lg md:text-xl text-black leading-relaxed italic ">
             At Fashion Fabric, our mission is to  redefine how uniforms are made and managed; Setting higher standards for quality, performance, and reliability at every scale.
            </p>
          </AnimateIn>
        </div>
      </div>
    </section>

        
      </main>
    </div>
  )
}
