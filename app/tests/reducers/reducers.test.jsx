var expect = require('expect');
var df = require('deep-freeze-strict');

var reducers = require('reducers');

describe('Reducers', () => {

    describe('searchTextReducer', () => {
      it('Should set search text', () => {
          var action = {
            type: 'SET_SEARCH_TEXT',
            searchText: 'dog'
          };

          var res = reducers.searchTextReducer(df(''), df(action));

          expect(res).toEqual(action.searchText);
      });

      // Test that verify the showCompleted

      it('Should toggle the show Completed', () => {
        var action = {
          type: 'TOGGLE_SHOW_COMPLETED'
        };
        var res = reducers.showCompletedReducer(df(false),df(action));
        expect(res).toEqual(true);
      });


    });
});
