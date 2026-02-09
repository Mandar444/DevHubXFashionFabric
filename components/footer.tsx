import Link from "next/link"
import Image from "next/image"
import { MapPin, Mail, Phone, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#307035] text-white">
      <div className="container px-4 md:px-6 py-8 md:py-12 text-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8 text-white">
          {/* Company Info */}
          <div className="text-white">
            <div className="flex items-center mb-4">
              <div className="relative h-10 w-10 md:h-12 md:w-12 mr-3 rounded-md p-1">
                <Image src="/images/footer-logo.svg" alt="Fashion Fabric Logo" fill className="object-contain" />
              </div>
              <h3 className="text-base md:text-lg font-semibold pt-2 text-white">Fashion Fabric</h3>
            </div>
            <p className="text-white mb-4 md:mb-6 text-sm md:text-base">
              India&apos;s premier destination for bespoke textile solutions, renowned for exquisite craftsmanship and
              timeless elegance.
            </p>
            <div className="flex items-center mb-3">
              <Phone className="h-4 w-4 md:h-5 md:w-5 text-white mr-3 flex-shrink-0" />
              <p className="text-white text-sm md:text-base">+91 9867275524</p>
            </div>
            <div className="flex items-center mb-3">
              <Mail className="h-4 w-4 md:h-5 md:w-5 text-white mr-3 flex-shrink-0" />
              <p className="text-white text-sm md:text-base">fashionfabric@rocketmail.com</p>
            </div>
            <div className="flex items-start">
              <MapPin className="h-4 w-4 md:h-5 md:w-5 text-white mt-1 mr-3 flex-shrink-0" />
              <p className="text-white text-sm md:text-base">
                Shop No. 8, Block - II, Dukle Heaven, Near Old Yamaha Showroom, Santa Inez, Panaji, Taleigao, Goa 403001
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-white md:pl-20">
            <h3 className="text-base md:text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2 text-white">
              <li>
                <Link href="/" className="text-white hover:text-white transition-colors text-sm md:text-base">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white hover:text-white transition-colors text-sm md:text-base">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-white hover:text-white transition-colors text-sm md:text-base">
                  Collection
                </Link>
              </li>
              <li>
                <Link href="/clients" className="text-white hover:text-white transition-colors text-sm md:text-base">
                  Clients
                </Link>
              </li>
              <li>
                <Link href="/catalogue" className="text-white hover:text-white transition-colors text-sm md:text-base">
                  Catalogues
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-white hover:text-white transition-colors text-sm md:text-base">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-white hover:text-white transition-colors text-sm md:text-base">
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-white hover:text-white transition-colors text-sm md:text-base">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/enquiry" className="text-white hover:text-white transition-colors text-sm md:text-base">
                  Enquire
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Collection & Social Links */}
          <div className="text-white">
            <h3 className="text-base md:text-lg font-semibold mb-4 text-white">Our Collection</h3>
            <ul className="space-y-2 text-white">
              <li>
                <Link href="/products/hospitality" className="text-white hover:text-white transition-colors text-sm md:text-base">
                  Hospitality
                </Link>
              </li>
              <li>
                <Link href="/products/restaurant-chef" className="text-white hover:text-white transition-colors text-sm md:text-base">
                  Restaurant & Chef
                </Link>
              </li>
              <li>
                <Link href="/products/spa" className="text-white hover:text-white transition-colors text-sm md:text-base">
                  Spa / Saloons
                </Link>
              </li>
              <li>
                <Link href="/products/healthcare" className="text-white hover:text-white transition-colors text-sm md:text-base">
                  Healthcare
                </Link>
              </li>
              <li>
                <Link href="/products/airline" className="text-white hover:text-white transition-colors text-sm md:text-base">
                  Airline
                </Link>
              </li>
              <li>
                <Link href="/products/corporate" className="text-white hover:text-white transition-colors text-sm md:text-base">
                  Corporate
                </Link>
              </li>
              <li>
                <Link href="/products/school" className="text-white hover:text-white transition-colors text-sm md:text-base">
                  Schools
                </Link>
              </li>
            </ul>
            <div className="mt-6">
              <h3 className="text-base md:text-lg font-semibold mb-4 text-white">Follow Fashion Fabric</h3>
              <div className="flex gap-4 items-center md:pl-10">
                <Link
                  href="https://www.instagram.com/fashionfabric.info/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-6 w-6 md:h-8 md:w-8" />
                </Link>
                <Link
                  href="https://www.linkedin.com/company/fashionfabric/?viewAsMember=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-6 w-6 md:h-8 md:w-8" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-[#388e3c] mt-12 pt-6 text-center text-white text-sm">
          <p className="text-white">&copy; {new Date().getFullYear()} Fashion Fabric. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
