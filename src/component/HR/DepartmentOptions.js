import  { Component,useState } from 'react'; 
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { MDBRow, MDBCol, MDBIcon,MDBBtn,MDBInput,MDBDropdownItem,MDBDropdown,MDBDropdownMenu,MDBDropdownToggle, MDBBtnGroup } from "mdbreact";
import 'mdbreact/dist/css/mdb.css';
import { useHistory } from 'react-router-dom';
import './styles.css'
import axios from 'axios'

export default function DepartmentOptions() {
  const [state, setState] = useState('collapse')
  const [state1, setState1] = useState('collapse')
  const [state2, setState2] = useState('collapse')
  const [depName, setDepName] = useState('')
  const [fac, setFacName] = useState('')
  const [newDep, setNewDep] = useState('')
  let history = useHistory();
    return (
        <div>
        <div class="jumbotron jumbotron-fluid" style={{backgroundColor:"#94B4C9"}}>
        <div class="container">
            <h1 style={{fontFamily:"Franklin Gothic Medium",fontSize:50,textAlign:"left",padding:20}}><MDBIcon icon="building" /> Department Options</h1>
            </div>
            <MDBBtn className="homeBtn" color="blue-grey lighten-4" onClick={()=>history.push('/HRHomePage')}>
            <MDBIcon icon="home" size="lg"/></MDBBtn>
            <MDBBtn  color="blue-grey lighten-4" onClick={()=>history.push('/Profile')}>
            <MDBIcon far icon="user" size="lg" /></MDBBtn>
      </div>
      <div class="row">
      <div class="container">
      <div class="card" style={{backgroundColor:"slategrey"}}>
    <div class="card-header" id="headingOne" >
      <h2 class="mb-0">
        <MDBBtn onClick={()=>setState("collapse show")}  color="blue" type="button" data-toggle="collapse" aria-expanded="true" aria-controls="collapseOne" >
        <a className="addStaffText">Add Department</a></MDBBtn>
        <div class={state}><MDBBtn className="btn-circle" size="sm" color="blue-grey lighten-5"   onClick={()=>{setState('collapse')}}  style={{marginLeft:1000,marginTop:-120}} ><MDBIcon icon="angle-double-up" size="lg"/></MDBBtn>
        </div>
      </h2>
    </div>
    <div id="collapseOne" class={state} aria-labelledby="headingOne" >
      <div class="card-body">
      <div> <p className="textDep">Enter the Department Name: <input onChange={event=>setDepName(event.target.value)}></input></p> 
      </div>
      <div><p className="textDep"> Enter the Faculty of this Department: <input onChange={event=>setFacName(event.target.value)} ></input></p></div>
      <div><MDBBtn  gradient ="blue" className="btnSubmit" onClick={()=>addDepartment(depName,fac)}>Add</MDBBtn></div>
      </div>
    </div>

    </div>
  </div>
      <div class="container" >
      <div class="card" style={{backgroundColor:"slategrey"}}>
    <div class="card-header" id="headingOne">
      <h2 class="mb-0">
        <MDBBtn color="blue"  type="button" data-toggle="collapse" aria-expanded="true" aria-controls="collapseOne"
        onClick={()=>setState1('collapse show')}>
        <a className="addStaffText">Update Department</a>  </MDBBtn>
        <div class={state1}><MDBBtn className="btn-circle" size="sm" color="blue-grey lighten-5"   onClick={()=>{setState1('collapse')}}  style={{marginLeft:1000,marginTop:-120}} ><MDBIcon icon="angle-double-up" size="lg"/></MDBBtn>
        </div>

      </h2>
    </div>
    <div id="collapseOne" class={state1} aria-labelledby="headingOne">
      <div class="card-body">
      <div> <p className="textDep">Enter the Department Name: <input onChange={event=>setDepName(event.target.value)}></input></p> 
      </div>
      <div> <p className="textDep">Enter the new department name: <input onChange={event=>setNewDep(event.target.value)}></input></p> 
      </div>
      <div><p className="textDep"> Enter the Faculty of this Department: <input onChange={event=>setFacName(event.target.value)} ></input></p></div>
      <div><MDBBtn  gradient ="blue" className="btnSubmit" onClick={()=>updateDepartment(depName,fac,newDep)}>Update</MDBBtn></div>

      </div>
    </div>
  
    </div>
      </div>

      <div class="container">
<div class="card" style={{backgroundColor:"slategrey"}}> 
    <div class="card-header" id="headingOne">
      <h2 class="mb-0">
      
      <MDBBtn color="blue"  type="button" data-toggle="collapse" aria-expanded="true" aria-controls="collapseOne"
        onClick={()=>setState2('collapse show')}>
        <a className="addStaffText">Delete Department</a>  </MDBBtn>
        <div class={state2}><MDBBtn className="btn-circle" size="sm" color="blue-grey lighten-5"   onClick={()=>{setState2('collapse')}}  style={{marginLeft:1000,marginTop:-100}} ><MDBIcon icon="angle-double-up" size="lg"/></MDBBtn>
      </div>

      </h2>
    </div>
    <div id="collapseOne" class={state2} aria-labelledby="headingOne" data-parent="#accordionExample">
      <div class="card-body">
      <div> <p className="textDep">Name of the department to be deleted: <input onChange={event=>setDepName(event.target.value)}></input></p> 
      </div>
      <div><p className="textDep"> Faculty of the department: <input onChange={event=>setFacName(event.target.value)}></input></p></div>
      <div><MDBBtn  gradient ="blue" className="" onClick={()=>deleteDepartment(depName,fac)}>Delete</MDBBtn></div>
      </div>
    </div>
    </div>    
      </div>
      </div>

    </div>
    )
}
const addDepartment = async (name,fac) => {
  axios.post('http://localhost:5000/addDepartment', 
    {
        departmentName :name,
        facultyName:fac
    },

    {  
        headers: {
        'auth-token': localStorage.getItem('auth-token'),
        }
    }).then(response => {
            console.log(response)
      }).catch(error => {
            console.log(error.response)
      })}

const updateDepartment = async (name,fac,depNew) => {
    axios.post('http://localhost:5000/updateDepartment', 
          {
              departmentName :name,
              facultyName:fac,
              newDepartmentName:depNew
          },
      
          {  
              headers: {
              'auth-token': localStorage.getItem('auth-token'),
              }
          }).then(response => {
                  console.log(response)
            }).catch(error => {
                  console.log(error.response)
            })}
            
  const deleteDepartment = async(name,fac)=>{
    axios.post('http://localhost:5000/deleteDepartment', 
    { 
      departmentName :name,
      facultyName:fac
    },
  {  headers: {
      'auth-token': localStorage.getItem('auth-token'),
      }
  }).then(response => {
          console.log(response)
    }).catch(error => {
          console.log(error.response)
    })}
