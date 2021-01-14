import React,{useState} from 'react'
import axios from 'axios'


export default function MainHomePage() {

    const [types,setTypes] = useState([])
    let HDbool=false;
    let CIbool=false;
    let CCbool=false;
    let TAbool=false;

    
    if(types.includes("hd")){HDbool=true;}
        

    if((types.includes("ci"))){CIbool=true;}

    if(types.includes("cc")){CCbool=true;}

    if(types.includes("ta")){TAbool=true;}
        
    
    if(localStorage.getItem('auth-token') === null){
        window.location.href = "/login";
    }
    else{
    axios.get('http://localhost:5000/getType', {  
        headers: {
        'auth-token': localStorage.getItem('auth-token')
        }
    })
      .then(res =>{
          setTypes(res.data);
          console.log(types)


      })
      .catch(error =>{
        console.log(error);
      })}
    return (
        <div>
            <h1>ANA HENA</h1>

            <button disabled={!HDbool}>HD</button>
            <button disabled={!CIbool}>CI</button>
            <button disabled={!CCbool}>CC</button>
            <button disabled={!TAbool}>TA</button>  
        </div>
    )
}
