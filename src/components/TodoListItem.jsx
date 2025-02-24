import style from "./TodoListItem.module.css";
import PropTypes from "prop-types";

function TodoListItem({ todo, onRemoveTodo, onToggleComplete }) {
  return (
    <div className={style.Container}>
      <li className={style.ListItem}>
        <span
          className={
            todo.isCompleted ? style.completedSquare : style.incompleteSquare
          }
          onClick={() => onToggleComplete(todo.id)}>
          {todo.isCompleted && "✔"}
        </span>
        {todo.title}
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
  onToggleComplete: PropTypes.func,
};

export default TodoListItem;
