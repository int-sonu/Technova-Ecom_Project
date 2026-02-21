import { useEffect, useState } from "react"
import { Heart, ShoppingCart } from "lucide-react"
import { useNavigate } from "react-router-dom"

interface Product {
  id: number
  name: string
  price: number
  images: string[]
  discount?: number
}

const products: Product[] = [
  {
    id: 1,
    name: "Aurora Rose Gold Watch",
    price: 9999,
    discount: 20,
    images: ["/images/watch1.png", "/images/watch4.png", "/images/watch5.png"],
  },
  {
    id: 2,
    name: "POCO C75 5G, Enchanted Green (4GB, 64GB)",
    price: 7499,
    images: ["/images/m1.png", "/images/m2.png", "/images/cat1.png"],
  },
  {
    id: 3,
    name: "HP 15, AMD Ryzen 3 7320U (8GB DDR4, 512GB SSD)",
    price: 15999,
    discount: 15,
    images: ["/images/l1.png", "/images/l2.png", "/images/l3.png"],
  },
  {
    id: 4,
    name: "OLEVS Men's Business Watch Gold Blue with Large Easy-Read Analog Quartz Date Display Luxury Stainless Steel Band Waterproof Luminous Hands",
    price: 6999,
    images: ["/images/mw1.png", "/images/mw2.png", "/images/mw3.png"],
  },
  {
    id: 5,
    name: "Boat Rockerz 450 Wireless Headphones",
    price: 4999,
    images: ["/images/bh1.png", "/images/bh2.png", "/images/bh3.png"],
  },
  {
    id: 6,
    name: "Dell Inspiron 15 Laptop",
    price: 42999,
    images: ["/images/l1.png", "/images/l2.png", "/images/l3.png"],
  },
  {
    id: 7,
    name: "Samsung Galaxy A15 5G",
    price: 18999,
    images: ["/images/m1.png", "/images/m2.png", "/images/cat1.png"],
  },
  {
    id: 8,
    name: "Titan Neo Analog Watch",
    price: 7999,
    images: ["/images/watch1.png", "/images/watch4.png", "/images/watch5.png"],
  },
]

interface ProductCardProps {
  product: Product
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [current, setCurrent] = useState<number>(0)
  const navigate = useNavigate()

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % product.images.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [product.images.length])

  const originalPrice = product.discount
    ? Math.round(product.price / (1 - product.discount / 100))
    : null

  return (
    <div className="bg-gray-100 p-4 rounded-lg border border-gray-200 hover:shadow-lg transition relative group">

      {product.discount && (
        <span className="absolute top-3 left-3 z-20 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
          {product.discount}% OFF
        </span>
      )}

      <button className="absolute top-3 right-3 z-20 bg-white p-2 rounded-full shadow-sm hover:text-red-500 transition">
        <Heart size={18} />
      </button>

      <div
        onClick={() => navigate("/product")}
        className="relative z-10 h-44 md:h-48 overflow-hidden flex items-center justify-center cursor-pointer"
      >
        <div
          className="flex transition-transform duration-700 ease-in-out h-full"
          style={{
            transform: `translateX(-${current * 100}%)`,
            width: `${product.images.length * 100}%`,
          }}
        >
          {product.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={product.name}
              className="w-full h-full object-contain flex-shrink-0"
            />
          ))}
        </div>
      </div>

      <h3 className="mt-4 text-sm md:text-base font-medium text-center line-clamp-2 min-h-[48px]">
        {product.name}
      </h3>

      <div className="mt-2 text-center">
        {product.discount && originalPrice && (
          <span className="text-gray-400 line-through mr-2 text-sm">
            {originalPrice.toLocaleString("en-IN")}
          </span>
        )}
        <span className="font-semibold text-pink-500">
          ₹{product.price.toLocaleString("en-IN")}
        </span>
      </div>

      <button
        onClick={() => navigate("/cart")}
        className="mt-4 w-full flex items-center justify-center gap-2 bg-pink-500 text-white py-2 rounded-md hover:bg-pink-600 transition"
      >
        <ShoppingCart size={16} />
        Add to Cart
      </button>
    </div>
  )
}

const PRODUCTS_PER_PAGE = 4

const ProductsSection = () => {
  const [currentPage, setCurrentPage] = useState<number>(1)

  const totalPages = Math.ceil(products.length / PRODUCTS_PER_PAGE)

  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE
  const selectedProducts = products.slice(
    startIndex,
    startIndex + PRODUCTS_PER_PAGE
  )

  return (
    <section className="pt-4 pb-10 md:pt-6 md:pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">

        <h2 className="text-2xl md:text-3xl font-semibold mb-8">
          Trending Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {selectedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="flex justify-center mt-10 gap-2">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`px-4 py-2 rounded-md border transition ${
                currentPage === index + 1
                  ? "bg-pink-500 text-white border-pink-500"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>

      </div>
    </section>
  )
}

export default ProductsSection