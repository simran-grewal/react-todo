var React = require('react');
import Todo from 'Todo';
var TodoAPI = require('TodoAPI');
var {connect} = require('react-redux');
export var TodoList = React.createClass({
  render: function(){
    var {todos, showCompleted, searchText}  = this.props;
    var renderTodos = () => {
      var filterTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);
      if(filterTodos.length === 0){
        return (
          <p className = "container__message">Nothing to do</p>
        );
      }
      return filterTodos.map((todo) => {
        return(
          <Todo key = {todo.id} {...todo}/>
        );
      });
    };
    return (
      <div>
        {renderTodos()}
      </div>
    )
  }
});


export default connect(
  (state) => {
    return state;
  }
)(TodoList);
