import { useState, useEffect } from "react";
import { FiStar } from "react-icons/fi";
import { IoMdStar, IoMdWarning } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";
import { useOrder } from "../../utils/OrderContext";
import client from "../../utils/sanityClient";

const ProductDetails = () => {
  const { slug } = useParams();

  const navigate = useNavigate();
  const { setOrder } = useOrder();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const [selectedImage, setSelectedImage] = useState("");
  const [selectedColor, setSelectedColor] = useState(null);

  const [item, setItem] = useState({
    size: "",
    quantity: 1,
  });

  useEffect(() => {
    client
      .fetch(
        `
        *[
          _type == "product" &&
          slug.current == $slug
        ][0]{
          _id,
          name,
          slug,

          brand,
          description,

          price,
          oldPrice,

          rating,
          stock,
          featured,

          sizes,

          colors[]{
            name,
            hex
          },

          "category": category->{
            name,
            "slug": slug.current
          },

          "images": images[]{
            "url": asset->url
          }
        }
      `,
        { slug }
      )
      .then((data) => {
        console.log(data)
        setProduct(data);

        if (data?.images?.length) {
          setSelectedImage(data.images[0].url);
        }
      })
      .catch(console.error)
      .finally(() => {
        setLoading(false);
      });
  }, [slug]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setItem((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleBuyNow = () => {
    if (!selectedColor) {
      alert("Please select a color");
      return;
    }

    if (
      product.sizes?.length > 0 &&
      !item.size
    ) {
      alert("Please select a size");
      return;
    }

    const unitPrice = product.price * 3000;
    const totalPrice =
      unitPrice * Number(item.quantity);

    setOrder({
      id: product._id,

      name: product.name,
      brand: product.brand,

      category:
        product.category?.slug ||
        product.category?.name,

      image: selectedImage,

      color: selectedColor.name,

      size:
        product.sizes?.length > 0
          ? item.size
          : "N/A",

      quantity: Number(item.quantity),

      unitPrice,
      totalPrice,
    });

    navigate("/checkout");
  };

  if (loading) {
    return (
      <div className="text-center py-24">
        Loading Product...
      </div>
    );
  }

  if (!product) {
    return (
      <div className="text-center py-24">
        Product Not Found
      </div>
    );
  }

  const discountPercentage =
    product.oldPrice
      ? (
          ((product.oldPrice - product.price) /
            product.oldPrice) *
          100
        ).toFixed(0)
      : 0;

  const fullStars = Math.floor(
    product.rating || 0
  );

  return (
    <section className="w-full bg-white px-5 md:px-12 py-12 mb-20">
      <article className="max-w-[1400px] mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">

          {/* Images */}
          <div className="md:col-span-2 space-y-4">

            <div className="relative overflow-hidden rounded-xl bg-gray-100">
              <img
                src={selectedImage}
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
              {product.images?.map(
                (image, index) => (
                  <img
                    key={index}
                    src={image.url}
                    alt={product.name}
                    onClick={() =>
                      setSelectedImage(image.url)
                    }
                    className="
                      aspect-square
                      object-cover
                      rounded-lg
                      border
                      cursor-pointer
                    "
                  />
                )
              )}
            </div>
          </div>

          {/* Details */}
          <div className="md:col-span-3">

            <p className="uppercase tracking-widest text-sm text-gray-500 mb-3">
              {product.brand} •{" "}
              {product.category?.name}
            </p>

            <h1 className="text-4xl font-semibold">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-4 mt-5">

              <div className="flex items-center gap-1 text-orange-400">
                {[...Array(5)].map((_, index) =>
                  index < fullStars ? (
                    <IoMdStar
                      key={index}
                      size={22}
                    />
                  ) : (
                    <FiStar
                      key={index}
                      size={20}
                    />
                  )
                )}
              </div>

              <span className="text-gray-500">
                {product.rating}/5
              </span>
            </div>

            {/* Price */}
            <div className="flex flex-wrap items-center gap-5 mt-8">

              <p className="text-3xl font-bold">
                MWK{" "}
                {(
                  product.price * 3000
                ).toLocaleString()}
              </p>

              {product.oldPrice && (
                <>
                  <p className="text-xl text-gray-400 line-through">
                    MWK{" "}
                    {(
                      product.oldPrice * 3000
                    ).toLocaleString()}
                  </p>

                  <span className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold">
                    {discountPercentage}% OFF
                  </span>
                </>
              )}
            </div>

            <p className="mt-8 text-gray-600 leading-relaxed text-lg">
              {product.description}
            </p>

            {/* Colors */}
            <div className="mt-10 border rounded-xl p-5">

              <h3 className="font-semibold mb-4">
                Select Color
              </h3>

              <div className="flex gap-3">
                {product.colors?.map(
                  (color, index) => (
                    <button
                      key={index}
                      onClick={() =>
                        setSelectedColor(color)
                      }
                      title={color.name}
                      style={{
                        backgroundColor:
                          color.hex,
                      }}
                      className={`
                        size-10
                        rounded-full
                        border-2
                        ${
                          selectedColor?.name ===
                          color.name
                            ? "border-black scale-110"
                            : "border-gray-300"
                        }
                      `}
                    />
                  )
                )}
              </div>
            </div>

            {/* Sizes */}
            {product.sizes?.length > 0 && (
              <div className="mt-6 border rounded-xl p-5">

                <h3 className="font-semibold mb-4">
                  Select Size
                </h3>

                <select
                  name="size"
                  value={item.size}
                  onChange={handleInputChange}
                  className="w-full border rounded-lg px-4 py-3"
                >
                  <option value="">
                    Select Size
                  </option>

                  {product.sizes.map(
                    (size) => (
                      <option
                        key={size}
                        value={size}
                      >
                        {size}
                      </option>
                    )
                  )}
                </select>
              </div>
            )}

            {/* Quantity */}
            <div className="mt-6 border rounded-xl p-5">

              <div className="flex justify-between">

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
                    className="mt-3 w-24 border rounded-lg px-4 py-2"
                  />
                </div>

                <div className="flex flex-col items-center gap-1 bg-red-50 border border-red-200 px-5 py-3 rounded-xl">
                  <IoMdWarning
                    className="text-red-500"
                    size={24}
                  />

                  <strong>
                    {product.stock}
                  </strong>

                  <span className="text-sm">
                    Remaining
                  </span>
                </div>
              </div>
            </div>

            <button
              onClick={handleBuyNow}
              className="w-full mt-8 bg-black text-white py-5 rounded-xl font-semibold"
            >
              Buy Now
            </button>

          </div>
        </div>
      </article>
    </section>
  );
};

export default ProductDetails;