"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star, Quote, Award, Users, Calendar, Repeat, CheckCircle, Ship, Briefcase, GraduationCap, Plane, HeartPulse, Sparkles, Utensils, Hotel, Zap, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimateIn, AnimateInStagger } from "@/components/animate-in";
import { InfiniteLogoScroll } from "./components/infinite-logo-scroll";
import { StatCard } from "@/components/stat-card";
import dynamic from "next/dynamic";
import { Suspense, useState } from "react";
import { TestimonialStack } from "@/components/testimonial-stack";

const clients = [
  {
    name: "Araqila",
    logo: "/images/home-icons-all/clients-home-logos/Araqila.png",
  },
  {
    name: "Baale",
    logo: "/images/home-icons-all/clients-home-logos/Baale.png",
  },
  {
    name: "Big B Casino",
    logo: "/images/home-icons-all/clients-home-logos/Big B Casino.png",
  },
  {
    name: "Big Daddy",
    logo: "/images/home-icons-all/clients-home-logos/Big Daddy.png",
  },
  {
    name: "Birch",
    logo: "/images/home-icons-all/clients-home-logos/Birch.png",
  },
  {
    name: "Cadillac Casino",
    logo: "/images/home-icons-all/clients-home-logos/Cadillac Casino.png",
  },
  {
    name: "Caravela",
    logo: "/images/home-icons-all/clients-home-logos/Caravela.png",
  },
  {
    name: "Casino Gold",
    logo: "/images/home-icons-all/clients-home-logos/Casino Gold.png",
  },
  {
    name: "Casino Pride",
    logo: "/images/home-icons-all/clients-home-logos/Casino Pride .png",
  },
  {
    name: "Club Mahindra",
    logo: "/images/home-icons-all/clients-home-logos/Club Mahindra.png",
  },
  {
    name: "Deltin",
    logo: "/images/home-icons-all/clients-home-logos/deltin.png",
  },
  {
    name: "Double Tree",
    logo: "/images/home-icons-all/clients-home-logos/Double Tree.png",
  },
  {
    name: "Elements",
    logo: "/images/home-icons-all/clients-home-logos/Elements.png",
  },
  {
    name: "Fairfield",
    logo: "/images/home-icons-all/clients-home-logos/Fairfield.png",
  },
  {
    name: "Fortune",
    logo: "/images/home-icons-all/clients-home-logos/Fortune.png",
  },
  {
    name: "Grand Hyatt",
    logo: "/images/home-icons-all/clients-home-logos/Grand Hyatt.png",
  },
  {
    name: "Hard Rock",
    logo: "/images/home-icons-all/clients-home-logos/Hard Rock.png",
  },
  {
    name: "Hilton",
    logo: "/images/home-icons-all/clients-home-logos/Hilton.png",
  },
  {
    name: "Holiday Inn",
    logo: "/images/home-icons-all/clients-home-logos/Holiday Inn.png",
  },
  {
    name: "Hyatt Centric",
    logo: "/images/home-icons-all/clients-home-logos/Hyatt Centric.png",
  },
  { name: "Ibis", logo: "/images/home-icons-all/clients-home-logos/Ibis.png" },
  {
    name: "JW Marriott",
    logo: "/images/home-icons-all/clients-home-logos/JW Marriott.png",
  },
  {
    name: "Kenilworth",
    logo: "/images/home-icons-all/clients-home-logos/Kenilworth.png",
  },
  {
    name: "Le Meridien",
    logo: "/images/home-icons-all/clients-home-logos/Le Meridien.png",
  },
  {
    name: "Marriott",
    logo: "/images/home-icons-all/clients-home-logos/Marriott.png",
  },
  {
    name: "Neptune",
    logo: "/images/home-icons-all/clients-home-logos/Neptune.png",
  },
  {
    name: "Novotel",
    logo: "/images/home-icons-all/clients-home-logos/Novotel.png",
  },
  {
    name: "Planet Hollywood",
    logo: "/images/home-icons-all/clients-home-logos/Planet Hollywood.png",
  },
  {
    name: "Ramada",
    logo: "/images/home-icons-all/clients-home-logos/Ramada.png",
  },
  {
    name: "SeleQtions",
    logo: "/images/home-icons-all/clients-home-logos/SeleQtions.png",
  },
  { name: "SinQ", logo: "/images/home-icons-all/clients-home-logos/SinQ.png" },
  {
    name: "St. Regis",
    logo: "/images/home-icons-all/clients-home-logos/St. Regis.png",
  },
  {
    name: "Strike",
    logo: "/images/home-icons-all/clients-home-logos/Strike.png",
  },
  { name: "Taj", logo: "/images/home-icons-all/clients-home-logos/Taj.png" },
  {
    name: "The Astor",
    logo: "/images/home-icons-all/clients-home-logos/The Astor.png",
  },
  {
    name: "The Fern",
    logo: "/images/home-icons-all/clients-home-logos/The Fern.png",
  },
  {
    name: "Vivanta",
    logo: "/images/home-icons-all/clients-home-logos/Vivanta.png",
  },
  {
    name: "W Hotels",
    logo: "/images/home-icons-all/clients-home-logos/W Hotels.png",
  },
];

