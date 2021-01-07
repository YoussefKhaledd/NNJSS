import React,{useState} from 'react'
import NavigationBar from './ACNavigationBar'
import axios from 'axios'

function viewSlots(list){

    return list.map((elem,index) =>{  //mehtaga tetzabat lw fe actually slot 
        var day= "Saturday";
        var first=elem.[0];
        var second=elem.[1];
        var third=elem.[2];
        var fourth=elem.[3];
        var fifth=elem.[4];

        if(index==1)
        day= "Sunday";
        if(index==2)
        day= "Monday";
        if(index==3)
        day= "Tuesday";
        if(index==4)
        day= "Wednesday";
        if(index==5)
        day= "Thursday";
        if(index==6)
        day= "Friday";

        if(elem.[0]==null)
        first="FREE"

        if(elem.[1]==null)
        second="FREE"

        if(elem.[2]==null)
        third="FREE"

        if(elem.[3]==null)
        fourth="FREE"

        if(elem.[4]==null)
        fifth="FREE"

      return(
        
      <tr>

        <td>{day}</td>
        <td>{first}</td>
        <td>{second}</td>
        <td>{third}</td>
        <td>{fourth}</td>
        <td>{fifth}</td>
        
      </tr>
      )
    })
  
  }

export default function ViewSchedule() {
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
        {viewSlots(state)}
        </tbody>

        </table>
        </div>
    )
}
}