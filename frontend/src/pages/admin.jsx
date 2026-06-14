import { useOrder } from "../utils/OrderContext";

import Profile from "../components/admin components/admin profile";
import OrderCard from "../components/admin components/order card";
import Ordered from "../components/admin components/ordered product";

const Admin = () =>{
      const { order, setOrder } = useOrder()
      console.log(order)
    return(  
           
           <>
           <Profile/>
           <hr className="w-full text-black" />
           <div className="px-5">
               <h1 className="text-4xl md:text-5xl text-center font-bold my-8">Current Orders</h1>
              <div className="">
                {/**  naviagtion*/}
                <aside className=" hidden w-full py-20 bg-red-100"></aside>
                {/* main/ orders*/}
                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  py-10">
                  
                  <OrderCard/>
                  <OrderCard/>
                  <OrderCard/>
                  <OrderCard/>
                  <OrderCard/>
                  <OrderCard/>
                </div>
           
              <aside className="hidden w-full bg-green-100"></aside>
           </div>
           </div>
          
           

           </>
    )
}
export default Admin;