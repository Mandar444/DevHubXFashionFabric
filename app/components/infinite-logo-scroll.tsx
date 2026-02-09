"use client"

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

interface Client {
  name: string;
  logo: string;
  darkBg?: boolean;
}

interface InfiniteLogoScrollProps {
  clients: Client[];
  speed?: number;
}

export function InfiniteLogoScroll({ clients, speed = 40 }: InfiniteLogoScrollProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isPaused, setIsPaused] = useState(false)

  // Use CSS animation for smooth, GPU-accelerated scrolling
  const animationStyle = {
    animationDuration: `${speed}s`,
    animationPlayState: isPaused ? 'paused' : 'running',
  } as React.CSSProperties

  return (
    <div 
      className="relative flex overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      ref={scrollRef}
    >
      {/* First set of logos */}
      <div
        className="flex animate-marquee shrink-0"
        style={animationStyle}
      >
        {clients.map((client, index) => (
          <div
            key={`${client.name}-${index}`}
            className={`flex items-center justify-center mx-6 md:mx-10 w-[200px] md:w-[260px] h-[100px] md:h-[140px] rounded-lg shadow-sm shrink-0 ${
              client.darkBg ? 'bg-neutral-900' : 'bg-white'
            }`}
          >
            <Image
              src={client.logo}
              alt={client.name}
              width={200}
              height={100}
              className="object-contain max-h-[80px] md:max-h-[110px] w-auto"
              loading="lazy"
              sizes="200px"
            />
          </div>
        ))}
      </div>

      {/* Duplicate set for seamless loop */}
      <div
        className="flex animate-marquee shrink-0"
        style={animationStyle}
        aria-hidden="true"
      >
        {clients.map((client, index) => (
          <div
            key={`${client.name}-duplicate-${index}`}
            className={`flex items-center justify-center mx-6 md:mx-10 w-[200px] md:w-[260px] h-[100px] md:h-[140px] rounded-lg shadow-sm shrink-0 ${
              client.darkBg ? 'bg-neutral-900' : 'bg-white'
            }`}
          >
            <Image
              src={client.logo}
              alt=""
              width={200}
              height={100}
              className="object-contain max-h-[80px] md:max-h-[110px] w-auto"
              loading="lazy"
              sizes="200px"
            />
          </div>
        ))}
      </div>
    </div>
  );
}