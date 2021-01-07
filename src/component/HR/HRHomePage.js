import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import axios from 'axios';
import Container from 'react-bootstrap/Container'
import {IconContext} from "react-icons"
import { MDBRow, MDBCol, MDBIcon,MDBBtn } from "mdbreact";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import HrNav from './NavBar'



export default function HRHomePage() {
    
    return (

        <div>
       <div class="jumbotron text-center " style={{backgroundColor:"#385E77"}}>
  <h1 class="font-weight-bold">Welcome</h1>
  <HrNav />

</div>
         <div class="container">
    <div class="row">
    <div class="col-sm-4">
      <MDBBtn rounded size="lg" color="info" >Location <MDBIcon icon="location-arrow"  className="ml-1" /></MDBBtn>
      <p>View/Add/Update Location</p>
    </div>
    <div class="col-sm-4">
    <MDBBtn rounded size="lg" color="info" >Staff <MDBIcon icon="users"   className="ml-1" /></MDBBtn>
      <p>View/Add/Update Staff member</p>
    </div>
    <div class="col-sm-4">
    <MDBBtn rounded size="lg" color="info" >Department <MDBIcon icon="building"   className="ml-1" /></MDBBtn>
      <p>View/Add/Update Department</p>
    </div>
  </div>

  <div class = "row"> 

  <div class="col-sm-4" style={{padding:20}}>
  <MDBBtn rounded size="lg" color="info" >Department <MDBIcon icon="book"   className="ml-1" /></MDBBtn>
      <p>View/Add/Update Course</p>
    </div>
    
  <div class="col-sm-4" style={{padding:20}}>
  <MDBBtn rounded size="lg" color="info" >Faculty <MDBIcon icon="ethernet"    className="ml-1" /></MDBBtn>
      <p>View/Add/Update Faculty</p>
    </div>
    <div class="col-sm-4" style={{padding:20}}>
  <MDBBtn rounded size="lg" color="info" >Manual Sign In / Sign Out <MDBIcon icon="sign-in-alt"   className="ml-1" /></MDBBtn>
      <p>Add Manual Sign In/Out</p>
    </div>
  </div>
  <div class="row">
  <div class="col-sm-4" style={{padding:20}}>
  <MDBBtn rounded size="lg" color="info" >Check Attendance <MDBIcon far icon="list-alt"  className="ml-1" /></MDBBtn>
      <p>View All Staff Attendance</p>
      </div>
      <div class="col-sm-4" style={{padding:20}}>
  <MDBBtn rounded size="lg" color="info" > Staff Missing Hours <MDBIcon icon="calendar-alt"    className="ml-1" /></MDBBtn>
      <p>Checks all the staff missing hours and days</p>
  </div>
  <div class="col-sm-4" style={{padding:20}}>
  <MDBBtn rounded size="lg" color="info" > Update salary <MDBIcon icon="file-invoice-dollar"   className="ml-1" /></MDBBtn>
      <p>Update salary for a staff</p>
  </div>
</div>
            
        </div>
        </div>
    )
}

