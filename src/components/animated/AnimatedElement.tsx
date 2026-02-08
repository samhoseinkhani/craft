import type { DOMKeyframesDefinition } from 'motion'
import { type HTMLAttributes, type ReactNode, createElement } from 'react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { cn } from '@/lib/utils'

interface AnimatedElementProps extends HTMLAttributes<HTMLElement> {
  /**
   * HTML element type (div, section, article, etc.)
   */
  as?: string
  /**
   * Custom animation keyframes
   */
  animation?: DOMKeyframesDefinition
  /**
   * Custom animation options
   */
  animationOptions?: Record<string, unknown>
  /**
   * Intersection Observer threshold
   */
  threshold?: number
  /**
   * Child elements
   */
  children: ReactNode
}

/**
 * Reusable animated element that triggers on scroll
 *
 * @example
 * ```tsx
 * <AnimatedElement as="section" className="my-section">
 *   <h2>Animated Content</h2>
 * </AnimatedElement>
 *
 * <AnimatedElement animation={scaleIn} threshold={0.2}>
 *   <Card>Custom animation</Card>
 * </AnimatedElement>
 * ```
 */
export function AnimatedElement({
  as = 'div',
  animation,
  animationOptions,
  threshold,
  className,
  children,
  ...props
}: AnimatedElementProps) {
  const ref = useScrollAnimation({
    animation,
    animationOptions,
    threshold,
  })

  return createElement(as, { ref, className: cn(className), ...props }, children)
}
