/**
 * FPS Counter Hook
 * Tracks frames per second for performance monitoring
 */
import { useEffect, useState } from 'react'

export function useFPS() {
  const [fps, setFps] = useState(0)

  useEffect(() => {
    let frameCount = 0
    let lastTime = performance.now()
    let animationFrameId: number

    const countFrames = () => {
      frameCount++
      const currentTime = performance.now()

      // Update FPS every second
      if (currentTime >= lastTime + 1000) {
        setFps(Math.round((frameCount * 1000) / (currentTime - lastTime)))
        frameCount = 0
        lastTime = currentTime
      }

      animationFrameId = requestAnimationFrame(countFrames)
    }

    animationFrameId = requestAnimationFrame(countFrames)

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return fps
}
