import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './views/TodoList';
import { Provider } from 'react-redux';
import store from './store/index';

ReactDOM.render(
  <Provider store={store}>
    <TodoList />
  </Provider>,
  document.getElementById('root')
);