import Link from "next/link"
import Image from "next/image"
import { MapPin, Mail, Phone, Instagram, Linkedin } from "lucide-react"

const whiteText = { color: "#ffffff" } as const

export default function Footer() {
  return (
    <footer className="bg-[#307035]" style={whiteText}>
      <div className="container px-4 md:px-6 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <div className="relative h-10 w-10 md:h-12 md:w-12 mr-3 rounded-md p-1">
                <Image src="/images/footer-logo.svg" alt="Fashion Fabric Logo" fill className="object-contain" />
              </div>
              <h3 className="text-base md:text-lg font-semibold pt-2" style={whiteText}>Fashion Fabric</h3>
            </div>
            <p className="mb-4 md:mb-6 text-sm md:text-base" style={whiteText}>
              India&apos;s premier destination for bespoke textile solutions, renowned for exquisite craftsmanship and
              timeless elegance.
            </p>
            <div className="flex items-center mb-3">
              <Phone className="h-4 w-4 md:h-5 md:w-5 mr-3 flex-shrink-0" style={whiteText} />
              <p className="text-sm md:text-base" style={whiteText}>+91 9867275524</p>
            </div>
            <div className="flex items-center mb-3">
              <Mail className="h-4 w-4 md:h-5 md:w-5 mr-3 flex-shrink-0" style={whiteText} />
              <p className="text-sm md:text-base" style={whiteText}>fashionfabric@rocketmail.com</p>
            </div>
            <div className="flex items-start">
              <MapPin className="h-4 w-4 md:h-5 md:w-5 mt-1 mr-3 flex-shrink-0" style={whiteText} />
              <p className="text-sm md:text-base" style={whiteText}>
                Shop No. 8, Block - II, Dukle Heaven, Near Old Yamaha Showroom, Santa Inez, Panaji, Taleigao, Goa 403001
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:pl-20">
            <h3 className="text-base md:text-lg font-semibold mb-4" style={whiteText}>Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:opacity-80 transition-colors text-sm md:text-base" style={whiteText}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:opacity-80 transition-colors text-sm md:text-base" style={whiteText}>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:opacity-80 transition-colors text-sm md:text-base" style={whiteText}>
                  Collection
                </Link>
              </li>
              <li>
                <Link href="/clients" className="hover:opacity-80 transition-colors text-sm md:text-base" style={whiteText}>
                  Clients
                </Link>
              </li>
              <li>
                <Link href="/catalogue" className="hover:opacity-80 transition-colors text-sm md:text-base" style={whiteText}>
                  Catalogues
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:opacity-80 transition-colors text-sm md:text-base" style={whiteText}>
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:opacity-80 transition-colors text-sm md:text-base" style={whiteText}>
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="hover:opacity-80 transition-colors text-sm md:text-base" style={whiteText}>
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/enquiry" className="hover:opacity-80 transition-colors text-sm md:text-base" style={whiteText}>
                  Enquire
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Collection & Social Links */}
          <div>
            <h3 className="text-base md:text-lg font-semibold mb-4" style={whiteText}>Our Collection</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products/hospitality" className="hover:opacity-80 transition-colors text-sm md:text-base" style={whiteText}>
                  Hospitality
                </Link>
              </li>
              <li>
                <Link href="/products/restaurant-chef" className="hover:opacity-80 transition-colors text-sm md:text-base" style={whiteText}>
                  Restaurant & Chef
                </Link>
              </li>
              <li>
                <Link href="/products/spa" className="hover:opacity-80 transition-colors text-sm md:text-base" style={whiteText}>
                  Spa / Saloons
                </Link>
              </li>
              <li>
                <Link href="/products/healthcare" className="hover:opacity-80 transition-colors text-sm md:text-base" style={whiteText}>
                  Healthcare
                </Link>
              </li>
              <li>
                <Link href="/products/airline" className="hover:opacity-80 transition-colors text-sm md:text-base" style={whiteText}>
                  Airline
                </Link>
              </li>
              <li>
                <Link href="/products/corporate" className="hover:opacity-80 transition-colors text-sm md:text-base" style={whiteText}>
                  Corporate
                </Link>
              </li>
              <li>
                <Link href="/products/school" className="hover:opacity-80 transition-colors text-sm md:text-base" style={whiteText}>
                  Schools
                </Link>
              </li>
            </ul>
            <div className="mt-6">
              <h3 className="text-base md:text-lg font-semibold mb-4" style={whiteText}>Follow Fashion Fabric</h3>
              <div className="flex gap-4 items-center md:pl-10">
                <Link
                  href="https://www.instagram.com/fashionfabric.info/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-colors"
                  style={whiteText}
                  aria-label="Instagram"
                >
                  <Instagram className="h-6 w-6 md:h-8 md:w-8" color="#ffffff" />
                </Link>
                <Link
                  href="https://www.linkedin.com/company/fashionfabric/?viewAsMember=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-colors"
                  style={whiteText}
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-6 w-6 md:h-8 md:w-8" color="#ffffff" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-[#388e3c] mt-12 pt-6 text-center text-sm">
          <p style={whiteText}>&copy; {new Date().getFullYear()} Fashion Fabric. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
