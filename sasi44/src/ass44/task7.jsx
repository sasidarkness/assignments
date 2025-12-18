import React from "react";

function Map() {
  const todos = []; 

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
        <p>No Todos yet</p> 
      )}
    </div>
  );
}

export default Map;