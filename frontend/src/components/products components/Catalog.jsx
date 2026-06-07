import { useParams } from "react-router-dom";
import { products } from "../../data/products";
import ProductCard from "../home components/product card";


import { useState } from "react";

const ProductCatalog = () => {
  const { slug } = useParams();

  const filteredProducts =
    !slug || slug === "shop"
      ? products
      : products.filter(
          (product) => product.category === slug
        );

  const pageTitle =
    !slug || slug === "shop"
      ? "Browse Our Collection"
      : `${slug.charAt(0).toUpperCase() + slug.slice(1)} Collection`;

  const pageDescription =
    !slug || slug === "shop"
      ? "Explore premium menswear, womenswear and accessories curated to bring together timeless design, quality craftsmanship and modern fashion trends."
      : `Discover our curated selection of ${slug} designed with quality, comfort and modern fashion in mind.`;
  
  
      // VIEW PRODUCT DETAILS
  const [isviewed, setIsViewed] = useState(null);
  const handleViewDetails = (id)=>{
        setIsViewed(id);
        }
  
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

        {/* Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product)=>(
               <ProductCard 
                 key={product.id}
                 product={product}
                 
               />
          ))}    

           {/*TEMPORARILY COMMENTED OUT HARDCODED CARD TO USE REUSABLE COMPONENT */}
          {/* filteredProducts.map((product) => (
            
            
            <div
              key={product.id}
              className=" group cursor-pointer"
            >
              {/* Image 
              <div className="relative overflow-hidden rounded-2xl bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="
                    w-full
                    h-[380px]
                    object-cover
                    transition-all
                    duration-700
                    group-hover:scale-105
                  "
                />

                <div
                  className="
                    absolute inset-0
                    bg-black/0
                    group-hover:bg-black/10
                    transition-all duration-500
                  "
                />

                <div
                  className="
                    absolute bottom-4 left-1/2
                    -translate-x-1/2
                    translate-y-12
                    opacity-0
                    group-hover:opacity-100
                    group-hover:translate-y-0
                    transition-all duration-500
                  "
                >
                  <button
                    className="
                      bg-white
                      text-black
                      px-5
                      py-3
                      rounded-xl
                      font-medium
                      shadow-lg
                    "
                  >
                    Quick View
                  </button>
                </div>
              </div>

              {/* Product Info 
              <div className="mt-4">
                <p className="uppercase tracking-widest text-xs text-gray-400">
                  {product.category}
                </p>

                <h3 className="text-lg font-semibold text-gray-900 mt-1">
                  {product.name}
                </h3>

                <div className="flex justify-between items-center mt-3">
                  <div>
                    <p className="text-lg font-bold text-gray-900">
                      MWK {(product.price * 3000).toLocaleString()}
                    </p>

                    <p className="text-sm text-gray-400 line-through">
                      MWK {(product.oldPrice * 3000).toLocaleString()}
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="text-yellow-500 text-sm">
                      ★★★★★
                    </p>

                    <p className="text-xs text-gray-400">
                      {product.reviews} reviews
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))} */}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-24">
            <h3 className="text-2xl font-semibold text-gray-700">
              No products found
            </h3>

            <p className="text-gray-500 mt-3">
              Check back later for new arrivals.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductCatalog;