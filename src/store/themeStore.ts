import { create } from 'zustand'

type Theme = 'light' | 'dark'

const STORAGE_KEY = 'nectar-theme'

function getStoredTheme(): Theme {
  const stored = localStorage.getItem(STORAGE_KEY)
  return stored === 'dark' ? 'dark' : 'light'
}

function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle('dark', theme === 'dark')
}

interface ThemeState {
  theme: Theme
  toggleTheme: () => void
}

export const useThemeStore = create<ThemeState>((set, get) => ({
  theme: getStoredTheme(),

  toggleTheme: () => {
    const nextTheme: Theme = get().theme === 'dark' ? 'light' : 'dark'
    localStorage.setItem(STORAGE_KEY, nextTheme)
    applyTheme(nextTheme)
    set({ theme: nextTheme })
  },
}))

applyTheme(getStoredTheme())
