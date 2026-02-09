"use client"

import { useCounter } from "@/hooks/use-counter"
import Image from "next/image"

interface StatCardProps {
  value: string
  label: string
  icon?: string
  iconColor?: string
}

export function StatCard({ value, label, icon, iconColor }: StatCardProps) {
  // Extract number and suffix from value (e.g., "10+" -> {num: 10, suffix: "+"})
  const parseValue = (val: string) => {
    const match = val.match(/^([+\-])?([0-9,]+)([+%])?$/)
    if (!match) return { prefix: "", num: 0, suffix: val }
    
    const prefix = match[1] || ""
    const numStr = match[2].replace(/,/g, "")
    const num = parseInt(numStr, 10)
    const suffix = match[3] || ""
    
    return { prefix, num, suffix }
  }

  const { prefix, num, suffix } = parseValue(value)
  const { count, ref } = useCounter({ end: num, duration: 2000 })

  // Format number with commas
  const formatNumber = (n: number) => {
    return n.toLocaleString()
  }

  // Special handling for decimal values like "4.4/5"
  if (value.includes("/")) {
    const parts = value.split("/")
    const rating = parseFloat(parts[0])
    const { count: ratingCount, ref: ratingRef } = useCounter({ 
      end: Math.floor(rating * 10), 
      duration: 2000 
    })
    
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
                style={iconColor ? { filter: 'invert(18%) sepia(35%) saturate(1284%) hue-rotate(105deg) brightness(95%) contrast(92%)' } : {}}
              />
            </div>
          )}
          <h3 className="text-4xl font-bold text-[#2e7d32]">
            {(ratingCount / 10).toFixed(1)}/{parts[1]}
          </h3>
        </div>
        <div className="bg-neutral-100 p-4 text-center border-b-8 border-[#2e7d32]">
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
              style={iconColor ? { filter: 'invert(18%) sepia(35%) saturate(1284%) hue-rotate(105deg) brightness(95%) contrast(92%)' } : {}}
            />
          </div>
        )}
        <h3 className="text-4xl font-bold text-[#2e7d32]">
          {prefix}{formatNumber(count)}{suffix}
        </h3>
      </div>
      <div className="bg-neutral-100 p-4 text-center border-b-8 border-[#2e7d32]">
        <p className="text-base font-semibold text-neutral-800">{label}</p>
      </div>
    </div>
  )
}
