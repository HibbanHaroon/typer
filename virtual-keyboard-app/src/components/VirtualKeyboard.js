// VirtualKeyboard.js
import React, { useState, useEffect } from "react";
import Key from "./Key";
import "./VirtualKeyboard.css";
import windowsIcon from "../assets/icons/windows.svg";
import arrowUpIcon from "../assets/icons/arrowhead-up.svg";
import arrowDownIcon from "../assets/icons/arrowhead-down.svg";
import arrowLeftIcon from "../assets/icons/arrowhead-left.svg";
import arrowRightIcon from "../assets/icons/arrowhead-right.svg";

const VirtualKeyboard = () => {
  const [pressedKeys, setPressedKeys] = useState(new Set());

  useEffect(() => {
    const handleKeyDown = (e) => {
      const key = e.key === " " ? "Space" : e.key;
      setPressedKeys((prevKeys) => new Set([...prevKeys, key]));
    };

    const handleKeyUp = (e) => {
      const key = e.key === " " ? "Space" : e.key;
      setPressedKeys((prevKeys) => {
        const newKeys = new Set(prevKeys);
        newKeys.delete(key);
        return newKeys;
      });
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        setPressedKeys(new Set());
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  const keyHeight = 45;
  const firstRowHeight = 40;
  const lastRowHeight = 57;
  const arrowKeyHeight = 23;

  return (
    <div className="virtual-keyboard">
      {/* First Row */}
      <div className="row">
        <Key
          texts={["Esc", ""]}
          width={65}
          height={firstRowHeight}
          isPressed={pressedKeys.has("Escape")}
        />
        {Array.from({ length: 12 }, (_, index) => (
          <Key
            key={`F${index + 1}`}
            texts={[`F${index + 1}`, ""]}
            width={55}
            height={firstRowHeight}
            isPressed={pressedKeys.has(`F${index + 1}`)}
          />
        ))}
        <Key
          texts={["PrtScr", ""]}
          width={60}
          height={firstRowHeight}
          isPressed={pressedKeys.has("PrintScreen")}
        />
        <Key
          texts={["Insert", ""]}
          width={60}
          height={firstRowHeight}
          isPressed={pressedKeys.has("Insert")}
        />
        <Key
          texts={["Del", ""]}
          width={60}
          height={firstRowHeight}
          isPressed={pressedKeys.has("Delete")}
        />
      </div>

      {/* Second Row */}
      <div className="row">
        <Key
          texts={["~", "`"]}
          width={62}
          height={keyHeight}
          isPressed={pressedKeys.has("`") || pressedKeys.has("~")}
        />
        {[
          ["!", "1"],
          ["@", "2"],
          ["#", "3"],
          ["$", "4"],
          ["%", "5"],
          ["^", "6"],
          ["&", "7"],
          ["*", "8"],
          ["(", "9"],
          [")", "0"],
          ["_", "-"],
          ["+", "="],
        ].map((texts, index) => (
          <Key
            key={index}
            texts={texts}
            width={62}
            height={keyHeight}
            isPressed={pressedKeys.has(texts[0]) || pressedKeys.has(texts[1])}
          />
        ))}
        <Key
          texts={["Backspace"]}
          width={117}
          height={keyHeight}
          isPressed={pressedKeys.has("Backspace")}
        />
      </div>
      
      <div className="row">
        {/* Third Row */}
        <Key
          texts={["Tab", ""]}
          width={102}
          height={keyHeight}
          isPressed={pressedKeys.has("Tab")}
        />
        {[
          ["", "Q"],
          ["", "W"],
          ["", "E"],
          ["", "R"],
          ["", "T"],
          ["", "Y"],
          ["", "U"],
          ["", "I"],
          ["", "O"],
          ["", "P"],
          ["{", "["],
          ["}", "]"],
          ["|", "\\"],
        ].map((texts, index) => (
          <Key
            key={index}
            texts={texts}
            width={63}
            height={keyHeight}
            isPressed={
              pressedKeys.has(texts[0]) ||
              pressedKeys.has(texts[1].toLowerCase()) ||
              pressedKeys.has(texts[1].toUpperCase())
            }
          />
        ))}
      </div>

      <div className="row">
        {/* Fourth Row */}
        <Key
          texts={["Caps", ""]}
          width={118}
          height={keyHeight}
          isPressed={pressedKeys.has("CapsLock")}
        />
        {[
          ["", "A"],
          ["", "S"],
          ["", "D"],
          ["", "F"],
          ["", "G"],
          ["", "H"],
          ["", "J"],
          ["", "K"],
          ["", "L"],
          [":", ";"],
          ['"', "'"],
        ].map((texts, index) => (
          <Key
            key={index}
            texts={texts}
            width={63}
            height={keyHeight}
            isPressed={
              pressedKeys.has(texts[0]) ||
              pressedKeys.has(texts[1].toLowerCase()) ||
              pressedKeys.has(texts[1].toUpperCase())
            }
          />
        ))}
        <Key
          texts={["Enter"]}
          width={118}
          height={keyHeight}
          isPressed={pressedKeys.has("Enter")}
        />
      </div>

      <div className="row">
        {/* Fifth Row */}
        <Key
          texts={["Shift", ""]}
          width={155}
          height={keyHeight}
          isPressed={pressedKeys.has("Shift")}
        />
        {[
          ["", "Z"],
          ["", "X"],
          ["", "C"],
          ["", "V"],
          ["", "B"],
          ["", "N"],
          ["", "M"],
          ["<", ","],
          [">", "."],
          ["?", "/"],
        ].map((texts, index) => (
          <Key
            key={index}
            texts={texts}
            width={63}
            height={keyHeight}
            isPressed={
              pressedKeys.has(texts[0]) ||
              pressedKeys.has(texts[1].toLowerCase()) ||
              pressedKeys.has(texts[1].toUpperCase())
            }
          />
        ))}

        <Key
          texts={["Shift", ""]}
          width={155}
          height={keyHeight}
          isPressed={pressedKeys.has("Shift")}
        />
      </div>

      <div className="row">
        {/* Sixth Row */}
        <Key
          texts={["Ctrl", ""]}
          width={80}
          height={lastRowHeight}
          isPressed={pressedKeys.has("Control")}
        />
        <Key
          texts={["Fn", ""]}
          width={60}
          height={lastRowHeight}
          isPressed={pressedKeys.has("Fn")}
        />
        <Key
          icon={windowsIcon}
          iconWidth={24}
          iconHeight={24}
          width={80}
          height={lastRowHeight}
          isPressed={pressedKeys.has("Meta")}
        />
        <Key
          texts={["Alt", ""]}
          width={60}
          height={lastRowHeight}
          isPressed={pressedKeys.has("Alt")}
        />
        <Key
          texts={["", ""]}
          width={358}
          height={lastRowHeight}
          isPressed={pressedKeys.has("Space")}
        />
        <Key
          texts={["Alt", ""]}
          width={60}
          height={lastRowHeight}
          isPressed={pressedKeys.has("Alt")}
        />
        <Key
          texts={["Ctrl", ""]}
          width={80}
          height={lastRowHeight}
          isPressed={pressedKeys.has("Control")}
        />
      </div>

      {/* Arrow Keys */}
      <div>
        <div className="row">
          <Key
            icon={arrowUpIcon}
            iconWidth={12}
            iconHeight={12}
            width={60}
            height={arrowKeyHeight}
            isPressed={pressedKeys.has("ArrowUp")}
          />
        </div>
        <div className="row">
          <Key
            icon={arrowLeftIcon}
            iconWidth={12}
            iconHeight={12}
            width={60}
            height={arrowKeyHeight}
            isPressed={pressedKeys.has("ArrowLeft")}
          />
          <Key
            icon={arrowDownIcon}
            iconWidth={12}
            iconHeight={12}
            width={60}
            height={arrowKeyHeight}
            isPressed={pressedKeys.has("ArrowDown")}
          />
          <Key
            icon={arrowRightIcon}
            iconWidth={12}
            iconHeight={12}
            width={60}
            height={arrowKeyHeight}
            isPressed={pressedKeys.has("ArrowRight")}
          />
        </div>
      </div>
    </div>
  );
};

export default VirtualKeyboard;
