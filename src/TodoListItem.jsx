function TodoListItem({ todo, onRemoveTodo }) {
  return (
    <div>
      <li>
        {todo.title}{" "}
        <button onClick={() => onRemoveTodo(todo.id)}>Remove</button>
      </li>
    </div>
  );
}

export default TodoListItem;
