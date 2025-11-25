import React from "react";

function TodoList({ todos, onComplete }) {
  return (
    <ul>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} onComplete={onComplete} />
      ))}
    </ul>
  );
}

function Todo({ todo, onComplete }) {
  const { id, title, isCompleted } = todo;

  return (
    <li style={{ textDecoration: isCompleted ? "line-through" : "none" }}>
      {title}
      {" "}
      {!isCompleted && (
        <button
          onClick={() => onComplete(id)}   
        >
          Complete
        </button>
      )}
    </li>
  );
}

export default TodoList;