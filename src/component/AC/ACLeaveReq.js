import React,{useState} from 'react'
import NavigationBar from './ACNavigationBar'
import axios from 'axios'

import {Tabs,Tab,FormControl,Row,Col, Navbar,Dropdown,Button} from 'react-bootstrap';



const sendLeaveReq = async (day,month,year,type,reason) => {
  if(day == 'Choose Day' ||month == 'Choose Month' ||year == 'Choose Year' )
     return alert("Please enter your day, month and year.")
  axios.post('http://localhost:5000/sendLeave', 
    {
        day:day,
        month:month,
        year:year,
        type:type,
        reason:reason

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



export default function SendLeaveReq() {

    const [type,setType] = useState('Choose Type')
    const [day,setDay] = useState('Choose Day')
    const [month,setMonth] = useState('Choose Month')
    const [year,setYear] = useState('Choose Year')
    const [reason,setReason] = useState('')
    const days = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
    const months = [1,2,3,4,5,6,7,8,9,10,11,12];
    const years = [2018,2019,2020,2021,2022,2023,2024];


    if(localStorage.getItem('auth-token') === null){
        window.location.href = "/login";
    }
    else{

    return (
        <div>
        <NavigationBar />

        <Row>
        <Col><Navbar.Brand>Leave Type: </Navbar.Brand></Col>
        <Col>
        <Dropdown >
        <Dropdown.Toggle variant="success" id="dropdown-basic">
      {type}
      </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item onClick={e => setType("annual")}>Annual</Dropdown.Item>
    <Dropdown.Item onClick={e => setType("accidental")}>Accidental</Dropdown.Item>
    <Dropdown.Item onClick={e => setType("sick")}>Sick</Dropdown.Item>
    <Dropdown.Item onClick={e => setType("compensation")}>Compensation</Dropdown.Item>
    <Dropdown.Item onClick={e => setType("maternity")}>Maternity</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown></Col>
</Row>
<div><Row>
        <Col><Navbar.Brand>Day: </Navbar.Brand></Col>
        <Col>
        <Dropdown >
  <Dropdown.Toggle variant="Day" id="dropdown-basic">
    {day}
  </Dropdown.Toggle>

  <Dropdown.Menu>
    {days.map(day => {
          return (
            <Dropdown.Item value={Object.values(day)} onClick={e => setDay(day)}>
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
    {month}
  </Dropdown.Toggle>

  <Dropdown.Menu>
    {months.map(month => {
          return (
            <Dropdown.Item value={Object.values(month)} onClick={e => setMonth(month)}>
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
        <Col><Navbar.Brand>Year: </Navbar.Brand></Col>
        <Col>
        <Dropdown >
  <Dropdown.Toggle variant="Month" id="dropdown-basic">
    {year}
  </Dropdown.Toggle>

  <Dropdown.Menu>
    {years.map(year => {
          return (
            <Dropdown.Item value={Object.values(year)} onClick={e => setYear(year)}>
              {year}
              {Object.keys(year)}{" "}
              </Dropdown.Item>
          );
        })}


  </Dropdown.Menu>
</Dropdown>
</Col>
</Row>


<Row>
        <Col><Navbar.Brand>Reason: </Navbar.Brand></Col>
        <Col><FormControl  placeholder="Eg: Travel"  aria-label="Username"  aria-describedby="basic-addon1" onChange={e => setReason(e.target.value)}/>
        </Col>

</Row>
</div>
<Button onClick={()=>sendLeaveReq(day,month,year,type,reason)}  >Send</Button> 
        </div>
    )
}
}