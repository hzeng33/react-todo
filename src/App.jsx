import "./App.css";

const todoList = [
  {
    id: 1,
    title: "Grocery store shopping",
  },
  {
    id: 2,
    title: "Do laundry",
  },
  {
    id: 3,
    title: "Complete assignments",
  },
  {
    id: 4,
    title: "Practice Leetcode problems",
  },
];

function App() {
  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todoList.map((item) => {
          return <li key={item.id}>{item.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
