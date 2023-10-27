// Key.js
import React from 'react';
import PropTypes from 'prop-types';
import './Key.css';

const Key = ({ texts, icon, width, height, iconWidth, iconHeight, color, onClick }) => {
  const keyStyle = {
    width: `${width}px`,
    height: `${height}px`,
    backgroundColor: color,
  };

  return (
    <button className="key" style={keyStyle} onClick={onClick}>
      {icon ? (
        <div className="key-icon">
          <img src={icon} alt="key-icon" width={iconWidth} height={iconHeight} />
        </div>
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
  color: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Key;
