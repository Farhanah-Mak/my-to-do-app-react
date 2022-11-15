import React, { useState } from 'react'
import '../App.css'


export default function ToDoForm({ onTaskAdded }) {
  const [task, setTask] = React.useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task !== '') {
     onTaskAdded(task);
    }
    setTask('')
  }

  return (
    <form
      className='form'
      onSubmit={handleSubmit}>
      <input
        className="input"
        type="text"
        placeholder='Enter your task'
        value={task}
        onChange={(e) => { setTask(e.target.value) }}
      />
      <button
        className="submit-btn"
        type="submit">Submit</button>
    </form>
  )
}