import { Heart } from 'lucide-react'
import type { Product } from '../types/product'
import { useFavouriteStore } from '../store/favouriteStore'

interface FavouriteButtonProps {
  product: Product
  size?: number
}

function FavouriteButton({ product, size = 24 }: FavouriteButtonProps) {
  const toggleFavourite = useFavouriteStore((state) => state.toggleFavourite)
  const isFavourite = useFavouriteStore((state) => state.isFavourite(product.id))

  return (
    <button
      type="button"
      onClick={(event) => {
        event.stopPropagation()
        toggleFavourite(product)
      }}
      aria-label={isFavourite ? 'Remove from favourites' : 'Add to favourites'}
    >
      <Heart
        size={size}
        className={
          isFavourite
            ? 'fill-red-500 text-red-500 dark:stroke-white'
            : 'text-gray-400 dark:text-white'
        }
      />
    </button>
  )
}

export default FavouriteButton
