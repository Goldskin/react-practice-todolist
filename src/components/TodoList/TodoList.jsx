import React, { Component } from 'react';
import './TodoList.css';
import Todo from '../Todo/Todo';

class TodoList extends Component {
  getTodo () {
    return this.props.list.map((value, key) => {
      return (
        <Todo
          key={key} 
          onClick={() => this.props.onClick(key)}
          description={value}></Todo>
      )
    })

  }


  render() {
    return (
      <div className="TodoList">{this.getTodo()}</div>
    )
  }
}

export default TodoList;
