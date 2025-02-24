import TodoListItem from "./TodoListItem";
import "../App.css";
import PropTypes from "prop-types";

function TodoList({ todoList, onRemoveTodo, onToggleComplete }) {
  return (
    <div className="todo-list">
      <ul>
        {todoList.map((item) => {
          return (
            <TodoListItem
              key={item.id}
              todo={item}
              onRemoveTodo={onRemoveTodo}
              onToggleComplete={onToggleComplete}
            />
          );
        })}
      </ul>
    </div>
  );
}

TodoList.propTypes = {
  todoList: PropTypes.array,
  onRemoveTodo: PropTypes.func,
  onToggleComplete: PropTypes.func,
};

export default TodoList;
