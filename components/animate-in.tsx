"use client"

import React from "react"

import { useEffect, useRef } from "react"
import { motion, useAnimation, useInView } from "framer-motion"

interface AnimateInProps {
  children: React.ReactNode
  className?: string
  direction?: "up" | "down" | "left" | "right"
  delay?: number
  duration?: number
  once?: boolean
  style?: React.CSSProperties
}

export function AnimateIn({
  children,
  className,
  direction = "up",
  delay = 0,
  duration = 0.5,
  once = true,
  style,
  ...props
}: AnimateInProps) {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once })

  const getDirectionOffset = () => {
    switch (direction) {
      case "up":
        return { y: 20 }
      case "down":
        return { y: -20 }
      case "left":
        return { x: 20 }
      case "right":
        return { x: -20 }
      default:
        return { y: 0 }
    }
  }

  useEffect(() => {
    if (isInView) {
      controls.start({
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
          duration,
          delay,
          ease: "easeOut",
        },
      })
    }
  }, [isInView, controls, delay, duration])

  return (
    <motion.div
      ref={ref}
      initial={{ ...getDirectionOffset(), opacity: 0 }}
      animate={controls}
      className={className}
      style={style}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export function AnimateInStagger({
  children,
  className,
  direction = "up",
  staggerDelay = 0.1,
  duration = 0.5,
  once = true,
  style,
  ...props
}: AnimateInProps & { staggerDelay?: number }) {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once, amount: 0.2 })

  const getDirectionOffset = () => {
    switch (direction) {
      case "up":
        return { y: 20 }
      case "down":
        return { y: -20 }
      case "left":
        return { x: 20 }
      case "right":
        return { x: -20 }
      default:
        return { y: 0 }
    }
  }

  useEffect(() => {
    if (isInView) {
      controls.start((i) => ({
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
          duration,
          delay: i * staggerDelay,
          ease: "easeOut",
        },
      }))
    }
  }, [isInView, controls, staggerDelay, duration])

  return (
    <div ref={ref} className={className} style={style} {...props}>
      {React.Children.map(children, (child, i) => (
        <motion.div custom={i} initial={{ ...getDirectionOffset(), opacity: 1 }} animate={controls}>
          {child}
        </motion.div>
      ))}
    </div>
  )
}
