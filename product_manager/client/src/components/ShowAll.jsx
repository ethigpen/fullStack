import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

const ShowAll = (props) => {

    const [allProducts, setAllProducts] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:8000/api/products")
            .then(res=>{
                // console.log(res.data.results)
                setAllProducts(res.data.results)
            })
            .catch(err=> console.log("ERRORRRR-->", err))
    },[props.submitted])

    return (
        <div className="mt-5">
            <h1>All Products:</h1>
            {allProducts.map((product, i)=>{
                return <p key = {i}><Link to ={`/product/${product._id}`}>{product.title}</Link></p>
            })}
        </div>
    );
};


export default ShowAll;