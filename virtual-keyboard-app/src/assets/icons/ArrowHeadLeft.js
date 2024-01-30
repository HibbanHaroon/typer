import React from "react";

const ArrowHeadLeft = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      viewBox="0 0 24 24"
    >
      <g id="evaArrowheadLeftFill0">
        <g id="evaArrowheadLeftFill1">
          <g id="evaArrowheadLeftFill2" fill={props.textColor}>
            <path d="M11.64 5.23a1 1 0 0 0-1.41.13l-5 6a1 1 0 0 0 0 1.27l4.83 6a1 1 0 0 0 .78.37a1 1 0 0 0 .78-1.63L7.29 12l4.48-5.37a1 1 0 0 0-.13-1.4Z" />
            <path d="m14.29 12l4.48-5.37a1 1 0 0 0-1.54-1.28l-5 6a1 1 0 0 0 0 1.27l4.83 6a1 1 0 0 0 .78.37a1 1 0 0 0 .78-1.63Z" />
          </g>
        </g>
      </g>
    </svg>
  );
};

export default ArrowHeadLeft;
