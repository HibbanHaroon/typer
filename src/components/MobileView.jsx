import React from "react";
import haha from "../assets/images/haha.png";
import ThemeContext from "../context/ThemeContext";
import "./MobileView.css";

const MobileView = () => {
  const themes = React.useContext(ThemeContext);
  const currentTheme = themes[0];

  const textStyle = {
    color: currentTheme.textColor,
  };
  return (
    <div>
      <h1 style={textStyle}>Haha Dumb*ss!</h1>
      <img src={haha} alt="Ray Liotta laughing at your ass"></img>
      <h3 style={textStyle}>
        It looks like someone is on their mobile phone.{" "}
      </h3>
      <p style={textStyle}>
        If you would be so kind as to visit this website on your laptop or
        monitor to fully enjoy this website. ;)
      </p>
    </div>
  );
};

export default MobileView;
