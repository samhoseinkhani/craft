/**
 * Developer Mode Component
 * Shows FPS counter, grid overlay, and performance stats
 */
import { useState } from 'react'
import { useHotkeys } from 'react-hotkeys-hook'
import { useFPS } from '@/hooks/useFPS'
import { cn } from '@/lib/utils'

export function DeveloperMode() {
  const [enabled, setEnabled] = useState(() => {
    return localStorage.getItem('dev-mode-enabled') === 'true'
  })

  const [showGrid, setShowGrid] = useState(false)
  const fps = useFPS()

  // Toggle dev mode with 'd' key
  useHotkeys('d', () => {
    const newState = !enabled
    setEnabled(newState)
    localStorage.setItem('dev-mode-enabled', String(newState))
    console.log(`🔧 Developer mode ${newState ? 'enabled' : 'disabled'}`)
  })

  if (!enabled) return null

  // Get performance info (Chrome-specific memory API)
  interface PerformanceMemory {
    usedJSHeapSize: number
    jsHeapSizeLimit: number
    totalJSHeapSize: number
  }

  interface PerformanceWithMemory extends Performance {
    memory?: PerformanceMemory
  }

  const memory = (performance as PerformanceWithMemory).memory
  const memoryUsed = memory ? (memory.usedJSHeapSize / 1048576).toFixed(2) : 'N/A'
  const memoryLimit = memory ? (memory.jsHeapSizeLimit / 1048576).toFixed(2) : 'N/A'

  return (
    <>
      {/* Grid Overlay */}
      {showGrid && (
        <div
          className="pointer-events-none fixed inset-0 z-9998"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(14, 165, 233, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(14, 165, 233, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />
      )}

      {/* Dev Panel */}
      <div className="bg-background/95 border-border fixed top-20 left-4 z-9999 rounded-lg border-2 p-4 font-mono text-xs shadow-2xl backdrop-blur-sm">
        <div className="mb-3 flex items-center justify-between gap-4">
          <h3 className="text-primary font-bold">🔧 Dev Mode</h3>
          <button
            onClick={() => setEnabled(false)}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            ✕
          </button>
        </div>

        <div className="space-y-2">
          {/* FPS Counter */}
          <div className="flex justify-between gap-8">
            <span className="text-muted-foreground">FPS:</span>
            <span
              className={cn(
                'font-bold',
                fps >= 55 ? 'text-green-500' : fps >= 30 ? 'text-yellow-500' : 'text-red-500'
              )}
            >
              {fps}
            </span>
          </div>

          {/* Memory Usage */}
          <div className="flex justify-between gap-8">
            <span className="text-muted-foreground">Memory:</span>
            <span className="text-foreground font-bold">
              {memoryUsed} / {memoryLimit} MB
            </span>
          </div>

          {/* Screen Resolution */}
          <div className="flex justify-between gap-8">
            <span className="text-muted-foreground">Screen:</span>
            <span className="text-foreground font-bold">
              {window.innerWidth} × {window.innerHeight}
            </span>
          </div>

          {/* Grid Toggle */}
          <div className="border-border mt-3 flex items-center justify-between gap-4 border-t pt-3">
            <span className="text-muted-foreground">Grid Overlay:</span>
            <button
              onClick={() => setShowGrid(!showGrid)}
              className={cn(
                'rounded px-2 py-1 text-xs font-bold transition-colors',
                showGrid
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              )}
            >
              {showGrid ? 'ON' : 'OFF'}
            </button>
          </div>
        </div>

        {/* Hint */}
        <div className="text-muted-foreground mt-3 border-t pt-3 text-[10px]">
          Press <kbd className="bg-muted rounded px-1">d</kbd> to toggle
        </div>
      </div>

      {/* Badge indicator */}
      <div
        className="bg-primary/10 text-primary hover:bg-primary/20 fixed right-4 bottom-28 z-50 cursor-help rounded-full px-3 py-1 text-xs font-bold transition-colors"
        title="Developer mode enabled (Press 'd' to toggle)"
      >
        🔧
      </div>
    </>
  )
}
