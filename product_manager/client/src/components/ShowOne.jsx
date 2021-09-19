import React, {useEffect, useState} from 'react';
import { useParams } from "react-router";
import axios from 'axios'
import { useHistory } from "react-router-dom";

const ShowOne = () => {

    const { id } = useParams();
    const [productInfo, setProductInfo] = useState({})
    const history = useHistory();

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res=>{
                console.log("response for showone-->", res)
                setProductInfo(res.data.results)
            })
            .catch(err=>console.log("errrrrrrr ", err))
    },[id])

    const deleteHandler = () =>{
        // console.log('delete stufvfv')
        axios.delete(`http://localhost:8000/api/products/${productInfo._id}`)
            .then(res=>{
                console.log("response after delete", res)
                history.push("/")
            })
            .catch(err=>console.log("errrrrrrr ", err))
    }

    return (
        <div className="container"> 
            <h3 className="mb-3"> {productInfo.title}</h3>
            <div>
                <p>Price: ${productInfo.price}</p>
                <p>Description: {productInfo.description}</p>
                <p><button onClick={deleteHandler} className="btn btn-danger">Delete Product</button></p>
            </div>
        </div>
    );
};


export default ShowOne;