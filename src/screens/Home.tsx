import { useNavigate } from 'react-router-dom'
import productsData from '../data/products.json'
import type { Product } from '../types/product'
import ProductCard from '../components/ProductCard'
import MainLayout from '../components/MainLayout'
import ThemeToggle from '../components/ThemeToggle'
import bannerImage from '../assets/figma/banner.png'

const products = productsData as Product[]

interface ProductSection {
  title: string
  items: Product[]
}

function Home() {
  const navigate = useNavigate()

  const sections: ProductSection[] = [
    { title: 'Exclusive Offer', items: products.slice(0, 4) },
    { title: 'Best Selling', items: products.slice(1, 5) },
    { title: 'Groceries', items: products.slice(2, 6) },
  ]

  return (
    <MainLayout>
      <header className="border-b border-gray-100 px-4 py-4 dark:border-gray-800 lg:hidden">
        <div className="mb-4 flex items-center justify-between">
          <span className="w-9" aria-hidden="true" />
          <div className="flex flex-col items-center">
            <span className="text-2xl" aria-hidden="true">
              🥕
            </span>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              📍 Dhaka, Banassre
            </p>
          </div>
          <ThemeToggle />
        </div>

        <button
          type="button"
          onClick={() => navigate('/search')}
          className="w-full rounded-lg bg-gray-100 px-4 py-3 text-left text-sm text-gray-400 dark:bg-gray-800"
        >
          Search Store
        </button>
      </header>

      <main className="flex-1 overflow-y-auto px-4 py-6 lg:px-10 lg:py-8">
        <div className="mx-auto w-full max-w-7xl">
          <img
            src={bannerImage}
            alt="Fresh Vegetables - up to 40% off"
            className="mb-8 w-full rounded-xl lg:h-48 lg:object-cover"
          />

          {sections.map((section) => (
            <section key={section.title} className="mb-10">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white lg:text-xl">
                  {section.title}
                </h2>
                <button
                  type="button"
                  onClick={() => navigate(`/category/${section.items[0].category}`)}
                  className="text-sm font-medium text-emerald-600"
                >
                  See all
                </button>
              </div>
              <div className="flex gap-3 overflow-x-auto pb-2 lg:gap-4">
                {section.items.map((product) => (
                  <div key={product.id} className="w-40 shrink-0 lg:w-48">
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
    </MainLayout>
  )
}

export default Home
