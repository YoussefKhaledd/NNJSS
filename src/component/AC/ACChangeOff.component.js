import React,{useState} from 'react'
import NavigationBar from './ACNavigationBar'
import axios from 'axios'

export default function SendChangeOff() {
    const [state,setState] = useState([])
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
       <table className="table table-sm table-dark">
        <thead className = "thead-light">
          <tr>
            <th>Slot</th>
            <th>First</th>
            <th>Second</th>
            <th>Third</th>
            <th>Fourth</th>
            <th>Fifth</th>
           
          </tr>
        </thead>
        <tbody>
        hello
        </tbody>

        </table>
        </div>
    )
}
}