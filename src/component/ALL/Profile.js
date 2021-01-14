
import axios from 'axios'
import React,{useState,useEffect} from 'react'
import {MDBIcon,MDBBtn} from "mdbreact";
import CollapsedBarOfLoctaion from '../HR/CollapsedBar'
import { useHistory } from 'react-router-dom';

export default function ViewAll() {
    let history = useHistory();
    const [reqs,setReqs] = useState('')
        

    useEffect(async ()=>{
        axios.get('http://localhost:5000/profile', {  
          headers: {
          'auth-token': localStorage.getItem('auth-token')
          }
      })
        .then(res =>{
          setReqs(res.data);
      
        })
        .catch(error =>{
          console.log(error);
        })
    })

    if(localStorage.getItem('auth-token') === null){
        window.location.href = "/login";
    }
    else{
    
    return (
        <div>
        <div class="jumbotron jumbotron-fluid" style={{backgroundColor:"#94B4C9"}}>
        <div class="container">
            <h1 style={{fontFamily:"Franklin Gothic Medium",fontSize:50,textAlign:"left",padding:20}}>Profile</h1>
            </div>
            <MDBBtn className="homeBtn" color="blue-grey lighten-4" onClick={()=>history.push('/HRHomePage')}>
            <MDBIcon icon="home" size="lg"/></MDBBtn>
            <MDBBtn  color="blue-grey lighten-4" onClick={()=>history.push('/Profile')}>
            <MDBIcon far icon="user" size="lg" /></MDBBtn>
      </div>
      Name {reqs[0]} ID {reqs[1]} Age {reqs[2]} type {reqs[3]} Salary {reqs[4]} faculty {reqs[5]} department {reqs[6]} 
    </div>
    )
}
}
