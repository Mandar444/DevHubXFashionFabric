"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

interface ImageSlideshowProps {
  images: { src: string; alt: string }[]
}

export function ImageSlideshow({ images }: ImageSlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 8000) // Change image every 8 seconds

    return () => clearInterval(interval)
  }, [images.length])

  return (
    <div className="relative">
      {/* Main Image Container */}
      <div className="relative h-[500px] md:h-[650px] lg:h-[750px] rounded-2xl overflow-hidden shadow-xl bg-white">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-[2500ms] ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-contain p-4"
              priority={index === 0}
              loading={index === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-[#2e7d32] w-8"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
