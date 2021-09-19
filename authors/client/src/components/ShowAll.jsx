import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

const ShowAll = () => {

    const [allAuthors, setAllAuthors] = useState([])
    const [deleteAuthor, setDeleteAuthor] = useState(false)

    useEffect(()=>{
        axios.get("http://localhost:8000/api/authors")
            .then(res=>{
                // console.log(res.data.results)
                setAllAuthors(res.data.results)
            })
            .catch(err=> console.log("ERRORRRR-->", err))
    },[deleteAuthor])

    const deleteHandler = (e, authorid) =>{
        console.log('delete stufvfv')
        axios.delete(`http://localhost:8000/api/authors/${authorid}`)
            .then(res=>{
                console.log("response after delete", res)
                setDeleteAuthor(!deleteAuthor)
            })
            .catch(err=>console.log("errrrrrrr ", err))
    }

    return (
        <>
        <div className="mt-2">
        <Link to = {`/new`} className="btn btn-info">Add an author</Link>
        </div>
        <div className="mt-3">
            <h3>Author      Actions</h3>
            {allAuthors.map((a, i)=>{
                return <p key = {i}><Link to ={`/author/${a._id}`}>{a.name}</Link><Link to = {`/author/edit/${a._id}`} className="btn btn-success ms-2">Edit</Link><button onClick={(e)=>deleteHandler(e, a._id)} className="btn btn-danger ms-2">Delete</button></p>
            })}
        </div>
        </>
    );
};


export default ShowAll;