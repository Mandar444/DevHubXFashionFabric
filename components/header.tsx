"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center">
          <div className="relative h-12 w-12 mr-2">
            <Image src="/images/logo.svg" alt="Fashion Fabric Logo" fill className="object-contain" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold text-[#2e7d32]">Fashion Fabric</span>
            <span className="text-sm text-[#2e7d32] -mt-1">LINEN SHOP</span>
          </div>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="/" className="text-sm font-medium hover:text-[#2e7d32] transition-colors">
            Home
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-[#2e7d32] transition-colors">
            About Us
          </Link>
          <Link href="/catalogue" className="text-sm font-medium hover:text-[#2e7d32] transition-colors">
            Catalogue
          </Link>
          <Link href="/clients" className="text-sm font-medium hover:text-[#2e7d32] transition-colors">
            Clients
          </Link>
          <Link href="/testimonials" className="text-sm font-medium hover:text-[#2e7d32] transition-colors">
            Testimonials
          </Link>
          <Link href="/media" className="text-sm font-medium hover:text-[#2e7d32] transition-colors">
            Media
          </Link>
          <Link href="/enquiry" className="text-sm font-medium hover:text-[#2e7d32] transition-colors">
            Enquiry
          </Link>
        </nav>
        <Button asChild className="hidden md:inline-flex bg-[#2e7d32] hover:bg-[#1b5e20] text-white">
          <Link href="/enquiry">Contact Us</Link>
        </Button>
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden border-t">
          <div className="container px-4 py-4 flex flex-col gap-4">
            <Link href="/" className="text-sm font-medium hover:text-[#2e7d32] transition-colors" onClick={toggleMenu}>
              Home
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium hover:text-[#2e7d32] transition-colors"
              onClick={toggleMenu}
            >
              About Us
            </Link>
            <Link
              href="/catalogue"
              className="text-sm font-medium hover:text-[#2e7d32] transition-colors"
              onClick={toggleMenu}
            >
              Catalogue
            </Link>
            <Link
              href="/clients"
              className="text-sm font-medium hover:text-[#2e7d32] transition-colors"
              onClick={toggleMenu}
            >
              Clients
            </Link>
            <Link
              href="/testimonials"
              className="text-sm font-medium hover:text-[#2e7d32] transition-colors"
              onClick={toggleMenu}
            >
              Testimonials
            </Link>
            <Link
              href="/media"
              className="text-sm font-medium hover:text-[#2e7d32] transition-colors"
              onClick={toggleMenu}
            >
              Media
            </Link>
            <Link
              href="/enquiry"
              className="text-sm font-medium hover:text-[#2e7d32] transition-colors"
              onClick={toggleMenu}
            >
              Enquiry
            </Link>
            <Button asChild className="w-full bg-[#2e7d32] hover:bg-[#1b5e20] text-white">
              <Link href="/enquiry" onClick={toggleMenu}>
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
