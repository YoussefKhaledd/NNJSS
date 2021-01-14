import React,{useState,useEffect} from 'react'
import NavigationBar from './ACNavigationBar'
import axios from 'axios'

import {Button,Tabs,Tab ,Navbar} from 'react-bootstrap';

const Accept = (id) => {
    axios.post('http://localhost:5000/acceptslotlinkingrequests',    {
      id:id,
    },
  
    {  
        headers: {
        'auth-token': localStorage.getItem('auth-token'),
        }
    })
    .then(res =>{
      return alert(res.data);
  
    }).catch(error=>{

        return alert(error);
        })
  }

  const Reject = (id) => {
    axios.post('http://localhost:5000/rejectslotlinkingrequests',    {
      id:id,
    },
  
    {  
        headers: {
        'auth-token': localStorage.getItem('auth-token'),
        }
    })
    .then(res =>{
      return alert(res.data);
  
    }).catch(error=>{

        return alert(error);
        })
  }

const ViewSlotLinkings = (list) => {
  return list.map((elem) =>{ 
  var id =elem[5]

  return(
  <tr>

    <td>{elem[0]}</td>
    <td>{elem[1]}</td>
    <td>{elem[2]}</td>
    <td>{elem[3]}</td>
    <td>{elem[4]}</td>
    <td><Button variant="dark" onClick={(e)=>Accept(id)} >Accept</Button></td>
    <td><Button variant="dark" onClick={(e)=>Reject(id)} >Reject</Button></td>
    
    
  </tr>
  )
})
  }

export default function ViewAll() {
    const [reqs,setReqs] = useState([])
    const [key, setKey] = useState('home');

    useEffect(async ()=>{
      axios.get('http://localhost:5000/viewslotlinkingRequests', {  
        headers: {
        'auth-token': localStorage.getItem('auth-token')
        }
    })
      .then(res =>{
        setReqs(res.data);
    
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
        <Navbar.Brand>All Slot Linking Requests You Recieved </Navbar.Brand>       
        </div>

      <table className="table table-sm table-dark">
        <thead className = "thead-light">
          <tr>
            <th>Sender</th>
            <th>Course </th>
            <th>Day</th>
            <th>Slot</th>
            <th>Location</th>
            <th>Accept</th>
            <th>Reject</th>
          </tr>
        </thead>

        {ViewSlotLinkings(reqs)}
        </table>

      

        </div>
    )
}
}
