import React from 'react'
import axios from 'axios'

 function Logout() {
    axios.get('http://localhost:5000/logout', {
    headers:{
    'auth-token': localStorage.getItem('auth-token')
    }
    })
      .then(res =>{
        console.log(res)
        localStorage.removeItem('auth-token')
        window.location.href = "/";

      })
      .catch(error =>{
        console.log(error)
      })
    
      return(
          <div>
              LOL
          </div>
      )
}
 

export default Logout