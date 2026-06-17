import { useState, useEffect } from "react";
import client from "../../utils/sanityClient";
import ProductCard from "../home components/product card";

const TrendingProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    client
      .fetch(`
        *[_type == "product"]{
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
      `)
      .then((data) => {
        // Shuffle products
        const shuffled = [...data].sort(
          () => Math.random() - 0.5
        );

        // Grab 5 random products
        setProducts(shuffled.slice(0, 5));
      })
      .catch(console.error)
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section className="w-full py-20">
        <div className="text-center">
          <h3 className="text-xl font-semibold">
            Loading Products...
          </h3>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full py-20">

      {/* HEADING */}
      <div className="text-center mb-20">

        <p className="uppercase tracking-[0.35em] text-sm text-gray-400 mb-3">
          Top Rated Products
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          Browse Trending Products From Our Stock
        </h2>

      </div>

      {/* PRODUCTS */}
      <div
        className="
          max-w-[1280px]
          mx-auto
          px-5
          grid
          gap-6
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          xl:grid-cols-4
        "
      >
        {products.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
          />
        ))}
      </div>

      {!loading && products.length === 0 && (
        <div className="text-center py-20">
          <h3 className="text-2xl font-semibold text-gray-700">
            No Products Found
          </h3>

          <p className="text-gray-500 mt-3">
            Please add products in Sanity.
          </p>
        </div>
      )}

    </section>
  );
};

export default TrendingProducts;