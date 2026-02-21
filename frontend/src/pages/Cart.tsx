import { useNavigate } from "react-router-dom"

const Cart = () => {
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

        <div className="md:col-span-2 bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200">

          <h2 className="text-xl sm:text-2xl font-semibold mb-6">
            Shopping Cart
          </h2>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b pb-6 mb-6 gap-4">

            <div className="flex items-center gap-4 sm:gap-6">

              <div className="w-20 h-20 sm:w-24 sm:h-24 border rounded-md flex items-center justify-center">
                <img
                  src="/images/watch1.png"
                  alt="Smart Watch"
                  className="h-16 sm:h-20 object-contain"
                />
              </div>

              <div>
                <h3 className="font-medium text-base sm:text-lg">
                  Smart Watch
                </h3>

                <p className="text-gray-500 text-sm">
                  Qty: 1
                </p>

                <button className="text-red-500 text-sm mt-2 hover:underline">
                  Remove
                </button>
              </div>

            </div>

            <p className="font-semibold text-pink-500 text-base sm:text-lg">
              {formatPrice(subtotal)} INR
            </p>

          </div>

        </div>

        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200 h-fit">

          <h3 className="text-lg sm:text-xl font-semibold mb-6">
            Order Summary
          </h3>

          <div className="space-y-4 text-sm sm:text-base">

            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>{formatPrice(subtotal)} INR</span>
            </div>

            <div className="flex justify-between">
              <span>Shipping</span>
              <span>{formatPrice(shipping)} INR</span>
            </div>

            <div className="flex justify-between">
              <span>Tax</span>
              <span>{formatPrice(tax)} INR</span>
            </div>

            <div className="border-t pt-4 flex justify-between font-semibold text-base sm:text-lg">
              <span>Total</span>
              <span>{formatPrice(total)} INR</span>
            </div>

          </div>

          <button
            onClick={() => navigate("/checkout")}
            className="mt-6 w-full bg-pink-500 text-white py-3 rounded-md hover:bg-pink-600 transition"
          >
            Proceed to Checkout
          </button>

        </div>

      </div>
    </div>
  )
}

export default Cart