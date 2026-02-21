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
    name: "OLEVS Men's Business Watch",
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

const ProductDetails = () => {
  const navigate = useNavigate()

  const formatPrice = (amount: number) => {
    return amount.toLocaleString("en-IN")
  }

  return (
    <div className="py-10 md:py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-10">

        <div className="md:col-span-1 border border-gray-200 p-5 rounded-lg h-fit">
          <h3 className="text-lg font-semibold mb-4">Categories</h3>

          <div className="space-y-3 text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              <span>Smart Watches</span>
            </label>

            <label className="flex items-center gap-2">
              <input type="checkbox" />
              <span>Mobiles</span>
            </label>

            <label className="flex items-center gap-2">
              <input type="checkbox" />
              <span>Laptops</span>
            </label>

            <label className="flex items-center gap-2">
              <input type="checkbox" />
              <span>Headphones</span>
            </label>
          </div>
        </div>

        <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {products.map((product) => {
            const originalPrice = product.discount
              ? Math.round(product.price / (1 - product.discount / 100))
              : null

            return (
              <div
                key={product.id}
                className="bg-gray-100 p-4 rounded-lg border border-gray-200 hover:shadow-lg transition relative"
              >
                {product.discount && (
                  <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
                    {product.discount}% OFF
                  </span>
                )}

                <div className="h-40 flex items-center justify-center">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="h-28 sm:h-32 object-contain"
                  />
                </div>

                <h3 className="mt-3 text-sm font-medium text-center line-clamp-2 min-h-[40px]">
                  {product.name}
                </h3>

                <div className="text-center mt-2">
                  {originalPrice && (
                    <span className="text-gray-400 line-through text-sm mr-2">
                      {formatPrice(originalPrice)} INR
                    </span>
                  )}
                  <span className="text-pink-500 font-semibold">
                    {formatPrice(product.price)} INR
                  </span>
                </div>

                <button
                  onClick={() => navigate("/cart")}
                  className="mt-3 w-full bg-pink-500 text-white py-2 rounded-md hover:bg-pink-600 transition"
                >
                  Add to Cart
                </button>
              </div>
            )
          })}

        </div>
      </div>
    </div>
  )
}

export default ProductDetails