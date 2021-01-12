import React,{useState,setState} from 'react'
import NavigationBar from './ACNavigationBar'
import axios from 'axios'

import {Row,Col, Navbar,Dropdown,Button} from 'react-bootstrap';

const sendChangeOffRequest = async (day) => {
  axios.post('http://localhost:5000/sendChangeOff', 
    {
        dayOff:day,
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


export default function SendChangeOff() {
    const [day,setDay] = useState("Choose day");
    if(localStorage.getItem('auth-token') === null){
        window.location.href = "/login";
    }

    else{

    return (
        <div>
        <NavigationBar />
        <Navbar.Brand>Send A Change Day Off Request </Navbar.Brand>
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
<Button onClick={()=>sendChangeOffRequest(day)}  >Send</Button>
        </div>
    )
}
}
