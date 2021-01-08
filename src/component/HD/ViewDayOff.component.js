import React,{useState} from 'react'
import NavigationBar from './HODNavigationBar'
import axios from 'axios'


function getDayOff(list){
    if(list!==undefined && list.length>0&&list!==null){
    return list.map(elem =>{
      return(
        
      <tr>
        <td>{elem.staffName}</td>
        <td>{elem.staffId}</td>
        <td>{elem.dayOff}</td>
      </tr>
      )
    })
  }
  else{
    return "";
  }
    
  
  }
export default function ViewDayOff() {
    const [state,setState] = useState([])
    if(localStorage.getItem('auth-token') === null){
        window.location.href = "/login";
    }
    else{
    axios.post('http://localhost:5000/viewdayOff',{},
    {  
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
            <th>Day Off</th>
          </tr>
        </thead>
        <tbody>
          {getDayOff(state)}
        </tbody>

        </table>
        </div>
    )
    }}
