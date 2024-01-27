// Key.js
import React from 'react';
import PropTypes from 'prop-types';
import './Key.css';

const Key = ({ texts, icon, width, height, iconWidth, iconHeight, isPressed, onClick }) => {
  // Black Color Pallete
  const keyboardColor = '#535157'
  const keyColor = '#020202'
  const pressedColor = '#a4a0ac'
  const textColor = '#F0F0F0'
  const shadowColor = '#353535'

  //Normal Color Pallete 
  // const keyboardColor = '#D9DDE0'
  // const keyColor = '#EAEAEA'
  // const pressedColor = '#c6c6d3'
  // const textColor = '#020202'
  // const shadowColor = '#AEAEC0'

  const keyStyle = {
    width: `${width}px`,
    height: `${height}px`,
    backgroundColor: isPressed ? `${pressedColor}` : `${keyColor}`,
    boxShadow: isPressed
      ? `0px 0px 1px 0px ${shadowColor}`
      : `0px 0px 1px 0 ${shadowColor}, 3px 3px 4px 0 ${shadowColor}`,  
    border: 'none',
    borderRadius: '3px',
    color: textColor
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
  isPressed: PropTypes.bool.isRequired,
  onClick: PropTypes.func,
};

export default Key;
