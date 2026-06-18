import { ProductCategory } from '../types/product'

export const CATEGORY_LABELS: Record<ProductCategory, string> = {
  [ProductCategory.FreshFruitsVegetable]: 'Fresh Fruits & Vegetable',
  [ProductCategory.CookingOilGhee]: 'Cooking Oil & Ghee',
  [ProductCategory.MeatFish]: 'Meat & Fish',
  [ProductCategory.BakerySnacks]: 'Bakery & Snacks',
  [ProductCategory.DairyEggs]: 'Dairy & Eggs',
  [ProductCategory.Beverages]: 'Beverages',
}
