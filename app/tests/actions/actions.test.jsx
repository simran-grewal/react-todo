var actions = require('actions');
var expect = require('expect');

describe('Actions', () => {
  it('It should generate search text action', () => {
    var action = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'Some search text'
    };
    var res = actions.setSearchText(action.searchText);
    expect(res).toEqual(action);
  });

  it('It should generate add todo action', () => {
    var action = {
      type: 'ADD_TODO',
      text: 'Think to do'
    };

    var res = actions.addTodo(action.text);
    expect(res).toEqual(action);
  });
});
