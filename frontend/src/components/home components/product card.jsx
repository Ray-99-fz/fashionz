import { Link } from "react-router-dom";
import {useNavigate} from "react-router-dom";

const ProductCard = ({product})=>{
        const navigate =useNavigate();
        const handNavigation = ()=>{
             navigate(`/details/${product.id}`) 
            }
         return(
           
            <div
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
                <div className="absolute bottom-5 left-1/2 -translate-x-1/2 md:translate-y-20 md:opacity-0 md:group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <button  onClick={handNavigation} className="bg-white text-black px-6 py-3 rounded-xl font-medium shadow-xl hover:bg-black hover:text-white transition-all duration-300">
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

         )
}
export default ProductCard;