'use strict';
import AddTodo from '../components/add-todo.jsx';
import {connect} from 'react-redux';
import * as actions from '../actions';

function mapStateToProps(state) {
  return {
    todos: state.todos
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onAdd: (todos) => dispatch(actions.onAdd(todos))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
