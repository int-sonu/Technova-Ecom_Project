import { MapPin, Phone, Mail } from "lucide-react"
import { useNavigate } from "react-router-dom"

const Contactus = () => {
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    alert("Message Sent Successfully!")

    navigate("/") 
  }

  return (
    <div className="bg-white">

      <section className="bg-gray-100 py-12 md:py-16 text-center px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Get In Touch
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto text-sm md:text-base">
          We'd love to hear from you. Whether you have a question about products,
          pricing, or anything else our team is ready to answer.
        </p>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-10">

          <div className="space-y-8">

            <div className="flex items-start gap-4">
              <MapPin className="text-pink-500" />
              <div>
                <h3 className="font-semibold text-lg">Visit Us</h3>
                <p className="text-gray-600 text-sm md:text-base">
                  123 Tech Street, Innovation City, India
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="text-pink-500" />
              <div>
                <h3 className="font-semibold text-lg">Call Us</h3>
                <p className="text-gray-600 text-sm md:text-base">
                  +91 98765 43210
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="text-pink-500" />
              <div>
                <h3 className="font-semibold text-lg">Email Us</h3>
                <p className="text-gray-600 text-sm md:text-base">
                  support@technova.com
                </p>
              </div>
            </div>

          </div>

          <div className="bg-gray-50 p-6 md:p-8 rounded-xl shadow-sm border border-gray-200">

            <h2 className="text-xl md:text-2xl font-semibold mb-6">
              Send Us a Message
            </h2>

            <form className="space-y-5" onSubmit={handleSubmit}>

              <input
                type="text"
                placeholder="Your Name"
                required
                className="w-full border border-gray-300 rounded-full px-5 py-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />

              <input
                type="email"
                placeholder="Your Email"
                required
                className="w-full border border-gray-300 rounded-full px-5 py-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />

              <textarea
                rows={4}
                placeholder="Your Message"
                required
                className="w-full border border-gray-300 rounded-lg px-5 py-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-pink-500 text-white py-3 rounded-full hover:bg-pink-600 transition"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>
      </section>

    </div>
  )
}

export default Contactus