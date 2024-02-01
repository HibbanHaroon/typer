import React from "react";
import ThemeContext from "../context/ThemeContext";
import PropTypes from "prop-types";
import "./Key.css";

const Key = ({
  texts,
  icon,
  width,
  height,
  iconWidth,
  iconHeight,
  isPressed,
  onClick,
}) => {
  const themes = React.useContext(ThemeContext);
  const currentTheme = themes[0];

  const keyStyle = {
    width: `${width}px`,
    height: `${height}px`,
    backgroundColor: isPressed
      ? `${currentTheme.pressedColor}`
      : `${currentTheme.keyColor}`,
    boxShadow: isPressed
      ? `0px 0px 1px 0px ${currentTheme.shadowColor}`
      : `0px 0px 1px 0 ${currentTheme.shadowColor}, 3px 3px 4px 0 ${currentTheme.shadowColor}`,
    border: "none",
    borderRadius: "3px",
    color: currentTheme.textColor,
  };

  return (
    <button className="key" style={keyStyle} onClick={onClick}>
      {icon ? (
        <div className="key-icon">{icon}</div>
      ) : (
        texts.map((text, index) => (
          <div key={index} className="key-text">
            {text}
          </div>
        ))
      )}
    </button>
  );
};

Key.propTypes = {
  texts: PropTypes.arrayOf(PropTypes.string).isRequired,
  icon: PropTypes.string,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  iconWidth: PropTypes.number,
  iconHeight: PropTypes.number,
  isPressed: PropTypes.bool.isRequired,
  onClick: PropTypes.func,
};

export default Key;
