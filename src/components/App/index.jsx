import React, { useState } from "react";
import ClassContextComponent from "../ClassContextComponent";
import FunctionContextComponent from "../FunctionContextComponent";

export const ThemeContext = React.createContext();

const App = () => {
  const [darkTheme, setDarkTheme] = useState(true);

  const toggleTheme = () => {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
  };

  return (
    <div>
      <ThemeContext.Provider value={darkTheme}>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <ClassContextComponent />
        <FunctionContextComponent />
      </ThemeContext.Provider>
    </div>
  );
};

export default App;
