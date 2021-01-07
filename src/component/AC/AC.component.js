import React from 'react'
import NavigationBar from './ACNavigationBar'

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