const featuredProducts = [
  {
    title: "Hotels",
    image: "/images/home-icons-all/featured-images/Hotels.png",
    tagline: "Uniforms that elevate every guest interaction.",
    desc: "Tailored for comfort, durability, and brand presence, so your team looks poised through every shift.",
    href: "/collection/hospitality",
  },
  {
    title: "Food Production",
    image: "/images/home-icons-all/featured-images/Food Production.png",
    tagline: "Refined for discipline. Designed for distinction.",
    desc: "Designed for controlled environments and strict hygiene standards offering comfort, durability, and a polished professional look.",
    href: "/collection/restaurant-chef",
  },
  {
    title: "Food Service",
    image: "/images/home-icons-all/featured-images/Food Service.png",
    tagline: "Built for service. Styled for impact.",
    desc: "Performance-driven uniforms designed for fast-paced floors, long hours, and consistent brand expression.",
    href: "/collection/restaurant-chef",
  },
  {
    title: "Spa/Salons",
    image: "/images/home-icons-all/featured-images/Spa Image.png",
    tagline: "Polished uniforms for calm, professional spaces.",
    desc: "Breathable fabrics and fluid cuts designed for ease of movement and a refined, serene look.",
    href: "/collection/spa",
  },
  {
    title: "Healthcare",
    image: "/images/home-icons-all/featured-images/Healthcare.png",
    tagline: "Hygiene-first uniforms made for long shifts.",
    desc: "Durable, easy-care fabrics with functional design, built for comfort, movement, and everyday reliability.",
    href: "/collection/healthcare",
  },
  {
    title: "Airlines",
    image: "/images/home-icons-all/featured-images/Airline.png",
    tagline: "Elegance in motion at 30,000 feet above the sky",
    desc: "Breathable, enduring uniforms designed to keep every crew member sharp from check-in to touchdown.",
    href: "/collection/airline",
  },
  {
    title: "Corporate",
    image: "/images/home-icons-all/featured-images/Corporate Image.png",
    tagline: "Sharp tailoring, around the clock comfort.",
    desc: "Premium corporate wear built to look composed from meetings to after-hours, without compromise!",
    href: "/collection/corporate",
  },
  {
    title: "Education",
    image: "/images/home-icons-all/featured-images/School-home.png",
    tagline: "A smarter uniform for smarter institutions.",
    desc: "Made for comfort and built for supporting students from classrooms to campus life.",
    href: "/collection/school",
  },
];

