
import { FiStar, FiX } from "react-icons/fi"
const ProductDetails = ({
                         id,
                         brand, 
                         category, 
                         name, 
                         image,
                         rating, 
                         reviews, 
                         stock,
                         price, 
                         oldPrice, 
                         description, 
                         colors, 
                         sizes, 
                         isViewed, 
                         onView
                        }) =>{
         return(
                <article className={`fixed top-3  z-50 w-full md:w-[60%] left-[50%] 
                                     ${isViewed===id ? 'translate-x-[-50%]' : 'translate-x-[-300%]'} 
                                     bg-white border p-2  rounded-xl transition-all duration-1000`}>
                     {/*QUITE MODAL-WINDOW BUTTON */}
                    <div className="relative w-full">
                        <button onClick={()=>onView(null)}
                               className="absolute right-1 top-1 p-1 border bg-gray-200/60 rounded-full"> 
                          <FiX className="size-6"/> 
                        </button>
                    </div>

                    {/*CONTAINER*/}
                    <div className=" m-8 overflow-hidden h-[85vh]  grid grid-cols-1 md:grid-cols-2">
                    {/*PRODUCT PICTURE/S */}
                    <figure className="overflow-hidden rounded-l-md ">
                          <img src={image}
                               alt="medium sized" className=" w-full h-full object-cover scale" />
                          <figcaption className="">Featured</figcaption>
                    </figure>

                    {/*PRODUCT DESCRIPTIONS */}
                    <div className="relative flex flex-col overflow-y-auto gap-4 bg-white rounded-r-md p-5 ">
                        
                        <span className="inline-flex items-center gap-2">
                            <strong className="uppercase">{brand}</strong>
                            {category}
                        </span>
                        <h2 className="font-semibold">{name}</h2>
                    
                        {/*RATINGS AND VIEWS */}
                        <div className="inline-flex gap-3 items-center">
                          <span className="inline-flex gap-3 text-yellow-500">
                            <FiStar className="size-4"/>
                            <FiStar className="size-4"/>
                            <FiStar className="size-4"/>
                          </span>
                          <span className="font-semibold"> {rating} reviews</span>
                        </div>
                    
                        {/*PRICE */}
                        <div className="inline-flex gap-3 items-end text-[20px] font">
                            <p className="font-semibold ">  
                                MWK {(price * 3000).toLocaleString()}
                            </p>
                            <p className="text-gray-500 text-[17px] line-through">
                                MWK {(oldPrice * 3000).toLocaleString()}
                            </p>
                            <p className="bg-emerald-500/20 border-emerald-500/70 font-semibold text-emerald-500 px-2 rounded-full">22.5 %</p>
                        </div>
                         
                        {/*DESCRIPTION */}
                        <p className="">{description}</p>
                      
                        {/*COLORS */}
                        <div className="">
                            <p className=""> color : <strong className="">white</strong></p>
                            <div className="my-2 inline-flex gap-1">
                                {colors.map((color)=>
                                    <div className={`size-10 border border-black rounded-md`}/> 
                                  )
                                }
                            </div>
                        </div>

                        {/*SIZES */}
                        <div className="">
                            <p className=""> Size: <strong className="">M</strong></p>
                            <div className="my-2 inline-flex gap-2">
                              <div className="cursor-pointer px-3 py-1 inline-flex items-center border">S</div>
                              <div className="cursor-pointer px-3 py-1 inline-flex items-center  border">M</div>
                              <div className="cursor-pointer px-3 py-1 inline-flex items-center  border">L</div>
                              <div className="cursor-pointer px-3 py-1 inline-flex items-center  border">XL</div>
                            </div>
                        </div>

                        {/*SELECT QUANTITY */}
                        <div className="my-2 inline-flex items-center gap-2">
                            <button className="cursor-pointer px-3 py-1 inline-flex items-center border">-</button>
                            <p className="font-semibold">0</p>
                            <button className="cursor-pointer px-3 py-1 inline-flex items-center border">+</button>
                        </div>
                        {/*CTA BUTTONS*/}
                        <div className="flex flex-col gap-3">
                            <button className="p-5 border rounded-md bg-black text-white font-bold">Add to cart</button>
                            <button className="p-5 border border-black rounded-md font-bold">Buy Now</button>
                        </div>
                    </div>
                </div>
                </article>
         )
}
export default ProductDetails;