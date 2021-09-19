import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { Link } from "react-router-dom";

const AuthorForm = () => {
    let[formInfo, setFormInfo] = useState({
        name: null
    })
    const history = useHistory()

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
        axios.post("http://localhost:8000/api/authors", formInfo)
            .then(res=>{
                console.log("response after submitting post request-->", res)
                history.push("/")
            })
            .catch(err=>console.log("error with form submit", err))
        // e.target.reset();
    }

    return (
        <div >
            <p><Link to = {`/`} className="btn btn-info">Home</Link></p>
            <form onSubmit={submitHandler}>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input onChange = {changeHandler} name="name" type="text" className="form-control"/>
                </div>
                <button type="submit" className="btn btn-primary">Create</button>
            </form>
        </div>
    );
};


export default AuthorForm;