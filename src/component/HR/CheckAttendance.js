import  { Component,useState } from 'react'; 
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { MDBRow, MDBCol, MDBIcon,MDBBtn,MDBInput,MDBDropdownItem,MDBDropdown,MDBDropdownMenu,MDBDropdownToggle, MDBBtnGroup } from "mdbreact";
import 'mdbreact/dist/css/mdb.css';
import { useHistory } from 'react-router-dom';
import './styles.css'
import axios from 'axios'  
import '../../App.css' 
import { left } from '@popperjs/core';


export default function CheckAttendance() {
  const [staffId, setStaffId] = useState('')
  const [monthOfStaff, setMonthOfStaff] = useState('')
  const [view, setview] = useState("")


  const getAtt = async (id,month1) => {
    axios.post('http://localhost:5000/checkStaffAttendance', 
      {
          staffId:id,
          month:month1
      },
      {  
          headers: {
          'auth-token': localStorage.getItem('auth-token'),
          }
      }).then(response => {
          setview(response.data)
          //console.log(view)
        }).catch(error => {
              console.log(error.response)
        })}


  let history = useHistory();
    return (
        <div>
        <div className="jumbotron" style={{paddingTop:20,backgroundColor:"#94B4C9"}}>
        <div class="container">
            <h1  style={{fontFamily:"Franklin Gothic Medium",fontSize:30,textAlign:"left",padding:0}}><MDBIcon icon="table" /> Check Staff attendance</h1>
            </div>
            <h1 style={{textAlign:left,marginLeft:50}}>
            <MDBBtn size="sm" color="blue-grey lighten-4" onClick={()=>history.push('/HRHomePage')}>
            <MDBIcon icon="home" size="lg"/></MDBBtn>
            <MDBBtn  color="blue-grey lighten-4" size="sm" onClick={()=>history.push('/Profile')}>
            <MDBIcon far icon="user" size="lg" /></MDBBtn>
            </h1>
      </div>
      
      <div class="container">
      <div class="row">
      <div class=" col-md-6"> 
          <p className="text-salary">Enter the staff ID</p>
          <div className="container-salary">  <MDBInput  label="Staff ID" onChange={event=>setStaffId(event.target.value)}/></div>     
        <div>
        <p className="text-salary">Enter the month you want to view</p>
        <div className="container-salary">  <MDBInput  label="Month" onChange={event=>setMonthOfStaff(event.target.value)}/></div>     
        </div>
        <h1 style={{textAlign:left}}>
            <MDBBtn onClick={()=>getAtt(staffId,monthOfStaff)} >View</MDBBtn>
        </h1>
        </div>
        <div class="accordion col-md-4" style={{marginTop:-15}}>
        <div class="container" className="container-att">
        <text style={{fontWeight:"bold",textAlign:"center",fontSize:"10px"}}>{view}</text>
        
        </div>
        </div>
</div>
</div>
      </div>

    
    )
}




