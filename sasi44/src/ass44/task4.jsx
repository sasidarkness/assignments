import React from "react";

function List() {
  const cities = [
    { id: 1, name: "Chennai" },
    { id: 2, name: "Bangalore" },
    { id: 3, name: "Mumbai" },
    { id: 4, name: "Delhi" },
    { id: 5, name: "Hyderabad" }
  ];

  return (
    <div>
      <h2>List of Cities</h2>
      <ul>
        {cities.map((city) => (
          <li key={city.id}>{city.name}</li>  
        ))}
      </ul>
    </div>
  );
}

export default List;