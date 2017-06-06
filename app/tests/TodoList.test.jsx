var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');
//var TodoList = require('TodoList');

import ConnectedTodoList, {TodoList} from 'TodoList'

var Todo = require('Todo');
describe('TodoList', () => {
  it('Todo List should exist', () => {
    expect(TodoList).toExist();
  });

  it('Should Render One Todo Component for each todo item', () => {
    var todos = [{
        id:1,
        text: 'Do something'
    },{
        id: 2,
        text: 'CheckEmail'
    }];
      var todoList = TestUtils.renderIntoDocument(<TodoList todos = {todos}/>);
      var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList,Todo);
      //It Tells how many times component render to Todo ;
        expect(todosComponents.length).toBe(todos.length);
  });
});
