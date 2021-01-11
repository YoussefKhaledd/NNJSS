import  { Component,useState } from 'react'; 
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { MDBRow, MDBCol, MDBIcon,MDBBtn,MDBInput,MDBDropdownItem,MDBDropdown,MDBDropdownMenu,MDBDropdownToggle, MDBBtnGroup } from "mdbreact";
import 'mdbreact/dist/css/mdb.css';
import { useHistory } from 'react-router-dom';
import './styles.css'
import axios from 'axios'  
import '../../App.css' 


export default function UpdateSalary() {
  const [staffId, setStaffId] = useState('')
  const [salary, setSalary] = useState('')

  let history = useHistory();
    return (
        <div>
        <div className="jumbotron" style={{paddingTop:20,backgroundColor:"#94B4C9"}}>
        <div class="container">
            <h1  style={{fontFamily:"Franklin Gothic Medium",fontSize:30,textAlign:"left",padding:0}}><MDBIcon icon="file-invoice-dollar" /> Update Salary</h1>
            </div>
            <MDBBtn className="homeBtn" size="sm" color="blue-grey lighten-4" onClick={()=>history.push('/HRHomePage')}>
            <MDBIcon icon="home" size="lg"/></MDBBtn>
            <MDBBtn  color="blue-grey lighten-4" size="sm" onClick={()=>history.push('/Profile')}>
            <MDBIcon far icon="user" size="lg" /></MDBBtn>
      </div>
      <div class="container">
          <p className="text-salary">Select the employee</p>
          <div className="container-salary">  <MDBInput  label="Staff ID" onChange={event=>setStaffId(event.target.value)}/></div>     
        <div>
        <p className="text-salary">Enter the new salary</p>
        <div className="container-salary">  <MDBInput  label="Salary" onChange={event=>setSalary(event.target.value)}/></div>     
        </div>
        <div className="container-update">
            <MDBBtn onClick={()=>updateSalary(staffId,salary)} >Update</MDBBtn>
        </div>

      </div>

     
      </div>

    
    )
}
const updateSalary = async (id,sal) => {
  axios.post('http://localhost:5000/updateSalary', 
    {
        staffId:id,
        salary:sal
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
