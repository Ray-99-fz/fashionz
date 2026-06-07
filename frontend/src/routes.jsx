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


const router = createBrowserRouter(
    [
        {
            path: "/",
            Component: AppLayout,
            children: [
                {index: true, Component: Landing},
                {path: "/products/:slug", Component: Products},
                {path: "/details/:id", Component: Details },
                {path: '/checkout', Component: Checkout}
            ]
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