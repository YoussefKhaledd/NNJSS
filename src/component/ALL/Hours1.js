import axios from 'axios'
import React,{useState,useEffect} from 'react'
import {MDBIcon,MDBBtn,MDBInput} from "mdbreact";
import { useHistory } from 'react-router-dom';

function printAttendance  (atnd) {
    return atnd.map((elem,index) =>{  //mehtaga tetzabat lw fe actually slot"

      return(
        
      <tr>
        <td>day {index+1}</td>
        <td>{listPrinter(elem.checkIn)}</td>
        <td>{listPrinter(elem.checkOut)}</td>
      </tr>
      )
    })

}

function listPrinter  (nado) {
var outt="["
var i
for( i=0;i<nado.length;i++){
    outt = outt.concat(nado[i])
    if(i+1 !=nado.length)
    outt = outt.concat(",")
}
outt = outt.concat("]")
return outt
}

export default function ViewAttendance() {
    let history = useHistory();
    const [start,setStart] = useState(0)
    const [attend,setAttend] = useState([])

    if(localStorage.getItem('auth-token') === null){
        window.location.href = "/login";
    }
    else{
    
    return (
        <div>
        <div class="jumbotron jumbotron-fluid" style={{backgroundColor:"#94B4C9"}}>
        <div class="container">
            <h1 style={{fontFamily:"Franklin Gothic Medium",fontSize:50,textAlign:"left",padding:20}}>View Missing Days </h1>
            </div>
            <MDBBtn className="homeBtn" color="blue-grey lighten-4" onClick={()=>history.push('/HRHomePage')}>
            <MDBIcon icon="home" size="lg"/></MDBBtn>
            <MDBBtn  color="blue-grey lighten-4" onClick={()=>history.push('/Profile')}>
            <MDBIcon far icon="user" size="lg" /></MDBBtn>


      </div>

      
      <div>
      <text  >Start Month:</text>
      <select style={{marginLeft:10}}  onChange={(e)=>{
          const month=e.target.value
          setStart(month)
          }
          }>     
          <option  value="0" >All</option>
          <option  value="1" >1</option>
          <option  value="2">2</option>
          <option  value="3">3</option>
          <option  value="4">4</option>
          <option  value="5">5</option>
          <option  value="6">6</option>
          <option  value="7">7</option>
          <option  value="8">8</option>
          <option  value="9">9</option>
          <option  value="10">10</option>
          <option  value="11">11</option>
          <option  value="12">12</option>
          </select>
          

          </div>

        
          <MDBBtn onClick={
                      axios.get('http://localhost:5000/checkHours',
                      {  
                        headers: {
                        'auth-token': localStorage.getItem('auth-token')
                        }
                    })
                      .then(res =>{
                        setAttend(res.data);
                      })
                      .catch(error =>{
                        alert(error);
                      })

          } >Get Attendance</MDBBtn>

 
    {attend}
    </div>
    )
}
}