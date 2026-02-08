/**
 * Animation configurations using Motion One
 * Reusable animation presets following best practices
 */
import type { DOMKeyframesDefinition } from 'motion'
import { animate as motionAnimate } from 'motion'

// Easing functions for smooth, professional animations
export const easings = {
  smooth: [0.25, 0.1, 0.25, 1] as const, // Smooth ease-in-out
  snappy: [0.4, 0, 0.2, 1] as const, // Material Design standard
  bounce: [0.68, -0.55, 0.265, 1.55] as const, // Subtle bounce
}

// Duration presets (in seconds)
export const durations = {
  fast: 0.2,
  normal: 0.4,
  slow: 0.6,
  slower: 0.8,
} as const

// Fade in animation
export const fadeIn: DOMKeyframesDefinition = {
  opacity: [0, 1],
}

// Fade in from below (slide up)
export const fadeInUp: DOMKeyframesDefinition = {
  opacity: [0, 1],
  transform: ['translateY(20px)', 'translateY(0)'],
}

// Fade in from above (slide down)
export const fadeInDown: DOMKeyframesDefinition = {
  opacity: [0, 1],
  transform: ['translateY(-20px)', 'translateY(0)'],
}

// Scale in (zoom)
export const scaleIn: DOMKeyframesDefinition = {
  opacity: [0, 1],
  transform: ['scale(0.95)', 'scale(1)'],
}

// Scale in from center
export const scaleInCenter: DOMKeyframesDefinition = {
  opacity: [0, 1],
  transform: ['scale(0.9)', 'scale(1)'],
}

// Slide in from left
export const slideInLeft: DOMKeyframesDefinition = {
  opacity: [0, 1],
  transform: ['translateX(-30px)', 'translateX(0)'],
}

// Slide in from right
export const slideInRight: DOMKeyframesDefinition = {
  opacity: [0, 1],
  transform: ['translateX(30px)', 'translateX(0)'],
}

// Rotate in
export const rotateIn: DOMKeyframesDefinition = {
  opacity: [0, 1],
  transform: ['rotate(-10deg) scale(0.95)', 'rotate(0deg) scale(1)'],
}

// Blur in
export const blurIn: DOMKeyframesDefinition = {
  opacity: [0, 1],
  filter: ['blur(10px)', 'blur(0px)'],
}

/**
 * Preset animation configurations
 * Organized by category for easy discovery
 */
export const animations = {
  // Fade animations
  fade: {
    in: fadeIn,
    inUp: fadeInUp,
    inDown: fadeInDown,
  },
  // Scale animations
  scale: {
    in: scaleIn,
    inCenter: scaleInCenter,
  },
  // Slide animations
  slide: {
    inLeft: slideInLeft,
    inRight: slideInRight,
  },
  // Special effects
  effects: {
    rotate: rotateIn,
    blur: blurIn,
  },
} as const

// Default animation options
export const defaultOptions = {
  duration: durations.normal,
}

// Respects user's motion preferences
export const respectsMotion = () => {
  return !window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/**
 * Type-safe animation helper
 * Wraps Motion One animate with proper typing
 * Centralizes type assertions in one place for cleaner code
 */
export const safeAnimate = (
  element: Element | Element[],
  keyframes: DOMKeyframesDefinition,
  options: Record<string, unknown> = defaultOptions
) => {
  // Type assertion once in helper instead of everywhere
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return motionAnimate(element as any, keyframes as any, options as any)
}
