import { MDBRow, MDBCol, MDBIcon,MDBBtn,MDBInput,MDBDropdownItem,MDBDropdown,MDBDropdownMenu,MDBDropdownToggle, MDBBtnGroup } from "mdbreact";
import 'mdbreact/dist/css/mdb.css';
import { useHistory } from 'react-router-dom';
import axios from 'axios'
import React,{useState,useEffect} from 'react'


export default function LocationSettings() {
    let history = useHistory();
    const [pass,setPass] = useState('')
    return (
        <div>
        <div class="jumbotron jumbotron-fluid" style={{backgroundColor:"#94B4C9"}}>
        <div class="container">
            <h1 style={{fontFamily:"Franklin Gothic Medium",fontSize:50,textAlign:"left",padding:20}}>Change Password</h1>
            </div>
            <MDBBtn className="homeBtn" color="blue-grey lighten-4" onClick={()=>history.push('/HRHomePage')}>
            <MDBIcon icon="home" size="lg"/></MDBBtn>
            <MDBBtn  color="blue-grey lighten-4" onClick={()=>history.push('/Profile')}>
            <MDBIcon far icon="user" size="lg" /></MDBBtn>
      </div>
      
      <p className="text-salary">Enter the new Password</p>
          <div className="container-salary">  <MDBInput  label="New Password" onChange={event=>setPass(event.target.value)}/></div>     

          
          <MDBBtn onClick={()=>{
                      axios.put('http://localhost:5000/resetPassword',
                      {
                        password:pass,
                    },
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
          }} >Change Password</MDBBtn>
    </div>
    )
}
