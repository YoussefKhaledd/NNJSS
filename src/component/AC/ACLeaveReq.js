import React,{useState} from 'react'
import NavigationBar from './ACNavigationBar'
import axios from 'axios'

import {Tabs,Tab,FormControl,Row,Col, Navbar,Dropdown,Button} from 'react-bootstrap';

function dayMonthReason(){
    
    const days = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
    const months = [1,2,3,4,5,6,7,8,9,10,11,12];
    return (
        <div><Row>
        <Col><Navbar.Brand>Day: </Navbar.Brand></Col>
        <Col>
        <Dropdown >
  <Dropdown.Toggle variant="Day" id="dropdown-basic">
    1
  </Dropdown.Toggle>

  <Dropdown.Menu>
    {days.map(day => {
          return (
            <Dropdown.Item value={Object.values(day)}>
              {day}
              {Object.keys(day)}{" "}
              </Dropdown.Item>
          );
        })}


  </Dropdown.Menu>
</Dropdown>
</Col>
</Row>

<Row>
        <Col><Navbar.Brand>Month: </Navbar.Brand></Col>
        <Col>
        <Dropdown >
  <Dropdown.Toggle variant="Month" id="dropdown-basic">
    1
  </Dropdown.Toggle>

  <Dropdown.Menu>
    {months.map(month => {
          return (
            <Dropdown.Item value={Object.values(month)}>
              {month}
              {Object.keys(month)}{" "}
              </Dropdown.Item>
          );
        })}


  </Dropdown.Menu>
</Dropdown>
</Col>
</Row>


<Row>
        <Col><Navbar.Brand>Reason: </Navbar.Brand></Col>
        <Col><FormControl  placeholder="Eg: Travel"  aria-label="Username"  aria-describedby="basic-addon1"/></Col>

</Row>
</div>
    )
}

export default function SendLeaveReq() {

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
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
        <Tab eventKey="annual" title="annual">

        {dayMonthReason()}


<Button variant="dark">Send</Button>

  </Tab>
  <Tab eventKey="accidental" title="accidental">
  {dayMonthReason()}


  <Button variant="dark">Send</Button>
  </Tab>
  <Tab eventKey="sick" title="sick">
      
  {dayMonthReason()}
  
<Button variant="dark">Send</Button>
  </Tab> 
   <Tab eventKey="compensation" title="compensation">
       
  {dayMonthReason()}

<Button variant="dark">Send</Button>
  </Tab>
  <Tab eventKey="maternity" title="maternity">
      
  {dayMonthReason()}

<Button variant="dark">Send</Button>
  </Tab>
</Tabs>
        </div>
    )
}
}