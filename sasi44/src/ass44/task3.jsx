import React from "react";

function Place() {
  const cities = ["Chennai", "Bangalore", "Mumbai", "Delhi", "Hyderabad"];

  return (
    <div>
      <h2>List of Cities</h2>
      <ul>
        {cities.map((city, index) => (
          <li key={index}>{city}</li>
        ))}
      </ul>
    </div>
  );
}

export default Place;