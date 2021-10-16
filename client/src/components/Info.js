import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';
import '../App.css'

const Info= (props) => {

    console.log("props._id from info",props._id)

    const [pet, setPets] = useState({})
    const [likes, setLikes] = useState(0)

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


    const deleteHandler = (id)=>{
        axios.delete(`http://localhost:8000/api/project/${id}`)
        .then( res =>{
            navigate("/")
        })
        .catch(err=>console.log(err))

    }


    // const likePet = _id => {

    //     axios.put("http://localhost:8000/api/project/like/" + _id, {
    //         likes
    //     })
    //         .then(res => {
    //             console.log(res)
    //             getPet();
    //         })
    //         .catch(err => console.log(err))
    //         document.getElementById('button').setAttribute("disabled", "disabled");
    // }






    
  


    return (
        <div className="container ">

            <div className="row" >
                <div className="col-6">

                                

                <h3> Details about {name}</h3>
                    <div className="box">
                        <p>pet Type: {type}</p>
                        <p>Description: {description} </p>
                        <div>Skills
                        <ul>
                        {skill1 ? <li>{skill1}</li>: <li>Nothing</li>}
                        {skill2 ? <li>{skill2}</li>: <li>Nothing</li>}
                        {skill3 ? <li>{skill3}</li>: <li>Nothing</li>}

                        </ul>

                </div>

                

                
                {/* <button onClick={deleteHandler(props._id)} >Adobt {name}</button> */}
                <button  onClick={ e => {deleteHandler(props._id)}} className="btn btn-danger">Adopt this pet!</button>
                <button  id="button" className="btn btn-success">Like this pet</button>


                    </div>




                </div>
            </div>


        </div>

         
    )

}

export default Info