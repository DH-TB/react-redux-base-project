import React from 'react';

class AddTodo extends React.Component {
  add() {
    this.props.onAdd(this.refs.input.value);
    this.refs.input.value = "";
  }

  render() {
    return <div>
      <input type="text" ref="input" placeholder="what need you do?"/>
      <button onClick={this.add.bind(this)}>+</button>
    </div>
  }
}

export default AddTodo;
