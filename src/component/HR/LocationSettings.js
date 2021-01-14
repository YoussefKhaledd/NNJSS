import  { Component } from 'react'; 
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { MDBRow, MDBCol, MDBIcon,MDBBtn,MDBInput,MDBDropdownItem,MDBDropdown,MDBDropdownMenu,MDBDropdownToggle, MDBBtnGroup } from "mdbreact";
import 'mdbreact/dist/css/mdb.css';
import CollapsedBarOfLoctaion from './CollapsedBar'
import { useHistory } from 'react-router-dom';


export default function LocationSettings() {
  let history = useHistory();
    return (
        <div>
        <div class="jumbotron jumbotron-fluid" style={{backgroundColor:"#94B4C9"}}>
        <div class="container">
            <h1 style={{fontFamily:"Franklin Gothic Medium",fontSize:50,textAlign:"left",padding:20}}>Location Settings</h1>
            </div>
            <MDBBtn className="homeBtn" color="blue-grey lighten-4" onClick={()=>history.push('/HRHomePage')}>
            <MDBIcon icon="home" size="lg"/></MDBBtn>
            <MDBBtn  color="blue-grey lighten-4" onClick={()=>history.push('/Profile')}>
            <MDBIcon far icon="user" size="lg" /></MDBBtn>
      </div>
      
            <MDBBtn  color="blue-grey lighten-4" onClick={()=>history.push('/UpdateAge')}>Update Age</MDBBtn>
            <MDBBtn  color="blue-grey lighten-4" onClick={()=>history.push('/ResetPassword')}>Reset Password</MDBBtn>
            <MDBBtn  color="blue-grey lighten-4" onClick={()=>history.push('/Sign')}>Sign IN/OUT</MDBBtn>
            <MDBBtn  color="blue-grey lighten-4" onClick={()=>history.push('/ViewAttendance')}>Attendance</MDBBtn>
            <MDBBtn  color="blue-grey lighten-4" onClick={()=>history.push('/MissingDays')}>Missing Day</MDBBtn>
            <MDBBtn  color="blue-grey lighten-4" onClick={()=>history.push('/Hours')}>check Hours</MDBBtn>
    <CollapsedBarOfLoctaion/>
    </div>
    )
}
