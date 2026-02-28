import Image from "next/image"
import { AnimateIn, AnimateInStagger } from "@/components/animate-in"
import { TestimonialStack } from "@/components/testimonial-stack"
import { Star, Quote, ShieldCheck } from "lucide-react"

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
  { name: "Fairfield by Marriott", logo: "/images/clients/fair-field.png" },
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

const testimonials = [
  {
    name: "Hotel Manager",
    company: "5-Star Hotel in Goa",
    quote: "Fashion Fabric has been our trusted uniform partner for years. Their attention to detail, quality of fabrics, and timely delivery have made them an invaluable asset to our operations.",
    logo: "/images/testimonials/Untitled-4_Hotel Manager.svg"
  },
  {
    name: "Executive Chef",
    company: "Fine Dining Restaurant",
    quote: "The custom chef coats designed by Fashion Fabric are not only stylish but also incredibly comfortable and durable. Our kitchen team is very satisfied with the ergonomic design.",
    logo: "/images/testimonials/Untitled-4_Executive Chef.svg"
  },
  {
    name: "General Manager",
    company: "Casino in Goa",
    quote: "Their commitment to quality is unmatched. They delivered our large order of 500+ uniforms on time and exceeded our expectations in terms of tailoring and branding.",
    logo: "/images/testimonials/Untitled-4_General Manager.svg"
  },
  {
    name: "Operations Director",
    company: "Boutique Hotel",
    quote: "Working with Fashion Fabric has been a pleasure. Their team is responsive, professional, and always willing to go the extra mile to meet our requirements.",
    logo: "/images/testimonials/Untitled-4_Operations Director.svg"
  },
  {
    name: "F&B Director",
    company: "Luxury Resort in Goa",
    quote: "The team at Fashion Fabric understands our brand aesthetic perfectly. They've created custom uniforms that our staff love to wear and that perfectly represent our brand image.",
    logo: "/images/testimonials/Untitled-4_F&B Director.svg"
  },
  {
    name: "Procurement Manager",
    company: "Hotel Chain",
    quote: "We've been working with Fashion Fabric for over 5 years now. Their consistent quality and reliability make them our go-to uniform supplier for all our properties.",
    logo: "/images/testimonials/Untitled-4_Procurement Manager.svg"
  }
]

