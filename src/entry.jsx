import AddTodo from './containers/add-todo';
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import reducers from './reducers';
import {Provider} from 'react-redux';

const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <AddTodo />
  </Provider>,
  document.getElementById("content")
);
