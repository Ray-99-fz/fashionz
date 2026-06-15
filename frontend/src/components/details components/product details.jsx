import { useState } from "react";
import { FiStar } from "react-icons/fi";
import { IoMdStar, IoMdWarning } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useOrder } from "../../utils/OrderContext";

const ProductDetails = ({ product }) => {
  const navigate = useNavigate();
  const { setOrder } = useOrder();

  const [selectedColor, setSelectedColor] = useState(null);

  const [item, setItem] = useState({
    size: "",
    quantity: 1,
  });

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setItem((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleBuyNow = () => {
    // Validation
    if (!selectedColor) {
      alert("Please select a color.");
      return;
    }

    if (product.sizes && !item.size) {
      alert("Please select a size.");
      return;
    }

    if (!item.quantity || Number(item.quantity) < 1) {
      alert("Please enter a valid quantity.");
      return;
    }

    const unitPrice = product.price * 3000;
    const totalPrice =
      unitPrice * Number(item.quantity);

    setOrder({
      id: product.id,
      name: product.name,
      image: product.image,
      brand: product.brand,
      category: product.category,

      color: selectedColor.name,

      size: product.sizes
        ? item.size
        : "N/A",

      quantity: Number(item.quantity),

      unitPrice,
      totalPrice,
    });

    navigate("/checkout");
  };

  const discountPercentage = (
    (((product.oldPrice * 3000) -
      product.price * 3000) /
      (product.oldPrice * 3000)) *
    100
  ).toFixed(0);

  return (
    <section className="w-full bg-white px-5 md:px-12 py-12 mb-20">
      <article className="max-w-[1400px] mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">

          {/* PRODUCT IMAGES */}
          <div className="md:col-span-2 space-y-4">

            <div className="relative overflow-hidden rounded-xl bg-gray-100">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />

              {product.featured && (
                <span className="absolute top-4 left-4 bg-white px-4 py-2 rounded-full text-sm font-medium shadow">
                  Featured
                </span>
              )}
            </div>

            <div className="grid grid-cols-4 gap-3">
              {[1, 2, 3, 4].map((item) => (
                <img
                  key={item}
                  src={product.image}
                  alt={product.name}
                  className="aspect-square object-cover rounded-lg border"
                />
              ))}
            </div>
          </div>

          {/* PRODUCT DETAILS */}
          <div className="md:col-span-3">

            {/* Brand */}
            <p className="uppercase tracking-widest text-sm text-gray-500 mb-3">
              {product.brand} • {product.category}
            </p>

            {/* Product Name */}
            <h1 className="text-4xl font-semibold text-gray-900">
              {product.name}
            </h1>

            {/* Ratings */}
            <div className="flex items-center gap-4 mt-5">
              <div className="flex items-center gap-1 text-orange-400">
                <IoMdStar size={22} />
                <IoMdStar size={22} />
                <IoMdStar size={22} />
                <IoMdStar size={22} />
                <FiStar size={20} />
              </div>

              <span className="text-gray-500">
                {product.rating} Reviews
              </span>
            </div>

            {/* Price */}
            <div className="flex flex-wrap items-center gap-5 mt-8">

              <p className="text-3xl font-bold">
                MWK {(product.price * 3000).toLocaleString()}
              </p>

              <p className="text-xl text-gray-400 line-through">
                MWK {(product.oldPrice * 3000).toLocaleString()}
              </p>

              <span className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold">
                {discountPercentage}% OFF
              </span>
            </div>

            {/* Description */}
            <p className="mt-8 text-gray-600 leading-relaxed text-lg">
              {product.description}
            </p>

            {/* Color Selection */}
            <div className="mt-10 border rounded-xl p-5">

              <div className="flex items-center gap-3 mb-4">
                <h3 className="font-semibold">
                  Select Color
                </h3>

                {selectedColor && (
                  <span className="text-gray-500">
                    {selectedColor.name}
                  </span>
                )}
              </div>

              <div className="flex gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color.id}
                    type="button"
                    onClick={() =>
                      handleColorSelect(color)
                    }
                    className={`
                      size-10
                      rounded-full
                      border-2
                      transition-all
                      duration-300
                      ${color.bgColor}
                      ${
                        selectedColor?.id === color.id
                          ? "border-black scale-110"
                          : "border-transparent"
                      }
                    `}
                  />
                ))}
              </div>
            </div>

            {/* Size Selection */}
            {product.sizes && (
              <div className="mt-6 border rounded-xl p-5">

                <h3 className="font-semibold mb-4">
                  Select Size
                </h3>

                <select
                  name="size"
                  value={item.size}
                  onChange={handleInputChange}
                  className="
                    w-full
                    border
                    rounded-lg
                    px-4
                    py-3
                    outline-none
                    focus:border-black
                  "
                >
                  <option value="">
                    Select Size
                  </option>

                  {product.sizes.map((size) => (
                    <option
                      key={size}
                      value={size}
                    >
                      {size}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* Quantity */}
            <div className="mt-6 border rounded-xl p-5">

              <div className="flex items-center justify-between">

                <div>
                  <h3 className="font-semibold">
                    Quantity
                  </h3>

                  <input
                    type="number"
                    min="1"
                    max={product.stock}
                    name="quantity"
                    value={item.quantity}
                    onChange={handleInputChange}
                    className="
                      mt-3
                      w-24
                      border
                      rounded-lg
                      px-4
                      py-2
                      outline-none
                    "
                  />
                </div>

                <div className="
                  flex
                  flex-col
                  items-center
                  gap-1
                  bg-red-50
                  border
                  border-red-200
                  px-5
                  py-3
                  rounded-xl
                ">
                  <IoMdWarning
                    className="text-red-500"
                    size={24}
                  />

                  <span className="text-sm">
                    Only
                  </span>

                  <strong>
                    {product.stock}
                  </strong>

                  <span className="text-sm">
                    Remaining
                  </span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8">

              <button
                onClick={handleBuyNow}
                className="
                  w-full
                  bg-black
                  text-white
                  py-5
                  rounded-xl
                  font-semibold
                  text-lg
                  hover:bg-gray-900
                  transition-all
                  duration-300
                "
              >
                Buy Now
              </button>

            </div>

          </div>
        </div>
      </article>
    </section>
  );
};

export default ProductDetails;