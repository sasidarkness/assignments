import React, { useState } from "react";

function ThemeSwitcher() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div>
      <p>Current Theme: {theme}</p>
      <button onClick={toggleTheme}>Switch Theme</button>
    </div>
  );
}

export default ThemeSwitcher;