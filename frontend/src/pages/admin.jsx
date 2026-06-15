
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
           
           <div className="w-full h-[80vh]">
           <Profile/>
           
           {/*CONTAINER */}
           <div className="md:grid md:grid-cols-6 gap-4 px-5"> 
                {/**  naviagation */}

                <aside className="hidden md:block w-full bg-black/45 text-white font-bold rounded-t-[0.2rem] px-2 py-5">
                  <nav className="flex flex-col gap-4">
                    <Link to='/admin'
                          className="p-2 border-b rounded-sm bg-white/20">
                       Current Orders
                    </Link>
                    <Link to='/admin'
                          className="p-2 border-b rounded-sm bg-white/20"> 
                       Dispatched Orders
                    </Link>
                    <Link to='/admin'
                          className="p-2 border-b rounded-sm bg-white/20"> 
                       Non Dispatched
                    </Link>
                  </nav>
                </aside>
               
              <div className="col-start-2 col-span-5 gap-6 overflow-y-auto">
               
                {/* main/ orders*/}
                <h1 className="text-3xl font-bold my-8">Current Orders</h1>
                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  py-10">
                  {/* Display error message if fetchError is not null */}
                  {fetchError && <p className="text-red-500">{fetchError}</p>}
                  
                  {/* Display orders if available, otherwise show a message */}
                  {orders.length > 0 
                     && 
                     (orders.map((order) => ( 
                      <OrderCard
                        key={order.id}
                        order={order}
                        viewDetails={handleViewDetails}
                      />) 
                        )
                     )
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
           </div>
           </div>
          
           

           </div>
    )
}
export default Admin;