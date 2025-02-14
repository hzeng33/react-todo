import style from "./TodoListItem.module.css";
import PropTypes from "prop-types";

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
  todo: PropTypes.object,
  onRemoveTodo: PropTypes.func,
};

export default TodoListItem;
