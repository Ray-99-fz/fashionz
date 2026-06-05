const ProductsHero = () => {
  return (
    <section className="relative w-full h-[500px] md:h-[650px] overflow-hidden">
      {/* Mobile Hero */}
      <div className="md:hidden w-full h-full relative">
        <img
          src="https://i.pinimg.com/736x/85/8e/2d/858e2df951b896bb989ebe8371784fd7.jpg"
          alt="Fashion Collection"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Desktop Hero */}
      <div className="hidden md:grid md:grid-cols-2 h-full">
        {/* Left Image */}
        <div className="relative overflow-hidden">
          <img
            src="https://i.pinimg.com/736x/58/dd/e4/58dde4b0d84e336490014513aef16082.jpg"
            alt="Women's Collection"
            className="
              w-full
              h-full
              object-cover
              scale-105
              hover:scale-110
              duration-[4000ms]
            "
          />

          <div className="absolute inset-0 bg-black/25" />
        </div>

        {/* Right Image */}
        <div className="relative overflow-hidden">
          <img
            src="https://i.pinimg.com/1200x/c0/ba/3b/c0ba3b5278e8e51a6df8e2612bd4cc91.jpg"
            alt="Men's Collection"
            className="
              w-full
              h-full
              object-cover
              scale-105
              hover:scale-110
              duration-[4000ms]
            "
          />

          <div className="absolute inset-0 bg-black/25" />
        </div>
      </div>

      {/* Hero Content */}
      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <div className="text-center text-white px-5">
          <p className="uppercase tracking-[0.4em] text-sm mb-4 text-gray-200">
            Premium Collection
          </p>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Shop Fashion
          </h1>

          <p className="max-w-xl mx-auto text-gray-200 text-lg">
            Explore curated menswear, womenswear and accessories
            designed for modern style and everyday confidence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductsHero;