import Link from "next/link"
import Image from "next/image"
import { MapPin, Mail, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#1b5e20] text-white">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="relative h-12 w-12 mr-3 bg-white rounded-md p-1">
                <Image src="/images/logo.png" alt="Fashion Fabric Logo" fill className="object-contain" />
              </div>
              <h3 className="text-lg font-semibold">Fashion Fabric</h3>
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
                Shop No. 8, Block - II, Dukle Heaven, Near Yamaha Showroom, Santa Inez, Panaji, Taleigao, Goa 403001
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
                <Link href="/catalogue" className="text-neutral-200 hover:text-white transition-colors">
                  Catalogue
                </Link>
              </li>
              <li>
                <Link href="/clients" className="text-neutral-200 hover:text-white transition-colors">
                  Clients
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-neutral-200 hover:text-white transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/media" className="text-neutral-200 hover:text-white transition-colors">
                  Media
                </Link>
              </li>
              <li>
                <Link href="/enquiry" className="text-neutral-200 hover:text-white transition-colors">
                  Enquiry
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Products</h3>
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
          </div>
        </div>
        <div className="border-t border-[#388e3c] mt-12 pt-6 text-center text-neutral-200 text-sm">
          <p>&copy; {new Date().getFullYear()} Fashion Fabric. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
