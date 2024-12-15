import TodoListItem from "./TodoListItem";
import "./App.css";

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

export default TodoList;
