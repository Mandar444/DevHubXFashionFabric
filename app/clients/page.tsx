import Image from "next/image"
import { AnimateIn, AnimateInStagger } from "@/components/animate-in"

const clients = [
  { name: "Araqila", logo: "/images/clients/araqila.png" },
  { name: "Baale Resort", logo: "/images/clients/baale_new.png" },
  { name: "Big B Casino", logo: "/images/clients/cropped-big-b-casino_new.png" },
  { name: "Big Daddy Casino", logo: "/images/clients/big_daddy-new.png" },
  { name: "Birch by Romeo Lane", logo: "/images/clients/birch_new.png" },
  { name: "Cadillac Casino", logo: "/images/clients/cadillac-casion.png" },
  { name: "Caravela Beach Resort", logo: "/images/clients/caravela-beach.png" },
  { name: "Casino Pride", logo: "/images/clients/casino-pride_new.png" },
  { name: "Club Mahindra", logo: "/images/clients/club-mahindra_new.png" },
  { name: "Deltin Group", logo: "/images/clients/DeltinOnLogo_new.png" },
  { name: "Double Tree by Hilton", logo: "/images/clients/double-tree_new.png" },
  { name: "Elements by Rosetta", logo: "/images/clients/elements.png" },
  { name: "Fairfield by Marriots", logo: "/images/clients/fair-field.png" },
  { name: "Fortune by ITC", logo: "/images/clients/fortune_new.png" },
  { name: "Marriott", logo: "/images/clients/Goa_Marriott_Resort.jpg" },
  { name: "Grand Hyatt", logo: "/images/clients/grand_hyatt_new.png" },
  { name: "Hard Rock Hotel", logo: "/images/clients/HardRockHotelLogo-White3x_new.png" },
  { name: "Hilton", logo: "/images/clients/hilton_new_logo.png" },
  { name: "Holiday Inn", logo: "/images/clients/hi_logo01.png" },
  { name: "Hyatt Centric", logo: "/images/clients/hyatt_centric.png" },
  { name: "Ibis Styles", logo: "/images/clients/ibis_new.png" },
  { name: "JW Marriott", logo: "/images/clients/jw_marriot_new.png" },
  { name: "Kenilworth", logo: "/images/clients/Kenilworth_Logo_mcxx3d_ivmncx.png" },
  { name: "La Estoria", logo: "/images/clients/seleqtions-brand-icon_new.png" },
  { name: "Le Meridien", logo: "/images/clients/le_meridien.png" },
  { name: "Neptune Hotels", logo: "/images/clients/neptune_new.png" },
  { name: "Novotel", logo: "/images/clients/novotel.png" },
  { name: "Planet Hollywood", logo: "/images/clients/planet-hollywod.png" },
  { name: "Puppy's Casino Gold", logo: "/images/clients/Puppy-Casino-Gold-Logo_new.png" },
  { name: "Ramada by Wyndham", logo: "/images/clients/ramada_new.png" },
  { name: "Sinq Prive", logo: "/images/clients/sinq-prive_new.webp" },
  { name: "St. Regis", logo: "/images/clients/st-regis-new.png" },
  { name: "Strike Casino", logo: "/images/clients/strike_casino.png" },
  { name: "Vivanta by Taj", logo: "/images/clients/icon-vivanta.png" },
  { name: "Taj Cidade de Goa", logo: "/images/clients/taj_cidade_de_new.png" },
  { name: "Taj Fort Aguada Resort & Spa", logo: "/images/clients/taj_aguada_resort.png" },

  { name: "Taj Resort & Convention Centre", logo: "/images/clients/taj_convention_centre.png" },
  { name: "The Astor", logo: "/images/clients/astor-goa_new.png" },
  { name: "The Fern Residency", logo: "/images/clients/fern-hotels_new.png" },
  { name: "W Goa", logo: "/images/clients/wh-logo_new.png" }
  // { name: "Taj Aguada Resort", logo: "/images/clients/taj_aguada_resort.png", darkBg: true },
  // { name: "Taj Holiday Village", logo: "/images/clients/taj_holiday_village.png", darkBg: true }
]

export default function ClientsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full h-[40vh] flex items-center justify-center overflow-hidden">
          <Image
            src="/images/bg-imges-hero-sections/image-01.jpg"
            alt="Our Clients Background"
            fill
            className="object-cover z-0"
            priority
          />
          <div className="absolute inset-0 z-10 bg-black/40"></div>
          <div className="container relative z-20 px-4 md:px-6 flex flex-col items-center text-center">
            <AnimateIn>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-4">
                Our Prestigious Clients
              </h1>
            </AnimateIn>
            <AnimateIn delay={0.2}>
              <p className="max-w-[800px] text-lg text-white/90">Trusted by the leading brand</p>
            </AnimateIn>
          </div>
        </section>

        {/* Clients Grid */}
        <section className="py-16 bg-white">
          <div className="container px-4 md:px-6">
            <AnimateIn>
              <p className="text-center text-black mb-12 max-w-[800px] mx-auto">
                At Fashion Fabric, we take pride in serving some of the most prestigious hospitality establishments. Our commitment to quality and excellence has made us the preferred uniform supplier for these
                renowned brands.
              </p>
            </AnimateIn>
            <AnimateInStagger
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
              staggerDelay={0.02}
            >
              {clients.map((client, index) => (
                <div
                  key={index}
                  className="rounded-lg p-6 flex flex-col items-center justify-center h-40 shadow-sm hover:shadow-md transition-shadow bg-neutral-50"
                >
                  <div className="h-16 w-full flex items-center justify-center mb-3">
                    <Image
                      src={client.logo}
                      alt={client.name}
                      width={100}
                      height={64}
                      className="object-contain max-w-full max-h-full"
                    />
                  </div>
                  <p className="text-sm font-medium text-black text-center w-full leading-tight">
                    {client.name}
                  </p>
                </div>
              ))}
            </AnimateInStagger>
          </div>
        </section>

        {/* Testimonial Section - Formatted like Mission Layout */}
        <section className="py-16 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start md:items-center max-w-6xl mx-auto">
              <AnimateIn className="md:w-1/3 md:pl-12">
                <h2 className="text-3xl flex font-bold text-[#2e7d32] leading-tight">What Our<br />Clients Say</h2>
              </AnimateIn>
            
              <AnimateIn delay={0.2} className="md:w-2/3">
                   <div className="bg-[#306f34] p-6 rounded-2xl shadow-lg relative flex flex-col md:flex-row items-center gap-6">
                   <div className="flex-1">
                      <div className="flex gap-1 mb-3">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-5 h-5 fill-yellow-400"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <p className="text-lg text-white leading-relaxed italic mb-4">
                        "Fashion Fabric has been our trusted uniform partner for years. Their attention to detail, quality of fabrics, and timely delivery have made them an invaluable asset to our operations. The staff uniforms they provide perfectly represent our brand image."
                      </p>
                      <div>
                        <p className="font-semibold text-white">Hotel Manager</p>
                        <p className="text-sm text-white/80">5-Star Hotel in Goa</p>
                      </div>
                   </div>
                   
                   <div className="relative w-32 h-32 md:w-48 md:h-48 flex-shrink-0 bg-white/10 rounded-full flex items-center justify-center p-4">
                      <Image 
                        src="/images/testimonieals/Untitled-4_Hotel Manager.svg" 
                        alt="Generic Hotel Manager" 
                        width={150}
                        height={150}
                        className="object-contain"
                      />
                   </div>
                </div>
              </AnimateIn>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
