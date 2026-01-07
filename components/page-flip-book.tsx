"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Download, X, Smartphone } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"


// Types for the libraries we import dynamically
type PageFlip = any
type PDFDocumentProxy = any

interface PageFlipBookProps {
  pdfUrl: string
  title?: string
  backLink?: string
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
  const [showMobileWarning, setShowMobileWarning] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Check if mobile on mount and show warning
  useEffect(() => {
    const checkMobile = () => {
      if (typeof window !== 'undefined') {
        const mobile = window.innerWidth < 768
        setIsMobile(mobile)
        if (mobile) {
          setShowMobileWarning(true)
        }
      }
    }
    checkMobile()
    
    // Handle window resize
    const handleResize = () => {
      const mobile = window.innerWidth < 768
      setIsMobile(mobile)
    }
    
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // 1. Load Libraries & Generate Images (Client Side Only)
  useEffect(() => {
    let isMounted = true
    let pdfDoc: PDFDocumentProxy = null

    const init = async () => {
      try {
        setIsLoading(true)
        
        const pdfjs = await import('pdfjs-dist')
        pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`

        const loadingTask = pdfjs.getDocument(pdfUrl)
        loadingTask.onProgress = (p: { loaded: number; total: number }) => {
           if (isMounted) setLoadingProgress(Math.round((p.loaded / p.total) * 20))
        }
        
        pdfDoc = await loadingTask.promise
        const numPages = pdfDoc.numPages
        if (isMounted) setTotalPages(numPages)

        const images: string[] = []
        const dpr = window.devicePixelRatio || 1
        // Higher scale for better quality
        const scale = Math.min(dpr * 3, 6)

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

          images.push(canvas.toDataURL("image/jpeg", 0.95))
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
        const PageFlipModule = await import('page-flip')
        const PageFlip = (PageFlipModule as any).PageFlip || PageFlipModule.default

        const mobile = window.innerWidth < 768
        
        // Better responsive dimensions
        let baseWidth, baseHeight
        
        if (mobile) {
          // Mobile: single page, larger and more readable
          baseWidth = Math.min(window.innerWidth - 32, 600)
          baseHeight = window.innerHeight * 0.7
        } else {
          // Desktop: double page spread
          const maxWidth = Math.min(window.innerWidth * 0.85, 1400)
          const maxHeight = window.innerHeight * 0.8
          baseWidth = maxWidth / 2
          baseHeight = maxHeight
        }

        pageFlipInstance = new PageFlip(bookRef.current, {
          width: baseWidth,
          height: baseHeight,
          size: "stretch",
          minWidth: mobile ? 280 : 400,
          maxWidth: mobile ? 600 : 1200,
          minHeight: mobile ? 400 : 500,
          maxHeight: mobile ? 900 : 1400,
          showCover: true,
          drawShadow: true,
          maxShadowOpacity: 0.3,
          showPageCorners: true,
          usePortrait: mobile, // Single page on mobile
          startZIndex: 0,
          autoSize: true,
          flippingTime: 1000,
          mobileScrollSupport: mobile,
          disableFlipByClick: false,
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
  }, [isLoading, pageImages, isMobile])

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
    <>
      <AlertDialog open={showMobileWarning} onOpenChange={setShowMobileWarning}>
        <AlertDialogContent className="max-w-md mx-4">
          <AlertDialogHeader>
            <div className="flex items-center gap-2 mb-2">
              <Smartphone className="h-6 w-6 text-orange-500" />
              <AlertDialogTitle>Mobile View Notice</AlertDialogTitle>
            </div>
            <AlertDialogDescription className="text-base">
              For the best viewing experience with larger text and images, please open this catalogue on a desktop or laptop computer, or download the PDF.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="flex-col sm:flex-row gap-2">
            <Button
              variant="outline"
              onClick={() => {
                handleDownload()
                setShowMobileWarning(false)
              }}
              className="w-full sm:w-auto"
            >
              <Download className="h-4 w-4 mr-2" />
              Download PDF
            </Button>
            <AlertDialogAction onClick={() => setShowMobileWarning(false)} className="w-full sm:w-auto">
              Continue Anyway
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <div className="flex flex-col min-h-screen bg-neutral-50">
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-neutral-200 px-4 py-3 shadow-sm">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Link href={backLink}>
                <Button variant="ghost" size="icon" className="hover:bg-neutral-100 rounded-full">
                  <X className="h-5 w-5 text-neutral-600" />
                </Button>
              </Link>
              <h1 className="text-base md:text-lg font-semibold text-neutral-800">
                {title || "Digital Catalogue"}
              </h1>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="text-xs md:text-sm font-medium text-neutral-500 mr-1">
                {currentPage + 1} / {totalPages}
              </span>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={handleDownload}
                className="rounded-full border-neutral-300 text-neutral-700 hover:bg-neutral-100"
              >
                <Download className="h-4 w-4 md:mr-2" />
                <span className="hidden md:inline">Download</span>
              </Button>
            </div>
          </div>
        </header>

        <main className="flex-1 flex flex-col items-center justify-center py-4 md:py-8 px-2 md:px-4 overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-50 to-neutral-100 pointer-events-none" />

          <div className="relative z-10 w-full flex justify-center items-center" style={{ perspective: '2000px' }}>
            <div ref={bookRef} className="book-wrapper" />
          </div>

          {/* Navigation Controls */}
          <div className={`${isMobile ? 'fixed bottom-4' : 'absolute bottom-8'} left-1/2 -translate-x-1/2 flex items-center gap-3 md:gap-4 bg-white/95 backdrop-blur-sm border border-neutral-300 shadow-2xl rounded-full px-4 md:px-6 py-2 md:py-3 z-50`}>
            <button 
              onClick={handlePrev}
              disabled={currentPage === 0}
              className="p-1.5 md:p-2 hover:bg-neutral-100 rounded-full disabled:opacity-30 disabled:cursor-not-allowed transition-all active:scale-95"
            >
              <ChevronLeft className="h-5 w-5 md:h-6 md:w-6 text-neutral-800" />
            </button>
            
            <span className="text-xs md:text-sm font-semibold text-neutral-700 min-w-[50px] md:min-w-[70px] text-center">
              {currentPage + 1} / {totalPages}
            </span>

            <button 
              onClick={handleNext}
              disabled={currentPage >= totalPages - 1}
              className="p-1.5 md:p-2 hover:bg-neutral-100 rounded-full disabled:opacity-30 disabled:cursor-not-allowed transition-all active:scale-95"
            >
              <ChevronRight className="h-5 w-5 md:h-6 md:w-6 text-neutral-800" />
            </button>
          </div>
        </main>

        <style jsx global>{`
          .book-wrapper {
            margin: 0 auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .stf__item img {
            width: 100%;
            height: 100%;
            object-fit: contain;
            image-rendering: -webkit-optimize-contrast;
            image-rendering: crisp-edges;
            user-select: none;
            -webkit-user-drag: none;
            pointer-events: none;
          }

          .stf__item {
            background-color: #ffffff;
            box-shadow: 0 4px 20px rgba(0,0,0,0.1);
            border-radius: 2px;
          }

          .stf__wrapper {
            perspective: 2500px !important;
          }

          .stf__block {
            transform-style: preserve-3d;
          }

          /* Mobile specific adjustments */
          @media (max-width: 768px) {
            .stf__item {
              box-shadow: 0 2px 15px rgba(0,0,0,0.15);
            }
            
            .book-wrapper {
              max-width: 100%;
              padding: 0 8px;
            }
          }

          /* Desktop specific adjustments */
          @media (min-width: 769px) {
            .stf__item {
              box-shadow: 
                0 8px 30px rgba(0,0,0,0.12),
                inset 3px 0 15px rgba(0,0,0,0.05);
            }
          }
        `}</style>
      </div>
    </>
  )
}