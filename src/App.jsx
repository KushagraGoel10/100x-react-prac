import React, { useState } from 'react'
import { useEffect } from 'react'



function App () {

    const [todos, setTodos] = useState([]);

    //useEffect- Defining two parts in it, first the function then the dependency array([]), dependency array means when should this function run 
    // If it is an empty array just like this, then it means it should run on the first mount itself. 
    //You cannot write a async funtion inside a useEffect. You have to make the useffect function Asyc only.

    //This is how you fetch a data from backend using useEffect-> 

    useEffect(() => {
            setInterval ( () =>{
                fetch ("https://sum-server.100xdevs.com/todos")
                .then(async function (res){
                    const json = await res.json();
                    setTodos(json.todos);
                })
            }, 10000)
            
    }, [])

    return (
        <div>
            {todos.map(todo => <Todo key ={todo.id} title = {todo.title} description = {todo.description} />)}
        </div>
    )
}


function Todo({title, description}){
     <div>
        <h1>{title}</h1>
        <h4>{description}</h4>
     </div>
}

export default App;