import { useOrder } from "../utils/OrderContext";



const Receipt = () => {

    const {order} = useOrder()

    const receiptDate = new Date().toLocaleDateString(
        "en-GB",
        {
            day: "numeric",
            month: "long",
            year: "numeric",
        }
    );

  return (
    <section className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-md">
      {/* Header */}
      <div className="border-b pb-6 mb-6">
        <h1 className="text-3xl font-bold">Order Receipt</h1>
        <p className="text-gray-500">Thank you for your order.</p>
      </div>

      {/* Order Information */}
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div>
          <h2 className="font-semibold text-lg mb-3">
            Order Details
          </h2>

          <div className="space-y-2">
            <p>
              <span className="font-medium">Order ID:</span>{" "}
              ORD-2025-001
            </p>

            <p>
              <span className="font-medium">Date:</span>{" "}
              {receiptDate}
            </p>

            <p>
              <span className="font-medium">Courier:</span>{" "}
              {order.customer.courier}
            </p>
          </div>
        </div>

        <div>
          <h2 className="font-semibold text-lg mb-3">
            Customer Information
          </h2>

          <div className="space-y-2">
            <p>
              <span className="font-medium">Name:</span>{" "}
              {order.customer.name}
            </p>

            <p>
              <span className="font-medium">Phone:</span>{" "}
              {order.customer.phone}
            </p>

            <p>
              <span className="font-medium">Email:</span>{" "}
              {order.customer.email}
            </p>

            <p>
              <span className="font-medium">Location:</span>{" "}
              {order.customer.location}
            </p>
          </div>
        </div>
      </div>

      {/* Product Table */}
      <div className="mb-8">
        <h2 className="font-semibold text-lg mb-4">
          Product Summary
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full border">
            <thead>
              <tr className="bg-gray-100">
                <th className="text-left p-3">Product</th>
                <th className="text-left p-3">Color</th>
                <th className="text-left p-3">Size</th>
                <th className="text-left p-3">Qty</th>
                <th className="text-left p-3">Unit Price</th>
                <th className="text-left p-3">Total</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="p-3 border-t">
                  {order.name}
                </td>

                <td className="p-3 border-t">
                  {order.color}
                </td>

                <td className="p-3 border-t">
                  {order.size}
                </td>

                <td className="p-3 border-t">
                  {order.quantity}
                </td>

                <td className="p-3 border-t">
                  MWK {order.price}
                </td>

                <td className="p-3 border-t font-semibold">
                  MWK {order.price}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Totals */}
      <div className="border-t pt-6">
        <div className="max-w-sm ml-auto space-y-3">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>MWK {order.price} </span>
          </div>

          <div className="flex justify-between">
            <span>Delivery Fee</span>
            <span>TBD</span>
          </div>

          <div className="flex justify-between text-xl font-bold border-t pt-3">
            <span>Total</span>
            <span>MWK {order.price}</span>
          </div>
        </div>
      </div>

      {/* Notice */}
      <div className="mt-8 p-4 bg-gray-50 rounded-lg">
        <p className="text-sm text-gray-600">
          Your order has been received and is awaiting
          confirmation. A representative will contact you
          shortly regarding payment and delivery.
        </p>
      </div>
    </section>
  );
};

export default Receipt;