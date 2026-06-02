import { 
    createBrowserRouter, 
    createRoutesFromElements, 
    Route 
} from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import Landing from "./pages/Landing";
import Products from "./layouts/ProductsLayout";
import Mens from "./pages/products/Mens";
import Womens from "./pages/products/Womens";
import Accessories from "./pages/products/Accessories";


const router = createBrowserRouter(
    [
        {
            path: "/",
            Component: AppLayout,
            children: [
                {index: true, Component: Landing}
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