var $ = require('jquery');
module.exports = {
  setTodos: function(todos) {
    if($.isArray(todos)){
      localStorage.setItem('todos', JSON.stringify(todos));
      return todos;
    }
  },
  getTodos: function(){
    var stringTodos = localStorage.getItem('todos');
    var todos = [];

    try{
        todos = JSON.parse(stringTodos);
    } catch(e){

    }

    if($.isArray(todos)){
      return todos;
    } else{
        return [];
    }
  },

  filterTodos: function(todos, showCompleted, searchText){

    var filteredTodos = todos;
    //Filter by showCompleted
    filteredTodos = filteredTodos.filter((todo) => {
      return !todo.completed || showCompleted;
    });

    //Filter By Search text


    filteredTodos = filteredTodos.filter((todo) => {
      var text = todo.text.toLowerCase();
      if(searchText.length > 0){
          if((text).indexOf(searchText) > -1){
            return todo;
          }
      } else{
        return todo;
      }
    });



    //Sort Todos with non-completed first
    filteredTodos.sort((a, b) => {
      if(!a.completed && b.completed){
        return -1;
      } else if(a.completed && !b.completed){
        return 1;
      } else{
        return 0;
      }
    });


    return filteredTodos;
  }
};
