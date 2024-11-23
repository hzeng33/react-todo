import { useState } from "react";
import "./App.css";

function AddTodoForm({ onAddTodo }) {
  const [todoTitle, setTodoTitle] = useState("");

  const handleTitleChange = (event) => {
    let newTodoTitle = event.target.value;
    setTodoTitle(newTodoTitle);
  };

  const handleAddTodo = (event) => {
    event.preventDefault();

    console.log(todoTitle);
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
        <label htmlFor="todoTitle">Title: </label>
        <input
          id="todoTitle"
          name="title"
          type="text"
          value={todoTitle}
          onChange={handleTitleChange}
        />
        <button id="submitBtn" type="submit">
          Add
        </button>
      </form>
    </>
  );
}

export default AddTodoForm;
