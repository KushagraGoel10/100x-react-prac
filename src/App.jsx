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

  console.log("Count re-render");
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


// Why to use context api - 
//   1. to make syntax cleaner / getting rid of prop drilling.    { " Y E S "}
//   2. to make rendering more performable.  {"  N  O  "}  X 

// Problem with context API -> Doesn't fix re-rendering, only fixes prop drilling.

// What gives you both of the above ? 
// Ans - State management libraries  ( i.e Recoil, Redux etc)

// To install recoil we can do  - npm install recoil. 
// Mostly companies open sources their components/ ui designs etc but they will never open source the way they write their state logic.

// RECOIL -> RecoilRoot, atom, useRecoilState, useRecoilValue, useSetRecoilState, selector. 