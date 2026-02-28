import { TestimonialStack } from "@/components/testimonial-stack"
import { AnimateIn } from "@/components/animate-in"

export default function TestimonialsPage() {
  const testimonials = [
    {
      quote:
        "Fashion Fabric has been our trusted uniform partner for years. Their attention to detail, quality of fabrics, and timely delivery have made them an invaluable asset to our operations.",
      name: "Hotel Manager",
      company: "5-Star Hotel in Goa",
      logo: "/images/testimonials/Untitled-4_Hotel Manager.svg"
    },
    {
      quote:
        "The team at Fashion Fabric understands our brand aesthetic perfectly. They've created custom uniforms that our staff love to wear and that perfectly represent our brand image.",
      name: "F&B Director",
      company: "Luxury Resort in Goa",
      logo: "/images/testimonials/Untitled-4_F&B Director.svg"
    },
    {
      quote:
        "We've been working with Fashion Fabric for over 5 years now. Their consistent quality and reliability make them our go-to uniform supplier for all our properties.",
      name: "Procurement Manager",
      company: "Hotel Chain",
      logo: "/images/testimonials/Untitled-4_Procurement Manager.svg"
    },
    {
      quote:
        "The custom chef coats designed by Fashion Fabric are not only stylish but also incredibly comfortable and durable. Our kitchen team is very satisfied.",
      name: "Executive Chef",
      company: "Fine Dining Restaurant",
      logo: "/images/testimonials/Untitled-4_Executive Chef.svg"
    },
    {
      quote:
        "Fashion Fabric's attention to detail and commitment to quality is unmatched. They delivered our large order on time and exceeded our expectations.",
      name: "General Manager",
      company: "Casino in Goa",
      logo: "/images/testimonials/Untitled-4_General Manager.svg"
    },
    {
      quote:
        "Working with Fashion Fabric has been a pleasure. Their team is responsive, professional, and always willing to go the extra mile to meet our requirements.",
      name: "Operations Director",
      company: "Boutique Hotel",
      logo: "/images/testimonials/Untitled-4_Operations Director.svg"
    },
    {
      quote:
        "The durability of the housekeeping uniforms is impressive. Even after multiple washes, the color remains vibrant and the fabric stays crisp and professional.",
      name: "Executive Housekeeper",
      company: "Resort in North Goa",
      logo: "/images/testimonials/Untitled-4_Operations Director.svg"
    },
    {
      quote:
        "Their design team took our brand colors and turned them into elegant uniforms that our front desk team wears with pride. The fit is perfect for everyone.",
      name: "Front Office Manager",
      company: "Heritage Hotel, Goa",
      logo: "/images/testimonials/Untitled-4_Hotel Manager.svg"
    },
    {
      quote:
        "Fashion Fabric's handle on large-scale orders is remarkable. They outfitted our entire crew of 500+ members with zero fitting issues and high precision.",
      name: "Casino Operations Head",
      company: "Leading Casino Group",
      logo: "/images/testimonials/Untitled-4_General Manager.svg"
    },
    {
      quote:
        "The customized branding on our aprons and chef coats is sharp and professional. It really elevated our brand's visual identity in the dining area.",
      name: "Restaurant Owner",
      company: "Beachfront Bistro",
      logo: "/images/testimonials/Untitled-4_Executive Chef.svg"
    },
  ]

  return (
    <div className="bg-white py-32 min-h-screen relative overflow-hidden border-t-4 border-amber-500/20">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/exclusive-paper.png')] opacity-30 pointer-events-none"></div>
      
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/3"></div>
      </div>

      <div className="container px-4 md:px-6 relative z-10 pt-16">
        <div className="flex flex-col items-center text-center mb-24">
          <AnimateIn>
            <span className="text-black font-bold tracking-[0.4em] uppercase text-xs sm:text-sm mb-6 block drop-shadow-sm">
              Global Recognition
            </span>
            <h1 className="text-5xl md:text-[6rem] font-bold text-black mb-10 font-garamond italic tracking-tighter leading-none">
              Word of the <span className="text-black drop-shadow-sm">Master</span>
            </h1>
            <div className="flex items-center justify-center gap-6 mb-12">
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent"></div>
              <div className="flex gap-2">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="w-2.5 h-2.5 rounded-full bg-amber-500/20 border border-amber-500/50" />
                ))}
              </div>
              <div className="h-px w-24 bg-gradient-to-l from-transparent via-amber-500/50 to-transparent"></div>
            </div>
            <p className="text-neutral-600 max-w-2xl text-xl md:text-2xl font-light italic font-garamond mx-auto leading-relaxed px-4 drop-shadow-sm">
              "Excellence is not a skill, it is an attitude. Explore the testimony of our esteemed partners."
            </p>
          </AnimateIn>
        </div>
        
        <div className="flex justify-center mt-8 relative">
          <TestimonialStack testimonials={testimonials} />
        </div>
      </div>
    </div>
  )
}