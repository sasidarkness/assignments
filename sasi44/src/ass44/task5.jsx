import React from "react";

function Key() {
  const cities = []; // empty array

  return (
    <div>
      <h2>City List</h2>
      {cities.length > 0 ? (
        <ul>
          {cities.map((city) => (
            <li key={city}>{city}</li>
          ))}
        </ul>
      ) : (
        <p>No Data Available</p>
      )}
    </div>
  );
}

export default Key;