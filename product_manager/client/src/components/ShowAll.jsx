import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

const ShowAll = (props) => {

    const [allProducts, setAllProducts] = useState([])
    const [deleteProduct, setDeleteProduct] = useState(false)

    useEffect(()=>{
        axios.get("http://localhost:8000/api/products")
            .then(res=>{
                // console.log(res.data.results)
                setAllProducts(res.data.results)
            })
            .catch(err=> console.log("ERRORRRR-->", err))
    },[props.submitted, deleteProduct])

    const deleteHandler = (e, productid) =>{
        console.log('delete stufvfv')
        axios.delete(`http://localhost:8000/api/products/${productid}`)
            .then(res=>{
                console.log("response after delete", res)
                setDeleteProduct(!deleteProduct)
            })
            .catch(err=>console.log("errrrrrrr ", err))
    }

    return (
        <div className="mt-5">
            <h1>All Products:</h1>
            {allProducts.map((product, i)=>{
                return <p key = {i}><Link to ={`/product/${product._id}`}>{product.title}</Link><Link to = {`/product/edit/${product._id}`} className="btn btn-success ms-2">Edit</Link><button onClick={(e)=>deleteHandler(e, product._id)} className="btn btn-danger ms-2">Delete</button></p>
            })}
        </div>
    );
};


export default ShowAll;