"use client"

import { useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PageFlipBookProps {
  pdfUrl: string
  title?: string
}

export function PageFlipBook({ pdfUrl, title }: PageFlipBookProps) {
  const bookRef = useRef<HTMLDivElement>(null)
  const pageFlipRef = useRef<any>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(0)
  const [totalPages, setTotalPages] = useState(0)
  const [pageImages, setPageImages] = useState<string[]>([])
  const [error, setError] = useState<string | null>(null)
  const [isClient, setIsClient] = useState(false)
  const [pdfjsLib, setPdfjsLib] = useState<any>(null)
  const [PageFlipClass, setPageFlipClass] = useState<any>(null)

  // Ensure we're on the client
  useEffect(() => {
    setIsClient(true)
  }, [])

  // Load PageFlip library on client side only
  useEffect(() => {
    if (!isClient) return

    const loadPageFlip = async () => {
      try {
        // Dynamically import page-flip
        const module = await import('page-flip')
        
        // Extract the constructor - try all possible export formats
        let PageFlipConstructor
        if (typeof module.default === 'function') {
          PageFlipConstructor = module.default
        } else if (typeof module.PageFlip === 'function') {
          PageFlipConstructor = module.PageFlip
        } else if (module.default && typeof module.default.PageFlip === 'function') {
          PageFlipConstructor = module.default.PageFlip
        } else {
          // If module itself is a function
          PageFlipConstructor = module
        }
        
        console.log('PageFlip module loaded:', module)
        console.log('PageFlip constructor:', PageFlipConstructor)
        setPageFlipClass(() => PageFlipConstructor)
      } catch (err) {
        console.error('Failed to load PageFlip:', err)
        setError('Failed to load page flip library')
      }
    }

    loadPageFlip()
  }, [isClient])

  // Load PDF.js library on client side only
  useEffect(() => {
    if (!isClient) return

    const loadPdfJs = async () => {
      try {
        // Dynamically import pdfjs-dist
        const pdfjs = await import('pdfjs-dist')
        
        // Set worker source to local file in public directory
        // This is the most reliable approach for Next.js
        pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.mjs'

        setPdfjsLib(pdfjs)
        console.log('PDF.js loaded successfully')
      } catch (err) {
        console.error('Failed to load PDF.js:', err)
        setError('Failed to load PDF library')
        setIsLoading(false)
      }
    }

    loadPdfJs()
  }, [isClient])

  // Convert PDF to images - load all pages efficiently
  useEffect(() => {
    if (!isClient || !pdfjsLib) return

    const convertPdfToImages = async () => {
      try {
        setIsLoading(true)
        setError(null)

        console.log("Loading PDF:", pdfUrl)

        // Fetch PDF
        const response = await fetch(pdfUrl)
        if (!response.ok) {
          throw new Error("Failed to fetch PDF")
        }

        const pdfData = await response.arrayBuffer()

        // Load PDF document
        const loadingTask = pdfjsLib.getDocument({ data: pdfData })
        const pdf = await loadingTask.promise
        const numPages = pdf.numPages

        console.log(`PDF loaded: ${numPages} pages`)
        setTotalPages(numPages)

        const images: string[] = []

        // Load all pages efficiently
        for (let pageNum = 1; pageNum <= numPages; pageNum++) {
          const page = await pdf.getPage(pageNum)
          const viewport = page.getViewport({ scale: 3.0 })
          const canvas = document.createElement("canvas")
          const context = canvas.getContext("2d", { 
            willReadFrequently: false,
            alpha: false 
          })

          if (!context) {
            throw new Error("Failed to get canvas context")
          }

          canvas.height = viewport.height
          canvas.width = viewport.width

          await page.render({
            canvasContext: context,
            viewport: viewport,
          }).promise

          // Use PNG for sharp text (lossless)
          const imageUrl = canvas.toDataURL("image/png")
          images.push(imageUrl)
          
          // Log progress every 3 pages
          if (pageNum === 1 || pageNum % 3 === 0 || pageNum === numPages) {
            console.log(`Loaded ${pageNum}/${numPages} pages`)
          }
        }

        // Set all images at once
        setPageImages(images)
        setIsLoading(false)
        console.log(`All ${numPages} pages loaded successfully`)
      } catch (err: any) {
        console.error("Error converting PDF:", err)
        setError(err.message || "Failed to load PDF")
        setIsLoading(false)
      }
    }

    convertPdfToImages()
  }, [pdfUrl, isClient, pdfjsLib])

  // Initialize PageFlip - only once when all pages are loaded
  useEffect(() => {
    if (!isClient || !bookRef.current || pageImages.length === 0 || pageFlipRef.current || !PageFlipClass) return

    try {
      const pageFlip = new PageFlipClass(bookRef.current, {
        width: 700,
        height: 933,
        size: "stretch",
        minWidth: 400,
        maxWidth: 1400,
        minHeight: 533,
        maxHeight: 1866,
        showCover: true,
        flippingTime: 800,
        usePortrait: false,
        startZIndex: 0,
        autoSize: true,
        maxShadowOpacity: 0.4,
        mobileScrollSupport: true,
      })

      pageFlipRef.current = pageFlip

      // Load all pages
      pageFlipRef.current.loadFromImages(pageImages)
      
      // Event listeners
      pageFlipRef.current.on("flip", (e: any) => {
        setCurrentPage(e.data)
      })

      console.log("PageFlip initialized with", pageImages.length, "pages")
    } catch (err: any) {
      console.error("Error initializing PageFlip:", err)
      setError("Failed to initialize page flip")
    }

    return () => {
      if (pageFlipRef.current) {
        try {
          pageFlipRef.current.destroy()
        } catch (e) {
          console.error("Error destroying PageFlip:", e)
        }
        pageFlipRef.current = null
      }
    }
  }, [pageImages, isClient, PageFlipClass])

  const flipNext = () => {
    if (pageFlipRef.current) {
      pageFlipRef.current.flipNext()
    }
  }

  const flipPrev = () => {
    if (pageFlipRef.current) {
      pageFlipRef.current.flipPrev()
    }
  }

  if (!isClient) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-neutral-900">
        <Loader2 className="w-8 h-8 animate-spin text-white" />
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-neutral-900">
        <div className="text-center text-white">
          <p className="text-xl font-semibold mb-2">Failed to Load Catalogue</p>
          <p className="text-neutral-400">{error}</p>
        </div>
      </div>
    )
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-neutral-900">
        <div className="text-center text-white">
          <Loader2 className="w-12 h-12 animate-spin mx-auto mb-4" />
          <p className="text-lg">Loading catalogue...</p>
          {totalPages > 0 && (
            <p className="text-sm text-neutral-400 mt-2">
              Converting {totalPages} pages
            </p>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-neutral-900 flex flex-col items-center justify-center p-4 sm:p-8">
      {/* Title */}
      {title && (
        <div className="text-center mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-white">{title}</h1>
        </div>
      )}

      {/* Book Container */}
      <div className="relative">
        {/* The book */}
        <div 
          ref={bookRef} 
          className="book-container shadow-2xl"
          style={{
            background: "transparent"
          }}
        />

        {/* Navigation Controls */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <Button
            onClick={flipPrev}
            disabled={currentPage === 0}
            variant="outline"
            size="icon"
            className="bg-white hover:bg-neutral-100 disabled:opacity-50"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>

          <div className="text-white px-4 py-2 bg-neutral-800 rounded-lg">
            <span className="font-medium">
              {currentPage + 1} / {totalPages}
            </span>
          </div>

          <Button
            onClick={flipNext}
            disabled={currentPage >= totalPages - 1}
            variant="outline"
            size="icon"
            className="bg-white hover:bg-neutral-100 disabled:opacity-50"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>

        {/* Instructions */}
        <div className="text-center mt-6 text-neutral-400 text-sm">
          <p>Click on the pages or use arrow buttons to flip</p>
          <p className="mt-1">Drag the page corners for a realistic page turn</p>
        </div>
      </div>

      <style jsx>{`
        :global(.book-container) {
          margin: 0 auto;
        }

        :global(.stf__parent) {
          position: relative;
        }

        :global(.stf__wrapper) {
          position: relative;
        }

        :global(.stf__block) {
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
        }

        :global(.stf__item) {
          background-color: white;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        :global(.stf__item img) {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      `}</style>
    </div>
  )
}
