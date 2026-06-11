import { FiChevronDown } from "react-icons/fi";
import Profile from "../components/admin components/admin profile";
import Hero from "../components/details components/details hero";
const Admin = () =>{
    return(  
           
           <>
           <Profile/>
           <div className="grid grid-cols-1 md:grid-cols-5 gap-4 h-[150vh] px-5 md:px-10">
              {/**  admin profile*/}
             <aside className="w-full py-20">
                

             </aside>
              {/* main */}
           <div className="col-start-2 row-start-1 col-span-3 pt-20 px-2">
              <article className="p-2 space-y-4 shadow-md rounded-md border py-5">
                  <div className="flex flex-col md:flex-row gap-4 justify-between w-full">
                  {/*product details */}
                  <div className="w-full md:w-fit "> 
                    <h1 className="mx-auto text-[20px] font-bold my-2 text-center my-5">Product Details</h1>
                    <div className="w-full md:w-fi inline-flex gap-4 p-2  border-t">
                        <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1200&auto=format&fit=crop" 
                             alt="" 
                             className="h-20 rounded-md" 
                        /> 
                        <div className="w-full text-[15px] text-gray-900 space-y-2">
                          <p className="">Name  : <b className="">Luxury Leather Tote</b> </p>
                          <p className="">ID  : <b className="">TX0RT4-0095R</b> </p>
                          <p className="">Size  : <b className="">M</b> </p>
                          <p className="">Color : <b className="">Black</b> </p>
                          <p className="">Quantity : <b className="">4</b></p>
                        </div>
 
                        </div>
                    </div>
                  {/**user details */}
                  <div className="w-full md:w-fit"> 
                    <h1 className="mx-auto text-[20px] font-bold  my-2 text-center my-5">Customer Details</h1>
                        <div className="w-full text-[15px] text-gray-900 space-y-2 border-t p-2">
                          <p className="">Name  : <b className="">Chisome Simkonda</b> </p>
                          <p className="">Phone  : <b className="">0997914433</b> </p>
                          <p className="">Email : <b className="">Simkonda@gmail.com</b> </p>
                          <p className="">Location : <b className="">Mzuzu</b></p>
                          <p className="">Courier : <b className="">CTS</b></p>
                        </div>
                    </div>

                  {/**time stump */}
                  <div className="w-full md:w-fit"> 
                    <h1 className="mx-auto text-[20px] font-bold  my-2 text-center my-5">Time Stump</h1>
                     <div className="w-full gap-4 p-2 space-y-2 border-t">
                          <p className="">Date  : <b className="">15/06/2026</b> </p>
                          <p className="">Time  : <b className="">02:12:45:03</b> </p>
                      </div>
                    </div>
                </div>
                {/*Receipts/payment/delivery status */}
                <div className="w-full inline-flex justify-between border-t py-5">
                    <span className="inline-flex flex-wrap gap-3 text-[1.1rem]"> 
                        Amount paid : <strong className="">MWK 450,000</strong>
                        <button className="border inline-flex items-center gap-2 px-2 bg-black text-white font-semibold">
                            Receipt
                            <FiChevronDown className="size-5"/>
                        </button>
                    </span>
                    <span className="">
                        Delivery : <strong className="text-red-400">Pending...</strong>
                    </span>
                </div>
              </article>
           </div>
           
           <aside className="w-full">

             </aside>
           </div>
           

           </>
    )
}
export default Admin;