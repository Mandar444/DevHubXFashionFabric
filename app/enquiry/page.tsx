"use client"

import { useState } from "react"
import { MapPin, Mail, Phone, CheckCircle2, X, Sparkles, Send, Star, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { AnimateIn, AnimateInStagger } from "@/components/animate-in"
import Image from "next/image"

// SuccessModal component
function SuccessModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center backdrop-blur-xl bg-black/80 p-4">
      <div className="bg-emerald-950 border border-amber-500/30 rounded-[3rem] shadow-[0_0_100px_rgba(245,158,11,0.2)] p-12 max-w-lg w-full flex flex-col items-center relative animate-in fade-in zoom-in duration-500">
        <button
          className="absolute top-8 right-8 text-white/30 hover:text-amber-500 transition-colors"
          onClick={onClose}
          aria-label="Close"
        >
          <X size={28} />
        </button>
        
        <div className="w-24 h-24 bg-amber-500/20 rounded-full flex items-center justify-center mb-10 shadow-[0_0_40px_rgba(245,158,11,0.3)] border border-amber-500/40">
           <CheckCircle2 className="text-amber-500" size={56} />
        </div>
        
        <h3 className="text-4xl font-garamond italic font-bold mb-4 text-white">Decree Received</h3>
        <p className="text-white/60 text-center mb-10 font-garamond italic text-xl">"Your request has been filed in our royal archives. Our chamberlains will attend to your needs with the utmost priority."</p>
        
        <button
          className="w-full py-5 bg-amber-500 hover:bg-amber-600 text-emerald-950 rounded-full font-bold tracking-[0.2em] uppercase text-xs transition-all shadow-xl hover:scale-105"
          onClick={onClose}
        >
          RETURN TO KINGDOM
        </button>
      </div>
    </div>
  )
}

