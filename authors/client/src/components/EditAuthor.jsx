import React, { useState, useEffect } from 'react';
import { useParams } from "react-router";
import axios from 'axios'
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";


const EditAuthor = () => {

    const { id } = useParams();
    const history = useHistory(); 
    const [authorInfo, setAuthorInfo] = useState({})
    let [validationErrors, setValidationErrors] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then(res => {
                console.log("response for showone-->", res)
                setAuthorInfo(res.data.results)
            })
            .catch(err => console.log("errrrrrrr ", err))
    }, [])

    const changeHandler = (e)=>{
        // console.log(e.target.name, e.target.value)
        setAuthorInfo({ 
            ...authorInfo,
            [e.target.name]:e.target.value
        })
    }

    const submitHandler = (e)=>{
        e.preventDefault();
        console.log("submitted with this info-->", authorInfo)
        axios.put(`http://localhost:8000/api/authors/${id}`, authorInfo)
            .then(res=>{
                console.log("response after submitting post request-->", res)
                if(res.data.err){ 
                    setValidationErrors(res.data.err.errors)
                }else{ 
                    history.push(`/author/${id}`)
                }
            })
            .catch(err=>console.log("error with form submit", err))
        // e.target.reset();
    }



    return (
        <div>
            <p><Link to={`/`} className="btn btn-info">Home</Link></p>
            <form onSubmit={submitHandler}>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input onChange={changeHandler} name="name" type="text" className="form-control" value={authorInfo.name} />
                    <p className="text-danger">{validationErrors.name? validationErrors.name.message: ""}</p>
                </div>
                <Link to={`/`} className="btn btn-primary">Cancel</Link> <button type="submit" className="btn btn-primary">Submit</button> 
            </form>
        </div>
    );
};


export default EditAuthor;