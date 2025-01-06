import React from 'react'
import LandingPage from './LandingPage'
import Dashboard from './Dashboard'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

    const navigate = useNavigate ();
  return (
    // <div>
    //    <button onClick={ () =>{
    //     window.location.href= "/dashboard"
    //    }}>DashBoard</button>
    //    <button onClick={ () =>{
        
    //     window.location.href= "/"
    //    }}>LandingPage</button>
    // </div>

    <div>
        
            <button onClick={ () =>{
                navigate ("/")
            }}>:anding Page</button>
            <button onClick ={ () =>{
                navigate("/dashboard")
            }}> Dashboard </button>
        
    </div>
  )
}

export default Navbar