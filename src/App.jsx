import React from 'react'
import FetchingData from './Components/FetchingData';
import {BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import LandingPage from './Components/LandingPage';
import Navbar from './Components/Navbar';


//we cannot use useNavigate outside the BrowserRouter, it does not allow us to do that. 
//So getting an error here 
//Just creating another function and then using the useNavigate doesnt give an error.
function App(){

  const navigate = useNavigate();
  return (
    // <div>
    //   <div>

        
    //     <button onClick={ () =>{
    //         navigate ("/");
    //     }}>:anding Page</button>
    //     <button onClick ={ () =>{
    //         navigate("/dashboard");
    //     }}> Dashboard </button>
    //     </div>
    <div>
  <BrowserRouter> 
    <Routes>
      <Route path = "/dashboard" element = {<Dashboard />}></Route>
      <Route path = "/" element = {<LandingPage />}></Route>
      </Routes>  
  </BrowserRouter>
  </div>
  )
}

export default App