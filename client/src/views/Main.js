import React, {useEffect, useState } from 'react';
import axios from 'axios';
import Form from '../components/Form';
import List from '../components/List';
import Info from '../components/Info'; 
import EditForm from '../components/EditForm';
import { Router, Link } from '@reach/router';


const Main = ()=>{

    return(
        <div>

            <div className="row">
                <div className="col-6">
                    <h1>Pet Shelter</h1>
                </div>
                  
                <div className="container col-4">
                    
                    <Link to="/">Home</Link> | 
                    <Link to="/new"> Add a pet to the shelter</Link>
                </div>
                
            </div>


            <Router>
                <List path="/" />
                <Form path="/new" />
                <Info path="/pet/:_id" />
                <EditForm path="/edit/:_id" />

            </Router>
        </div>
    )

}


export default Main




        
