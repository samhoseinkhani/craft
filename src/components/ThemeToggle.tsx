import { useEffect } from 'react'
import { MoonIcon, SunIcon } from '@/icons'
import { useThemeStore } from '@/stores/themeStore'
import Icon from './ui/Icon'
import { Button } from './ui/button'

function ThemeToggle() {
  const { theme, toggleTheme, setTheme } = useThemeStore()

  // Initialize theme on mount
  useEffect(() => {
    setTheme(theme)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="relative"
    >
      <Icon
        icon={SunIcon}
        size={18}
        className="scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90"
      />
      <Icon
        icon={MoonIcon}
        size={18}
        className="absolute scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0"
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}

export default ThemeToggle
