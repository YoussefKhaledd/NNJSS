import React, { useState, useEffect } from 'react';
import './styles.css';
import { MDBRow, MDBCol, MDBIcon,MDBBtn,MDBInput,MDBDropdownItem,MDBDropdown,MDBDropdownMenu,MDBDropdownToggle, MDBBtnGroup } from "mdbreact";
import axios from'axios';
import { useHistory } from 'react-router-dom';
import '../../App.css' 

export default function StaffAdjustment() {
    let history = useHistory();
    const [state, setstate] = useState('collapse');//for the add 
    const [state1, setstate1] = useState('collapse');//for the update
    const [state2, setstate2] = useState('collapse');//for the delete
    const [staffType, setStaffType] = useState('');
    const [staffName, setStaffName] = useState('');
    const [staffAge, setStaffAge] = useState('');
    const [email, setEmail] = useState('');
    const [dayOff, setDayOff] = useState('');
    const [gender, setGender] = useState('');
    const [faculty, setFaculty] = useState('');
    const [department, setDepartment] = useState('');
    const [location, setLocation] = useState('');
    const [salary, setSalary] = useState('');
    const [staffId, setStaffId] = useState('');

    return (
        <div class >
            <div class="jumbotron jumbotron-fluid" style={{backgroundColor:'#3F729B',paddingLeft:20}}>
  <h1 class="display-5" class="text-left" style={{fontSize:60,fontWeight:800,fontFamily:'Microsoft JhengHei',paddingTop:20}}><MDBIcon icon="user" /> Staff Adjustments</h1>
  <div className="homeBtn">
  <MDBBtn className="btn-circle" size="md" color="blue-grey lighten-4" onClick={()=>history.push('/HRHomePage')}>
            <MDBIcon icon="home" size="2x"/></MDBBtn>
            <MDBBtn  className="btn-circle" size="md" color="blue-grey lighten-4" onClick={()=>history.push('/Profile')}>
            <MDBIcon far icon="user" size="2x" /></MDBBtn>
            </div>
  <hr></hr>
        </div>

        <div class="container">
          <div class="row">
        <div class="accordion col-md-4">
        <div class="card" style={{backgroundColor:"lightsteelblue"}}>
    <div class="card-header" id="headingOne">
    <div class={state}>
    <MDBBtn className="btn-circle"  size="sm" color="blue-grey lighten-5"   onClick={()=>{setstate('collapse')}} style={{marginLeft:290,marginTop:0}}><MDBIcon icon="angle-double-up" size="lg"/></MDBBtn>
    </div>
        <button class="btn btn-link btn " type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"
        onClick={()=>{setstate('collapse show')}} >
        <text className="addStaffText">Add Staff</text>
   </button>
    </div>
    <div id="collapseOne" class={state} aria-labelledby="headingOne">
      <div class="">
      <MDBInput  label="Staff Name" onChange={event=>setStaffName(event.target.value)}/>
      <MDBInput type="number" min="1" label="Staff Age" onChange={event=>setStaffAge(event.target.value)}/>
      <MDBInput label="E-mail" onChange={event=>setEmail(event.target.value)}/>
      <MDBInput label="Faculty" onChange={event=>setFaculty(event.target.value)}/>
      <MDBInput label="Department" onChange={event=>setDepartment(event.target.value)}/>
      <MDBInput label="Location Name" onChange={event=>setLocation(event.target.value)}/>
      <MDBInput type ="number" min="1" label="Salary" onChange={event=>setSalary(event.target.value)}/>

      <div>
      <text style={{marginLeft:-40}}>Select Staff Type :</text>
      <select style={{marginLeft:10}}  onChange={(e)=>{
          const type=e.target.value
          setStaffType(type)
          }
          }>
          <option  value='hr'>Human Resources</option>
          <option  value='hd'>Head Of Department</option>
          <option  value='ta'>Teaching Assistant</option>
          <option  value='ci'>Course Instructor</option>
          <option  value='cc'>Course Coordinator</option>
          </select>
</div>

          <div style={{paddingTop:10,marginLeft:-160}}>
          <text>Select Gender:</text>
      <select style={{marginLeft:10}}  onChange={(e)=>{
          const gender1=e.target.value
          setGender(gender1)
          }
          }>
          <option  value='male'>Male</option>
          <option  value='female'>Female</option> 
          </select>
          </div>

          <div style={{paddingTop:10,marginLeft:-175}}>
      <text  >Day Off:</text>
      <select style={{marginLeft:10}}  onChange={(e)=>{
          const type=e.target.value
          setDayOff(type)
          }
          }>
          <option  value='Saturday'>Saturday</option>
          <option  value='Sunday'>Sunday</option>
          <option  value='Monday'>Monday</option>
          <option  value='Tuesday'>Tuesday</option>
          <option  value='Wednesday'>Wednesday</option>
          <option  value='Thursday'>Thursday</option>

          </select>
</div>


     
      </div>
      <div>
        <MDBBtn color="mdb-color lighten-2" size="xl" className="btn-circle" onClick={()=>addNewStaff(staffName,staffAge,gender,staffType,email,salary,faculty,department,dayOff,location)}>Add Staff</MDBBtn>
    </div>
    </div>
    
</div>
       </div>


        {/* --------------------------- */}
        <div class="accordion col-md-4">
        <div class="card" style={{backgroundColor:"lightsteelblue"}}>
    <div class="card-header" id="headingOne">
    <div class={state1}>
    <MDBBtn className="btn-circle"  size="sm" color="blue-grey lighten-5"   onClick={()=>{setstate1('collapse')}} style={{marginLeft:290,marginTop:0}}><MDBIcon icon="angle-double-up" size="lg"/></MDBBtn>
    </div>
        <button class="btn btn-link btn " type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"
        onClick={()=>{setstate1('collapse show')}} >
        <text className="addStaffText">Update Staff</text>
   </button>
    </div>
    <div id="collapseOne" class={state1} aria-labelledby="headingOne">
      <div class="">
      <MDBInput  label="Staff ID" onChange={event=>setStaffId(event.target.value)}/>
      <MDBInput  label="Staff Name" onChange={event=>setStaffName(event.target.value)}/>
      <MDBInput type="number" min="1" label="Staff Age" onChange={event=>setStaffAge(event.target.value)}/>
      <MDBInput label="E-mail" onChange={event=>setEmail(event.target.value)}/>
      <MDBInput label="Faculty" onChange={event=>setFaculty(event.target.value)}/>
      <MDBInput label="Department" onChange={event=>setDepartment(event.target.value)}/>
      <MDBInput label="Location Name" onChange={event=>setLocation(event.target.value)}/>
      <MDBInput type ="number" min="1" label="Salary" onChange={event=>setSalary(event.target.value)}/>

      <div>
      <text style={{marginLeft:-40}}>Select Staff Type :</text>
      <select style={{marginLeft:10}}  onChange={(e)=>{
          const type=e.target.value
          setStaffType(type)
          }
          }>
          <option  value='hr'>Human Resources</option>
          <option  value='hd'>Head Of Department</option>
          <option  value='ta'>Teaching Assistant</option>
          <option  value='ci'>Course Instructor</option>
          </select>
</div>

          <div style={{paddingTop:10,marginLeft:-160}}>
          <text>Select Gender:</text>
      <select style={{marginLeft:10}}  onChange={(e)=>{
          const gender=e.target.value
          setGender(gender)
          }
          }>
          <option  value='male'>Male</option>
          <option  value='female'>Female</option> 
          </select>
          </div>

          <div style={{paddingTop:10,marginLeft:-175}}>
      <text  >Day Off:</text>
      <select style={{marginLeft:10}}  onChange={(e)=>{
          const day=e.target.value
          setDayOff(day)
          }
          }>
          <option  value='Saturday'>Saturday</option>
          <option  value='Sunday'>Sunday</option>
          <option  value='Monday'>Monday</option>
          <option  value='Tuesday'>Tuesday</option>
          <option  value='Wednesday'>Wednesday</option>
          <option  value='Thursday'>Thursday</option>
          </select>
</div>


     
      </div>
      <div>
        <MDBBtn color="mdb-color lighten" className="btn-circle" size="xl" onClick={()=>updateStaff(staffId,staffName,staffAge,gender,staffType,location,dayOff)}> Update staff</MDBBtn>
    </div>
    </div>
    
</div>
       </div>

        {/* ----------------------------- */}
        <div class="accordion col-md-3">
        <div class="card" style={{backgroundColor:"lightsteelblue"}}>
    <div class="card-header" id="headingOne">
    <div class={state2}>
    <MDBBtn className="btn-circle"  size="sm" color="blue-grey lighten-5"   onClick={()=>{setstate2('collapse')}} style={{marginLeft:190,marginTop:0}}><MDBIcon icon="angle-double-up" size="lg"/></MDBBtn>
    </div>
        <button class="btn btn-link btn " type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"
        onClick={()=>{setstate2('collapse show')}} >
        <text className="addStaffText">Delete Staff</text>
   </button>
    </div>
    <div id="collapseOne" class={state2} aria-labelledby="headingOne">
      <MDBInput  label="Staff ID" onChange={event=>setStaffId(event.target.value)}/>
      <div>
      </div>
      <div>
        <MDBBtn  className="btn-circle" size="xl" color="mdb-color lighten"  onClick={()=>deleteStaff(staffId)}> Delete staff</MDBBtn>
    </div>
    </div>
    
</div>
       </div>

</div>
</div>
        </div>
    )
}


const addNewStaff = async (name,age,gender,type,mail,sal,fac,dep,dayoff,loc) => {
    axios.post('http://localhost:5000/addStaff', 
      {
        "staffName":name,
        "staffAge":age,
        "staffGender":gender,
        "staffType":type,
        "email": mail,
        "salary":sal,
        "faculty":fac,
        "department":dep,
        "dayOff":dayoff,
        "locationName":loc
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
  
const updateStaff = async (id,name,age,gen,type,mail,sal,fac,dep,dayoff,loc) => {
            axios.post('http://localhost:5000/updateStaff', 
              {
                staffId:id,
                staffName :name,
                staffAge:age,
                staffGender:gen,
                staffType:type,
                email: mail,
                salary:sal,
                faculty:fac,
                department:dep,
                dayOff:dayoff,
                locationName:loc
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
const deleteStaff = async (id) => {
    axios.post('http://localhost:5000/deleteStaff', 
      {
        staffId:id
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
  
