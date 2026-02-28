import Link from "next/link"
import Image from "next/image"
import { MapPin, Mail, Phone, Instagram, Linkedin, ArrowRight } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-white/5 pt-24 pb-12 relative overflow-hidden">
      {/* Background Decor Masala */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-yellow-500/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">

          {/* Company Identity */}
          <div className="lg:col-span-4 flex flex-col items-start px-4">
            <Link href="/" className="flex items-center mb-8 group">
              <div className="relative h-16 w-16 mr-4 transition-transform duration-500 group-hover:scale-110">
                <Image
                  src="/images/logo.svg"
                  alt="Fashion Fabric Logo"
                  fill
                  className="object-contain transition-all duration-500"
                />
              </div>
              <div className="flex flex-col">
                <h3 className="text-2xl font-bold font-garamond italic text-white leading-none">
                  Fashion <span className="text-amber-500">Fabric</span>
                </h3>
                <span className="text-[9px] uppercase tracking-[0.4em] text-white/50 mt-1 font-bold">The Master Tailors</span>
              </div>
            </Link>

            <p className="text-white/70 text-lg font-garamond italic leading-relaxed mb-10 max-w-sm">
              "Redefining the art of textile mastery. Serving the world's most distinguished establishments with precision and craft since 2008."
            </p>

            <div className="space-y-4 w-full">
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-amber-500 transition-all duration-500 border border-white/10">
                  <Phone size={16} className="text-amber-500 group-hover:text-[#0b130c]" />
                </div>
                <span className="text-sm font-bold tracking-widest text-white/80 group-hover:text-amber-500 transition-colors">+91 9867275524</span>
              </div>
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-amber-500 transition-all duration-500 border border-white/10">
                  <Mail size={16} className="text-amber-500 group-hover:text-[#0b130c]" />
                </div>
                <span className="text-sm font-bold tracking-widest text-white/80 group-hover:text-amber-500 transition-colors uppercase">fashionfabric@rocketmail.com</span>
              </div>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="lg:col-span-2 px-4">
            <h4 className="text-[10px] uppercase tracking-[0.5em] font-bold text-amber-500 mb-10">Quick Nav</h4>
            <ul className="space-y-4">
              {[
                ["Home", "/"],
                ["About Us", "/about"],
                ["The Collection", "/catalogue"],
                ["Our Clients", "/clients"],
                ["Blogs", "/blog"],
                ["Inquire", "/enquiry"],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-white/60 hover:text-amber-500 hover:translate-x-2 transition-all duration-300 flex items-center gap-2 group text-sm font-medium"
                  >
                    <ArrowRight size={10} className="opacity-0 group-hover:opacity-100 transition-all" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Expertises */}
          <div className="lg:col-span-3 px-4">
            <h4 className="text-[10px] uppercase tracking-[0.5em] font-bold text-amber-500 mb-10">Expertise</h4>
            <div className="grid grid-cols-1 gap-4">
              {[
                ["Hospitality", "/collection/hospitality"],
                ["Culinary & Chef", "/collection/restaurant-chef"],
                ["Wellness & Spa", "/collection/spa"],
                ["Healthcare", "/collection/healthcare"],
                ["Aviation", "/collection/airline"],
                ["Corporate", "/collection/corporate"],
                ["Industrial", "/collection/industrial"],
                ["Education", "/collection/school"],
              ].map(([label, href]) => (
                <Link
                  key={label}
                  href={href}
                  className="text-white/60 hover:text-amber-500 flex items-center justify-between group py-1 border-b border-white/5 hover:border-amber-500/30 transition-all duration-300"
                >
                  <span className="text-sm font-medium">{label}</span>
                  <span className="text-[8px] uppercase tracking-widest text-white/20 group-hover:text-amber-500 transition-all">Discover</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Contact & Legal */}
          <div className="lg:col-span-3 px-4">
            <h4 className="text-[10px] uppercase tracking-[0.5em] font-bold text-amber-500 mb-10">Visit The Atelier</h4>
            <div className="flex gap-4 mb-10 group">
              <MapPin className="shrink-0 text-amber-500 mt-1" size={20} />
              <p className="text-white/70 text-sm leading-relaxed font-medium">
                Shop No. 8, Block - II, Dukle Heaven, Near Old Yamaha Showroom,
                Santa Inez, Panaji, Taleigao, Goa 403001
              </p>
            </div>

            <h4 className="text-[10px] uppercase tracking-[0.5em] font-bold text-amber-500 mb-6">Socials</h4>
            <div className="flex gap-4">
              <Link
                href="https://www.instagram.com/fashionfabric.info/"
                target="_blank"
                className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center hover:bg-amber-500 hover:text-[#0b130c] hover:scale-110 transition-all duration-500 group shadow-sm border border-white/10"
              >
                <Instagram className="h-6 w-6 text-amber-500 group-hover:text-[#0b130c]" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/fashionfabric/"
                target="_blank"
                className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center hover:bg-amber-500 hover:text-[#0b130c] hover:scale-110 transition-all duration-500 group shadow-sm border border-white/10"
              >
                <Linkedin className="h-6 w-6 text-amber-500 group-hover:text-[#0b130c]" />
              </Link>
            </div>
          </div>
        </div>

        {/* Closing Bar */}
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] tracking-[0.2em] font-bold text-white/30 uppercase text-center">
            &copy; {new Date().getFullYear()} Fashion Fabric. The Pinnacle of Tailoring Excellence.
          </p>
          <div className="flex gap-10 text-[10px] tracking-[0.2em] font-bold text-white/30 uppercase">
            <Link href="/privacy" className="hover:text-amber-500 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-amber-500 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
