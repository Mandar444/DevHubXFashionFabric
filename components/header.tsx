"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isCollectionOpen, setIsCollectionOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const pathname = usePathname()

  const isHomePage = pathname === "/"

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setScrolled(currentScrollY > 20)
      
      // Responsive: hide on scroll down (even early on), show instantly on scroll up
      if (currentScrollY > lastScrollY && currentScrollY > 20) {
        setIsVisible(false) // Scrolling down
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true)  // Scrolling up
      }
      
      setLastScrollY(currentScrollY)
    }
    
    // Using a smaller threshold or just tracking direction more aggressively
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const collectionCategories = [
    { name: "Hospitality", href: "/collection/hospitality" },
    { name: "Restaurant & Chef", href: "/collection/restaurant-chef" },
    { name: "Industrial", href: "/collection/industrial" },
    { name: "Spa / Salons", href: "/collection/spa" },
    { name: "Healthcare", href: "/collection/healthcare" },
    { name: "Airline", href: "/collection/airline" },
    { name: "Corporate", href: "/collection/corporate" },
    { name: "Educational Institutes", href: "/collection/school" },
  ];

  return (
    <header 
      className={`absolute top-0 z-50 w-full transition-all duration-300 ${
        isHomePage ? "bg-transparent py-8" : "bg-black/95 py-4 border-b border-white/5"
      }`}
    >
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center group">
          <div className="relative h-16 w-16 mr-3 transition-transform duration-500 group-hover:scale-110">
            <Image 
              src="/images/logo.svg" 
              alt="Fashion Fabric Logo" 
              fill 
              className="object-contain transition-all duration-500" 
              priority 
            />
          </div>
          <div className="flex flex-col">
            <span className={`text-xl sm:text-2xl font-bold font-garamond italic tracking-tight leading-none ${scrolled || !isHomePage ? 'text-white' : 'text-white'}`}>
              Fashion <span className="text-amber-500">Fabric</span>
            </span>
            <span className={`text-[7px] sm:text-[8px] uppercase tracking-[0.4em] mt-1 font-bold ${scrolled || !isHomePage ? 'text-white/50' : 'text-white/80'}`}>The Master Tailors</span>
          </div>
        </Link>

        <nav className="hidden xl:flex gap-10 items-center mx-auto">
          {["Home", "About Us"].map((item) => (
            <Link 
              key={item}
              href={item === "Home" ? "/" : item === "About Us" ? "/about" : `/${item.toLowerCase().replace(" ", "-")}`} 
              className={`text-[11px] uppercase tracking-[0.3em] font-bold transition-all duration-300 relative group ${scrolled || !isHomePage ? 'text-white/70 hover:text-amber-500' : 'text-white hover:text-amber-400'}`}
            >
              {item}
              <span className={`absolute -bottom-2 left-0 w-0 h-px transition-all duration-300 group-hover:w-full ${scrolled || !isHomePage ? 'bg-amber-500' : 'bg-amber-400'}`}></span>
            </Link>
          ))}
          
          <div 
            className="relative"
            onMouseEnter={() => setIsCollectionOpen(true)}
            onMouseLeave={() => setIsCollectionOpen(false)}
          >
            <button className={`text-[11px] uppercase tracking-[0.3em] font-bold transition-all duration-300 flex items-center gap-2 group ${scrolled || !isHomePage ? 'text-white/70 hover:text-amber-500' : 'text-white hover:text-amber-400'}`}>
              Collection
              <ChevronDown className={`h-3 w-3 transition-transform duration-500 ${isCollectionOpen ? 'rotate-180' : ''}`} />
              <span className={`absolute -bottom-2 left-0 w-0 h-px transition-all duration-300 group-hover:w-full ${scrolled || !isHomePage ? 'bg-amber-500' : 'bg-amber-400'}`}></span>
            </button>
            
            {/* Mega Menu style dropdown */}
            <div className={`absolute left-1/2 -translate-x-1/2 top-full pt-6 transition-all duration-500 ${isCollectionOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
              <div className="w-[650px] bg-[#0a0a0a] border border-white/10 rounded-3xl shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)] p-8 grid grid-cols-2 gap-4">
                {collectionCategories.map((category) => (
                  <Link
                    key={category.name}
                    href={category.href}
                    className="flex items-center gap-4 px-6 py-4 rounded-2xl hover:bg-amber-500/5 transition-all duration-300 group"
                  >
                    <div className="w-2 h-2 rounded-full bg-amber-500/0 group-hover:bg-amber-500 transition-all shadow-[0_0_10px_rgba(245,158,11,0.5)]"></div>
                    <div>
                      <span className="block text-sm font-semibold text-white/90 group-hover:text-amber-500 transition-colors uppercase tracking-tight">{category.name}</span>
                      <span className="text-[9px] uppercase tracking-widest text-white/30 group-hover:text-amber-500/50 transition-colors">The Boutique</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {[
            ["Clients", "/clients"],
            ["Catalogues", "/catalogue"],
            ["FAQs", "/faq"],
            ["Blogs", "/blog"],
            ["Enquire", "/enquiry"]
          ].map(([label, href]) => (
            <Link 
              key={label}
              href={href} 
              className={`text-[11px] uppercase tracking-[0.3em] font-bold transition-all duration-300 relative group ${scrolled || !isHomePage ? 'text-white/70 hover:text-amber-500' : 'text-white hover:text-amber-400'}`}
            >
              {label}
              <span className={`absolute -bottom-2 left-0 w-0 h-px transition-all duration-300 group-hover:w-full ${scrolled || !isHomePage ? 'bg-amber-500' : 'bg-amber-400'}`}></span>
            </Link>
          ))}
        </nav>

        <div className="flex items-center">
          <button className={`xl:hidden group p-2 rounded-full border transition-colors ${scrolled || !isHomePage ? 'border-white/10 hover:border-amber-500' : 'border-white/20 hover:border-white'}`} onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Full Screen Luxury Overlay - Royal Dark */}
      <div className={`fixed inset-0 bg-[#0a0f0a] z-[60] xl:hidden flex flex-col transition-transform duration-500 ease-in-out ${isMenuOpen ? "translate-y-0" : "-translate-y-full"}`}>
        {/* Background Texture Overlay */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/linen.png')] opacity-20 pointer-events-none"></div>
        
        {/* Menu Header */}
        <div className="relative z-10 w-full px-6 py-8 flex items-center justify-between border-b border-white/10 bg-[#0a0f0a]/80 backdrop-blur-md">
          <div className="flex items-center">
            <div className="relative h-10 w-10 mr-3">
              <Image src="/images/logo.svg" alt="Logo" fill className="object-contain" />
            </div>
            <span className="text-xl font-bold text-white font-garamond italic tracking-tight">Fashion <span className="text-amber-500">Fabric</span></span>
          </div>
          <button onClick={toggleMenu} className="p-3 bg-white/5 rounded-full hover:bg-amber-500 hover:text-black transition-colors border border-white/10 text-white">
            <X className="h-6 w-6" />
          </button>
        </div>
        
        {/* Scrollable Links Area */}
        <div className="relative z-10 flex-1 overflow-y-auto w-full px-6 py-10 flex flex-col gap-6 text-center">
          {["Home", "About Us", "Clients", "Catalogues", "FAQs", "Blogs", "Enquire"].map((item) => (
            <Link 
              key={item}
              href={item === "Home" ? "/" : item === "About Us" ? "/about" : `/${item.toLowerCase().replace(" ", "-")}`} 
              className="text-3xl font-garamond italic text-white/80 hover:text-amber-500 transition-colors tracking-tight py-2 border-b border-white/5"
              onClick={toggleMenu}
            >
              {item}
            </Link>
          ))}
          
          <div className="mt-8 pt-8">
            <span className="text-xs tracking-[0.4em] uppercase text-amber-500 mb-6 block font-bold">The Collection</span>
            <div className="grid grid-cols-1 gap-4 pb-12">
              {collectionCategories.map((category) => (
                <Link
                  key={category.name}
                  href={category.href}
                  className="text-xl font-garamond italic text-white/50 hover:text-amber-500 py-2"
                  onClick={toggleMenu}
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
