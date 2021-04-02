import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { ErrorMessage } from './ErrorMessage';
import { LoadingMessage } from './LoadingMessage';
import Rating from './Rating';

export const ProductScreen = (props) => {

    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
    
        const fetchData = async () => {
          try {
            setLoading(true);
            const {data} = await axios.get("http://127.0.0.1:5000/api/products/" + props.match.params.id);
            console.log(data)
            setProduct(data);
            // console.log(product)
            setLoading(false);
            
          } catch (err) {
            setError(err.message);
            setLoading(false);
          }
          
        }
        fetchData();
      }, [])

    // const product = data.products.find(x => x._id === props.match.params.id);
   
    return (
    <div>
        <Link to="/">Back to Home</Link>
        {
            loading ? <LoadingMessage></LoadingMessage>: error ?<ErrorMessage>{error}</ErrorMessage>:
                (
                    <div className="row top">
                        <div className="col-2">
                            <img className="large" src={product.image} alt={product.name}></img>
                        </div>
                        <div className="col-1">
                            <ul>
                                <li><h1>{product.name}</h1></li>
                                <li><Rating rating={product.rating} numReviews={product.numReviews}></Rating></li>
                                <li>Price: ${product.price}</li>
                                <li>Description:<p>{product.description}</p></li>
                            </ul>
                        </div>
                        <div className="col-1">
                            <div className="card card-body">
                                <ul>
                                    <li>
                                        <div className="row">
                                            <div>Price</div>
                                            <div>${product.price}</div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="row">
                                            <div>Status</div>
                                            <div>{product.countInStock > 0 ? (<span className="success">In Stock</span>) : (<span className="danger">Unavailable</span>)}</div>
                                        </div>
                                    </li>
                                    <li>
                                        <button>Add to Cart</button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )

        }
            
    </div>
    )
}
