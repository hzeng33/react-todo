import TodoListItem from "./TodoListItem";
import "../App.css";
import propTypes from "prop-types";

function TodoList({ todoList, onRemoveTodo }) {
  return (
    <div className="todo-list">
      <ul>
        {todoList.map((item) => {
          return (
            <TodoListItem
              key={item.id}
              todo={item}
              onRemoveTodo={onRemoveTodo}
            />
          );
        })}
      </ul>
    </div>
  );
}

TodoList.propTypes = {
  todoList: propTypes.array,
  onRemoveTodo: propTypes.func,
};

export default TodoList;
