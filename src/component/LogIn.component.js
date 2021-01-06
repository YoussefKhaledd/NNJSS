import React, { useState } from "react";
import { BrowserRouter as Router} from "react-router-dom";
import { Container } from 'react-bootstrap';
import image from './logo1.png'
import axios from 'axios';
import '../App.css'



export default function LogIn(props){ 
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();

 
     const handleSubmit = async e=>{
       e.preventDefault();
       axios.post('http://localhost:5000/login',{
       email: email,
       password: password
     })
     .then(res =>{
       // console.log(res)
       localStorage.setItem('auth-token', res.data.token)
       if((String)(res.data.type) == "hd"){
       window.location.href = "/HODHomePage";
     }
     else if(res.data.type == "ta"){
       window.location.href = "/TAHomePage";
 
     }
     else if(res.data.type == "ci"){
       window.location.href = "/CIHomePage";
 
     }
 
     else if(res.data.type == "cc"){
       window.location.href = "/CCHomePage";
 
     }
     else {
       console.log(res.data.type)
       window.location.href = "/HRHomePage";
 
     }
     })
     .catch(error =>{
       console.log(error)
     })
     }
        return (
            <Router>
            <Container className="containers">
            <form  onSubmit={handleSubmit}>

            <img src={image} alt="Logo" height='100px' />

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email"  onChange={e => setEmail(e.target.value)} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password"  onChange={e => setPassword(e.target.value)}/>
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block">Sign in</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
            </Container>
            </Router>
        );
    
        }