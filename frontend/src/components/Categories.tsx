interface Category {
  id: number
  name: string
  image: string
}

const categories: Category[] = [
  { id: 1, name: "Smartphones", image: "/images/m1.png" },
  { id: 2, name: "Laptops", image: "/images/cat2.png" },
  { id: 3, name: "Smart Watches", image: "/images/cat3.png" },
  { id: 4, name: "Accessories", image: "/images/cat4.png" },
]

const Categories = () => {
  return (
    <section className=" pt-50  py-12 md:py-15 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-5 text-center">

        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
          Shop By Category
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">

          {categories.map((category) => (
            <div
              key={category.id}
              className="group cursor-pointer text-center"
            >
              <div className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-gray-100 flex items-center justify-center border border-gray-200 transition-all duration-300 group-hover:shadow-md group-hover:-translate-y-1">

                <img src={category.image} alt={category.name}
                  className="w-20 h-20 object-contain transition-transform duration-300 group-hover:scale-110"
                />

              </div>

              <p className="mt-4 text-sm md:text-base font-medium text-gray-700 group-hover:text-black transition">
                {category.name}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  )
}

export default Categories