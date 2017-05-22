var expect = require('expect');

var TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {

beforeEach(() => {
  localStorage.removeItem('todos');
});

  it('should Exist', () => {
    expect(TodoAPI).toExist();
  });

  describe('setTodos', () => {
      it('should set valid todos array', () => {
        var todos = [{
          id: 23,
          test: 'test all files',
          completed: false
        }];
        TodoAPI.setTodos(todos);
        var actualTodos = JSON.parse(localStorage.getItem('todos'));
        expect(actualTodos).toEqual(todos);
      });

  });

  describe('getTodos', () => {
    it('it should return empty array for bad localStorage data', () => {
      var actualTodos = TodoAPI.getTodos();
        expect(actualTodos).toEqual([]);
    });
  });
});
