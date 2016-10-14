import actionTypes from '../actions/types';


function _handleDelete(state, action) {
  return Object.assign({}, state, {
    fruit: state.fruit.filter(name => name !== action.fruitName)
  });
}

function _handleAdd(state, action) {
  state.todos.push(action.todos);
  return state;
}

export default function (state = {todos: []}, action) {
  switch (action.type) {
    case actionTypes.DELETE_FRUIT:
      return _handleDelete(state, action);
    case actionTypes.ADD:
      return _handleAdd(state, action);
    default:
      return state;
  }
};
