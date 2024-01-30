import React from "react";
import ThemeContext from "./ThemeContext";
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
  const theme = React.useContext(ThemeContext);

  const keyStyle = {
    width: `${width}px`,
    height: `${height}px`,
    backgroundColor: isPressed ? `${theme.pressedColor}` : `${theme.keyColor}`,
    boxShadow: isPressed
      ? `0px 0px 1px 0px ${theme.shadowColor}`
      : `0px 0px 1px 0 ${theme.shadowColor}, 3px 3px 4px 0 ${theme.shadowColor}`,
    border: "none",
    borderRadius: "3px",
    color: theme.textColor,
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
