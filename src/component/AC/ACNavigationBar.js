import React from 'react'
import {  Navbar, Nav, NavDropdown,Dropdown } from 'react-bootstrap';
import image from '../logo.png'
import '../../App.css'

export default function HODNavigationBar() {
    return (
        <div>
             <Navbar collapseOnSelect expand="lg" bg="dark" variant="light">
            <img src={image} alt="Logo" width='30px' />
            <Navbar.Brand href="/CIHomePage">Home</Navbar.Brand>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">

            <Nav.Link href="/CISchedule">Schedule</Nav.Link>

            <NavDropdown title="Requests">
            <NavDropdown.Item href="/replacementRequests">Replacement Requests</NavDropdown.Item>
            <NavDropdown.Item href="/LeaveRequests">Slot Linking Requests</NavDropdown.Item>
            <NavDropdown.Item href="/SendChangeOff">Send Change Day Off</NavDropdown.Item>
            <NavDropdown.Item href="/LeaveRequests">Send Leave Request</NavDropdown.Item>
            <NavDropdown.Item href="/LeaveRequests"> ekhwaty</NavDropdown.Item>
            </NavDropdown>
            
            <button type="button" class="btn btn-light" href = '/AddCI'> Notifications </button>

            <button type="button" class="btn btn-light" href = '/AddCI'> View All Requests </button>
          
            </Nav>

            
                        <Nav >
                        <Nav.Link className='LogOutButton'  href="/LogOut">LogOut</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
