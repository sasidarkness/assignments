import React, { useState } from "react";

function EvenOddChecker() {
  const [number, setNumber] = useState("");

  const handleChange = (e) => {
    setNumber(e.target.value);
  };

  const isEven = number !== "" && Number(number) % 2 === 0;

  return (
    <div>
      <input
        type="number"
        placeholder="Enter a number"
        value={number}
        onChange={handleChange}
      />
      {number !== "" && (
        <p>{isEven ? "Even" : "Odd"}</p>
      )}
    </div>
  );
}

export default EvenOddChecker;