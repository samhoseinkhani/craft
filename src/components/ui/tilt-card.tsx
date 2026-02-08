/**
 * 3D Tilt Card Component
 * Interactive card with parallax tilt effect
 */
import type { ReactNode } from 'react'
import Tilt from 'react-parallax-tilt'
import { cn } from '@/lib/utils'

interface TiltCardProps {
  children: ReactNode
  className?: string
  glare?: boolean
  maxGlare?: number
  tiltMaxAngleX?: number
  tiltMaxAngleY?: number
  scale?: number
}

export function TiltCard({
  children,
  className,
  glare = true,
  maxGlare = 0.2,
  tiltMaxAngleX = 10,
  tiltMaxAngleY = 10,
  scale = 1.02,
}: TiltCardProps) {
  return (
    <Tilt
      className={cn('transform-gpu', className)}
      tiltMaxAngleX={tiltMaxAngleX}
      tiltMaxAngleY={tiltMaxAngleY}
      scale={scale}
      transitionSpeed={2500}
      glareEnable={glare}
      glareMaxOpacity={maxGlare}
      glareColor="#2563eb"
      glarePosition="all"
      glareBorderRadius="0.5rem"
    >
      {children}
    </Tilt>
  )
}
