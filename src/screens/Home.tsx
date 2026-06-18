import productsData from '../data/products.json'
import type { Product } from '../types/product'
import ProductCard from '../components/ProductCard'
import BottomNav from '../components/BottomNav'
import bannerImage from '../assets/figma/banner.png'

const products = productsData as Product[]

function Home() {
  return (
    <div className="flex h-screen flex-col bg-white dark:bg-gray-900">
      <header className="px-4 pt-6">
        <div className="mb-4 flex flex-col items-center">
          <span className="text-2xl" aria-hidden="true">
            🥕
          </span>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            📍 Dhaka, Banassre
          </p>
        </div>

        <input
          type="search"
          placeholder="Search Store"
          className="mb-4 w-full rounded-lg bg-gray-100 px-4 py-3 text-sm outline-none dark:bg-gray-800 dark:text-white"
        />
      </header>

      <main className="flex-1 overflow-y-auto px-4 pb-4">
        <img
          src={bannerImage}
          alt="Fresh Vegetables - up to 40% off"
          className="mb-6 w-full rounded-xl"
        />

        <section className="mb-6">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white">
              Exclusive Offer
            </h2>
            <span className="text-sm text-emerald-600">See all</span>
          </div>
          <div className="flex gap-3 overflow-x-auto pb-2">
            {products.slice(0, 2).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        <section className="mb-6">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white">
              Best Selling
            </h2>
            <span className="text-sm text-emerald-600">See all</span>
          </div>
          <div className="flex gap-3 overflow-x-auto pb-2">
            {products.slice(2, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        <section className="mb-6">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white">
              Groceries
            </h2>
            <span className="text-sm text-emerald-600">See all</span>
          </div>
          <div className="flex gap-3 overflow-x-auto pb-2">
            {products.slice(4, 6).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </main>

      <BottomNav />
    </div>
  )
}

export default Home
