import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function RestaurantChefPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="py-20 px-4 md:px-6 bg-gradient-to-r from-[#2e7d32] to-[#1b5e20]">
        <div className="container mx-auto text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Restaurant & Chef Collection</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
            Professional-grade fabrics for culinary excellence
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
            <h2 className="text-3xl font-bold mb-6 text-[#2e7d32]">Restaurant & Chef Uniform Fabrics</h2>
            <p className="text-lg text-gray-700 mb-8">
              Our restaurant and chef collection offers premium fabrics engineered to withstand the demanding 
              kitchen environment. Heat-resistant, stain-repellent, and easy to maintain, these materials 
              ensure your culinary team looks professional while staying comfortable throughout their shift.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Key Features</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Heat and flame resistant</li>
                    <li>• Oil and stain repellent</li>
                    <li>• Breathable for kitchen heat</li>
                    <li>• Industrial wash durability</li>
                    <li>• Antimicrobial treatment</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Applications</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Chef coats and jackets</li>
                    <li>• Kitchen staff uniforms</li>
                    <li>• Waiter and server attire</li>
                    <li>• Aprons and accessories</li>
                    <li>• Restaurant manager outfits</li>
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
