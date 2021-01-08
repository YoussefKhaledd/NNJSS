import React,{useState,setState} from 'react'
import NavigationBar from './ACNavigationBar'
import axios from 'axios'

import {Row,Col, Navbar,Dropdown,Button} from 'react-bootstrap';



export default function SendChangeOff() {
    const [day,setDay] = useState();

    var currDay = "Choose day"
    {if(day!=null) currDay=day}
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
        <Navbar.Brand>Send A Change Day Off Request </Navbar.Brand>
        <Row>
        <Col><Navbar.Brand>Day: </Navbar.Brand></Col>
        <Col>
        <Dropdown >
  <Dropdown.Toggle variant="success" id="dropdown-basic">
      {currDay}
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
<Button variant="dark" onClick=
{e =>
  axios.post('http://localhost:5000/sendChangeOff',
  {
    body:{dayOff: day}, 
  headers: {'auth-token': localStorage.getItem('auth-token')  }
}
  )
} >Send</Button>
        </div>
    )
}
}
