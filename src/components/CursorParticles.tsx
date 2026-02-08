/**
 * Cursor Particles Component
 * Toggleable particle trail effect
 */
import { useState } from 'react'
import { useHotkeys } from 'react-hotkeys-hook'
import { useCursorParticles } from '@/hooks/useCursorParticles'

export function CursorParticles() {
  // Check localStorage for saved preference
  const [enabled, setEnabled] = useState(() => {
    const saved = localStorage.getItem('cursor-particles-enabled')
    return saved === 'true'
  })

  // Toggle particles with 'p' key
  useHotkeys('p', () => {
    const newState = !enabled
    setEnabled(newState)
    localStorage.setItem('cursor-particles-enabled', String(newState))

    // Show a subtle notification
    console.log(`✨ Cursor particles ${newState ? 'enabled' : 'disabled'}`)
  })

  // Use the particles hook
  useCursorParticles({
    enabled,
    colors: ['#2563eb', '#3b82f6', '#60a5fa', '#1d4ed8'],
    particleCount: 2,
  })

  // Show indicator when enabled
  if (!enabled) return null

  return (
    <div
      className="bg-primary/10 text-primary hover:bg-primary/20 fixed right-4 bottom-16 z-50 cursor-help rounded-full px-3 py-1 text-xs font-bold transition-colors"
      title="Cursor particles enabled (Press 'p' to toggle)"
    >
      ✨
    </div>
  )
}
