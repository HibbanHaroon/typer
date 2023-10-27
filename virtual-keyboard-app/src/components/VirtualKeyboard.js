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
          texts={["ESC", ""]}
          width={65}
          height={firstRowHeight}
          color={pressedKeys.has("Escape") ? "blue" : "#ccc"}
        />
        {Array.from({ length: 12 }, (_, index) => (
          <Key
            key={`F${index + 1}`}
            texts={[`F${index + 1}`, ""]}
            width={55}
            height={firstRowHeight}
            color={pressedKeys.has(`F${index + 1}`) ? "blue" : "#ccc"}
          />
        ))}
        <Key
          texts={["PrtScr", ""]}
          width={60}
          height={firstRowHeight}
          color={pressedKeys.has("PrintScreen") ? "blue" : "#ccc"}
        />
        <Key
          texts={["Insert", ""]}
          width={60}
          height={firstRowHeight}
          color={pressedKeys.has("Insert") ? "blue" : "#ccc"}
        />
        <Key
          texts={["Del", ""]}
          width={60}
          height={firstRowHeight}
          color={pressedKeys.has("Delete") ? "blue" : "#ccc"}
        />
      </div>

      {/* Second Row */}
      <div className="row">
        <Key
          texts={["~", "`"]}
          width={62}
          height={keyHeight}
          color={pressedKeys.has("`") ? "blue" : "#ccc"}
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
            color={pressedKeys.has(texts[1]) ? "blue" : "#ccc"}
          />
        ))}
        <Key
          texts={["Backspace"]}
          width={117}
          height={keyHeight}
          color={pressedKeys.has("Backspace") ? "blue" : "#ccc"}
        />
      </div>
      
      <div className="row">
        {/* Third Row */}
        <Key
          texts={["Tab", ""]}
          width={102}
          height={keyHeight}
          color={pressedKeys.has("Tab") ? "blue" : "#ccc"}
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
            color={
              pressedKeys.has(texts[1].toLowerCase()) ||
              pressedKeys.has(texts[1].toUpperCase())
                ? "blue"
                : "#ccc"
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
          color={pressedKeys.has("CapsLock") ? "blue" : "#ccc"}
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
          [";", ":"],
          ['"', "'"],
        ].map((texts, index) => (
          <Key
            key={index}
            texts={texts}
            width={63}
            height={keyHeight}
            color={
              pressedKeys.has(texts[1].toLowerCase()) ||
              pressedKeys.has(texts[1].toUpperCase())
                ? "blue"
                : "#ccc"
            }
          />
        ))}
        <Key
          texts={["Enter"]}
          width={118}
          height={keyHeight}
          color={pressedKeys.has("Enter") ? "blue" : "#ccc"}
        />
      </div>

      <div className="row">
        {/* Fifth Row */}
        <Key
          texts={["Shift", ""]}
          width={155}
          height={keyHeight}
          color={pressedKeys.has("Shift") ? "blue" : "#ccc"}
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
            color={
              pressedKeys.has(texts[1].toLowerCase()) ||
              pressedKeys.has(texts[1].toUpperCase())
                ? "blue"
                : "#ccc"
            }
          />
        ))}

        <Key
          texts={["Shift", ""]}
          width={155}
          height={keyHeight}
          color={pressedKeys.has("Shift") ? "blue" : "#ccc"}
        />
      </div>

      <div className="row">
        {/* Sixth Row */}
        <Key
          texts={["Ctrl", ""]}
          width={80}
          height={lastRowHeight}
          color={pressedKeys.has("Control") ? "blue" : "#ccc"}
        />
        <Key
          texts={["Fn", ""]}
          width={60}
          height={lastRowHeight}
          color={pressedKeys.has("Fn") ? "blue" : "#ccc"}
        />
        <Key
          icon={windowsIcon}
          iconWidth={24}
          iconHeight={24}
          width={80}
          height={lastRowHeight}
          color={pressedKeys.has("Meta") ? "blue" : "#ccc"}
        />
        <Key
          texts={["Alt", ""]}
          width={60}
          height={lastRowHeight}
          color={pressedKeys.has("Alt") ? "blue" : "#ccc"}
        />
        <Key
          texts={["", ""]}
          width={358}
          height={lastRowHeight}
          color={pressedKeys.has("Space") ? "blue" : "#ccc"}
        />
        <Key
          texts={["Alt", ""]}
          width={60}
          height={lastRowHeight}
          color={pressedKeys.has("Alt") ? "blue" : "#ccc"}
        />
        <Key
          texts={["Ctrl", ""]}
          width={80}
          height={lastRowHeight}
          color={pressedKeys.has("Control") ? "blue" : "#ccc"}
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
            color={pressedKeys.has("ArrowUp") ? "blue" : "#ccc"}
          />
        </div>
        <div className="row">
          <Key
            icon={arrowLeftIcon}
            iconWidth={12}
            iconHeight={12}
            width={60}
            height={arrowKeyHeight}
            color={pressedKeys.has("ArrowLeft") ? "blue" : "#ccc"}
          />
          <Key
            icon={arrowDownIcon}
            iconWidth={12}
            iconHeight={12}
            width={60}
            height={arrowKeyHeight}
            color={pressedKeys.has("ArrowDown") ? "blue" : "#ccc"}
          />
          <Key
            icon={arrowRightIcon}
            iconWidth={12}
            iconHeight={12}
            width={60}
            height={arrowKeyHeight}
            color={pressedKeys.has("ArrowRight") ? "blue" : "#ccc"}
          />
        </div>
      </div>
    </div>
  );
};

export default VirtualKeyboard;
