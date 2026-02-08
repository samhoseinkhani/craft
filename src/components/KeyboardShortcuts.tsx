/**
 * Keyboard Shortcuts Manager
 * Enables Vim-style keyboard navigation using react-hotkeys-hook
 */
import { useState } from 'react'
import { useHotkeys } from 'react-hotkeys-hook'
import { KeyboardShortcutsHelp } from './KeyboardShortcutsHelp'

export function KeyboardShortcuts() {
  const [showHelp, setShowHelp] = useState(false)

  // Scrolling
  useHotkeys('j', () => window.scrollBy({ top: 100, behavior: 'smooth' }), {
    preventDefault: true,
  })

  useHotkeys('k', () => window.scrollBy({ top: -100, behavior: 'smooth' }), {
    preventDefault: true,
  })

  useHotkeys('g+g', () => window.scrollTo({ top: 0, behavior: 'smooth' }))

  useHotkeys('shift+g', () =>
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
  )

  // Navigation
  useHotkeys('g+h', () => (window.location.href = '/'))

  useHotkeys('g+r', () => (window.location.href = '/resume'))

  useHotkeys('g+b', () => (window.location.href = '/blog'))

  // Help modal (? key) - toggle
  useHotkeys('shift+slash', () => setShowHelp(prev => !prev), { preventDefault: true })

  return <KeyboardShortcutsHelp isOpen={showHelp} onClose={() => setShowHelp(false)} />
}
