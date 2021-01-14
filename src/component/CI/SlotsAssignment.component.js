import React,{useState} from 'react'
import axios from 'axios'
import { Container,Button} from 'react-bootstrap'
import '../HD/hdComponent.css'
import Nav from './CINavBar.component'
import Dropdown from 'react-bootstrap/Dropdown';
import { Modal,Row } from 'react-bootstrap'
import TableScrollbar from 'react-table-scrollbar';


export default function SlotsAssignment() {
const [message,setMessage]= useState("")
const [state,setState] = useState([])
const [ci,setCi]= useState("")
const [id,setId]=useState("")
const [courses,setCourses]=useState([])
const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true) ;

let selectedC=" Select a course"
if(id!=""){
    selectedC=id
}

function getSlotAssignment(list){
    if(list!==undefined && list.length>0&&list!==null){
    return list.map(elem =>{
      return(
        
      <tr>
        <td>{elem.staffId}</td>
        <td>{elem.staffName}</td>
        <td>{elem.slotLocation}</td>
        <td>{elem.slotDay}</td>
        <td>{elem.slotTiming}</td>
        
      </tr>
      )
    })
  }
  else{
    return "";
  }}
    


const getAllCourses=(list)=>{
    if(list!==undefined && list.length>0&&list!==null){
    return list.map(elem =>{
      return(
        <Dropdown.Item onSelect= {e =>setId(elem)}>{elem}</Dropdown.Item>
      )
    })
  }
  else{
    return "";
  }}

axios.get('http://localhost:5000/getAllCoursesByCI',
{  
    headers: {
    'auth-token': localStorage.getItem('auth-token')
    }
})
  .then(res =>{
      setCourses(res.data);
  })
  .catch(error =>{
    console.log(error);
  })

  const handleSubmit = async e=>{
    e.preventDefault();
     axios.post('http://localhost:5000/slotAssignment',{courseId:id},
{  
headers: {
'auth-token': localStorage.getItem('auth-token')
}
})
.then(res =>{
    if(typeof res.data=='string'){
        setMessage(res.data);
        handleShow();
    }
    else{
        setState(res.data)
    }

  

})
.catch(error =>{
console.log(error);
})
}
    return (
        <div>
        <Nav />
        <Container className="hdComp">
          <h3 className="TextLeft">
    Assigning Course Instructor </h3>
    

    <h5 className="TextLeftSub">Course ID :<span style={{display:'inline-block'}}>
        <Dropdown>
        <Dropdown.Toggle variant="primary" id="dropdown-basic">
        {selectedC}
        </Dropdown.Toggle>
        <Dropdown.Menu>
        {getAllCourses(courses)}
        </Dropdown.Menu>
        </Dropdown></span><span> <Button className='buttonAssign' onClick={handleSubmit}>
            View Slot Assignment
        </Button></span></h5>

     
 

  <Modal show={show} onHide={handleClose} style={{marginTop:'15%'}}>
    <Modal.Header closeButton>
      <Modal.Title style={{textAlign:'center'}}>{message}</Modal.Title>
    </Modal.Header>
  </Modal>

  <TableScrollbar rows={4}>
       <table className="table table-sm table-dark">
        <thead className = "thead-light">
          <tr>
            <th>Staff Id</th>
            <th>Staff Name</th>
            <th>Slot Location</th>
            <th>Slot Day</th>
            <th>Slot Timing</th>
          </tr>
        </thead>
        <tbody>
          {getSlotAssignment(state)}
        </tbody>

        </table>
        </TableScrollbar>


</Container>   
    </div>
)
}