import React from "react";

const PauseIcon = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={props.height}
      viewBox="0 -960 960 960"
      width={props.width}
    >
      <path
        fill={props.keyColor}
        d="M792-56 56-792l56-56 736 736-56 56ZM560-514l-80-80v-246h240v160H560v166ZM400-120q-66 0-113-47t-47-113q0-66 47-113t113-47q23 0 42.5 5.5T480-418v-62l80 80v120q0 66-47 113t-113 47Z"
      />
    </svg>
  );
};

export default PauseIcon;