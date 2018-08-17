import './Todo.css';
import React from 'react';

function Todo (props) {
  return (
    <li>
      {props.description} 
      <button 
      onClick={() => props.onClick()}>Delete</button>
    </li>
  )
}

export default Todo;
