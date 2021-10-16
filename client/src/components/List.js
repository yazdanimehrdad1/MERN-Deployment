import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link, navigate } from '@reach/router';

const List= () => {

    const [pets, setPets] = useState([])


    useEffect(() => {
        axios.get("http://localhost:8000/api/project")
        .then( res=>{
            console.log(res);
            setPets(res.data)
        })
        .catch( err => {
            console.log(err)
        })
    }, [])

    const handleEditClick = (id)=>{
        navigate(`/edit/${id}`)
    }

    const handleDetailsClick = (id)=>{
        navigate(`/pet/${id}`)

    }


    
  


    return (
        <div className="container">



            <div className="row">
                <div className="col-12">


                {/* <h1>Pet Shelter</h1> */}
                <h3>These pets are looking for a good home</h3>
                <Link to="/new">Add a pet to the shelter</Link>
                
                <table className="table table-striped">
                    <thead >
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Actions </th>
                    </tr>
                    </thead>
                    <tbody>
                    {pets.map((element, index) => (
                        <tr key={index}>
                        <td>{element.name}</td>
                        <td>{element.type}</td>
                
                        <td>
                            <button
                            type="button"
                            className="btn btn-warning"
                            onClick={() => handleEditClick(element._id)}
                            >
                            Edit
                            </button>
                            
                            <button
                            id="right-form-btn"
                            type="button"
                            className="btn btn-danger"
                            onClick={() => handleDetailsClick(element._id, index)}
                            >
                            Details
                            </button>
                            {/* <td><Link to={`/pet/${element._id}`}>Details </Link></td> */}
                        </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                </div>
            </div>


          
        </div>
    )

}

export default List