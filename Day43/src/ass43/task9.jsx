import React, { useState } from "react";



function DropdownMenu() {
  const [selected, setSelected] = useState("");

  return (
    <div>
      <select value={selected} onChange={(e) => setSelected(e.target.value)}>
        <option value="">Select an option</option>
        <option value="React">React</option>
        <option value="Node">Node</option>
        <option value="Express">Express</option>
        <option value="MongoDB">MongoDB</option>
      </select>
      {selected && <p>You selected: {selected}</p>}
    </div>
  );
}

export default DropdownMenu;
  