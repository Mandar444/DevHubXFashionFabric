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
                  className="rounded-lg p-6 flex items-center justify-center h-32 shadow-sm hover:shadow-md transition-shadow bg-neutral-50"
                >
                  <div className="text-center">
                    <Image
                      src={client.logo}
                      alt={client.name}
                      width={100}
                      height={50}
                      className="mx-auto mb-2 object-contain"
                    />
                    <p className="text-sm font-medium text-neutral-700">
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
