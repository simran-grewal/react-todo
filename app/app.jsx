var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var {Provider} =  require('react-redux');

var TodoApp = require('TodoApp');

var actions = require('actions');
var store = require('configureStore').configure();
var TodoAPI = require('TodoAPI');

// import './../playground/firebase/index';

// store.subscribe(() => {
//   var state  = store.getState();
//   console.log('New state', state);
//   TodoAPI.setTodos(state.todos);
// });

// var initialTodos = TodoAPI.getTodos();
// store.dispatch(actions.addTodos(initialTodos));


store.dispatch(actions.startAddTodos());

//Load Foundation
$(document).foundation();

//App CSS
require('style!css!sass!applicationStyles')


ReactDOM.render(
    <Provider store = {store}>
      <TodoApp/>
    </Provider>,
  document.getElementById('app')
);
