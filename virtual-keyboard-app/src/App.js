// App.js
import React, { useState, useEffect } from "react";
import VirtualKeyboard from "./components/VirtualKeyboard";
import ThemeChanger from "./components/ThemeChanger";
import ThemeContext from "./components/ThemeContext";
import themes from "./components/themes";
import "./App.css";
import Textfield from "./components/Textfield";
import MobileView from "./components/MobileView";

const App = () => {
  const [currentTheme, setCurrentTheme] = useState(themes["normal"]);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const handleThemeChange = (theme) => {
    setCurrentTheme(theme);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1100);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="app" style={{ backgroundColor: currentTheme.keyColor }}>
      <div className="theme-container">
        <ThemeChanger onThemeChange={handleThemeChange} />
      </div>
      <div className="center-container">
        <ThemeContext.Provider value={currentTheme}>
          {isSmallScreen ? (
            <MobileView />
          ) : (
            <div>
              <Textfield
                keyColor={currentTheme.keyColor}
                textColor={currentTheme.textColor}
              />
              <VirtualKeyboard />
            </div>
          )}
        </ThemeContext.Provider>
      </div>
    </div>
  );
};

export default App;
