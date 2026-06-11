import { FiChevronDown } from "react-icons/fi";
import Profile from "../components/admin components/admin profile";
import Hero from "../components/details components/details hero";
const Admin = () =>{
    return(  
           
           <>
           <Profile/>
           <div className="grid grid-cols-1 md:grid-cols-5 gap-4 h-[150vh] px-5 md:px-10">
              {/**  admin profile*/}
             <aside className="w-full border border-black/60">

             </aside>
              {/* main */}
           <div className="col-start-2 row-start-1 col-span-3 pt-20 px-2">
              <article className="border p-2 space-y-4 ">
                  <div className="flex flex-col md:flex-row gap-4 justify-between w-full">
                  {/*product details */}
                  <div className="w-full md:w-fit"> 
                    <h1 className="mx-auto font-semibold my-2 text-center">Product Details</h1>
                    <div className="w-full md:w-fi inline-flex gap-4 border p-2">
                        <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1200&auto=format&fit=crop" 
                             alt="" 
                             className="w-15 h-20 rounded-md" 
                        /> 
                        <div className="w-full text-[14px] text-gray-900">
                          <p className="">Name  : <strong className="">Luxury Leather Tote</strong> </p>
                          <p className="">ID  : <strong className="">TX0RT4-0095R</strong> </p>
                          <p className="">Size  : <strong className="">M</strong> </p>
                          <p className="">Color : <strong className="">Black</strong> </p>
                          <p className="">Quantity : <strong className="">4</strong></p>
                        </div>
 
                        </div>
                    </div>
                  {/**user details */}
                  <div className="w-full md:w-fit"> 
                    <h1 className="mx-auto font-semibold my-2 text-center ">Customer Details</h1>
                    <div className="w-full inline-flex gap-4 border p-2">
                        <div className="text-[14px] text-gray-900">
                          <p className="">Name  : <strong className="">Chisome Simkonda</strong> </p>
                          <p className="">Phone  : <strong className="">0997914433</strong> </p>
                          <p className="">Email : <strong className="">Simkonda@gmail.com</strong> </p>
                          <p className="">Location : <strong className="">Mzuzu</strong></p>
                          <p className="">Courier : <strong className="">CTS</strong></p>
                        </div>
 
                        </div>
                    </div>

                  {/**time stump */}
                  <div className="w-full md:w-fit"> 
                    <h1 className="mx-auto font-semibold my-2 text-center">Time Stump</h1>
                    <div className="w-full inline-flex gap-4 border p-2">
                        <div className="text-[14px] text-gray-900">
                          <p className="">Date  : <strong className="">15/06/2026</strong> </p>
                          <p className="">Time  : <strong className="">02:12:45:03</strong> </p>
                        </div>
                        </div>
                    </div>
                </div>
                {/*Receipts/payment/delivery status */}
                <div className="w-full inline-flex justify-between">
                    <span className="inline-flex flex-wrap gap-3"> 
                        Amount paid : <strong className="">MWK 450,000</strong>
                        <button className="border inline-flex items-center gap-2">
                            Receipt
                            <FiChevronDown className="size-5"/>
                        </button>
                    </span>
                    <span className="">
                        Delivery : <strong className="text-red-400">Not delivered</strong>
                    </span>
                </div>
              </article>
           </div>
           
           <aside className="w-full border border-black/60">

             </aside>
           </div>
           

           </>
    )
}
export default Admin;