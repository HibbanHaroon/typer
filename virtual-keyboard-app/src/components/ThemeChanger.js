import React, { useState } from "react";
import themes from "../data/themes";
import "./ThemeChanger.css";

const ThemeChanger = ({ onThemeChange }) => {
  const [currentThemeName, setCurrentThemeName] = useState("normal");
  const [nextTheme, setNextTheme] = useState(themes["black"]);

  const changeTheme = () => {
    const themeKeys = Object.keys(themes);
    const currentIndex = themeKeys.indexOf(currentThemeName);

    // This is to find the new current theme as the user has clicked to change the theme
    const nextIndex = (currentIndex + 1) % themeKeys.length;
    const nextTheme = themes[themeKeys[nextIndex]];
    setCurrentThemeName(themeKeys[nextIndex]);

    // This is to display the next theme to be displayed after the new current theme.
    const nextNextIndex = (nextIndex + 1) % themeKeys.length;
    const nextNextTheme = themes[themeKeys[nextNextIndex]];
    setNextTheme(nextNextTheme);

    onThemeChange([nextTheme, nextNextTheme]);
  };

  return (
    <div
      className="themeChanger"
      style={{
        backgroundColor: nextTheme["keyColor"],
      }}
      onClick={changeTheme}
    ></div>
  );
};

export default ThemeChanger;
