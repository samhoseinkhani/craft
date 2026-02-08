import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type Theme = 'dark' | 'light'

interface ThemeStore {
  theme: Theme
  toggleTheme: () => void
  setTheme: (theme: Theme) => void
}

export const useThemeStore = create<ThemeStore>()(
  persist(
    set => ({
      theme: 'dark', // Default to dark mode
      toggleTheme: () =>
        set(state => {
          const newTheme = state.theme === 'dark' ? 'light' : 'dark'
          // Apply theme to document
          if (newTheme === 'dark') {
            document.documentElement.classList.add('dark')
          } else {
            document.documentElement.classList.remove('dark')
          }
          return { theme: newTheme }
        }),
      setTheme: theme =>
        set(() => {
          // Apply theme to document
          if (theme === 'dark') {
            document.documentElement.classList.add('dark')
          } else {
            document.documentElement.classList.remove('dark')
          }
          return { theme }
        }),
    }),
    {
      name: 'theme-storage', // localStorage key
      onRehydrateStorage: () => state => {
        // Apply theme when store is rehydrated from localStorage
        if (state?.theme === 'dark') {
          document.documentElement.classList.add('dark')
        } else {
          document.documentElement.classList.remove('dark')
        }
      },
    }
  )
)
