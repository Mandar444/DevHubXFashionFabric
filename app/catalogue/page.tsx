"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AnimateIn, AnimateInStagger } from "@/components/animate-in"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function CataloguePage() {
  const router = useRouter()
  const [phoneNumber, setPhoneNumber] = useState("")
  const [otp, setOtp] = useState("")
  const [otpSent, setOtpSent] = useState(false)
  const [otpVerified, setOtpVerified] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSendOtp = async () => {
    if (phoneNumber.length < 10) {
      alert("Please enter a valid phone number")
      return
    }
    setIsLoading(true)
    // Simulate OTP sending
    setTimeout(() => {
      setOtpSent(true)
      setIsLoading(false)
      alert("OTP sent to your phone number")
    }, 1000)
  }

  const handleVerifyOtp = async () => {
    if (otp.length !== 6) {
      alert("Please enter a valid 6-digit OTP")
      return
    }
    setIsLoading(true)
    // Simulate OTP verification
    setTimeout(() => {
      setOtpVerified(true)
      setIsLoading(false)
      alert("Phone number verified successfully!")
    }, 1000)
  }

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    if (!otpVerified) {
      alert("Please verify your phone number before downloading")
      return
    }

    setIsLoading(true)

    try {
      // Get form data
      const formData = new FormData(e.currentTarget)
      const data = {
        firstName: formData.get("firstName") as string,
        lastName: formData.get("lastName") as string,
        email: formData.get("email") as string,
        companyName: formData.get("companyName") as string,
        phoneNumber: phoneNumber,
        country: formData.get("country") as string,
        communications: formData.get("communications") === "on",
      }

      // Submit form data to API
      const response = await fetch("/api/catalogue/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (response.ok) {
        // Navigate to downloads page
        router.push("/catalogue/downloads")
      } else {
        alert(result.error || "Failed to submit form")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      alert("An error occurred. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }
  const categories = [
    { name: "Air Hostess Uniform", image: "/images/catalogue/air-hostess.png" },
    { name: "Bar Tender Uniform", image: "/images/catalogue/bar-tendor.png" },
    { name: "Bow Tie", image: "/images/catalogue/bow.jpg" },
    { name: "Casino Uniform", image: "/images/catalogue/casino-uniform.jpg" },
    { name: "Catering Uniforms", image: "/images/catalogue/catering-uniforms.png" },
    { name: "Chef Accessories", image: "/images/catalogue/CHEF-ACCESSORIES.jpg" },
    { name: "Chef Apron", image: "/images/catalogue/chef-apron.png" },
    { name: "Chef Coats", image: "/images/catalogue/chef-coats.jpg" },
    { name: "Corporate Wear Suit", image: "/images/catalogue/CORPORATE-WEAR-SUIT.png" },
    { name: "Doorman Uniforms", image: "/images/catalogue/DOORMAN-UNIFORMS.png" },
    { name: "Driver Uniforms", image: "/images/catalogue/driver-uniforms.png" },
    { name: "F&B Uniforms", image: "/images/catalogue/f&b-uniforms.png" },
    { name: "Front Office Uniforms", image: "/images/catalogue/FRONT-OFFICE-UNIFORMS.png" },
    { name: "Hospital Uniforms", image: "/images/catalogue/HOSPITAL-UNIFORMS.png" },
    { name: "Security Uniform", image: "/images/catalogue/hotel-security.jpg" },
    { name: "Housekeeping Uniforms", image: "/images/catalogue/HOUSEKEEPING-UNIFORMS.png" },
    { name: "Lab Coats", image: "/images/catalogue/lab-coats.png" },
    { name: "Polo T-shirt", image: "/images/catalogue/polo-tshirt.jpg" },
    { name: "School Uniform", image: "/images/catalogue/school-uniform.png" },
    { name: "Spa Uniforms", image: "/images/catalogue/SPA-UNIFORMS.png" },
    { name: "Tie", image: "/images/catalogue/tie.jpg" },
    { name: "Trousers", image: "/images/catalogue/trousers.jpg" },
    { name: "Round Neck T-shirt", image: "/images/catalogue/uniform-ROUND-NECK-T-SHIRT.jpg" },
  ]

  const formalShoes = [
    { name: "FORMAL SHOES - BLACK", image: "/images/catalogue/shoes-black.jpg" },
    { name: "FORMAL SHOES - BROWN", image: "/images/catalogue/shoes-brown.jpg" },
    // { name: "FORMAL SHOES - WOMEN", image: "/images/catalogue/shoes-women.jpg" },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full min-h-[40vh] flex items-center justify-center overflow-hidden bg-neutral-200">
          {/* Video for desktop */}
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="none"
            className="absolute inset-0 w-full h-full object-cover z-0 hidden sm:block"
            poster="/images/work/DSC00467.jpg"
          >
            <source
              src="https://dhyeydeveloper.github.io/fashion-fabric-videos/V1.mp4"
              type="video/mp4"
            />
          </video>

          {/* Fallback image for mobile */}
          <Image
            src="/images/work/DSC00467.jpg"
            alt="Product Catalogue"
            fill
            className="absolute inset-0 w-full h-full object-cover z-0 block sm:hidden"
          />

          <div className="absolute inset-0 z-10 bg-black/40"></div>
          <div className="container relative z-20 px-4 md:px-6 flex flex-col items-center text-center">
            <AnimateIn>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-4">Product Catalogue</h1>
            </AnimateIn>
            <AnimateIn delay={0.2}>
              <p className="max-w-[800px] text-lg text-white/90">
                Explore our wide range of high-quality uniforms for the hospitality industry
              </p>
            </AnimateIn>
          </div>
        </section>

        {/* Catalogue Grid */}
        <section className="py-16 bg-white">
          <div className="container px-4 md:px-6">
            <AnimateInStagger
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              staggerDelay={0.03}
            >
              {categories.map((category, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border"
                >
                  <div className="aspect-[4/3] relative">
                    <Image
                      src={category.image || "/placeholder.svg"}
                      alt={category.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-base font-semibold text-center">{category.name}</h3>
                  </div>
                </div>
              ))}
            </AnimateInStagger>
          </div>
        </section>

        {/* Formal Shoes Section */}
        <section className="py-16 bg-neutral-50">
          <div className="container px-4 md:px-6">
            <AnimateIn>
              <h2 className="text-3xl font-bold text-center mb-12">Formal Shoes Collection</h2>
            </AnimateIn>

            {/* MEN Section */}
            <AnimateIn>
              <h3 className="text-2xl font-semibold mb-6 mt-8 text-center text-neutral-800">MEN</h3>
            </AnimateIn>
            <AnimateInStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {[
                { name: "Oxford shoes", image: "/images/catalogue/oxford-shoes.webp" },
                { name: "Derby shoes", image: "/images/catalogue/derby-shoes.jpg" },
                { name: "Brogues", image: "/images/catalogue/Brogues.webp" },
                { name: "Monk Straps", image: "/images/catalogue/Monk-Straps.webp" },
                { name: "Loafers", image: "/images/catalogue/Loafers.avif" },
                { name: "Wholecut", image: "/images/catalogue/Wholecut.jpeg" },
                { name: "Chelsea Boots", image: "/images/catalogue/Chelsea.jpg" },
              ].map((shoe, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border"
                >
                  <div className="aspect-[4/3] relative">
                    <Image
                      src={shoe.image}
                      alt={shoe.name}
                      fill
                      className="object-contain group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-base font-semibold text-center">{shoe.name}</h3>
                  </div>
                </div>
              ))}
            </AnimateInStagger>

            {/* WOMEN Section */}
            <AnimateIn>
              <h3 className="text-2xl font-semibold mb-6 mt-8 text-center text-neutral-800">WOMEN</h3>
            </AnimateIn>
            <AnimateInStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {[
                { name: "Classic Pumps", image: "/images/catalogue/Classic-Pumps.jpg" },
                { name: "Ballet Flats", image: "/images/catalogue/Ballet-Flats.jpg" },
                { name: "Moccasins", image: "/images/catalogue/Moccasins.jpg" },
              ].map((shoe, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border"
                >
                  <div className="aspect-[4/3] relative">
                    <Image
                      src={shoe.image}
                      alt={shoe.name}
                      fill
                      className="object-contain group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-base font-semibold text-center">{shoe.name}</h3>
                  </div>
                </div>
              ))}
            </AnimateInStagger>

            {/* UNISEX Section */}
            <AnimateIn>
              <h3 className="text-2xl font-semibold mb-6 mt-8 text-center text-neutral-800">UNISEX</h3>
            </AnimateIn>
            <AnimateInStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: "Chef clogs", image: "/images/catalogue/Chef-clogs.jpg" },
              ].map((shoe, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border"
                >
                  <div className="aspect-[4/3] relative">
                    <Image
                      src={shoe.image}
                      alt={shoe.name}
                      fill
                      className="object-contain group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-base font-semibold text-center">{shoe.name}</h3>
                  </div>
                </div>
              ))}
            </AnimateInStagger>
          </div>
        </section>

        {/* Download Catalogue Section */}
        <section className="py-16 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Form Section */}
              <AnimateIn>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-8">DOWNLOAD THE NEW CATALOGUE</h2>
                  <form className="space-y-4" onSubmit={handleFormSubmit}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium mb-1">
                          First name<span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          placeholder="First name"
                          required
                          className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-700"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium mb-1">
                          Last name<span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          placeholder="Last name"
                          required
                          className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-700"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1">
                        Email<span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email"
                        required
                        className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-700"
                      />
                    </div>

                    <div>
                      <label htmlFor="companyName" className="block text-sm font-medium mb-1">
                        Company name
                      </label>
                      <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        placeholder="Company Name"
                        className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-700"
                      />
                    </div>

                    <div>
                      <label htmlFor="phoneNumber" className="block text-sm font-medium mb-1">
                        Contact Number<span className="text-red-500">*</span>
                      </label>
                      <div className="flex gap-2">
                        <input
                          type="tel"
                          id="phoneNumber"
                          placeholder="Enter 10-digit phone number"
                          required
                          value={phoneNumber}
                          onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, "").slice(0, 10))}
                          disabled={otpVerified}
                          className="flex-1 px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-700 disabled:bg-neutral-100"
                        />
                        {!otpVerified && (
                          <Button
                            type="button"
                            onClick={handleSendOtp}
                            disabled={phoneNumber.length < 10 || otpSent || isLoading}
                            className="bg-amber-700 hover:bg-amber-800 text-white whitespace-nowrap"
                          >
                            {isLoading ? "Sending..." : otpSent ? "Resend OTP" : "Send OTP"}
                          </Button>
                        )}
                        {otpVerified && (
                          <span className="flex items-center text-green-600 font-medium">
                            ✓ Verified
                          </span>
                        )}
                      </div>
                    </div>

                    {otpSent && !otpVerified && (
                      <div>
                        <label htmlFor="otp" className="block text-sm font-medium mb-1">
                          Enter OTP<span className="text-red-500">*</span>
                        </label>
                        <div className="flex gap-2">
                          <input
                            type="text"
                            id="otp"
                            placeholder="Enter 6-digit OTP"
                            required
                            value={otp}
                            onChange={(e) => setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))}
                            className="flex-1 px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-700"
                          />
                          <Button
                            type="button"
                            onClick={handleVerifyOtp}
                            disabled={otp.length !== 6 || isLoading}
                            className="bg-green-600 hover:bg-green-700 text-white"
                          >
                            {isLoading ? "Verifying..." : "Verify"}
                          </Button>
                        </div>
                      </div>
                    )}

                    <div>
                      <label htmlFor="country" className="block text-sm font-medium mb-1">
                        Country<span className="text-red-500">*</span>
                      </label>
                      <select
                        id="country"
                        name="country"
                        required
                        className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-700 text-neutral-500"
                      >
                        <option value="">Please Select</option>
                        <option value="india">India</option>
                        <option value="usa">United States</option>
                        <option value="uk">United Kingdom</option>
                        <option value="uae">United Arab Emirates</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                   

                    
                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        id="communications"
                        name="communications"
                        className="mt-1 mr-2"
                      />
                      <label htmlFor="communications" className="text-sm">
                        Yes! I agree to receive communications from Cargo Crew.<span className="text-red-500">*</span>
                      </label>
                    </div>

                    <div className="pt-2">
                      <div className="bg-neutral-100 p-3 rounded-md text-xs text-neutral-600">
                        This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
                      </div>
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={!otpVerified}
                      className="bg-[#0a1f3d] hover:bg-[#0a1f3d]/90 text-white px-8 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Download
                    </Button>
                    {!otpVerified && (
                      <p className="text-sm text-red-600 mt-2">Please verify your phone number to download catalogues</p>
                    )}
                  </form>
                </div>
              </AnimateIn>

              {/* Catalogue Preview Image */}
              <AnimateIn delay={0.2}>
                <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/images/catalogue/catalogue-preview.jpg"
                    alt="Catalogue Preview"
                    fill
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
              </AnimateIn>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-amber-50">
          <div className="container px-4 md:px-6 text-center">
            <AnimateIn>
              <h2 className="text-3xl font-bold mb-6">Need Custom Uniforms?</h2>
              <p className="max-w-[600px] mx-auto text-neutral-600 mb-8">
                We specialize in creating bespoke uniform solutions tailored to your specific requirements. Contact us
                today to discuss your needs.
              </p>
              <Button asChild size="lg" className="bg-amber-700 hover:bg-amber-800 text-white">
                <Link href="/enquiry">Request a Quote</Link>
              </Button>
            </AnimateIn>
          </div>
        </section>
      </main>
    </div>
  )
}
