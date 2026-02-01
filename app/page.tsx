import Link from "next/link"
import Image from "next/image"
import { MapPin, Mail, Phone, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimateIn, AnimateInStagger } from "@/components/animate-in"
import { InfiniteLogoScroll } from "./components/infinite-logo-scroll"
import TestimonialsPage from "./testimonials/page"
const clients = [
  { name: "Araqila", logo: "/images/clients-home-logos/Araqila.png" },
  { name: "Baale", logo: "/images/clients-home-logos/Baale.png" },
  { name: "Big B Casino", logo: "/images/clients-home-logos/Big B Casino.png" },
  { name: "Big Daddy", logo: "/images/clients-home-logos/Big Daddy.png" },
  { name: "Birch", logo: "/images/clients-home-logos/Birch.png" },
  { name: "Cadillac Casino", logo: "/images/clients-home-logos/Cadillac Casino.png" },
  { name: "Caravela", logo: "/images/clients-home-logos/Caravela.png" },
  { name: "Casino Gold", logo: "/images/clients-home-logos/Casino Gold.png" },
  { name: "Casino Pride", logo: "/images/clients-home-logos/Casino Pride .png" },
  // { name: "Cidade de Goa", logo: "/images/clients-home-logos/Cidade de Goa .png" },
  { name: "Club Mahindra", logo: "/images/clients-home-logos/Club Mahindra.png" },
  { name: "Deltin", logo: "/images/clients-home-logos/deltin.png" },
  { name: "Double Tree", logo: "/images/clients-home-logos/Double Tree.png" },
  { name: "Elements", logo: "/images/clients-home-logos/Elements.png" },
  { name: "Fairfield", logo: "/images/clients-home-logos/Fairfield.png" },
  { name: "Fortune", logo: "/images/clients-home-logos/Fortune.png" },
  { name: "Grand Hyatt", logo: "/images/clients-home-logos/Grand Hyatt.png" },
  { name: "Hard Rock", logo: "/images/clients-home-logos/Hard Rock.png" },
  { name: "Hilton", logo: "/images/clients-home-logos/Hilton.png" },
  { name: "Holiday Inn", logo: "/images/clients-home-logos/Holiday Inn.png" },
  { name: "Hyatt Centric", logo: "/images/clients-home-logos/Hyatt Centric.png" },
  { name: "Ibis", logo: "/images/clients-home-logos/Ibis.png" },
  { name: "JW Marriott", logo: "/images/clients-home-logos/JW Marriott.png" },
  { name: "Kenilworth", logo: "/images/clients-home-logos/Kenilworth.png" },
  { name: "Le Meridien", logo: "/images/clients-home-logos/Le Meridien.png" },
  { name: "Marriott", logo: "/images/clients-home-logos/Marriott.png" },
  { name: "Neptune", logo: "/images/clients-home-logos/Neptune.png" },
  { name: "Novotel", logo: "/images/clients-home-logos/Novotel.png" },
  { name: "Planet Hollywood", logo: "/images/clients-home-logos/Planet Hollywood.png" },
  { name: "Ramada", logo: "/images/clients-home-logos/Ramada.png" },
  { name: "SeleQtions", logo: "/images/clients-home-logos/SeleQtions.png" },
  { name: "SinQ", logo: "/images/clients-home-logos/SinQ.png" },
  { name: "St. Regis", logo: "/images/clients-home-logos/St. Regis.png" },
  { name: "Strike", logo: "/images/clients-home-logos/Strike.png" },
  { name: "Taj", logo: "/images/clients-home-logos/Taj.png" },
  { name: "The Astor", logo: "/images/clients-home-logos/The Astor.png" },
  { name: "The Fern", logo: "/images/clients-home-logos/The Fern.png" },
  { name: "Vivanta", logo: "/images/clients-home-logos/Vivanta.png" },
  { name: "W Hotels", logo: "/images/clients-home-logos/W Hotels.png" }
]

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full h-[70vh] flex items-center justify-center overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0"
          >
            <source src="https://res.cloudinary.com/dluiqgiqj/video/upload/v1769069629/V5_hszso4.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 z-10 bg-black/40"></div>
          <div className="container relative z-20 px-4 md:px-6 flex flex-col items-center text-center">
            <AnimateIn>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-4">
                India&apos;s Premier Uniform Manufactures
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
              <h2 className="text-3xl font-bold text-center mb-12">Why Choose Fashion Fabric?</h2>
            </AnimateIn>
            <AnimateInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-neutral-50 p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-[#e8f5e9] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg fill="#2e7d32" width="32" height="32" viewBox="-96 0 512 512" xmlns="http://www.w3.org/2000/svg" stroke="#2e7d32"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M308 96c6.627 0 12-5.373 12-12V44c0-6.627-5.373-12-12-12H12C5.373 32 0 37.373 0 44v44.748c0 6.627 5.373 12 12 12h85.28c27.308 0 48.261 9.958 60.97 27.252H12c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h158.757c-6.217 36.086-32.961 58.632-74.757 58.632H12c-6.627 0-12 5.373-12 12v53.012c0 3.349 1.4 6.546 3.861 8.818l165.052 152.356a12.001 12.001 0 0 0 8.139 3.182h82.562c10.924 0 16.166-13.408 8.139-20.818L116.871 319.906c76.499-2.34 131.144-53.395 138.318-127.906H308c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12h-58.69c-3.486-11.541-8.28-22.246-14.252-32H308z"></path></g></svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Affordable</h3>
                <p className="text-neutral-600">Quality uniforms at competitive prices for all budgets</p>
              </div>
              <div className="bg-neutral-50 p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-[#e8f5e9] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg fill="#2e7d32" width="32" height="32" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" stroke="#2e7d32"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M28 3L28 4L26 4L26 12L15 12L15 10L13 10L13 12L10 12C7.28125 12 5 14.171875 5 17C5 18.300781 5.25 20.75 5.5 22.96875C5.75 25.1875 6 27.125 6 27.125L6.125 28L10 28L10 30L9 30L9 32L13 32L13 30L12 30L12 28L15.78125 28L16.59375 24.75C16.707031 24.300781 17.101563 24 17.5625 24L22.84375 24C23.8125 24 24.652344 24.664063 24.8125 25.59375C24.90625 26.136719 25 27.597656 25 28.5625C25 29.527344 24.910156 30.839844 24.8125 31.40625C24.652344 32.335938 23.8125 33 22.84375 33L8 33C5.25 33 3 35.25 3 38L3 43C3 44.644531 4.355469 46 6 46L8 46L8 47L13 47L13 46L33 46L33 47L38 47L38 46L40 46C41.644531 46 43 44.644531 43 43L43 24L47 24L47 15L42.5625 15C41.785156 13.242188 40.035156 12 38 12L36 12L36 8L34 8L34 12L32 12L32 4L30 4L30 3 Z M 28 6L30 6L30 12L28 12 Z M 10 14L11 14L11 23L13 23L13 14L38 14C39.667969 14 41 15.332031 41 17L41 43C41 43.566406 40.566406 44 40 44L6 44C5.433594 44 5 43.566406 5 43L5 38C5 36.332031 6.332031 35 8 35L22.84375 35C24.753906 35 26.449219 33.65625 26.78125 31.75C26.925781 30.929688 27 29.640625 27 28.5625C27 27.484375 26.929688 26.09375 26.78125 25.25C26.449219 23.34375 24.753906 22 22.84375 22L17.5625 22C16.191406 22 14.988281 22.953125 14.65625 24.28125L14.21875 26L7.90625 26C7.832031 25.417969 7.695313 24.484375 7.5 22.75C7.25 20.546875 7 18.011719 7 17C7 15.203125 8.300781 14 10 14 Z M 34 17C32.355469 17 31 18.355469 31 20C31 21.644531 32.355469 23 34 23C35.644531 23 37 21.644531 37 20C37 18.355469 35.644531 17 34 17 Z M 43 17L45 17L45 22L43 22 Z M 34 19C34.5625 19 35 19.4375 35 20C35 20.5625 34.5625 21 34 21C33.4375 21 33 20.5625 33 20C33 19.4375 33.4375 19 34 19 Z M 34 27C31.25 27 29 29.25 29 32C29 34.75 31.25 37 34 37C36.75 37 39 34.75 39 32C39 29.25 36.75 27 34 27 Z M 34 29C35.667969 29 37 30.332031 37 32C37 33.667969 35.667969 35 34 35C32.332031 35 31 33.667969 31 32C31 30.332031 32.332031 29 34 29Z"></path></g></svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Custom-Made</h3>
                <p className="text-neutral-600">Tailored to your exact specifications and requirements</p>
              </div>
              <div className="bg-neutral-50 p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-[#e8f5e9] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[#2e7d32]"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Quality</h3>
                <p className="text-neutral-600">Premium fabrics and expert craftsmanship in every piece</p>
              </div>
              <div className="bg-neutral-50 p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-[#e8f5e9] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[#2e7d32]"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Timely Delivery</h3>
                <p className="text-neutral-600">Reliable and punctual delivery to meet your deadlines</p>
              </div>
            </AnimateInStagger>
          </div>
        </section>
        {/* Testimonials Section */}
    <TestimonialsPage />
        {/* Featured Products */}
        <section className="py-16 bg-neutral-50">
          <div className="container px-4 md:px-6">
            <AnimateIn>
              <div className="flex flex-col md:flex-row justify-between items-center mb-12">
                <h2 className="text-3xl font-bold">Featured Collection</h2>
                <Link href="/catalogue" className="group flex items-center text-[#2e7d32] font-medium mt-4 md:mt-0">
                  View Our Catalogues
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </AnimateIn>
            <AnimateInStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="aspect-[4/3] relative">
                  <Image src="/images/catalogue/chef-coats.jpg" alt="Chef Coats" fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Chef Coats</h3>
                  <p className="text-neutral-600 mb-4">Professional chef coats designed for comfort and durability</p>
                  <Link href="/catalogue" className="text-[#2e7d32] font-medium hover:underline">
                    Learn More
                  </Link>
                </div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="aspect-[4/3] relative">
                  <Image src="/images/catalogue/air-hostess.png" alt="Hostess Uniforms" fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Hostess Uniforms</h3>
                  <p className="text-neutral-600 mb-4">Elegant and stylish uniforms for front-of-house staff</p>
                  <Link href="/catalogue" className="text-[#2e7d32] font-medium hover:underline">
                    Learn More
                  </Link>
                </div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="aspect-[4/3] relative">
                  <Image src="/images/catalogue/CORPORATE-WEAR-SUIT.png" alt="Corporate Wear" fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Corporate Wear</h3>
                  <p className="text-neutral-600 mb-4">Professional attire for a polished corporate image for men and women</p>
                  <Link href="/catalogue" className="text-[#2e7d32] font-medium hover:underline">
                    Learn More
                  </Link>
                </div>
              </div>
            </AnimateInStagger>
          </div>
        </section>

        {/* Trusted By Section */}
        <section className="py-16 bg-white">
          <div className="container px-4 md:px-6">
            <AnimateIn>
              <h2 className="text-3xl font-bold text-center mb-12">Trusted By Leading Hospitality Brands</h2>
            </AnimateIn>
            <AnimateIn>
              <InfiniteLogoScroll clients={clients} speed={60} />
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

        {/* Map Section
        <section className="py-16 bg-neutral-50">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <AnimateIn direction="left">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Visit Our Showroom</h2>
                  <div className="flex items-start mb-4">
                    <MapPin className="h-5 w-5 text-[#2e7d32] mt-1 mr-3 flex-shrink-0" />
                    <p className="text-neutral-600">
                      Fashion Fabric, Shop No. 8, Block - II, Dukle Heaven, Near Old Yamaha Showroom, Santa Inez, Panaji, Taleigao, Goa 403001
                    </p>
                  </div>
                  <div className="flex items-center mb-4">
                    <Phone className="h-5 w-5 text-[#2e7d32] mr-3 flex-shrink-0" />
                    <p className="text-neutral-600">+91 9867275524</p>
                  </div>
                  <div className="flex items-center mb-4">
                    <Mail className="h-5 w-5 text-[#2e7d32] mr-3 flex-shrink-0" />
                    <p className="text-neutral-600">fashionfabric@rocketmail.com</p>
                  </div>
                  <div className="flex items-start mb-6">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5 text-[#2e7d32] mt-1 mr-3 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" 
                      />
                    </svg>
                    <div className="text-neutral-600">
                      <p className="font-medium mb-1">Office Hours:</p>
                      <p>Monday to Saturday: 10:00 AM - 8:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                  <Button asChild size="lg" className="bg-[#2e7d32] hover:bg-[#1b5e20] text-white">
                    <Link href="/enquiry">Contact Us</Link>
                  </Button>
                </div>
              </AnimateIn>
              <AnimateIn direction="right">
                <div className="h-[400px] bg-neutral-200 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3845.3302675743397!2d73.82595091482943!3d15.493999589246702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfc0c8818cdc8b%3A0x94ccf697e9a90b3c!2sDukle%20Heaven%2C%20Santa%20Inez%2C%20Panaji%2C%20Goa%20403001!5e0!3m2!1sen!2sin!4v1651234567890!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </AnimateIn>
            </div>
          </div>
        </section> */}
      </main>
    </div>
  )
}
