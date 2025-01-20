import React, {useState, useEffect} from 'react';

// For useEffect example- 

//Lets say you are in a F1 race, and you have to take a pit stop to get your tires changed to continue the race and do 20 laps. 
//So you will not stop at the pit stop every time you complete a lap, meanwhile you will have some conditions for the same only on that basis, 
//I will stop at the pit stop. Here, making a pit stop is a side effect and you making a pit stop is somewhere similar to useEffect.


//in use effect if the dependency [ abc, xyz ] you provide changes then the whole useEffect function reruns.

// Q.  Write a component which takes a todo id as an input and fetches the data and from that todo from the given 
//     endpoint, and then renders it .


function App ( ) {

    const [ todos, setTodos] = useState ([]);

    useEffect ( ( ) =>{
        const response = axios.get ( " url")
        .then (function (response) {
            setTodos (response.data.todos)
        })
    }, []);

    // Ans Q2 -> 

    useEffect (() => {
        const response1 = axios.get ( "URL ")
        .then ( function ( response1){
                setTodos ( response1.data.todos)
        }) 
    }, []);
 

    return (
    <div>
        {todos.map (todo => <Todo title = {todoswa.title} description = {todos.description} />)   }
    </div>
    )
}

function Todo ( title, description){
    return <div>
        <h2> {title} </h2>
        <p> {description} </p>
          </div>
}

export default App;