/**
 * Konami Code Easter Egg Hook
 * Detects the classic ↑↑↓↓←→←→BA sequence
 */
import { useEffect, useRef } from 'react'

const KONAMI_CODE = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'KeyB',
  'KeyA',
]

interface UseKonamiCodeOptions {
  onSuccess?: () => void
}

export function useKonamiCode({ onSuccess }: UseKonamiCodeOptions = {}) {
  const keysPressed = useRef<string[]>([])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Add the key to our sequence
      keysPressed.current.push(event.code)

      // Keep only the last 10 keys (length of Konami code)
      if (keysPressed.current.length > KONAMI_CODE.length) {
        keysPressed.current.shift()
      }

      // Check if the sequence matches
      const matches = KONAMI_CODE.every((key, index) => key === keysPressed.current[index])

      if (matches) {
        console.log('🎮 Konami Code activated! 🎉')
        onSuccess?.()
        // Reset the sequence
        keysPressed.current = []
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [onSuccess])
}
