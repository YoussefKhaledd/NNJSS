import React from 'react'
import NavigationBar from './HODNavigationBar'

export default function HOD() {
    if(localStorage.getItem('auth-token') == null){
        window.location.href = "/LogIn";
    }
    else{
    return (
        <div>
           <NavigationBar />
        </div>
    )
}
}



