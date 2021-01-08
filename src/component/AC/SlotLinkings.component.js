import React,{useState} from 'react'
import axios from 'axios'
import NavigationBar from './ACNavigationBar'

import {Button,Row,Col, Navbar, FormControl,Dropdown} from 'react-bootstrap';

export default function AddLocation() {
    const [state,setState] = useState([])
    if(localStorage.getItem('auth-token') === null){
        window.location.href = "/login";
    }
    else{
    axios.get('http://localhost:5000/viewSchedule', {  
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
      
      return (
        <div>
        <NavigationBar />

        <div>
        <Navbar.Brand>MEHTAGA TAZBEET</Navbar.Brand>
        <Navbar.Brand>Send A New Slot Linking Request </Navbar.Brand>


        <Row>
        <Col><Navbar.Brand>Day: </Navbar.Brand></Col>
        <Col>
        <Dropdown >
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Saturday
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item eventKey="option-1">Saturday</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Sunday</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Monday</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Tuesday</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Wednesday</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Thursday</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
</Col>
</Row>

<Row>
        <Col><Navbar.Brand>Slot timing: </Navbar.Brand></Col>
        <Col>
        <Dropdown >
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    first
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">first</Dropdown.Item>
    <Dropdown.Item href="#/action-1">second</Dropdown.Item>
    <Dropdown.Item href="#/action-1">third</Dropdown.Item>
    <Dropdown.Item href="#/action-1">fourth</Dropdown.Item>
    <Dropdown.Item href="#/action-1">fifth</Dropdown.Item>
      </Dropdown.Menu>
</Dropdown>
</Col>
</Row>

        <Row>
            <Col><Navbar.Brand>Location: </Navbar.Brand></Col>
             <Col> <FormControl  placeholder="Location"/></Col>
        </Row>

        <Row>
            <Col><Navbar.Brand>Course ID: </Navbar.Brand></Col>
             <Col> <FormControl  placeholder="Course ID"/></Col>
        </Row>
        <Button variant="dark">Send</Button>{' '}

        </div>

        </div>
    )
}

}