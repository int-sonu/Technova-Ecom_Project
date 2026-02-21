const About = () => {
  return (
    <div className="bg-white">

      <section className="bg-gray-100 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            TechNova
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            We bring the latest and most innovative technology products 
            to your doorstep with quality and trust.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">

          <div className="text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-6">
              Who We Are
            </h2>

            <p className="text-gray-600 mb-4 text-sm sm:text-base">
              TechNova is a modern ecommerce platform specializing in 
              smart gadgets, watches, and innovative electronics.
            </p>

            <p className="text-gray-600 mb-4 text-sm sm:text-base">
              Our mission is to deliver high-quality products at 
              competitive prices with exceptional customer service.
            </p>

            <p className="text-gray-600 text-sm sm:text-base">
              We believe technology should be accessible, stylish, 
              and affordable for everyone.
            </p>
          </div>

          <div className="flex justify-center">
            <img
              src="/images/About.jpg"
              alt="About TechNova"
              className="w-full max-w-sm sm:max-w-md rounded-lg shadow-md"
            />
          </div>

        </div>
      </section>

      <section className="bg-gray-50 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">

          <div className="p-6 bg-white rounded-lg shadow-sm">
            <h3 className="text-lg sm:text-xl font-semibold mb-3">
              Quality Products
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Carefully selected gadgets with premium build quality.
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-sm">
            <h3 className="text-lg sm:text-xl font-semibold mb-3">
              Fast Delivery
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Reliable and quick shipping across the country.
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-sm">
            <h3 className="text-lg sm:text-xl font-semibold mb-3">
              Customer Support
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Dedicated support team ready to help you anytime.
            </p>
          </div>

        </div>
      </section>

    </div>
  )
}

export default About