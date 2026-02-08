/**
 * Keyboard Shortcuts Help Modal
 * Shows all available keyboard shortcuts
 */
import { X } from 'lucide-react'
import { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface KeyboardShortcutsHelpProps {
  isOpen: boolean
  onClose: () => void
}

const shortcuts = [
  {
    category: 'Navigation',
    items: [
      { keys: ['j'], description: 'Scroll down' },
      { keys: ['k'], description: 'Scroll up' },
      { keys: ['g', 'g'], description: 'Scroll to top' },
      { keys: ['G'], description: 'Scroll to bottom' },
    ],
  },
  {
    category: 'Pages',
    items: [
      { keys: ['g', 'h'], description: 'Go to home' },
      { keys: ['g', 'r'], description: 'Go to resume' },
      { keys: ['g', 'b'], description: 'Go to blog' },
    ],
  },
  {
    category: 'Easter Eggs',
    items: [
      { keys: ['↑', '↑', '↓', '↓', '←', '→', '←', '→', 'B', 'A'], description: 'Konami Code 🎮' },
    ],
  },
  {
    category: 'Help',
    items: [
      { keys: ['?'], description: 'Show this help' },
      { keys: ['Esc'], description: 'Close this help' },
    ],
  },
]

export function KeyboardShortcutsHelp({ isOpen, onClose }: KeyboardShortcutsHelpProps) {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        onClose()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="fixed top-1/2 left-1/2 z-50 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 p-4">
        <div className="bg-background border-border animate-in fade-in zoom-in-95 rounded-lg border-2 p-6 shadow-2xl">
          {/* Header */}
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold">Keyboard Shortcuts</h2>
              <p className="text-muted-foreground text-sm">
                Navigate faster with Vim-style shortcuts
              </p>
            </div>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Shortcuts List */}
          <div className="space-y-6">
            {shortcuts.map(section => (
              <div key={section.category}>
                <h3 className="text-muted-foreground mb-3 text-xs font-bold tracking-wider uppercase">
                  {section.category}
                </h3>
                <div className="space-y-2">
                  {section.items.map((shortcut, index) => (
                    <div key={index} className="flex items-center justify-between gap-4">
                      <span className="text-sm">{shortcut.description}</span>
                      <div className="flex gap-1">
                        {shortcut.keys.map((key, keyIndex) => (
                          <kbd
                            key={keyIndex}
                            className={cn(
                              'bg-muted border-border text-foreground rounded px-2 py-1 font-mono text-xs font-bold shadow-sm',
                              'min-w-7 text-center'
                            )}
                          >
                            {key}
                          </kbd>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="text-muted-foreground mt-6 border-t pt-4 text-center text-xs">
            Press{' '}
            <kbd className="bg-muted border-border rounded px-2 py-1 font-mono font-bold">Esc</kbd>{' '}
            to close
          </div>
        </div>
      </div>
    </>
  )
}
