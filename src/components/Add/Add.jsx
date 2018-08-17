import React, { Component } from 'react';
import './Add.css';

class Add extends Component {
  constructor (props) {
    super(props)
    this.state = { value: '' }
  }

  handleSubmit (event) {
    event.preventDefault()
    this.props.onSubmit(this.state.value)
  }

  handleChange (event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <form onSubmit={e => this.handleSubmit(e)}>
        <label>Todo
          <input value={this.state.value} type="text" onChange={e => this.handleChange(e)} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default Add;
