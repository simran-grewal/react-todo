var expect = require('expect');
var df = require('deep-freeze-strict');
var moment = require('moment');
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


      it('Should Add todo item', () => {
        var action = {
          type: 'ADD_TODO',
          text: 'Walk the dog'
        };

        var res = reducers.todoReducer(df([]), df(action));

        expect(res.length).toEqual(1);
        expect(res[0].text).toEqual(action.text);
      });

      it('Should Toggle Todo', () => {
          var action = {
            type: 'TOGGLE_TODO',
            id: 1
          }

          var arr = [
            {
              id: 1,
              text: 'simran',
              completed: true,
              createdAt: moment().unix(),
              completedAt:1212
            }
          ];
          var res = reducers.todoReducer(df(arr), df(action));
          expect(res[0].id).toEqual(arr[0].id);
          expect(res[0].completed).toEqual(false);
          expect(res[0].completedAt).toEqual(undefined);


      });
    });
});