export default function Home() {
  const testimonials = [
    {
      quote:
        "Fashion Fabric has been our trusted uniform partner for years. Their attention to detail, quality of fabrics, and timely delivery have made them an invaluable asset to our operations.",
      name: "Hotel Manager",
      company: "5-Star Hotel in Goa",
      logo: "/images/testimonials/Untitled-4_Hotel Manager.svg",
    },
    {
      quote:
        "The team at Fashion Fabric understands our brand aesthetic perfectly. They've created custom uniforms that our staff love to wear and that perfectly represent our brand image.",
      name: "F&B Director",
      company: "Luxury Resort in Goa",
      logo: "/images/testimonials/Untitled-4_F&B Director.svg",
    },
    {
      quote:
        "We've been working with Fashion Fabric for over 5 years now. Their consistent quality and reliability make them our go-to uniform supplier for all our properties.",
      name: "Procurement Manager",
      company: "Hotel Chain",
      logo: "/images/testimonials/Untitled-4_Procurement Manager.svg",
    },
    {
      quote:
        "The custom chef coats designed by Fashion Fabric are not only stylish but also incredibly comfortable and durable. Our kitchen team is very satisfied.",
      name: "Executive Chef",
      company: "Fine Dining Restaurant",
      logo: "/images/testimonials/Untitled-4_Executive Chef.svg",
    },
    {
      quote:
        "Fashion Fabric's attention to detail and commitment to quality is unmatched. They delivered our large order on time and exceeded our expectations.",
      name: "General Manager",
      company: "Casino in Goa",
      logo: "/images/testimonials/Untitled-4_General Manager.svg",
    },
    {
      quote:
        "Working with Fashion Fabric has been a pleasure. Their team is responsive, professional, and always willing to go the extra mile to meet our requirements.",
      name: "Operations Director",
      company: "Boutique Hotel",
      logo: "/images/testimonials/Untitled-4_Operations Director.svg",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-black">
      <main className="flex-1">
        {/* Hero Section - The Grand Entrance */}
        <section className="relative w-full h-screen min-h-[700px] md:h-[140vh] flex items-center justify-center overflow-hidden bg-black">
          {/* Layered Cinematic Overlays - Reduced opacity for video visibility */}
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/70 via-transparent to-black"></div>
          <div className="absolute inset-0 z-10 bg-[url('https://www.transparenttextures.com/patterns/linen.png')] opacity-10 pointer-events-none"></div>
          
          {/* Royal Accents - Golden/Yellow Glows */}
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2 pointer-events-none animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-yellow-500/10 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2 pointer-events-none" />

          {/* Hero Video - More visible and royal */}
          <div className="absolute inset-0 w-full h-full z-0 opacity-100 bg-black">
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              poster="/images/bg-imges-hero-sections/image-01.jpg"
              className="w-full h-full object-cover transition-opacity duration-1000 saturate-[1.1] brightness-[0.9]"
            >
              <source src="/video/V5.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="container relative z-20 px-4 md:px-6 flex flex-col items-center text-center -mt-32 md:-mt-20">
            <AnimateInStagger>
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="w-12 h-px bg-amber-500 hidden sm:block"></div>
                <span className="text-amber-500 font-bold tracking-[0.6em] md:tracking-[1em] uppercase text-[10px] md:text-sm drop-shadow-lg scale-90 sm:scale-100">
                  THE PINNACLE OF CRAFTSMANSHIP
                </span>
                <div className="w-12 h-px bg-amber-500 hidden sm:block"></div>
              </div>
              <h1 className="text-5xl sm:text-7xl md:text-[10rem] font-bold tracking-tighter text-white mb-8 leading-[1.1] md:leading-[0.9] font-garamond italic drop-shadow-2xl">
                The Master <br className="hidden sm:block" />
                <span className="text-amber-500 font-light drop-shadow-[0_0_15px_rgba(245,158,11,0.5)]">Collection</span>
              </h1>
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 mt-12">
                <div className="h-px w-20 bg-amber-500/50 hidden md:block"></div>
                <p className="max-w-[800px] text-lg sm:text-2xl md:text-4xl text-white/90 font-garamond italic font-light tracking-wide px-4 drop-shadow-lg leading-relaxed">
                  "Redefining corporate identity through the lens of <br className="hidden md:block" /> timeless elegance and royal precision."
                </p>
                <div className="h-px w-20 bg-amber-500/50 hidden md:block"></div>
              </div>
              <div className="mt-16 sm:mt-24 flex justify-center w-full px-4 max-w-xl mx-auto sm:max-w-none">
                <Link href="/catalogue" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full sm:w-auto bg-amber-500 hover:bg-amber-400 text-black border-2 border-transparent hover:border-amber-500 rounded-full px-12 sm:px-16 py-8 sm:py-10 text-lg sm:text-2xl font-garamond font-bold tracking-widest transition-all hover:scale-105 shadow-[0_20px_60px_rgba(245,158,11,0.4)]">
                    VIEW CATALOGUE
                  </Button>
                </Link>
              </div>
            </AnimateInStagger>
          </div>
          
          {/* Aesthetic Scroll Indicator */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4 opacity-70">
            <span className="text-amber-500 uppercase tracking-[0.5em] text-[10px] font-bold">The Journey Begins</span>
            <div className="w-px h-24 bg-gradient-to-b from-amber-500 via-amber-500/50 to-transparent animate-infinite-scroll"></div>
          </div>
        </section>

        {/* Redefining Excellence Section - Royal Heritage - Bright */}
        <section className="py-24 md:py-48 relative overflow-hidden bg-[#fcfdfc] border-t-4 border-amber-500/20">
          {/* Royal Texture - Exclusive Paper */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/exclusive-paper.png')] opacity-30 pointer-events-none"></div>
          
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-32">
              <AnimateIn direction="left" className="w-full lg:w-1/2">
                <div className="relative group">
                  <div className="absolute -inset-8 border border-neutral-200 rounded-[3rem] -z-10 transition-colors duration-700 group-hover:border-amber-500/30"></div>
                  <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border border-neutral-100">
                    <Image
                      src="/images/work/DSC00460.jpg"
                      alt="The Master Tailor"
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  </div>
                  {/* Decorative quote badge */}
                  <div className="absolute -top-10 -left-10 w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-xl z-20 border-8 border-neutral-50 text-amber-600 transition-colors hover:bg-amber-500/10">
                    <Quote className="rotate-180" size={32} />
                  </div>
                </div>
              </AnimateIn>

              <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left">
                <AnimateInStagger>
                  <span className="text-amber-600 font-bold tracking-[0.5em] uppercase text-xs mb-8 block">A Legacy of Masters</span>
                  <h2 className="text-5xl md:text-8xl font-bold text-black mb-10 font-garamond italic leading-tight">
                    The Heritage of <br /><span className="text-amber-500 font-light drop-shadow-sm">Mastery</span>
                  </h2>
                  <div className="w-32 h-[1px] bg-amber-500/30 mb-12 mx-auto lg:mx-0"></div>
                  <p className="text-neutral-600 text-xl md:text-3xl font-light italic leading-relaxed font-garamond mb-12">
                    "Since 2008, Fashion Fabric has stood as the silent architect of distinction. We don't just dress teams; we crown them with identity."
                  </p>
                  <Link href="/about">
                    <Button className="bg-amber-600 border-none text-white hover:bg-amber-700 rounded-full px-12 py-8 text-sm font-bold tracking-[0.4em] transition-all group self-center lg:self-start shadow-xl">
                      OUR STORY <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" size={16} />
                    </Button>
                  </Link>
                </AnimateInStagger>
              </div>
            </div>
          </div>
        </section>

        {/* Values Showcase - Royal Pillars */}
        <section className="py-40 bg-black relative overflow-hidden border-y border-white/5">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/linen.png')] opacity-10 pointer-events-none"></div>
          
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center text-center mb-32">
              <AnimateInStagger>
                <span className="text-amber-500 font-bold tracking-[0.5em] uppercase text-xs mb-6 block">Our Commitment</span>
                <h2 className="text-5xl md:text-7xl font-bold text-white mb-10 font-garamond italic">The Pillars of <span className="text-amber-500 font-light drop-shadow-[0_0_10px_rgba(245,158,11,0.2)]">Quality</span></h2>
                <div className="w-40 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent mx-auto"></div>
              </AnimateInStagger>
            </div>

            <AnimateInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {[
                { title: "Bespoke Mastery", desc: "Every garment drafted with singular focus, one stitch at a time.", icon: Sparkles },
                { title: "Premium Quality", desc: "Finest fabrics curated from the world's most trusted mills.", icon: Star },
                { title: "Rapid Process", desc: "Efficient supply lines for swift global deployment.", icon: Zap },
                { title: "Dedicated Service", desc: "Unwavering commitment to your brand's lasting legacy.", icon: ShieldCheck }
              ].map((v, i) => (
                <div key={i} className="group relative bg-[#111111] backdrop-blur-md p-12 rounded-[3.5rem] text-center border border-white/5 hover:border-amber-500/40 transition-all duration-700 hover:shadow-[0_40px_80px_-20px_rgba(245,158,11,0.2)]">
                  <div className="w-24 h-24 flex items-center justify-center mx-auto mb-10 bg-amber-500/10 rounded-3xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-700 shadow-sm border border-amber-500/20">
                    <v.icon className="text-amber-500" size={40} />
                  </div>
                  <h3 className="text-3xl font-bold mb-6 text-white font-garamond italic">{v.title}</h3>
                  <p className="text-white/40 leading-relaxed font-garamond italic text-lg">{v.desc}</p>
                </div>
              ))}
            </AnimateInStagger>
          </div>
        </section>

        {/* Industries We Serve Section - Royal Showcase - Bright */}
        <section className="py-40 bg-[#fcfdfc] relative overflow-hidden border-t-4 border-amber-500/20">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/exclusive-paper.png')] opacity-30 pointer-events-none"></div>
          
          <div className="container max-w-[1600px] px-8 md:px-12 relative z-10">
            <AnimateInStagger className="flex flex-col items-center text-center mb-32">
              <span className="text-amber-600 font-bold tracking-[0.5em] uppercase text-xs mb-6 block">Industry Expertise</span>
              <h2 className="text-4xl md:text-9xl font-bold text-black font-garamond italic mb-6 leading-tight">
                Industries We <span className="text-amber-500 font-light drop-shadow-sm">Serve</span>
              </h2>
              <p className="max-w-4xl text-lg md:text-2xl text-neutral-600 font-garamond italic font-light leading-relaxed">"From the heights of the sky to the heart of hospitality, we outfit the leaders of every realm."</p>
              <div className="w-60 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent mt-12"></div>
            </AnimateInStagger>
            
            <AnimateInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
              {featuredProducts.map((product, index) => (
                <div
                  key={product.title}
                  className="group relative bg-white rounded-[4rem] overflow-hidden transition-all duration-1000 hover:shadow-2xl h-[500px] md:h-[700px] border border-neutral-100 hover:border-amber-500/40"
                >
                  <div className="absolute inset-0">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover opacity-95 transition-transform duration-[2s] group-hover:scale-110"
                      loading={index < 4 ? "eager" : "lazy"}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-100 transition-opacity group-hover:opacity-40"></div>
                  </div>
                  
                  <div className="absolute inset-0 flex flex-col justify-end p-10 md:p-14 z-20">
                    <div className="transform group-hover:-translate-y-6 transition-transform duration-700">
                      <h3 className="text-white text-4xl md:text-5xl font-garamond italic mb-6 drop-shadow-md leading-tight break-words group-hover:text-amber-400 transition-colors">
                        {product.title}
                      </h3>
                      
                      <div className="max-h-0 group-hover:max-h-[400px] opacity-0 group-hover:opacity-100 transition-all duration-1000 overflow-hidden">
                        <p className="text-amber-400 font-bold text-[10px] tracking-[0.4em] uppercase mb-6">
                          {product.tagline}
                        </p>
                        <p className="text-white/90 text-lg mb-10 leading-relaxed font-garamond italic font-light">
                          {product.desc}
                        </p>
                        <Link
                          href={product.href}
                          className="inline-flex items-center text-white bg-amber-600 px-10 py-4 rounded-full text-[10px] font-bold tracking-[0.4em] uppercase hover:bg-amber-700 transition-all group/link"
                        >
                          EXPLORE REALM <ArrowRight size={14} className="ml-3 group-hover/link:translate-x-2 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </AnimateInStagger>
          </div>
        </section>

        {/* Impact Section - Royal Stats */}
        <section className="py-32 md:py-48 bg-black relative overflow-hidden border-t border-white/5">
          {/* Subtle Linen Texture Overlay */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/linen.png')] opacity-10 pointer-events-none"></div>
          
          {/* Cinematic Background Glows */}
          <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-yellow-500/5 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2 pointer-events-none" />
 
          <div className="container px-4 md:px-6 relative z-10">
            <AnimateIn className="flex flex-col items-center text-center mb-16 md:mb-24">
              <span className="text-amber-500 font-bold tracking-[0.6em] uppercase text-[10px] md:text-xs mb-6 block">Our Impact</span>
              <h2 className="text-4xl sm:text-6xl md:text-[8rem] font-bold text-white font-garamond italic leading-tight">
                A Legacy Built on <span className="text-amber-500 font-light drop-shadow-[0_0_15px_rgba(245,158,11,0.3)]">Precision</span>
              </h2>
            </AnimateIn>

            <AnimateInStagger className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16">
              {[
                { val: "15+", label: "Years Experience", icon: Award },
                { val: "60+", label: "Global Brands", icon: Hotel },
                { val: "100k+", label: "Crews Outfitted", icon: Users },
                { val: "43k+", label: "Orders Completed", icon: CheckCircle }
              ].map((stat, i) => (
                <div key={i} className="flex flex-col items-center text-center group">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white/5 flex items-center justify-center mb-6 md:mb-8 group-hover:bg-amber-500 transition-all duration-500 border border-white/10 group-hover:border-amber-400 group-hover:rotate-6 shadow-sm group-hover:shadow-[0_0_30px_rgba(245,158,11,0.3)]">
                    <stat.icon className="text-amber-500 group-hover:text-black transition-colors" size={32} />
                  </div>
                  <div className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-2 font-garamond">{stat.val}</div>
                  <div className="text-amber-500/80 font-bold tracking-[0.3em] uppercase text-[8px] md:text-xs">{stat.label}</div>
                </div>
              ))}
            </AnimateInStagger>
          </div>
        </section>

        {/* Our Royal Patrons Section - Bright Lavish Columns */}
        <section className="py-40 bg-[#fcfdfc] relative overflow-hidden border-t-4 border-amber-500/20">
          {/* Royal Background Decor */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/linen.png')] opacity-30 pointer-events-none"></div>
          
          {/* Cinematic Background Glows */}
          <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />

          <div className="container px-4 md:px-6 relative z-10">
            <AnimateIn className="flex flex-col items-center text-center mb-16 md:mb-24">
              <span className="text-amber-600 font-bold tracking-[0.5em] uppercase text-[10px] md:text-xs mb-6 block">Distinguished Partners</span>
              <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold text-black font-garamond italic mb-10 leading-tight">
                Our Royal <span className="text-amber-500 font-light drop-shadow-sm">Patrons</span>
              </h2>
              <p className="text-neutral-600 max-w-4xl text-lg sm:text-2xl md:text-3xl font-light italic leading-relaxed font-garamond px-4">
                "Where craftsmanship meets legacy. Serving the world's most distinguished establishments with the precision of a master."
              </p>
              <div className="w-40 h-[1px] bg-gradient-to-r from-transparent via-amber-500 to-transparent mt-12 mx-auto"></div>
            </AnimateIn>
            
            <AnimateIn>
              <div className="py-12 px-8 bg-white rounded-[3rem] border border-neutral-100 shadow-xl overflow-hidden">
                <InfiniteLogoScroll clients={clients} speed={60} logoSize={160} />
              </div>
            </AnimateIn>
            
            <AnimateIn delay={0.5}>
              <div className="text-center mt-16">
                <Link
                  href="/clients"
                  className="inline-flex items-center gap-3 text-amber-600 font-bold tracking-[0.3em] uppercase hover:text-black transition-all group text-xs border-b border-amber-500/30 pb-1"
                >
                  View All Patrons <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </AnimateIn>
          </div>
        </section>

        {/* Grand Testimony Section - Royal Chronicles - Bright */}
        <section className="py-32 md:py-40 bg-[#fcfdfc] relative overflow-hidden border-t-4 border-amber-500/20">
          {/* Artistic Background Masala */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/exclusive-paper.png')] opacity-30 pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-amber-500/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-yellow-500/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />

          {/* Ghost Typography Background */}
          <div className="absolute top-20 left-10 opacity-[0.03] pointer-events-none select-none hidden lg:block">
            <span className="text-[20rem] font-garamond italic leading-none text-black">“</span>
          </div>

          <div className="container px-4 md:px-6 relative z-10 mb-24 text-center">
            <AnimateIn>
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="w-12 h-px bg-amber-500/30"></div>
                <span className="text-amber-600 font-bold tracking-[0.5em] uppercase text-xs">Royal Testimony</span>
                <div className="w-12 h-px bg-amber-500/30"></div>
              </div>
              
              <h2 className="text-6xl md:text-[8rem] font-bold text-black mb-12 font-garamond italic tracking-tighter leading-tight">
                Client <span className="text-amber-500 font-light drop-shadow-sm">Testimony</span>
              </h2>
              
              <div className="flex items-center justify-center gap-2 mb-12">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className="text-amber-500 fill-amber-500" />
                ))}
              </div>

              <p className="text-neutral-600 max-w-3xl mx-auto text-2xl font-light italic leading-relaxed font-garamond">
                "A tradition of excellence, verified by our distinguished partners."
              </p>
            </AnimateIn>
          </div>
          
          <div className="container px-4 md:px-6 flex justify-center pb-24 relative z-20">
            <div className="w-full max-w-6xl relative">
              {/* Luxury Frame Accents for Stack */}
              <div className="absolute -inset-10 border border-neutral-200 rounded-[4rem] -z-10 pointer-events-none hidden lg:block transition-all duration-700 hover:border-amber-500/20"></div>
              <div className="absolute inset-0 bg-white shadow-xl rounded-[4rem] -z-20 pointer-events-none"></div>
              <TestimonialStack testimonials={testimonials} />
            </div>
          </div>
        </section>

        {/* Our Mission Section - Bright Finale */}
        <section className="py-40 bg-[#fcfdfc] relative overflow-hidden border-t-4 border-amber-500/20">
          {/* Subtle Pattern */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/linen.png')] opacity-30 pointer-events-none"></div>
          
          <div className="container px-4 md:px-6 relative z-10">
            <div className="max-w-5xl mx-auto bg-white p-12 md:p-24 rounded-[3rem] shadow-2xl border border-neutral-200 flex flex-col items-center text-center relative overflow-hidden group hover:border-amber-500/30 transition-colors duration-700">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/linen.png')] opacity-[0.05] pointer-events-none"></div>
              
              <AnimateIn>
                <div className="w-20 h-20 rounded-2xl bg-amber-500/10 flex items-center justify-center mb-10 shadow-sm border border-amber-500/20 mx-auto transition-transform duration-700 group-hover:rotate-12 group-hover:scale-110 group-hover:bg-amber-500">
                  <Sparkles className="text-amber-500 group-hover:text-black transition-colors" size={40} />
                </div>
                
                <h2 className="text-4xl md:text-7xl font-bold text-black mb-8 font-garamond italic">
                  Our Royal <span className="text-amber-500 font-light drop-shadow-sm">Mission</span>
                </h2>
                <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mb-10"></div>
                
                <p className="text-neutral-600 text-xl md:text-3xl font-light italic leading-relaxed font-garamond mb-12">
                  To empower the world's finest establishments with uniforms that doesn't 
                  just serve a purpose, but tell a story of commitment, quality, and royal 
                  distinction. We are the stewards of your brand's first impression.
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                  <Link href="/enquiry">
                    <Button className="bg-amber-600 hover:bg-amber-700 text-white rounded-full px-12 py-8 text-sm font-bold tracking-[0.3em] transition-all shadow-xl">
                      PARTNER WITH US
                    </Button>
                  </Link>
                  <p className="text-neutral-400 text-sm font-medium tracking-widest uppercase italic">
                    Est. 2008 &bull; The Master Tailors
                  </p>
                </div>
              </AnimateIn>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
