// App.js
import React, { useState, useEffect } from "react";
import VirtualKeyboard from "./components/VirtualKeyboard";
import ThemeChanger from "./components/ThemeChanger";
import ThemeContext from "./context/ThemeContext";
import themes from "./data/themes";
import "./App.css";
import Textfield from "./components/Textfield";
import MobileView from "./components/MobileView";
import Socials from "./components/Socials";
import MusicPlayer from "./components/MusicPlayer";

const App = () => {
  const [currentTheme, setCurrentTheme] = useState(themes["normal"]);
  const [nextTheme, setNextTheme] = useState(themes["black"]);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const handleThemeChange = (themes) => {
    setCurrentTheme(themes[0]);
    setNextTheme(themes[1]);
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
      <ThemeContext.Provider value={[currentTheme, nextTheme]}>
        <div className="settings-container">
          <div className="movie-player">
            <MusicPlayer />
          </div>
          <div className="theme-container">
            <ThemeChanger onThemeChange={handleThemeChange} />
          </div>
        </div>
        <div className="center-container">
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
        </div>
        <Socials />
      </ThemeContext.Provider>
    </div>
  );
};

export default App;
