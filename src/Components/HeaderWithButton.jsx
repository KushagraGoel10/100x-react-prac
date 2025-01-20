import React, {useState} from 'react';


const HeaderWithButton = () => {

 const [firstName, setFirstName] = useState("My name is Kushagra Goel"); 
 
     function changeTitle(){
       setFirstName("My name is " + Math.random());
     }
   
     
     const Header = React.memo(function Header ({title}){
    return <div>
      {title}
    </div>
})

  
   return <>
         <button onClick = {changeTitle}> Click here to change the text of the first header </button>
          <br></br> <br></br>
          <Header title = {firstName} />
       
     </>
 
}

export default HeaderWithButton;