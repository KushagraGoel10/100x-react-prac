import React from 'react'
import {BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import {lazy, Suspense } from 'react';

// Lazy Loading - 
// States you can change your code a little bit and if you do we'll make sure that if the person is on page 1
// they will only get the bundle (the main react bundle and only the code of page 1) and if they go to page 2 they will get the extra code of page 2
// and so on. They dont get the data of all the pages at once. They will lazely load more pages/component that the person is not currently on.
// This is the way to write and import components with Lazy loading. 
// const ComponentName = React.lazy ( () => import ( " ./Components/ComponentName"));

const  Dashboard = lazy(() => import("./Components/Dashboard"));
//either works ^ >
const LandingPage = lazy (() => import('./Components/LandingPage'));


function App(){


    //Suspense API- The Suspense API in React is a feature that allows you to handle asynchronous operations
    //  (like data fetching, lazy loading of components, etc.) in a more declarative and smooth way. It helps in waiting for 
    // asynchronous operations to complete before rendering a component, making the UI more responsive and manageable.

  return (
    <div>
  <BrowserRouter> 
  <AppBar />
    <Routes>
      <Route path = "/dashboard" element = {<Suspense fallback ={"loading..."}><Dashboard /></Suspense>} />
      <Route path = "/" element = {<Suspense fallback ={"loading ..."}><LandingPage /> </Suspense>}/>

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
