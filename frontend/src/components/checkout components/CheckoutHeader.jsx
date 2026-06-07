const CheckoutHeader = () => {
  return (
    <section className="w-full py-24 bg-[#f8f8f8] border-b border-black/5">
      <div className="max-w-[1200px] mx-auto px-5 text-center">

        <p className="uppercase tracking-[0.35em] text-sm text-gray-400 mb-4">
          Secure Checkout
        </p>

        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Complete Your Order
        </h1>

        <p className="max-w-2xl mx-auto text-gray-500 leading-relaxed">
          You're just one step away from receiving your selected items.
          Review your order details, provide delivery information,
          and proceed securely to payment.
        </p>

        {/* Progress Indicator */}
        <div className="flex items-center justify-center gap-3 mt-12">
          <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-semibold">
            1
          </div>

          <div className="w-16 h-[2px] bg-black"></div>

          <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-semibold">
            2
          </div>

          <div className="w-16 h-[2px] bg-gray-300"></div>

          <div className="w-10 h-10 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center font-semibold">
            3
          </div>
        </div>

        <div className="flex items-center justify-center gap-14 mt-4 text-sm">
          <span className="font-medium text-black">
            Order Review
          </span>

          <span className="font-medium text-black">
            Customer Details
          </span>

          <span className="text-gray-400">
            Payment
          </span>
        </div>

      </div>
    </section>
  );
};

export default CheckoutHeader;