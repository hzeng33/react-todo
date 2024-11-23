import TodoListItem from "./TodoListItem";

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

function TodoList() {
  return (
    <div>
      <ul>
        {todoList.map((item) => {
          return <TodoListItem key={item.id} todo={item.title} />;
        })}
      </ul>
    </div>
  );
}

export default TodoList;
