"use client"

import { useParams, useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { AnimateIn } from "@/components/animate-in"
import { ArrowLeft, Download, Loader2, BookOpen, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

interface Catalogue {
  id: string
  title: string
  subtitle?: string | null
  coverImage: string
  pdfUrl: string
  category: string
  pageImages: string[]
}

export default function CatalogueViewerPage() {
  const params = useParams()
  const router = useRouter()
  const catalogueId = params.catalogueId as string

  const [catalogue, setCatalogue] = useState<Catalogue | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(0)
  const [isDownloading, setIsDownloading] = useState(false)

  useEffect(() => {
    fetchCatalogue()
  }, [catalogueId])

  // Auto-navigate to flip view after catalogue loads
  useEffect(() => {
    if (catalogue) {
      // Redirect to flip view
      router.push(`/catalogue/${catalogueId}/flip`)
    }
  }, [catalogue, catalogueId, router])

  // Add keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!catalogue || !catalogue.pageImages || catalogue.pageImages.length === 0) return
      
      if (e.key === "ArrowLeft" && currentPage > 0) {
        setCurrentPage(prev => prev - 1)
      } else if (e.key === "ArrowRight" && currentPage < catalogue.pageImages.length - 1) {
        setCurrentPage(prev => prev + 1)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [currentPage, catalogue])

  const fetchCatalogue = async () => {
    try {
      setIsLoading(true)
      const response = await fetch(`/api/catalogue/${catalogueId}`)
      
      if (!response.ok) {
        throw new Error("Catalogue not found")
      }

      const data = await response.json()
      setCatalogue(data)
    } catch (error) {
      console.error("Error fetching catalogue:", error)
      router.push("/catalogue")
    } finally {
      setIsLoading(false)
    }
  }

  const handleDownload = async () => {
    if (!catalogue) return

    setIsDownloading(true)

    try {
      // Track download
      await fetch("/api/catalogue/track-download", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ catalogueId })
      })

      // Trigger download
      const link = document.createElement("a")
      link.href = catalogue.pdfUrl
      link.download = `${catalogue.title}.pdf`
      link.target = "_blank"
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } catch (error) {
      console.error("Error downloading catalogue:", error)
      alert("Failed to download. Please try again.")
    } finally {
      setIsDownloading(false)
    }
  }

  const nextPage = () => {
    if (catalogue && currentPage < catalogue.pageImages.length - 1) {
      setCurrentPage(currentPage + 1)
    }
  }

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1)
    }
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-neutral-50">
        <div className="text-center">
          <Loader2 className="w-12 h-12 animate-spin text-amber-700 mx-auto mb-4" />
          <p className="text-neutral-600">Loading catalogue...</p>
        </div>
      </div>
    )
  }

  if (!catalogue) {
    return null
  }

  const hasPageImages = catalogue.pageImages && catalogue.pageImages.length > 0

  return (
    <div className="min-h-screen bg-neutral-900">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-4">
            <Link href="/catalogue">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Catalogues
              </Button>
            </Link>
            <div className="hidden md:block">
              <h1 className="font-bold text-lg">{catalogue.title}</h1>
              {catalogue.subtitle && (
                <p className="text-sm text-neutral-600">{catalogue.subtitle}</p>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <Link href={`/catalogue/${catalogueId}/flip`}>
              <Button className="bg-amber-700 hover:bg-amber-800">
                <BookOpen className="w-4 h-4 mr-2" />
                Page Flip View
              </Button>
            </Link>
            <Button
              onClick={handleDownload}
              disabled={isDownloading}
              variant="outline"
            >
              {isDownloading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin mr-2" />
                  Downloading...
                </>
              ) : (
                <>
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF
                </>
              )}
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {hasPageImages ? (
          <div className="max-w-6xl mx-auto">
            {/* Page Viewer */}
            <AnimateIn>
              <div className="bg-white rounded-lg shadow-2xl overflow-hidden mb-8">
                {/* Page Counter */}
                <div className="bg-neutral-100 px-6 py-3 border-b flex items-center justify-between">
                  <span className="text-sm font-medium text-neutral-600">
                    Page {currentPage + 1} of {catalogue.pageImages.length}
                  </span>
                  <span className="text-xs text-neutral-500">
                    Use arrow keys or buttons to navigate
                  </span>
                </div>

                {/* Main Image Display */}
                <div className="relative bg-neutral-50 flex items-center justify-center min-h-[600px] p-4">
                  <Image
                    src={catalogue.pageImages[currentPage]}
                    alt={`Page ${currentPage + 1}`}
                    width={1200}
                    height={1600}
                    className="max-w-full h-auto object-contain shadow-lg"
                    priority
                  />

                  {/* Navigation Arrows */}
                  <Button
                    onClick={prevPage}
                    disabled={currentPage === 0}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-neutral-800 shadow-lg disabled:opacity-30"
                    size="lg"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </Button>
                  <Button
                    onClick={nextPage}
                    disabled={currentPage === catalogue.pageImages.length - 1}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-neutral-800 shadow-lg disabled:opacity-30"
                    size="lg"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </Button>
                </div>

                {/* Thumbnail Navigation */}
                <div className="bg-neutral-100 p-4 border-t">
                  <div className="flex gap-2 overflow-x-auto pb-2">
                    {catalogue.pageImages.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentPage(index)}
                        className={`flex-shrink-0 relative transition-all ${
                          currentPage === index
                            ? "ring-2 ring-amber-700 scale-105"
                            : "hover:ring-2 hover:ring-amber-500 opacity-70 hover:opacity-100"
                        }`}
                      >
                        <Image
                          src={image}
                          alt={`Thumbnail ${index + 1}`}
                          width={80}
                          height={100}
                          className="rounded object-cover"
                        />
                        <div className="absolute inset-x-0 bottom-0 bg-black/60 text-white text-xs py-1 text-center rounded-b">
                          {index + 1}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </AnimateIn>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto">
            <AnimateIn>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="aspect-[3/4] relative">
                  <Image
                    src={catalogue.coverImage}
                    alt={catalogue.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <p className="text-neutral-600 mb-4">
                    Page images are not available for this catalogue. Please download the PDF to view all pages.
                  </p>
                  <Button onClick={handleDownload} disabled={isDownloading}>
                    {isDownloading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin mr-2" />
                        Downloading...
                      </>
                    ) : (
                      <>
                        <Download className="w-4 h-4 mr-2" />
                        Download PDF
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </AnimateIn>
          </div>
        )}
      </div>
    
      {/* Instructions */}
      <div className="container mx-auto px-4 pb-12">
        <div className="max-w-3xl mx-auto bg-white/5 border border-white/10 rounded-lg p-6 text-white/70 text-sm">
          <h3 className="font-semibold text-white mb-3">Navigation Tips:</h3>
          <ul className="space-y-2">
            <li>• Use arrow buttons or click on thumbnails to navigate between pages</li>
            <li>• Click "Download PDF" to save the catalogue to your device</li>
            <li>• Use keyboard arrow keys for quick navigation (← →)</li>
            <li>• The catalogue is optimized for viewing on all devices</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
