import redApple from '../assets/figma/product-red-apple.png'
import bellPepper from '../assets/figma/Bell-pepper.png'
import organicBananas from '../assets/figma/Organic Bananas.png'
import ginger from '../assets/figma/ginger.png'
import broilerChicken from '../assets/figma/broiler-chicken.png'
import orangeJuice from '../assets/figma/orange-juice.png'
import milkCarton from '../assets/figma/milk-carton.png'
import breadLoaf from '../assets/figma/bread-loaf.png'
import cookingOil from '../assets/figma/cooking-oil.png'
import { ProductCategory } from '../types/product'

const PRODUCT_IMAGES: Record<string, string> = {
  'red-apple': redApple,
  'bell-apper': bellPepper,
  'organic-bananas': organicBananas,
  ginger,
  'broiler-chicken': broilerChicken,
  'orange-juice': orangeJuice,
  'milk-carton': milkCarton,
  'bread-loaf': breadLoaf,
  'cooking-oil': cookingOil,
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
