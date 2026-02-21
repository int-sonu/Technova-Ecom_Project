import { useNavigate } from "react-router-dom"

interface Category {
  id: number
  name: string
  image: string
}

const categories: Category[] = [
  { id: 1, name: "Mobiles", image: "/images/m1.png" },
  { id: 2, name: "Laptops", image: "/images/cat2.png" },
  { id: 3, name: "Watches", image: "/images/cat3.png" },
  { id: 4, name: "Accessories", image: "/images/cat4.png" },
]

const Categories = () => {
  const navigate = useNavigate()

  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-2xl font-semibold mb-6">
          Shop By Category
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              onClick={() => navigate(`/product/${category.id}`)}
              className="cursor-pointer group"
            >
              <div className="w-28 h-28 mx-auto rounded-full bg-gray-100 flex items-center justify-center group-hover:shadow-md transition">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-20 object-contain"
                />
              </div>
              <p className="mt-3 font-medium">{category.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Categories