export default function EnquiryPage() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      const result = await response.json()
      if (response.ok) {
        if (typeof window !== 'undefined' && (window as any).dataLayer) {
          (window as any).dataLayer.push({ event: 'enquiry_form_submitted' });
        }
        setShowSuccessModal(true)
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        })
      } else {
        toast({
          title: "Audience Denied",
          description: result.error || "There was an error filing your decree. Please try again.",
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Empire Silence",
        description: "The communication lines are currently offline. Please try again later.",
        variant: "destructive",
      })
    }
    setIsSubmitting(false)
  }

  return (
    <div className="flex flex-col min-h-screen bg-emerald-950 text-white">
      <SuccessModal open={showSuccessModal} onClose={() => setShowSuccessModal(false)} />
      <main className="flex-1">
        {/* Royal Hero Section */}
        <section className="relative w-full min-h-[50vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/linen.png')] opacity-10 pointer-events-none"></div>
          <Image
            src="/images/bg-imges-hero-sections/image-06.jpg"
            alt="Royal Contact Backdrop"
            fill
            className="object-cover z-0 opacity-40 grayscale"
            priority
          />
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/80 via-black/40 to-[#050c06]"></div>
          
          <div className="container relative z-20 px-4 md:px-6 flex flex-col items-center text-center">
            <AnimateInStagger>
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="w-12 h-px bg-amber-500"></div>
                <span className="text-amber-500 font-bold tracking-[0.6em] uppercase text-xs">Direct Royal Line</span>
                <div className="w-12 h-px bg-amber-500"></div>
              </div>
              <h1 className="text-6xl md:text-[8rem] font-bold tracking-tighter text-white mb-8 font-garamond italic leading-none">
                Seek our <span className="text-amber-500 text-glow">Council</span>
              </h1>
              <p className="max-w-[800px] text-2xl md:text-3xl font-garamond italic text-white/70 font-light leading-relaxed">
                "Whether a single bespoke piece or an empire-wide rollout, your vision deserves the master's touch."
              </p>
            </AnimateInStagger>
          </div>
        </section>

        {/* Contact Form and Info */}
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/exclusive-paper.png')] opacity-5 pointer-events-none"></div>
          
          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
              {/* Form Area */}
              <AnimateIn direction="left">
                <div className="bg-white/5 backdrop-blur-xl p-12 md:p-16 rounded-[4rem] border border-white/10 shadow-[0_50px_100px_-30px_rgba(0,0,0,0.5)]">
                  <h2 className="text-4xl md:text-5xl font-bold font-garamond italic text-white mb-10">File Your <span className="text-amber-500">Decree</span></h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <Label htmlFor="name" className="text-amber-500/60 font-bold tracking-widest uppercase text-[10px] ml-4">Full Name</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Lord or Lady..."
                          className="bg-white/5 border-white/10 focus:border-amber-500/50 rounded-full h-16 px-8 text-white placeholder:text-white/20 font-garamond italic text-lg transition-colors"
                          required
                        />
                      </div>
                      <div className="space-y-3">
                        <Label htmlFor="phone" className="text-amber-500/60 font-bold tracking-widest uppercase text-[10px] ml-4">Royal Frequency</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91..."
                          className="bg-white/5 border-white/10 focus:border-amber-500/50 rounded-full h-16 px-8 text-white placeholder:text-white/20 font-garamond italic text-lg transition-colors"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="email" className="text-amber-500/60 font-bold tracking-widest uppercase text-[10px] ml-4">Dispatch Address</Label>
                      <Input
                        id="email"  
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="scribe@domain.com"
                        className="bg-white/5 border-white/10 focus:border-amber-500/50 rounded-full h-16 px-8 text-white placeholder:text-white/20 font-garamond italic text-lg transition-colors"
                        required
                      />
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="message" className="text-amber-500/60 font-bold tracking-widest uppercase text-[10px] ml-4">Your Vision</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Draft your masterpieces here..."
                        className="bg-white/5 border-white/10 focus:border-amber-500/50 rounded-[2rem] p-8 text-white placeholder:text-white/20 font-garamond italic text-lg transition-colors min-h-[200px]"
                        required
                      />
                    </div>
                    
                    <Button
                      type="submit"
                      className="bg-amber-500 hover:bg-amber-600 text-emerald-950 w-full h-20 rounded-full font-bold tracking-[0.4em] uppercase text-xs group transition-all shadow-[0_20px_50px_rgba(245,158,11,0.2)]"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-3">
                           <div className="animate-spin rounded-full h-4 w-4 border-2 border-[#050c06] border-t-transparent" />
                           <span>SENDING DISPATCH...</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-3">
                           <span>TRANSMIT DECREE</span>
                           <Send size={16} className="group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform" />
                        </div>
                      )}
                    </Button>
                  </form>
                </div>
              </AnimateIn>

              {/* Info Area */}
              <AnimateIn direction="right" className="lg:sticky lg:top-40">
                <div className="space-y-16">
                   <div>
                      <span className="text-amber-500 font-bold tracking-[0.5em] uppercase text-xs mb-6 block">Our Stronghold</span>
                      <h2 className="text-5xl md:text-7xl font-bold text-white mb-10 font-garamond italic leading-tight">Visit the <br /><span className="text-amber-500">Tailory</span></h2>
                      <p className="text-white/60 text-2xl font-garamond italic font-light leading-relaxed">
                        "Located in the heart of Goa, where tradition meets tropical elegance. We welcome patrons by appointment for private consultations."
                      </p>
                   </div>

                   <div className="space-y-10">
                      <div className="group flex items-start gap-8">
                         <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-amber-500 transition-colors">
                            <MapPin className="text-amber-500" size={28} />
                         </div>
                         <div>
                            <h4 className="text-amber-500 font-bold tracking-widest uppercase text-[10px] mb-2">The Address</h4>
                            <p className="text-white text-2xl font-garamond italic font-light leading-snug">
                               Shop No. 8, Block - II, Dukle Heaven, Santa Inez, <br />Panaji, Taleigao, Goa 403001
                            </p>
                         </div>
                      </div>
                      
                      <div className="group flex items-center gap-8">
                         <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-amber-500 transition-colors">
                            <Phone className="text-amber-500" size={28} />
                         </div>
                         <div>
                            <h4 className="text-amber-500 font-bold tracking-widest uppercase text-[10px] mb-2">The Royal Frequency</h4>
                            <p className="text-white text-2xl font-garamond italic font-light">+91 9867275524</p>
                         </div>
                      </div>

                      <div className="group flex items-center gap-8">
                         <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-amber-500 transition-colors">
                            <Mail className="text-amber-500" size={28} />
                         </div>
                         <div>
                            <h4 className="text-amber-500 font-bold tracking-widest uppercase text-[10px] mb-2">Official Dispatch</h4>
                            <p className="text-white text-2xl font-garamond italic font-light">fashionfabric@rocketmail.com</p>
                         </div>
                      </div>
                   </div>

                   {/* Business Hours Badge */}
                   <div className="bg-amber-500/10 border border-amber-500/20 p-10 rounded-[3rem] relative overflow-hidden group">
                      <div className="absolute top-0 right-0 p-8 opacity-[0.05] group-hover:rotate-12 transition-transform duration-700">
                         <Star size={120} className="text-amber-500 fill-amber-500" />
                      </div>
                      <h4 className="text-amber-500 font-bold tracking-[0.4em] uppercase text-xs mb-6 block">Council Hours</h4>
                      <div className="flex justify-between items-center text-white font-garamond italic">
                         <span className="text-2xl font-light">Monday — Saturday</span>
                         <span className="text-2xl font-bold">10:00 — 20:00</span>
                      </div>
                      <p className="text-white/40 text-sm italic font-garamond mt-8">"For urgent matters beyond these hours, please use the official dispatch."</p>
                   </div>
                </div>
              </AnimateIn>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-32 relative overflow-hidden bg-emerald-950">
           <div className="container px-4 md:px-6">
              <AnimateIn>
                 <div className="h-[600px] bg-white/5 backdrop-blur-xl border border-white/10 rounded-[4rem] overflow-hidden shadow-2xl relative">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3845.3302675743397!2d73.82595091482943!3d15.493999589246702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfc0c8818cdc8b%3A0x94ccf697e9a90b3c!2sDukle%20Heaven%2C%20Santa%20Inez%2C%20Panaji%2C%20Goa%20403001!5e0!3m2!1sen!2sin!4v1651234567890!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0, filter: 'invert(90%) hue-rotate(90deg) grayscale(100%) brightness(80%)' }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                    
                    {/* Map Overlay Label */}
                    <div className="absolute bottom-12 left-12 bg-emerald-950/90 backdrop-blur-xl border border-white/10 p-8 rounded-[2rem]">
                       <div className="flex items-center gap-4 mb-2">
                          <MapPin className="text-amber-500" size={24} />
                          <span className="text-white font-bold tracking-widest text-[10px] uppercase">The Landmark</span>
                       </div>
                       <p className="text-white/60 font-garamond italic text-lg">Near Old Yamaha Showroom, Panaji, Goa</p>
                    </div>
                 </div>
              </AnimateIn>
           </div>
        </section>

        {/* Grand Final Note */}
        <section className="py-40 relative flex justify-center text-center">
           <AnimateInStagger>
              <Quote size={80} className="text-amber-500/10 mb-12 mx-auto rotate-12" />
              <h2 className="text-4xl md:text-8xl font-bold font-garamond italic text-white/20 leading-none">
                A Legacy of <br />
                <span className="text-amber-500/20">Precision & Power</span>
              </h2>
           </AnimateInStagger>
        </section>
      </main>
    </div>
  )
}
