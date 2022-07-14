import React, { useState } from 'react'
import TodoItem from './TodoItem';
import {v4 as uuid} from "uuid";

const initialState = [
    {id:1,status:false,title:"Taks 1"},
    {id:2,status:false,title:"Taks 2"},
    {id:3,status:false,title:"Taks 3"},
]

const Todo = () => {
    const [todos,setTodos] = useState(initialState);
    const [currentTodo,setCurrentTodo] = useState("");

const todoHandler = (e)=>{
    setCurrentTodo(e.target.value)
}

const handleAddTask = ()=>{
    const payload = {id:uuid(),status:false,title:currentTodo}
    setTodos([...todos,payload])
    setCurrentTodo("")
}

const handleDelete = (id) =>{
    var newTodoList = todos.filter((item)=>item.id !== id)
    setTodos(newTodoList)
}

const toggleStatus = (id) =>{
    var newTodostatus = todos.map((item)=> item.id === id ? {...item,status:!item.status}: item)
    setTodos(newTodostatus) 
}


  return (
    <div>
        <h2>Todo</h2>
        <input type="text" onChange={todoHandler} value={currentTodo}/>
        <button onClick={handleAddTask}>ADD</button>
        {todos.length &&
        todos.map((item) => <TodoItem  key={item.id} {...item} toggleStatus={toggleStatus} handleDelete={handleDelete}/>)}
    </div>
  )
}

export default Todo