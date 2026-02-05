"use client"

import { useCounter } from "@/hooks/use-counter"

interface StatCardProps {
  value: string
  label: string
}

export function StatCard({ value, label }: StatCardProps) {
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
      <div ref={ratingRef} className="bg-neutral-200 p-8 h-full flex flex-col justify-center">
        <h3 className="text-4xl font-bold text-[#2e7d32] mb-3">
          {(ratingCount / 10).toFixed(1)}/{parts[1]}
        </h3>
        <p className="text-lg font-semibold text-neutral-800">{label}</p>
      </div>
    )
  }

  return (
    <div ref={ref} className="bg-neutral-200 p-8 h-full flex flex-col justify-center">
      <h3 className="text-4xl font-bold text-[#2e7d32] mb-3">
        {prefix}{formatNumber(count)}{suffix}
      </h3>
      <p className="text-lg font-semibold text-neutral-800">{label}</p>
    </div>
  )
}
