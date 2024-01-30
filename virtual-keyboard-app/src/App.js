// App.js
import React, { useState } from "react";
import VirtualKeyboard from "./components/VirtualKeyboard";
import ThemeChanger from "./components/ThemeChanger";
import ThemeContext from "./components/ThemeContext";
import themes from "./components/themes";
import "./App.css";

const App = () => {
  const [currentTheme, setCurrentTheme] = useState(themes["normal"]);

  const handleThemeChange = (theme) => {
    setCurrentTheme(theme);
  };
  return (
    <ThemeContext.Provider value={currentTheme}>
      <div className="app" style={{ backgroundColor: currentTheme.keyColor }}>
        <div>
          <ThemeChanger onThemeChange={handleThemeChange} />
        </div>
        <div className="center-container">
          <VirtualKeyboard />
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

// Things to do:
/**
 * 1. Add a button on the top right to change themes such as black, silver, orange, pink, etc.
 * 2. Add a textfield to type in real time. Textfield should be just one line with a cool Time New Roman type font
 * 3. Make the site responsive, that is the keyboard should scale up and down.
 * **/

export default App;
