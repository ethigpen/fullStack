import axios from 'axios';
import React, { useState } from 'react';



const ProductsForm = (props) => {

    let[formInfo, setFormInfo] = useState({
        title: null,
        price: null,
        description: null
    })

    const changeHandler = (e)=>{
        // console.log(e.target.name, e.target.value)
        setFormInfo({ 
            ...formInfo,
            [e.target.name]:e.target.value
        })
    }

    const submitHandler = (e)=>{
        e.preventDefault();
        console.log("submitted with this info-->", formInfo)
        axios.post("http://localhost:8000/api/products", formInfo)
            .then(res=>{
                console.log("response after submitting post request-->", res)
                props.setSubmitted(!props.submitted)
            })
            .catch(err=>console.log("error with form submit", err))
        e.target.reset();
    }



    return (
        <div>
            <form onSubmit={submitHandler}>
                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input onChange = {changeHandler} name="title" type="text" className="form-control"/>
                    
                </div>
                <div className="mb-3">
                    <label className="form-label">Price</label>
                    <input onChange = {changeHandler} name="price" type="price" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea onChange = {changeHandler} name="description" type="price" className="form-control" />
                </div>
                <button type="submit" className="btn btn-primary">Create</button>
            </form>
        </div>
    );
};


export default ProductsForm;