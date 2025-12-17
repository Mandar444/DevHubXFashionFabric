import Image from "next/image"
import { AnimateIn, AnimateInStagger } from "@/components/animate-in"

const clients = [
  { name: "The Astor", logo: "/images/clients/astor-goa.png" },
  { name: "Big daddy casino", logo: "/images/clients/big_daddy.png" },
  { name: "Cadillac casino", logo: "/images/clients/cadillac-diamond.webp" },
  { name: "Goa marriot", logo: "/images/clients/Goa_Marriott_Resort.avif" },
  { name: "Fairfield by marriots", logo: "/images/clients/fairfield-logo" },
  { name: "W goa", logo: "/images/clients/wh-logo-fullcolor-hws-13225.avif" },
  { name: "St regies", logo: "/images/clients/xr-xr-logo-l-33456.avif" },
  { name: "Holiday inn goa", logo: "/images/clients/hi_logo.svg" },
  { name: "Kenilworth", logo: "/images/clients/Kenilworth_Logo_mcxx3d_ivmncx.avif", darkBg: true },
  { name: "Taj fort village", logo: "/images/clients/taj.png", darkBg: true },
  { name: "Taj fort aguda", logo: "/images/clients/taj.png", darkBg: true },
  { name: "Sinq prive", logo: "/images/clients/sinq-logo-blue.webp" },
  { name: "Double tree by hilton", logo: "/images/clients/double-tree.svg" },
  { name: "Taj by vivanta", logo: "/images/clients/icon-vivanta.png", darkBg: true },
  { name: "Grand hyatt", logo: "/images/clients/hyatt-logo.svg" },
  { name: "Casino pride", logo: "/images/clients/casino-pride.png" },
  { name: "Deltin", logo: "/images/clients/DeltinOnLogo1.png" },  
  { name: "The Fern", logo: "/images/clients/fern-hotels.svg" },
  { name: "Jw marriot", logo: "/images/clients/jw_marriot.avif" },
  { name: "Ramada", logo: "/images/clients/ramada.svg" },
  { name: "Big B Casino", logo: "/images/clients/cropped-big-b-casino-web.png" },
  { name: "Club Mahindra", logo: "/images/clients/club-mahindra.png" },
  { name: "Puppy's Casino Gold", logo: "/images/clients/Puppy-Casino-Gold-Logo.png" },
  { name: "Fortune Hotels", logo: "/images/clients/fortune" },
  { name: "Baale Resort", logo: "/images/clients/baale.webp" },
  { name: "Hard Rock Hotel", logo: "/images/clients/HardRockHotelLogo-White3x.png", darkBg: true },
  { name: "Taj Resort & Convention Centre", logo: "/images/clients/taj.png", darkBg: true },
  { name: "Taj Cidade de Goa", logo: "/images/clients/taj.png", darkBg: true },
  { name: "La Estoria", logo: "/images/clients/seleqtions-brand-icon.png" },
  { name: "Ibis Styles", logo: "/images/clients/ibis.png" },
  { name: "Birch by Romeo Lane", logo: "/images/clients/birch.png" }
]

export default function ClientsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full h-[40vh] bg-[#1b5e20] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0 bg-black/40"></div>
          <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center">
            <AnimateIn>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-4">
                Our Prestigious Clients
              </h1>
            </AnimateIn>
            <AnimateIn delay={0.2}>
              <p className="max-w-[800px] text-lg text-white/90">Trusted by the leading hospitality brands</p>
            </AnimateIn>
          </div>
        </section>

        {/* Clients Grid */}
        <section className="py-16 bg-white">
          <div className="container px-4 md:px-6">
            <AnimateIn>
              <p className="text-center text-neutral-600 mb-12 max-w-[800px] mx-auto">
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
                  className={`rounded-lg p-6 flex items-center justify-center h-32 shadow-sm hover:shadow-md transition-shadow ${
                    client.darkBg ? 'bg-neutral-900' : 'bg-neutral-50'
                  }`}
                >
                  <div className="text-center">
                    <Image
                      src={client.logo}
                      alt={client.name}
                      width={100}
                      height={50}
                      className="mx-auto mb-2 object-contain"
                    />
                    <p className={`text-sm font-medium ${client.darkBg ? 'text-white' : 'text-neutral-700'}`}>
                      {client.name}
                    </p>
                  </div>
                </div>
              ))}
            </AnimateInStagger>
          </div>
        </section>

        {/* Testimonial Preview */}
        <section className="py-16 bg-neutral-50">
          <div className="container px-4 md:px-6 text-center">
            <AnimateIn>
              <h2 className="text-3xl font-bold mb-12">What Our Clients Say</h2>
            </AnimateIn>
            <AnimateIn direction="up" delay={0.3}>
              <div className="max-w-[800px] mx-auto bg-white p-8 rounded-lg shadow-sm">
                <p className="text-neutral-600 italic mb-6">
                  "Fashion Fabric has been our trusted uniform partner for years. Their attention to detail, quality of
                  fabrics, and timely delivery have made them an invaluable asset to our operations. The staff uniforms
                  they provide perfectly represent our brand image."
                </p>
                <div>
                  <p className="font-semibold">Hotel Manager</p>
                  <p className="text-sm text-neutral-500">5-Star Hotel in Goa</p>
                </div>
              </div>
            </AnimateIn>
          </div>
        </section>
      </main>
    </div>
  )
}
