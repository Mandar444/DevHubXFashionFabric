import Link from "next/link"
import Image from "next/image"
import { MapPin, Mail, Phone, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimateIn, AnimateInStagger } from "@/components/animate-in"
import { InfiniteLogoScroll } from "./components/infinite-logo-scroll"
import TestimonialsPage from "./testimonials/page"
import { StatCard } from "@/components/stat-card"
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
  // { name: "Cidade de Goa", logo: "/images/home-icons-all/clients-home-logos/Cidade de Goa .png" },
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
              <h2 className="text-3xl font-bold text-black pl-6 mb-12">Why Choose Fashion Fabric?</h2>
            </AnimateIn>
            <AnimateInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-neutral-50 p-6 rounded-lg text-center">
                <div className="w-32 h-32  flex items-center justify-center mx-auto mb-4">
                  <Image src="/images/home-icons-all/home-icons/1.png" alt="Affordable" width={100} height={100} />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[#306f34]">Affordable</h3>
                <p className=" text-black">Quality uniforms at competitive prices for all budgets</p>
              </div>
              <div className="bg-neutral-50 p-6 rounded-lg text-center">
                <div className="w-32 h-32   flex items-center justify-center mx-auto mb-4">
                  <Image src="/images/home-icons-all/home-icons/2.png" alt="Custom-Made" width={100} height={100} />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[#306f34]">Custom-Made</h3>
                <p className=" text-black">Tailored to your exact specifications and requirements</p>
              </div>
              <div className="bg-neutral-50 p-6 rounded-lg text-center">
                <div className="w-32 h-32   flex items-center justify-center mx-auto mb-4">
                  <Image src="/images/home-icons-all/home-icons/3.png" alt="Quality" width={100} height={100} />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[#306f34]">Quality</h3>
                <p className=" text-black">Premium fabrics and expert craftsmanship in every piece</p>
              </div>
              <div className="bg-neutral-50 p-6 rounded-lg text-center">
                <div className="w-32 h-32   flex items-center justify-center mx-auto mb-4">
                  <Image src="/images/home-icons-all/home-icons/4.png" alt="Timely Delivery" width={100} height={100} />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[#306f34]">Timely Delivery</h3>
                <p className=" text-black">Reliable and punctual delivery to meet your deadlines</p>
              </div>
            </AnimateInStagger>
          </div>
        </section>
    
       
   {/* Featured Products */}
        <section className="py-16 bg-neutral-50">
          <div className="container px-4 md:px-6">
            <AnimateIn>
              <div className="flex flex-col md:flex-row justify-between items-center mb-12 pl-6">
                <h2 className="text-3xl text-[#2e7d32] font-bold">Industry Served </h2>
               
              </div>
            </AnimateIn>
            <AnimateInStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              
              {/* Hotels */}
              <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image src="/images/home-icons-all/featured-images/Hotels.png" alt="Hotels" fill className="object-cover transition-transform duration-300 group-hover:scale-110" />
                  
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 group-hover:opacity-0 transition-opacity duration-300">
                    <h3 className="text-white text-xl font-bold">Hotels</h3>
                  </div>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <h3 className="text-white text-xl font-bold mb-2">Hotels</h3>
                    <p className="text-white/90 text-sm mb-1 font-bold">Uniforms that elevate every guest interaction.</p>
                    <p className="text-white/80 text-sm mb-4">Tailored for comfort, durability, and brand presence, so your team looks poised through every shift.</p>
                    <Link href="/products/hospitality" className="text-white font-medium hover:underline">
                      Learn More →
                    </Link>
                  </div>
                </div>
              </div>

              {/* Food Production */}
              <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image src="/images/home-icons-all/featured-images/Food Production.png" alt="Food Production" fill className="object-cover transition-transform duration-300 group-hover:scale-110" />
                  
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 group-hover:opacity-0 transition-opacity duration-300">
                    <h3 className="text-white text-xl font-bold">Food Production</h3>
                  </div>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <h3 className="text-white text-xl font-bold mb-2">Food Production</h3>
                    <p className="text-white/90 text-sm mb-1 font-bold">Refined for discipline. Designed for distinction.</p>
                    <p className="text-white/80 text-sm mb-4">Designed for controlled environments and strict hygiene standards offering comfort, durability, and a polished professional look..</p>
                    <Link href="/products/restaurant-chef" className="text-white font-medium hover:underline">
                      Learn More →
                    </Link>
                  </div>
                </div>
              </div>

              {/* Restaurants & Bars */}
              <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image src="/images/home-icons-all/featured-images/Food Service.png" alt="Food Service" fill className="object-cover transition-transform duration-300 group-hover:scale-110" />
                  
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 group-hover:opacity-0 transition-opacity duration-300">
                    <h3 className="text-white text-xl font-bold">Food Service</h3>
                  </div>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <h3 className="text-white text-xl font-bold mb-2">Food Service</h3>
                    <p className="text-white/90 text-sm mb-1 font-bold">Built for service. Styled for impact.</p>
                    <p className="text-white/80 text-sm mb-4">Performance-driven uniforms designed for fast-paced floors, long hours, and consistent brand expression.</p>
                    <Link href="/products/restaurant-chef" className="text-white font-medium hover:underline">
                      Learn More →
                    </Link>
                  </div>
                </div>
              </div>

              {/* Spa/Saloons */}
              <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image src="/images/home-icons-all/featured-images/Spa Image.png" alt="Spa/Saloons" fill className="object-cover transition-transform duration-300 group-hover:scale-110" />
                  
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 group-hover:opacity-0 transition-opacity duration-300">
                    <h3 className="text-white text-xl font-bold">Spa/Saloons</h3>
                  </div>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <h3 className="text-white text-xl font-bold mb-2">Spa/Saloons</h3>
                    <p className="text-white/90 text-sm mb-1 font-bold">Polished uniforms for calm, professional spaces.</p>
                    <p className="text-white/80 text-sm mb-4">Breathable fabrics and fluid cuts designed for ease of movement and a refined, serene look.</p>
                    <Link href="/products/spa" className="text-white font-medium hover:underline">
                      Learn More →
                    </Link>
                  </div>
                </div>
              </div>

              {/* Healthcare */}
              <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image src="/images/home-icons-all/featured-images/Healthcare.png" alt="Healthcare" fill className="object-cover transition-transform duration-300 group-hover:scale-110" />
                  
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 group-hover:opacity-0 transition-opacity duration-300">
                    <h3 className="text-white text-xl font-bold">Healthcare</h3>
                  </div>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <h3 className="text-white text-xl font-bold mb-2">Healthcare</h3>
                    <p className="text-white/90 text-sm mb-1 font-bold">Hygiene-first uniforms made for long shifts.</p>
                    <p className="text-white/80 text-sm mb-4">Durable, easy-care fabrics with functional design, built for comfort, movement, and everyday reliability.</p>
                    <Link href="/products/healthcare" className="text-white font-medium hover:underline">
                      Learn More →
                    </Link>
                  </div>
                </div>
              </div>

              {/* Airlines */}
              <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image src="/images/home-icons-all/featured-images/Airline.png" alt="Airlines" fill className="object-cover transition-transform duration-300 group-hover:scale-110" />
                  
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 group-hover:opacity-0 transition-opacity duration-300">
                    <h3 className="text-white text-xl font-bold">Airlines</h3>
                  </div>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <h3 className="text-white text-xl font-bold mb-2">Airlines</h3>
                    <p className="text-white/90 text-sm mb-1 font-bold">Elegance in motion at 30,000 feet above the sky</p>
                    <p className="text-white/80 text-sm mb-4">Breathable, enduring uniforms designed to keep every crew member sharp from check-in to touchdown.</p>
                    <Link href="/products/airline" className="text-white font-medium hover:underline">
                      Learn More →
                    </Link>
                  </div>
                </div>
              </div>

              {/* Corporate */}
              <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image src="/images/home-icons-all/featured-images/Corporate Image.png" alt="Corporate" fill className="object-cover transition-transform duration-300 group-hover:scale-110" />
                  
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 group-hover:opacity-0 transition-opacity duration-300">
                    <h3 className="text-white text-xl font-bold">Corporate</h3>
                  </div>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <h3 className="text-white text-xl font-bold mb-2">Corporate</h3>
                    <p className="text-white/90 text-sm mb-1 font-bold">Sharp tailoring, around the clock comfort.</p>
                    <p className="text-white/80 text-sm mb-4">Premium corporate wear built to look composed from meetings to after-hours, without compromise!</p>
                    <Link href="/products/corporate" className="text-white font-medium hover:underline">
                      Learn More →
                    </Link>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image src="/images/home-icons-all/featured-images/School-home.png" alt="Education" fill className="object-cover transition-transform duration-300 group-hover:scale-110" />
                  
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 group-hover:opacity-0 transition-opacity duration-300">
                    <h3 className="text-white text-xl font-bold">Education</h3>
                  </div>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <h3 className="text-white text-xl font-bold mb-2">Education</h3>
                    <p className="text-white/90 text-sm mb-1 font-bold">A smarter uniform for smarter institutions.</p>
                    <p className="text-white/80 text-sm mb-4">Made for comfort and built for supporting students from classrooms to campus life.</p>
                    <Link href="/products/school" className="text-white font-medium hover:underline">
                      Learn More →
                    </Link>
                  </div>
                </div>
              </div>

            </AnimateInStagger>
          </div>
        </section>  
 {/* Statistics Section */}
        <section className="py-16 bg-neutral-50">
          <div className="container px-4 md:px-6 ">
            <AnimateIn>
              <h2 className="text-3xl font-bold text-black pl-6 mb-12">Our Achievements</h2>
            </AnimateIn>
            <AnimateInStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatCard value="10+" label="Industries Served" icon="/images/home-icons-all/our-achivments-icons/Industries Served.svg" />
              <StatCard value="60+" label="Brands Served" icon="/images/home-icons-all/our-achivments-icons/Brands Served.svg" />
              <StatCard value="15+" label="Years of Industry Experience" icon="/images/home-icons-all/our-achivments-icons/Year of experience.svg" />
              <StatCard value="+88%" label="Repeat Customers" icon="/images/home-icons-all/our-achivments-icons/Repeat Customer.svg" />
              <StatCard value="27,500+" label="Completed Orders" icon="/images/home-icons-all/our-achivments-icons/Completed Order.svg" />
              <StatCard value="100,000+" label="Crews outfitted annually" icon="/images/home-icons-all/our-achivments-icons/Crew Outfitted .svg" />
              <StatCard value="+92%" label="On-Time Delivery" icon="/images/home-icons-all/our-achivments-icons/On-time delivery.svg" />
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

     
    {/* Testimonials Section */}
    <TestimonialsPage />

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
