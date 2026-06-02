import { products } from "../../data/products";

const HomeListing = () => {
  // Get featured/top-rated products
  const featuredProducts = products
    .filter((product) => product.featured)
    .slice(0, 6);

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
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="group cursor-pointer"
            >
              {/* Product Image */}
              <div className="relative overflow-hidden rounded-3xl bg-gray-100">
                {/* Product Badge */}
                <div className="absolute top-5 left-5 z-20">
                  <span className="bg-white text-black text-xs font-semibold px-4 py-2 rounded-full shadow-md">
                    Featured
                  </span>
                </div>

                {/* Product Image */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-[450px] object-cover group-hover:scale-105 transition-all duration-700"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500"></div>

                {/* Quick View Button */}
                <div className="absolute bottom-5 left-1/2 -translate-x-1/2 translate-y-20 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <button className="bg-white text-black px-6 py-3 rounded-xl font-medium shadow-xl hover:bg-black hover:text-white transition-all duration-300">
                    Quick View
                  </button>
                </div>
              </div>

              {/* Product Details */}
              <div className="mt-5 flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-widest text-gray-400 mb-1">
                    {product.category}
                  </p>

                  <h3 className="text-lg font-semibold text-gray-900">
                    {product.name}
                  </h3>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-yellow-500 text-sm">
                      ★★★★★
                    </span>

                    <span className="text-sm text-gray-500">
                      ({product.reviews} reviews)
                    </span>
                  </div>
                </div>

                {/* Price */}
                <div className="text-right">
                  <p className="text-xl font-bold text-gray-900">
                    MWK {(product.price * 3000).toLocaleString()}
                  </p>

                  <p className="text-sm text-gray-400 line-through">
                    MWK {(product.oldPrice * 3000).toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="flex justify-center mt-20">
          <button className="bg-black text-white px-10 py-5 rounded-2xl font-semibold tracking-wide hover:bg-gray-900 transition-all duration-300 shadow-xl">
            Explore Full Collection
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeListing;