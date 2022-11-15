import React from "react";
// import '../App.css'

export default function ToDo({ todo, deleteTask }) {
  return (
    <div className="todo">
      {todo.text}
      <button
        className='delete-btn'
        onClick={deleteTask}
      >X</button>
    </div>
  );
}