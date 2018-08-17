import React, { Component } from 'react';
import './App.css';
import TodoList from '../TodoList/TodoList';
import Add from '../Add/Add';
import Toastr from 'toastr';
import 'toastr/build/toastr.min.css';


class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      history: [{
        todo: []
      }],
      step: 0
    }
  }

  /**
   * add a todo in the state history and increment step
   * @param {string} todo 
   */
  addTodo (todo) {
    if (!todo.length) {
      return
    }

    const history = this.state.history.slice(0, this.state.step + 1);
    const current = history[history.length - 1];
    const todolist = current.todo.slice();
    const currentStep = this.state.step

    todolist[this.state.step] = todo

    this.setState({
      history: history.concat([{
        todo: todolist
      }]),
      step: this.state.step + 1
    })

    this.undo(currentStep)
  }

  /**
   * Add a toastr message which can undo the last step
   * @param {Number} step 
   */
  undo (step) {
    Toastr.options.onclick = () => {
      this.jumpTo(step)
    }

    Toastr.info('Undo')
  }

  /**
   * remove a todo
   * @param {number} i key of todo
   */
  removeTodo (i = 0) {
    const history = this.state.history.slice(0, this.state.step + 1);
    const current = history[history.length - 1];
    const TodoList = current.todo.slice();
    const currentStep = this.state.step

    TodoList.splice(i, 1);

    this.setState({
      history: history.concat([{
        todo: TodoList
      }]),
      step: this.state.step + 1
    })

    this.undo(currentStep)
  }

  /**
   * jump to a step
   * @param {*} step 
   */
  jumpTo(step) {
    this.setState({
      step: step
    })
  }

  /**
   * render function
   * @return {any}
   */
  render() {
    const current = this.state.history[this.state.step]
    return (
      <div className="App">
        <Add onSubmit={todo => this.addTodo(todo)}></Add>
        <TodoList
          onClick={(i) => this.removeTodo(i)}
          list={current.todo}></TodoList>
      </div>
    )
  }
}

export default App;
