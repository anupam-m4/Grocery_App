import redApple from '../assets/figma/product-red-apple.png'
import { ProductCategory } from '../types/product'

const PRODUCT_IMAGES: Record<string, string> = {
  'red-apple': redApple,
}

const CATEGORY_PLACEHOLDER_EMOJI: Record<ProductCategory, string> = {
  [ProductCategory.FreshFruitsVegetable]: '🥦',
  [ProductCategory.CookingOilGhee]: '🛢️',
  [ProductCategory.MeatFish]: '🍗',
  [ProductCategory.BakerySnacks]: '🥐',
  [ProductCategory.DairyEggs]: '🥚',
  [ProductCategory.Beverages]: '🥤',
}

export function getProductImage(productId: string): string | undefined {
  return PRODUCT_IMAGES[productId]
}

export function getCategoryPlaceholderEmoji(category: ProductCategory): string {
  return CATEGORY_PLACEHOLDER_EMOJI[category]
}
