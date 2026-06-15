import { 
    createBrowserRouter, 
    createRoutesFromElements, 
    Route 
} from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import Landing from "./pages/Landing";
import Products from "./pages/Products";
import Details from "./pages/Details";
import Checkout from "./pages/Checkout";
import Receipt from "./pages/Receipt";
import Admin from "./pages/admin";
import { NewOrders } from "./components/admin components/new orders";
import { DispatchedOrders } from "./components/admin components/dispatched orders";
import NoPageFund from "./components/no match";


const router = createBrowserRouter(
    [
        {
            path: "/",
            Component: AppLayout,
            children: [
                {index: true, Component: Landing},
                {path: "/products/:slug", Component: Products},
                {path: "/details/:id", Component: Details },
                {path: '/checkout', Component: Checkout},   
            ]

        },
        {
            path: '/receipt',
            Component: Receipt
        },
        {
            path: '/admin', 
            Component: Admin,
           /* children:[
                {index: true, Component: NewOrders},
                {path: 'new', Component: NewOrders},
                {path: 'dispatched', Component: DispatchedOrders},
            ]
            */
        },
        {
            path: '*',
            Component:NoPageFund
        }
        
    ]
    // createRoutesFromElements(
    //     <Route path="/" element={<AppLayout />}>
    //         <Route index element={<Landing />} />
    //         <Route path="products" element={<Products />}>
    //             <Route path="mens" element={<Mens />}/>
    //             <Route path="womens" element={<Womens />}/>
    //             <Route path="accessories" element={<Accessories />}/>
    //         </Route>
    //     </Route>
    // )
)

export default router