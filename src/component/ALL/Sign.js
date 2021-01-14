import axios from 'axios'
import React,{useState,useEffect} from 'react'
import {MDBIcon,MDBBtn,MDBInput} from "mdbreact";
import { useHistory } from 'react-router-dom';

export default function ViewAll() {
    let history = useHistory();
    const [age,setAge] = useState('')


    if(localStorage.getItem('auth-token') === null){
        window.location.href = "/login";
    }
    else{
    
    return (
        <div>
        <div class="jumbotron jumbotron-fluid" style={{backgroundColor:"#94B4C9"}}>
        <div class="container">
            <h1 style={{fontFamily:"Franklin Gothic Medium",fontSize:50,textAlign:"left",padding:20}}>Sign in/ Sign Out</h1>
            </div>
            <MDBBtn className="homeBtn" color="blue-grey lighten-4" onClick={()=>history.push('/HRHomePage')}>
            <MDBIcon icon="home" size="lg"/></MDBBtn>
            <MDBBtn  color="blue-grey lighten-4" onClick={()=>history.push('/Profile')}>
            <MDBIcon far icon="user" size="lg" /></MDBBtn>

      </div>

                    <MDBBtn onClick={()=>{
                                axios.get('http://localhost:5000/signIn',
                                {
                                    headers: {
                                    'auth-token': localStorage.getItem('auth-token')
                                    }
                                })
                                .then(res =>{
                                    alert(res.data);
                                
                                })
                                .catch(error =>{
                                    alert(error);
                                })
                    }} >Sign In </MDBBtn>


                    <MDBBtn onClick={()=>{
                      axios.get('http://localhost:5000/signOut',
                      {  
                        headers: {
                        'auth-token': localStorage.getItem('auth-token')
                        }
                    })
                      .then(res =>{
                        alert(res.data);
                    
                      })
                      .catch(error =>{
                        alert(error);
                      })
          }} >Sign Out</MDBBtn>
    </div>
    )
}
}