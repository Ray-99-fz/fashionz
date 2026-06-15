import { useState } from "react";
import { FiChevronDown, FiX } from "react-icons/fi";

const OrderDetails= ({detail, closeDetails, handleCloseDetails}) =>{
    console.log("Order details received:", detail);

   
    const date = new Date(detail.created_at);
    const formattedDate = date.toLocaleDateString();
    const formattedTime = date.toLocaleTimeString();
       return(
           <>
            {/*OVERLAY */}
            <div 
                className={`
                    ${closeDetails ? 'block' : 'hidden'}
                    w-full 
                    h-screen
                    fixed 
                    overflow-auto
                    pt-30
                    md:pt-0
                    top-0 
                    left-0 
                    bg-black/80 
                    z-10 flex 
                    justify-center 
                    items-center`}
              >
            
            <article className="relative z-100 w-9/10 md:w-7/10 ld:w-8/10 space-y-4 shadow-lg bg-white rounded-md px-5 py-10">
                  <button onClick={handleCloseDetails}
                        className="absolute 
                         top-4 right-4 
                         bg-black text-white 
                         p-2 rounded-full
                         bg-black/30 
                         bg-opacity-80"
                         >
                    <FiX className="text-lg" />
                  </button>
                  <div className="flex flex-col justify-between md:flex-row ">
                  {/*product details */}
                  <div className="w-full md:w-fit "> 
                    <h1 className="mx-auto text-[20px] font-bold md:text-center my-5">
                        Product Details
                    </h1>
                    <div className="w-full md:w-fi flex flex-col md:flex-row gap-4 p-2  border-t">
                        <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1200&auto=format&fit=crop" 
                             alt="" 
                             className="h-60 md:h-20 rounded-md border" 
                        /> 
                        <div className="w-full text-[15px] text-gray-900 space-y-2">
                          <p className="">Name  : <b className="">{detail.product_name}</b> </p>
                          <p className="">ID  : <b className="">{detail.product_id}</b> </p>
                          <p className="">Size  : <b className="">{detail.product_size}</b> </p>
                          <p className="">Color : <b className="">{detail.product_color}</b> </p>
                          <p className="">Quantity : <b className="">{detail.quantity}</b></p>
                        </div>
 
                        </div>
                    </div>
                  {/**user details */}
                  <div className="w-full md:w-fit"> 
                    <h1 className="mx-auto text-[20px] font-bold  my-2 md:text-center my-5">Customer Details</h1>
                        <div className="w-full text-[15px] text-gray-900 space-y-2 border-t p-2">
                          <p className="">Name  : <b className="">{detail.customer_name}</b> </p>
                          <p className="">Phone  : <b className="">{detail.customer_phone}</b> </p>
                          <p className="">Email : <b className="">{detail.customer_email}</b> </p>
                          <p className="">Location : <b className="">{detail.customer_location}</b></p>
                          <p className="">Courier : <b className="">{detail.courier_service}</b></p>
                        </div>
                    </div>

                  {/**time stump */}
                  <div className="w-full md:w-fit"> 
                    <h1 className="mx-auto text-[20px] font-bold  my-2 md:text-center my-5">Time Stump</h1>
                     <div className="w-full gap-4 p-2 space-y-2 border-t">
                          <p className="">Date  : <b className="">{formattedDate}</b> </p>
                          <p className="">Time  : <b className="">{formattedTime}</b> </p>
                      </div>
                    </div>
                </div>
                {/*Receipts/payment/delivery status */}
                <div className="w-full inline-flex justify-between border-t py-5">
                    <span className="inline-flex flex-wrap gap-3 text-[1.1rem]"> 
                        Amount paid : <strong className="">{detail.amount_paid}</strong>
                        <button className="border inline-flex items-center gap-2 px-2 bg-black text-white font-semibold">
                            download receipt <FiChevronDown className="size-5"/>
                        </button>
                    </span>
                    <span className="">
                        Delivery : 
                        <strong className="text-red-400">
                          {detail.delivery_status || "Pending..."}
                        </strong>
                    </span>
                </div>
              </article>
               </div>
           </>
       )
}
export default OrderDetails;