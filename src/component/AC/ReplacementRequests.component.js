import React,{useState,useEffect} from 'react'
import NavigationBar from './ACNavigationBar'
import axios from 'axios'

import {Button,Row,Col, Navbar, FormControl,Dropdown} from 'react-bootstrap';

const sendReplacement = async (staffId,courseId,day,timing,slotlocation) => {
  if(day=="Choose Day")
  return alert("please choose a day")

  if(timing=="Choose Slot")
  return alert("please choose a slot")

  axios.post('http://localhost:5000/sendReplacement', 
    {
      staffId:staffId,
      courseId:courseId,
      day:day,
      timing:timing,
      slotlocation:slotlocation,
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

      const viewReplacement = (list) => {
        return list.map((elem) =>{ 

        return(
        <tr>
  
          <td>{elem.sender}</td>
          <td>{elem.receiver}</td>
          <td>{elem.slot}</td>
          <td>{elem.receiverStatus}</td>
          <td>{elem.hodStatus}</td>
          
        </tr>
        )
      })
        }


export default function Replacements() {
  const [staff,setStaff] = useState();
  const [course,setCourse] = useState();
  const [day,setDay] = useState("Choose Day");
  const [slot,setSlot] = useState("Choose Slot");
  const [location,setLocation] = useState();
  const [state,setState] = useState([]);

useEffect(()=>{

  axios.get('http://localhost:5000/viewReplacement', {  
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
)
    if(localStorage.getItem('auth-token') === null){
        window.location.href = "/login";
    }

    else{

    return (
      <div>
      <NavigationBar />

      <Navbar.Brand>Send A New Replacement Request </Navbar.Brand>

      <Row>
           <Col><Navbar.Brand>Target Staff ID: </Navbar.Brand></Col>
          <Col><FormControl  placeholder="Eg: AC-1"  aria-label="Username"  aria-describedby="basic-addon1" onChange={e => setStaff(e.target.value)} /></Col>
      </Row>

      <Row>
           <Col><Navbar.Brand>Course ID: </Navbar.Brand></Col>
          <Col><FormControl  placeholder="Eg: CSEN401"  aria-label="Username"  aria-describedby="basic-addon1" onChange={e => setCourse(e.target.value)} /></Col>
      </Row>


      <Row>
           <Col><Navbar.Brand>Location: </Navbar.Brand></Col>
          <Col><FormControl  placeholder="Eg: c7.202"  aria-label="Username"  aria-describedby="basic-addon1" onChange={e => setLocation(e.target.value)} /></Col>
      </Row>

      <Row>
      <Col><Navbar.Brand>Day: </Navbar.Brand></Col>
      <Col>
      <Dropdown >
<Dropdown.Toggle variant="success" id="dropdown-basic">
  {day}
</Dropdown.Toggle>

<Dropdown.Menu>
  <Dropdown.Item onClick={e => setDay("Saturday")}>Saturday</Dropdown.Item>
  <Dropdown.Item onClick={e => setDay("Sunday")}>Sunday</Dropdown.Item>
  <Dropdown.Item onClick={e => setDay("Monday")}>Monday</Dropdown.Item>
  <Dropdown.Item onClick={e => setDay("Tuesday")}>Tuesday</Dropdown.Item>
  <Dropdown.Item onClick={e => setDay("Wednesday")}>Wednesday</Dropdown.Item>
  <Dropdown.Item onClick={e => setDay("Thursday")}>Thursday</Dropdown.Item>
</Dropdown.Menu>
</Dropdown>
</Col>
</Row>

<Row>
      <Col><Navbar.Brand>Slot timing: </Navbar.Brand></Col>
      <Col>
      <Dropdown >
<Dropdown.Toggle variant="success" id="dropdown-basic">
  {slot}
</Dropdown.Toggle>

<Dropdown.Menu>
  <Dropdown.Item onClick={e => setSlot("first")}>First</Dropdown.Item>
  <Dropdown.Item onClick={e => setSlot("second")}>Second</Dropdown.Item>
  <Dropdown.Item onClick={e => setSlot("third")}>Third</Dropdown.Item>
  <Dropdown.Item onClick={e => setSlot("fourth")}>Fourth</Dropdown.Item>
  <Dropdown.Item onClick={e => setSlot("fifth")}>Fifth</Dropdown.Item>
    </Dropdown.Menu>
</Dropdown>
</Col>
</Row>
      <Button variant="dark" onClick={()=>sendReplacement(staff,course,day,slot,location)} >Send</Button>


      <table className="table table-sm table-dark">
        <thead className = "thead-light">
          <tr>
            <th>Sender</th>
            <th>Receiver</th>
            <th>Slot</th>
            <th>Receiver Status</th>
            <th>HOD Status</th>
           
          </tr>
        </thead>
        {viewReplacement(state)}
        </table>

      </div>
    )

    
}
}
