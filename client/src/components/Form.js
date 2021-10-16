import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

const Form= () => {

    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [skill1, setSkill1] = useState("");
    const [skill2, setSkill2] = useState("");
    const [skill3, setSkill3] = useState("");
    const [errors, setErrors] = useState({});

    const [pet, setPets] = useState([])

    // useEffect( ()=>{
    //     axios.

    // })

    const onSubmitHandler = (e)=>{
        e.preventDefault()
        const newPetInfo={
            name:name,
            type:type,
            description:description,
            skill1:skill1,
            skill2:skill2,
            skill3:skill3
        }



        axios.post("http://localhost:8000/api/project", newPetInfo)
        .then( res =>{
            console.log(res);
            navigate("/")
            
        })
        .catch( err=> {
            console.log(err);
            setErrors(err.response.data.errors)
        })

    }
    
  


    return (
        <div className="container">
            <h1>Pet Shelter</h1>
            <h3>Know a pet needing a home ?</h3>


            <form onSubmit={onSubmitHandler}>
                <div className="form-group">
                    <label>Pet Name</label>
                    <input
                        className="form-control"
                        type="text"
                        name="petName"
                        onChange={(e)=>setName(e.target.value)}
                    ></input>
                    { errors && errors.name && <p className="error-text">{errors.name.message}</p>}
                </div>


                <div className="form-group">
                    <label>Pet Type</label>
                    <input
                        className="form-control"
                        type="text"
                        name="petType"
                        onChange={(e)=>setType(e.target.value)}
                    ></input>
                    { errors && errors.type && <p className="error-text">{errors.type.message}</p>}
                </div>


                <div className="form-group">
                    <label>Description</label>
                    <input
                        className="form-control"
                        type="text"
                        name="description"
                        onChange={(e)=>setDescription(e.target.value)}
                    ></input>
                    { errors && errors.description && <p className="error-text">{errors.description.message}</p>}
                </div>


                <div className="form-group">
                    <label>Skill 1</label>
                    <input className="form-control" type="text" name="skill1" onChange={(e)=>setSkill1(e.target.value)}></input>
                </div>


                <div className="form-group">
                    <label>Skill 2</label>
                    <input className="form-control" type="text" name="skill2" onChange={(e)=>setSkill2(e.target.value)}></input>
                </div>

                <div className="form-group">
                    <label>Skill 3</label>
                    <input className="form-control" type="text" name="skill3" onChange={(e)=>setSkill3(e.target.value)}></input>
                </div>

                <button type="submit" >Add a Pet</button>
            </form>





          
        </div>
    )

}

export default Form