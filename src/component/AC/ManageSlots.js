import React,{useState,useEffect} from 'react'
import NavigationBar from './ACNavigationBar'
import axios from 'axios'

import {Button,Row,Col,Dropdown,FormControl,Tabs,Tab ,Navbar} from 'react-bootstrap';



const addSlot = async (courseId,day,timing,slotlocation) => {
    if(day=="Choose Day")
    return alert("please choose a day")
  
    if(timing=="Choose Slot")
    return alert("please choose a slot")
  
    axios.post('http://localhost:5000/addcourseslot', 
      {
        courseId:courseId,
        day:day,
        timing:timing,
        location:slotlocation,
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

        const deleteSlot = async (courseId,day,timing,slotlocation) => {
            if(day=="Choose Day")
            return alert("please choose a day")
          
            if(timing=="Choose Slot")
            return alert("please choose a slot")

            axios.post('http://localhost:5000/deletecourseslot', 
            {
              courseId:courseId,
              day:day,
              timing:timing,
              location:slotlocation,
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


export default function ManageSlots() {
    const [location,setLocation] = useState("")
    const [course,setCourse] = useState("Choose Course")
    const [courses,setCourses] = useState([])
    const [day,setDay] = useState("Choose Day");
    const [slot,setSlot] = useState("Choose Slot");
    const [key, setKey] = useState('home');

    useEffect(async ()=>{
        axios.get('http://localhost:5000/CCcourses', {  
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
    }
      )


    if(localStorage.getItem('auth-token') === null){
        window.location.href = "/login";
    }
    else{

    return (
        <div>
        <NavigationBar />

        <div>
        <Navbar.Brand>Requests you sent </Navbar.Brand>       
         <Navbar.Brand>el course should be a drop down list of courses el user course coordinator bet3ha </Navbar.Brand>
        </div>

        <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
    >
      
      <Tab eventKey="Add" title="Add" >

      <Row>
           <Col><Navbar.Brand>Course ID: </Navbar.Brand></Col>
          <Col><Dropdown >
<Dropdown.Toggle variant="success" id="dropdown-basic">
  {course}
</Dropdown.Toggle>

<Dropdown.Menu>

{courses.map((elem) =>{   return (<Dropdown.Item onClick={e => setCourse(elem)}>{elem}</Dropdown.Item>)}) }
</Dropdown.Menu>
</Dropdown>
</Col>
          
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

<Button variant="dark" onClick={()=>addSlot(course,day,slot,location)} >Add Slot</Button>

      </Tab>

    <Tab eventKey="Update" title="Update" >

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

</Tab>

<Tab eventKey="Delete" title="Delete" >

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

<Button variant="dark" onClick={()=>deleteSlot(course,day,slot,location)} >Delete Slot</Button>
</Tab>



</Tabs>


        </div>
    )
}
}
