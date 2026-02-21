import { Truck, RotateCcw, CreditCard, Gift } from "lucide-react"

const FeaturesBar = () => {
  return (
    <section className="bg-white border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-6 md:py-10">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          <div className="flex items-center sm:items-start gap-4">
            <Truck size={26} className="text-gray-700 shrink-0" />
            <div>
              <h4 className="font-semibold text-base">
                Free Shipping
              </h4>
              <p className="text-gray-500 text-sm">
                Available across India
              </p>
            </div>
          </div>

          <div className="flex items-center sm:items-start gap-4">
            <RotateCcw size={26} className="text-gray-700 shrink-0" />
            <div>
              <h4 className="font-semibold text-base">
                15 Days Returns
              </h4>
              <p className="text-gray-500 text-sm">
                Easy money-back guarantee
              </p>
            </div>
          </div>

          <div className="flex items-center sm:items-start gap-4">
            <CreditCard size={26} className="text-gray-700 shrink-0" />
            <div>
              <h4 className="font-semibold text-base">
                Secure Checkout
              </h4>
              <p className="text-gray-500 text-sm">
                100% safe online payments
              </p>
            </div>
          </div>

          <div className="flex items-center sm:items-start gap-4">
            <Gift size={26} className="text-gray-700 shrink-0" />
            <div>
              <h4 className="font-semibold text-base">
                Offers & Gifts
              </h4>
              <p className="text-gray-500 text-sm">
                Special festive deals
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default FeaturesBar