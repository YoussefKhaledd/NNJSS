import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import axios from 'axios';
import Container from 'react-bootstrap/Container'
import { MDBRow, MDBCol,MDBDropdownItem,MDBDropdownMenu,MDBDropdown,MDBDropdownToggle, MDBIcon,MDBBtn } from "mdbreact";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { useHistory } from 'react-router-dom';
import{ useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';



// <Link to="/AddLocation" style={{color:"#FFFFFF"}}>Location</Link> example for url
export default function HRHomePage() {
    let history = useHistory();
    return (
        
       
        <div>
       <div class="jumbotron text-center " style={{backgroundColor:"#385E77"}}>
  <h1 class="headerHR">Welcome</h1>
  <nav class="navbar navbar-expand-sm bg-light navbar-light">
 </nav>
</div>
         <div class="container">
    <div class="row">
    <div class="col-sm-4">
    
      <MDBBtn rounded size="" color="info" onClick={() => history.push('/LocationSettings')}>Location <MDBIcon icon="location-arrow"  className="ml-1" /></MDBBtn>

      <p>Add/Update/Delete Location</p>
    </div>
    <div class="col-sm-4">
    <MDBBtn rounded size="" color="info" onClick={() => history.push('/StaffAdjustment')}>Staff <MDBIcon icon="users"   className="ml-1" /></MDBBtn>
      <p>Add/Update/Delete Staff member</p>
    </div>
    <div class="col-sm-4">
    <MDBBtn rounded size="" color="info"onClick={() => history.push('/DepartmentOptions')} >Department <MDBIcon icon="building"   className="ml-1" /></MDBBtn>
      <p>Add/Update/Delete Department</p>
    </div>
  </div>

  <div class = "row"> 

  <div class="col-sm-4" style={{padding:20}}>
  <MDBBtn rounded size="" color="info" onClick={() => history.push('/CoursesOptions')} >Course <MDBIcon icon="book"   className="ml-1" /></MDBBtn>
      <p>Add/Update/Delete Course</p> 
    </div>
    
  <div class="col-sm-4" style={{padding:20}}>
  <MDBBtn rounded size="" color="info" onClick={() => history.push('/FacultyOptions')}>Faculty <MDBIcon icon="ethernet"    className="ml-1" /></MDBBtn>
      <p>Add/Update/Delete Faculty</p>
    </div>
    <div class="col-sm-4" style={{padding:20}}>
  <MDBBtn rounded size="" color="info" onClick={() => history.push('/UpdateSalary')}> Update salary <MDBIcon icon="file-invoice-dollar"   className="ml-1" /></MDBBtn>
      <p>Update salary for a staff</p>
  </div>
  </div>
  <div class="row">
  <div class="col-sm-4" style={{padding:20}}>
  <MDBBtn rounded size="" color="info" onClick={() => history.push('/CheckAttendance')}>Check Attendance <MDBIcon far icon="list-alt"  className="ml-1" /></MDBBtn>
      <p>View All Staff Attendance</p>
      </div>
      <div class="col-sm-4" style={{padding:20}}>
  <MDBBtn rounded size="" color="info" onClick={() => history.push('/CheckHoursOrDays')}> Staff Missing Hours <MDBIcon icon="calendar-alt"    className="ml-1" /></MDBBtn>
      <p>Checks all the staff missing hours and days</p>
  </div>
 
  <div class="col-sm-4" style={{padding:20}}>
  <MDBDropdown dropright>
      <MDBDropdownToggle  rounded size="" color="info">
        Manual Records <MDBIcon icon="sign-in-alt"   className="ml-1" />
      </MDBDropdownToggle>
      <MDBDropdownMenu basic>
        <MDBDropdownItem href="/ManualSignOut"> Manual Sign Out</MDBDropdownItem>
        <MDBDropdownItem href="/ManualSignIn">Manual Sign In</MDBDropdownItem>
      </MDBDropdownMenu>
    </MDBDropdown>
      <p>Add Manual Sign In/Out</p>
    </div>
</div>
            
        </div>
        </div>
    )
}

