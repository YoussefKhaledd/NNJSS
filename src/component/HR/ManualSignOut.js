import  { Component,useState } from 'react'; 
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { MDBRow, MDBCol, MDBIcon,MDBBtn,MDBInput,MDBDropdownItem,MDBDropdown,MDBDropdownMenu,MDBDropdownToggle, MDBBtnGroup } from "mdbreact";
import 'mdbreact/dist/css/mdb.css';
import { useHistory } from 'react-router-dom';
import './styles.css'
import axios from 'axios'  
import '../../App.css' 
import { left } from '@popperjs/core';


export default function ManualSignOut() {
  const [staffId, setStaffId] = useState('')
  const [year, setYear] = useState('')
  const [month, setMonth] = useState('')
  const [day, setDay] = useState('')
  const [checkOutM, setcheckOutM] = useState('')
  const [checkOutH, setcheckOutH] = useState('')

  let history = useHistory();
    return (
        <div>
        <div className="jumbotron" style={{paddingTop:20,backgroundColor:"#94B4C9"}}>
        <div class="container">
            <h1  style={{fontFamily:"Franklin Gothic Medium",fontSize:30,textAlign:"left",padding:0}}><MDBIcon icon="sign-in-alt" /> Manual Sign Out</h1>
            </div>
            <MDBBtn className="homeBtn" size="sm" color="blue-grey lighten-4" onClick={()=>history.push('/HRHomePage')}>
            <MDBIcon icon="home" size="lg"/></MDBBtn>
            <MDBBtn  color="blue-grey lighten-4" size="sm" onClick={()=>history.push('/Profile')}>
            <MDBIcon far icon="user" size="lg" /></MDBBtn>
      </div>
      <div class="container">
          <p className="text-records">Select the Staff ID</p>
          <div className="container-salary">  <MDBInput  label="Staff ID" onChange={event=>setStaffId(event.target.value)}/></div>     
        <div>
        <p className="text-records">Enter the year</p>
        <div className="container-salary">  <MDBInput  label="Year" onChange={event=>setYear(event.target.value)}/></div>     
        </div>
        <div>
        <p className="text-records">Enter the month</p>
        <div className="container-salary">  <MDBInput  label="Month" onChange={event=>setMonth(event.target.value)}/></div>     
        </div>
        <div>
        <p className="text-records">Enter the day</p>
        <div className="container-salary">  <MDBInput  label="Day" onChange={event=>setDay(event.target.value)}/></div>     
        </div>
        <div>
        <p className="text-records">Enter the Check Out Hour</p>
        <div className="container-salary">  <MDBInput label="Hour"  onChange={event=>setcheckOutH(event.target.value)}/></div>     
        </div>
        <p className="text-records">Enter the Check Out Minute</p>
        <div className="container-salary">  <MDBInput label="Minute" onChange={event=>setcheckOutM(event.target.value)}/></div>     
        </div>
        <h1 style={{textAlign:left,marginLeft:70}}>
            <MDBBtn onClick={()=>manualSignOut(staffId,year,month,day,checkOutM,checkOutH)} >Add </MDBBtn>
        </h1>
      </div>

     

    
    )
}

const manualSignOut = async (id,year,month,day,checkOutmin,checkOuthour) => {
        axios.post('http://localhost:5000/manualSignOut', 
          {
            staffId:id,
            year:year,
            month:month,
            day:day,
            checkOuMinute: checkOutmin,
            checkOutHour:checkOuthour
          },
      
          {  
              headers: {
              'auth-token': localStorage.getItem('auth-token'),
              }
          }).then(response => {
            alert(response.data)
          }).catch(error => {
                alert("Error: "+error.response.data)
            })}    