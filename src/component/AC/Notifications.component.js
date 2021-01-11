import React,{useState} from 'react'
import NavigationBar from './ACNavigationBar'
import axios from 'axios'

import {Tabs,Tab,FormControl,Row,Col, Navbar,Dropdown,Button} from 'react-bootstrap';

export default function Notified() {
    return (
        <div>
        <NavigationBar/>
        <h3>No new notifications</h3>
        </div>
    )
}