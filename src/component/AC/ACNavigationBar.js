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
            <NavDropdown.Item href="/slotLinking">Send Slot Linking Request</NavDropdown.Item>
            <NavDropdown.Item href="/SendChangeOff">Send Change Day Off</NavDropdown.Item>
            <NavDropdown.Item href="/SendLeaveRequest">Send Leave Request</NavDropdown.Item>
            </NavDropdown>
            
            <NavDropdown title="HAGET SHIKO">
            <NavDropdown.Item href="/ViewSlotLinkings">View Slot Linking</NavDropdown.Item>
            <NavDropdown.Item href="/ManageSlots">Manage Slots</NavDropdown.Item>

            </NavDropdown>


            <Nav.Link  href = '/Notifications'> Notifications </Nav.Link>

            <Nav.Link href = '/AllRequests'> View All Requests </Nav.Link>
          
            </Nav>

            
                        <Nav >
                        <Nav.Link className='LogOutButton'  href="/LogOut">LogOut</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
