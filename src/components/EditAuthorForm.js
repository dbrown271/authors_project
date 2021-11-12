import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { useHistory, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {
    // Paper,
    FormControl,
    InputLabel,
    OutlinedInput,
    Button
} from '@material-ui/core';


const EditAuthorForm = (props) => {

    const history = useHistory()

    const { id } = useParams();

    const [formInfo, setFormInfo] = useState({
        name:""
    })

    const [formErrors, setFormErrors] = useState({
        name:""
    })

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then(response => {
                console.log("response for one author---->", response)
                setFormInfo(response.data.results)
            })
            .catch(err => console.log(err))
    },[id])

    const changeHandler = (e) => {
        console.log("Changing The Form!")
        setFormInfo({
            ...formInfo,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/authors/update/${id}`, formInfo)
            .then(response => {
                console.log("response from the put request", response)
                if(response.data.err){ 
                    setFormErrors(response.data.err.errors)
                }else{
                    setFormInfo({
                        name:"",
                    })
                    setFormErrors({
                        name:"",
                    })
                }
                history.push("/")
            })
            .catch(err => console.log("error submitting the put request --->", err))
    }

    const styles = {
        paper: {
            width: "20rem", padding: "1rem"
        },
        input: {
            marginBottom: "1rem"
        },
        button: {
            width: "100%"
        }
    }


    return (
        <div>
            <h1>Edit Author</h1>
            <form onSubmit = {submitHandler}>
                <FormControl variant="outlined" style={styles.input}>
                    <InputLabel>Author's Name</InputLabel>
                    <OutlinedInput onChange={changeHandler} type="text" name="name" value= {formInfo.name} ></OutlinedInput>
                    <p className="text-danger">{formErrors.name?.message}</p>
                </FormControl>
                <Button type="submit" variant="contained" color="primary">Update Author</Button>
                <Link to="/" className= "btn btn-danger" >Cancel</Link>
            </form>
        </div>
    );
};



export default EditAuthorForm;