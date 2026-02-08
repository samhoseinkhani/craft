import type { DOMKeyframesDefinition } from 'motion'
import { stagger } from 'motion'
import type { ReactElement, ReactNode } from 'react'
import { Children, cloneElement, isValidElement, useEffect, useRef } from 'react'
import { cn } from '@/lib/utils'
import { defaultOptions, fadeInUp, respectsMotion, safeAnimate } from '@/utils/animations'

interface StaggeredListProps {
  /**
   * List items to animate
   */
  children: ReactNode
  /**
   * Animation keyframes for each item
   */
  animation?: DOMKeyframesDefinition
  /**
   * Stagger delay between items (seconds)
   */
  staggerDelay?: number
  /**
   * Base duration for animations (seconds)
   */
  duration?: number
  /**
   * Additional CSS classes for container
   */
  className?: string
}

/**
 * Animates child elements with a stagger effect
 *
 * @example
 * ```tsx
 * <StaggeredList staggerDelay={0.1}>
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 *   <div>Item 3</div>
 * </StaggeredList>
 * ```
 */
export function StaggeredList({
  children,
  animation = fadeInUp,
  staggerDelay = 0.15,
  duration = 0.6,
  className,
}: StaggeredListProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current || !respectsMotion()) return

    const items = Array.from(containerRef.current.children) as HTMLElement[]

    safeAnimate(items, animation, {
      ...defaultOptions,
      duration,
      delay: stagger(staggerDelay),
    })
  }, [animation, staggerDelay, duration])

  // Add opacity-0 to children for initial hidden state
  const childrenWithOpacity = Children.map(children, child => {
    if (isValidElement(child)) {
      const childProps = child.props as { className?: string }
      const existingClassName = childProps?.className || ''
      return cloneElement(child as ReactElement<{ className?: string }>, {
        className: cn(existingClassName, 'opacity-0'),
      })
    }
    return child
  })

  return (
    <div ref={containerRef} className={cn(className)}>
      {childrenWithOpacity}
    </div>
  )
}
