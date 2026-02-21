import { useNavigate } from "react-router-dom"

const Checkout = () => {
  const navigate = useNavigate()

  const formatPrice = (amount: number) => {
    return amount.toLocaleString("en-IN")
  }

  const subtotal = 9999
  const shipping = 100
  const tax = 50
  const total = subtotal + shipping + tax

  return (
    <div className="py-10 md:py-14 bg-gray-50 min-h-[80vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">

        <div className="md:col-span-2 bg-white p-5 sm:p-6 md:p-8 rounded-lg shadow-sm border border-gray-200">

          <h2 className="text-xl sm:text-2xl font-semibold mb-6">
            Billing Details
          </h2>

          <form className="space-y-5">

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="First Name"
                className="border rounded-md px-4 py-3 focus:ring-2 focus:ring-pink-400 outline-none w-full"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="border rounded-md px-4 py-3 focus:ring-2 focus:ring-pink-400 outline-none w-full"
              />
            </div>

            <input
              type="text"
              placeholder="Address"
              className="w-full border rounded-md px-4 py-3 focus:ring-2 focus:ring-pink-400 outline-none"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="City"
                className="border rounded-md px-4 py-3 focus:ring-2 focus:ring-pink-400 outline-none w-full"
              />
              <input
                type="text"
                placeholder="Postal Code"
                className="border rounded-md px-4 py-3 focus:ring-2 focus:ring-pink-400 outline-none w-full"
              />
            </div>

            <input
              type="email"
              placeholder="Email Address"
              className="w-full border rounded-md px-4 py-3 focus:ring-2 focus:ring-pink-400 outline-none"
            />

            <input
              type="text"
              placeholder="Phone Number"
              className="w-full border rounded-md px-4 py-3 focus:ring-2 focus:ring-pink-400 outline-none"
            />

          </form>

        </div>

        <div className="bg-white p-5 sm:p-6 md:p-8 rounded-lg shadow-sm border border-gray-200 h-fit">

          <h3 className="text-lg sm:text-xl font-semibold mb-6">
            Order Summary
          </h3>

          <div className="flex justify-between mb-4">
            <span>Smart Watch</span>
            <span>{formatPrice(subtotal)} INR</span>
          </div>

          <div className="flex justify-between mb-4">
            <span>Shipping</span>
            <span>{formatPrice(shipping)} INR</span>
          </div>

          <div className="flex justify-between mb-4">
            <span>Tax</span>
            <span>{formatPrice(tax)} INR</span>
          </div>

          <div className="border-t pt-4 flex justify-between font-semibold text-base sm:text-lg">
            <span>Total</span>
            <span>{formatPrice(total)} INR</span>
          </div>

          <button
            onClick={() => navigate("/order-success")}
            className="mt-8 w-full bg-pink-500 text-white py-3 rounded-md hover:bg-pink-600 transition"
          >
            Place Order
          </button>

        </div>

      </div>
    </div>
  )
}

export default Checkout