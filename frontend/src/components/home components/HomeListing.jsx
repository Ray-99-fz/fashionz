import { Link } from "react-router-dom";
import { products } from "../../data/products";
import ProductDetails from "../../pages/Details";
import ProductCard from "./product card";
import { useState } from "react";
const HomeListing = () => {
  // Get featured/top-rated products
  const featuredProducts = products
    .filter((product) => product.featured)
    .slice(0, 6);

  // VIEW PRODUCT DETAILS
  const [isviewed, setIsViewed] = useState(null);
  const handleViewDetails = (id)=>{
        setIsViewed(id);
        }
  // GET CLICKED PRODUCT
  const selectedProducts = products.filter((product)=> isviewed && product.id===isviewed)

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
            Discover premium fashion pieces carefully selected for quality,
            comfort, and timeless modern style.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">
          {featuredProducts.map((product)=>(
               <ProductCard 
                 key={product.id}
                 product={product}

               />
          ))}
        </div>
        {/*<ProductDetails isViewed={isviewed} id={1} onView={handleViewDetails}/>*/}

        {/* Bottom CTA */}
        <div className="flex justify-center mt-20">
          <Link to="/products/shop" className="bg-black text-white px-10 py-5 rounded-2xl font-semibold tracking-wide hover:bg-gray-900 transition-all duration-300 shadow-xl">
            Explore Full Collection
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeListing;