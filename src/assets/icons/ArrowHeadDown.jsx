import React from "react";

const ArrowHeadDown = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      viewBox="0 0 24 24"
    >
      <g id="evaArrowheadDownFill0">
        <g id="evaArrowheadDownFill1">
          <g id="evaArrowheadDownFill2" fill={props.textColor}>
            <path d="M17.37 12.39L12 16.71l-5.36-4.48a1 1 0 1 0-1.28 1.54l6 5a1 1 0 0 0 1.27 0l6-4.83a1 1 0 0 0 .15-1.41a1 1 0 0 0-1.41-.14Z" />
            <path d="M11.36 11.77a1 1 0 0 0 1.27 0l6-4.83a1 1 0 0 0 .15-1.41a1 1 0 0 0-1.41-.15L12 9.71L6.64 5.23a1 1 0 0 0-1.28 1.54Z" />
          </g>
        </g>
      </g>
    </svg>
  );
};

export default ArrowHeadDown;
