import actionTypes from '../actions/types';

function _handleAdd(state, action) {
  state.todos.push(action.todos);
  return state;
}

export default function (state = {todos: []}, action) {
  switch (action.type) {
    case actionTypes.ADD:
      return _handleAdd(state, action);
    default:
      return state;
  }
};
