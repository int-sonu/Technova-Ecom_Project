import "../styles/home.css"
import Categories from "./Categories"
import FeaturesBar from "./FeaturesBar"
import ProductsSection from "./ProductCard"
import { useNavigate } from "react-router-dom"

const HomePage = () => {
    const navigate = useNavigate()

  return (
    <>
<section className="bg-gray-100 min-h-[10px] md:min-h-[200px] flex items-center overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col md:flex-row items-center justify-between w-full gap-8">

          <div className="max-w-xl text-center md:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight animate-text-1">
              Upto <span className="text-red-600">50%</span> Off
              <br />
              Sale Starts Today!
            </h1>

            <p className="text-gray-600 text-base mt-4 mb-6 animate-text-2">
              Everything must go in our summer sale.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-text-3 justify-center md:justify-start">
              <button
                type="button"
                onClick={() => navigate("/product")}
                className="bg-black text-white px-6 py-2.5 rounded-md hover:bg-gray-800 hover:scale-105 transition transform shadow-md"
              >
                Sell All Offers
              </button>

              <button
                type="button"
                onClick={() => navigate("/")}
                className="border border-gray-400 px-6 py-2.5 rounded-md hover:bg-gray-200 hover:scale-105 transition transform"
              >
                New Instock
              </button>
            </div>
          </div>

          <div className="flex justify-center md:justify-end w-full md:w-1/2">
            <img
              src="/images/smartwatch.png"
              alt="Smartwatch Product"
              className="w-full max-w-sm md:max-w-md lg:max-w-lg object-contain animate-image"
            />
          </div>

        </div>
      </section>

      <FeaturesBar />
      <Categories />
      <ProductsSection />
    </>
  )
}

export default HomePage