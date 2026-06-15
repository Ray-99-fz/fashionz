import { Navigate } from "react-router-dom";
import { useOrder } from "../utils/OrderContext";

const Receipt = () => {
  const { order } = useOrder();

  if (!order) {
    return <Navigate to="/" />;
  }

  const receiptDate = new Date().toLocaleDateString(
    "en-GB",
    {
      day: "numeric",
      month: "long",
      year: "numeric",
    }
  );

  console.log("Order Data for Receipt:", order);

  const unitPrice = Number(order.unitPrice || 0);
  const quantity = Number(order.quantity || 0);
  const total = Number(order.totalPrice || 0);

  const courierNames = {
    cts: "CTS Courier",
    "post-express": "Post Express Courier",
    speed: "Speed Courier",
  };

  return (
    <section className="max-w-5xl mx-auto bg-white p-8 md:p-10 rounded-2xl shadow-md my-20">

      {/* Header */}
      <div className="border-b pb-6 mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          Order Receipt
        </h1>

        <p className="text-gray-500 mt-2">
          Thank you for shopping with us. Your order has been successfully recorded.
        </p>
      </div>

      {/* Order & Customer Info */}
      <div className="grid md:grid-cols-2 gap-10 mb-10">

        {/* Order Details */}
        <div>
          <h2 className="font-semibold text-xl mb-4">
            Order Details
          </h2>

          <div className="space-y-3 text-gray-700">
            <p>
              <span className="font-medium">
                Order ID:
              </span>{" "}
              ORD-{order.orderId || "PENDING"}
            </p>

            <p>
              <span className="font-medium">
                Date:
              </span>{" "}
              {receiptDate}
            </p>

            <p>
              <span className="font-medium">
                Courier:
              </span>{" "}
              {courierNames[order.customer?.courier] ||
                "Not Selected"}
            </p>

            <p>
              <span className="font-medium">
                Payment Status:
              </span>{" "}
              <span className="font-semibold text-yellow-600">
                Paid
              </span>
            </p>
          </div>
        </div>

        {/* Customer Information */}
        <div>
          <h2 className="font-semibold text-xl mb-4">
            Customer Information
          </h2>

          <div className="space-y-3 text-gray-700">
            <p>
              <span className="font-medium">
                Name:
              </span>{" "}
              {order.customer?.name}
            </p>

            <p>
              <span className="font-medium">
                Phone:
              </span>{" "}
              {order.customer?.phone}
            </p>

            <p>
              <span className="font-medium">
                Email:
              </span>{" "}
              {order.customer?.email ||
                "Not Provided"}
            </p>

            <p>
              <span className="font-medium">
                Location:
              </span>{" "}
              {order.customer?.location}
            </p>
          </div>
        </div>
      </div>

      {/* Product Information */}
      <div className="mb-10">
        <h2 className="font-semibold text-xl mb-4">
          Product Summary
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-gray-100">
                <th className="text-left p-4">
                  Product
                </th>

                <th className="text-left p-4">
                  Brand
                </th>

                <th className="text-left p-4">
                  Category
                </th>

                <th className="text-left p-4">
                  Color
                </th>

                <th className="text-left p-4">
                  Size
                </th>

                <th className="text-left p-4">
                  Qty
                </th>

                <th className="text-left p-4">
                  Unit Price
                </th>

                <th className="text-left p-4">
                  Total
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="p-4 border-t">
                  {order.name}
                </td>

                <td className="p-4 border-t">
                  {order.brand}
                </td>

                <td className="p-4 border-t capitalize">
                  {order.category}
                </td>

                <td className="p-4 border-t">
                  {order.color}
                </td>

                <td className="p-4 border-t">
                  {order.size || "N/A"}
                </td>

                <td className="p-4 border-t">
                  {quantity}
                </td>

                <td className="p-4 border-t">
                  MWK {unitPrice.toLocaleString()}
                </td>

                <td className="p-4 border-t font-semibold">
                  MWK {total.toLocaleString()}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Totals */}
      <div className="border-t pt-8">
        <div className="max-w-md ml-auto space-y-4">

          <div className="flex justify-between">
            <span className="text-gray-600">
              Subtotal
            </span>

            <span className="font-medium">
              MWK {total.toLocaleString()}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-600">
              Delivery Fee
            </span>

            <span className="text-gray-500">
              Pending Courier Quote
            </span>
          </div>

          <div className="flex justify-between border-t pt-4 text-xl font-bold">
            <span>Total</span>

            <span>
              MWK {total.toLocaleString()}
            </span>
          </div>
        </div>
      </div>

      {/* Notice */}
      <div className="mt-10 p-5 bg-gray-50 rounded-xl border border-gray-200">
        <p className="text-sm text-gray-600 leading-relaxed">
          Your order has been received and successfully recorded.
          A representative will contact you shortly regarding
          payment confirmation, courier arrangements, and delivery.
        </p>
      </div>

      {/* Actions */}
      <div className="mt-10 flex flex-col sm:flex-row gap-4">
        <button
          onClick={() => window.print()}
          className="px-6 py-4 bg-black text-white rounded-xl font-medium hover:bg-gray-900 transition-all"
        >
          Print Receipt
        </button>

        <button
          onClick={() => (window.location.href = "/")}
          className="px-6 py-4 border border-gray-300 rounded-xl font-medium hover:bg-gray-50 transition-all"
        >
          Continue Shopping
        </button>
      </div>
    </section>
  );
};

export default Receipt;