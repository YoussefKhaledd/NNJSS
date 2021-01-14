import React,{useState} from 'react'
import axios from 'axios'
import { Container,Button} from 'react-bootstrap'
import '../HD/hdComponent.css'
import Nav from './CINavBar.component'
import Dropdown from 'react-bootstrap/Dropdown';
import { Modal,Row } from 'react-bootstrap'



export default function UpdateAC() {
    const [state,setState] = useState("")
    const [CourseId,setCourseId]=useState("")
    const [StaffId,setStaffId]=useState("")
    const [StaffIdOfUpdated,setStaffIdOfUpdated]=useState("")
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true) ;

    if(localStorage.getItem('auth-token') === null){
        window.location.href = "/login";
    }
    else{
    const handleSubmit = async e=>{
    axios.post('http://localhost:5000/updateAssignAcademicMember',{ staffId:StaffId , courseId : CourseId,newStaffId:StaffIdOfUpdated
    },
    {  
        headers: {
        'auth-token': localStorage.getItem('auth-token')
        }
    })
      .then(res =>{
          setState(res.data);
          handleShow();


      })
      .catch(error =>{
        console.log(error);
      })}
    return (
        <div>
        <Nav />
        <Container style={{height:'250px'}} className="hdCompBig">
              <h3 className="TextLeft">
              Update An Assignment Of An Academic Member To A Course  </h3>
        <h5 className="TextLeftSub"> Course ID : <span style={{display:'inline-block'}}>
        <input required='true' onChange = {e =>setCourseId(e.target.value)}></input></span></h5>

        <h5 className="TextLeftSub">Deleting Member Staff ID  : <span style={{display:'inline-block'}}>
        <input required='true' onChange = {e =>setStaffId(e.target.value)}></input></span></h5>

            <h5 className="TextLeftSub">Replacment Member Staff ID  : <span style={{display:'inline-block'}}>
        <input required='true' onChange = {e =>setStaffIdOfUpdated(e.target.value)}></input></span><span > <Button className='buttonAssign'onClick={handleSubmit}>
        Update Assignment
      </Button></span></h5>


      <Modal show={show} onHide={handleClose} style={{marginTop:'15%'}}>
        <Modal.Header closeButton>
          <Modal.Title style={{textAlign:'center'}}>{state}</Modal.Title>
        </Modal.Header>
      </Modal>



        </Container>
        </div>
    )
}
}