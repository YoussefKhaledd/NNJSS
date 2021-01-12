import React,{useState} from 'react'
import NavigationBar from './HODNavigationBar'
import axios from 'axios'
import TableScrollbar from 'react-table-scrollbar';
import { Container,Button} from 'react-bootstrap'
import './hdComponent.css'



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
export default function ViewDayOffOne() {
    const [state,setState] = useState([])
    const [id,setId]=useState([])
    if(localStorage.getItem('auth-token') === null){
        window.location.href = "/login";
    }
    else{
        const handleSubmit = async e=>{
            e.preventDefault();
             axios.post('http://localhost:5000/viewdayOff',{staffId:id},
    {  
        headers: {
        'auth-token': localStorage.getItem('auth-token')
        }
    })
      .then(res =>{
          console.log(res)
          setState(res.data);


      })
      .catch(error =>{
        console.log(error);
      })
    }
    return (
        <div>
        <NavigationBar />
        <Container style={{height:'300px'}} className="hdCompBig">
              <h3 className="TextLeft">
        Specific Staff Member Day Off </h3>
        <h5 className="TextLeftSub"> Staff ID : <span style={{display:'inline-block'}}>
        <input onChange = {e =>setId(e.target.value)}></input></span>
        <span style={{display:'inline-block',marginLeft:'25px'}}>
        <Button variant="primary" onClick = {handleSubmit}>View</Button></span></h5>
        <TableScrollbar rows={3}>
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
        </TableScrollbar>
        </Container>
        </div>
    )
    }}
