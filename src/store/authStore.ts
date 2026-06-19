import { create } from 'zustand'
import type { ConfirmationResult, User } from 'firebase/auth'

interface AuthState {
  user: User | null
  confirmationResult: ConfirmationResult | null
  setUser: (user: User | null) => void
  setConfirmationResult: (result: ConfirmationResult | null) => void
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  confirmationResult: null,
  setUser: (user) => set({ user }),
  setConfirmationResult: (confirmationResult) => set({ confirmationResult }),
}))
