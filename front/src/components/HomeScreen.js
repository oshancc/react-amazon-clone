import React, { useEffect, useState } from 'react';
import Product from './Product.js';
import axios from 'axios';
import { LoadingMessage } from './LoadingMessage.js';
import { ErrorMessage } from './ErrorMessage.js';

export const HomeScreen = () => {
  
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        setLoading(true);
        const {data} = await axios.get('http://127.0.0.1:5000/api/products');
        // console.log(data)
        setProducts(data);
        console.log("gggg", products)
        setLoading(false);
        
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
      
    }
    fetchData();
  }, [])

  

    return (
        <div>
          {
            loading ? <LoadingMessage></LoadingMessage> : error ? <ErrorMessage>{error}</ErrorMessage> :
            (
              <div className="row center">
                {products.map(product => (
                    <Product key={product._id} {...product}></Product>
                ))}
              </div>
            )
             
          }
          
      </div>
    )
}
