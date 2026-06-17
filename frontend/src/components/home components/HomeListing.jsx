import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import client from "../../utils/sanityClient";
import ProductCard from "./product card";

const HomeListing = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const query = `
      *[
        _type == "product" &&
        featured == true
      ] | order(rating desc)[0...6]{
        _id,

        name,
        slug,

        featured,
        rating,

        price,
        oldPrice,

        "image": images[0].asset->url,

        "category": category->slug.current
      }
    `;

    client
      .fetch(query)
      .then((data) => {
        console.log("Featured Products:", data);
        setProducts(data);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1280px] mx-auto px-5">

        {/* Heading */}
        <div className="flex flex-col items-center text-center">
          <p className="uppercase tracking-[0.35em] text-sm text-gray-400 mb-3">
            Curated Collection
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Our Top Rated Products
          </h2>

          <p className="text-gray-500 mt-5 max-w-[650px] leading-relaxed">
            Discover premium fashion pieces carefully selected
            for quality, comfort, and timeless modern style.
          </p>
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="text-center py-20">
            <h3 className="text-xl font-semibold text-gray-700">
              Loading Products...
            </h3>
          </div>
        ) : (
          <>
            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">
              {products.map((product) => (
                <ProductCard
                  key={product.slug.current}
                  product={product}
                />
              ))}
            </div>

            {/* Empty State */}
            {products.length === 0 && (
              <div className="text-center py-20">
                <h3 className="text-2xl font-semibold text-gray-700">
                  No Featured Products Found
                </h3>

                <p className="text-gray-500 mt-3">
                  Add featured products in Sanity Studio.
                </p>
              </div>
            )}
          </>
        )}

        {/* Bottom CTA */}
        <div className="flex justify-center mt-20">
          <Link
            to="/products/shop"
            className="
              bg-black
              text-white
              px-10
              py-5
              rounded-2xl
              font-semibold
              tracking-wide
              hover:bg-gray-900
              transition-all
              duration-300
              shadow-xl
            "
          >
            Explore Full Collection
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeListing;