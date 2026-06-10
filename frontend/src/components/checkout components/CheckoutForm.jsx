import { useState } from "react";
import { useOrder } from "../../utils/OrderContext";
import { Navigate, useNavigate } from "react-router-dom";

const CheckoutForm = () => {
  const { order, setOrder } = useOrder()

  console.log(order)

  if (!order) {
    return <Navigate to='/' />
  }
  
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    courier: "",
  });

  console.log(formData)

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setOrder({
      ...order,
      customer: formData
    })

    console.log({
      ...order,
      customer: formData,
    });

    navigate('/receipt')
  };

  return (
    <section className="w-full py-20 bg-gray-50">
      <div className="max-w-[900px] mx-auto px-5">

        {/* Page Heading */}
        <div className="text-center mb-12">
          <p className="uppercase tracking-[0.3em] text-sm text-gray-400 mb-3">
            Secure Checkout
          </p>

          <h1 className="text-4xl font-bold text-gray-900">
            Complete Your Order
          </h1>

          <p className="text-gray-500 mt-4">
            Confirm your order details and provide delivery information.
          </p>
        </div>

        {/* Order Summary */}
        <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">
            Order Summary
          </h2>

          <div className="grid grid-cols-2 gap-y-4">
            <p className="text-gray-500">Product</p>
            <p className="font-medium"> {order.name} </p>

            <p className="text-gray-500">Color</p>
            <p className="font-medium"> {order.color} </p>

            <p className="text-gray-500">Size</p>
            <p className="font-medium"> {order.size} </p>

            <p className="text-gray-500">Quantity</p>
            <p className="font-medium"> {order.quantity} </p>

            <p className="text-gray-500">Total</p>
            <p className="font-bold text-lg">
              MWK {order.price}
            </p>
          </div>
        </div>

        {/* Customer Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm"
        >
          <h2 className="text-xl font-semibold text-gray-900 mb-6">
            Delivery Information
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            {/* Name */}
            <div className="flex flex-col gap-2">
              <label className="font-medium text-gray-700">
                Full Name *
              </label>

              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="John Banda"
                className="border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-black"
              />
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-2">
              <label className="font-medium text-gray-700">
                Phone Number *
              </label>

              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="+265..."
                className="border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-black"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="font-medium text-gray-700">
                Email Address (Optional)
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-black"
              />
            </div>

            {/* Location */}
            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="font-medium text-gray-700">
                Delivery Location *
              </label>

              <input
                type="text"
                name="location"
                required
                value={formData.location}
                onChange={handleChange}
                placeholder="Area 49, Lilongwe"
                className="border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-black"
              />
            </div>

            {/* Courier */}
            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="font-medium text-gray-700">
                Courier Service *
              </label>

              <select
                name="courier"
                required
                value={formData.courier}
                onChange={handleChange}
                className="border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-black"
              >
                <option value="">
                  Select Courier Service
                </option>

                <option value="cts">
                  CTS Courier
                </option>

                <option value="post-express">
                  Post Express Courier
                </option>

                <option value="speed">
                  Speed Courier
                </option>
              </select>
            </div>
          </div>

          {/* CTA */}
          <button
            type="submit"
            className="
              w-full
              mt-8
              bg-black
              text-white
              py-4
              rounded-xl
              font-semibold
              tracking-wide
              hover:bg-gray-900
              transition-all
            "
          >
            Proceed to Payment
          </button>
        </form>
      </div>
    </section>
  );
};

export default CheckoutForm;