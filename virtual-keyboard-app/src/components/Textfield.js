import React, { useRef, useEffect } from "react";
import "./Textfield.css";

const Textfield = (props) => {
  const inputRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = () => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    };

    document.body.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleBlur = () => {
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.scrollLeft = inputRef.current.scrollWidth;
      }
    }, 0);
  };

  return (
    <input
      type="text"
      autoFocus
      ref={inputRef}
      onBlur={handleBlur}
      style={{
        backgroundColor: props.keyColor,
        color: props.textColor,
      }}
      placeholder="Type something idiot..."
    />
  );
};

export default Textfield;
