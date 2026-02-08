/**
 * Konami Code Easter Egg
 * Triggers confetti and achievement when ↑↑↓↓←→←→BA is entered
 */
import confetti from 'canvas-confetti'
import { useState } from 'react'
import { useKonamiCode } from '@/hooks/useKonamiCode'
import { cn } from '@/lib/utils'

export function KonamiCode() {
  // Use lazy initial state to check localStorage once on mount
  const [activated, setActivated] = useState(() => {
    return localStorage.getItem('konami-unlocked') === 'true'
  })
  const [showAchievement, setShowAchievement] = useState(false)

  const triggerConfetti = () => {
    // Confetti burst from center
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#0ea5e9', '#0c4a6e', '#38bdf8', '#7dd3fc'],
    })

    // Additional side bursts
    setTimeout(() => {
      confetti({
        particleCount: 50,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#0ea5e9', '#0c4a6e', '#38bdf8', '#7dd3fc'],
      })
      confetti({
        particleCount: 50,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#0ea5e9', '#0c4a6e', '#38bdf8', '#7dd3fc'],
      })
    }, 200)
  }

  useKonamiCode({
    onSuccess: () => {
      setActivated(true)
      setShowAchievement(true)
      triggerConfetti()

      // Store achievement in localStorage
      localStorage.setItem('konami-unlocked', 'true')

      // Hide achievement after 5 seconds
      setTimeout(() => {
        setShowAchievement(false)
      }, 5000)
    },
  })

  return (
    <>
      {/* Achievement Notification */}
      <div
        className={cn(
          'pointer-events-none fixed top-20 left-1/2 z-50 -translate-x-1/2 transition-all duration-500',
          showAchievement ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
        )}
      >
        <div className="bg-primary text-primary-foreground shadow-primary/50 flex items-center gap-3 rounded-lg px-6 py-4 shadow-2xl">
          <span className="text-3xl">🎮</span>
          <div>
            <div className="font-bold">Achievement Unlocked!</div>
            <div className="text-primary-foreground/80 text-sm">Konami Code Master</div>
          </div>
          <span className="text-3xl">🎉</span>
        </div>
      </div>

      {/* Secret Badge (shows if unlocked) */}
      {activated && !showAchievement && (
        <div
          className="bg-primary/10 text-primary hover:bg-primary/20 fixed right-4 bottom-4 z-50 cursor-help rounded-full px-3 py-1 text-xs font-bold transition-colors"
          title="Konami Code Master 🎮"
        >
          🎮
        </div>
      )}
    </>
  )
}
