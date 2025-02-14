import { useState } from "react";
import InputWithLabel from "./InputWithLabel";
import style from "./TodoForm.module.css";
import propTypes from "prop-types";

function AddTodoForm({ onAddTodo }) {
  const [todoTitle, setTodoTitle] = useState("");

  const handleTitleChange = (event) => {
    let newTodoTitle = event.target.value;
    setTodoTitle(newTodoTitle);
  };

  const handleAddTodo = (event) => {
    event.preventDefault();

    //console.log(todoTitle);
    const newTodo = {
      title: todoTitle,
      id: Date.now(),
    };
    onAddTodo(newTodo);
    setTodoTitle("");
  };

  return (
    <>
      <form onSubmit={handleAddTodo}>
        <InputWithLabel
          todoTitle={todoTitle}
          handleTitleChange={handleTitleChange}>
          Title:
        </InputWithLabel>
        <button id="submitBtn" type="submit" className={style.AddButton}>
          Add
        </button>
      </form>
    </>
  );
}

AddTodoForm.propTypes = {
  onAddTodo: propTypes.func,
};

export default AddTodoForm;
