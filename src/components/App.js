import React, { useState } from "react";
import "./../styles/App.css";
import TodoList from "./TodoList";

const initialState = [
  { title: "Learn React", isCompleted: false, id: 0 },
  { title: "Build a React app", isCompleted: false, id: 1 },
  { title: "Deploy the React app", isCompleted: false, id: 2 },
];

const App = () => {
  const [todos, setTodos] = useState(initialState);

  function handleComplete(id) {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    );
    setTodos(newTodos);
  }

  return (
    <div>
      {/* Do not remove the main div */}
      <TodoList todos={todos} onComplete={handleComplete} />
    </div>
  );
};

export default App;
