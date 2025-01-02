import React, { useState } from 'react';
import './App.css';
import HeaderWithButton from './Components/HeaderWithButton';


// function App() {
//   const [title1, setTitle1] = useState("My name is Kushagra Goel");

  //Q1.header component that takes a title as a prop and renders it inside a div
  //Q2.The Top level app should render 2 headers. 
  
  
  // function Header (props){       // && function Header ({title}){
         
  //        return <div>       
  //         {props.title}      
  //        </div>                         
 
  // }
    // This function header 1 is the same as Header but it is just a cleaner code compared to the above. We destructure props into a title variable
    // and then render the same. 
    // We can use <b> for bold, <i> for italics  etc . just using div for now. (can change it accordingly.)
  
  //   function Header1 ({title}){
  //       return <b>
  //         {title}
  //       </b>
  // }

  // here, this return cannot render multiple siblings, they must contain a parent. 
  // i.e why we use fragments ( <> </> Or <React.Fragment> </React.Fragment>), it is slightly better because it doesn't introduce an extra
  // DOM ELEMENT.
  // If we use this, we will get error, so use a fragment or a div and then put your child components inside. This is same as getting and error 
  // just like let a = 2 2  or let a = "Hello world" "Hello World"  i.e multiple siblings not allowed.
  // return (  
  //          <Header title = " Kushagra Goel" />
  //          <Header1 title = " Kush Goel " />
  //        )


  // Q3. create a button that Updates the last app to allow user to update the title of the Header to the new title. 
  
//   function updateTitle (){
    
//       setTitle1("My name is " + Math.random());
//   }
//   return (
//       <>

//         <button onClick = {updateTitle}> Click here to change the text of the first header </button>
//         <br></br> <br></br>
//         <Header title = {title1} />
//         <Header title = " My name is Kush Goel " />
//         <Header title = " My name is Kush Goel " />
        
//      </>  
//   )
// }

// export default App;

// react creates Dynamic websites = websites whose content changes very quickly, something like linkedin. When you scroll down on linkedin, 
// New and new posts are getting appended. (re-render -> when you add something to the DOM, delete something from the DOM or update
// something inside the DOM. We have to optimize our app by minimizing the re-renders in our website. )



// EVERy time a parent rerenders then all of its child components re renders, irrespective of the child has used the props/ update functionality 
// or not. Even if we had multiple states then also, if only one setTitle rerenders (ex of code above.), then it triggers the parent to rerender
// then all of its child components re renders irrespective of they are using or not.


//How can we minimize the number of re-renders in this app ^
// Just bring the state down in a function where you want to actually update the changes 
// Just like this -> 


function App () {

  return (
    <div>
          <HeaderWithButton />
         
          <Header title= "haisuhda" />
    </div>
  )
  
}

// We can use react.memo that'll lets us skip re-renderning a component when its props are unchanged.

  // function Header ({title}){
  //     return <div>
  //       {title}
  //     </div>
  // }


  const Header= React.memo(function Header ({title}){
    return <div>
      {title}
    </div>
  })



export default App;