import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function HospitalPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="py-20 px-4 md:px-6 bg-gradient-to-r from-[#2e7d32] to-[#1b5e20]">
        <div className="container mx-auto text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Hospital Collection</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
            Medical-grade fabrics for healthcare professionals
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
            <h2 className="text-3xl font-bold mb-6 text-[#2e7d32]">Hospital Uniform Fabrics</h2>
            <p className="text-lg text-gray-700 mb-8">
              Our hospital collection provides medical-grade fabrics engineered for the healthcare environment. 
              These materials prioritize hygiene, comfort, and durability, meeting the stringent requirements 
              of medical facilities while ensuring healthcare professionals can work efficiently and comfortably.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Key Features</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Antimicrobial treatment</li>
                    <li>• Fluid-resistant properties</li>
                    <li>• Industrial laundry safe</li>
                    <li>• Breathable and comfortable</li>
                    <li>• Chemical resistant</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Applications</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Scrubs and surgical gowns</li>
                    <li>• Doctor coats</li>
                    <li>• Nurse uniforms</li>
                    <li>• Lab coats</li>
                    <li>• Medical support staff</li>
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
