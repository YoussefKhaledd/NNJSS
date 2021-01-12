import React,{useState} from 'react'
import axios from 'axios'
import NavigationBar from './ACNavigationBar'

import {Button,Row,Col, Navbar, FormControl,Dropdown} from 'react-bootstrap';

const sendSlotLinking = async (day,slot,location,course) => {
  if(day=="Choose Day")
  return alert("please choose a day")

  if(slot=="Choose Slot")
  return alert("please choose a slot")

  axios.post('http://localhost:5000/sendSlotLinking', 
    {
      courseId:course,
      day:day,
      timing:slot,
      slotlocation:location,
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

export default function AddLocation() {
  const [day,setDay] = useState("Choose Day");
  const [slot,setSlot] = useState("Choose Slot");
  const [location,setLocation] = useState();
  const [course,setCourse] = useState();
    if(localStorage.getItem('auth-token') === null){
        window.location.href = "/login";
    }
    else{
      
      return (
        <div>
        <NavigationBar />

        <div>
        <Navbar.Brand>Send A New Slot Linking Request </Navbar.Brand>


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

        <Row>
            <Col><Navbar.Brand>Location: </Navbar.Brand></Col>
             <Col> <FormControl  placeholder="Location" onChange={e => setLocation(e.target.value)}/></Col>
        </Row>

        <Row>
            <Col><Navbar.Brand>Course ID: </Navbar.Brand></Col>
             <Col> <FormControl  placeholder="Course ID" onChange={e => setCourse(e.target.value)}/></Col>
        </Row>
        <Button variant="dark" onClick= {()=>sendSlotLinking(day,slot,location,course)} >Send</Button>{' '}

        </div>

        </div>
    )
}

}