import type { DOMKeyframesDefinition } from 'motion'
import { inView } from 'motion'
import { useEffect, useRef } from 'react'
import { defaultOptions, fadeInUp, respectsMotion, safeAnimate } from '@/utils/animations'

interface UseScrollAnimationOptions {
  /**
   * Custom animation keyframes (defaults to fadeInUp)
   */
  animation?: DOMKeyframesDefinition
  /**
   * Custom animation options (duration, delay, etc.)
   */
  animationOptions?: Record<string, unknown>
  /**
   * Intersection Observer threshold (0-1)
   */
  threshold?: number
  /**
   * Trigger animation only once
   */
  once?: boolean
}

/**
 * Custom hook for scroll-triggered animations
 * Uses Intersection Observer via Motion One's inView
 *
 * @example
 * ```tsx
 * // Default fade in up
 * const ref = useScrollAnimation()
 *
 * // Custom animation
 * const ref = useScrollAnimation({
 *   animation: scaleIn,
 *   animationOptions: { duration: 0.8 }
 * })
 * ```
 *
 * @param options - Animation configuration
 * @returns ref to attach to the element
 */
export function useScrollAnimation<T extends HTMLElement>(options: UseScrollAnimationOptions = {}) {
  const {
    animation = fadeInUp,
    animationOptions = defaultOptions,
    threshold = 0.1,
    once = true,
  } = options
  const ref = useRef<T>(null)

  useEffect(() => {
    const element = ref.current
    if (!element || !respectsMotion()) return

    // Use Motion One's inView for scroll-triggered animations
    const cleanup = inView(
      element,
      () => {
        safeAnimate(element, animation, animationOptions)
      },
      {
        amount: threshold,
      }
    )

    // Cleanup observer on unmount
    return () => {
      if (typeof cleanup === 'function') {
        cleanup()
      }
    }
  }, [animation, animationOptions, threshold, once])

  return ref
}
