import React, {useEffect, useState} from 'react';
import { useParams } from "react-router";
import axios from 'axios'
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";


const ShowAuthor = () => {
    
    const { id } = useParams();
    const [authorInfo, setAuthorInfo] = useState({})
    const history = useHistory();

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then(res=>{
                console.log("response for showone-->", res)
                setAuthorInfo(res.data.results)
            })
            .catch(err=>console.log("errrrrrrr ", err))
    },[id])

    const deleteHandler = () =>{
        // console.log('delete stufvfv')
        axios.delete(`http://localhost:8000/api/authors/${authorInfo._id}`)
            .then(res=>{
                console.log("response after delete", res)
                history.push("/")
            })
            .catch(err=>console.log("errrrrrrr ", err))
    }


    return (
        <div>
            <p><Link to = {`/`} className="btn btn-info">Home</Link></p>
            <h3>Author name: {authorInfo.name}</h3>
            <p><button onClick={deleteHandler} className="btn btn-danger">Delete Author</button></p>
        </div>
    );
};


export default ShowAuthor;