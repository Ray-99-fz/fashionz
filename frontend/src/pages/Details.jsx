
import { products } from "../data/products";
import ProductDetails from "../components/details components/product details";
import { useParams } from "react-router-dom";
import Hero from "../components/details components/details hero";
import TrendingProducts from "../components/details components/trending";

const Details = () =>{

        const {id}= useParams();
        const product = products.find(param => param.id === parseInt(id, 10));
           
        return(
                <>
                     <Hero/>      
                     <ProductDetails product={product}/> 
                     <TrendingProducts/>              
                </>
                
            )
    }
export default Details;