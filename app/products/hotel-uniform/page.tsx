import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function HotelUniformPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="py-20 px-4 md:px-6 bg-gradient-to-r from-[#2e7d32] to-[#1b5e20]">
        <div className="container mx-auto text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Hotel Uniform Collection</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
            Premium fabric solutions for hospitality industry uniforms
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/enquiry">Request Samples</Link>
          </Button>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-[#2e7d32]">Hotel Uniform Fabrics</h2>
            <p className="text-lg text-gray-700 mb-8">
              Our hotel uniform collection features high-quality fabrics designed specifically for the hospitality industry. 
              From front desk staff to housekeeping, we provide durable, comfortable, and professional-looking materials 
              that maintain their appearance even after frequent washing.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Key Features</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Stain-resistant properties</li>
                    <li>• Easy care and maintenance</li>
                    <li>• Wrinkle-free finish</li>
                    <li>• Breathable and comfortable</li>
                    <li>• Color-fast fabrics</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Applications</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Front desk uniforms</li>
                    <li>• Housekeeping attire</li>
                    <li>• Concierge uniforms</li>
                    <li>• Bellhop outfits</li>
                    <li>• Management suits</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <Button asChild size="lg" className="bg-[#2e7d32] hover:bg-[#1b5e20]">
                <Link href="/enquiry">Get a Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
