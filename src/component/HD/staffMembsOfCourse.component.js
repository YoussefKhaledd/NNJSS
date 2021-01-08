import React,{useState} from 'react'
import NavigationBar from './HODNavigationBar'
import axios from 'axios'

function getAllStaffMem(list){
    if(list!==undefined && list.length>0&&list!==null){
    return list.map(elem =>{
      return(
        
      <tr>
        <td>{elem[0].staffName}</td>
         <td>{elem[0].staffId}</td>
         <td>{elem[0].email}</td>
         <td>{elem[0].dayOff}</td>
         <td>{elem[0].officeLocation}</td>
         <td>{elem[0].staffAge}</td>
         <td>{elem[0].staffGender}</td>
        
        
      </tr>
      )
    })
  }
  else{
    return "";
  }
    
  
  }

export default function StaffMembsOfCourse() {
    const [state,setState] = useState([])
    const [course,setCourse]=useState("")
    const [Errmess,setErrMessage] = useState('');
    if(localStorage.getItem('auth-token') === null){
        window.location.href = "/login";
    }
    else{
        const handleSubmit = async e=>{
            e.preventDefault();
    axios.post('http://localhost:5000/viewAllStaff',
    {
        courseId: course
    },
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
        }
    return (
        <div>
        <NavigationBar />
        <input onChange = {e =>setCourse(e.target.value)} ></input>
        <button onClick={handleSubmit}> Submit</button>
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
