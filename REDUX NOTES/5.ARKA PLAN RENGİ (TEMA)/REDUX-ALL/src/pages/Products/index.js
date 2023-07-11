

import { useQuery } from 'react-query'
//api
import { fetchProductList } from '../../api';
//chackra
import { Button } from '@chakra-ui/react';

function Product() {
    const { isLoading, error, data } = useQuery("product", fetchProductList);
    
   
  
    if (isLoading) return "loading...";

    if (error) return "an error has occurred: " + error.message;

    console.log(data)

    return (
        <div>
            product
            <Button>theme</Button>
        </div>
    )
}

export default Product;