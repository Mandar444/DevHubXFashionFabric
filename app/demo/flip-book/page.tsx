import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BookOpen, Upload, Eye, MousePointerClick, Smartphone } from "lucide-react"

export default function FlipBookDemoPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 px-4 md:px-6">
          <div className="container mx-auto text-center">
            <div className="inline-block p-3 bg-amber-100 rounded-full mb-4">
              <BookOpen className="w-12 h-12 text-amber-700" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-neutral-900 mb-6">
              Interactive Page Flip Book
            </h1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto mb-8">
              Experience your catalogues like never before with realistic page-turning animations.
              Click, drag, or swipe through pages just like a real book!
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button asChild size="lg" className="bg-amber-700 hover:bg-amber-800 text-white text-lg px-8 py-6">
                <Link href="/catalogue/downloads">
                  <BookOpen className="mr-2 h-5 w-5" />
                  View Catalogues
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6">
                <Link href="/admin/catalogue-upload">
                  <Upload className="mr-2 h-5 w-5" />
                  Upload Catalogue
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 px-4 md:px-6 bg-white">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-neutral-900">
              Premium Features
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Feature 1 */}
              <div className="text-center p-6 rounded-lg bg-neutral-50 hover:shadow-lg transition-shadow">
                <div className="inline-block p-4 bg-amber-100 rounded-full mb-4">
                  <MousePointerClick className="w-8 h-8 text-amber-700" />
                </div>
                <h3 className="text-xl font-bold mb-3">Interactive Controls</h3>
                <p className="text-neutral-600">
                  Click page edges, drag corners, or use arrow buttons to flip through pages naturally.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="text-center p-6 rounded-lg bg-neutral-50 hover:shadow-lg transition-shadow">
                <div className="inline-block p-4 bg-amber-100 rounded-full mb-4">
                  <BookOpen className="w-8 h-8 text-amber-700" />
                </div>
                <h3 className="text-xl font-bold mb-3">Realistic Animation</h3>
                <p className="text-neutral-600">
                  Authentic page curl effects with shadows and smooth transitions for a premium feel.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="text-center p-6 rounded-lg bg-neutral-50 hover:shadow-lg transition-shadow">
                <div className="inline-block p-4 bg-amber-100 rounded-full mb-4">
                  <Smartphone className="w-8 h-8 text-amber-700" />
                </div>
                <h3 className="text-xl font-bold mb-3">Mobile Friendly</h3>
                <p className="text-neutral-600">
                  Touch and swipe gestures work perfectly on phones and tablets.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 px-4 md:px-6 bg-neutral-50">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl font-bold text-center mb-12 text-neutral-900">
              How It Works
            </h2>
            <div className="space-y-6">
              {/* Step 1 */}
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-amber-700 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Upload Your PDF</h3>
                  <p className="text-neutral-600">
                    Admin uploads a PDF catalogue with a cover image through the admin panel.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-amber-700 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Automatic Processing</h3>
                  <p className="text-neutral-600">
                    The system automatically processes the PDF, extracting pages and preparing them for the flip book viewer.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-amber-700 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Interactive Viewing</h3>
                  <p className="text-neutral-600">
                    Users can browse catalogues and open them in flip book mode for an immersive reading experience.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-amber-700 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Flip & Browse</h3>
                  <p className="text-neutral-600">
                    Click, drag, or swipe through pages with realistic animations. Navigate with buttons or direct interaction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Preview Section */}
        <section className="py-20 px-4 md:px-6 bg-white">
          <div className="container mx-auto text-center max-w-4xl">
            <h2 className="text-4xl font-bold mb-6 text-neutral-900">
              See It In Action
            </h2>
            <p className="text-xl text-neutral-600 mb-8">
              Visit the catalogue downloads page to experience the interactive flip book feature
            </p>
            <div className="bg-neutral-900 rounded-lg p-8 shadow-2xl">
              <div className="aspect-video bg-neutral-800 rounded-lg flex items-center justify-center">
                <div className="text-center text-white">
                  <BookOpen className="w-24 h-24 mx-auto mb-4 opacity-50" />
                  <p className="text-xl mb-4">Interactive Page Flip Demo</p>
                  <Button asChild size="lg" className="bg-amber-700 hover:bg-amber-800">
                    <Link href="/catalogue/downloads">
                      Try It Now
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 md:px-6 bg-gradient-to-br from-amber-700 to-amber-800 text-white">
          <div className="container mx-auto text-center max-w-3xl">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Upload your first catalogue or browse existing ones to experience the flip book feature
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
                <Link href="/admin/catalogue-upload">
                  <Upload className="mr-2 h-5 w-5" />
                  Upload Catalogue
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10 text-lg px-8 py-6">
                <Link href="/catalogue/downloads">
                  <Eye className="mr-2 h-5 w-5" />
                  Browse Catalogues
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Tech Specs */}
        <section className="py-16 px-4 md:px-6 bg-neutral-100">
          <div className="container mx-auto max-w-4xl">
            <h3 className="text-2xl font-bold text-center mb-8 text-neutral-900">
              Technical Highlights
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg">
                <h4 className="font-bold mb-2 text-amber-700">Performance</h4>
                <ul className="space-y-2 text-neutral-600">
                  <li>✓ Fast initial load</li>
                  <li>✓ Smooth 60fps animations</li>
                  <li>✓ On-demand page rendering</li>
                  <li>✓ Optimized for mobile</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h4 className="font-bold mb-2 text-amber-700">Compatibility</h4>
                <ul className="space-y-2 text-neutral-600">
                  <li>✓ All modern browsers</li>
                  <li>✓ iOS & Android devices</li>
                  <li>✓ Desktop & tablet support</li>
                  <li>✓ Responsive design</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h4 className="font-bold mb-2 text-amber-700">Features</h4>
                <ul className="space-y-2 text-neutral-600">
                  <li>✓ Realistic page curl</li>
                  <li>✓ Touch & mouse support</li>
                  <li>✓ Navigation controls</li>
                  <li>✓ Page counter</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h4 className="font-bold mb-2 text-amber-700">Integration</h4>
                <ul className="space-y-2 text-neutral-600">
                  <li>✓ Automatic PDF processing</li>
                  <li>✓ Admin upload interface</li>
                  <li>✓ Public viewing</li>
                  <li>✓ SEO-friendly URLs</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
