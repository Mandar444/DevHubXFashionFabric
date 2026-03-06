"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import Image from "next/image"

interface StatCardProps {
  value: string
  label: string
  icon?: string
  iconColor?: string
}

// Optimized counter hook with requestAnimationFrame
function useOptimizedCounter(end: number, duration: number = 2000) {
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Trigger if even slightly visible to ensure numbers show early
        if (entry.isIntersecting && !hasAnimated.current) {
          setHasStarted(true)
          hasAnimated.current = true
          observer.unobserve(element)
        }
      },
      { threshold: 0.1, rootMargin: "0px" }
    )

    observer.observe(element)
    
    // Fallback timer in case observer fails or takes too long
    const timer = setTimeout(() => {
      if (!hasAnimated.current) {
        setHasStarted(true)
        hasAnimated.current = true
      }
    }, 3000)

    return () => {
      observer.disconnect()
      clearTimeout(timer)
    }
  }, [])

  useEffect(() => {
    if (!hasStarted || end === 0) return

    const startTime = performance.now()
    let animationFrame: number

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentCount = Math.floor(easeOutQuart * end)
      
      setCount(currentCount)

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      } else {
        setCount(end)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [hasStarted, end, duration])

  return { count, hasStarted, ref }
}

export function StatCard({ value, label, icon, iconColor }: StatCardProps) {
  const parseValue = useCallback((val: string) => {
    const match = val.match(/^([+\-])?([0-9,]+)([+%])?$/)
    if (!match) return { prefix: "", num: 0, suffix: val }
    
    const prefix = match[1] || ""
    const numStr = match[2].replace(/,/g, "")
    const num = parseInt(numStr, 10)
    const suffix = match[3] || ""
    
    return { prefix, num, suffix }
  }, [])

  const { prefix, num, suffix } = parseValue(value)
  const { count, hasStarted, ref } = useOptimizedCounter(num, 1500)

  const formatNumber = useCallback((n: number) => {
    return n.toLocaleString()
  }, [])

  // If not started yet, show the static value in a way that respects JS-disabled or slow loading
  const displayValue = hasStarted ? `${prefix}${formatNumber(count)}${suffix}` : value

  if (value.includes("/")) {
    const parts = value.split("/")
    const rating = parseFloat(parts[0])
    const { count: ratingCount, hasStarted: ratingStarted, ref: ratingRef } = useOptimizedCounter(
      Math.floor(rating * 10), 
      1500
    )
    
    return (
      <div ref={ratingRef} className="bg-white rounded-2xl h-full flex flex-col overflow-hidden shadow-sm hover:shadow-md transition-shadow">
        <div className="flex-1 flex items-center justify-center gap-4 p-6">
          {icon && (
            <div className="w-12 h-12 relative flex-shrink-0">
              <Image 
                src={icon} 
                alt={label} 
                fill 
                className="object-contain"
                loading="lazy"
                sizes="48px"
                style={iconColor ? { filter: 'invert(18%) sepia(35%) saturate(1284%) hue-rotate(105deg) brightness(95%) contrast(92%)' } : {}}
              />
            </div>
          )}
          <h3 className="text-4xl font-bold text-[#00712C]">
            {ratingStarted ? `${(ratingCount / 10).toFixed(1)}/${parts[1]}` : value}
          </h3>
        </div>
        <div className="bg-neutral-100 p-4 text-center border-b-8 border-[#00712C]">
          <p className="text-base font-semibold text-neutral-800">{label}</p>
        </div>
      </div>
    )
  }

  return (
    <div ref={ref} className="bg-white rounded-2xl h-full flex flex-col overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="flex-1 flex items-center justify-center gap-4 p-6">
        {icon && (
          <div className="w-12 h-12 relative flex-shrink-0">
            <Image 
              src={icon} 
              alt={label} 
              fill 
              className="object-contain"
              loading="lazy"
              sizes="48px"
              style={iconColor ? { filter: 'invert(18%) sepia(35%) saturate(1284%) hue-rotate(105deg) brightness(95%) contrast(92%)' } : {}}
            />
          </div>
        )}
        <h3 className="text-4xl font-bold text-[#00712C]">
          {displayValue}
        </h3>
      </div>
      <div className="bg-neutral-100 p-4 text-center border-b-8 border-[#00712C]">
        <p className="text-base font-semibold text-neutral-800">{label}</p>
      </div>
    </div>
  )
}
