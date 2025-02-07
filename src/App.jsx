import "./App.css";
import TodoList from "./components/TodoList";
import AddTodoForm from "./components/AddTodoForm";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [sortOrder, setSortOrder] = useState("asc");
  const [sortField, setSortField] = useState("title");

  const fetchData = async () => {
    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
      },
    };

    const url = `https://api.airtable.com/v0/${
      import.meta.env.VITE_AIRTABLE_BASE_ID
    }/${import.meta.env.VITE_TABLE_NAME}`;

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const data = await response.json();
      //console.log(data);

      //Sort to-do items in ascending order.
      // data.records.sort((objA, objB) => {
      //   const titleA = objA.fields.title.toUpperCase();
      //   const titleB = objB.fields.title.toUpperCase();
      //   if (titleA < titleB) return -1;
      //   if (titleA > titleB) return 1;
      //   return 0;
      // });

      //Sort to-do items in descending order.
      // data.records.sort((objA, objB) => {
      //   const titleA = objA.fields.title.toUpperCase();
      //   const titleB = objB.fields.title.toUpperCase();
      //   if (titleA < titleB) return 1;
      //   if (titleA > titleB) return -1;
      //   return 0;
      // });

      const todos = data.records.map((todo) => {
        const newTodo = {
          id: todo.id,
          title: todo.fields.title,
          createdTime: todo.createdTime,
        };

        return newTodo;
      });
      //console.log(todos);

      setTodoList(todos);
      setIsLoading(false);
    } catch (error) {
      console.log(`Fetch error: ${error.message}`);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem("savedTodoList", JSON.stringify(todoList));
    }
  }, [todoList, isLoading]);

  const addTodo = (newTodo) => {
    setTodoList((prevTodo) => {
      return [...prevTodo, newTodo];
    });
  };

  const removeTodo = (id) => {
    const updatedTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(updatedTodoList);
  };

  const sortedTodoList = [...todoList].sort((a, b) => {
    let fieldA = a[sortField];
    let fieldB = b[sortField];

    if (typeof fieldA === "string" && typeof fieldB === "string") {
      fieldA = fieldA.toUpperCase();
      fieldB = fieldB.toUpperCase();
    }

    if (fieldA < fieldB) {
      return sortOrder === "asc" ? -1 : 1;
    } else if (fieldA > fieldB) {
      return sortOrder === "asc" ? 1 : -1;
    }
    return 0;
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <h1>Todo List</h1>
              <AddTodoForm onAddTodo={addTodo} />
              <div className="sort-controls">
                <button
                  className="sort-order"
                  onClick={() =>
                    setSortOrder(sortOrder === "asc" ? "desc" : "asc")
                  }>
                  Toggle Sort Order (Currently:{" "}
                  {sortOrder === "asc" ? "Ascending" : "Descending"})
                </button>
                <button
                  className="sort-field"
                  onClick={() =>
                    setSortField(
                      sortField === "title" ? "createdTime" : "title"
                    )
                  }>
                  Toggle Sort Field (Currently: {sortField})
                </button>
              </div>
              {isLoading ? (
                <p id="loading-indicator">Loading...</p>
              ) : (
                <TodoList todoList={sortedTodoList} onRemoveTodo={removeTodo} />
              )}
            </>
          }
        />
        <Route path="/new" element={<h1>New Todo List</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
