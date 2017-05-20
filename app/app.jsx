var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var TodoApp = require('TodoApp');

// Load Foundation
// require('style!css!foundation-sites/dist/foundation.min.css')

$(document).foundation();
//APP css
require('style!css!sass!applicationStyles')


ReactDOM.render(
    <TodoApp/>,
  document.getElementById('app')
);
