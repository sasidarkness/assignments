import React from "react";

function Task() {
  // ✅ Sample todo list array with unique IDs
  const todos = [
    { id: 1, task: "Learn React basics" },
    { id: 2, task: "Practice JavaScript" },
    { id: 3, task: "Build a portfolio project" },
    { id: 4, task: "Revise SQL queries" },
    { id: 5, task: "Prepare for interviews" }
  ];

  return (
    <div>
      <h2>Todo List</h2>
      {todos.length > 0 ? (
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>{todo.task}</li> 
          ))}
        </ul>
      ) : (
        <p>No Tasks Available</p> 
      )}
    </div>
  );
}

export default Task;