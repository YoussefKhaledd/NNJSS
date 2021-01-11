import  { Component,useState } from 'react'; 
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { MDBRow, MDBCol, MDBIcon,MDBBtn,MDBInput,MDBDropdownItem,MDBDropdown,MDBDropdownMenu,MDBDropdownToggle, MDBBtnGroup } from "mdbreact";
import 'mdbreact/dist/css/mdb.css';
import { useHistory } from 'react-router-dom';
import './styles.css'
import axios from 'axios'  
import '../../App.css' 
import { left } from '@popperjs/core';


export default function CheckHoursOrDays() {
  const [staffId, setStaffId] = useState('')
  const [hours, setHours] = useState("")
  const [dayz, setDayz] = useState('')
  const[viewState1,setViewState1]=useState('collapse')
  const[viewState2,setViewState2]=useState('collapse')

  const checkHours = async (id) => {
    axios.post('http://localhost:5000/checkStaffHours', 
      {
          staffId:id,
      },
      {  
          headers: {
          'auth-token': localStorage.getItem('auth-token'),
          }
      }).then(response => {
        setHours(response.data)
          //console.log(hours)
        }).catch(error => {
              console.log(error.response)
        })}
 const checkDays = async (id1) => {
    checkHours(id1)
            axios.post('http://localhost:5000/checkStaffMissingDays', 
              {
                  staffId:id1,
              },
              {  
                  headers: {
                  'auth-token': localStorage.getItem('auth-token'),
                  }
              }).then(response => {
                  setDayz(response.data)
                  setViewState2('collapse show')
                  setViewState1('collapse show')
                }).catch(error => {
                      console.log(error.response)
                })
               
            }


  let history = useHistory();
    return (
        
        <div>
        <div className="jumbotron" style={{paddingTop:20,backgroundColor:"#94B4C9"}}>
        <div class="container">
            <h1  style={{fontFamily:"Franklin Gothic Medium",fontSize:30,textAlign:"left",padding:0}}><MDBIcon icon="table" /> Missing Hours and Days for Staff</h1>
            </div>
            <h1 style={{textAlign:left,marginLeft:50}}>
            <MDBBtn size="sm" color="blue-grey lighten-4" onClick={()=>history.push('/HRHomePage')}>
            <MDBIcon icon="home" size="lg"/></MDBBtn>
            <MDBBtn  color="blue-grey lighten-4" size="sm" onClick={()=>history.push('/Profile')}>
            <MDBIcon far icon="user" size="lg" /></MDBBtn>
            </h1>
      </div>
      
      <div class="container"  style={{marginLeft:0}}>
      <div class="row">
      <div class=" accordion col-md-4">
          <p className="text-salary">Enter the staff ID</p>
          <div className="container-salary">  <MDBInput  label="Staff ID" onChange={event=>setStaffId(event.target.value)}/></div>     
        <h1 style={{textAlign:left}}>
        <MDBBtn style={{marginLeft:-5}} color="blue-grey" onClick={()=>checkDays(staffId)} >View Missing Hours and Days</MDBBtn>
        </h1>
        </div>
        <div class="accordion col-md-3" style={{marginLeft:-100}}>
        <div class={viewState1}>
        <div class="container" className="container-att">
        <text style={{fontWeight:"bold",textAlign:"center",fontSize:"10px"}}>{dayz}</text>
        </div>
        </div>
        </div>
        <div class={viewState2} style={{textAlign:"right",marginLeft:800,marginTop:-415}}>
        <div class="container" className="container-att2">
        <text style={{fontWeight:"bold",textAlign:"center",fontSize:"10px"}}>{hours}</text>
        </div>
        </div>      
</div>
</div>
      </div>

    
    )
}




