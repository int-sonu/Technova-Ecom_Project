import { CheckCircle } from "lucide-react"
import { useNavigate } from "react-router-dom"

const OrderSuccess = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gray-50">
      <div className="bg-white p-10 rounded-lg shadow-md border border-gray-200 text-center max-w-md">

        <CheckCircle size={60} className="text-green-500 mx-auto mb-6" />

        <h2 className="text-2xl font-semibold mb-4">
          Order Successful!
        </h2>

        <p className="text-gray-600 mb-6">
          Thank you for your purchase. Your order has been placed successfully.
        </p>

        <button
          onClick={() => navigate("/")}
          className="bg-pink-500 text-white px-6 py-3 rounded-md hover:bg-pink-600 transition"
        >
          Back to Home
        </button>

      </div>
    </div>
  )
}

export default OrderSuccess
