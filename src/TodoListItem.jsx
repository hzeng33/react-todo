import style from "./TodoListItem.module.css";

function TodoListItem({ todo, onRemoveTodo }) {
  return (
    <div className={style.Container}>
      <li className={style.ListItem}>
        {todo.title}{" "}
        <button
          onClick={() => onRemoveTodo(todo.id)}
          className={style.RemoveButton}>
          Remove
        </button>
      </li>
    </div>
  );
}

export default TodoListItem;
