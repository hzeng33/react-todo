function AddTodoForm(props) {
  const handleAddTodo = (event) => {
    event.preventDefault();

    let todoTile = event.target.title.value;
    console.log(todoTile);
    props.onAddTodo(todoTile);

    event.target.reset();
  };

  return (
    <>
      <form onSubmit={handleAddTodo}>
        <label htmlFor="todoTitle">Title </label>
        <input id="todoTitle" name="title" type="text" />
        <button type="submit">Add</button>
      </form>
    </>
  );
}

export default AddTodoForm;
