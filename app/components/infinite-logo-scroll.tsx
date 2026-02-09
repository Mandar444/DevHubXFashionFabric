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
            className={`flex items-center justify-center mx-4 md:mx-8 w-[150px] md:w-[200px] h-[75px] md:h-[100px] rounded-lg shadow-sm shrink-0 ${
              client.darkBg ? 'bg-neutral-900' : 'bg-white'
            }`}
          >
            <Image
              src={client.logo}
              alt={client.name}
              width={150}
              height={75}
              className="object-contain max-h-[60px] md:max-h-[75px] w-auto"
              loading="lazy"
              sizes="150px"
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
            className={`flex items-center justify-center mx-4 md:mx-8 w-[150px] md:w-[200px] h-[75px] md:h-[100px] rounded-lg shadow-sm shrink-0 ${
              client.darkBg ? 'bg-neutral-900' : 'bg-white'
            }`}
          >
            <Image
              src={client.logo}
              alt=""
              width={150}
              height={75}
              className="object-contain max-h-[60px] md:max-h-[75px] w-auto"
              loading="lazy"
              sizes="150px"
            />
          </div>
        ))}
      </div>
    </div>
  );
}