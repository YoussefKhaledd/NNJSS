import axios from 'axios'
import TableScrollbar from 'react-table-scrollbar';
import { Container,Button} from 'react-bootstrap'
import React,{useState} from 'react'
import '../HD/hdComponent.css'
import Nav from './CINavBar.component'


function getCourseCoverage(list){
    if(list!==undefined && list.length>0&&list!==null){
    return list.map(elem =>{
        if(elem.coverage==null)
        elem.coverage=0;
      return(
        
      <tr>
        <td>{elem.courseId}</td>
        <td>{elem.courseName}</td>
        <td>{elem.coverage}</td>
      </tr>
      )
    })
  }
  else{
    return "";
  }
  }

export default function CoursesCoverage() {
    const [state,setState] = useState([])
    const [message,setMessage]=useState([])
    const [id,setId]=useState([])
    if(localStorage.getItem('auth-token') === null){
        window.location.href = "/login";
    }
    else{
        const handleSubmit = async e=>{
    axios.post('http://localhost:5000/coursesCoverage',{
        courseId:id
    },
    {  
        headers: {
        'auth-token': localStorage.getItem('auth-token')
        }
    })
      .then(res =>{
          console.log(res.data)
          setState(res.data);


      })
      .catch(error =>{
        console.log(error);
      })}
    return (
        <div>
        <Nav />
        <Container style={{height:'300px'}} className="hdCompBig">
              <h3 className="TextLeft">
        View Course Coverage  </h3>
        <h5 className="TextLeftSub"> Course ID : <span style={{display:'inline-block'}}>
        <input onChange = {e =>setId(e.target.value)}></input></span>
        <span style={{display:'inline-block',marginLeft:'25px'}}>
        <Button variant="primary" onClick = {handleSubmit}>View</Button></span></h5>
        <TableScrollbar rows={3}>
       <table className="table table-sm table-dark">
        <thead className = "thead-light">
          <tr>
             <th>Course Id</th>
            <th>Course Name</th>
            <th>Course Coverage</th>
          </tr>
        </thead>
        <tbody>
          {getCourseCoverage(state)}
        </tbody>

        </table>
        </TableScrollbar>
        </Container>
        </div>
    )
}}
