import { useNavigate, useParams } from "react-router-dom"

interface Product {
  id: number
  name: string
  price: number
  images: string[]
  discount?: number
  category: string
}

const products: Product[] = [
  {
    id: 1,
    name: "POCO C75 5G",
    price: 7499,
    images: ["/images/m1.png"],
    category: "mobile",
  },
  {
    id: 2,
    name: "Samsung Galaxy A15 5G",
    price: 18999,
    images: ["/images/m2.png"],
    category: "mobile",
  },
  {
    id: 3,
    name: "HP 15 Ryzen Laptop",
    price: 42999,
    images: ["/images/l1.png"],
    category: "laptop",
  },
  {
    id: 4,
    name: "Dell Inspiron 15",
    price: 45999,
    images: ["/images/l2.png"],
    category: "laptop",
  },
  {
    id: 5,
    name: "Titan Neo Watch",
    price: 7999,
    images: ["/images/watch1.png"],
    category: "watch",
  },
  {
    id: 6,
    name: "Boat Headphones",
    price: 4999,
    images: ["/images/bh1.png"],
    category: "accessories",
  },
]

const ProductDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const formatPrice = (amount: number) =>
    amount.toLocaleString("en-IN")

  const categoryMap: any = {
    "1": "mobile",
    "2": "laptop",
    "3": "watch",
    "4": "accessories",
  }

  const selectedCategory = categoryMap[id as string]

  const filteredProducts = selectedCategory
    ? products.filter(
        (product) => product.category === selectedCategory
      )
    : products

  return (
    <div className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">

        <div className="md:col-span-1 border p-5 rounded-lg h-fit">
          <h3 className="font-semibold mb-4">Categories</h3>
          <div className="space-y-3 text-sm">
            <button onClick={() => navigate("/product/1")}>Mobiles</button>
            <br />
            <button onClick={() => navigate("/product/2")}>Laptops</button>
            <br />
            <button onClick={() => navigate("/product/3")}>Watches</button>
            <br />
            <button onClick={() => navigate("/product/4")}>Accessories</button>
          </div>
        </div>

        <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-gray-100 p-4 rounded-lg border hover:shadow-lg transition"
            >
              <div className="h-40 flex items-center justify-center">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="h-28 object-contain"
                />
              </div>

              <h3 className="mt-3 text-sm font-medium text-center">
                {product.name}
              </h3>

              <div className="text-center mt-2">
                <span className="text-pink-500 font-semibold">
                  ₹{formatPrice(product.price)}
                </span>
              </div>

              <button
                onClick={() => navigate("/cart")}
                className="mt-3 w-full bg-pink-500 text-white py-2 rounded hover:bg-pink-600"
              >
                Add to Cart
              </button>
            </div>
          ))}

        </div>
      </div>
    </div>
  )
}

export default ProductDetails