import React, {useState} from 'react'
import Fragment from 'react';

let counter = 4;

const App = () => {

    const [todos, setTodos ] = useState ([
        {
            id:1,
            title: "hey",
            desc: "first todo",

        },
        {
            id: 2,
            title: "hey2",
            desc: "second todo",

        },
        {
            id: 3,
            title: "hey3",
            desc: "third todo",

        }]);


        function addTodo (){
            //This is with using the spread operator - it spreads all the existing todos and add the 4th todo at the end. 
            setTodos ([...todos,{
                id: counter++,
                
                title: Math.random(),
                desc: Math.random()
            }

            ])
          
            // //The below does the same thing - 
            // const newTodos = [];
            // for (let i =0 ; i <todos.length; i++){
            //     newTodos.push(todos[i]);
            // }
            
            // // newTodos == todos
            // newTodos.push({
            //     id:4, 
            //     title: Math.random(),
            //     desc: Math.random()
            // })

            // //existing ones + 1
            // setTodos(newTodos)

        }
   
  return (
    // here keys help us to identify the ids of todos. 
    // more optimaly render things here. 
    // it is important to write it the right way.
    //Whenever you are rendering a list do make sure your list has a unique indentifier to every element (here it is id), and make sure 
    // key = that specific unique identifier you are providing.
    // Where do you need key -> Whenever you are iterating over an array you need key.  
    

    <div>   
        <button onClick ={addTodo}> Click here to add </button>
        {todos.map (todo => <Todo key ={todo.id} title={todo.title} desc={todo.desc} />)}
    </div>
  )
}

// { todos.map (todo => <Todo key = {todo.id} title={todo.title} desc = {todo.desc} /> )}  -> map and key 

function Todo({title, desc} ){
    return <div>
        <h1>{title}</h1>
        <h5> {desc}</h5>
        
    </div>
}

export default App