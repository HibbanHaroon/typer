import React from "react";

const Windows = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      viewBox="0 0 32 32"
    >
      <path
        fill={props.textColor}
        d="m0 4.599l13-1.796v12.599H0zm14.599-2L32 0v15.197H14.599zM0 16.803h13v12.599L0 27.599zm14.599 0H32V32l-17.197-2.401z"
      />
    </svg>
  );
};

export default Windows;
