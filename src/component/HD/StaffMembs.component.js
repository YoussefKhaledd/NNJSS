import React,{useState} from 'react'
import NavigationBar from './HODNavigationBar'
import axios from 'axios'

function getAllStaffMem(list){
    if(list!==undefined && list.length>0&&list!==null){
    return list.map(elem =>{
      return(
        
      <tr>
        <td>{elem.staffName}</td>
        <td>{elem.staffId}</td>
        <td>{elem.email}</td>
        <td>{elem.dayOff}</td>
        <td>{elem.officeLocation}</td>
        <td>{elem.staffAge}</td>
        <td>{elem.staffGender}</td>
        
        
      </tr>
      )
    })
  }
  else{
    return "";
  }
    
  
  }

export default function StaffMembs() {
    const [state,setState] = useState([])
    if(localStorage.getItem('auth-token') === null){
        window.location.href = "/login";
    }
    else{
    axios.get('http://localhost:5000/viewAllStaff', {  
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
            <th>Staff Name</th>
            <th>Staff Id</th>
            <th>Email</th>
            <th>Day Off</th>
            <th>Office Location</th>
            <th>Staff Age</th>
            <th>Staff Gender</th>
           
          </tr>
        </thead>
        <tbody>
          {getAllStaffMem(state)}
        </tbody>

        </table>
        </div>
    )
    }
}
