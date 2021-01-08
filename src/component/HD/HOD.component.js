import React from 'react'
import NavigationBar from './HODNavigationBar'
import HDHOME from './HDHOMEPAGE.component'

export default function HOD() {
    if(localStorage.getItem('auth-token') == null){
        window.location.href = "/LogIn";
    }
    else{
    return (
        <div>
           <HDHOME />
           
        </div>
    )
}
}



