import { useParams } from "react-router-dom";
import ProductCard from "../home components/product card";

import client from "../../utils/sanityClient";

import { useState, useEffect } from "react";

const ProductCatalog = () => {
  const { slug } = useParams();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const query =
      !slug || slug === "shop"
        ? `
          *[_type == "product"] | order(_createdAt desc){
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
        `
        : `
          *[
            _type == "product" &&
            category->slug.current == "${slug}"
          ] | order(_createdAt desc){
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
        console.log(data);
        setProducts(data);
      })
      .catch(console.error)
      .finally(() => {
        setLoading(false);
      });
  }, [slug]);

  const pageTitle =
    !slug || slug === "shop"
      ? "Browse Our Collection"
      : `${slug.charAt(0).toUpperCase() + slug.slice(1)} Collection`;

  const pageDescription =
    !slug || slug === "shop"
      ? "Explore premium menswear, womenswear and accessories curated to bring together timeless design, quality craftsmanship and modern fashion trends."
      : `Discover our curated selection of ${slug} designed with quality, comfort and modern fashion in mind.`;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1280px] mx-auto px-5">

        {/* Heading */}
        <div className="text-center mb-20">
          <p className="uppercase tracking-[0.35em] text-sm text-gray-400 mb-3">
            Fashion Collection
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            {pageTitle}
          </h2>

          <p className="text-gray-500 mt-5 max-w-[700px] mx-auto leading-relaxed">
            {pageDescription}
          </p>
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="text-center py-24">
            <h3 className="text-2xl font-semibold text-gray-700">
              Loading Products...
            </h3>
          </div>
        ) : (
          <>
            {/* Products */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {products.map((product) => (
                <ProductCard
                  key={product.slug.current}
                  product={product}
                />
              ))}
            </div>

            {/* Empty State */}
            {products.length === 0 && (
              <div className="text-center py-24">
                <h3 className="text-2xl font-semibold text-gray-700">
                  No products found
                </h3>

                <p className="text-gray-500 mt-3">
                  Check back later for new arrivals.
                </p>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default ProductCatalog;