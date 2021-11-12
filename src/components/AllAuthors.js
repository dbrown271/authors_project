import React, { useEffect, useState } from 'react';
import axios from 'axios'
import {Link, useHistory} from "react-router-dom"
import { Card, CardContent } from '@material-ui/core';
import { Button } from '@material-ui/core';




const AllAuthors = () => {
    const [allAuthors, setAllAuthors] = useState([])

    const [deleteToggle, setDeleteToggle] = useState(false)

    const history = useHistory();

    useEffect(() => {
        axios.get("http://localhost:8000/api/authors")
        .then(response => {
            console.log("Response When Getting All Products --->", response)
            setAllAuthors(response.data.results)
        })
        .catch(err => console.log("errrrrrrr ->", err))
    },[deleteToggle])

    const deleteAuthor = (idOfAuthor) => {
        console.log("deleting author --->", idOfAuthor)
        axios.delete(`http://localhost:8000/api/authors/delete/${idOfAuthor}`)
            .then(response => {
                console.log("reponse after deleting -->", response)
                history.push("/")
                setDeleteToggle(!deleteToggle)
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            {
                allAuthors.map((authors, i) => {
                    return (
                        <div key={i}>
                            <Card>
                                <CardContent>
                                    <h1> <Link to={`/authors/${authors._id}`}>{authors.name}</Link></h1>
                                    <Link to = {`/edit/${authors._id}`}>
                                        <Button>Edit</Button>
                                    </Link> 
                                    <Button onClick= {(e) => deleteAuthor(authors._id)}>Delete</Button>
                                </CardContent>
                            </Card>
                        </div>
                    )
                })
            }
        </div>
    );
};



export default AllAuthors;