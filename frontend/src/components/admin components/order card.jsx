import { HiUser } from "react-icons/hi";



const OrderCard = ({ order, viewDetails}) =>{
              

              const color = order.product_color.toLowerCase();
              return(
                     <article 
                      className="
                        relative 
                        w-full 
                        flex 
                        justify-between 
                        gap-4 
                        shadow-lg 
                        rounded-md 
                        px-2 py-4 
                        border 
                        border-black/5
                        pb-10"
                     >
                      <div className="space-y-4">
                         <h3 className="font-semibold">Product</h3>
                         <div className="flex gap-2">
                           <div  className={`w-[40px] bg-${color} border overflow-hidden rounded-sm`} />
                           <div className="text-[14px] font-light">
                             <p className="">Name :  
                                 <b className="ml-2 text-[13px] font-semibold">
                                  {order.product_name}
                                 </b> 
                              </p>
                             <p className="">Quantity : 
                                 <b className="ml-2 text-[13px] font-semibold">
                                  {order.quantity}
                                 </b> 
                              </p>
                           </div>
                         </div>
                      </div>
                      {/*customer */}
                     <div className="space-y-4">
                         <h3 className="font-semibold">Customer</h3>
                         <div className="flex gap-2">
                           <div className="size-[40px] flex rounded-full border">
                             <HiUser className="m-auto size-6 text-gray-700"/>
                           </div>
                           <div className="text-[14px] font-light">
                             <p className="">Name : 
                                <b className="ml-2 text-[13px] font-semibold">
                                  {order.customer_name}
                                </b> 
                             </p>
                             <p className="">Location : 
                                <b className="ml-2 text-[13px] font-semibold">
                                  {order.customer_location}
                                </b> 
                             </p>
                           </div>
                         </div>
                         
                      </div>

                      <button
                         onClick={() => viewDetails(order)} 
                         className="absolute 
                          bottom-2 left-2 
                          text-[13px] 
                          font-semibold 
                          text-green-600">
                        Details 
                      </button>
                  </article>
              )
}

export default OrderCard;