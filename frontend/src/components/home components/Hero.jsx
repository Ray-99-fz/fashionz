import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const heroImages = [
    "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=1600&auto=format&fit=crop",
    "https://i.pinimg.com/1200x/cd/ba/a1/cdbaa16afa432b3173cbd7a4ca4f3fd2.jpg",
    "https://i.pinimg.com/736x/23/1f/8e/231f8eaa893fd8d70aef0a64543da644.jpg",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  // Auto switch images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) =>
        prev === heroImages.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full h-screen overflow-hidden relative">
      {/* Background Images */}
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${
            index === currentImage ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={image}
            alt="Fashion Hero"
            className="w-full h-full object-cover scale-105 animate-[slowZoom_10s_linear_infinite]"
          />
        </div>
      ))}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/45 z-10"></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent z-10"></div>

      {/* Content */}
      <div className="relative z-20 max-w-[1280px] mx-auto px-5 h-full flex items-center">
        <div className="max-w-[700px] text-white">
          <p className="uppercase tracking-[0.35em] text-sm mb-4 text-gray-200">
            Premium Fashion Experience
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Takulandirani <br />
            Akasi!
          </h1>

          <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-8 max-w-[600px]">
            Discover timeless fashion pieces crafted for confidence,
            elegance, and modern lifestyle expression.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <Link to="/products/shop" className="bg-white text-black px-8 py-4 rounded-xl font-semibold hover:bg-gray-200 transition-all duration-300">
              Shop Collection
            </Link>

            <Link className="border border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-black transition-all duration-300">
              Explore Trends
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/50 to-transparent z-10"></div>

      {/* Custom Animation */}
      <style>
        {`
          @keyframes slowZoom {
            0% {
              transform: scale(1);
            }
            100% {
              transform: scale(1.08);
            }
          }
        `}
      </style>
    </section>
  );
};

export default Hero;