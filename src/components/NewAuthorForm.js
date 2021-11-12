import axios from 'axios';
import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import {
    // Paper,
    FormControl,
    InputLabel,
    OutlinedInput,
    Button
} from '@material-ui/core';


const NewAuthorForm = () => {
    const [formInfo, setFormInfo] = useState({
        name:""
    })

    const [formErrors, setFormErrors] = useState({
        name:""
    })

    const history = useHistory()

    const changeHandler = (e) => {
        console.log("Changing The Form!")
        setFormInfo({
            ...formInfo,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8000/api/authors", formInfo)
            .then(response => {
                console.log(response)
                if(response.data.err){
                    setFormErrors(response.data.err.errors)
                }else{
                    setFormInfo({
                        name:""
                    })
                    setFormErrors({
                        name:""
                    })
                    history.push("/")
                }
            })
            .catch(err => console.log("error submitting the post request --->", err))
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
            <h1>Add New Author</h1>
            <form onSubmit = {submitHandler}>
                <FormControl variant="outlined" style={styles.input}>
                    <InputLabel>Author's Name</InputLabel>
                    <OutlinedInput onChange={changeHandler} type="text" name="name" value= {formInfo.name} ></OutlinedInput>
                    <p className="text-danger">{formErrors.name?.message}</p>
                </FormControl>
                <Button type="submit" variant="contained" color="primary">Submit</Button>
                <Link to="/" className= "btn btn-danger" >Cancel</Link>
            </form>
        </div>
    );
};



export default NewAuthorForm;