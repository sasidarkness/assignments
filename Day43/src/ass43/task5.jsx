import React, { useState } from "react";

function ColorChanger() {
  const [color, setColor] = useState("white");

  const changeColor = () => {
    // Toggle between two colors
    setColor(color === "white" ? "lightblue" : "white");
  };

  return (
    <div style={{ backgroundColor: color, height: "100vh" }}>
      <button onClick={changeColor}>Change Background</button>
    </div>
  );
}

export default ColorChanger;