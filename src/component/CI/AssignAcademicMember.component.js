import React,{useState} from 'react'
import axios from 'axios'
import { Container,Button} from 'react-bootstrap'
import '../HD/hdComponent.css'
import Nav from './CINavBar.component'
import Dropdown from 'react-bootstrap/Dropdown';
import { Modal,Row } from 'react-bootstrap'

export default function AssignAcademicMember() {
    const [state,setState] = useState("")
    const [CourseId,setCourseId]=useState("")
    const [StaffId,setStaffId]=useState("")
    const [Day,setDay]=useState("")
    const [Timing,setTiming]=useState("")
    const [Location,setLocation]=useState("")
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true) ;

    let selectedDay="Please Select a Day"
    let selectedTiming="Please Select a Timing"
    if(Day==""){
        selectedDay="Please Select a Day"
    }
    else{
        selectedDay=Day
    }
    if(Timing!=""){
        selectedTiming=Timing
    }
    else{
        selectedTiming="Please Select a Timing"
    }


    if(localStorage.getItem('auth-token') === null){
        window.location.href = "/login";
    }
    else{
    const handleSubmit = async e=>{
    axios.post('http://localhost:5000/assignAcademicMember',{
        staffId:StaffId , courseId: CourseId,day:Day,timing : Timing , location :Location
    },
    {  
        headers: {
        'auth-token': localStorage.getItem('auth-token')
        }
    })
      .then(res =>{
          console.log(res.data)
          setState(res.data);
          handleShow();


      })
      .catch(error =>{
        console.log(error);
      })}
    return (
        <div>
        <Nav />
        <Container style={{height:'420px'}} className="hdCompBig">
              <h3 className="TextLeft">
              Assign Academic Member to Unassigned slots  </h3>
        <h5 className="TextLeftSub"> Course ID : <span style={{display:'inline-block'}}>
        <input required='true' onChange = {e =>setCourseId(e.target.value)}></input></span></h5>

        <h5 className="TextLeftSub"> Staff ID : <span style={{display:'inline-block'}}>
        <input required='true' onChange = {e =>setStaffId(e.target.value)}></input></span></h5>

        <h5 className="TextLeftSub">Select Day : <span style={{display:'inline-block'}}>
        
            <Dropdown>
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
            {selectedDay}
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item onSelect= {e =>setDay("Saturday")}>Saturday</Dropdown.Item>
                <Dropdown.Item onSelect= {e =>setDay("Sunday")}>Sunday</Dropdown.Item>
                <Dropdown.Item onSelect= {e =>setDay("Monday")}>Monday</Dropdown.Item>
                <Dropdown.Item onSelect= {e =>setDay("Tuesday")}>Tuesday</Dropdown.Item>
                <Dropdown.Item onSelect= {e =>setDay("Wednesday")}>Wednesday</Dropdown.Item>
                <Dropdown.Item onSelect= {e =>setDay("Thursday")}>Thursday</Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown></span></h5>

            <h5 className="TextLeftSub"> Select Timing : <span style={{display:'inline-block'}}>
        
            <Dropdown>
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
            {selectedTiming}
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item onSelect= {e =>setTiming("first")}>First</Dropdown.Item>
                <Dropdown.Item onSelect= {e =>setTiming("second")}>Second</Dropdown.Item>
                <Dropdown.Item onSelect= {e =>setTiming("third")}>Third</Dropdown.Item>
                <Dropdown.Item onSelect= {e =>setTiming("fourth")}>Fourth</Dropdown.Item>
                <Dropdown.Item onSelect= {e =>setTiming("fifth")}>Fifth</Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown></span></h5>

            <h5 className="TextLeftSub">Please State Location : <span style={{display:'inline-block'}}>
        <input required='true' onChange = {e =>setLocation(e.target.value)}></input></span><span > <Button className='buttonAssign'onClick={handleSubmit}>
        Assign Academic Member
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
