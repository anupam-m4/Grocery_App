import { create } from 'zustand'
import type { ProductCategory } from '../types/product'

interface FilterState {
  categories: ProductCategory[]
  brands: string[]
  toggleCategory: (category: ProductCategory) => void
  toggleBrand: (brand: string) => void
  reset: () => void
}

export const useFilterStore = create<FilterState>((set) => ({
  categories: [],
  brands: [],

  toggleCategory: (category) =>
    set((state) => ({
      categories: state.categories.includes(category)
        ? state.categories.filter((item) => item !== category)
        : [...state.categories, category],
    })),

  toggleBrand: (brand) =>
    set((state) => ({
      brands: state.brands.includes(brand)
        ? state.brands.filter((item) => item !== brand)
        : [...state.brands, brand],
    })),

  reset: () => set({ categories: [], brands: [] }),
}))
