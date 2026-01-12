"use client"

import { JSX, useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { AnimateIn } from "@/components/animate-in"
import Link from "next/link"

interface FAQItem {
  question: string
  answer: string | JSX.Element
}

interface FAQSection {
  title: string
  items: FAQItem[]
}

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({
    "general-0": true, // First item open by default
  })

  const toggleItem = (sectionIndex: number, itemIndex: number) => {
    const key = `${sectionIndex}-${itemIndex}`
    setOpenItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  const faqSections: FAQSection[] = [
    {
      title: "General",
      items: [
        {
          question: "What types of uniforms do you design and manufacture?",
          answer: (
            <>
              We create high-quality custom uniforms for various industries, including hospitality, corporate, healthcare, and retail. We specialize in chef coats, hostess uniforms, corporate wear, and other professional attire for the hospitality sector.
              <br />
              <br />
              <em>Let's craft the perfect uniform for your brand</em> – <Link href="/enquiry" className="text-[#2e7d32] hover:underline">Make an Enquiry!</Link>
            </>
          ),
        },
        {
          question: "Where is Fashion Fabric located?",
          answer: "We are based in Goa, India at Shop No. 8, Block - II, Dukle Heaven, Near Yamaha Showroom, Santa Inez, Panaji, Taleigao, Goa 403001. We serve clients across India and internationally, providing premium uniform manufacturing and linen solutions with over 15 years of industry experience. Our showroom is open Monday to Saturday from 10:00 AM to 8:00 PM.",
        },
        {
          question: "Do you offer ready-made uniforms or only custom designs?",
          answer: "We specialize in bespoke, custom-made uniforms tailored to your exact specifications and requirements. Every uniform is designed to complement every shape, size, and setting with seamless sophistication. We work closely with you from design concept to final delivery to create uniforms that truly represent your business and brand identity.",
        },
        {
          question: "Which companies do you work with?",
          answer: "We are trusted by leading hospitality brands including Taj Hotels, Marriott, W Goa, Grand Hyatt, St. Regis, Hard Rock Hotel, Holiday Inn, Le Meridien, Novotel, Deltin, Big Daddy Casino, and many more prestigious names in the hospitality industry across Goa and India.",
        },
      ],
    },
    {
      title: "Why Choose Fashion Fabric?",
      items: [
        {
          question: "What makes Fashion Fabric different from other uniform suppliers?",
          answer: "We combine affordability with exceptional quality. With over 15 years of excellence in the industry, we offer custom-made uniforms at competitive prices for all budgets. Our legacy is built on trust, discretion, and an unwavering commitment to quality, earning us the confidence of the most prestigious names in the hospitality industry.",
        },
        {
          question: "What are your core values?",
          answer: "We pride ourselves on four key values: Affordability - quality uniforms at competitive prices for all budgets; Custom-Made - tailored to your exact specifications; Quality - premium fabrics and expert craftsmanship in every piece; and Timely Delivery - reliable and punctual delivery to meet your deadlines.",
        },
        {
          question: "Can I customize every aspect of my uniform design?",
          answer: "Absolutely! We offer complete customization including fabric selection, colors, logos, embroidery, buttons, pockets, collars, and any other design elements. Our experienced design team works with you through a meticulous process from design concept to pattern making, fabric selection, and final finishing to bring your vision to life.",
        },
      ],
    },
    {
      title: "Customization & Quality",
      items: [
        {
          question: "What is your design and production process?",
          answer: "Our meticulous process includes: 1) Design Concept - the creative vision inspired by culture, art, or function, working closely with clients to understand unique requirements; 2) Pattern Making - technical process of translating design into templates with our expert pattern makers; 3) Fabric Selection - choosing materials based on texture, durability, and purpose using only the finest fabrics; 4) Cutting & Sewing - precise execution where skilled artisans bring the design to life; and 5) Finishing Touches - the final refinement ensuring perfection in every detail.",
        },
        {
          question: "What products do you offer?",
          answer: "We offer a wide range of products including Chef Coats - professional chef coats designed for comfort and durability; Hostess Uniforms - elegant and stylish uniforms for front-of-house staff; Corporate Wear - professional attire for a polished corporate image for men and women; and various other hospitality uniforms tailored to specific industry needs.",
        },
        {
          question: "What materials do you use for uniforms?",
          answer: "We use premium quality fabrics sourced from trusted suppliers. Our fabric selection is based on texture, durability, and purpose, including cotton, polyester blends, linen, and specialized performance fabrics. The material choice depends on your industry requirements - breathable fabrics for hospitality, stain-resistant materials for F&B, or durable fabrics for industrial settings.",
        },
        {
          question: "How do you ensure quality control?",
          answer: "Quality is our top priority. At Fashion Fabric, comfort and style are not just a product - it's an experience stitched into every garment. Every uniform goes through rigorous quality checks at multiple stages from fabric inspection to cutting, sewing, and final finishing touches. We maintain strict quality standards with expert craftsmanship to ensure durability, comfort, and professional appearance.",
        },
        {
          question: "What is your minimum order quantity?",
          answer: "Our minimum order quantity varies depending on the complexity of the design and customization requirements. Typically, we require a minimum order of 50 pieces per style. However, we're flexible and can discuss your specific needs - contact us for a customized quote.",
        },
      ],
    },
    {
      title: "Ordering & Delivery",
      items: [
        {
          question: "How long does it take to complete an order?",
          answer: "Standard production time is 3-4 weeks from design approval. However, timelines can vary based on order quantity, customization complexity, and current production schedule. Rush orders can be accommodated with advance notice. We'll provide you with a detailed timeline during the quotation process.",
        },
        {
          question: "What is your ordering process?",
          answer: "Our process is simple: 1) Initial consultation to understand your requirements, 2) Design mockups and fabric samples, 3) Quotation and approval, 4) Sample approval, 5) Production, 6) Quality check, and 7) Delivery. We keep you informed at every step.",
        },
        {
          question: "Do you ship internationally?",
          answer: "Yes, we ship to customers worldwide. We work with reliable logistics partners to ensure safe and timely delivery of your uniforms. Shipping costs and timelines vary by location and will be included in your final quotation.",
        },
        {
          question: "What if I need to modify my order after placing it?",
          answer: "Minor modifications can be accommodated during the early production stages. However, significant changes after production has begun may affect timelines and costs. We recommend finalizing all details during the sample approval stage to avoid delays.",
        },
      ],
    },
    {
      title: "Pricing & Payment",
      items: [
        {
          question: "How do you calculate pricing?",
          answer: "Pricing depends on several factors including fabric quality, design complexity, customization level, embroidery/printing requirements, and order quantity. Larger orders typically receive better pricing. Contact us with your requirements for a detailed, no-obligation quote.",
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept various payment methods including bank transfers, online payments, and for established clients, credit terms. Typically, we require 50% advance payment upon order confirmation and 50% before delivery.",
        },
        {
          question: "Do you offer discounts for bulk orders?",
          answer: "Yes, we offer competitive pricing for bulk orders. The more you order, the better the per-unit price. Contact our sales team to discuss volume discounts for your specific requirements.",
        },
      ],
    },
    {
      title: "Design & Samples",
      items: [
        {
          question: "Can I see samples before placing a large order?",
          answer: "Absolutely! We strongly recommend approving samples before full production. We create prototype samples based on your specifications, which you can review and request modifications. This ensures the final product matches your expectations perfectly.",
        },
        {
          question: "Do you provide design assistance?",
          answer: "Yes! Our experienced design team can help you create the perfect uniform design. Whether you have a complete vision or just ideas, we'll work with you to develop designs that are functional, stylish, and aligned with your brand identity.",
        },
        {
          question: "Can you match our existing brand colors?",
          answer: "Yes, we can match your brand's specific colors. Provide us with Pantone codes or fabric samples, and we'll ensure color accuracy across all uniform pieces. We understand the importance of brand consistency.",
        },
      ],
    },
    {
      title: "Contact & Visit",
      items: [
        {
          question: "How can I contact Fashion Fabric?",
          answer: "You can reach us at: Phone: +91 9867275524, Email: fashionfabric@rocketmail.com, Address: Shop No. 8, Block - II, Dukle Heaven, Near Yamaha Showroom, Santa Inez, Panaji, Taleigao, Goa 403001. You can also visit our enquiry page to send us a message directly.",
        },
        {
          question: "What are your office hours?",
          answer: "Our showroom is open Monday to Saturday from 10:00 AM to 8:00 PM. We are closed on Sundays. You're welcome to visit our showroom to discuss your uniform requirements, view fabric samples, and explore our catalogue.",
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-[40vh] flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
          poster="/images/work/DSC00446.jpg"
        >
          <source src="https://dhyeydeveloper.github.io/fashion-fabric-videos/V2.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 z-10 bg-black/40"></div>
        <div className="container relative z-20 px-4 md:px-6 flex flex-col items-center text-center">
          <AnimateIn>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-4">
              Frequently Asked Questions
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <p className="max-w-[800px] text-lg text-white/90">
              Find answers to common questions about our uniform manufacturing and services
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          {faqSections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="mb-12">
              <AnimateIn>
                <h2 className="text-3xl font-bold mb-6 text-neutral-800">
                  {section.title}
                </h2>
              </AnimateIn>
              <div className="space-y-4">
                {section.items.map((item, itemIndex) => {
                  const key = `${sectionIndex}-${itemIndex}`
                  const isOpen = openItems[key]

                  return (
                    <AnimateIn key={itemIndex} delay={itemIndex * 0.1}>
                      <div className="border-2 border-[#2e7d32] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                        <button
                          onClick={() => toggleItem(sectionIndex, itemIndex)}
                          className="w-full px-6 py-5 bg-[#2e7d32] hover:bg-[#1b5e20] transition-colors flex items-center justify-between text-left"
                        >
                          <span className="font-semibold text-white text-lg pr-4">
                            {item.question}
                          </span>
                          {isOpen ? (
                            <ChevronUp className="w-6 h-6 text-white flex-shrink-0" />
                          ) : (
                            <ChevronDown className="w-6 h-6 text-white flex-shrink-0" />
                          )}
                        </button>
                        {isOpen && (
                          <div className="px-6 py-5 bg-white border-t-2 border-[#2e7d32]">
                            <div className="text-neutral-700 leading-relaxed">
                              {item.answer}
                            </div>
                          </div>
                        )}
                      </div>
                    </AnimateIn>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-neutral-50">
        <div className="container mx-auto max-w-4xl text-center">
          <AnimateIn>
            <h2 className="text-3xl font-bold mb-4 text-neutral-800">
              Still Have Questions?
            </h2>
            <p className="text-lg text-neutral-600 mb-8">
              We're here to help! Contact our team for personalized assistance with your uniform requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/enquiry"
                className="inline-flex items-center justify-center px-8 py-3 bg-[#2e7d32] text-white font-semibold rounded-lg hover:bg-[#1b5e20] transition-colors"
              >
                Get in Touch
              </Link>
              <Link
                href="/catalogue"
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-[#2e7d32] font-semibold rounded-lg border-2 border-[#2e7d32] hover:bg-[#f5f5f5] transition-colors"
              >
                View Our Catalogue
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>
    </div>
  )
}
