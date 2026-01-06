"use client"

import { useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight, Loader2, Download, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

// Types for the libraries we import dynamically
type PageFlip = any
type PDFDocumentProxy = any

interface PageFlipBookProps {
  pdfUrl: string
  title?: string
  backLink?: string // URL to go back to (e.g., "/catalogue")
}

export function PageFlipBook({ pdfUrl, title, backLink = "/" }: PageFlipBookProps) {
  const bookRef = useRef<HTMLDivElement>(null)
  const pageFlipRef = useRef<PageFlip>(null)
  
  const [isLoading, setIsLoading] = useState(true)
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [pageImages, setPageImages] = useState<string[]>([])
  const [currentPage, setCurrentPage] = useState(0)
  const [totalPages, setTotalPages] = useState(0)
  const [error, setError] = useState<string | null>(null)

  // 1. Load Libraries & Generate Images (Client Side Only)
  useEffect(() => {
    let isMounted = true
    let pdfDoc: PDFDocumentProxy = null

    const init = async () => {
      try {
        setIsLoading(true)
        
        // --- Dynamic Imports for Next.js ---
        // Prevents "window is not defined" errors during Server Side Rendering
        const pdfjs = await import('pdfjs-dist')
        
        // Set worker from CDN to avoid Next.js public folder config issues
        // We use the version matching the installed package
        pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`

        // Fetch PDF
        const loadingTask = pdfjs.getDocument(pdfUrl)
        loadingTask.onProgress = (p: { loaded: number; total: number }) => {
           if (isMounted) setLoadingProgress(Math.round((p.loaded / p.total) * 20))
        }
        
        pdfDoc = await loadingTask.promise
        const numPages = pdfDoc.numPages
        if (isMounted) setTotalPages(numPages)

        // --- High-Res Rendering Logic ---
        const images: string[] = []
        // Detect retina display (2x) or standard (1x)
        const dpr = window.devicePixelRatio || 1
        // We multiply by 2 again to ensure text remains crisp even when zoomed in
        const scale = Math.min(dpr * 2, 4) 

        for (let i = 1; i <= numPages; i++) {
          if (!isMounted) return
          
          const page = await pdfDoc.getPage(i)
          const viewport = page.getViewport({ scale })
          
          const canvas = document.createElement("canvas")
          const context = canvas.getContext("2d", { alpha: false })
          
          if (!context) throw new Error("Canvas context failed")

          canvas.height = viewport.height
          canvas.width = viewport.width

          await page.render({
            canvasContext: context,
            viewport: viewport,
          }).promise

          // Convert to JPEG (0.9 quality is virtually indistinguishable from PNG but much lighter)
          images.push(canvas.toDataURL("image/jpeg", 0.9))
          
          // Update progress bar
          setLoadingProgress(20 + Math.round((i / numPages) * 80))
        }

        if (isMounted) {
          setPageImages(images)
          setIsLoading(false)
        }

      } catch (err: any) {
        console.error(err)
        if (isMounted) {
          setError("Could not load catalogue. Please try refreshing.")
          setIsLoading(false)
        }
      }
    }

    init()

    return () => { isMounted = false }
  }, [pdfUrl])

  // 2. Initialize PageFlip (Once images are ready)
  useEffect(() => {
    if (isLoading || pageImages.length === 0 || !bookRef.current) return

    let pageFlipInstance: any

    const setupFlip = async () => {
      try {
        // Dynamic import for page-flip to strictly run on client
        const PageFlipModule = await import('page-flip')
        const PageFlip = (PageFlipModule as any).PageFlip || PageFlipModule.default

        const isMobile = window.innerWidth < 768
        
        // Responsive dimensions based on window size
        // We want the book to fit comfortably
        const maxWidth = Math.min(window.innerWidth * 0.9, 1200)
        // Reduced height for mobile devices to improve usability
        const maxHeight = isMobile ? window.innerHeight * 0.5 : window.innerHeight * 0.85
        
        // Base dimensions for a single page
        // Desktop: spread is 2x width. Mobile: single page.
        const baseWidth = isMobile ? maxWidth : maxWidth / 2 
        const baseHeight = maxHeight

        pageFlipInstance = new PageFlip(bookRef.current, {
          width: baseWidth,
          height: baseHeight,
          // "stretch" allows the book to resize nicely with the window
          size: "stretch",
          // Constraints
          minWidth: 300,
          maxWidth: 1000,
          minHeight: 400,
          maxHeight: 1200,
          // Visuals
          showCover: true,
          drawShadow: true,
          maxShadowOpacity: 0.2, // Softer shadow looks cleaner
          showPageCorners: true,
          usePortrait: isMobile, // Single page on mobile
          startZIndex: 0,
          autoSize: true,
          flippingTime: 800,
          mobileScrollSupport: true 
        })

        pageFlipInstance.loadFromImages(pageImages)
        pageFlipRef.current = pageFlipInstance

        pageFlipInstance.on("flip", (e: any) => setCurrentPage(e.data))

      } catch (e) {
        console.error("Flip init failed", e)
      }
    }

    setupFlip()

    return () => {
      if (pageFlipInstance) pageFlipInstance.destroy()
    }
  }, [isLoading, pageImages]) // Re-run if images change

  // Actions
  const handleNext = () => pageFlipRef.current?.flipNext()
  const handlePrev = () => pageFlipRef.current?.flipPrev()
  
  const handleDownload = () => {
    const link = document.createElement("a")
    link.href = pdfUrl
    link.download = title ? `${title}.pdf` : "catalogue.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  // --- RENDER ---

  if (error) {
    return (
      <div className="h-screen flex items-center justify-center bg-neutral-100 text-neutral-500">
        <p>{error}</p>
      </div>
    )
  }

  if (isLoading) {
    return (
      <div className="h-screen w-full flex flex-col items-center justify-center bg-neutral-50 gap-4">
        <Loader2 className="h-10 w-10 animate-spin text-neutral-400" />
        <div className="w-64 h-2 bg-neutral-200 rounded-full overflow-hidden">
          <div 
            className="h-full bg-neutral-800 transition-all duration-300 ease-out"
            style={{ width: `${loadingProgress}%` }}
          />
        </div>
        <p className="text-sm text-neutral-500 font-medium">Preparing Catalogue... {loadingProgress}%</p>
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#Fdfdfd]">
      {/* Header: Clean & Minimal */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-100 px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href={backLink}>
              <Button variant="ghost" size="icon" className="hover:bg-neutral-100 rounded-full">
                <X className="h-5 w-5 text-neutral-600" />
              </Button>
            </Link>
            <h1 className="text-lg font-serif font-semibold text-neutral-800 hidden sm:block">
              {title || "Digital Catalogue"}
            </h1>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-neutral-500 mr-2 hidden sm:block">
              {currentPage + 1} / {totalPages}
            </span>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={handleDownload}
              className="rounded-full border-neutral-200 text-neutral-700 hover:bg-neutral-50 hover:text-black"
            >
              <Download className="h-4 w-4 mr-2" />
              Download
            </Button>
          </div>
        </div>
      </header>

      {/* Main Book Area */}
      <main className="flex-1 flex flex-col items-center justify-center py-8 px-4 overflow-hidden relative">
        
        {/* Background Texture (Optional) to make white pages pop */}
        <div className="absolute inset-0 bg-neutral-50/50 pointer-events-none" />

        <div className="relative z-10 w-full flex justify-center perspective-1000">
          {/* The actual Book Container */}
          <div ref={bookRef} className="book-wrapper" />
        </div>

        {/* Floating Navigation (Desktop) */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-white/90 backdrop-blur border border-neutral-200 shadow-xl rounded-full px-6 py-3 z-50 transition-transform hover:scale-105">
           <button 
             onClick={handlePrev}
             disabled={currentPage === 0}
             className="p-2 hover:bg-neutral-100 rounded-full disabled:opacity-30 transition-colors"
           >
             <ChevronLeft className="h-6 w-6 text-neutral-800" />
           </button>
           
           <span className="text-sm font-medium text-neutral-600 min-w-[60px] text-center">
             Page {currentPage + 1}
           </span>

           <button 
             onClick={handleNext}
             disabled={currentPage >= totalPages - 1}
             className="p-2 hover:bg-neutral-100 rounded-full disabled:opacity-30 transition-colors"
           >
             <ChevronRight className="h-6 w-6 text-neutral-800" />
           </button>
        </div>

      </main>

      <style jsx global>{`
        /* Next.js CSS Modules or styled-jsx for isolation */
        
        .book-wrapper {
          margin: 0 auto;
        }

        /* This is the secret to crisp text:
           1. We use object-fit: contain to ensure no stretching
           2. image-rendering prioritizes contrast over smoothness for text 
        */
        .stf__item img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          image-rendering: -webkit-optimize-contrast;
          user-select: none;
          -webkit-user-drag: none;
        }

        /* Add a subtle paper texture/shadow to pages */
        .stf__item {
          background-color: #ffffff;
          box-shadow: inset 2px 0 10px rgba(0,0,0,0.03); 
        }

        .stf__wrapper {
          perspective: 2000px !important; /* Deeper perspective for realism */
        }
      `}</style>
    </div>
  )
}