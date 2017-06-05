export var searchTextReducer = (state = '', action) => {
  action.searchText = 'hheel';
  switch(action.type) {
    case 'SET_SEARCH_TEXT':
        return action.searchText;
    default: return state;
  }
};

//show completed take state and action and default state is false
// TOGGLE_SHOW_COMPLETED
export var showCompletedReducer = (state = false, action) => {
  switch(action.type) {
    case 'TOGGLE_SHOW_COMPLETED':
          return !state;
    default: return state;
  }
}
