"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"

interface ImageSlideshowProps {
  images: { src: string; alt: string }[]
  autoPlayInterval?: number
}

export function ImageSlideshow({ images, autoPlayInterval = 8000 }: ImageSlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  // Memoized handlers for better performance
  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }, [images.length])

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }, [images.length])

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index)
  }, [])

  useEffect(() => {
    if (isHovered) return // Pause on hover
    
    const interval = setInterval(goToNext, autoPlayInterval)
    return () => clearInterval(interval)
  }, [goToNext, autoPlayInterval, isHovered])

  // Preload next image for smoother transitions
  const nextIndex = (currentIndex + 1) % images.length

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main Image Container */}
      <div className="relative h-[500px] md:h-[650px] lg:h-[750px] rounded-2xl overflow-hidden shadow-xl bg-white">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
            aria-hidden={index !== currentIndex}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-contain p-4"
              priority={index === 0}
              loading={index === 0 ? "eager" : "lazy"}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
            />
          </div>
        ))}
        
        {/* Preload next image */}
        <link
          rel="preload"
          as="image"
          href={images[nextIndex]?.src}
        />
      </div>

      {/* Navigation Arrows (visible on hover) */}
      <button
        onClick={goToPrev}
        className={`absolute left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 bg-white/80 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
        aria-label="Previous image"
      >
        <svg className="w-5 h-5 md:w-6 md:h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        onClick={goToNext}
        className={`absolute right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 bg-white/80 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
        aria-label="Next image"
      >
        <svg className="w-5 h-5 md:w-6 md:h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Navigation Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-[#2e7d32] w-8"
                : "bg-gray-300 hover:bg-gray-400 w-3"
            }`}
            aria-label={`Go to image ${index + 1}`}
            aria-current={index === currentIndex}
          />
        ))}
      </div>
    </div>
  )
}
