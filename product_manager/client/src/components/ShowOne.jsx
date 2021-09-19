import React, {useEffect, useState} from 'react';
import { useParams } from "react-router";
import axios from 'axios'

const ShowOne = () => {

    const { id } = useParams();
    const [productInfo, setProductInfo] = useState({})

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res=>{
                console.log("response for showone-->", res)
                setProductInfo(res.data.results)
            })
            .catch(err=>console.log("errrrrrrr ", err))
    },[id])

    return (
        <div className="container">
            <h3 className="mb-3"> {productInfo.title}</h3>
            <div>
                <p>Price: ${productInfo.price}</p>
                <p>Description: {productInfo.description}</p>
            </div>
        </div>
    );
};


export default ShowOne;