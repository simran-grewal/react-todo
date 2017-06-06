var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var {Provider} =  require('react-redux');

var TodoApp = require('TodoApp');

var actions = require('actions');
var store = require('configureStore').configure();


store.subscribe(() => {
  console.log('New state', store.getState());
});


store.dispatch(actions.addTodo('simran'));
store.dispatch(actions.toggleShowCompleted());
store.dispatch(actions.setSearchText('Clean the Yard'));

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
