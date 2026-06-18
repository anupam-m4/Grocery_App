import { create } from 'zustand'
import type { Product } from '../types/product'

interface FavouriteState {
  items: Product[]
  toggleFavourite: (product: Product) => void
  isFavourite: (productId: string) => boolean
}

export const useFavouriteStore = create<FavouriteState>((set, get) => ({
  items: [],

  toggleFavourite: (product) =>
    set((state) => {
      const exists = state.items.some((item) => item.id === product.id)
      return {
        items: exists
          ? state.items.filter((item) => item.id !== product.id)
          : [...state.items, product],
      }
    }),

  isFavourite: (productId) => get().items.some((item) => item.id === productId),
}))
