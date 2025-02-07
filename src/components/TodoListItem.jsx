import style from "./TodoListItem.module.css";
import propTypes from "prop-types";

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

TodoListItem.prototypes = {
  todo: propTypes.object,
  onRemoveTodo: propTypes.func,
};

export default TodoListItem;
