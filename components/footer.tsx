import Link from "next/link"
import Image from "next/image"
import { MapPin, Mail, Phone, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#307035] text-white">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="relative h-12 w-12 mr-3  rounded-md p-1">
                <Image src="/images/footer-logo.svg" alt="Fashion Fabric Logo" fill className="object-contain" />
              </div>
              <h3 className="text-lg font-semibold pt-2">Fashion Fabric</h3>
            </div>
            <p className="text-neutral-200 mb-6">
              India&apos;s premier destination for bespoke textile solutions, renowned for exquisite craftsmanship and
              timeless elegance.
            </p>
            <div className="flex items-center mb-3">
              <Phone className="h-5 w-5 text-[#f0f4c3] mr-3 flex-shrink-0" />
              <p className="text-neutral-200">+91 9867275524</p>
            </div>
            <div className="flex items-center mb-3">
              <Mail className="h-5 w-5 text-[#f0f4c3] mr-3 flex-shrink-0" />
              <p className="text-neutral-200">fashionfabric@rocketmail.com</p>
            </div>
            <div className="flex items-start">
              <MapPin className="h-5 w-5 text-[#f0f4c3] mt-1 mr-3 flex-shrink-0" />
              <p className="text-neutral-200">
                Shop No. 8, Block - II, Dukle Heaven, Near Old Yamaha Showroom, Santa Inez, Panaji, Taleigao, Goa 403001
              </p>
            </div>

          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-neutral-200 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-neutral-200 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-neutral-200 hover:text-white transition-colors">
                  Collection
                </Link>
              </li>
              <li>
                <Link href="/clients" className="text-neutral-200 hover:text-white transition-colors">
                  Clients
                </Link>
              </li>
              <li>
                <Link href="/catalogue" className="text-neutral-200 hover:text-white transition-colors">
                  Catalogues
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-neutral-200 hover:text-white transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-neutral-200 hover:text-white transition-colors">
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-neutral-200 hover:text-white transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/enquiry" className="text-neutral-200 hover:text-white transition-colors">
                  Enquire
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Collection</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/catalogue" className="text-neutral-200 hover:text-white transition-colors">
                  Chef Uniforms
                </Link>
              </li>
              <li>
                <Link href="/catalogue" className="text-neutral-200 hover:text-white transition-colors">
                  F&B Uniforms
                </Link>
              </li>
              <li>
                <Link href="/catalogue" className="text-neutral-200 hover:text-white transition-colors">
                  Housekeeping Uniforms
                </Link>
              </li>
              <li>
                <Link href="/catalogue" className="text-neutral-200 hover:text-white transition-colors">
                  Corporate Wear
                </Link>
              </li>
              <li>
                <Link href="/catalogue" className="text-neutral-200 hover:text-white transition-colors">
                  Resort & Spa Uniforms
                </Link>
              </li>
              <li>
                <Link href="/catalogue" className="text-neutral-200 hover:text-white transition-colors">
                  Casino Uniforms
                </Link>
              </li>
            </ul>
            <div className="mt-6 ">
              <h3 className="text-lg font-semibold mb-4">Follow Fashion Fabric</h3>
              <div className="flex gap-4 items-center pl-10">
                <Link
                  href="https://www.instagram.com/fashionfabric.info/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#f0f4c3] hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-8 w-8" />
                </Link>
                <Link
                  href="https://www.linkedin.com/company/fashionfabric/?viewAsMember=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#f0f4c3] hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-8 w-8" />
                </Link>
               
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-[#388e3c] mt-12 pt-6 text-center text-neutral-200 text-sm">
          <p>&copy; {new Date().getFullYear()} Fashion Fabric. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
