import React,{useState} from 'react'
import axios from 'axios';
import Container from 'react-bootstrap/Container'
import {IconContext} from "react-icons"
import { MDBRow, MDBCol, MDBIcon,MDBBtn,MDBDropdownItem,MDBDropdown,MDBDropdownToggle,MDBDropdownMenu,MDBCard,MDBCardHeader, MDBCardBody,MDBCardTitle,MDBCardText,MDBContainer} from "mdbreact";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import NewNav from './HDHOMEPAGENAV.component'



export default function HDHOMEPAGE() {
    const [name,setName] = useState("")
    if(localStorage.getItem('auth-token') === null){
        window.location.href = "/login";
    }
    else{
    axios.get('http://localhost:5000/getHD', {  
        headers: {
        'auth-token': localStorage.getItem('auth-token')
        }
    })
      .then(res =>{
          setName(res.data);


      })
      .catch(error =>{
        console.log(error);
      })}

    return (
        <div>
         <NewNav />
        
        <Container className="HDBACKGRD">
          <div class="container">
     <div class="row">
     <div class="col-sm-4">
     <MDBDropdown dropright>
      <MDBDropdownToggle caret color="primary">
        Course Instructor <MDBIcon icon="edit"  className="ml-1" />
      </MDBDropdownToggle>
      <MDBDropdownMenu basic>
        <MDBDropdownItem href="/AddCI"> Add Course Instructor </MDBDropdownItem>
        <MDBDropdownItem href="/UpdateCI">Update Course Instructor</MDBDropdownItem>
        <MDBDropdownItem href="/DeleteCI">Delete Course Instructor</MDBDropdownItem>
      </MDBDropdownMenu>
    </MDBDropdown>
       <p>Add/Update/Delete Course Instructor</p>
     </div>
     <div class="col-sm-4">
     <MDBDropdown dropright>
      <MDBDropdownToggle caret color="primary">
        Staff <MDBIcon icon="users"   className="ml-1" />
      </MDBDropdownToggle>
      <MDBDropdownMenu basic>
        <MDBDropdownItem href="/StaffMembs"> View All Staff Members in Department </MDBDropdownItem>
        <MDBDropdownItem href="/CourseStaff">View All Staff in specific Course</MDBDropdownItem>
      </MDBDropdownMenu>
    </MDBDropdown>

       <p>Staff members in Department/specific Course</p>
     </div>
     <div class="col-sm-4">
     <MDBDropdown dropright>
      <MDBDropdownToggle caret color="primary">
        View Day Off <MDBIcon icon="edit"  className="ml-1" />
      </MDBDropdownToggle>
      <MDBDropdownMenu basic>
        <MDBDropdownItem href="/ViewDayOffOne"> Specific Staff Member </MDBDropdownItem>
        <MDBDropdownItem href="/ViewDayOff">All Staff Members</MDBDropdownItem>
      </MDBDropdownMenu>
    </MDBDropdown>
       <p>View Staff Day off </p>
     </div>
   </div>
 
   <div class = "row"> 
 
   <div class="col-sm-4" style={{padding:20}}>
   <MDBDropdown dropright>
      <MDBDropdownToggle caret color="primary">
        View Requests <MDBIcon icon="th-list"   className="ml-1" />
      </MDBDropdownToggle>
      <MDBDropdownMenu basic>
        <MDBDropdownItem href="/ChangeDayOffRequests"> Change Day Off Requests</MDBDropdownItem>
        <MDBDropdownItem href="/LeaveRequests">Leave Requests</MDBDropdownItem>
      </MDBDropdownMenu>
    </MDBDropdown>
       <p>View/Add/Update Course</p>
     </div>
     
   <div class="col-sm-4" style={{padding:20}}>
   <MDBBtn rounded size="lg" color="info" href="/ViewCourseCoverage">Course Coverage <MDBIcon icon="spinner"    className="ml-1" /></MDBBtn>
       <p>View Courses Coverage</p>
     </div>
     <div class="col-sm-4" style={{padding:20}}>
   <MDBBtn rounded size="lg" color="info"  href="/ViewTA">Teaching Assignments<MDBIcon icon="chalkboard-teacher"   className="ml-1" /></MDBBtn>
       <p>View Teaching Assignments </p>
     </div>
   </div>
   </div>
   </Container>
   </div>
   
    )
}
