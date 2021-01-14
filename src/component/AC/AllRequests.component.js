import React,{useState,useEffect} from 'react'
import NavigationBar from './ACNavigationBar'
import axios from 'axios'

import {Button,Tabs,Tab ,Navbar} from 'react-bootstrap';

const cancelLeave = (id) => {
  axios.put('http://localhost:5000/cancelRequest',    {
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
  alert("you can only cancel pending or requests that are yet to come");
  })
}

const viewLeaves = (list) => {
  return list.map((elem) =>{ 
  var id =elem._id
  var disabled=false;
  if(elem.status =="cancelled")
  disabled=true

  return(
  <tr>

    <td>{elem.reciever}</td>
    <td>{elem.type}</td> 
    <td>{elem.day}/{elem.month}</td>
    <td>{elem.status}</td>
    <td><Button variant="dark" onClick={(e)=>cancelLeave(id)} disabled={disabled}>Cancel</Button></td>
    
  </tr>
  )
})
  }

export default function ViewAll() {
    const [reqs,setReqs] = useState([])
    const [reqs1,setReqs1] = useState([])
    const [reqs2,setReqs2] = useState([])
    const [reqs3,setReqs3] = useState([])
    const [key, setKey] = useState('all');

    useEffect(async ()=>{
      axios.get('http://localhost:5000/viewAllRequests', {  
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
    
      axios.get('http://localhost:5000/viewAcceptedRequests', {  
        headers: {
        'auth-token': localStorage.getItem('auth-token')
        }
    })
      .then(res =>{
        setReqs1(res.data);
    
      })
      .catch(error =>{
        console.log(error);
      })
    
      axios.get('http://localhost:5000/viewRejectedRequests', {  
        headers: {
        'auth-token': localStorage.getItem('auth-token')
        }
    })
      .then(res =>{
        setReqs2(res.data);
    
      })
      .catch(error =>{
        console.log(error);
      })
    
      axios.get('http://localhost:5000/viewPendingRequests', {  
        headers: {
        'auth-token': localStorage.getItem('auth-token')
        }
    })
      .then(res =>{
        setReqs3(res.data);
    
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
         <Navbar.Brand>LESSA HETET EL DATE backend </Navbar.Brand>
        </div>

        <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
    >
      <Tab eventKey="all" title="All">
      <table className="table table-sm table-dark">
        <thead className = "thead-light">
          <tr>
            <th>Receiver</th>
            <th>Type </th>
            <th>Date</th>
            <th>Status</th>
            <th>Cancel</th>
           
          </tr>
        </thead>
        {viewLeaves(reqs)}

        </table>

      </Tab>
      <Tab eventKey="accepted" title="Accepted">
      <table className="table table-sm table-dark">
        <thead className = "thead-light">
          <tr>
            <th>Receiver</th>
            <th>Type </th>
            <th>Date</th>
            <th>Status</th>
            <th>Cancel</th>
           
          </tr>
        </thead>
        {viewLeaves(reqs1)}

        </table>
      </Tab>
      <Tab eventKey="rejected" title="Rejected" >
      <table className="table table-sm table-dark">
        <thead className = "thead-light">
          <tr>
            <th>Receiver</th>
            <th>Type </th>
            <th>Date</th>
            <th>Status</th>
            <th>Cancel</th>
           
          </tr>
        </thead>
        {viewLeaves(reqs2)}

        </table>
      </Tab>
      <Tab eventKey="pending" title="Pending" >
      <table className="table table-sm table-dark">
        <thead className = "thead-light">
          <tr>
            <th>Receiver</th>
            <th>Type </th>
            <th>Date</th>
            <th>Status</th>
            <th>Cancel</th>
           
          </tr>
        </thead>
        {viewLeaves(reqs3)}

        </table>
      </Tab>
    </Tabs>


        </div>
    )
}
}
