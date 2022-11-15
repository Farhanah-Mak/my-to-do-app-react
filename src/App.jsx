import React, { useState } from 'react'

import './App.css'
import ToDo from './components/ToDo.jsx'
import ToDoForm from './components/ToDoForm.jsx'

// tasks
// 1. create components which can be reused
// 2. handle top level state to push tasks 
// 3. handle delete from tasks
// 4. style individual components


export default function App() {
  //hard coded the values as for now
  const [toDos, setToDos] = React.useState([]);


  //adding a task 
  const addTask = (text) => {
    const newTask = [...toDos, { text }]
    setToDos(newTask)
  }


  //deleting a task
  const deleteTask = (index) => {
    // const taskToBeDeleted = [...toDos]
    //used slice method instead of spread operator
    const taskToBeDeleted = toDos.slice()
    taskToBeDeleted.splice(index, 1)
    setToDos(taskToBeDeleted)
  }

  return (
    <div className="app">
      <h2 className="title">You have {toDos.length}  ToDos</h2>
      <div className="todo-list">

        {toDos.map((toDo, index) => (
          <ToDo key={index}
            todo={toDo}
            deleteTask={deleteTask}
          />
        ))}

        <ToDoForm onTaskAdded={addTask} />
      </div>
    </div>
  )
}
