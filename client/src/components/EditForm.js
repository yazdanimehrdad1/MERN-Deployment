import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

const EditForm= (props) => {
    const { id } = props._id
    // console.log("props", id)

    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [skill1, setSkill1] = useState("");
    const [skill2, setSkill2] = useState("");
    const [skill3, setSkill3] = useState("");
    const [errors, setErrors] = useState({});


    useEffect(()=>{

        axios.get(`http://localhost:8000/api/project/${props._id}`)
        .then( res =>{

            console.log("res", res.data)

            setName(res.data.name);
            setType(res.data.type);
            setDescription(res.data.description);
            setSkill1(res.data.skill1);
            setSkill2(res.data.skill2);
            setSkill3(res.data.skill3);
        })
        .catch( err =>{
            console.log(err)
        })

    },[] )
    
  
    const onSubmitHandler = (e)=>{
        e.preventDefault()
        axios.put(`http://localhost:8000/api/project/${props._id}`,{
            name,
            type,
            description,
            skill1,
            skill2,
            skill3
        })
        .then( res=>{
            console.log(res)
            navigate("/")
        })
        .catch( err=>{
            console.log(err);
            setErrors(err.response.data.errors)
        })




    }



    return (
        <div className="container">
            <h1>Pet Shelter</h1>
            <h3> Edit {name}</h3>


            <form onSubmit={onSubmitHandler}>
                <div className="form-group">
                    <label>Pet Name</label>
                    <input
                        className="form-control"
                        type="text"
                        name="petName"
                        value={name}
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
                        value={type}
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
                        value={description}
                        onChange={(e)=>setDescription(e.target.value)}
                    ></input>
                    { errors && errors.description && <p className="error-text">{errors.description.message}</p>}
                </div>


                <div className="form-group">
                    <label>Skill 1</label>
                    <input className="form-control" type="text" name="skill1" value={skill1}  onChange={(e)=>setSkill1(e.target.value)}></input>
                </div>


                <div className="form-group">
                    <label>Skill 2</label>
                    <input className="form-control" type="text" name="skill2" value={skill2} onChange={(e)=>setSkill2(e.target.value)}></input>
                </div>

                <div className="form-group">
                    <label>Skill 3</label>
                    <input className="form-control" type="text" name="skill3" value={skill3}  onChange={(e)=>setSkill3(e.target.value)}></input>
                </div>

                <button className="btn btn-primary" type="submit" >Edit Pet</button>
            </form>





          
        </div>
    )

}

export default EditForm