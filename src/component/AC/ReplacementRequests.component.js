import React,{useState} from 'react'
import NavigationBar from './ACNavigationBar'
import axios from 'axios'

import {Button,Row,Col, Navbar, FormControl} from 'react-bootstrap';


export default function Replacements() {
    const [state,setState] = useState([])
    if(localStorage.getItem('auth-token') === null){
        window.location.href = "/login";
    }
    else{
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

    return (
        <div>
        <NavigationBar />

        <div>
        <Navbar.Brand>MEHTAGA TAZBEET</Navbar.Brand>
        <Navbar.Brand>Send A New Request </Navbar.Brand>

        <Row>
             <Col><Navbar.Brand>Target Staff ID: </Navbar.Brand></Col>
            <Col><FormControl  placeholder="ID"  aria-label="Username"  aria-describedby="basic-addon1"/></Col>
        </Row>


        <Row>
            <Col><Navbar.Brand>Slot ID: </Navbar.Brand></Col>
             <Col> <FormControl  placeholder="Slot ID"  aria-label="Username"  aria-describedby="basic-addon1"/></Col>
        </Row>
        <Button variant="dark">Send</Button>{' '}

        </div>

        <Navbar.Brand>Requests you sent </Navbar.Brand>
       <table className="table table-sm table-dark">
        <thead className = "thead-light">
          <tr>
            <th>Receiver</th>
            <th>Slot</th>
            <th>Receiver Status</th>
            <th>HOD Status</th>
           
          </tr>
        </thead>
        <tbody>
        3amoko
        </tbody>

        </table>

        <Navbar.Brand>Requests you Recieved </Navbar.Brand>
       <table className="table table-sm table-dark">
        <thead className = "thead-light">
          <tr>
            <th>Sender</th>
            <th>Slot</th>
            <th>Receiver Status</th>
            <th>HOD Status</th>
           
          </tr>
        </thead>
        <tbody>
        3amoko
        </tbody>

        </table>
        </div>
    )
}
}
