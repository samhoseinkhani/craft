/**
 * Scroll Progress Indicator
 * Shows reading progress at top of page
 */
import { useEffect, useState } from 'react'

export function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = (scrollTop / docHeight) * 100

      setProgress(Math.min(scrollPercent, 100))
    }

    window.addEventListener('scroll', updateProgress, { passive: true })
    updateProgress() // Initial calculation

    return () => window.removeEventListener('scroll', updateProgress)
  }, [])

  return (
    <div
      className="bg-primary fixed top-0 left-0 z-100 h-1 transition-all duration-150 ease-out"
      style={{ width: `${progress}%` }}
    />
  )
}
