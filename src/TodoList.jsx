import TodoListItem from "./TodoListItem";
import "./App.css";

function TodoList({ todoList }) {
  return (
    <div className="todo-list">
      <ul>
        {todoList.map((item) => {
          return <TodoListItem key={item.id} todo={item.title} />;
        })}
      </ul>
    </div>
  );
}

export default TodoList;