export default function ClientsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-black selection:bg-amber-500/30">
      <main className="flex-1">
        {/* Lavish Hero Section - Visible Background */}
        <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black">
          {/* Elegant Background - Now Fully Visible and Royal */}
          <div className="absolute inset-0 z-0 bg-[url('/images/bg-imges-hero-sections/image-01.jpg')] bg-cover bg-center bg-no-repeat opacity-90 scale-105 transition-transform duration-[10s] hover:scale-100"></div>
          
          {/* Smooth Blending Gradient: Black -> Transparent -> Black/Dark Paper Base */}
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/80 via-transparent to-[#0a0a0a]"></div>
          
          {/* Subtle Paper Texture on Hero too for consistency */}
          <div className="absolute inset-0 z-10 bg-[url('https://www.transparenttextures.com/patterns/linen.png')] opacity-10 pointer-events-none"></div>
          
          {/* Subtle Golden/Amber Gradients */}
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-amber-500/10 rounded-full blur-[150px] pointer-events-none -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-[1000px] h-[1000px] bg-yellow-500/5 rounded-full blur-[180px] pointer-events-none translate-y-1/2" />

          {/* Central Content */}
          <div className="container relative z-20 px-4 md:px-6 flex flex-col items-center text-center">
            <AnimateIn className="flex flex-col items-center">
              <span className="text-amber-500 font-bold tracking-[0.5em] uppercase text-[10px] md:text-sm mb-6 block bg-black/60 backdrop-blur-md px-8 py-3 rounded-full border border-amber-500/30 shadow-2xl flex items-center gap-3">
                <ShieldCheck className="w-5 h-5" />
                ROYAL PARTNERSHIPS
                <ShieldCheck className="w-5 h-5" />
              </span>
              <h1 className="text-5xl sm:text-7xl md:text-[9rem] font-bold tracking-tight text-white mb-10 font-garamond italic drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)] leading-tight text-center">
                Our Royal <span className="text-amber-500">Patrons</span>
              </h1>
              
              <div className="flex items-center justify-center gap-8 mb-12">
                <div className="h-[1px] w-32 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
                <Star className="text-amber-500 fill-amber-500 w-8 h-8 animate-pulse" />
                <div className="h-[1px] w-32 bg-gradient-to-l from-transparent via-amber-500 to-transparent"></div>
              </div>

              <div className="relative max-w-4xl mx-auto px-4">
                <p className="text-white text-2xl md:text-4xl font-light italic leading-relaxed text-center font-garamond drop-shadow-lg">
                  "Serving the world's most distinguished establishments. We craft uniforms that carry the weight of your brand's heritage."
                </p>
              </div>
            </AnimateIn>
          </div>
        </section>

        {/* The Client Gallery - Royal Black Paper Grid with White Logo Cards */}
        <section className="py-40 bg-[#0a0a0a] relative">
          {/* Deepened Black Paper Texture Overlay */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/shattered-island.png')] opacity-40 pointer-events-none invert grayscale"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/linen.png')] opacity-30 pointer-events-none"></div>
          
          <div className="container px-4 md:px-6 relative z-10">
            <AnimateInStagger
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 md:gap-14"
              staggerDelay={0.02}
            >
              {clients.map((client, index) => (
                <div
                  key={index}
                  className="group relative flex flex-col items-center justify-center transition-all duration-700 p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] bg-white border border-neutral-100 hover:border-amber-500/50 hover:shadow-[0_40px_100px_-20px_rgba(245,158,11,0.5)] overflow-hidden hover:-translate-y-4"
                >
                  <div className="h-24 md:h-36 w-full flex items-center justify-center mb-8 transition-transform duration-700 group-hover:scale-110 relative z-10">
                    <Image
                      src={client.logo}
                      alt={client.name}
                      width={160}
                      height={80}
                      className="object-contain max-w-full max-h-full opacity-80 group-hover:opacity-100 transition-all duration-700"
                    />
                  </div>
                  <div className="h-[1px] w-12 group-hover:w-32 bg-gradient-to-r from-transparent via-amber-600 to-transparent transition-all duration-700 mb-6 opacity-30 group-hover:opacity-100"></div>
                  <span className="text-[8px] font-bold text-amber-500/60 uppercase tracking-[0.4em] mb-1">Trusted By</span>
                  <p className="text-[10px] md:text-[12px] font-bold text-neutral-400 group-hover:text-amber-600 uppercase tracking-[0.5em] transition-all duration-700 text-center relative z-10">
                    {client.name}
                  </p>
                  
                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              ))}
            </AnimateInStagger>
          </div>
        </section>

        {/* Black Block Section - Lavish Feature */}
        <section className="py-40 bg-black relative overflow-hidden border-y border-white/5">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/linen.png')] opacity-10 pointer-events-none"></div>
          <div className="container px-4 md:px-6 relative z-10">
             <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                <AnimateIn direction="left">
                   <h2 className="text-4xl md:text-7xl font-bold text-white font-garamond italic mb-8 leading-tight">
                     Crafting <span className="text-amber-500">Unforgettable</span> Identities
                   </h2>
                   <div className="w-24 h-[1px] bg-amber-500/50 mb-8"></div>
                   <p className="text-white/70 text-lg md:text-xl font-light italic font-garamond leading-relaxed">
                     "Every client is a kingdom, every uniform a crown. We believe in providing solutions that transcend the ordinary and define the extraordinary."
                   </p>
                </AnimateIn>
                <div className="grid grid-cols-2 gap-6">
                   {[
                     { label: "Elite Tailoring", val: "Bespoke" },
                     { label: "Global Reach", val: "Seamless" },
                     { label: "Durability", val: "Mastered" },
                     { label: "Design", val: "Royal" }
                   ].map((item, i) => (
                     <div key={i} className="p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm group hover:border-amber-500/50 transition-all text-center">
                        <p className="text-amber-500 font-bold tracking-widest text-[10px] uppercase mb-2">{item.label}</p>
                        <p className="text-white text-2xl font-garamond italic">{item.val}</p>
                     </div>
                   ))}
                </div>
             </div>
          </div>
        </section>

        {/* Testimonial Section - Royal Chronicles - Bright White */}
        <section className="py-40 bg-white relative overflow-hidden border-t-4 border-amber-500/20">
          {/* Subtle Ambient Background */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/exclusive-paper.png')] opacity-30 pointer-events-none"></div>
          <div className="absolute top-1/2 left-0 w-[1000px] h-[1000px] bg-amber-500/5 rounded-full blur-[180px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
          
          <div className="absolute top-40 right-20 opacity-[0.03] hidden xl:block pointer-events-none select-none">
            <Quote size={400} strokeWidth={0.5} className="text-black" />
          </div>
 
          <div className="container px-4 md:px-6 relative z-10 mb-20 text-center">
            <AnimateIn>
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="w-12 h-px bg-amber-500/30"></div>
                <span className="text-amber-600 font-bold tracking-[0.6em] uppercase text-xs">Royal Testimony</span>
                <div className="w-12 h-px bg-amber-500/30"></div>
              </div>
              
              <h2 className="text-5xl sm:text-7xl md:text-[9rem] font-bold text-black mb-10 font-garamond italic tracking-tighter leading-tight">
                Words of <span className="text-amber-500 font-light drop-shadow-sm">The Masters</span>
              </h2>
  
              <p className="text-neutral-600 max-w-4xl text-2xl md:text-3xl leading-relaxed italic font-light font-garamond mx-auto">
                "Real stories from the empires we serve. Excellence is not a goal, it is our definition."
              </p>
              <div className="w-40 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mt-12"></div>
            </AnimateIn>
          </div>
          
          <div className="container px-4 md:px-6 flex justify-center pb-24 relative z-20">
            <div className="w-full max-w-6xl relative">
               {/* Frame for the stack */}
               <div className="absolute -inset-10 border border-neutral-100 rounded-[4rem] -z-10 bg-white shadow-2xl"></div>
               <TestimonialStack testimonials={testimonials} />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
