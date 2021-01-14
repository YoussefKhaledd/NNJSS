import React,{useState} from 'react'
import Nav from './CINavBar.component'
import axios from 'axios'
import { Container,Button} from 'react-bootstrap'
import TableScrollbar from 'react-table-scrollbar';
import '../HD/hdComponent.css'


function getAllStaffMem(list){
    if(list!==undefined && list.length>0&&list!==null){
    return list.map(elem =>{
      return(
        
      <tr>
        <td>{elem.staffName}</td>
         <td>{elem.staffId}</td>
         <td>{elem.email}</td>
         <td>{elem.dayOff}</td>
         <td>{elem.officeLocation}</td>
         <td>{elem.staffAge}</td>
         <td>{elem.staffGender}</td>
        
        
      </tr>
      )
    })
  }
  else{
    return "";
  }
    
  
  }

export default function StaffMembsOfCourse() {
    const [state,setState] = useState([])
    const [course,setCourse]=useState("")
    const [Errmess,setErrMessage] = useState('');
    if(localStorage.getItem('auth-token') === null){
        window.location.href = "/login";
    }
    else{
        const handleSubmit = async e=>{
            e.preventDefault();
    axios.post('http://localhost:5000/viewStaff',
    {
        courseId: course
    },
     {  
        headers: {
        'auth-token': localStorage.getItem('auth-token')
        }
    })
      .then(res =>{
          setState(res.data);


      })
      .catch(error =>{
        console.log(error);
      })
        }
    

    return (
        <div>
        <Nav />
        <Container style={{height:'300px'}} className="hdCompBig">
              <h3 className="TextLeft">
        Staff Members Of Specific Course </h3>
        <h5 className="TextLeftSub"> Course ID : <span style={{display:'inline-block'}}>
        <input onChange = {e =>setCourse(e.target.value)} ></input></span>
        <span style={{display:'inline-block',marginLeft:'25px'}}>
        <Button variant="primary" onClick={handleSubmit}> View</Button>
        </span></h5>
        <TableScrollbar rows={3}>
       <table className="table table-sm table-dark">
        <thead className = "thead-light">
          <tr>
            <th>Staff Name</th>
            <th>Staff Id</th>
            <th>Email</th>
            <th>Day Off</th>
            <th>Office Location</th>
            <th>Staff Age</th>
            <th>Staff Gender</th>
           
          </tr>
        </thead>
        <tbody>
          {getAllStaffMem(state)}
        </tbody>

        </table>
        </TableScrollbar>
        </Container>
        </div>
    )
}}