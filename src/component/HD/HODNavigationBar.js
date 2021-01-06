import React from 'react'
import {  Navbar, Nav, NavDropdown,Dropdown } from 'react-bootstrap';
import image from '../logo.png'
import '../../App.css'

export default function HODNavigationBar() {
    return (
        <div>
             <Navbar collapseOnSelect expand="lg" bg="dark" variant="light">
            <img src={image} alt="Logo" width='30px' />
            <Navbar.Brand href="/HODHomePage">Home</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            <NavDropdown title="Course Instructor">
            <NavDropdown.Item href="/AddCI">Add Course Instructor </NavDropdown.Item>
            <NavDropdown.Item href="/UpdateCI">Update Course Instructor</NavDropdown.Item>
            <NavDropdown.Item href="/DeleteCI">Delete Course Instructor</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Staff">
            <NavDropdown.Item href="/StaffMembs">View All Staff in Department</NavDropdown.Item>
            <NavDropdown.Item href="/CourseStaff">View All Staff in a specific Course</NavDropdown.Item>
            <Dropdown.Divider />
            <NavDropdown.Item href="/ViewDayOff">View Staff Day off </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Requests">
            <NavDropdown.Item href="/ChangeDayOffRequests">Change Day Off Requests</NavDropdown.Item>
            <NavDropdown.Item href="/LeaveRequests">Leave Requests</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Courses">
            <NavDropdown.Item href="/ViewCourseCoverage">View Course Coverage</NavDropdown.Item>
            <NavDropdown.Item href="/ViewTA">View Teaching Assignments</NavDropdown.Item>
            </NavDropdown>
            </Nav>

            
                        <Nav >
                        <Nav.Link className='LogOutButton'  href="/LogOut">LogOut</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
