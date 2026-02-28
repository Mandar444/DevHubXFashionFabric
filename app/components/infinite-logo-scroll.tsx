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
  logoSize?: number; // px, height of logo
}

export function InfiniteLogoScroll({ clients, speed = 40, logoSize }: InfiniteLogoScrollProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isPaused, setIsPaused] = useState(false)

  // Use CSS animation for smooth, GPU-accelerated scrolling
  const animationStyle = {
    animationDuration: `${speed}s`,
    animationPlayState: isPaused ? 'paused' : 'running',
  } as React.CSSProperties

  const [baseSize, setBaseSize] = useState(logoSize || 160)
  
  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 768;
      setBaseSize(logoSize ? (isMobile ? logoSize * 0.6 : logoSize) : (isMobile ? 80 : 160));
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [logoSize]);

  const containerW = baseSize * 1.8;
  const containerH = baseSize * 0.8;
  const imgW = baseSize * 1.6;
  const imgH = baseSize * 0.7;
  const imgMaxH = baseSize * 0.6;

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
            className={`flex items-center justify-center mx-6 md:mx-10 rounded-lg shadow-sm shrink-0 ${client.darkBg ? 'bg-neutral-900' : 'bg-white'}`}
            style={{ width: containerW, height: containerH, minWidth: containerW, minHeight: containerH }}
          >
            <Image
              src={client.logo}
              alt={client.name}
              width={imgW}
              height={imgH}
              className="object-contain w-auto"
              style={{ maxHeight: imgMaxH }}
              loading="lazy"
              sizes={`${imgW}px`}
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
            className={`flex items-center justify-center mx-6 md:mx-10 rounded-lg shadow-sm shrink-0 ${client.darkBg ? 'bg-neutral-900' : 'bg-white'}`}
            style={{ width: containerW, height: containerH, minWidth: containerW, minHeight: containerH }}
          >
            <Image
              src={client.logo}
              alt=""
              width={imgW}
              height={imgH}
              className="object-contain w-auto"
              style={{ maxHeight: imgMaxH }}
              loading="lazy"
              sizes={`${imgW}px`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}