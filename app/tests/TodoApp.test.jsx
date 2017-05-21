var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');


var TodoApp  = require('TodoApp');
describe('TodoAPP', () => {
  it('TodoApp should exist', () => {
    expect(TodoApp).toExist();
  });

  it('Should Add todo to the todo state on handleAddTodo', () => {
      var todoText = 'test Text';
      var todoApp  = TestUtils.renderIntoDocument(<TodoApp/>);
      todoApp.setState({todos: []});
      todoApp.handleAddTodo(todoText);

      expect(todoApp.state.todos[0].text).toBe('test Text');
  });
});
