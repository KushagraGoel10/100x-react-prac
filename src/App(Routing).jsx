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
  <AppBar />
    <Routes>
      <Route path = "/dashboard" element = {<Dashboard />}></Route>
      <Route path = "/" element = {<LandingPage />}></Route>
      </Routes>  
  </BrowserRouter>
  </div>
  )
}

function AppBar (){
  const navigate = useNavigate ();

  return (
  <div>
       <div>
          <button onClick={ () =>{
            navigate ("/");
             }}>Landing Page</button>
        <button onClick ={ () =>{
            navigate("/dashboard");
        }}> Dashboard </button>
        </div>
  </div> 
  );

}

export default App;


// Lazy Loading - 
// States you can change your code a little bit and if you do we'll make sure that if the person is on page 1
// they will only get the bundle (the main react bundle and only the code of page 1) and if they go to page 2 they will get the extra code of page 2
// and so on. They dont get the data of all the pages at once. They will lazely load more pages/component that the person is not currently on.
