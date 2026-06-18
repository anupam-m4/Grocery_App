import type { ProductCategory } from './product'

export interface ProductFilters {
  categories: ProductCategory[]
  brands: string[]
}
