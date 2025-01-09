import React, { useState, useContext } from 'react';
import {CountContext} from './context';


function App () {

  const [ count, setCount] = useState(0);


  return (
    <div>
      <CountContext.Provider value = {count}>
        <Count setCount = {setCount} />
      </CountContext.Provider>  
    </div>
  )
}

function Count ({setCount}) {

  return ( 
    <div>
    <CountRenderer />
    <Buttons setCount={setCount} />
  </div>
  )
};



function CountRenderer () {
  const count = useContext(CountContext);
  return (
    <div>
     Count: {count}
    </div>
  )
}

function Buttons({setCount}) {

  const count = useContext (CountContext);
  console.log("buttons re-rendererd");

  return <div>
    <button onClick={() => {
      setCount(count => count + 1)
    }}>Increase</button>

    <button onClick={() => {
      setCount(count => count - 1)
    }}>Decrease</button>
  </div>
}

export default App;




// Context API -> 

// 1. Context.Provider 
// 2. Context.Renderer
// 3. context.jsx ( creating context and exporting the same)