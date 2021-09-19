import React, {useState, useEffect} from 'react';
import { useParams } from "react-router";
import axios from 'axios'
import { useHistory } from "react-router-dom";


const EditProduct = () => {
    const { id } = useParams();
    const history = useHistory(); //this is for redirecting when we submit the form
    const [productInfo, setProductInfo] = useState({})

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res=>{
                console.log("response for showone-->", res)
                setProductInfo(res.data.results)
            })
            .catch(err=>console.log("errrrrrrr ", err))
    },[])

    const changeHandler = (e)=>{
        // console.log(e.target.name, e.target.value)
        setProductInfo({ 
            ...productInfo,
            [e.target.name]:e.target.value
        })
    }

    const submitHandler = (e)=>{
        e.preventDefault();
        console.log("submitted with this info-->", productInfo)
        axios.put(`http://localhost:8000/api/products/${id}`, productInfo)
            .then(res=>{
                console.log("response after submitting post request-->", res)
                history.push(`/product/${id}`)
            })
            .catch(err=>console.log("error with form submit", err))
        // e.target.reset();
    }

    return (
        <div className="container">
            <form onSubmit={submitHandler}>
                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input onChange = {changeHandler} name="title" type="text" className="form-control" value={productInfo.title}/>
                    
                </div>
                <div className="mb-3">
                    <label className="form-label">Price</label>
                    <input onChange = {changeHandler} name="price" type="price" className="form-control" value= {productInfo.price}/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea onChange = {changeHandler} name="description" type="price" className="form-control" value={productInfo.description}/>
                </div>
                <button type="submit" className="btn btn-primary">Edit</button>
            </form>
        </div>
    );
};


export default EditProduct;