
import { useState, useEffect } from "react";
import { supabase } from "../utils/supabaseClient";
import Profile from "../components/admin components/admin profile";
import OrderCard from "../components/admin components/order card";
import OrderDetails from "../components/admin components/ordered details";
import { Link, Outlet } from "react-router-dom";
const Admin = () =>{
    // PRODUCT DETAILS
    const [productDetails, setProductDetails] = useState(null);
    const [closeDetails, setCloseDetails] = useState(false);
    const handleViewDetails = (order) => {
          setProductDetails(order);
          setCloseDetails(true);
    }
    const handleCloseDetails = () => {
          setProductDetails(null);
          setCloseDetails(false);
    }
    // ORDERS 
    const [fetchError, setFetchError] = useState(null);
    const [orders, setOrders] = useState([]);
    let orderData = null;

    useEffect(() => {
        const fetchOrders = async () => {
          const {data, error} = await supabase
            .from('orders')
            .select('*')

            orderData = data;

            if (error) {
              setFetchError("Could not fetch orders");
              console.log(error);
              setOrders([]);
            }

            if (orderData) {
              setOrders(orderData);
              setFetchError(null);
              // console.log("Fetched Orders:", orderData);
            }
          }
          fetchOrders();
       }, [])

    return(  
           
           <>
           <Profile/>
           <hr className="w-full text-black" />
            <div className="w-fit mx-auto flex gap-4">
                  
            </div>
            


           <div className="px-5">
               
               <h1 className="text-4xl md:text-5xl text-center font-bold my-8">Current Orders</h1>
              <div className=" gap-6">
                {/**  naviagation

                <aside className=" w-full py-20 bg-red-100">
                  <nav className="flex flex-col gap-6">
                    <Link to='new'>New Products</Link>
                    <Link to='dispatched'> Dispatched Products</Link>
                  </nav>
                </aside>
                */}
                {/* main/ orders*/}
                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  py-10">
                  {/* Display error message if fetchError is not null */}
                  {fetchError && <p className="text-red-500">{fetchError}</p>}
                  
                  {/* Display orders if available, otherwise show a message */}
                  {orders.length > 0 ? (
                    orders.map((order) => ( 
                     <OrderCard
                      key={order.id}
                      order={order}
                      viewDetails={handleViewDetails}
                     />) 
                      ))
                      :
                      (<p className="text-gray-500">searching...</p>)
                  }

                  {/* Product details modal */}
                 
                    {/* Modal content */}
                    {productDetails 
                       && 
                       <OrderDetails 
                         detail={productDetails} 
                         closeDetails={closeDetails}
                         handleCloseDetails={handleCloseDetails}
                       />
                    }
                  
                </div>
           
              <aside className="hidden w-full bg-green-100"></aside>
           </div>
           </div>
          
           

           </>
    )
}
export default Admin;