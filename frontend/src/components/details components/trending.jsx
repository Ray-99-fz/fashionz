import { products } from "../../data/products"
import ProductCard from "../home components/product card";


const TrendingProducts = ()=>{

            function getRandomProducts(array, count) {
                 // SHUFFLE ARRAY
                 const shuffled = [...array].sort(() => Math.random() - 0.5);
                // TAKE FIRST ITEM 
                return shuffled.slice(0, count);
                 
            }
            const trendingProducts = getRandomProducts(products, 5);
            
            return(
                  <section className="w-full">
                      {/* HEADING */}
                        <div className="text-center mb-20">
                            <p className="uppercase tracking-[0.35em] text-sm text-gray-400 mb-3">
                                Top rated Products
                            </p>

                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                                Browse trending Products from our stock
                            </h2>
                        </div>
                        {/*PRODUCTS */}
                     <div className="max-w-[1280px] mx-auto px-5 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {
                          trendingProducts.map((product)=>
                             <ProductCard
                               key={product.id}
                               product={product}
                             />
                           )
                        }
                         
                     </div>    
                  </section>
           )
}
export default TrendingProducts;