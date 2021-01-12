import React,{useState} from 'react'
import NavigationBar from './HODNavigationBar'
import axios from 'axios'
import TableScrollbar from 'react-table-scrollbar';
import { Container,Button} from 'react-bootstrap'
import './hdComponent.css'


function getTeachingAssignment(list){
    if(list!==undefined && list.length>0&&list!==null){
    return list.map(elem =>{
        if(elem.teachingAssignment==null)
        elem.teachingAssignment=[];
      return(
        
      <tr>
        <td>{elem.staff}</td>
        <td>{elem.day}</td>
        <td>{elem.time}</td>
        <td>{elem.location}</td>
      </tr>
      )
    })
  }
  else{
    return "";
  }
    
  
  }

export default function ViewTA() {  const [state,setState] = useState([])
    const [message,setMessage]=useState([])
    const [id,setId]=useState([])
    const [table,setTable]=useState(false)
    if(localStorage.getItem('auth-token') === null){
        window.location.href = "/login";
    }
    else{
        const handleSubmit = async e=>{
    axios.post('http://localhost:5000/teachingAssignment',{
        courseId:id
    },
    {  
        headers: {
        'auth-token': localStorage.getItem('auth-token')
        }
    })
      .then(res =>{
          console.log(res.data)
          if(typeof res.data==='string'||res.data.length==0)
          {
            setTable(true)
            if(typeof res.data==='string')
              setMessage(res.data)
            else
            setMessage("The Course Does not Contain any Slots yet")
            console.log(message)

          }
          else{
          setState(res.data);
          setTable(false)
          setMessage('These are all the Teaching Assignment')
        }


      })
      .catch(error =>{
        console.log(error);
      })}
    return (
        <div>
        <NavigationBar />
        <Container style={{height:'300px'}} className="hdCompBig">
              <h3 className="TextLeft">
        View Teaching Assignment </h3>
        <h5 className="TextLeftSub"> Course ID : <span style={{display:'inline-block'}}>
        <input onChange = {e =>setId(e.target.value)}></input></span>
        <span style={{display:'inline-block',marginLeft:'25px'}}>
        <Button variant="primary" onClick = {handleSubmit}>View</Button>
        </span></h5>
        <TableScrollbar rows={3}>
       <table className="table table-sm table-dark" >
           {/* ANA HENAAAAAAA */}
        <thead className = "thead-light">
          <tr>
             <th  hidden={table}>StaffName</th>
            <th  hidden={table}>Day</th>
            <th  hidden={table}>Time</th>
            <th  hidden={table}>location</th>
          </tr>
        </thead>
        <tbody hidden={table} >
          {getTeachingAssignment(state)}
        </tbody>

        </table>
        </TableScrollbar>
        </Container>
        {message}
        </div>
    )
}
}