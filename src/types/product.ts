export enum ProductCategory {
  FreshFruitsVegetable = 'fresh-fruits-vegetable',
  CookingOilGhee = 'cooking-oil-ghee',
  MeatFish = 'meat-fish',
  BakerySnacks = 'bakery-snacks',
  DairyEggs = 'dairy-eggs',
  Beverages = 'beverages',
}

export interface Product {
  id: string
  name: string
  description: string
  category: ProductCategory
  brand: string
  unit: string
  price: number
  imageUrl: string
  rating: number
  isFavourite: boolean
}
