
import { FiStar, FiX } from "react-icons/fi"
import { IoMdWarning } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { useOrder } from "../../utils/OrderContext";
import { useState } from "react";

const ProductDetails = ({product}) =>{
        const [item, setItem] = useState({
            
            size: '',
            color: '',
            quantity: '',
            
        })

        const navigate = useNavigate()
        const productPrice = (product.price * 3000).toLocaleString()

        const handleInputChange = (e) => {
            const {name, value} = e.target

            setItem(prev => ({
                ...prev,
                [name]: value
            }))
        }

           const { setOrder } = useOrder()

           const handleBuyNow = () => {
            
            const totalPrice = Number(productPrice.replace(/,/g, "")) * Number(item.quantity);


            setOrder({
                id: product.id,
                name: product.name,
                size: item.size,
                color: item.color,
                quantity: item.quantity,
                price: totalPrice.toLocaleString()
            })

            navigate('/checkout')
           }

         return(
               <div className={`p-10  mb-20 w-full bg-white`}>
                <article className={` w-full`}>
                    {/*CONTAINER*/}
                    <div className="m-8 overflow-hidden h-[85vh]  grid grid-cols-1 gap-4 md:grid-cols-5">
                    {/*PRODUCT PICTURE/S */}
                    <div className="col-span-2 overflow-y-auto space-y-8 box-border">
                       <figure className="relative overflow-hidden h rounded-md ">
                          <img src={product.image}
                              alt="medium sized" 
                              className=" w-full h-full object-cover scale" 
                          />
                         {product.featured && <figcaption className="absolute top-2 left-2 px-2 py-1 bg-white rounded-full ">Featured</figcaption>} 
                       </figure>
                       <div className="w-full h-fit grid grid-cols-2 grid-rows-2 gap-2 border border-black/20 p-2">
                        
                          <img src={product.image}
                              alt="medium sized" 
                              className="size-25 object-cover rounded-md" 
                          />
                          <img src={product.image}
                              alt="medium sized" 
                              className="size-25 object-cover rounded-md" 
                          />
                          <img src={product.image}
                              alt="medium sized" 
                              className="size-25 object-cover rounded-md" 
                          />
                          <img src={product.image}
                              alt="medium sized" 
                              className="size-25 object-cover rounded-md" 
                          />
                      
                       </div>
                      
                    </div>
                    {/*PRODUCT DESCRIPTIONS */}
                    <div className="md:col-span-3 relative grid grid-cols-1 md:grid-cols-2 border overflow-y-auto gap-4 bg-white rounded-r-md p-5 ">
                      <div className="space-y-3">
                        <span className="inline-flex items-center gap-2">
                            <strong className="uppercase">{product.brand}</strong>
                            {product.category}
                        </span>
                        <h2 className="font-semibold">{product.name}</h2>
                    
                        {/*RATINGS AND VIEWS */}
                        <div className="inline-flex gap-3 items-center">
                          <span className="inline-flex gap-3 text-yellow-500">
                            <FiStar className="size-4"/>
                            <FiStar className="size-4"/>
                            <FiStar className="size-4"/>
                          </span>
                          <span className="font-semibold"> {product.rating} reviews</span>
                        </div>
                       </div>
                        {/*PRICE */}
                        <div className="inline-flex gap-3 items-center text-[16px] md:text-[16px] text-gray-500 border  border-green-500/10 bg-green-600/70 p-2 rounded-md shadow-sm">
                            <p className="text-black font-semibold ">  
                                MWK {(product.price * 3000).toLocaleString()}
                            </p>
                            <p className="text-gray-500 text-[17px] line-through">
                                MWK {(product.oldPrice * 3000).toLocaleString()}
                            </p>
                            <p className=" bg-yellow-300 border border-yellow-600
                               text-black white yellow-500 text-[10px] font-bold flex flex-col items-center p-[5px] 
                              rounded-full  whitespace-nowrap">
                              {((((product.oldPrice * 3000)-(product.price * 3000))/(product.price * 3000))*100).toFixed(2)} 
                                %
                                <strong className="text-[x]">Off</strong>
                                
                            </p>
                        </div>
                         
                        {/*DESCRIPTION */}
                        <p className="-mt-4">{product.description}</p>
                      
                        {/*COLORS */}
                        <label className="flex flex-col font-semibold text-gray-500 border  border-black/10 bg-gray-50/30 p-2 rounded-md shadow-sm">
                            Pick your favorite color:
                            <div className="my-2 inline-flex gap-1">
                                {product.colors.map((color)=>
                                    <input 
                                        type="color" 
                                        name="color"
                                        value={item.color}
                                        onChange={handleInputChange}
                                        key={color.id} 
                                        className={`size-10 rounded-md`}
                                    /> 
                                  )
                                }
                            </div>
                        </label>

                        {/*SIZES */}
                        <div className="text-gray-500 border  border-black/10 bg-gray-50/30 p-2 rounded-md shadow-sm">
                            <p className="font-semibold">  Select your size</p>
                            <select 
                                value={item.size}
                                onChange={handleInputChange}
                                name="size"
                                className="my-2 inline-flex gap-2 bg-gray-50 border border-black/10 outline-none rounded-md px-5 py-1 rounded-[5px]"
                            >
                                {product.sizes.map((size)=>
                                   <option 
                                      key={size}
                                      value={size} 
                                      className="w-">
                                        {size}
                                   </option>
                                 )}
                            </select>
                        </div>

                        {/*SELECT QUANTITY */}
                        <fieldset className="inline-flex gap-4 justify-between text-gray-500 border  border-black/10 bg-gray-50/30 p-2 rounded-md shadow-sm">
                          <label className="my-2 flex flex-col gap-2 font-semibold">
                             Provide products quantity
                              <input 
                                type="number" 
                                value={item.quantity}
                                name="quantity"
                                onChange={handleInputChange}
                                min='0' 
                                max={product.stock} 
                                className="w-16 bg-gray-50/30 border border-black/10 px-2 outline-none rounded-[5px]" 
                                />
                           </label>
                           <div className="h-fit flex flex-col gap-1 bg-red-500/10 items-center text-[12px] font-semibold whitespace-nowrap p-2 text-black border border-red-500 rounded-[5px]">
                              <IoMdWarning className="size-5 text-red-500"/>
                              <p className="">Only</p>
                               <strong className=""> {product.stock}</strong>
                                Remaining
                           </div>
                        </fieldset>
                        {/*CTA BUTTONS*/}
                        <div className="flex flex-col gap-3">
                            <button to='/checkout'
                                    onClick={handleBuyNow}
                                    className="p-5 border rounded-md bg-black text-white font-bold">
                                Buy Now
                            </button>
                        </div>
                    </div>
                </div>
                </article>
                </div>
         )
}
export default ProductDetails;